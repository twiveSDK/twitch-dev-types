import type { EventBroadcasterInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#shoutout-received
 */
export interface ChannelShoutoutReceiveEvent extends EventBroadcasterInfo {
    /**
     * An ID that identifies the broadcaster that sent the Shoutout.
     */
    from_broadcaster_user_id: string;
    /**
     * The broadcaster’s login name.
     */
    from_broadcaster_user_login: string;
    /**
     * The broadcaster’s display name.
     */
    from_broadcaster_user_name: string;
    /**
     * The number of users that were watching the from-broadcaster’s stream at the time of the Shoutout.
     */
    viewer_count: number;
    /**
     * The UTC timestamp (in RFC3339 format) of when the moderator sent the Shoutout.
     */
    started_at: string;
}
