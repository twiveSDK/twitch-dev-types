import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-chat-settings
 */
export interface APIChatSettings {
    /**
     * The ID of the broadcaster specified in the request.
     */
    broadcaster_id: string;
    /**
     * A Boolean value that determines whether chat messages must contain only emotes.
     * 
     * @remarks Is **true** if chat messages may contain only emotes; otherwise, **false**.
     */
    emote_mode: boolean;
    /**
     * A Boolean value that determines whether the broadcaster restricts the chat room to followers only.
     * 
     * @remarks Is **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.
     * See the `follower_mode_duration` field for how long users must follow the broadcaster
     * before being able to participate in the chat room.
     */
    follower_mode: boolean;
    /**
     * The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. 
     * 
     * @remarks Is **null** if `follower_mode` is **false**.
     */
    follower_mode_duration: number|null;
    /**
     * The moderator’s ID. 
     * 
     * @remarks The response includes this field only if the request specifies a user access token that includes 
     * the **moderator:read:chat_settings** scope.
     */
    moderator_id: string;
    /**
     * A Boolean value that determines whether the broadcaster adds a short delay
     * before chat messages appear in the chat room.
     * This gives chat moderators and bots a chance to remove them before viewers can see the message.
     * 
     * @remarks See the `non_moderator_chat_delay_duration` field for the length of the delay.
     * Is **true** if the broadcaster applies a delay; otherwise, **false**.
     * The response includes this field only if the request specifies a user access token
     * that includes the **moderator:read:chat_settings** scope and the user in the *moderator_id* query parameter
     * is one of the broadcaster’s moderators.
     */
    non_moderator_chat_delay: boolean;
    /**
     * The amount of time, in seconds, that messages are delayed before appearing in chat.
     * 
     * @remarks Is **null** if `non_moderator_chat_delay` is **false**.
     * The response includes this field only if the request specifies a user access token
     * that includes the **moderator:read:chat_settings** scope and the user in the *moderator_id* query parameter
     * is one of the broadcaster’s moderators.
     */
    non_moderator_chat_delay_duration: number|null;
    /**
     * A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.
     * 
     * @remarks Is **true** if the broadcaster applies a delay; otherwise, **false**.
     * See the ´slow_mode_wait_time` field for the delay.
     */
    slow_mode: boolean;
    /**
     * The amount of time, in seconds, that users must wait between sending messages.
     *
     * @remarks Is **null** if `slow_mode` is **false**.
     */
    slow_mode_wait_time: number|null;
    /**
     * A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.
     *
     * @remarks Is **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.
     */
    subscriber_mode: boolean;
    /**
     * A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.
     *
     * @remarks Is **true** if the broadcaster requires unique messages only; otherwise, **false**.
     */
    unique_chat_mode: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-chat-settings
 */
export interface RESTGetChatSettingsRequestParams {
    /**
     * The ID of the broadcaster whose chat settings you want to get.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or one of the broadcaster’s moderators.
     *
     * @remarks This field is required only if you want to include the `non_moderator_chat_delay` 
     * and `non_moderator_chat_delay_duration` settings in the response.
     * If you specify this field, this ID must match the user ID in the user access token.
     */
    moderator_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-chat-settings
 */
export interface RESTGetChatSettingsResponse extends APIResponse<APIChatSettings> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-chat-settings
 */
export interface RESTPatchChatSettingsRequestParams {
    /**
     * The ID of the broadcaster whose chat settings you want to update.
     */
    broadcaster_id: string;
    /**
     * The ID of a user that has permission to moderate the broadcaster’s chat room,
     * or the broadcaster’s ID if they’re making the update.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-chat-settings
 */
export interface RESTPatchChatSettingsRequestBody {
    /**
     * A Boolean value that determines whether chat messages must contain only emotes.
     *
     * @remarks Set to **true** if only emotes are allowed; otherwise, **false**. The default is **false**.
     */
    emote_mode?: boolean;
    /**
     * A Boolean value that determines whether the broadcaster restricts the chat room to followers only.
     *
     * @remarks Set to **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.
     * The default is **true**. To specify how long users must follow the broadcaster before being able to participate
     * in the chat room, see the `follower_mode_duration` field.
     */
    follower_mode?: boolean;
    /**
     * The length of time, in minutes, that users must follow the broadcaster
     * before being able to participate in the chat room.
     *
     * @remarks Set only if `follower_mode` is **true**. Possible values are: 0 (no restriction) through 129600 (3 months).
     * The default is 0.
     */
    follower_mode_duration?: number;
    /**
     * A Boolean value that determines whether the broadcaster adds a short delay
     * before chat messages appear in the chat room.
     * This gives chat moderators and bots a chance to remove them before viewers can see the message.
     *
     * @remarks Set to **true** if the broadcaster applies a delay; otherwise, **false**. The default is **false**.
     * To specify the length of the delay, see the `non_moderator_chat_delay_duration` field.
     */
    non_moderator_chat_delay?: boolean;
    /**
     * The amount of time, in seconds, that messages are delayed before appearing in chat.
     *
     * @remarks Set only if `non_moderator_chat_delay` is **true**. Possible values are:
     * - 2 — 2 seconds delay (recommended)
     * - 4 — 4 seconds delay
     * - 6 — 6 seconds delay
     */
    non_moderator_chat_delay_duration?: number;
    /**
     * A Boolean value that determines whether the broadcaster limits
     * how often users in the chat room are allowed to send messages.
     *
     * @remarks Set to **true** if the broadcaster applies a wait period between messages; otherwise, **false**.
     * The default is **false**. To specify the delay, see the `slow_mode_wait_time` field.
     */
    slow_mode?: boolean;
    /**
     * The amount of time, in seconds, that users must wait between sending messages.
     *
     * @remarks Set only if `slow_mode` is **true**.
     * Possible values are: 3 (3 seconds delay) through 120 (2 minutes delay). The default is 30 seconds.
     */
    slow_mode_wait_time?: number;
    /**
     * A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.
     *
     * @remarks Set to **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.
     * The default is **false**.
     */
    subscriber_mode?: boolean;
    /**
     * A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.
     *
     * @remarks Set to **true** if the broadcaster allows only unique messages; otherwise, **false** The default is **false**.
     */
    unique_chat_mode?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-chat-settings
 */
export interface RESTPatchChatSettingsResponse extends APIResponse<APIChatSettings> {}
