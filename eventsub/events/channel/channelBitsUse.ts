import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export enum ChannelBitsUseType {
    Cheer = "cheer",
    PowerUp = "power_up",
    CustomPowerUp = "custom_power_up",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export enum ChannelBitsUseMessageFragmentType {
    Text = "text",
    Cheermote = "cheermote",
    Emote = "emote",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export enum ChannelBitsUseMessageFragmentEmoteFormat {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseMessageFragmentEmote {
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
    format: ChannelBitsUseMessageFragmentEmoteFormat[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseMessageFragmentCheermote {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseMessageFragment {
    /**
     * The message text in fragment.
     */
    text: string;
    /**
     * The type of message fragment.
     */
    type: ChannelBitsUseMessageFragmentType;
    /**
     * The metadata pertaining to the emote.
     */
    emote: ChannelBitsUseMessageFragmentEmote|null;
    /**
     * The metadata pertaining to the cheermote.
     */
    cheermote: ChannelBitsUseMessageFragmentCheermote|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseMessage {
    /**
     * The chat message in plain text.
     */
    text: string;
    /**
     * The ordered list of chat message fragments.
     */
    fragments: ChannelBitsUseMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export enum ChannelBitsUsePowerUpType {
    MessageEffect = "message_effect",
    Celebration = "celebration",
    GigantifyAnEmote = "gigantify_an_emote",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUsePowerUpEmote {
    /**
     * The ID that uniquely identifies this emote.
     */
    id: string;
    /**
     * The human-readable emote token.
     */
    name: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUsePowerUp {
    /**
     * The type of Power-up used.
     */
    type: ChannelBitsUsePowerUpType;
    /**
     * Emote associated with the reward.
     */
    emote: ChannelBitsUsePowerUpEmote|null;
    /**
     * The ID of the message effect.
     */
    message_effect_id: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseCustomPowerUp {
    /**
     * The title of the custom Power-up.
     */
    title: string;
    /**
     * The ID of the custom Power-up.
     */
    reward_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-event
 */
export interface ChannelBitsUseEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The number of Bits used.
     */
    bits: number;
    /**
     * The type of Bits use.
     */
    type: ChannelBitsUseType;
    /**
     * An object that contains the user message and emote information needed to recreate the message.
     */
    message: ChannelBitsUseMessage|null;
    /**
     * Data about a default (i.e. built-in) Power-up.
     */
    power_up: ChannelBitsUsePowerUp|null;
    /**
     * Data about a custom Power-up.
     */
    custom_power_up: ChannelBitsUseCustomPowerUp|null;
}
