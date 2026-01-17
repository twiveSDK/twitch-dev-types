import type {EventBroadcasterInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#goals-event
 */
export enum ChannelGoalType {
    /**
     * The goal is to increase followers.
     */
    Follow = "follow",
    /**
     * The goal is to increase subscriptions.
     *
     * @remarks This type shows the net increase or decrease in tier points associated with the subscriptions.
     */
    Subscription = "subscription",
    /**
     * The goal is to increase subscriptions.
     *
     * @remarks This type shows the net increase or decrease in the number of subscriptions.
     */
    SubscriptionCount = "subscription_count",
    /**
     * The goal is to increase subscriptions.
     *
     * @remarks This type shows only the net increase in tier points associated with the subscriptions
     * (it does not account for users that unsubscribed since the goal started).
     */
    NewSubscription = "new_subscription",
    /**
     * The goal is to increase subscriptions.
     *
     * @remarks This type shows only the net increase in the number of subscriptions
     * (it does not account for users that unsubscribed since the goal started).
     */
    NewSubscriptionCount = "new_subscription_count",
    /**
     * The goal is to increase the amount of Bits used on the channel.
     */
    NewBit = "new_bit",
    /**
     * The goal is to increase the number of unique Cheerers to Cheer on the channel.
     */
    NewCheerer = "new_cheerer",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#goals-event
 */
export interface ChannelGoalBeginEvent extends EventBroadcasterInfo {
    /**
     * An ID that identifies this event.
     */
    id: string;
    /**
     * The type of goal.
     */
    type: ChannelGoalType;
    /**
     * A description of the goal, if specified.
     *
     * @remarks The description may contain a maximum of 40 characters.
     */
    description: string;
    /**
     * The goal’s current value.
     *
     * @remarks The goal’s `type` determines how this value is increased or decreased.
     * - If `type` is follower, this field is set to the broadcaster's current number of followers.
     *   This number increases with new followers and decreases when users unfollow the broadcaster.
     * - If `type` is subscription, this field is increased and decreased by the points value associated with
     *   the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased
     *   or decreased by 2, not 1.
     * - If `type` is subscription_count, this field is increased by 1 for each new subscription and decreased by 1
     *   for each user that unsubscribes.
     * - If `type` is new_subscription, this field is increased by the points value associated with the subscription
     *   tier. For example, if a tier-two subscription is worth 2 points, this field is increased by 2, not 1.
     * - If `type` is new_subscription_count, this field is increased by 1 for each new subscription.
     */
    current_amount: number;
    /**
     * The goal’s target value.
     *
     * @remarks For example, if the broadcaster has 200 followers before creating the goal, and their goal is to
     * double that number, this field is set to 400.
     */
    target_amount: number;
    /**
     * The UTC timestamp in RFC3339 format, which indicates when the broadcaster created the goal.
     */
    started_at: string;
}
