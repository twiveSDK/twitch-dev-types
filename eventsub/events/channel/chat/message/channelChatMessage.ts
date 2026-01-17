import type {EventBroadcasterInfo} from "../../../common";
import type {ChannelChatBadge, ChannelChatMessage, ChannelChatMessageType} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageCheer {
    /**
     * The amount of Bits the user cheered.
     */
    bits: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageReply {
    /**
     * An ID that uniquely identifies the parent message that this message is replying to.
     */
    parent_message_id: string;
    /**
     * The message body of the parent message.
     */
    parent_message_body: string;
    /**
     * User ID of the sender of the parent message.
     */
    parent_user_id: string;
    /**
     * Username of the sender of the parent message.
     */
    parent_user_name: string;
    /**
     * User login of the sender of the parent message.
     */
    parent_user_login: string;
    /**
     * An ID that identifies the parent message of the reply thread.
     */
    thread_message_id: string;
    /**
     * User ID of the sender of the thread’s parent message.
     */
    thread_user_id: string;
    /**
     * Username of the sender of the thread’s parent message.
     */
    thread_user_name: string;
    /**
     * User login of the sender of the thread’s parent message.
     */
    thread_user_login: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageEvent extends EventBroadcasterInfo {
    /**
     * The user ID of the user that sent the message.
     */
    chatter_user_id: string;
    /**
     * The username of the user that sent the message.
     */
    chatter_user_name: string;
    /**
     * The user login of the user that sent the message.
     */
    chatter_user_login: string;
    /**
     * A UUID that identifies the message.
     */
    message_id: string;
    /**
     * The structured chat message.
     */
    message: ChannelChatMessage;
    /**
     * The type of message.
     */
    message_type: ChannelChatMessageType;
    /**
     * List of chat badges.
     */
    badges: ChannelChatBadge[];
    /**
     * Metadata if this message is a cheer.
     */
    cheer?: ChannelChatMessageCheer;
    /**
     * The color of the user’s name in the chat room.
     *
     * @remarks This is a hexadecimal RGB color code in the form, `#&lt;RGB&gt;`. This tag may be empty if it is
     * never set.
     */
    color: string;
    /**
     * Metadata if this message is a reply.
     */
    reply?: ChannelChatMessageReply;
    /**
     * The ID of a channel points custom reward that was redeemed.
     */
    channel_points_custom_reward_id?: string;
    /**
     * The broadcaster user ID of the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other than the
     * broadcaster.
     */
    source_broadcaster_user_id?: string|null;
    /**
     * The username of the broadcaster of the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other than the
     * broadcaster.
     */
    source_broadcaster_user_name?: string|null;
    /**
     * The login of the broadcaster of the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other than the
     * broadcaster.
     */
    source_broadcaster_user_login?: string|null;
    /**
     * The UUID that identifies the source message from the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other than the
     * broadcaster.
     */
    source_message_id: string|null;
    /**
     * The list of chat badges for the chatter in the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other than the
     * broadcaster.
     */
    source_badges: ChannelChatBadge[]|null;
    /**
     * Determines if a message delivered during a shared chat session is only sent to the source channel.
     *
     * @remarks Has no effect if the message is not sent during a shared chat session.
     */
    is_source_only?: boolean;
}
