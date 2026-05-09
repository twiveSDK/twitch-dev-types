import type { EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#top-contributions
 */
export enum HypeTrainContributionType {
    /**
     * Cheering with Bits.
     */
    Bits = "bits",
    /**
     * Subscription activity like subscribing or gifting subscriptions.
     */
    Subscription = "subscription",
    /**
     * Covers other contribution methods not listed.
     */
    Other = "other",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#top-contributions
 */
export interface HypeTrainTopContribution extends EventUserInfo {
    /**
     * The contribution method used.
     */
    type: HypeTrainContributionType;
    /**
     * The total amount contributed.
     *
     * @remarks If `type` is `bits`, `total` represents the amount of Bits used.
     * If `type` is `subscription`, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions,
     * respectively.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#last-contribution
 */
export interface HypeTrainLastContribution extends EventUserInfo {
    /**
     * The contribution method used.
     */
    type: HypeTrainContributionType;
    /**
     * The total amount contributed.
     *
     * @remarks If `type` is `bits`, `total` represents the amount of Bits used.
     * If `type` is `subscription`, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions,
     * respectively.
     */
    total: number;
}
