import type {BaseBroadcasterInfo, BaseUserInfo} from "../../../common";
import type {ChannelChatMessageFragmentCheermote} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-event
 */
export interface ChannelChatUserUpdatedMessageFragmentEmote {
    /**
     * An ID that uniquely identifies this emote.
     */
    id: string;
    /**
     * An ID that identifies the emote set that the emote belongs to.
     */
    emote_set_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-event
 */
export interface ChannelChatUserUpdatedMessageFragment {
    /**
     * Message text in a fragment.
     */
    text: string;
    /**
     * Metadata pertaining to the emote.
     */
    emote?: ChannelChatUserUpdatedMessageFragmentEmote;
    /**
     * Metadata pertaining to the cheermote.
     */
    cheermote?: ChannelChatMessageFragmentCheermote;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-event
 */
export interface ChannelChatUserUpdatedMessage {
    /**
     * The contents of the message caught by automod.
     */
    text: string;
    /**
     * Ordered list of chat message fragments.
     */
    fragments: ChannelChatUserUpdatedMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-event
 */
export enum ChannelChatUserMessageUpdateStatus {
    Approved = "approved",
    Denied = "denied",
    Invalid = "invalid",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-event
 */
export interface ChannelChatUserMessageUpdateEvent extends BaseBroadcasterInfo, BaseUserInfo {
    /**
     * The message’s status.
     */
    status: ChannelChatUserMessageUpdateStatus;
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The body of the message.
     */
    message: ChannelChatUserUpdatedMessage;
}
