import type {EventBroadcasterInfo} from "../common";
import type {ChannelGuestStarHost} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-session-end-event
 */
export interface ChannelGuestStarSessionEndEvent extends EventBroadcasterInfo, ChannelGuestStarHost {
    /**
     * ID representing the unique session that was started.
     */
    session_id: string;
    /**
     * RFC3339 timestamp indicating the time the session began.
     */
    started_at: string;
    /**
     * RFC3339 timestamp indicating the time the session ended.
     */
    ended_at: string;
}
