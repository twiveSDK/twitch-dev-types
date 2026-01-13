import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface APIChannelStreamScheduleSegmentCategory {
    /**
     * An ID that identifies the category that best represents the content that the broadcaster plans to stream.
     * For example, the game’s ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster
     * will host a talk show.
     */
    id: string;
    /**
     * The name of the category. For example, the game’s title if the broadcaster will play a game
     * or Just Chatting if the broadcaster will host a talk show.
     */
    name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface APIChannelStreamScheduleVacation {
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.
     */
    start_time: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.
     */
    end_time: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface APIChannelStreamScheduleSegment {
    /**
     * An ID that identifies this broadcast segment.
     */
    id: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcast starts.
     */
    start_time: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcast ends.
     */
    end_time: string;
    /**
     * The broadcast segment’s title.
     */
    title: string;
    /**
     * Indicates whether the broadcaster canceled this segment of a recurring broadcast.
     *
     * @remarks If the broadcaster canceled this segment, this field is set to the same value that’s in the `end_time` field;
     * otherwise, it’s set to **null**.
     */
    canceled_until: string|null;
    /**
     * The type of content that the broadcaster plans to stream or **null** if not specified.
     */
    category: APIChannelStreamScheduleSegmentCategory|null;
    /**
     * A Boolean value that determines whether the broadcast is part of a recurring series that streams at
     * the same time each week or is a one-time broadcast.
     *
     * @remarks Is **true** if the broadcast is part of a recurring series.
     */
    is_recurring: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface APIChannelStreamSchedule {
    /**
     * The list of broadcasts in the broadcaster’s streaming schedule.
     */
    segments: APIChannelStreamScheduleSegment[];
    /**
     * The ID of the broadcaster that owns the broadcast schedule.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The dates when the broadcaster is on vacation and not streaming.
     *
     * @remarks Is set to **null** if vacation mode is not enabled.
     */
    vacation: APIChannelStreamScheduleVacation|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface RESTGetChannelStreamScheduleRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster that owns the streaming schedule you want to get.
     */
    broadcaster_id: string;
    /**
     * The ID of the scheduled segment to return.
     * @remarks To specify more than one segment, include the ID of each segment you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs.
     */
    id?: string;
    /**
     * The UTC date and time that identifies when in the broadcaster’s schedule to start returning segments.
     *
     * @remarks If not specified, the request returns segments starting after the current UTC date and time.
     * Specify the date and time in RFC3339 format (for example, `2022-09-01T00:00:00Z`).
     */
    start_time?: string;
    /**
     * @deprecated
     */
    utc_offset?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
 */
export interface RESTGetChannelStreamScheduleResponse extends APIPaginatedResponse<APIChannelStreamSchedule> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule
 */
export interface RESTPatchChannelStreamScheduleRequestParams {
    /**
     * The ID of the broadcaster whose schedule settings you want to update.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A Boolean value that indicates whether the broadcaster has scheduled a vacation.
     *
     * @remarks Set to **true** to enable Vacation Mode and add vacation dates,
     * or **false** to cancel a previously scheduled vacation.
     */
    is_vacation_enabled: boolean;
    /**
     * The UTC date and time of when the broadcaster’s vacation starts.
     *
     * @remarks Specify the date and time in RFC3339 format (for example, 2021-05-16T00:00:00Z).
     * Required if *is_vacation_enabled* is **true**.
     */
    vacation_start_time?: string;
    /**
     * The UTC date and time of when the broadcaster’s vacation ends.
     *
     * @remarks Specify the date and time in RFC3339 format (for example, 2021-05-30T23:59:59Z).
     * Required if *is_vacation_enabled* is **true**.
     */
    vacation_end_time?: string;
    /**
     * The time zone that the broadcaster broadcasts from.
     *
     * @remarks Specify the time zone using {@link https://www.iana.org/time-zones IANA time zone database} format
     * (for example, America/New_York). Required if `is_vacation_enabled` is **true**.
     */
    timezone?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment
 */
export interface RESTPostChannelStreamScheduleSegmentRequestParams {
    /**
     * The ID of the broadcaster that owns the schedule to add the broadcast segment to.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment
 */
export interface RESTPostChannelStreamScheduleSegmentRequestBody {
    /**
     * The date and time that the broadcast segment starts.
     *
     * @remarks Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z).
     */
    start_time: string;
    /**
     * The time zone where the broadcast takes place.
     *
     * @remarks Specify the time zone using {@link https://www.iana.org/time-zones IANA time zone database} format
     * (for example, America/New_York).
     */
    timezone: string;
    /**
     * The length of time, in minutes, that the broadcast is scheduled to run.
     *
     * @remarks The duration must be in the range 30 through 1380 (23 hours).
     */
    duration: string;
    /**
     * A Boolean value that determines whether the broadcast recurs weekly.
     *
     * @remraks Is **true** if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts.
     */
    is_recurring?: boolean;
    /**
     * The ID of the category that best represents the broadcast’s content.
     */
    category_id?: string;
    /**
     * The broadcast’s title.
     *
     * @remarks The title may contain a maximum of 140 characters.
     */
    title?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment
 */
export interface RESTPostChannelStreamScheduleSegmentResponse extends APIResponse<APIChannelStreamScheduleSegment> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment
 */
export interface RESTPatchChannelStreamScheduleSegmentRequestParams {
    /**
     * The ID of the broadcaster who owns the broadcast segment to update.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcast segment to update.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment
 */
export interface RESTPatchChannelStreamScheduleSegmentRequestBody {
    /**
     * The date and time that the broadcast segment starts.
     *
     * @remarks Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z).
     * Only partners and affiliates may update a broadcast’s start time and only for non-recurring segments.
     */
    start_time?: string;
    /**
     * The length of time, in minutes, that the broadcast is scheduled to run.
     *
     * @remarks The duration must be in the range 30 through 1380 (23 hours).
     */
    duration?: string;
    /**
     * The ID of the category that best represents the broadcast’s content.
     */
    category_id?: string;
    /**
     * The broadcast’s title.
     *
     * @remarks The title may contain a maximum of 140 characters.
     */
    title?: string;
    /**
     * A Boolean value that indicates whether the broadcast is canceled.
     *
     * @remarks Set to **true** to cancel the segment. For recurring segments, the API cancels the first segment after
     * the current UTC date and time and not the specified segment (unless the specified segment is the next segment after
     * the current UTC date and time).
     */
    is_canceled?: boolean;
    /**
     * The time zone where the broadcast takes place.
     *
     * @remarks Specify the time zone using {@link https://www.iana.org/time-zones IANA time zone database} format
     * (for example, America/New_York).
     */
    timezone?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment
 */
export interface RESTPatchChannelStreamScheduleSegmentResponse extends APIResponse<APIChannelStreamScheduleSegment> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-channel-stream-schedule-segment
 */
export interface RESTDeleteChannelStreamScheduleSegmentRequestParams {
    /**
     * The ID of the broadcaster that owns the streaming schedule.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcast segment to remove.
     */
    id: string;
}
