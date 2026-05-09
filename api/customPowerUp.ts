import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface APICustomPowerUpImage {
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface APICustomPowerUpMaxPerStreamSetting {
    /**
     * A Boolean value that determines whether the custom Power-up applies a limit on the number of redemptions allowed
     * per live stream.
     *
     * @remarks Is **true** if the custom Power-up applies a limit.
     */
    is_enabled: boolean;
    /**
     * The maximum number of redemptions allowed per live stream.
     */
    max_per_stream: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface APICustomPowerUpMaxPerUserPerStreamSetting {
    /**
     * A Boolean value that determines whether the custom Power-up applies a limit on the number of redemptions allowed
     * per live stream.
     *
     * @remarks Is **true** if the custom Power-up applies a limit.
     */
    is_enabled: boolean;
    /**
     * The maximum number of redemptions allowed per user per live stream.
     */
    max_per_user_per_stream: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface APICustomPowerUpGlobalCooldownSetting {
    /**
     * A Boolean value that determines whether to apply a cooldown period.
     *
     * @remarks Is **true** if a cooldown period is enabled.
     */
    is_enabled: boolean;
    /**
     * The cooldown period, in seconds.
     */
    global_cooldown_seconds: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface APICustomPowerUp {
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
     * The ID that uniquely identifies this custom Power-up.
     */
    id: string;
    /**
     * The title of the custom Power-up.
     */
    title: string;
    /**
     * The prompt shown to the viewer when they redeem the custom Power-up if user input is required
     * (see the `is_user_input_required` field).
     */
    prompt: string;
    /**
     * The amount of Bits for the custom Power-up.
     */
    bits: number;
    /**
     * A set of custom images for the custom Power-up.
     *
     * @remarks This field is **null** if the broadcaster didn’t upload images.
     */
    image: APICustomPowerUpImage|null;
    /**
     * A set of default images for the custom Power-up.
     */
    default_image: APICustomPowerUpImage;
    /**
     * The background color to use for the custom Power-up.
     *
     * @remarks The color is in Hex format (for example, #00E5CB).
     */
    background_color: string;
    /**
     * A Boolean value that determines whether the custom Power-up is enabled.
     *
     * @remarks Is **true** if enabled; otherwise, **false**. Disabled custom Power-ups aren’t shown to the user.
     */
    is_enabled: boolean;
    /**
     * A Boolean value that determines whether the user must enter information when redeeming the custom Power-up.
     *
     * @remarks Is **true** if the user is prompted.
     */
    is_user_input_required: boolean;
    /**
     * The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.
     */
    max_per_stream_setting: APICustomPowerUpMaxPerStreamSetting;
    /**
     * The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per
     * live stream.
     */
    max_per_user_per_stream_setting: APICustomPowerUpMaxPerUserPerStreamSetting;
    /**
     * The settings used to determine whether to apply a cooldown period between redemptions and the length of the
     * cooldown.
     */
    global_cooldown_setting: APICustomPowerUpGlobalCooldownSetting;
    /**
     * A Boolean value that determines whether the custom Power-up is currently paused.
     *
     * @remarks Is **true** if the custom Power-up is paused. Viewers can’t redeem paused custom Power-ups.
     */
    is_paused: boolean;
    /**
     * A Boolean value that determines whether the custom Power-up is currently in stock.
     *
     * @remarks Is **true** if the custom Power-up is in stock. Viewers can’t redeem out of stock custom Power-ups.
     */
    is_in_stock: boolean;
    /**
     * The number of redemptions redeemed during the current live stream.
     *
     * @remarks The number counts against the `max_per_stream_setting` limit.
     * This field is **null** if the broadcaster’s stream isn’t live or `max_per_stream_setting` isn’t enabled.
     */
    redemptions_redeemed_current_stream: number|null;
    /**
     * The timestamp of when the cooldown period expires.
     *
     * @remarks Is **null** if the custom Power-up isn’t in a cooldown state. See the `global_cooldown_setting` field.
     */
    cooldown_expires_at: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface RESTGetCustomPowerUpRequestParams {
    /**
     * The ID of the broadcaster whose custom Power-ups you want to get.
     *
     * @remarks This ID must match the user ID found in the OAuth token.
     */
    broadcaster_id: string;
    /**
     * A list of IDs to filter the Power-ups by.
     *
     * @remarks To specify more than one ID, include this parameter for each Power-up you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
     *
     * Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found,
     * the response is 404 Not Found.
     */
    id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-custom-power-up
 */
export interface RESTGetCustomPowerUpResponse extends APIResponse<APICustomPowerUp> {}
