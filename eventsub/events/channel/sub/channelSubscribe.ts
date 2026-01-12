import type {BaseBroadcasterInfo, BaseUserInfo} from "../../common";
import type {ChannelSubscriptionTier} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscribe-event
 */
export interface ChannelSubscribeEvent extends BaseUserInfo, BaseBroadcasterInfo {
    /**
     * The tier of the subscription.
     */
    tier: ChannelSubscriptionTier;
    /**
     * Whether the subscription is a gift.
     */
    is_gift: boolean;
}
