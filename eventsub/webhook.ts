import type { EventSubEventPayload, EventSubTransportMethod } from "./common";
import type { EventSubSubscription } from "./subscription";

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/
 */
export enum EventSubWebhookNotificationType {
    /**
     * Contains the event’s data.
     */
    Notification = "notification",
    /**
     * Contains the challenge used to prove that you own the event handler.
     *
     * @remarks This is the first event you’ll receive after subscribing to an event.
     */
    WebhookCallbackVerification = "webhook_callback_verification",
    /**
     * Contains the reason why Twitch revoked your subscription.
     */
    Revocation = "revocation",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#list-of-request-headers
 */
export enum EventSubWebhookRequestHeader {
    TwitchEventSubMessageId = "twitch-eventsub-message-id",
    TwitchEventSubMessageRetry = "twitch-eventsub-message-retry",
    TwitchEventSubMessageType = "twitch-eventsub-message-type",
    TwitchEventSubMessageSignature = "twitch-eventsub-message-signature",
    TwitchEventSubMessageTimestamp = "twitch-eventsub-message-timestamp",
    TwitchEventSubSubscriptionType = "twitch-eventsub-subscription-type",
    TwitchEventSubSubscriptionVersion = "twitch-eventsub-subscription-version",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#processing-an-event
 */
export interface EventSubWebhookSubscriptionTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod.Webhook;
    /**
     * The callback URL where the notifications are sent.
     */
    callback: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#processing-an-event
 */
export interface EventSubWebhookNotificationRequestBody {
    /**
     * An object that contains information about your subscription.
     */
    subscription: EventSubSubscription & EventSubWebhookSubscriptionTransport;
    /**
     * The event’s data.
     */
    event: EventSubEventPayload;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#responding-to-a-challenge-request
 */
export interface EventSubWebhookVerificationChallengeRequestBody {
    /**
     * The verification challenge to make sure that you own the event handler specified in the request.
     */
    challenge: string;
    /**
     * An object that contains information about your subscription.
     */
    subscription: EventSubSubscription & EventSubWebhookSubscriptionTransport;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/#revoking-your-subscription
 */
export interface EventSubWebhookRevokeSubscriptionRequestBody {
    /**
     * An object that contains information about your subscription.
     */
    subscription: EventSubSubscription & EventSubWebhookSubscriptionTransport;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events
 */
export type EventSubWebhookRequestBody =
    | EventSubWebhookNotificationRequestBody
    | EventSubWebhookVerificationChallengeRequestBody
    | EventSubWebhookRevokeSubscriptionRequestBody;

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#transport
 */
export interface EventSubWebhookTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod.Webhook;
    /**
     * The callback URL where the notifications are sent.
     *
     * @remarks The URL must use the HTTPS protocol and port 443.
     */
    callback: string;
    /**
     * The secret used to verify the signature.
     *
     * @remarks The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of
     * 100 characters long.
     */
    secret: string;
}
