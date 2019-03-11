import { window } from 'vscode';

enum ColorsNotFoundOptions {
  Retry = 'Retry',
}

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
