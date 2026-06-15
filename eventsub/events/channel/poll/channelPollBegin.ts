import type {EventBroadcasterInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#choices
 */
export interface ChannelPollChoice {
    /**
     * ID for the choice.
     */
    id: string;
    /**
     * Text displayed for the choice.
     */
    title: string;
    /**
     * @deprecated Not used; will be set to 0.
     */
    bits_votes: number;
    /**
     * Number of votes received via Channel Points.
     */
    channel_points_votes: number;
    /**
     * Total number of votes received for the choice across all methods of voting.
     */
    votes: number;
}

/**
 * @deprecated
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#bits-voting
 */
export interface ChannelPollBitsVoting {
    /**
     * Not used; will be set to **false**.
     */
    is_enabled: boolean;
    /**
     * Not used; will be set to 0.
     */
    amount_per_vote: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-voting
 */
export interface ChannelPollChannelPointsVoting {
    /**
     * Indicates if Channel Points can be used for voting.
     */
    is_enabled: boolean;
    /**
     * Number of Channel Points required to vote once with Channel Points.
     */
    amount_per_vote: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-begin-event
 */
export interface ChannelPollBeginEvent extends EventBroadcasterInfo {
    /**
     * ID of the poll.
     */
    id: string;
    /**
     * Question displayed for the poll.
     */
    title: string;
    /**
     * An array of choices for the poll.
     */
    choices: ChannelPollChoice[];
    /**
     * @deprecated Not supported.
     */
    bits_voting: ChannelPollBitsVoting;
    /**
     * The Channel Points voting settings for the poll.
     */
    channel_points_voting: ChannelPollChannelPointsVoting;
    /**
     * The time the poll started.
     */
    started_at: string;
    /**
     * The time the poll will end.
     */
    ends_at: string;
}
