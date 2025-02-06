import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { ColorThemeSettings } from "@/model/theme/ColorThemeSettings";

export function themeSwitch(themeEnum: ColorThemeSettingsEnum): ColorThemeSettings {    
    
    switch (themeEnum) { 
        case ColorThemeSettingsEnum.DARK:
            return {
                        backgroundColor0: "#001433",
                        backgroundColor1: "#3d5f94",
                        backgroundColor2: "#d6e6ff",
                        buttonColor0: "#4675bd",
                        buttonColor1: "#134694",
                        buttonColor2: "#46628c",
                        svgFillColor0: "#97bffc",
                        svgFillColor1: "#6b97db",
                        svgStrokeColor0: "#132c54",
                        svgStrokeColor1: "#799fdb",
                        fontColor0: "#ffffff",
                        fontColor1: "#001433",
                    };
        case ColorThemeSettingsEnum.DREAM:
            return {
                        backgroundColor0: "#f6bdff",
                        backgroundColor1: "#a0dce8",
                        backgroundColor2: "#fffef0",
                        buttonColor0: "#84c4c1",
                        buttonColor1: "#b33fe0",
                        buttonColor2: "#dedcb1",
                        svgFillColor0: "#f9edff",
                        svgFillColor1: "#ccb3f5",
                        svgStrokeColor0: "#653d94",
                        svgStrokeColor1: "#b2a5c7",
                        fontColor0: "#ffffff",
                        fontColor1: "#183236",
                    };
        default: // LIGHT
            return {
                        backgroundColor0: "#bfb793",
                        backgroundColor1: "#ffed9c",
                        backgroundColor2: "#ffffff",
                        buttonColor0: "#a18300",
                        buttonColor1: "#d1ab02",
                        buttonColor2: "#c9c7b3",

                        svgFillColor0: "#bfaf21",
                        svgFillColor1: "#fff700",
                        svgStrokeColor0: "#a18300",
                        svgStrokeColor1: "white",

                        fontColor0: "#ffffff",
                        fontColor1: "#403c22",
                    };
    }
}