import { State } from './State';
import { fetchWalColors, persistTheme } from './utils';
import { generateColorTheme } from '../ThemeGenerator';

export const onWalColorsChanged = (state: State) => async () => {
  const walColors = await fetchWalColors();
  const walColorTheme = generateColorTheme(walColors);
  state.walColorTheme = walColorTheme;
  await persistTheme(state);
};
