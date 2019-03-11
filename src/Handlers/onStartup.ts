import { extensions, ExtensionContext } from 'vscode';
import { State } from './State';
import { onTokenColorsChanged } from './onTokenColorsChanged';
import { onWalColorsChanged } from './onWalColorsChanged';
import {
  generateColorTheme,
  isThemeConfig,
  generateTokenColors,
} from '../ThemeGenerator';
import {
  availableThemes,
  fetchWalColors,
  loadTheme,
  persistTheme,
} from './utils';

export const onStartup = async (ctx: ExtensionContext) => {
  const state = new State(ctx);

  state.themes = await availableThemes(extensions.all);

  const [walColors, themes, startupTheme] = await Promise.all([
    fetchWalColors(),
    availableThemes(extensions.all),
    loadTheme(state.walThemePath),
  ]);

  state.walColorTheme = generateColorTheme(walColors);
  state.tokenColors = generateTokenColors(walColors);
  state.themes = themes;
  state.startupTheme =
    startupTheme && isThemeConfig(startupTheme) ? startupTheme : undefined;

  await persistTheme(state);

  return {
    onTokenColorsChanged: onTokenColorsChanged(state),
    onWalColorsChanged: onWalColorsChanged(state),
  };
};
