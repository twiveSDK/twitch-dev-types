import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export enum APIVideoType {
    /**
     * An on-demand video (VOD) of one of the broadcaster's past streams.
     */
    Archive = "archive",
    /**
     * A highlight reel of one of the broadcaster's past streams.
     */
    Highlight = "highlight",
    /**
     * A video that the broadcaster uploaded to their video library.
     */
    Upload = "upload",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export interface VideoMutedSegment {
    /**
     * The duration of the muted segment, in seconds.
     */
    duration: number;
    /**
     * The offset, in seconds, from the beginning of the video to where the muted segment begins.
     */
    offset: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export interface APIVideo {
    /**
     * An ID that identifies the video.
     */
    id: string;
    /**
     * The ID of the stream that the video originated from if the video's type is "archive;" otherwise, **null**.
     */
    stream_id: string|null;
    /**
     * The ID of the broadcaster that owns the video.
     */
    user_id: string;
    /**
     * The broadcaster’s login name.
     */
    user_login: string;
    /**
     * The broadcaster’s display name.
     */
    user_name: string;
    /**
     * The video's title.
     */
    title: string;
    /**
     * The video's description.
     */
    description: string;
    /**
     * The date and time, in UTC, of when the video was created. The timestamp is in RFC3339 format.
     */
    created_at: string;
    /**
     * The date and time, in UTC, of when the video was published. The timestamp is in RFC3339 format.
     */
    published_at: string;
    /**
     * The video's URL.
     */
    url: string;
    /**
     * A URL to a thumbnail image of the video.
     *
     * @remarks Before using the URL, you must replace the `%{width}` and `%{height}` placeholders with the width
     * and height of the thumbnail you want returned. Due to current limitations, `${width}` must be 320 and `${height}`
     * must be 180.
     */
    thumbnail_url: string;
    /**
     * The video's viewable state.
     *
     * @remarks Always set to **public**.
     */
    viewable: string;
    /**
     * The number of times that users have watched the video.
     */
    view_count: number;
    /**
     * The ISO 639-1 two-letter language code that the video was broadcast in.
     * For example, the language code is DE if the video was broadcast in German.
     *
     * @remarks The language value is "other" if the video was broadcast in a language not in the list of supported
     * languages.
     */
    language: string;
    /**
     * The video's type.
     */
    type: APIVideoType;
    /**
     * The video's length in ISO 8601 duration format. For example, 3m21s represents 3 minutes, 21 seconds.
     */
    duration: string;
    /**
     * The segments that Twitch Audio Recognition muted; otherwise, **null**.
     */
    muted_segments: VideoMutedSegment[]|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export enum RESTGetVideosSortRequestParam {
    /**
     * Sort the results in descending order by when they were created (i.e., latest video first).
     */
    Time = "time",
    /**
     * Sort the results in descending order by biggest gains in viewership (i.e., highest trending video first).
     */
    Trending = "trending",
    /**
     * Sort the results in descending order by most views (i.e., highest number of views first).
     */
    Views = "views",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export enum RESTGetVideosPeriodRequestParam {
    All = "all",
    Day = "day",
    Week = "week",
    Month = "month",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export interface RESTGetVideosRequestParams extends RESTPaginationRequestParams {
    /**
     * A list of IDs that identify the videos you want to get.
     *
     * @remarks To get more than one video, include this parameter for each video you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate IDs
     * and IDs that weren't found (if there's at least one valid ID).
     */
    id: string;
    /**
     * The ID of the user whose list of videos you want to get.
     */
    user_id: string;
    /**
     * A category or game ID.
     */
    game_id: string;
    /**
     * A filter used to filter the list of videos by the language that the video owner broadcasts in.
     * For example, to get videos that were broadcast in German, set this parameter to the ISO 639-1 two-letter code
     * for German (i.e., DE).
     *
     * @remarks If the language is not supported, use “other.”
     * Specify this parameter only if you specify the *game_id* query parameter.
     */
    language?: string;
    /**
     * A filter used to filter the list of videos by when they were published.
     * For example, videos published in the last week.
     *
     * @remarks The default is "all," which returns videos published in all periods.
     * Specify this parameter only if you specify the *game_id* or *user_id* query parameter.
     */
    period?: RESTGetVideosPeriodRequestParam;
    /**
     * The order to sort the returned videos in.
     *
     * @remarks The default is "time."
     * Specify this parameter only if you specify the `game_id` or `user_id` query parameter.
     */
    sort?: RESTGetVideosSortRequestParam;
    /**
     * A filter used to filter the list of videos by the video's type.
     *
     * @remarks The default is "all," which returns all video types.
     * Specify this parameter only if you specify the *game_id* or *user_id* query parameter.
     */
    type?: APIVideoType|"all";
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-videos
 */
export interface RESTGetVideosResponse extends APIPaginatedResponse<APIVideo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-videos
 */
export interface RESTDeleteVideoRequestParams {
    /**
     * The list of videos to delete.
     *
     * @remarks To specify more than one video, include the id parameter for each video to delete.
     * For example, `id=1234&id=5678`. You can delete a maximum of 5 videos per request. Ignores invalid video IDs.
     * If the user doesn’t have permission to delete one of the videos in the list, none of the videos are deleted.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-videos
 */
export interface RESTDeleteVideoResponse extends APIResponse<string> {}
