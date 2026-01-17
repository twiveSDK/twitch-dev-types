import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-chat-messages
 */
export interface RESTDeleteChatMessagesRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room to remove messages from.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the message to remove.
     *
     * @remarks The `id` tag in the {@link https://dev.twitch.tv/docs/chat/irc/#privmsg-tags PRIVMSG}
     * tag contains the message’s ID. Restrictions:
     * - The message must have been created within the last 6 hours.
     * - The message must not belong to the broadcaster.
     * - The message must not belong to another moderator.
     *
     * If not specified, the request removes all messages in the broadcaster’s chat room.
     */
    message_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
 */
export interface APIWarnedChatUserInfo {
    /**
     * The ID of the channel in which the warning will take effect.
     */
    broadcaster_id: string;
    /**
     * The ID of the warned user.
     */
    user_id: string;
    /**
     * The ID of the user who applied the warning.
     */
    moderator_id: string;
    /**
     * The reason provided for warning.
     */
    reason: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
 */
export interface RESTPostWarnChatUserRequestParams {
    /**
     * The ID of the channel in which the warning will take effect.
     */
    broadcaster_id: string;
    /**
     * 	The ID of the twitch user who requested the warning.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
 */
export interface RESTPostWarnChatUserRequestBodyData {
    /**
     * The ID of the twitch user to be warned.
     */
    user_id: string;
    /**
     * 	A custom reason for the warning.
     *
     * @remarks Max 500 chars.
     */
    reason: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
 */
export interface RESTPostWarnChatUserRequestBody {
    /**
     * A list that contains information about the warning.
     */
    data: RESTPostWarnChatUserRequestBodyData;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
 */
export interface RESTPostWarnChatUserResponse extends APIResponse<APIWarnedChatUserInfo> {}
