import { State } from './State';
import { persistTheme } from './utils';

export const onTokenColorsChanged = (state: State) => async () => {
  await persistTheme(state);
};
