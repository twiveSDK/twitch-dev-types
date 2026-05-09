import type { EventBroadcasterInfo, EventUserInfo } from "../../common";
import type { ChannelSubscriptionTier } from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#emotes
 */
export interface ChannelSubscriptionMessageEmote {
    /**
     * The index of where the Emote starts in the text.
     */
    begin: number;
    /**
     * The index of where the Emote ends in the text.
     */
    end: number;
    /**
     * The emote ID.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#message
 */
export interface ChannelSubscriptionMessage {
    /**
     * The text of the resubscription chat message.
     */
    text: string;
    /**
     * An array that includes the emote ID and start and end positions for where the emote appears in the text.
     */
    emotes: ChannelSubscriptionMessageEmote[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-message-event
 */
export interface ChannelSubscriptionMessageEvent extends EventUserInfo, EventBroadcasterInfo {
    /**
     * The tier of the user’s subscription.
     */
    tier: ChannelSubscriptionTier;
    /**
     * An object that contains the resubscription message and emote information needed to recreate the message.
     */
    message: ChannelSubscriptionMessage;
    /**
     * The total number of months the user has been subscribed to the channel.
     */
    cumulative_months: number;
    /**
     * The number of consecutive months the user’s current subscription has been active.
     *
     * @remarks This value is `null` if the user has opted out of sharing this information.
     */
    streak_months: number|null;
    /**
     * The month duration of the subscription.
     */
    duration_months: number;
}
