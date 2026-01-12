import type {ChannelPointsCustomRewardRedemption, ChannelPointsCustomRewardRedemptionStatus} from "./common";
import type {BaseBroadcasterInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-redemption-add-event
 */
export interface ChannelPointsCustomRewardRedemptionAddEvent extends BaseBroadcasterInfo, BaseUserInfo {
    /**
     * The redemption identifier.
     */
    id: string;
    /**
     * The user input provided.
     *
     * @remarks Empty string if not provided.
     */
    user_input: string;
    /**
     * The redemption status.
     *
     * @remarks Defaults to `unfulfilled`.
     */
    status: ChannelPointsCustomRewardRedemptionStatus;
    /**
     * Basic information about the reward that was redeemed, at the time it was redeemed.
     */
    reward: ChannelPointsCustomRewardRedemption;
    /**
     * RFC3339 timestamp of when the reward was redeemed.
     */
    redeemed_at: string;
}
