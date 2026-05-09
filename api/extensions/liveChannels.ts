import type { APIPaginatedResponse, RESTPaginationRequestParams } from "../common";

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
export interface RESTGetExtensionLiveChannelsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the extension to get.
     */
    extension_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels
 */
export interface RESTGetExtensionLiveChannelsResponse extends APIPaginatedResponse<APIExtensionLiveChannel> {}
