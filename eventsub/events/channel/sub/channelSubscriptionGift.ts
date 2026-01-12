import type {BaseBroadcasterInfo} from "../../common";
import type {ChannelSubscriptionTier} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-gift-event
 */
export interface ChannelSubscriptionGiftEvent extends BaseBroadcasterInfo {
    /**
     * The user ID of the user who sent the subscription gift.
     *
     * @remarks Set to `null` if it was an anonymous subscription gift.
     */
    user_id: string|null;
    /**
     * The user login of the user who sent the gift.
     *
     * @remarks Set to `null` if it was an anonymous subscription gift.
     */
    user_login: string|null;
    /**
     * The user display name of the user who sent the gift.
     *
     * @remarks Set to `null` if it was an anonymous subscription gift.
     */
    user_name: string|null;
    /**
     * The number of subscriptions in the subscription gift.
     */
    total: number;
    /**
     * The tier of subscriptions in the subscription gift.
     */
    tier: ChannelSubscriptionTier;
    /**
     * The number of subscriptions gifted by this user in the channel.
     *
     * @remarks This value is `null` for anonymous gifts or if the gifter has opted out of sharing this information.
     */
    cumulative_total: number|null;
    /**
     * Whether the subscription gift was anonymous.
     */
    is_anonymous: boolean;
}
