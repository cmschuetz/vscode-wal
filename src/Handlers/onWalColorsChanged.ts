import { State } from './State';
import { fetchWalColors, persistTheme } from './utils';
import { generateColorTheme, generateTokenColors } from '../ThemeGenerator';
export const onWalColorsChanged = (state: State) => async () => {
  const walColors = await fetchWalColors();
  state.walColorTheme = generateColorTheme(walColors);
  state.tokenColors = generateTokenColors(walColors);
  await persistTheme(state);
};
