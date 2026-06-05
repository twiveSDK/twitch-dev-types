import type { EventSubSubscription } from "./subscription";
import type { EventSubEventPayload, EventSubTransportMethod } from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export enum EventSubWebSocketMessageType {
    SessionWelcome = "session_welcome",
    SessionKeepAlive = "session_keepalive",
    Notification = "notification",
    SessionReconnect = "session_reconnect",
    Revocation = "revocation",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export enum EventSubWebSocketSessionStatus {
    Connected = "connected",
    Reconnecting = "reconnecting",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export interface EventSubWebSocketSession {
    /**
     * An ID that uniquely identifies this WebSocket connection.
     */
    id: string;
    /**
     * The connection’s status.
     */
    status: EventSubWebSocketSessionStatus;
    /**
     * The maximum number of seconds that you should expect silence before receiving a keepalive message.
     */
    keepalive_timeout_seconds: number;
    /**
     * The URL to reconnect to. Use this URL as is; do not modify it.
     * The connection automatically includes the subscriptions from the old connection.
     */
    reconnect_url: string|null;
    /**
     * The UTC date and time that the connection was created.
     */
    connected_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export interface EventSubWebSocketMessageMetadata {
    /**
     * An ID that uniquely identifies the message.
     *
     * @remarks Twitch sends messages at least once, but if Twitch is unsure of whether you received a notification,
     * it’ll resend the message. This means you may receive a notification twice. If Twitch resends the message,
     * the message ID will be the same.
     */
    message_id: string;
    /**
     * The type of message.
     */
    message_type: EventSubWebSocketMessageType;
    /**
     * The UTC date and time that the message was sent.
     */
    message_timestamp: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/#notification-message
 */
export interface EventSubWebsocketSubscriptionTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod.Websocket;
    /**
     * An ID that uniquely identifies the WebSocket connection.
     */
    session_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/#notification-message
 */
export interface EventSubWebsocketNotificationMessagePayload {
    /**
     * An object that contains information about your subscription.
     */
    subscription: EventSubSubscription & EventSubWebsocketSubscriptionTransport;
    /**
     * The event’s data.
     */
    event: EventSubEventPayload;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/#welcome-message
 */
export interface EventSubWebsocketWelcomeMessagePayload {
    /**
     * An object that contains information about the connection.
     */
    session: EventSubWebSocketSession;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/#reconnect-message
 */
export interface EventSubWebsocketReconnectMessagePayload {
    /**
     * An object that contains information about the connection.
     */
    session: EventSubWebSocketSession;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/#revocation-message
 */
export interface EventSubWebsocketRevocationMessagePayload {
    /**
     * An object that contains information about your subscription.
     */
    subscription: EventSubSubscription;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export type EventSubWebSocketMessagePayload = EventSubWebsocketNotificationMessagePayload
    | EventSubWebsocketWelcomeMessagePayload
    | EventSubWebsocketReconnectMessagePayload
    | EventSubWebsocketRevocationMessagePayload;

/**
 * @see https://dev.twitch.tv/docs/eventsub/websocket-reference/
 */
export interface EventSubWebSocketMessage {
    /**
     * An object that identifies the message.
     */
    metadata: EventSubWebSocketMessageMetadata;
    /**
     * An object that contains the message.
     */
    payload: EventSubWebSocketMessagePayload;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#transport
 */
export interface EventSubWebsocketTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod.Websocket;
    /**
     * An ID that identifies the WebSocket to send notifications to.
     *
     * @remarks When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.
     */
    session_id: string;
    /**
     * The UTC date and time that the WebSocket connection was established.
     */
    connected_at: string;
    /**
     * The UTC date and time that the WebSocket connection was lost.
     */
    disconnected_at: string|null;
}
