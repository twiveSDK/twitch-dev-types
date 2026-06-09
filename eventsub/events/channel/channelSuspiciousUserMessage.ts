import type { ChannelSuspiciousUserLowTrustStatus } from "./channelSuspiciousUserUpdate";
import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export enum ChannelSuspiciousUserType {
    ManuallyAdded = "manually_added",
    BanEvader = "ban_evader",
    BannedInSharedChannels = "banned_in_shared_channel",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export enum ChannelSuspiciousUserBanEvasionEvaluation {
    Unknown = "unknown",
    Possible = "possible",
    Likely = "likely",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export enum ChannelSuspiciousUserMessageFragmentType {
    Text = "text",
    Cheermote = "cheermote",
    Emote = "emote",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export interface ChannelSuspiciousUserMessageFragmentCheermote {
    /**
     * The name portion of the Cheermote string that you use in chat to cheer Bits.
     *
     * @remarks The full Cheermote string is the concatenation of {prefix} + {number of Bits}.
     * For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100.
     * When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier
     * that was cheered.
     */
    prefix: string;
    /**
     * The amount of Bits cheered.
     */
    bits: string;
    /**
     * The tier level of the cheermote.
     */
    tier: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export interface ChannelSuspiciousUserMessageFragmentEmote {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export interface ChannelSuspiciousUserMessageFragment {
    /**
     * The type of message fragment.
     */
    type: ChannelSuspiciousUserMessageFragmentType;
    /**
     * Message text in fragment.
     */
    text: string;
    /**
     * Metadata pertaining to the cheermote.
     */
    cheermote: ChannelSuspiciousUserMessageFragmentCheermote|null;
    /**
     * Metadata pertaining to the emote.
     */
    emote: ChannelSuspiciousUserMessageFragmentEmote|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export interface ChannelSuspiciousUserMessage {
    /**
     * The UUID that identifies the message.
     */
    message_id: string;
    /**
     * The chat message in plain text.
     */
    text: string;
    /**
     * Ordered list of chat message fragments.
     */
    fragments: ChannelSuspiciousUserMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-event
 */
export interface ChannelSuspiciousUserMessageEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The status set for the suspicious user.
     */
    low_trust_status: ChannelSuspiciousUserLowTrustStatus;
    /**
     * A list of channel IDs where the suspicious user is also banned.
     */
    shared_ban_channel_ids: string[];
    /**
     * User types (if any) that apply to the suspicious user.
     */
    types: ChannelSuspiciousUserType[];
    /**
     * A ban evasion likelihood value (if any) that as been applied to the user automatically by Twitch.
     */
    ban_evasion_evaluation: ChannelSuspiciousUserBanEvasionEvaluation;
    /**
     * The structured chat message.
     */
    message: ChannelSuspiciousUserMessage;
}
