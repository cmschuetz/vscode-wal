import { QuickPickItem, window } from 'vscode';
import { State } from './State';
import { isTextMateTheme } from '../ThemeGenerator';
import { checkAndAttemptReload } from './utils';

export const onSelectTokenColorTheme = (state: State) => async () => {
  let timeout: NodeJS.Timer;
  const { tokenColorTheme } = state.config;

  const onDidSelectItem = (item: QuickPickItem) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      state.config.update('tokenColorTheme', item.label);
    }, 250);
  };

  const items = [...state.themes.entries()].map(
    ([themeName, theme]): QuickPickItem => ({
      label: themeName,
      description: isTextMateTheme(theme) ? '(requires restart)' : undefined,
    })
  );

  state.openThemePicker();

  const chosenTheme = await window.showQuickPick(items, {
    onDidSelectItem,
  });

  state.closeThemePicker();

  const newTheme = chosenTheme ? chosenTheme.label : tokenColorTheme;
  await state.config.update('tokenColorTheme', newTheme);
  checkAndAttemptReload(state);
};
