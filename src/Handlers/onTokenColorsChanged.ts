import { State } from './State';
import { persistTheme, checkAndAttemptReload } from './utils';

export const onTokenColorsChanged = (state: State) => async () => {
  await persistTheme(state);
  checkAndAttemptReload(state);
};
