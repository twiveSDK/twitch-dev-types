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
    DebatedSocialIssuesAndPolitics = "DebatedSocialIssuesAndPolitics",
    DrugsIntoxication = "DrugsIntoxication",
    SexualThemes = "SexualThemes",
    ViolentGraphic = "ViolentGraphic",
    Gambling = "Gambling",
    ProfanityVulgarity = "ProfanityVulgarity",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
 */
export enum APICCLsLocales {
    BG_BG = "bg-BG",
    CS_CZ = "cs-CZ",
    DA_DK = "da-DK",
    DE_DE = "de-DE",
    EL_GR = "el-GR",
    EN_GB = "en-GB",
    EN_US = "en-US",
    ES_ES = "es-ES",
    ES_MX = "es-MX",
    FI_FI = "fi-FI",
    FR_FR = "fr-FR",
    HU_HU = "hu-HU",
    IT_IT = "it-IT",
    JA_JP = "ja-JP",
    KO_KR = "ko-KR",
    NL_NL = "nl-NL",
    NO_NO = "no-NO",
    PL_PL = "pl-PL",
    PT_BT = "pt-BT",
    PT_PT = "pt-PT",
    RO_RO = "ro-RO",
    RU_RU = "ru-RU",
    SK_SK = "sk-SK",
    SV_SE = "sv-SE",
    TH_TH = "th-TH",
    TR_TR = "tr-TR",
    VI_VN = "vi-VN",
    ZH_CN = "zh-CN",
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
