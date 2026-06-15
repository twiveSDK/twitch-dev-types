import type {ChannelGoalBeginEvent} from "./channelGoalBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#goals-event
 */
export interface ChannelGoalEndEvent extends ChannelGoalBeginEvent {
    /**
     * A Boolean value that indicates whether the broadcaster achieved their goal.
     *
     * @remarks Is **true** if the goal was achieved; otherwise, **false**.
     */
    is_achieved: boolean;
    /**
     * The UTC timestamp in RFC3339 format, which indicates when the broadcaster ended the goal.
     */
    ended_at: string;
}
