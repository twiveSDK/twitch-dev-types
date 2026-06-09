import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export enum ChannelPointsAutomaticRewardRedemptionType {
    SingleMessageBypassSubMode = "single_message_bypass_sub_mode",
    SendHighlightedMessage = "send_highlighted_message",
    RandomSubEmoteUnlock = "random_sub_emote_unlock",
    ChosenSubEmoteUnlock = "chosen_sub_emote_unlock",
    ChosenModifiedSubEmoteUnlock = "chosen_modified_sub_emote_unlock",
    MessageEffect = "message_effect",
    GigantifyAnEmote = "gigantify_an_emote",
    Celebration = "celebration",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export interface ChannelPointsAutomaticRewardRedemptionEmote {
    /**
     * The emote ID.
     */
    id: string;
    /**
     * The human-readable emote token.
     */
    name: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export interface ChannelPointsAutomaticRewardRedemption {
    /**
     * The type of reward.
     */
    type: ChannelPointsAutomaticRewardRedemptionType;
    /**
     * The reward cost.
     */
    cost: number;
    /**
     * Emote that was unlocked.
     */
    unlocked_emote: ChannelPointsAutomaticRewardRedemptionEmote|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export interface ChannelPointsAutomaticRewardRedemptionMessageEmote {
    /**
     * The emote ID.
     */
    id: string;
    /**
     * The index of where the Emote starts in the text.
     */
    begin: number;
    /**
     * The index of where the Emote ends in the text.
     */
    end: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export interface ChannelPointsAutomaticRewardRedemptionMessage {
    /**
     * The text of the chat message.
     */
    text: string;
    /**
     * An array that includes the emote ID and start and end positions for where the emote appears in the text.
     */
    emotes: ChannelPointsAutomaticRewardRedemptionMessageEmote[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-event
 */
export interface ChannelPointsAutomaticRewardRedemptionAddEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The ID of the Redemption.
     */
    id: string;
    /**
     * An object that contains the reward information.
     */
    reward: ChannelPointsAutomaticRewardRedemption;
    /**
     * An object that contains the user message and emote information needed to recreate the message.
     */
    message: ChannelPointsAutomaticRewardRedemptionMessage;
    /**
     * A string that the user entered if the reward requires to be input.
     */
    user_input: string|null;
    /**
     * The UTC date and time (in RFC3339 format) of when the reward was redeemed.
     */
    redeemed_at: string;
}
