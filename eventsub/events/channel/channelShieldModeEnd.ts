import type { EventBroadcasterInfo, EventModeratorInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#shield-mode
 */
export interface ChannelShieldModeEndEvent extends EventBroadcasterInfo, EventModeratorInfo {
    /**
     * The UTC timestamp (in RFC3339 format) of when the moderator deactivated Shield Mode.
     */
    ended_at: string;
}
