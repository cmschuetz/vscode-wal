import { workspace, WorkspaceConfiguration } from 'vscode';

const configNamespace = 'wal';

export enum ConfigOptions {
  autoReload = 'autoReload',
  tokenColorTheme = 'tokenColorTheme',
}

export interface WalConfiguration extends WorkspaceConfiguration {
  [ConfigOptions.autoReload]: boolean;
  [ConfigOptions.tokenColorTheme]: string;
}

const getConfig = (): WalConfiguration =>
  <WalConfiguration>workspace.getConfiguration(configNamespace);

export class WalConfig {
  get [ConfigOptions.tokenColorTheme]() {
    return getConfig()[ConfigOptions.tokenColorTheme];
  }

  get [ConfigOptions.autoReload]() {
    return getConfig()[ConfigOptions.autoReload];
  }

  async update(section: keyof typeof ConfigOptions, value: any) {
    await getConfig().update(section, value, true);
  }
}
