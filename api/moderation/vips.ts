import type {APIPaginatedResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-vips
 */
export interface APIChannelVIP {
    /**
     * An ID that uniquely identifies the VIP user.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The user’s login name.
     */
    user_login: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-vips
 */
export interface RESTGetVIPsRequestParams {
    /**
     * Filters the list for specific VIPs. 
     * 
     * @remarks To specify more than one user, include the user_id parameter for each user to get.
     * For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100.
     * Ignores the ID of those users in the list that aren’t VIPs.
     */
    user_id?: string;
    /**
     * The ID of the broadcaster whose list of VIPs you want to get.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The maximum number of items to return per page in the response.
     * 
     * @remarks The minimum page size is 1 item per page and the maximum is 100. The default is 20.
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-vips
 */
export interface RESTGetVIPsResponse extends APIPaginatedResponse<APIChannelVIP> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-channel-vip
 */
export interface RESTPostChannelVIPRequestParams {
    /**
     * The ID of the user to give VIP status to.
     */
    user_id: string;
    /**
     * The ID of the broadcaster that’s adding the user as a VIP.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-channel-vip
 */
export interface RESTDeleteChannelVIPRequestParams {
    /**
     * The ID of the user to remove VIP status from.
     */
    user_id: string;
    /**
     * The ID of the broadcaster who owns the channel where the user has VIP status.
     */
    broadcaster_id: string;
}
