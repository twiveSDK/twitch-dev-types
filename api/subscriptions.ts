import type { APIPaginatedResponse, APIResponse, RESTPaginationRequestParams } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
 */
export enum APISubscriptionTier {
    Tier1 = "1000",
    Tier2 = "2000",
    Tier3 = "3000",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
 */
export interface APIBroadcasterSubscription {
    /**
     * An ID that identifies the broadcaster.
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
     * The ID of the user that gifted the subscription to the user.
     *
     * @remarks Is an empty string if `is_gift` is **false**.
     */
    gifter_id?: string;
    /**
     * The gifter’s login name.
     *
     * @remarks Is an empty string if `is_gift` is **false**.
     */
    gifter_login?: string;
    /**
     * The gifter’s display name.
     *
     * @remarks Is an empty string if `is_gift` is **false**.
     */
    gifter_name?: string;
    /**
     * A Boolean value that determines whether the subscription is a gift subscription.
     *
     * @remarks Is **true** if the subscription was gifted.
     */
    is_gift: boolean;
    /**
     * The name of the subscription.
     */
    plan_name: string;
    /**
     * The type of subscription.
     */
    tier: APISubscriptionTier;
    /**
     * An ID that identifies the subscribing user.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The user’s login name.
     */
    user_login: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
 */
export interface RESTGetBroadcasterSubscriptionsRequestParams extends RESTPaginationRequestParams {
    /**
     * The broadcaster’s ID.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * Filters the list to include only the specified subscribers.
     *
     * @remarks To specify more than one subscriber, include this parameter for each subscriber.
     * For example, `&user_id=1234&user_id=5678`. You may specify a maximum of 100 subscribers.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
 */
export interface RESTGetBroadcasterSubscriptionsResponse extends APIPaginatedResponse<APIBroadcasterSubscription> {
    /**
     * The current number of subscriber points earned by this broadcaster.
     *
     * @remarks Points are based on the subscription tier of each user that subscribes to this broadcaster.
     * For example, a Tier 1 subscription is worth 1 point, Tier 2 is worth 2 points, and Tier 3 is worth 6 points.
     * The number of points determines the number of emote slots that are unlocked for the broadcaster
     * (see {@link https://help.twitch.tv/s/article/subscriber-emote-guide?language=en_US#emoteslots
     * Subscriber Emote Slots}).
     */
    points: number;
    /**
     * The total number of users that subscribe to this broadcaster.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-user-subscription
 */
export interface APIUserSubscription {
    /**
     * 	An ID that identifies the broadcaster.
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
     * The ID of the user that gifted the subscription.
     *
     * @remarks The object includes this field only if `is_gift` is **false**.
     */
    gifter_id?: string;
    /**
     * The gifter’s login name.
     *
     * @remarks The object includes this field only if `is_gift` is **false**.
     */
    gifter_login?: string;
    /**
     * The gifter’s display name.
     *
     * @remarks The object includes this field only if `is_gift` is **false**.
     */
    gifter_name?: string;
    /**
     * A Boolean value that determines whether the subscription is a gift subscription.
     *
     * @remarks Is **true** if the subscription was gifted.
     */
    is_gift: boolean;
    /**
     * The type of subscription.
     */
    tier: APISubscriptionTier;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-user-subscription
 */
export interface RESTGetUserSubscriptionRequestParams {
    /**
     * The ID of a partner or affiliate broadcaster.
     */
    broadcaster_id: string;
    /**
     * The ID of the user that you’re checking to see whether they subscribe to the broadcaster in *broadcaster_id*.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#check-user-subscription
 */
export interface RESTGetUserSubscriptionResponse extends APIResponse<APIUserSubscription> {}
