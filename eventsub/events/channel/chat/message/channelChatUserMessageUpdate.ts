import type {BaseBroadcasterInfo, BaseUserInfo} from "../../../common";

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
export interface ChannelChatUserUpdatedMessageFragmentCheermote {
    /**
     * The name portion of the Cheermote string that you use in chat to cheer Bits.
     * The full Cheermote string is the concatenation of {prefix} + {number of Bits}.
     *
     * @remarks For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100.
     * When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that
     * was cheered.
     */
    prefix: string;
    /**
     * The amount of Bits cheered.
     */
    bits: number;
    /**
     * The tier level of the cheermote.
     */
    tier: number;
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
    cheermote?: ChannelChatUserUpdatedMessageFragmentCheermote;
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
