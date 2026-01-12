import type {APIPaginatedResponse, APIResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-polls
 */
export enum APIPollStatus {
    /**
     * The poll is running.
     */
    Active = "ACTIVE",
    /**
     * The poll ended on schedule (see the `duration` field).
     */
    Completed = "COMPLETED",
    /**
     * The poll was terminated before its scheduled end.
     */
    Terminated = "TERMINATED",
    /**
     * The poll has been archived and is no longer visible on the channel.
     */
    Archived = "ARCHIVED",
    /**
     * The poll was deleted.
     */
    Moderated = "MODERATED",
    /**
     * Something went wrong while determining the state.
     */
    Invalid = "INVALID"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-polls
 */
export interface APIPollChoice {
    /**
     * An ID that identifies this choice.
     */
    id: string;
    /**
     * The choice's title.
     *
     * @remarks The title may contain a maximum of 25 characters.
     */
    title: string;
    /**
     * The total number of votes cast for this choice.
     */
    votes: number;
    /**
     * The number of votes cast using Channel Points.
     */
    channel_points_votes: number;
    /**
     * @deprecated
     */
    bits_votes: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-polls
 */
export interface APIPoll {
    /**
     * An ID that identifies the poll.
     */
    id: string;
    /**
     * An ID that identifies the broadcaster that created the poll.
     */
    broadcaster_id: string;
    /**
     * The broadcaster's display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster's login name.
     */
    broadcaster_login: string;
    /**
     * The question that viewers are voting on. For example, *What game should I play next?*
     *
     * @remarks The title may contain a maximum of 60 characters.
     */
    title: string;
    /**
     * A list of choices that viewers can choose from.
     *
     * @remarks The list will contain a minimum of two choices and up to a maximum of five choices.
     */
    choices: APIPollChoice[];
    /**
     * @deprecated
     */
    bits_voting_enabled: boolean;
    /**
     * @deprecated
     */
    bits_per_vote: number;
    /**
     * A Boolean value that indicates whether viewers may cast additional votes using Channel Points.
     *
     * @remarks For information about Channel Points, see {@link https://help.twitch.tv/s/article/channel-points-guide Channel Points Guide}.
     */
    channel_points_voting_enabled: boolean;
    /**
     * The number of points the viewer must spend to cast one additional vote.
     */
    channel_points_per_vote: number;
    /**
     * The poll's status.
     */
    status: APIPollStatus;
    /**
     * The length of time (in seconds) that the poll will run for.
     */
    duration: number;
    /**
     * The UTC date and time (in RFC3339 format) of when the poll began.
     */
    started_at: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the poll ended.
     *
     * @remarks If status is ACTIVE, this field is set to null.
     */
    ended_at: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-polls
 */
export interface RESTGetPollsRequestParams {
    /**
     * The ID of the broadcaster that created the polls.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A list of IDs that identify the polls to return.
     *
     * @remarks To specify more than one ID, include this parameter for each poll you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 20 IDs.
     * Specify this parameter only if you want to filter the list that the request returns.
     * The endpoint ignores duplicate IDs and those not owned by this broadcaster.
     */
    id?: string;
    /**
     * The maximum number of items to return per page in the response.
     *
     * @remarks The minimum page size is 1 item per page and the maximum is 20 items per page. The default is 20.
     */
    first?: number;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-polls
 */
export interface RESTGetPollsResponse extends APIPaginatedResponse<APIPoll> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-poll
 */
export interface RESTPostPollChoiceData {
    /**
     * One of the choices the viewer may select.
     *
     * @remarks The choice may contain a maximum of 25 characters.
     */
    title: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-poll
 */
export interface RESTPostPollRequestBody {
    /**
     * The ID of the broadcaster that’s running the poll.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The question that viewers will vote on. For example, `What game should I play next?`
     *
     * @remarks The question may contain a maximum of 60 characters.
     */
    title: string;
    /**
     * A list of choices that viewers may choose from.
     *
     * @remarks The list must contain a minimum of 2 choices and up to a maximum of 5 choices.
     */
    choices: RESTPostPollChoiceData[];
    /**
     * The length of time (in seconds) that the poll will run for.
     *
     * @remarks The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes).
     */
    duration: number;
    /**
     * A Boolean value that indicates whether viewers may cast additional votes using Channel Points.
     *
     * @remarks If **true**, the viewer may cast more than one vote but each additional vote costs the number
     * of Channel Points specified in `channel_points_per_vote`. The default is **false** (viewers may cast only one vote).
     * For information about Channel Points,
     * see {@link https://help.twitch.tv/s/article/channel-points-guide Channel Points Guide}.
     */
    channel_points_voting_enabled?: boolean;
    /**
     * The number of points that the viewer must spend to cast one additional vote.
     *
     * @remarks The minimum is 1 and the maximum is 1000000. Set only if `channel_points_voting_enabled` is true.
     */
    channel_points_per_vote?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-poll
 */
export interface RESTPostPollResponse extends APIResponse<APIPoll> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-poll
 */
export enum RESTPatchPollStatusRequestParam {
    /**
     * Ends the poll before the poll is scheduled to end. The poll remains publicly visible.
     */
    Terminated = "TERMINATED",
    /**
     * Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible.
     */
    Achieved = "ACHIEVED",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-poll
 */
export interface RESTPatchPollRequestParams {
    /**
     * The ID of the broadcaster that’s running the poll.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the poll to end.
     */
    id: string;
    /**
     * The status to set the poll to.
     */
    status: RESTPatchPollStatusRequestParam;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-poll
 */
export interface RESTPatchPollResponse extends APIResponse<APIPoll> {}
