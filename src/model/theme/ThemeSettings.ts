type ThemeSettings = {
    color: {
            font: {
                fontMainColor: string,
                fontSecondary0Color: string,
                fontSecondary1Color: string,
                fontMainHoverColor: string,
                fontSecondary0HoverColor: string,
                fontSecondary1HoverColor: string
            },
            main: {
                backgroundLinear0Color: string,
                backgroundLinear1Color: string,
                svgPath0Color: string,
                svgPath1Color: string,
                button0Color: string,
                button1Color: string,
                button1SecondaryColor: string,
            },
            page: {
                backgroundColor: string,
                backgroundSecondary0Color: string,
                backgroundSecondary1Color: string,
                svgPath0Color: string,
                button0Color: string
            }
        }
};