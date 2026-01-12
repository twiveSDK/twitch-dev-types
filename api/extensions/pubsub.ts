/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-extension-pubsub-message
 */
export enum APIExtensionPubSubMessageTargets {
    Broadcast = "broadcast",
    Global = "global",
    Whisper = "whisper<user_id>",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-extension-pubsub-message
 */
export interface RESTPostExtensionPubSubMessageRequestBody {
    /**
     * The target of the message.
     * 
     * @remarks If `is_global_broadcast` is **true**, you must set this field to global.
     * The broadcast and global values are mutually exclusive; specify only one of them.
     */
    target: APIExtensionPubSubMessageTargets[];
    /**
     * The ID of the broadcaster to send the message to.
     * 
     * @remarks Don’t include this field if `is_global_broadcast` is set to **true**.
     */
    broadcaster_id: string;
    /**
     * A Boolean value that determines whether the message should be sent to all channels where your extension is active.
     * 
     * @remarks Set to **true** if the message should be sent to all channels. The default is **false**.
     */
    is_global_broadcast?: boolean;
    /**
     * The message to send.
     * 
     * @remarks The message can be a plain-text string or a string-encoded JSON object.
     * The message is limited to a maximum of 5 KB.
     */
    message: string;
}
