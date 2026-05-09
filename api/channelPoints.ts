import type { APIPaginatedResponse, APIResponse, RESTPaginationRequestParams } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APICustomRewardImages {
    /**
     * The URL to a small version of the image.
     */
    url_1x: string;
    /**
     * The URL to a medium version of the image.
     */
    url_2x: string;
    /**
     * The URL to a large version of the image.
     */
    url_4x: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APIBaseCustomRewardSettings {
    /**
     * A Boolean value that determines whether the setting is enabled or not.
     */
    is_enabled: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APICustomRewardMaxPerStreamSettings extends APIBaseCustomRewardSettings {
    /**
     * The maximum number of redemptions allowed per live stream.
     */
    max_per_stream: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APICustomRewardMaxPerUserPerStreamSettings extends APIBaseCustomRewardSettings {
    /**
     * 	The maximum number of redemptions allowed per user per live stream.
     */
    max_per_user_per_stream: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APICustomRewardGlobalCooldownSettings extends APIBaseCustomRewardSettings {
    /**
     * The cooldown period, in seconds.
     */
    global_cooldown_seconds: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-rewards
 */
export interface APICustomReward {
    /**
     * The ID that uniquely identifies the broadcaster.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The ID that uniquely identifies this custom reward.
     */
    id: string;
    /**
     * The title of the reward.
     */
    title: string;
    /**
     * The prompt shown to the viewer when they redeem the reward if user input is required
     * (see the `is_user_input_required` field).
     */
    prompt: string;
    /**
     * The cost of the reward in Channel Points.
     */
    cost: number;
    /**
     * A set of custom images for the reward.
     * 
     * @remarks This field is set to **null** if the broadcaster didn’t upload images.
     */
    image: APICustomRewardImages|null;
    /**
     * A set of default images for the reward.
     */
    default_image: APICustomRewardImages;
    /**
     * The background color to use for the reward. The color is in Hex format (for example, #00E5CB).
     */
    background_color: string;
    /**
     * A Boolean value that determines whether the reward is enabled.
     * 
     * @remarks Is **true** if enabled; otherwise, **false**. Disabled rewards aren’t shown to the user.
     */
    is_enabled: boolean;
    /**
     * A Boolean value that determines whether the user must enter information when redeeming the reward.
     * 
     * @remarks Is **true** if the reward requires user input.
     */
    is_user_input_required: boolean;
    /**
     * The settings used to determine whether to apply a maximum to the number to the redemptions allowed per live
     * stream.
     */
    max_per_stream_setting: APICustomRewardMaxPerStreamSettings;
    /**
     * The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per
     * live stream.
     */
    max_per_user_per_stream_setting: APICustomRewardMaxPerUserPerStreamSettings;
    /**
     * The settings used to determine whether to apply a cooldown period between redemptions and the length of the
     * cooldown.
     */
    global_cooldown_setting: APICustomRewardGlobalCooldownSettings;
    /**
     * A Boolean value that determines whether the reward is currently paused.
     * 
     * @remarks Is **true** if the reward is paused. Viewers can’t redeem paused rewards.
     */
    is_paused: boolean;
    /**
     * A Boolean value that determines whether the reward is currently in stock.
     * 
     * @remarks Is **true** if the reward is in stock. Viewers can’t redeem out of stock rewards.
     */
    is_in_stock: boolean;
    /**
     * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward
     * is redeemed.
     * 
     * @remarks If **false**, status is UNFULFILLED and follows the normal request queue process.
     */
    should_redemptions_skip_request_queue: boolean;
    /**
     * The number of redemptions redeemed during the current live stream. 
     * 
     * @remarks The number counts against the `max_per_stream_setting` limit.
     * This field is **null** if the broadcaster’s stream isn’t live or *max_per_stream_setting* isn’t enabled.
     */
    redemptions_redeemed_current_stream: number;
    /**
     * The timestamp of when the cooldown period expires. 
     * 
     * @remarks Is null if the reward isn’t in a cooldown state (see the `global_cooldown_setting` field).
     */
    cooldown_expires_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-custom-rewards
 */
export interface RESTPostCustomRewardsRequestParams {
    /**
     * The ID of the broadcaster to add the custom reward to.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-custom-rewards
 */
export interface RESTPostCustomRewardsRequestBody {
    /**
     * The custom reward’s title.
     *
     * @remarks The title may contain a maximum of 45 characters,
     * and it must be unique amongst all the broadcaster’s custom rewards.
     */
    title: string;
    /**
     * The cost of the reward, in Channel Points. The minimum is 1 point.
     */
    cost: number;
    /**
     * The prompt shown to the viewer when they redeem the reward.
     *
     * @remarks Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200
     * characters.
     */
    prompt?: string;
    /**
     * A Boolean value that determines whether the reward is enabled.
     *
     * @remarks Viewers see only enabled rewards. The default is **true**.
     */
    is_enabled?: boolean;
    /*
     * The background color to use for the reward.
     *
     * @remarks Specify the color using Hex format (for example, #9147FF).
     */
    background_color?: string;
    /**
     * A Boolean value that determines whether the user needs to enter information when redeeming the reward.
     *
     * @remarks See the `prompt` field. The default is **false**.
     */
    is_user_input_required?: boolean;
    /**
     * A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream
     * (see the `max_per_stream` field).
     *
     * @remarks The default is **false**.
     */
    is_max_per_stream_enabled: boolean;
    /**
     * The maximum number of redemptions allowed per live stream.
     *
     * @remarks Applied only if `is_max_per_stream_enabled` is true. The minimum value is 1.
     */
    max_per_stream?: number;
    /**
     * A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream
     * (see the `max_per_user_per_stream` field).
     *
     * @remarks The default is **false**.
     */
    is_max_per_user_per_stream_enabled?: boolean;
    /**
     * The maximum number of redemptions allowed per user per stream.
     *
     * @remarks Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.
     */
    max_per_user_per_stream?: number;
    /**
     * A Boolean value that determines whether to apply a cooldown period between redemptions
     * (see the `global_cooldown_seconds` field for the duration of the cooldown period).
     *
     * @remarks The default is **false**.
     */
    is_global_cooldown_enabled?: boolean;
    /**
     * The cooldown period, in seconds.
     *
     * @remarks Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however,
     * the minimum value is 60 for it to be shown in the Twitch UX.
     */
    global_cooldown_seconds?: number;
    /**
     * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward
     * is redeemed.
     *
     * @remarks If **false**, status is set to UNFULFILLED and follows the normal request queue process.
     * The default is **false**.
     */
    should_redemptions_skip_request_queue?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-custom-rewards
 */
export interface RESTPostCustomRewardsResponse extends APIResponse<APICustomReward> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-custom-rewards
 */
export interface RESTDeleteCustomRewardRequestParams {
    /**
     * The ID of the broadcaster that created the custom reward.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the custom reward to delete.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward
 */
export interface RESTGetCustomRewardRequestParams {
    /**
     * The ID of the broadcaster whose custom rewards you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A list of IDs to filter the rewards by.
     *
     * @remarks To specify more than one ID, include this parameter for each reward you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
     * Duplicate IDs are ignored. The response contains only the IDs that were found.
     * If none of the IDs were found, the response is 404 Not Found.
     */
    id?: string;
    /**
     * A Boolean value that determines whether the response contains only the custom rewards that the app may manage
     * (the app is identified by the ID in the Client-Id header).
     *
     * @remarks Set to **true** to get only the custom rewards that the app may manage. The default is **false**.
     */
    only_manageable_rewards?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward
 */
export interface RESTGetCustomRewardsResponse extends APIResponse<APICustomReward> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-custom-reward
 */
export interface RESTPatchCustomRewardRequestParams {
    /**
     * The ID of the broadcaster that’s updating the reward.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the reward to update.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-custom-reward
 */
export interface RESTPatchCustomRewardRequestBody {
    /**
     * The custom reward’s title.
     *
     * @remarks The title may contain a maximum of 45 characters,
     * and it must be unique amongst all the broadcaster’s custom rewards.
     */
    title?: string;
    /**
     * The prompt shown to the viewer when they redeem the reward.
     *
     * @remarks Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200
     * characters.
     */
    prompt?: string;
    /**
     * The cost of the reward, in Channel Points.
     *
     * @remarks The minimum is 1 point.
     */
    cost?: number;
    /**
     * The background color to use for the reward.
     *
     * @remarks Specify the color using Hex format (for example, #9147FF).
     */
    background_color?: string;
    /**
     * A Boolean value that determines whether the reward is enabled.
     *
     * @remarks Viewers see only enabled rewards. The default is **true**.
     */
    is_enabled?: boolean;
    /**
     * A Boolean value that determines whether the user needs to enter information when redeeming the reward.
     *
     * @remarks See the `prompt` field. The default is **false**.
     */
    is_user_input_required?: boolean;
    /**
     * A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream
     * (see the `max_per_stream` field).
     *
     * @remarks The default is **false**.
     */
    is_max_per_stream_enabled?: boolean;
    /**
     * The maximum number of redemptions allowed per live stream.
     *
     * @remarks Applied only if `is_max_per_stream_enabled` is true. The minimum value is 1.
     */
    max_per_stream?: number;
    /**
     * A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream
     * (see the `max_per_user_per_stream` field). The default is **false**.
     */
    is_max_per_user_per_stream_enabled?: boolean;
    /**
     * The maximum number of redemptions allowed per user per stream.
     *
     * @remarks Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.
     */
    max_per_user_per_stream?: number;
    /**
     * A Boolean value that determines whether to apply a cooldown period between redemptions
     * (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**.
     */
    is_global_cooldown_enabled?: boolean;
    /**
     * The cooldown period, in seconds.
     *
     * @remarks Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however,
     * the minimum value is 60 for it to be shown in the Twitch UX.
     */
    global_cooldown_seconds?: number;
    /**
     * A Boolean value that determines whether to pause the reward.
     *
     * @remarks Set to **true** to pause the reward. Viewers can’t redeem paused rewards.
     */
    is_paused?: boolean;
    /**
     * A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward
     * is redeemed.
     *
     * @remarks If **false**, status is set to UNFULFILLED and follows the normal request queue process.
     * The default is **false**.
     */
    should_redemptions_skip_request_queue?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-custom-reward
 */
export interface RESTPatchCustomRewardResponse extends APIResponse<APICustomReward> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption
 */
export enum APICustomRewardRedemptionStatus {
    Canceled = "CANCELED",
    Fulfilled = "FULFILLED",
    Unfulfilled = "UNFULFILLED"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption
 */
export interface APICustomRewardRedemptionReward {
    /**
     * The ID that uniquely identifies the redeemed reward.
     */
    id: string;
    /**
     * The reward’s title.
     */
    title: string;
    /**
     * The prompt displayed to the viewer if user input is required.
     */
    prompt: string;
    /**
     * The reward’s cost, in Channel Points.
     */
    cost: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption
 */
export interface APICustomRewardRedemption {
    /**
     * The ID that uniquely identifies the broadcaster.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The ID that uniquely identifies this redemption.
     */
    id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The ID that uniquely identifies the user that redeemed the reward.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The text the user entered at the prompt when they redeemed the reward; otherwise,
     * an empty string if user input was not required.
     */
    user_input: string;
    /**
     * The state of the redemption.
     */
    status: APICustomRewardRedemptionStatus;
    /**
     * The date and time of when the reward was redeemed, in RFC3339 format.
     */
    redeemed_at: string;
    /**
     * The reward that the user redeemed.
     */
    reward: APICustomRewardRedemptionReward;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption
 */
export interface RESTGetCustomRewardRedemptionRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster that owns the custom reward.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID that identifies the custom reward whose redemptions you want to get.
     */
    reward_id: string;
    /**
     * The status of the redemptions to return.
     *
     * @remarks This field is required only if you don’t specify the *id* query parameter.
     * Canceled and fulfilled redemptions are returned for only a few days after they’re canceled or fulfilled.
     */
    status: APICustomRewardRedemptionStatus;
    /**
     * A list of IDs to filter the redemptions by.
     *
     * @remarks To specify more than one ID, include this parameter for each redemption you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
     * Duplicate IDs are ignored. The response contains only the IDs that were found.
     * If none of the IDs were found, the response is 404 Not Found.
     */
    id?: string;
    /**
     * The order to sort redemptions by.
     *
     * @remarks The default is OLDEST.
     */
    sort?: "OLDEST"|"NEWEST";
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption
 */
export interface RESTGetCustomRewardRedemptionResponse extends APIPaginatedResponse<APICustomRewardRedemption> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-redemption-status
 */
export interface RESTPatchRedemptionStatusRequestParams {
    /**
     * A list of IDs that identify the redemptions to update.
     *
     * @remarks To specify more than one ID, include this parameter for each redemption you want to update.
     * For example, `id=1234&id=5678`.
     * You may specify a maximum of 50 IDs.
     */
    id: string;
    /**
     * The ID of the broadcaster that’s updating the reward.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID that identifies the reward that’s been redeemed.
     */
    reward_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-redemption-status
 */
export interface RESTPatchRedemptionStatusRequestBody {
    /**
     * The status to set the redemption to.
     *
     * @remarks Setting the status to CANCELED refunds the user’s channel points.
     */
    status: APICustomRewardRedemptionStatus;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-redemption-status
 */
export interface RESTPatchRedemptionStatusResponse extends APIResponse<APICustomRewardRedemption> {}
