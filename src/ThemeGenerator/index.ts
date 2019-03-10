import {
  Theme,
  ThemeConfig,
  WalColors,
  BaseColors,
  InputColors,
  IntegratedTerminalColors,
  ActivityBarColors,
  SideBarColors,
  StatusBarColors,
  EditorColors,
  EditorGroupColors,
  ColorOptions,
  TabColors,
  ListsAndTreesColors,
  GitColors,
} from './types';

function shadeColor(col: string, amt: number) {
  function curb(val: number) {
    val = Math.min(255, val);
    val = Math.max(0, val);
    return val;
  }
  col = col.slice(1);

  let R = parseInt(col.substring(0, 2), 16);
  let G = parseInt(col.substring(2, 4), 16);
  let B = parseInt(col.substring(4, 6), 16);

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  let RR = curb(R + amt).toString(16);
  let GG = curb(G + amt).toString(16);
  let BB = curb(B + amt).toString(16);

  RR = RR.length === 1 ? '0' : '' + RR;
  GG = GG.length === 1 ? '0' : '' + GG;
  BB = BB.length === 1 ? '0' : '' + BB;

  return '#' + RR + GG + BB;
}

export { Theme, ThemeConfig, ColorOptions, WalColors } from './types';

export const isTextMateTheme = (theme: Theme): theme is string =>
  typeof theme === 'string';

export const isThemeConfig = (theme: Theme): theme is ThemeConfig =>
  !isTextMateTheme(theme);

const baseColors = (walColors: WalColors): BaseColors => ({
  focusBorder: walColors.colors.color12,
  foreground: walColors.special.foreground,
  'widget.shadow': walColors.colors.color8,
  'selection.background': walColors.colors.color1,
  descriptionForeground: walColors.colors.color4,
  errorForeground: walColors.colors.color1,
});

const inputColors = (walColors: WalColors): InputColors => ({
  'input.background': walColors.colors.color0,
  'input.foreground': walColors.colors.color7,
  'input.placeholderForeground': walColors.colors.color8,
  'inputOption.activeBorder': walColors.colors.color12,
  'inputValidation.errorBackground': walColors.colors.color1,
  'inputValidation.errorBorder': walColors.colors.color9,
  'inputValidation.infoBackground': walColors.colors.color4,
  'inputValidation.infoBorder': walColors.colors.color12,
  'inputValidation.warningBackground': walColors.colors.color3,
  'inputValidation.warningBorder': walColors.colors.color11,
});

const listsAndTreesColors = (walColors: WalColors): ListsAndTreesColors => ({
  'list.invalidItemForeground': walColors.colors.color1,
  'list.errorForeground': walColors.colors.color1,
  'list.warningForeground': walColors.colors.color3,
});

const terminalColors = (walColors: WalColors): IntegratedTerminalColors => {
  const { special, colors } = walColors;

  return {
    'terminal.background': special.background,
    'terminal.foreground': special.foreground,
    'terminalCursor.background': special.background,
    'terminalCursor.foreground': special.cursor,
    'terminal.ansiBlack': colors.color0,
    'terminal.ansiRed': colors.color1,
    'terminal.ansiGreen': colors.color2,
    'terminal.ansiYellow': colors.color3,
    'terminal.ansiBlue': colors.color4,
    'terminal.ansiMagenta': colors.color5,
    'terminal.ansiCyan': colors.color6,
    'terminal.ansiWhite': colors.color7,
    'terminal.ansiBrightBlack': colors.color8,
    'terminal.ansiBrightRed': colors.color9,
    'terminal.ansiBrightGreen': colors.color10,
    'terminal.ansiBrightYellow': colors.color11,
    'terminal.ansiBrightBlue': colors.color12,
    'terminal.ansiBrightMagenta': colors.color13,
    'terminal.ansiBrightCyan': colors.color14,
    'terminal.ansiBrightWhite': colors.color15,
  };
};

const activityBarColors = (walColors: WalColors): ActivityBarColors => ({
  'activityBar.background': walColors.special.background,
  'activityBar.foreground': walColors.special.foreground,
});

const sideBarColors = (walColors: WalColors): SideBarColors => ({
  'sideBarSectionHeader.background': walColors.special.background,
  'sideBar.background': walColors.special.background,
  'sideBar.foreground': walColors.special.foreground,
});

const statusBarColors = (walColors: WalColors): StatusBarColors => ({
  'statusBar.background': walColors.colors.color5,
  'statusBar.foreground': walColors.colors.color7,
  'statusBar.debuggingBackground': walColors.colors.color2,
  'statusBar.noFolderBackground': walColors.colors.color2,
});

const tabColors = (walColors: WalColors): TabColors => ({
  'tab.activeBackground': walColors.special.background,
  'tab.activeForeground': walColors.special.foreground,
  'tab.inactiveBackground': shadeColor(walColors.special.background, 30),
  'tab.inactiveForeground': shadeColor(walColors.special.foreground, 30),
});

const editorColors = (walColors: WalColors): EditorColors => ({
  'editor.background': walColors.special.background,
  'editor.foreground': walColors.special.foreground,
  'editorOverviewRuler.modifiedForeground': walColors.colors.color3,
  'editorOverviewRuler.addedForeground': walColors.colors.color2,
  'editorOverviewRuler.deletedForeground': walColors.colors.color1,
  'editorOverviewRuler.warningForeground': walColors.colors.color3,
  'editorOverviewRuler.infoForeground': walColors.colors.color4,
  'editorOverviewRuler.errorForeground': walColors.colors.color1,
  'editorGutter.background': walColors.special.background,
  'editorGutter.modifiedBackground': walColors.colors.color3,
  'editorGutter.addedBackground': walColors.colors.color2,
  'editorGutter.deletedBackground': walColors.colors.color1,
  'editorError.foreground': walColors.colors.color1,
  'editorWarning.foreground': walColors.colors.color3,
  'editorInfo.foreground': walColors.colors.color4,
  'editorHint.foreground': walColors.colors.color2,
});

const editorGroupColors = (walColors: WalColors): EditorGroupColors => ({
  'editorGroupHeader.tabsBackground': shadeColor(
    walColors.special.background,
    20
  ),
});

const gitColors = (walColors: WalColors): GitColors => ({
  'gitDecoration.modifiedResourceForeground': walColors.colors.color3,
  'gitDecoration.deletedResourceForeground': walColors.colors.color1,
  'gitDecoration.untrackedResourceForeground': walColors.colors.color2,
});

export const generateColorTheme = (walColors: WalColors): ColorOptions => {
  const mappers = [
    baseColors,
    inputColors,
    listsAndTreesColors,
    terminalColors,
    activityBarColors,
    sideBarColors,
    statusBarColors,
    tabColors,
    editorColors,
    editorGroupColors,
    gitColors,
  ];

  return mappers.reduce(
    (acc, mapper) => Object.assign(acc, mapper(walColors)),
    {}
  );
};
