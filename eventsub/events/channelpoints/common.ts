/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-redemption-add-event
 */
export enum ChannelPointsCustomRewardRedemptionStatus {
    Unknown = "unknown",
    Unfulfilled = "unfulfilled",
    Fulfilled = "fulfilled",
    Canceled = "canceled",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#reward
 */
export interface ChannelPointsCustomRewardRedemption {
    /**
     * The reward identifier.
     */
    id: string;
    /**
     * The reward name.
     */
    title: string;
    /**
     * The reward cost.
     */
    cost: number;
    /**
     * The reward description.
     */
    prompt: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#max-per-stream
 */
export interface ChannelPointsCustomRewardMaxPerStream {
    /**
     * Is the setting enabled.
     */
    is_enabled: boolean;
    /**
     * The max per stream limit.
     */
    value: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#max-per-user-per-stream
 */
export interface ChannelPointsCustomRewardMaxPerUserPerStream {
    /**
     * Is the setting enabled.
     */
    is_enabled: boolean;
    /**
     * The max per user per stream limit.
     */
    value: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#image
 */
export interface ChannelPointsCustomRewardImage {
    /**
     * URL for the image at 1x size.
     */
    url_1x: string;
    /**
     * URL for the image at 2x size.
     */
    url_2x: string;
    /**
     * URL for the image at 4x size.
     */
    url_4x: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#global-cooldown
 */
export interface ChannelPointsCustomRewardGlobalCooldown {
    /**
     * Is the setting enabled.
     */
    is_enabled: boolean;
    /**
     * The cooldown in seconds.
     */
    seconds: number;
}
