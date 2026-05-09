import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-creator-goals
 */
export enum APICreatorGoalType {
    /**
     * The goal is to increase followers.
     */
    Follower = "follower",
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
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-creator-goals
 */
export interface APICreatorGoal {
    /**
     * An ID that identifies this goal.
     */
    id: string;
    /**
     * An ID that identifies the broadcaster that created the goal.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The type of goal.
     */
    type: APICreatorGoalType;
    /**
     * A description of the goal. Is an empty string if not specified.
     */
    description: string;
    /**
     * The goal’s current value.
     *
     * @remarks The goal’s type determines how this value is increased or decreased.
     * - If type is `follower`, this field is set to the broadcaster's current number of followers.
     *   This number increases with new followers and decreases when users unfollow the broadcaster.
     * - If type is `subscription`, this field is increased and decreased by the points value associated
     *   with the subscription tier. For example, if a tier-two subscription is worth 2 points,
     *   this field is increased or decreased by 2, not 1.
     * - If type is `subscription_count`, this field is increased by 1 for each new subscription
     *   and decreased by 1 for each user that unsubscribes.
     * - If type is `new_subscription`, this field is increased by the points value associated
     *   with the subscription tier. For example, if a tier-two subscription is worth 2 points,
     *   this field is increased by 2, not 1.
     * - If type is `new_subscription_count`, this field is increased by 1 for each new subscription.
     */
    current_amount: number;
    /**
     * The goal’s target value. 
     * For example, if the broadcaster has 200 followers before creating the goal,
     * and their goal is to double that number, this field is set to 400.
     */
    target_amount: number;
    /**
     * The UTC date and time (in RFC3339 format) that the broadcaster created the goal.
     */
    created_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-creator-goals
 */
export interface RESTGetCreatorGoalsRequestParams {
    /**
     * The ID of the broadcaster that created the goals.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-creator-goals
 */
export interface RESTGetCreatorGoalsResponse extends APIResponse<APICreatorGoal> {}
