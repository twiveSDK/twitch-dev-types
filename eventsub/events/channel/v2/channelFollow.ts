import type {BaseBroadcasterInfo, BaseUserInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-follow-event
 */
export interface ChannelFollowEvent extends BaseUserInfo, BaseBroadcasterInfo {
    /**
     * RFC3339 timestamp of when the follow occurred.
     */
    followed_at: string;
}
