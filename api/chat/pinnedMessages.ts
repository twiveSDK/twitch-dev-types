import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface APIPinnedChatMessageFragmentCheermote {
    /**
     * The cheermote prefix.
     */
    prefix: string;
    /**
     * The number of bits cheered.
     */
    bits: number;
    /**
     * The cheermote tier.
     */
    tier: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface APIPinnedChatMessageFragmentEmote {
    /**
     * The emote ID.
     */
    id: string;
    /**
     * The emote set ID.
     */
    emote_set_id: string;
    /**
     * The ID of the emote owner.
     */
    owner_id: string;
    /**
     * The emote formats available.
     */
    format: string[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export enum APIPinnedChatMessageFragmentType {
    Text = "text",
    Emote = "emote",
    Cheermote = "cheermote",
    Mention = "mention",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface APIPinnedChatMessageFragment {
    /**
     * The fragment type.
     */
    type: APIPinnedChatMessageFragmentType;
    /**
     * Fragment text.
     */
    text: string;
    /**
     * Cheermote metadata.
     */
    cheermote: APIPinnedChatMessageFragmentCheermote|null;
    /**
     * Emote metadata.
     */
    emote: APIPinnedChatMessageFragmentEmote|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface APIPinnedChatMessage {
    /**
     * Plain text of the message.
     */
    text: string;
    /**
     * Ordered list of message fragments.
     */
    fragments: APIPinnedChatMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface APIPinnedChatMessageData {
    /**
     * The ID of the pinned chat message.
     */
    message_id: string;
    /**
     * The ID of the broadcaster.
     */
    broadcaster_id: string;
    /**
     * The ID of the user who sent the pinned message.
     */
    sender_user_id: string;
    /**
     * The login of the user who sent the pinned message.
     */
    sender_user_login: string;
    /**
     * The display name of the user who sent the pinned message.
     */
    sender_user_name: string;
    /**
     * The ID of the user who pinned the message.
     */
    pinned_by_user_id: string;
    /**
     * The login of the user who pinned the message.
     */
    pinned_by_user_login: string;
    /**
     * The display name of the user who pinned the message.
     */
    pinned_by_user_name: string;
    /**
     * The pinned message content.
     */
    message: APIPinnedChatMessage;
    /**
     * RFC3339 timestamp of when the message was pinned.
     */
    starts_at: string;
    /**
     * RFC3339 expiry timestamp. Null if pinned until stream ends.
     */
    ends_at: string;
    /**
     * RFC3339 timestamp of last update.
     */
    updated_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface RESTGetPinnedChatMessageRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message
 */
export interface RESTGetPinnedChatMessageResponse extends APIResponse<APIPinnedChatMessage> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#pin-chat-message
 */
export interface RESTPutPinChatMessageRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     */
    moderator_id: string;
    /**
     * The ID of the message to pin.
     */
    message_id: string;
    /**
     * The number of seconds the message should be pinned for.
     *
     * @remarks Minimum: 30. Maximum: 1800. If not specified, the message will be pinned until the stream ends.
     */
    duration_seconds?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-pinned-chat-message
 */
export interface RESTPatchPinnedChatMessageRequestParams extends RESTPutPinChatMessageRequestParams {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#unpin-chat-message
 */
export interface RESTDeletePinnedChatMessageRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     */
    moderator_id: string;
    /**
     * The ID of the message to unpin.
     */
    message_id: string;
}
