import type {EventBroadcasterInfo, EventUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-follow-event
 */
export interface ChannelFollowEvent extends EventUserInfo, EventBroadcasterInfo {
    /**
     * RFC3339 timestamp of when the follow occurred.
     */
    followed_at: string;
}
