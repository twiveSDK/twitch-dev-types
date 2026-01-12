import type {APIResponse, APIPaginatedResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-clip
 */
export interface APICreatedClipInfo {
    /**
     * A URL that you can use to edit the clip’s title, identify the part of the clip to publish, and publish the clip.
     * {@link https://help.twitch.tv/s/article/how-to-use-clips Learn More}
     * 
     * @remarks The URL is valid for up to 24 hours or until the clip is published, whichever comes first.
     */
    edit_url: string;
    /**
     * An ID that uniquely identifies the clip.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-clip
 */
export interface RESTPostClipRequestParams {
    /**
     * The ID of the broadcaster whose stream you want to create a clip from.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A Boolean value that determines whether the API captures the clip at the moment the viewer requests it or after a delay.
     * 
     * @remarks If **false** (default), Twitch captures the clip at the moment the viewer requests it
     * (this is the same clip experience as the Twitch UX).
     * If **true**, Twitch adds a delay before capturing the clip (this basically shifts the capture window to the right slightly).
     */
    has_delay?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-clip
 */
export interface RESTPostClipResponse extends APIResponse<APICreatedClipInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-clips
 */
export interface APIClip {
    /**
     * An ID that uniquely identifies the clip.
     */
    id: string;
    /**
     * A URL to the clip.
     */
    url: string;
    /**
     * A URL that you can use in an iframe to embed the clip
     * (see {@link https://dev.twitch.tv/docs/embed/video-and-clips/ Embedding Video and Clips}).
     */
    embed_url: string;
    /**
     * An ID that identifies the broadcaster that the video was clipped from.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * An ID that identifies the user that created the clip.
     */
    creator_id: string;
    /**
     * The user’s display name.
     */
    creator_name: string;
    /**
     * An ID that identifies the video that the clip came from.
     *
     * @remarks This field contains an empty string if the video is not available.
     */
    video_id: string;
    /**
     * The ID of the game that was being played when the clip was created.
     */
    game_id: string;
    /**
     * The ISO 639-1 two-letter language code that the broadcaster broadcasts in. For example, *en* for English.
     *
     * @remarks The value is other if the broadcaster uses a language that Twitch doesn’t support.
     */
    language: string;
    /**
     * The title of the clip.
     */
    title: string;
    /**
     * The number of times the clip has been viewed.
     */
    view_count: number;
    /**
     * The date and time of when the clip was created. The date and time is in RFC3339 format.
     */
    created_at: string;
    /**
     * A URL to a thumbnail image of the clip.
     */
    thumbnail_url: string;
    /**
     * The length of the clip, in seconds.
     *
     * @remarks Precision is 0.1.
     */
    duration: number;
    /**
     * The zero-based offset, in seconds, to where the clip starts in the video (VOD).
     *
     * @remarks Is **null** if the video is not available or hasn’t been created yet from the live stream (see `video_id`).
     * There’s a delay between when a clip is created during a broadcast and when the offset is set.
     * During the delay period, `vod_offset` is **null**. The delay is indeterminant but is typically minutes long.
     */
    vod_offset: number|null;
    /**
     * A Boolean value that indicates if the clip is featured or not.
     */
    is_featured: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-clips
 */
export interface RESTGetClipsRequestParams {
    /**
     * An ID that identifies the broadcaster whose video clips you want to get.
     *
     * @remarks Use this parameter to get clips that were captured from the broadcaster’s streams.
     */
    broadcaster_id: string;
    /**
     * An ID that identifies the game whose clips you want to get.
     *
     * @remarks Use this parameter to get clips that were captured from streams that were playing this game.
     */
    game_id: string;
    /**
     * An ID that identifies the clip to get.
     *
     * @remarks To specify more than one ID, include this parameter for each clip you want to get.
     * For example, `id=foo&id=bar`. You may specify a maximum of 100 IDs.
     * The API ignores duplicate IDs and IDs that aren’t found.
     */
    id: string;
    /**
     * The start date used to filter clips.
     *
     * @remarks The API returns only clips within the start and end date window.
     * Specify the date and time in RFC3339 format.
     */
    started_at?: string;
    /**
     * The end date used to filter clips. If not specified, the time window is the start date plus one week.
     *
     * @remarks Specify the date and time in RFC3339 format.
     */
    ended_at?: string;
    /**
     * The maximum number of clips to return per page in the response.
     *
     * @remarks The minimum page size is 1 clip per page and the maximum is 100. The default is 20.
     */
    first?: number;
    /**
     * The cursor used to get the previous page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    before?: string;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
    /**
     * A Boolean value that determines whether the response includes featured clips.
     *
     * @remarks If **true**, returns only clips that are featured. If **false**, returns only clips that aren’t featured.
     * All clips are returned if this parameter is not present.
     */
    is_featured?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-clips
 */
export interface RESTGetClipsResponse extends APIPaginatedResponse<APIClip> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference#get-clips-download
 */
export interface APIClipDownloadInfo {
    /**
     * An ID that uniquely identifies the clip.
     */
    clip_id: string;
    /**
     * The landscape URL to download the clip.
     *
     * @remarks This field is `null` if the URL is not available.
     */
    landscape_download_url: string;
    /**
     * The portrait URL to download the clip.
     *
     * @remarks This field is `null` if the URL is not available.
     */
    portrait_download_url: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference#get-clips-download
 */
export interface RESTGetClipDownloadRequestParams {
    /**
     * The User ID of the editor for the channel you want to download a clip for.
     *
     * @remarks If using the broadcaster’s auth token, this is the same as `broadcaster_id`.
     * This must match the `user_id` in the user access token.
     */
    editor_id: string;
    /**
     * The ID of the broadcaster you want to download clips for.
     */
    broadcaster_id: string;
    /**
     * The ID that identifies the clip you want to download.
     *
     * @remarks  Include this parameter for each clip you want to download, up to a maximum of 10 clips. For example,
     * `clip_id=SleepyGiftedPeppermintNerfRedBlaster-KbkBXYt3lOk3jy8-&clip_id=WimpyAltruisticKleeKeyboardCat-EiY5yMrEwZ4i4gwC`.
     */
    clip_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference#get-clips-download
 */
export interface RESTGetClipDownloadResponse extends APIResponse<APIClipDownloadInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-clip-from-vod
 */
export interface RESTCreateClipFromVODRequestParams {
    /**
     * The user ID of the editor for the channel you want to create a clip for. If using the broadcaster’s auth token,
     * this is the same as broadcaster_id. This must match the user_id in the user access token.
     */
    editor_id: string;
    /**
     * The user ID for the channel you want to create a clip for.
     */
    broadcaster_id: string;
    /**
     * ID of the VOD the user wants to clip.
     */
    vod_id: string;
    /**
     * Offset in the VOD to create the clip.
     *
     * @remarks `vod_offset` indicates where the clip will end. In other words, the clip will start at (`vod_offset` - `duration`)
     * and end at `vod_offset`. This means that the value of `vod_offset` must greater than or equal to the value of `duration`.
     */
    vod_offset: number;
    /**
     * The length of the clip, in seconds. Precision is 0.1. Defaults to 30. Min: 5 seconds, Max: 60 seconds.
     */
    duration?: number;
    /**
     * The title of the clip.
     */
    title: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-clip-from-vod
 */
export interface RESTCreateClipFromVODResponse extends APIResponse<APICreatedClipInfo> {}
