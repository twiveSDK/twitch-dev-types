import type {APIPaginatedResponse} from "../common";

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
export interface RESTGetModeratedChannelsRequestParams {
    /**
     * A user’s ID. Returns the list of channels that this user has moderator privileges in.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
    /**
     * The maximum number of items to return per page in the response.
     *
     * @remarks Minimum page size is 1 item per page and the maximum is 100. The default is 20.
     */
    first?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
 */
export interface RESTGetModeratedChannelsResponse extends APIPaginatedResponse<APIModeratedChannel> {}
