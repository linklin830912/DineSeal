export enum CustomerSettingsThemeEnum { 
    LIGHT = 0,
    DARK = 1,
    CITY = 2,
}
export type CustomerSettings = {
    theme: CustomerSettingsThemeEnum
};