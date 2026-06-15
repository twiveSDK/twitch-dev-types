import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */
export interface APIAutomodStatus {
    /**
     * The caller-defined ID passed in the request.
     */
    msg_id: string;
    /**
     * A Boolean value that indicates whether Twitch would approve the message for chat
     * or hold it for moderator review or block it from chat.
     *
     * @remarks Is **true** if Twitch would approve the message; otherwise, **false* if Twitch would hold the message
     * for moderator review or block it from chat.
     */
    is_permitted: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */
export interface RESTPostAutomodStatusRequestParams {
    /**
     * The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */
export interface RESTPostAutomodStatusRequestBodyData {
    /**
     * A caller-defined ID used to correlate this message with the same message in the response.
     */
    msg_id: string;
    /**
     * The message to check.
     */
    msg_text: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */
export interface RESTPostAutomodStatusRequestBody {
    /**
     * The list of messages to check.
     *
     * @remarks The list must contain at least one message and may contain up to a maximum of 100 messages.
     */
    data: RESTPostAutomodStatusRequestBodyData[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
 */
export interface RESTPostAutomodStatusResponse extends APIResponse<APIAutomodStatus> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages
 */
export enum RESTPostAutomodMessageHeldActionRequestBodyParam {
    Allow = "ALLOW",
    Deny = "DENY",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages
 */
export interface RESTPostAutomodMessagesHeldRequestBody {
    /**
     * The moderator who is approving or denying the held message.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
    /**
     * The ID of the message to allow or deny.
     */
    msg_id: string;
    /**
     * The action to take for the message.
     */
    action: RESTPostAutomodMessageHeldActionRequestBodyParam;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-automod-settings
 */
export interface APIAutomodSettings {
    /**
     * The broadcaster’s ID.
     */
    broadcaster_id: string;
    /**
     * The moderator’s ID.
     */
    moderator_id: string;
    /**
     * The default AutoMod level for the broadcaster.
     *
     * @remarks This field is **null** if the broadcaster has set one or more of the individual settings.
     */
    overall_level: number|null;
    /**
     * The Automod level for discrimination against disability.
     */
    disability: number;
    /**
     * The Automod level for hostility involving aggression.
     */
    aggression: number;
    /**
     * The AutoMod level for discrimination based on sexuality, sex, or gender.
     */
    sexuality_sex_or_gender: number;
    /**
     * The Automod level for discrimination against women.
     */
    misogyny: number;
    /**
     * The Automod level for hostility involving name-calling or insults.
     */
    bullying: number;
    /**
     * The Automod level for profanity.
     */
    swearing: number;
    /**
     * The Automod level for racial discrimination.
     */
    race_ethnicity_or_religion: number;
    /**
     * The Automod level for sexual content.
     */
    sex_based_terms: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-automod-settings
 */
export interface RESTGetAutomodSettingsRequestParams {
    /**
     * The ID of the broadcaster whose AutoMod settings you want to get.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-automod-settings
 */
export interface RESTGetAutomodSettingsResponse extends APIResponse<APIAutomodSettings> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-automod-settings
 */
export interface RESTPutAutomodSettingsRequestParams {
    /**
     * The ID of the broadcaster whose AutoMod settings you want to update.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-automod-settings
 */
export interface RESTPutAutomodSettingsRequestBody {
    /**
     * The Automod level for hostility involving aggression.
     */
    aggression?: number;
    /**
     * The Automod level for hostility involving name-calling or insults.
     */
    bullying?: number;
    /**
     * The Automod level for discrimination against disability.
     */
    disability?: number;
    /**
     * The Automod level for discrimination against women.
     */
    misogyny?: number;
    /**
     * The default AutoMod level for the broadcaster.
     */
    overall_level?: number;
    /**
     * The Automod level for racial discrimination.
     */
    race_ethnicity_or_religion?: number;
    /**
     * The Automod level for sexual content.
     */
    sex_based_terms?: number;
    /**
     * The AutoMod level for discrimination based on sexuality, sex, or gender.
     */
    sexuality_sex_or_gender: number;
    /**
     * The Automod level for profanity.
     */
    swearing?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-automod-settings
 */
export interface RESTPutAutomodSettingsResponse extends APIResponse<APIAutomodSettings> {}
