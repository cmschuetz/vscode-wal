import { window } from 'vscode';
import { reloadWindow } from './utils';

enum ReloadOptions {
  Reload = 'Reload',
  Later = 'Later',
}

enum ColorsNotFoundOptions {
  Retry = 'Retry',
}

export const showReloadPrompt = async () => {
  const response = await window.showInformationMessage(
    'Wal token theme has been updated and a TextMate theme has been chosen. Please reload window for changes to take effect',
    ...Object.values(ReloadOptions)
  );

  switch (response) {
    case ReloadOptions.Reload:
      return reloadWindow();
  }
};

export const showColorsNotFoundError = async (onRetry: () => any) => {
  const response = await window.showErrorMessage(
    'Wal colors not found, please generate a theme first',
    ...Object.values(ColorsNotFoundOptions)
  );

  switch (response) {
    case ColorsNotFoundOptions.Retry:
      onRetry();
  }
};
