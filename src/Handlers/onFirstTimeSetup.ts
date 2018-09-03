import { workspace } from 'vscode';
import { State } from './State';

export const onFirstTimeSetup = async (state: State) => {
  const currentColorTheme = workspace.getConfiguration('workbench').colorTheme;
  await state.config.update('tokenColorTheme', currentColorTheme);
};
