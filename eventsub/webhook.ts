import type {EventSubEventPayload, EventSubTransportMethod} from "./common";
import type {EventSubSubscription} from "./subscription";

/**
 * @see https://dev.twitch.tv/docs/eventsub/handling-webhook-events/
 */
export enum EventSubWebhookMessageType {
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
    /**
     * An ID that uniquely identifies this message.
     *
     * @remarks This is an opaque ID, and is not required to be in any particular format.
     */
    TwitchEventSubMessageId = "twitch-eventsub-message-id",
    /**
     * Twitch sends you a notification at least once. If Twitch is unsure of whether you received a notification,
     * it’ll resend the event, which means you may receive a notification twice.
     */
    TwitchEventSubMessageRetry = "twitch-eventsub-message-retry",
    /**
     * The type of notification.
     */
    TwitchEventSubMessageType = "twitch-eventsub-message-type",
    /**
     * The HMAC signature that you use to verify that Twitch sent the message.
     */
    TwitchEventSubMessageSignature = "twitch-eventsub-message-signature",
    /**
     * The UTC date and time (in RFC3339 format) that Twitch sent the notification.
     */
    TwitchEventSubMessageTimestamp = "twitch-eventsub-message-timestamp",
    /**
     * The subscription type you subscribed to.
     */
    TwitchEventSubSubscriptionType = "twitch-eventsub-subscription-type",
    TwitchEventSubSubscriptionIsBatchingEnabled = "twitch-eventsub-subscription-is-batching-enabled",
    /**
     * The version number that identifies the definition of the subscription request.
     *
     * @remarks This version matches the version number that you specified in your subscription request.
     */
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
