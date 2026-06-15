import type {EventSubTransportMethod} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conduit-shard-disabled-event
 */
export interface ConduitShardDisabledEvent {
    /**
     * The ID of the conduit.
     */
    conduit_id: string;
    /**
     * The ID of the disabled shard.
     */
    shard_id: string;
    /**
     * The new status of the transport.
     */
    status: string;
    /**
     * The disabled transport.
     */
    transport: Record<string, string>;
    /**
     * The transport method.
     */
    method: EventSubTransportMethod;
    /**
     * Webhook callback URL.
     *
     * @remarks Null if `method` is set to **websocket**.
     */
    callback?: string|null;
    /**
     * WebSocket session ID.
     *
     * @remarks Null if `method` is set to **webhook**.
     */
    session_id?: string|null;
    /**
     * Time that the WebSocket session connected.
     *
     * @remarks Null if `method` is set to **webhook**.
     */
    connected_at?: string|null;
    /**
     * Time that the WebSocket session disconnected.
     *
     * @remarks Null if `method` is set to **webhook**.
     */
    disconnected_at?: string|null;
}
