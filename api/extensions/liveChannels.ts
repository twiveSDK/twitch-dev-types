import type {APIPaginatedResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels
 */
export interface APIExtensionLiveChannel {
    /**
     * The ID of the broadcaster that is streaming live and has installed or activated the extension.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The name of the category or game being streamed.
     */
    game_name: string;
    /**
     * The ID of the category or game being streamed.
     */
    game_id: string;
    /**
     * The title of the broadcaster’s stream. Maybe an empty string if not specified.
     */
    title: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels
 */
export interface RESTGetExtensionLiveChannelsRequestParams {
    /**
     * The ID of the extension to get.
     */
    extension_id: string;
    /**
     * The specific maximum number of items per page in the response.
     * 
     * @remarks The actual number returned may be less than this limit.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels
 */
export interface RESTGetExtensionLiveChannelsResponse extends APIPaginatedResponse<APIExtensionLiveChannel> {}
