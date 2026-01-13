import type {APIPaginatedResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-categories
 */
export interface APICategory {
    /**
     * A URL to an image of the game’s box art or streaming category.
     */
    box_art_url: string;
    /**
     * The name of the game or category.
     */
    name: string;
    /**
     * An ID that uniquely identifies the game or category.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-categories
 */
export interface RESTGetCategoriesRequestParams extends RESTPaginationRequestParams {
    /**
     * The URI-encoded search string. For example, encode *#archery* as `%23archery`
     * and search strings like *angel of death* as *angel%20of%20death*.
     */
    query: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-categories
 */
export interface RESTGetCategoriesResponse extends APIPaginatedResponse<APICategory> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-channels
 */
export interface APIChannel {
    /**
     * The ISO 639-1 two-letter language code of the language used by the broadcaster. For example, en for English.
     *
     * @remarks If the broadcaster uses a language not in the list of
     * {@link https://help.twitch.tv/s/article/languages-on-twitch?#streamlang supported stream languages},
     * the value is other.
     */
    broadcaster_language: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    display_name: string;
    /**
     * The ID of the game that the broadcaster is playing or last played.
     */
    game_id: string;
    /**
     * The name of the game that the broadcaster is playing or last played.
     */
    game_name: string;
    /**
     * An ID that uniquely identifies the channel (this is the broadcaster’s ID).
     */
    id: string;
    /**
     * A Boolean value that determines whether the broadcaster is streaming live.
     *
     * @remarks Is **true** if the broadcaster is streaming live; otherwise, **false**.
     */
    is_live: boolean;
    /**
     * @deprecated February 28, 2023
     */
    tag_ids: string[];
    /**
     * The tags applied to the channel.
     */
    tags: string[];
    /**
     * A URL to a thumbnail of the broadcaster’s profile image.
     */
    thumbnail_url: string;
    /**
     * The stream’s title. Is an empty string if the broadcaster didn’t set it.
     */
    title: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the broadcaster started streaming.
     *
     * @remarks The string is empty if the broadcaster is not streaming live.
     */
    started_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-channels
 */
export interface RESTGetChannelsRequestParams extends RESTPaginationRequestParams {
    /**
     * The URI-encoded search string. For example, encode search strings like *angel of death* as `angel%20of%20death`.
     */
    query: string;
    /**
     * A Boolean value that determines whether the response includes only channels that are currently streaming live.
     *
     * @remarks Set to **true** to get only channels that are streaming live; otherwise, false to get live and offline channels.
     * The default is **false**.
     */
    live_only?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#search-channels
 */
export interface RESTGetChannelsResponse extends APIPaginatedResponse<APIChannel> {}
