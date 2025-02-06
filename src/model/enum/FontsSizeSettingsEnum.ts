export enum FontsSizeSettingsEnum {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    EXTRA_LARGE = 4,
}
const fontSizeList = [
    { fontSize0: "7px", fontSize1: "10px", fontSize2: "20px" },
    { fontSize0: "8px", fontSize1: "11px", fontSize2: "22px"  },
    { fontSize0: "9px", fontSize1: "12px", fontSize2: "24px"  },
    { fontSize0: "10px", fontSize1: "13px", fontSize2: "26px" },
];
export function switchToFontSize(size: FontsSizeSettingsEnum) { 
    return fontSizeList[size-1];
}