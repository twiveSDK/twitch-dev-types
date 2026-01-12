import type {ChannelPollBeginEvent} from "./channelPollBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-end-event
 */
export enum ChannelPollEndStatus {
    Completed = "completed",
    Archived = "archived",
    Terminated = "terminated"
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-end-event
 */
export interface ChannelPollEndEvent extends ChannelPollBeginEvent {
    /**
     * The status of the poll.
     */
    status: ChannelPollEndStatus;
}
