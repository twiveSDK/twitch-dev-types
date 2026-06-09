import type {
    ChannelPointsAutomaticRewardRedemptionEmote, ChannelPointsAutomaticRewardRedemptionType,
} from "../channelPointsAutomaticRewardRedemptionAdd";
import type { EventBroadcasterInfo, EventUserInfo } from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-v2-event
 */
export interface ChannelPointsAutomaticRewardRedemptionV2 {
    /**
     * The type of reward.
     */
    type: ChannelPointsAutomaticRewardRedemptionType;
    /**
     * Number of channel points used.
     */
    channel_points: number;
    /**
     * Emote associated with the reward.
     */
    emote: ChannelPointsAutomaticRewardRedemptionEmote|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-v2-event
 */
export enum ChannelPointsAutomaticRewardRedemptionMessageFragmentType {
    Text = "text",
    Emote = "emote"
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-v2-event
 */
export interface ChannelPointsAutomaticRewardRedemptionMessageFragment {
    /**
     * The message text in fragment.
     */
    text: string;
    /**
     * The type of message fragment.
     */
    type: ChannelPointsAutomaticRewardRedemptionMessageFragmentType;
    /**
     * The metadata pertaining to the emote.
     */
    emote: Omit<ChannelPointsAutomaticRewardRedemptionEmote, "name">|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-v2-event
 */
export interface ChannelPointsAutomaticRewardRedemptionMessageV2 {
    /**
     * The chat message in plain text.
     */
    text: string;
    /**
     * The ordered list of chat message fragments.
     */
    fragments: ChannelPointsAutomaticRewardRedemptionMessageFragment[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-v2-event
 */
export interface ChannelPointsAutomaticRewardRedemptionAddEventV2 extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The ID of the Redemption.
     */
    id: string;
    /**
     * An object that contains the reward information.
     */
    reward: ChannelPointsAutomaticRewardRedemptionV2;
    /**
     * An object that contains the user message and emote information needed to recreate the message.
     */
    message: ChannelPointsAutomaticRewardRedemptionMessageV2|null;
    /**
     * The UTC date and time (in RFC3339 format) of when the reward was redeemed.
     */
    redeemed_at: string;
}
