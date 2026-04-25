import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";
import type {
    EventSubSubscriptionCondition, EventSubSubscriptionStatus, EventSubTransportMethod, EventSubSubscriptionType
} from "../eventsub";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions
 */
export interface APIEventSubSubscriptionTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod;
    /**
     * The callback URL where the notifications are sent.
     * 
     * @remarks Included only if `method` is set to **webhook**.
     */
    callback?: string;
    /**
     * An ID that identifies the WebSocket that notifications are sent to.
     *
     * @remarks Included only if `method` is set to **websocket**.
     */
    session_id?: string;
    /**
     * The UTC date and time that the WebSocket connection was established.
     *
     * @remarks Included only if `method` is set to **websocket**.
     */
    connected_at?: string;
    /**
     * The UTC date and time that the WebSocket connection was lost.
     *
     * @remarks Included only if `method` is set to **websocket**.
     */
    disconnected_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions
 */
export interface APIEventSubSubscription {
    /**
     * An ID that identifies the subscription.
     */
    id: string;
    /**
     * The subscription's status.
     * 
     * @remarks The subscriber receives events only for enabled subscriptions.
     */
    status: EventSubSubscriptionStatus;
    /**
     * The subscription's type.
     */
    type: EventSubSubscriptionType;
    /**
     * The version number that identifies this definition of the subscription's data.
     */
    version: "1"|"2"|"beta";
    /**
     * The subscription's parameter values.
     * 
     * @remarks This is a string-encoded JSON object whose contents are determined by the subscription type.
     */
    condition: EventSubSubscriptionCondition;
    /**
     * The date and time (in RFC3339 format) of when the subscription was created.
     */
    created_at: string;
    /**
     * The transport details used to send the notifications.
     */
    transport: APIEventSubSubscriptionTransport;
    /**
     * The amount that the subscription counts against your limit.
     * {@link https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits Learn More}
     */
    cost: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription
 */
export interface RESTPostEventSubSubscriptionTransportRequestBodyParam {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod|"conduit";
    /**
     * The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443.
     * See {@link https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#processing-an-event Processing an event}.
     * 
     * @remarks Specify this field only if `method` is set to **webhook**.
     */
    callback?: string;
    /**
     * The secret used to verify the signature.
     * 
     * @remarks The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100
     * characters long. For information about how the secret is used, see
     * {@link https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#verifying-the-event-message
     * Verifying the event message}. Specify this field only if `method` is set to **webhook**.
     */
    secret?: string;
    /**
     * An ID that identifies the WebSocket to send notifications to.
     * 
     * @remarks When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.
     * Specify this field only if `method` is set to **websocket**.
     */
    session_id?: string;
    /**
     * An ID that identifies the conduit to send notifications to.
     * 
     * @remarks When you create a conduit, the server returns the conduit ID.
     * Specify this field only if `method` is set to *conduit*.
     */
    conduit_id?: string;
}

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
    version: "1"|"2"|"beta";
    /**
     * A JSON object that contains the parameter values that are specific to the specified subscription type.
     * 
     * @remarks For the object’s required and optional fields, see the subscription type’s documentation.
     */
    condition: EventSubSubscriptionCondition;
    /**
     * The transport details that you want Twitch to use when sending you notifications.
     */
    transport: RESTPostEventSubSubscriptionTransportRequestBodyParam;
    /**
     * An ID that identifies the WebSocket to send notifications to.
     *
     * @remarks When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.
     * Specify this field only if `method` is set to **websocket**.
     */
    session_id?: string;
    /**
     * An ID that identifies the conduit to send notifications to.
     *
     * @remarks When you create a conduit, the server returns the conduit ID. Specify this field only if `method` is set
     * to **conduit**.
     */
    conduit_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription
 */
export interface RESTPostEventSubSubscriptionResponse extends APIResponse<APIEventSubSubscription> {
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
    type?: string;
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
export interface RESTGetEventSubSubscriptionsResponse extends APIPaginatedResponse<APIEventSubSubscription> {
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
