import { ExtensionContext } from 'vscode';
import {
  ColorOptions,
  TokenColor,
  Theme,
  ThemeConfig,
} from '../../ThemeGenerator';

const relativeWalThemePath = './themes/wal.json';

export class State {
  readonly walThemePath: string;
  walColorTheme: ColorOptions;
  tokenColors: Array<TokenColor>;
  themes: Map<string, Theme>;
  startupTheme?: ThemeConfig;

  constructor(ctx: ExtensionContext) {
    this.walThemePath = ctx.asAbsolutePath(relativeWalThemePath);
    this.walColorTheme = {};
    this.tokenColors = [];
    this.themes = new Map();
  }

  walTheme(): ThemeConfig {
    const { walColorTheme, tokenColors } = this;

    return {
      name: 'Wal',
      colors: { ...walColorTheme },
      tokenColors,
    };
  }
}
