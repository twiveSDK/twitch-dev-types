import type {APIPaginatedResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-chatters
 */
export interface APIChatter {
    /**
     * The ID of a user that’s connected to the broadcaster’s chat room.
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
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-chatters
 */
export interface RESTGetChattersRequestParams {
    /**
     * The ID of the broadcaster whose list of chatters you want to get.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or one of the broadcaster’s moderators
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The maximum number of items to return per page in the response.
     *
     * @remarks The minimum page size is 1 item per page and the maximum is 1,000. The default is 100.
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-chatters
 */
export interface RESTGetChattersResponse extends APIPaginatedResponse<APIChatter> {
    /**
     * The total number of users that are connected to the broadcaster’s chat room.
     *
     * @remarks As you page through the list, the number of users may change as users join and leave the chat room.
     */
    total: number;
}
