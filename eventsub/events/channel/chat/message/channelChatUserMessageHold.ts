import type {BaseBroadcasterInfo, BaseUserInfo} from "../../../common";
import type {ChannelChatMessageFragmentCheermote} from "./common";

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
    cheermote?: ChannelChatMessageFragmentCheermote;
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
