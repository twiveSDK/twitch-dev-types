/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscribe-event
 */
export enum ChannelSubscriptionTier {
    /**
     * First level of a paid or a Prime subscription.
     */
    Tier1 = "1000",
    /**
     * Second level of a paid subscription.
     */
    Tier2 = "2000",
    /**
     * Third level of a paid subscription.
     */
    Tier3 = "3000",
}
