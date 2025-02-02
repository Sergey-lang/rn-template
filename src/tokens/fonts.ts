import { isIOS } from '../utils/platform.ts';

export const fontFamilies = {
  INTER: {
    normal: isIOS() ? 'Inter 28pt Light' : 'Inter28ptLight',
    medium: isIOS() ? 'Inter 28pt Medium' : 'Inter28ptMedium',
    bold: isIOS() ? 'Inter 28pt Bold' : 'Inter28ptBold',
  },
};

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.INTER;
  return selectedFontFamily[weight];
};
