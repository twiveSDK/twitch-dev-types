import type {EventBroadcasterInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-session-begin-event
 */
export interface ChannelGuestStarSessionBeginEvent extends EventBroadcasterInfo {
    /**
     * ID representing the unique session that was started.
     */
    session_id: string;
    /**
     * RFC3339 timestamp indicating the time the session began.
      */
    started_at: string;
}
