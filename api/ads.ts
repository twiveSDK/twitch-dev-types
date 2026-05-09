import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-commercial
 */
export interface APIStartedCommercialInfo {
    /**
     * The length of the commercial you requested.
     * 
     * @remarks If you request a commercial that’s longer than 180 seconds, the API uses 180 seconds.
     */
    length: number;
    /**
     * A message that indicates whether Twitch was able to serve an ad.
     */
    message: string;
    /**
     * The number of seconds you must wait before running another commercial.
     */
    retry_after: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-commercial
 */
export interface RESTPostCommercialRequestBody {
    /**
     * The ID of the partner or affiliate broadcaster that wants to run the commercial.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The length of the commercial to run, in seconds.
     *
     * @remarks Twitch tries to serve a commercial that’s the requested length, but it may be shorter or longer.
     * The maximum length you should request is 180 seconds.
     */
    length: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-commercial
 */
export interface RESTPostCommercialResponse extends APIResponse<APIStartedCommercialInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-ad-schedule
 */
export interface APIAdSchedule {
    /**
     * The number of snoozes available for the broadcaster.
     */
    snooze_count: number;
    /**
     * The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.
     */
    snooze_refresh_at: string;
    /**
     * The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format.
     *
     * @remarks Empty if the channel has no ad scheduled or is not live.
     */
    next_ad_at: string;
    /**
     * The length in seconds of the scheduled upcoming ad break.
     */
    duration: number;
    /**
     * The UTC timestamp of the broadcaster’s last ad-break, in RFC3339 format.
     *
     * @remarks Empty if the channel has not run an ad or is not live.
     */
    last_ad_at: string;
    /**
     * The amount of pre-roll free time remaining for the channel in seconds.
     *
     * @remarks Returns 0 if they are currently not pre-roll free.
     */
    preroll_free_time: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-ad-schedule
 */
export interface RESTGetAdScheduleRequestParams {
    /**
     * The ID of the broadcaster whose ad schedule you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-ad-schedule
 */
export interface RESTGetAdScheduleResponse extends APIResponse<APIAdSchedule> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#snooze-next-ad
 */
export interface APISnoozeNextAdInfo {
    /**
     * The number of snoozes available for the broadcaster.
     */
    snooze_count: number;
    /**
     * The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.
     */
    snooze_refresh_at: string;
    /**
     * The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format.
     */
    next_ad_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#snooze-next-ad
 */
export interface RESTPostSnoozeNextAdRequestParams {
    /**
     * The ID of the broadcaster to snooze next ad schedule.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#snooze-next-ad
 */
export interface RESTPostSnoozeNextAdResponse extends APIResponse<APISnoozeNextAdInfo> {}
