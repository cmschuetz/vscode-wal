import * as path from 'path';
import { ExtensionContext } from 'vscode';
import {
  ColorOptions,
  Theme,
  ThemeConfig,
  isThemeConfig,
} from '../../ThemeGenerator';
import { WalConfig } from './config';

const relativeWalThemePath = './themes/wal.json';

export class State {
  readonly walThemePath: string;
  readonly config: WalConfig;
  private themePickerOpen: boolean;
  walColorTheme: ColorOptions;
  themes: Map<string, Theme>;
  startupTheme?: ThemeConfig;

  constructor(ctx: ExtensionContext) {
    this.walThemePath = ctx.asAbsolutePath(relativeWalThemePath);
    this.walColorTheme = {};
    this.themes = new Map();
    this.config = new WalConfig();
    this.themePickerOpen = false;
  }

  get tokenColorTheme() {
    return this.themes.get(this.config.tokenColorTheme);
  }

  get tokenColorThemeConfig(): Pick<ThemeConfig, 'colors' | 'tokenColors'> {
    const { tokenColorTheme } = this;

    if (!tokenColorTheme) {
      return { colors: {}, tokenColors: undefined };
    }

    if (isThemeConfig(tokenColorTheme)) {
      return tokenColorTheme;
    }

    return {
      colors: {},
      tokenColors: this.tokenColorThemePath(tokenColorTheme),
    };
  }

  tokenColorThemePath(tokenColorTheme: string) {
    return path.relative(path.dirname(this.walThemePath), tokenColorTheme);
  }

  reloadNeeded(): boolean {
    const { tokenColorTheme, startupTheme, themePickerOpen } = this;

    if (themePickerOpen) {
      return false;
    }

    if (!tokenColorTheme || isThemeConfig(tokenColorTheme)) {
      return false;
    }

    if (
      startupTheme &&
      startupTheme.tokenColors === this.tokenColorThemePath(tokenColorTheme)
    ) {
      return false;
    }

    return true;
  }

  walTheme(): ThemeConfig {
    const { tokenColorThemeConfig, walColorTheme } = this;
    const { tokenColors, colors } = tokenColorThemeConfig;

    return {
      name: 'Wal',
      colors: { ...colors, ...walColorTheme },
      tokenColors,
    };
  }

  openThemePicker() {
    this.themePickerOpen = true;
  }

  closeThemePicker() {
    this.themePickerOpen = false;
  }
}
