export enum FontsTypeSettingsEnum {
    ROBOTO = 1,
    LOBSTER = 2,
    OPEN_SANS = 3,
    ARIAL = 4,
    GEORGIA = 5,
    COURIER_NEW = 6,
}
export const fontList = [
  { name: 'Roboto', fontFamily: 'Roboto, sans-serif' },
  { name: 'Lobster', fontFamily: 'Lobster, cursive' },
  { name: 'Open Sans', fontFamily: 'Open Sans, sans-serif' },
  { name: 'Arial', fontFamily: 'Arial, sans-serif' },
  { name: 'Georgia', fontFamily: 'Georgia, serif' },
  { name: 'Courier New', fontFamily: 'Courier New, monospace' },
];

export function switchToFontFamily(font: FontsTypeSettingsEnum) { 
  
  return fontList[font-1].fontFamily;
}