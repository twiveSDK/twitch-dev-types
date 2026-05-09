import type { APIPaginatedResponse, RESTPaginationRequestParams } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
 */
export interface APIModeratedChannel {
    /**
     * An ID that uniquely identifies the channel this user can moderate.
     */
    broadcaster_id: string;
    /**
     * The channel’s login name.
     */
    broadcaster_login: string;
    /**
     * The channel’s display name.
     */
    broadcaster_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
 */
export interface RESTGetModeratedChannelsRequestParams extends RESTPaginationRequestParams {
    /**
     * A user’s ID. Returns the list of channels that this user has moderator privileges in.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
 */
export interface RESTGetModeratedChannelsResponse extends APIPaginatedResponse<APIModeratedChannel> {}
