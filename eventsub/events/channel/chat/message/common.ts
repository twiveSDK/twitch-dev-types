import type {BaseUserInfo} from "../../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export enum ChannelChatMessageFragmentType {
    Text = "text",
    Cheermote = "cheermote",
    Emote = "emote",
    Mention = "mention",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export enum ChannelChatMessageFragmentEmoteFormat {
    /**
     * An animated GIF is available for this emote.
     */
    Animated = "animated",
    /**
     * A static PNG file is available for this emote.
     */
    Static = "static",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageFragmentEmote {
    /**
     * The ID that uniquely identifies this emote.
     */
    id: string;
    /**
     * The ID that identifies the emote set that the emote belongs to.
     */
    emote_set_id: string;
    /**
     * The ID of the broadcaster who owns the emote.
     */
    owner_id: string;
    /**
     * The formats that the emote is available in.
     *
     * @remakrs For example, if the emote is available only as a static PNG, the array contains only static.
     * But if the emote is available as a static PNG and an animated GIF, the array contains static and animated.
     */
    format: ChannelChatMessageFragmentEmoteFormat[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageFragmentCheermote {
    /**
     * The name portion of the Cheermote string that you use in chat to cheer Bits.
     * The full Cheermote string is the concatenation of {prefix} + {number of Bits}.
     *
     * @remarks For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string
     * is Cheer100. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the
     * Bits tier that was cheered.
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessageFragment {
    /**
     * The type of chat message fragment.
     */
    type: ChannelChatMessageFragmentType;
    /**
     * Message text in fragment.
     */
    text: string;
    /**
     * Metadata pertaining to the cheermote.
     */
    cheermote?: ChannelChatMessageFragmentCheermote;
    /**
     * Metadata pertaining to the emote.
     */
    emote?: ChannelChatMessageFragmentEmote;
    /**
     * Metadata pertaining to the mention.
     */
    mention?: BaseUserInfo;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatMessage {
    /**
     * The chat message in plain text.
     */
    text: string;
    /**
     * Ordered list of chat message fragments.
     */
    fragments: ChannelChatMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export enum ChannelChatMessageType {
    Text = "text",
    ChannelPointsHighlighted = "channel_points_highlighted",
    ChannelPointsSubOnly = "channel_points_sub_only",
    UserIntro = "user_intro",
    PowerUpsMessageEffect = "power_ups_message_effect",
    PowerUpsGigantifiedEmote = "power_ups_gigantified_emote",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-event
 */
export interface ChannelChatBadge {
    /**
     * An ID that identifies this set of chat badges. For example, Bits or Subscriber.
     */
    set_id: string;
    /**
     * An ID that identifies this version of the badge.
     *
     * @remarks The ID can be any value. For example, for Bits, the ID is the Bits tier level,
     * but for World of Warcraft, it could be Alliance or Horde.
     */
    id: string;
    /**
     * Contains metadata related to the chat badges in the badges tag.
     *
     * @remarks Currently, this tag contains metadata only for subscriber badges, to indicate the number of months the
     * user has been a subscriber.
     */
    info: string;
}
