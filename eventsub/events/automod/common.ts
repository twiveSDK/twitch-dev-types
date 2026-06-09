/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event
 */
export interface AutomodMessageFragmentCheermote {
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
    bits: number;
    /**
     * The tier level of the cheermote.
     */
    tier: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event
 */
export interface AutomodMessageFragmentEmote {
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
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event
 */
export interface AutomodMessageFragment {
    /**
     * Message text in a fragment.
     */
    text: string;
    /**
     * Metadata pertaining to the emote.
     */
    emote: AutomodMessageFragmentEmote|null;
    /**
     * Metadata pertaining to the emote.
     */
    cheermote: AutomodMessageFragmentCheermote|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event
 */
export interface AutomodMessage {
    /**
     * The contents of the message caught by automod.
     */
    text: string;
    /**
     * Metadata surrounding the potential inappropriate fragments of the message.
     */
    fragments: AutomodMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export enum AutomodMessageFragmentType {
    Text = "text",
    Emote = "emote",
    Cheermote = "cheermote",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageFragmentV2 extends AutomodMessageFragment {
    /**
     * The type of fragment.
     */
    type: AutomodMessageFragmentType;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageV2 {
    /**
     * The contents of the message caught by automod.
     */
    text: string;
    /**
     * Metadata surrounding the potential inappropriate fragments of the message.
     */
    fragments: AutomodMessageFragmentV2[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageBoundary {
    /**
     * Index in the message for the start of the problem (0 indexed, inclusive).
     */
    start_pos: number;
    /**
     * Index in the message for the end of the problem (0 indexed, inclusive).
     */
    end_pos: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageBlockedTermFound {
    /**
     * The id of the blocked term found.
     */
    term_id: string;
    /**
     * The bounds of the text that caused the message to be caught.
     */
    boundary: AutomodMessageBoundary;
    /**
     * The id of the broadcaster that owns the blocked term.
     */
    owner_broadcaster_user_id: string;
    /**
     * The login of the broadcaster that owns the blocked term.
     */
    owner_broadcaster_user_login: string;
    /**
     * The username of the broadcaster that owns the blocked term.
     */
    owner_broadcaster_user_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageBlockedTerm {
    /**
     * The list of blocked terms found in the message.
     */
    terms_found: AutomodMessageBlockedTermFound[];
}
