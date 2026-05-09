import type { APIPaginatedResponse, APIResponse, RESTPaginationRequestParams } from "./common";

export interface APIGame {
    /**
     * An ID that identifies the category or game.
     */
    id: string;
    /**
     * The category’s or game’s name.
     */
    name: string;
    /**
     * A URL to the category’s or game’s box art.
     * 
     * @remarks You must replace the `{width}x{height}` placeholder with the size of image you want.
     */
    box_art_url: string;
    /**
     * The ID that {@link https://www.igdb.com/ IGDB} uses to identify this game.
     * 
     * @remarks If the IGDB ID is not available to Twitch, this field is set to an empty string.
     */
    igdb_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-top-games
 */
export interface RESTGetTopGamesRequestParams extends RESTPaginationRequestParams {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-top-games
 */
export interface RESTGetTopGamesResponse extends APIPaginatedResponse<APIGame> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-games
 */
export interface RESTGetGamesRequestParams {
    /**
     * The ID of the category or game to get.
     *
     * @remarks Include this parameter for each category or game you want to get.
     * For example, `&id=1234&id=5678`. You may specify a maximum of 100 IDs.
     * The endpoint ignores duplicate and invalid IDs or IDs that weren’t found.
     */
    id: string;
    /**
     * The name of the category or game to get.
     *
     * @remarks The name must exactly match the category’s or game’s title.
     * Include this parameter for each category or game you want to get. For example, `&name=foo&name=bar`.
     * You may specify a maximum of 100 names. The endpoint ignores duplicate names and names that weren’t found.
     */
    name: string;
    /**
     * The {@link https://www.igdb.com/ IGDB} ID of the game to get.
     *
     * @remarks Include this parameter for each game you want to get.
     * For example, `&igdb_id=1234&igdb_id=5678`. You may specify a maximum of 100 IDs.
     * The endpoint ignores duplicate and invalid IDs or IDs that weren’t found.
     */
    igdb_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-games
 */
export interface RESTGetGamesResponse extends APIResponse<APIGame> {}
