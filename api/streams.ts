import type { APIPaginatedResponse, APIResponse, RESTPaginationRequestParams } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-key
 */
export interface APIStreamKey {
    /**
     * The channel’s stream key.
     */
    stream_key: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-key
 */
export interface RESTGetStreamKeyRequestParams {
    /**
     * The ID of the broadcaster that owns the channel.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-key
 */
export interface RESTGetStreamKeyResponse extends APIResponse<APIStreamKey> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-streams
 */
export interface APIStream {
    /**
     * An ID that identifies the stream.
     *
     * @remarks You can use this ID later to look up the video on demand (VOD).
     */
    id: string;
    /**
     * The ID of the user that’s broadcasting the stream.
     */
    user_id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The ID of the category or game being played.
     */
    game_id: string;
    /**
     * The name of the category or game being played.
     */
    game_name: string;
    /**
     * The type of stream.
     *
     * @remarks If an error occurs, this field is set to an empty string.
     */
    type: "live"|"";
    /**
     * The stream’s title.
     *
     * @remarks Is an empty string if not set.
     */
    title: string;
    /**
     * The tags applied to the stream.
     */
    tags: string[];
    /**
     * The number of users watching the stream.
     */
    viewer_count: number;
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcast began.
     */
    started_at: string;
    /**
     * The language that the stream uses.
     *
     * @remarks This is an ISO 639-1 two-letter language code or other if the stream uses a language not in the list of
     * {@link https://help.twitch.tv/s/article/languages-on-twitch?#streamlang supported stream languages}.
     */
    language: string;
    /**
     * A URL to an image of a frame from the last 5 minutes of the stream.
     *
     * @remarks Replace the width and height placeholders in the URL (`{width}x{height}`) with the size of the image
     * you want, in pixels.
     */
    thumbnail_url: string;
    /**
     * @deprecated February 28, 2023
     */
    tag_ids: string[];
    /**
     * A Boolean value that indicates whether the stream is meant for mature audiences.
     */
    is_mature: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-streams
 */
export interface RESTGetStreamsRequestParams extends RESTPaginationRequestParams {
    /**
     * A user ID used to filter the list of streams.
     *
     * @remarks Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 IDs.
     * To specify multiple IDs, include the *user_id* parameter for each user.
     * For example, `&user_id=1234&user_id=5678`.
     */
    user_id?: string;
    /**
     * A user login name used to filter the list of streams.
     *
     * @remarks Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 login
     * names. To specify multiple names, include the *user_login* parameter for each user.
     * For example, `&user_login=foo&user_login=bar`.
     */
    user_login?: string;
    /**
     * A game (category) ID used to filter the list of streams.
     *
     * @remarks Returns only the streams that are broadcasting the game (category). You may specify a maximum of 100 IDs.
     * To specify multiple IDs, include the *game_id* parameter for each game. For example, `&game_id=987&game_id=5432`.
     */
    game_id?: string;
    /**
     * The type of stream to filter the list of streams by
     *
     * @remarks The default is *all*.
     */
    type?: "live"|"all";
    /**
     * A language code used to filter the list of streams.
     *
     * @remarks Returns only streams that broadcast in the specified language.
     * Specify the language using an ISO 639-1 two-letter language code
     * or other if the broadcast uses a language not in the list of
     * {@link https://help.twitch.tv/s/article/languages-on-twitch?#streamlang supported stream languages}.
     * You may specify a maximum of 100 language codes. To specify multiple languages, include the *language* parameter
     * for each language. For example, `&language=de&language=fr`.
     */
    language?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-streams
 */
export interface RESTGetStreamsResponse extends APIPaginatedResponse<APIStream> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-followed-streams
 */
export interface RESTGetFollowedStreamsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the user whose list of followed streams you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-followed-streams
 */
export interface RESTGetFollowedStreamsResponse extends APIPaginatedResponse<APIStream> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-stream-marker
 */
export interface APICreatedStreamMarkerInfo {
    /**
     * An ID that identifies this marker.
     */
    id: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the user created the marker.
     */
    created_at: string;
    /**
     * The relative offset (in seconds) of the marker from the beginning of the stream.
     */
    position_seconds: number;
    /**
     * A description that the user gave the marker to help them remember why they marked the location.
     */
    description: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-stream-marker
 */
export interface RESTPostStreamMarkerRequestBody {
    /**
     * The ID of the broadcaster that’s streaming content.
     *
     * @remarks ID must match the **user_id** in the authentication token or user is one of the broadcaster’s editors.
     */
    user_id: string;
    /**
     * A short description of the marker to help the user remember why they marked the location.
     *
     * @remarks The maximum length of the description is 140 characters.
     */
    description?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-stream-marker
 */
export interface RESTPostStreamMarkerResponse extends APIResponse<APICreatedStreamMarkerInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
 */
export interface APIStreamMarker {
    /**
     * An ID that identifies this marker.
     */
    id: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the user created the marker.
     */
    created_at: string;
    /**
     * The description that the user gave the marker to help them remember why they marked the location.
     *
     * @remakrs Is an empty string if the user didn’t provide one.
     */
    description: string;
    /**
     * The relative offset (in seconds) of the marker from the beginning of the stream.
     */
    position_seconds: number;
    /**
     * A URL that opens the video in Twitch Highlighter.
     */
    url: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
 */
export interface APIStreamMarkerVideo {
    /**
     * An ID that identifies this video.
     */
    video_id: string;
    /**
     * The list of markers in this video.
     *
     * @remarks The list in ascending order by when the marker was created.
     */
    markers: APIStreamMarker[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
 */
export interface APIStreamMarkerList {
    /**
     * The ID of the user that created the marker.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * 	The user’s login name.
     */
    user_login: string;
    /**
     * A list of videos that contain markers.
     * @remarks The list contains a single video.
     */
    videos: APIStreamMarkerVideo[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
 */
export interface RESTGetStreamMarkersRequestParams extends RESTPaginationRequestParams {
    /**
     * A user ID.
     *
     * @remarks The request returns the markers from this user’s most recent video.
     * This ID must match the user ID in the access token or the user in the access token must be one
     * of the broadcaster’s editors. This parameter and the *video_id* query parameter are mutually exclusive.
     */
    user_id: string;
    /**
     * A video on demand (VOD)/video ID.
     *
     * @remarks The request returns the markers from this VOD/video. The user in the access token must own the video
     * or the user must be one of the broadcaster’s editors. This parameter and the *user_id* query parameter are
     * mutually exclusive.
     */
    video_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
 */
export interface RESTGetStreamMarkersResponse extends APIPaginatedResponse<APIStreamMarkerList> {}
