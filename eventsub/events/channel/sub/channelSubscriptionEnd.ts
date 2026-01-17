import type {ChannelSubscriptionTier} from "./common";
import type {EventBroadcasterInfo, EventUserInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-end-event
 */
export interface ChannelSubscriptionEndEvent extends EventUserInfo, EventBroadcasterInfo {
    /**
     * The tier of the subscription that ended.
     */
    tier: ChannelSubscriptionTier;
    /**
     * Whether the subscription was a gift.
     */
    is_gift: boolean;
}
