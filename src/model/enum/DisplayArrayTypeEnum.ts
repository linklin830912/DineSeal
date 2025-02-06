export enum DisplayArrayTypeEnum { 
    ONE = 1,
    TWO = 2,
}
export function switchDisplayArrayType(array: DisplayArrayTypeEnum) { 
    switch (array) { 
        case DisplayArrayTypeEnum.ONE: return "100%";
        default: return "50%";
    }
}