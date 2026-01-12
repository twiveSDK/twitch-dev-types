/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#transport
 */
export enum EventSubTransportMethod {
    Webhook = "webhook",
    Websocket = "websocket",
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
