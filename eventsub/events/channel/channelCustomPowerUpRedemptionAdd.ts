import type {EventBroadcasterInfo, EventUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#custompowerup
 */
export enum ChannelCustomPowerUpRedemptionAddStatus {
    Unknown = "unknown",
    Unfulfilled = "unfulfilled",
    Fulfilled = "fulfilled",
    Canceled = "canceled",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#custom-power-up
 */
export interface ChannelCustomPowerUp {
    /**
     * The unique ID for this Custom Power-up.
     */
    id: string;
    /**
     * The user-viewable name of this Custom Power-up.
     */
    title: string;
    /**
     * The cost of the Custom Power-up to redeem.
     */
    bits: number;
    /**
     * The creator-provided description for this Power-up.
     */
    prompt: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#custompowerup
 */
export interface ChannelCustomPowerUpRedemptionAddEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The redemption identifier.
     */
    id: string;
    /**
     * The user input provided.
     *
     * @remarks Empty string if not provided.
     */
    user_input: string;
    /**
     * Defaults to `unfulfilled`.
     */
    status: ChannelCustomPowerUpRedemptionAddStatus;
    /**
     * Basic information about the custom Power-up that was redeemed, at the time it was redeemed.
     */
    custom_power_up: ChannelCustomPowerUp;
    /**
     * RFC3339 timestamp of when the custom Power-up was redeemed.
     */
    redeemed_at: string;
}
