import { CustomerSettingsThemeEnum } from "@/model/CustomerSettings";

export function themeSwitch(themeEnum: CustomerSettingsThemeEnum): ThemeSettings { 
    
    
    switch (themeEnum) { 
        case CustomerSettingsThemeEnum.LIGHT:
            return {
                color: {
                    font: {
                        fontMainColor: "#051A57",
                        fontSecondary0Color: "#FFFFFF",
                        fontSecondary1Color: "#3538F5",
                        fontMainHoverColor: "#051A57",
                        fontSecondary0HoverColor: "#FFFFFF",
                        fontSecondary1HoverColor: "#3538F5"
                    },
                    main: {
                        backgroundLinear0Color: "#6C9FD3",
                        backgroundLinear1Color: "#F5F5F5",
                        svgPath0Color: "#4867C1",
                        svgPath1Color: "#FFFFFF",
                        button0Color: "#051A57",
                        button1Color: "#3538F5",
                        button1SecondaryColor: "#DBECFD",
                    },
                    page: {
                        backgroundColor: "#FFFFFF",
                        backgroundSecondary0Color: "#1E1E1E",
                        backgroundSecondary1Color: "#DBECFD",
                        svgPath0Color: "#8BB8E8",
                        button0Color: "#B7D9FC"
                    }
                }
            };
        case CustomerSettingsThemeEnum.DARK:
            return {
                color: {
                    font: {
                        fontMainColor: "#051A57",
                        fontSecondary0Color: "#FFFFFF",
                        fontSecondary1Color: "#3538F5",
                        fontMainHoverColor: "#051A57",
                        fontSecondary0HoverColor: "#FFFFFF",
                        fontSecondary1HoverColor: "#3538F5"
                    },
                    main: {
                        backgroundLinear0Color: "#6C9FD3",
                        backgroundLinear1Color: "#F5F5F5",
                        svgPath0Color: "#4867C1",
                        svgPath1Color: "#FFFFFF",
                        button0Color: "#051A57",
                        button1Color: "#3538F5",
                        button1SecondaryColor: "#DBECFD",
                    },
                    page: {
                        backgroundColor: "#FFFFFF",
                        backgroundSecondary0Color: "#1E1E1E",
                        backgroundSecondary1Color: "#DBECFD",
                        svgPath0Color: "#8BB8E8",
                        button0Color: "#B7D9FC"
                    }
                }
            };
        case CustomerSettingsThemeEnum.CITY:
            return {
                color: {
                    font: {
                        fontMainColor: "#051A57",
                        fontSecondary0Color: "#FFFFFF",
                        fontSecondary1Color: "#3538F5",
                        fontMainHoverColor: "#051A57",
                        fontSecondary0HoverColor: "#FFFFFF",
                        fontSecondary1HoverColor: "#3538F5"
                    },
                    main: {
                        backgroundLinear0Color: "#6C9FD3",
                        backgroundLinear1Color: "#F5F5F5",
                        svgPath0Color: "#4867C1",
                        svgPath1Color: "#FFFFFF",
                        button0Color: "#051A57",
                        button1Color: "#3538F5",
                        button1SecondaryColor: "#DBECFD",
                    },
                    page: {
                        backgroundColor: "#FFFFFF",
                        backgroundSecondary0Color: "#1E1E1E",
                        backgroundSecondary1Color: "#DBECFD",
                        svgPath0Color: "#8BB8E8",
                        button0Color: "#B7D9FC"
                    }
                }
            };
        default:
            return {
                color: {
                    font: {
                        fontMainColor: "#051A57",
                        fontSecondary0Color: "#FFFFFF",
                        fontSecondary1Color: "#3538F5",
                        fontMainHoverColor: "#051A57",
                        fontSecondary0HoverColor: "#FFFFFF",
                        fontSecondary1HoverColor: "#3538F5"
                    },
                    main: {
                        backgroundLinear0Color: "#6C9FD3",
                        backgroundLinear1Color: "#F5F5F5",
                        svgPath0Color: "#4867C1",
                        svgPath1Color: "#FFFFFF",
                        button0Color: "#051A57",
                        button1Color: "#3538F5",
                        button1SecondaryColor: "#DBECFD",
                    },
                    page: {
                        backgroundColor: "#FFFFFF",
                        backgroundSecondary0Color: "#1E1E1E",
                        backgroundSecondary1Color: "#DBECFD",
                        svgPath0Color: "#8BB8E8",
                        button0Color: "#B7D9FC"
                    }
                }
            };
    }
}