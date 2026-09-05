import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";
import type {
    EventSubSubscriptionCondition, EventSubSubscriptionStatus, EventSubSubscriptionType, EventSubSubscriptionVersion,
    EventSubSubscriptionTransport, EventSubSubscription,
} from "../eventsub";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription
 */
export interface RESTPostEventSubSubscriptionRequestBody {
    /**
     * The type of subscription to create.
     */
    type: EventSubSubscriptionType;
    /**
     * The version number that identifies the definition of the subscription type that you want the response to use.
     */
    version: EventSubSubscriptionVersion;
    /**
     * A JSON object that contains the parameter values that are specific to the specified subscription type.
     * 
     * @remarks For the object’s required and optional fields, see the subscription type’s documentation.
     */
    condition: EventSubSubscriptionCondition;
    /**
     * The transport details that you want Twitch to use when sending you notifications.
     */
    transport: EventSubSubscriptionTransport;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription
 */
export interface RESTPostEventSubSubscriptionResponse extends APIResponse<EventSubSubscription> {
    /**
     * The total number of subscriptions you’ve created.
     */
    total: number;
    /**
     * The sum of all of your subscription costs.
     * {@link https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits Learn More}
     */
    total_cost: number;
    /**
     * The maximum total cost that you’re allowed to incur for all subscriptions you create.
     */
    max_total_cost: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-eventsub-subscription
 */
export interface RESTDeleteEventSubSubscriptionRequestParams {
    /**
     * The ID of the subscription to delete.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions
 */
export interface RESTGetEventSubSubscriptionsRequestParams extends RESTPaginationRequestParams {
    /**
     * Filter subscriptions by its status
     */
    status?: EventSubSubscriptionStatus;
    /**
     * Filter subscriptions by subscription type
     */
    type?: EventSubSubscriptionType;
    /**
     * Filter subscriptions by user ID.
     *
     * @remarks The response contains subscriptions where this ID matches a user ID that you specified in the Condition
     * object when you {@link https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription created the
     * subscription}.
     */
    user_id?: string;
    /**
     * Returns an array with the subscription matching the ID (as long as it is owned by the client making the request),
     * or an empty array if there is no matching subscription.
     */
    subscription_id?: string;
    /**
     * Filter subscriptions by conduit ID.
     */
    conduit_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions
 */
export interface RESTGetEventSubSubscriptionsResponse extends APIPaginatedResponse<EventSubSubscription> {
    /**
     * The total number of subscriptions you’ve created.
     */
    total: number;
    /**
     * The sum of all of your subscription costs.
     * {@link https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits Learn More}
     */
    total_cost: number;
    /**
     * The maximum total cost that you’re allowed to incur for all subscriptions you create.
     */
    max_total_cost: number;
}
