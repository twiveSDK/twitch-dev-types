import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-message
 */
export interface APIChatMessageDropReason {
    /**
     * Code for why the message was dropped.
     */
    code: string;
    /**
     * Message for why the message was dropped.
     */
    message: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-message
 */
export interface APIChatMessage {
    /**
     * The message id for the message that was sent.
     */
    message_id: string;
    /**
     * If the message passed all checks and was sent.
     */
    is_sent: boolean;
    /**
     * The reason the message was dropped, if any.
     */
    drop_reason?: APIChatMessageDropReason;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-message
 */
export interface RESTPostChatMessageRequestBody {
    /**
     * The ID of the broadcaster whose chat room the message will be sent to.
     */
    broadcaster_id: string;
    /**
     * The ID of the user sending the message.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    sender_id: string;
    /**
     * The message to send. 
     *
     * @remarks The message is limited to a maximum of 500 characters.
     * Chat messages can also include emoticons. To include emoticons, use the name of the emote.
     * The names are case-sensitive. Don’t include colons around the name (e.g., :bleedPurple:).
     * If Twitch recognizes the name, Twitch converts the name to the emote
     * before writing the chat message to the chat room
     */
    message: string;
    /**
     * The ID of the chat message being replied to.
     */
    reply_parent_message_id?: string;
    /**
     * Determines if the chat message is sent only to the source channel (defined by *broadcaster_id*)
     * during a shared chat session. This has no effect if the message is sent during a shared chat session.
     *
     * @remarks This parameter can only be set when utilizing an App Access Token. It cannot be specified
     * when a User Access Token is used, and will instead result in an HTTP 400 error.
     */
    for_source_only?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-message
 */
export interface RESTPostChatMessageResponse extends APIResponse<APIChatMessage> {}
