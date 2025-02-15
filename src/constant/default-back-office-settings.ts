import { ColorThemeSettingsEnum } from "@/model/enum/ColorThemeSettingsEnum";
import { DisplayArrayTypeEnum } from "@/model/enum/DisplayArrayTypeEnum";
import { FontsSizeSettingsEnum } from "@/model/enum/FontsSizeSettingsEnum";
import { FontsTypeSettingsEnum } from "@/model/enum/FontsTypeSettingsEnum";
import { SVGTypesSettingsEnum } from "@/model/enum/SVGTypesSettingsEnum";
import { RestaurantThemeSettings } from "@/model/theme/RestaurantThemeSettings";

export const DEFAULT_RESTAURANT_THEME_SETTINGS = {
    main: {
        colorThemeEnum: ColorThemeSettingsEnum.LIGHT,
        fontType: FontsTypeSettingsEnum.ARIAL,
        fontSize: FontsSizeSettingsEnum.SMALL,
        svgL: SVGTypesSettingsEnum.STAR,
        svgS: SVGTypesSettingsEnum.STAR,
        startText: 'START!'
    },
    editor: {
        locationText: "MY RESTAURANT",
        takePictureDescription: "Take a picture of your meal!",
        haveTitle: true,
        titleText: "TITLE",
        haveCaptions: true,
        captionsText: "Caption your memory?",
        feedbackLabel: "FEEDBACK",
        ratingLabel: "RATING",
        haveRating: true,
        tagsLabel: "TAGS",
        tagsText: "Tag what you eat?",
        haveTags: true,
        tags: [""] as string[],
        haveAppreciations: true,
        appreciationsLabel:"APPRECTIONS",
        appreciationsText: "What do you want to say to us?",
        noticeLabel: "WE MIGHT USE THIS INTO FOR OUR SOCIAL MEDIA",
        haveNotice: true,
        consentQuestionLabel: "You may be featured on the restaurant's IG account\n Do you consent sharing your username, photo, and feedback?",
        consentQuestionAgreeLabel: "AGREE",
        haveConsentQuestion: true
    },
    history: {
        displayArrayType: DisplayArrayTypeEnum.ONE,
        haveTitle: true,
        haveCaption: true,
        haveDate: true
    }
} as RestaurantThemeSettings;