import type {BaseBroadcasterInfo, BaseUserInfo} from "../../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-event
 */
export interface ChannelChatUserHoldMessageFragmentEmote {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-event
 */
export interface ChannelChatUserHoldMessageFragmentCheermote {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-event
 */
export interface ChannelChatUserHoldMessageFragment {
    /**
     * Message text in a fragment.
     */
    text: string;
    /**
     * Metadata pertaining to the emote.
     */
    emote?: ChannelChatUserHoldMessageFragmentEmote;
    /**
     * Metadata pertaining to the cheermote.
     */
    cheermote?: ChannelChatUserHoldMessageFragmentCheermote;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-event
 */
export interface ChannelChatUserHoldMessage {
    /**
     * The contents of the message caught by automod.
     */
    text: string;
    /**
     * Ordered list of chat message fragments.
     */
    fragments: ChannelChatUserHoldMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-event
 */
export interface ChannelChatUserMessageHoldEvent extends BaseBroadcasterInfo, BaseUserInfo {
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The body of the message.
     */
    message: ChannelChatUserHoldMessage;
}
