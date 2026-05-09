import type { EventBroadcasterInfo, EventModeratorInfo, EventUserInfo } from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-ban-event
 */
export interface ChannelBanEvent extends EventUserInfo, EventBroadcasterInfo, EventModeratorInfo {
    /**
     * The reason behind the ban.
     */
    reason: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the user was banned or put in a timeout.
     */
    banned_at: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the timeout ends.
     *
     * @remarks Is **null** if the user was banned instead of put in a timeout.
     */
    ends_at: string|null;
    /**
     * Indicates whether the ban is permanent (true) or a timeout (false).
     */
    is_permanent: boolean;
}
