import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { commands, Extension, workspace } from 'vscode';
import promisify from 'util.promisify';
import stripJsonComments from 'strip-json-comments';
import { State } from './State';
import { showReloadPrompt } from './messages';
import { ColorOptions, ThemeConfig, Theme, WalColors } from '../ThemeGenerator';
import { ThemeExtension } from './types';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const reloadCmd = 'workbench.action.reloadWindow';
export const reloadWindow = () => commands.executeCommand(reloadCmd);

export const walColorsPath = path.join(
  os.homedir(),
  '.cache',
  'wal',
  'colors.json'
);

export const checkAndAttemptReload = (state: State) => {
  const { autoReload } = state.config;

  if (!state.reloadNeeded()) {
    return;
  }

  if (autoReload) {
    return reloadWindow();
  }

  return showReloadPrompt();
};

export const updateColorCustomizations = async (walColors: ColorOptions) => {
  await mergeConfig('workbench', 'colorCustomizations', { '[Wal]': walColors });
};

const updateTokenColorCustomizations = async (tokenColors?: {} | string) => {
  const newConfig =
    typeof tokenColors === 'object'
      ? { textMateRules: tokenColors }
      : undefined;

  await mergeConfig('editor', 'tokenColorCustomizations', {
    '[Wal]': newConfig,
  });
};

const updateThemeFile = async (walThemePath: string, walTheme: ThemeConfig) => {
  return await writeFile(walThemePath, JSON.stringify(walTheme, null, 2));
};

export const persistTheme = async (state: State) => {
  const theme = state.walTheme();

  await Promise.all([
    updateColorCustomizations(theme.colors),
    updateTokenColorCustomizations(theme.tokenColors),
    updateThemeFile(state.walThemePath, theme),
  ]);
};

export const loadTheme = async (
  themePath: string
): Promise<Theme | undefined> => {
  switch (path.extname(themePath)) {
    case '.json':
      try {
        return JSON.parse(stripJsonComments(await readFile(themePath, 'utf8')));
      } catch (e) {
        console.error(`Unable to load theme from path: ${themePath}`);
        return;
      }
    default:
      return themePath;
  }
};

const contributesTheme = (
  extension: Extension<any>
): extension is ThemeExtension =>
  typeof extension.packageJSON === 'object' &&
  typeof extension.packageJSON.contributes === 'object' &&
  Array.isArray(extension.packageJSON.contributes.themes) &&
  extension.packageJSON.contributes.themes.every(
    (theme: any) =>
      typeof theme === 'object' &&
      typeof theme.label === 'string' &&
      typeof theme.path === 'string'
  );

export const availableThemes = async (
  extensions: Extension<any>[]
): Promise<Map<string, Theme>> => {
  const themePaths = extensions
    .filter(contributesTheme)
    .reduce((paths, ext) => {
      ext.packageJSON.contributes.themes.forEach(theme => {
        paths.set(theme.label, path.resolve(ext.extensionPath, theme.path));
      });
      return paths;
    }, new Map<string, string>());

  const themes = await Promise.all(
    [...themePaths].map(
      async ([label, themePath]): Promise<[string, Theme | undefined]> => [
        label,
        await loadTheme(themePath),
      ]
    )
  );

  const validThemes = themes.filter(
    (theme): theme is [string, Theme] => !!theme[1]
  );

  return new Map(validThemes);
};

export const fetchWalColors = async (): Promise<WalColors> => {
  return JSON.parse(await readFile(walColorsPath, 'utf8'));
};

export const mergeConfig = async (
  namespace: string,
  section: string,
  value: object
) => {
  const configNamespace = workspace.getConfiguration(namespace);

  const mergedConfig = {
    ...configNamespace.get(section),
    ...value,
  };

  const newConfig = Object.values(mergedConfig).every(
    confVal => confVal === undefined
  )
    ? undefined
    : mergedConfig;

  await configNamespace.update(section, newConfig, true);
};
