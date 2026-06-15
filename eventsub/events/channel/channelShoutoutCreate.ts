import type {EventBroadcasterInfo, EventModeratorInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#shoutout-create
 */
export interface ChannelShoutoutCreateEvent extends EventBroadcasterInfo, EventModeratorInfo {
    /**
     * An ID that identifies the broadcaster that received the Shoutout.
     */
    to_broadcaster_user_id: string;
    /**
     * The broadcaster’s login name.
     */
    to_broadcaster_user_login: string;
    /**
     * The broadcaster’s display name.
     */
    to_broadcaster_user_name: string;
    /**
     * The number of users that were watching the broadcaster’s stream at the time of the Shoutout.
     */
    viewer_count: number;
    /**
     * The UTC timestamp (in RFC3339 format) of when the moderator sent the Shoutout.
     */
    started_at: string;
    /**
     * The UTC timestamp (in RFC3339 format) of when the broadcaster may send a Shoutout to a different broadcaster.
     */
    cooldown_ends_at: string;
    /**
     * The UTC timestamp (in RFC3339 format) of when the broadcaster may send another Shoutout to the broadcaster in
     * `to_broadcaster_user_id`.
     */
    target_cooldown_ends_at: string;
}
