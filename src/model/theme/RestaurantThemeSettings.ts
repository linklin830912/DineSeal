export type RestaurantThemeSettings = {
    main: {
        colorThemeEnum: number,
        fontType: number,
        fontSize: number,
        svgL: number,
        svgS: number,
        startText: string,
    },
    editor: {
        locationText: string,
        takePictureDescription: string,

        haveTitle: boolean,
        titleText: string,
        haveCaptions: boolean,
        captionsText: string,

        feedbackLabel: string,
        ratingLabel: string,
        haveRating: boolean,
        tagsLabel: string,
        tagsText:string,
        haveTags: boolean,
        tags: string[],
        haveAppreciations: boolean,
        appreciationsText: string,

        noticeLabel: string,
        haveNotice: boolean,
        consentQuestionLabel: string,
        consentQuestionAgreeLabel: string,
        haveConsentQuestion: boolean,
    },
    history: {
        displayArrayType: number,
        haveTitle: boolean,
        haveCaption: boolean,
        haveDate: boolean,
    }
};