import type {APIResponse, APIPaginatedResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduits
 */
export interface APIConduit {
    /**
     * The unique identifier for the conduit.
     */
    id: string;
    /**
     * Number of shards associated with this conduit.
     */
    shard_count: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduits
 */
export interface RESTGetConduitsResponse extends APIResponse<APIConduit> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-conduits
 */
export interface RESTPostConduitsRequestBody {
    /**
     * The number of shards to create for this conduit.
     */
    shard_count: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-conduits
 */
export interface RESTPostConduitsResponse extends APIResponse<APIConduit> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduits
 */
export interface RESTPatchConduitsRequestBody {
    /**
     * The unique identifier for the conduit to update.
     */
    id: string;
    /**
     * The new number of shards for this conduit.
     */
    shard_count: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduits
 */
export interface RESTPatchConduitsResponse extends APIResponse<APIConduit> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-conduits
 */
export interface RESTDeleteConduitsRequestParams {
    /**
     * The ID of the Conduit you want to delete.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export enum APIConduitShardStatus {
    /**
     * The shard is enabled.
     */
    Enabled = "enabled",
    /**
     * The shard is pending verification of the specified callback URL.
     */
    WebhookCallbackVerificationPending = "webhook_callback_verification_pending",
    /**
     * The specified callback URL failed verification.
     */
    WebhookCallbackVerificationFailed = "webhook_callback_verification_failed",
    /**
     * The notification delivery failure rate was too high.
     */
    NotificationFailuresExceeded = "notification_failures_exceeded",
    /**
     * The client closed the connection.
     */
    WebsocketDisconnected = "websocket_disconnected",
    /**
     * The client failed to respond to a ping message.
     */
    WebsocketFailedPingPong = "websocket_failed_ping_pong",
    /**
     * The client sent a non-pong message.
     *
     * @remarks Clients may only send pong messages (and only in response to a ping message).
     */
    WebsocketReceivedInboundTraffic = "websocket_received_inbound_traffic",
    /**
     * The Twitch WebSocket server experienced an unexpected error.
     */
    WebsocketInternalError = "websocket_internal_error",
    /**
     * The Twitch WebSocket server timed out writing the message to the client.
     */
    WebsocketNetworkTimeout = "websocket_network_timeout",
    /**
     * The Twitch WebSocket server experienced a network error writing the message to the client.
     */
    WebsocketNetworkError = "websocket_network_error",
    /**
     * The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
     */
    WebsocketFailedToReconnect = "websocket_failed_to_reconnect",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export enum APIConduitShardTransportMethod {
    Webhook = "webhook",
    Websocket = "websocket",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export interface APIConduitShardTransport {
    /**
     * The transport method.
     */
    method: APIConduitShardTransportMethod;
    /**
     * The callback URL where the notifications are sent.
     *
     * @remarks Included only if method is set to `webhook`.
     */
    callback?: string;
    /**
     * An ID that identifies the WebSocket that notifications are sent to.
     *
     * @remarks Included only if method is set to `websocket`.
     */
    session_id?: string;
    /**
     * The UTC date and time that the WebSocket connection was established.
     *
     * @remarks Included only if method is set to `websocket`.
     */
    connected_at?: string;
    /**
     * 	The UTC date and time that the WebSocket connection was lost.
     *
     * @remarks Included only if method is set to `websocket`.
     */
    disconnected_at?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export interface APIConduitShard {
    /**
     * The shard ID.
     */
    id: string;
    /**
     * The shard status.
     *
     * @remarks The subscriber receives events only for enabled shards.
     */
    status: APIConduitShardStatus;
    /**
     * The transport details used to send the notifications.
     */
    transport: APIConduitShardTransport
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export interface RESTGetConduitShardsRequestParams extends RESTPaginationRequestParams {
    /**
     * The unique identifier for the conduit to retrieve shards for.
     */
    conduit_id: string;
    /**
     * Status to filter by.
     */
    status?: APIConduitShardStatus;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
 */
export interface RESTGetConduitShardsResponse extends APIPaginatedResponse<APIConduitShard> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
 */
export interface RESTPatchConduitShardTransportRequestBodyParam {
    /**
     * The transport method
     */
    method?: APIConduitShardTransportMethod;
    /**
     * The callback URL where the notifications are sent.
     *
     * @remarks The URL must use the HTTPS protocol and port 443. See Processing an event.
     * Specify this field only if method is set to webhook.
     * Redirects are not followed.
     */
    callback?: string;
    /**
     * The secret used to verify the signature.
     *
     * @remarks The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long.
     * For information about how the secret is used, see Verifying the event message.
     * Specify this field only if method is set to webhook.
     */
    secret?: string;
    /**
     * An ID that identifies the WebSocket to send notifications to.
     *
     * @remarks When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.
     * Specify this field only if method is set to websocket.
     */
    session_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
 */
export interface RESTPatchConduitShardRequestBodyData {
    /**
     * The shard ID to update.
    */
    id: string;
    /**
     * The transport details that you want Twitch to use when sending you notifications.
     */
    transport: RESTPatchConduitShardTransportRequestBodyParam;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
 */
export interface RESTPatchConduitShardsRequestBody {
    /**
     * The unique identifier for the conduit to update shards for.
     */
    conduit_id: string;
    /**
     * The list of shards to update.
     */
    shards: RESTPatchConduitShardRequestBodyData[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
 */
export interface APIUnsuccessfulConduitShardUpdateError {
    /**
     * The shard ID that failed to update.
     */
    id: string;
    /**
     * The error that occurred while updating the shard
     */
    message: string;
    /**
     * Error codes used to represent a specific error condition while attempting to update shards.
     */
    code: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
 */
export interface RESTPatchConduitShardsResponse extends APIResponse<APIConduitShard> {
    /**
     * List of unsuccessful updates.
     */
    errors?: APIUnsuccessfulConduitShardUpdateError[];
}
