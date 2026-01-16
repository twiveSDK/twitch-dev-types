import type {APIResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#modify-channel-information
 */
export interface APIContentClassificationLabelSettings {
    /**
     * ID of the {@link https://help.twitch.tv/s/article/content-classification-labels Content Classification Labels}
     * that must be added/removed from the channel.
     */
    id: APIContentClassificationLabelId;
    /**
     * Boolean flag indicating whether the label should be enabled (true) or disabled for the channel.
     */
    is_enabled: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#modify-channel-information
 */
export enum APIContentClassificationLabelId {
    /**
     * Discussions or debates about politics or sensitive social issues such as elections, civic integrity,
     * military conflict, and civil rights.
     */
    DebatedSocialIssuesAndPolitics = "DebatedSocialIssuesAndPolitics",
    /**
     * Excessive tobacco glorification or promotion, any marijuana consumption/use, legal drug and alcohol
     * induced intoxication, discussions of illegal drugs.
     */
    DrugsIntoxication = "DrugsIntoxication",
    /**
     * Content that focuses on sexualized activities, sexual topics, or experiences.
     */
    SexualThemes = "SexualThemes",
    /**
     * Simulations and/or depictions of realistic violence, gore, extreme injury, or death.
     */
    ViolentGraphic = "ViolentGraphic",
    /**
     * Participating in or promoting online or in-person gambling, poker, or fantasy sports that involve the exchange
     * of real money.
     */
    Gambling = "Gambling",
    /**
     * Prolonged and repeated use of obscenities, profanities, and vulgarities, especially as a regular part of speech.
     */
    ProfanityVulgarity = "ProfanityVulgarity",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
 */
export enum APICCLsLocales {
    /**
     * Bulgaria
     */
    BG_BG = "bg-BG",
    /**
     * Czech Republic
     */
    CS_CZ = "cs-CZ",
    /**
     * Denmark
     */
    DA_DK = "da-DK",
    /**
     * German
     */
    DE_DE = "de-DE",
    /**
     * Greece
     */
    EL_GR = "el-GR",
    /**
     * English - United Kingdom
     */
    EN_GB = "en-GB",
    /**
     * English - United States
     */
    EN_US = "en-US",
    /**
     * Spanish - Spain
     */
    ES_ES = "es-ES",
    /**
     * Spanish - Mexico
     */
    ES_MX = "es-MX",
    /**
     * Finland
     */
    FI_FI = "fi-FI",
    /**
     * French
     */
    FR_FR = "fr-FR",
    /**
     * Hungary
     */
    HU_HU = "hu-HU",
    /**
     * Italy
     */
    IT_IT = "it-IT",
    /**
     * Japan
     */
    JA_JP = "ja-JP",
    /**
     * Korea
     */
    KO_KR = "ko-KR",
    /**
     * Netherlands
     */
    NL_NL = "nl-NL",
    /**
     * Norway
     */
    NO_NO = "no-NO",
    /**
     * Poland
     */
    PL_PL = "pl-PL",
    /**
     * Portugal
     */
    PT_BT = "pt-BT",
    /**
     * Portugal
     */
    PT_PT = "pt-PT",
    /**
     * Romania
     */
    RO_RO = "ro-RO",
    /**
     * Russia
     */
    RU_RU = "ru-RU",
    /**
     * Slovakia
     */
    SK_SK = "sk-SK",
    /**
     * Swedish
     */
    SV_SE = "sv-SE",
    /**
     * Thailand
     */
    TH_TH = "th-TH",
    /**
     * Turkey
     */
    TR_TR = "tr-TR",
    /**
     * Vietnam
     */
    VI_VN = "vi-VN",
    /**
     * Chinese - China
     */
    ZH_CN = "zh-CN",
    /**
     * Chinese - Taiwan
     */
    ZH_TW = "zh-TW",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
 */
export interface APIContentClassificationLabel {
    /**
     * Unique identifier for the CCL.
     */
    id: APIContentClassificationLabelId;
    /**
     * Localized description of the CCL.
     */
    description: string;
    /**
     * Localized name of the CCL.
     */
    name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
 */
export interface RESTGetContentClassificationLabelsRequestParams {
    locale?: APICCLsLocales;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
 */
export interface RESTGetContentClassificationLabelsResponse extends APIResponse<APIContentClassificationLabel> {}
