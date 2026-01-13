import type {APIPaginatedResponse, RESTPaginationRequestParams} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderators
 */
export interface APIModerator {
    /**
     * The ID of the user that has permission to moderate the broadcaster’s channel.
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderators
 */
export interface RESTGetModeratorsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster whose list of moderators you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A list of user IDs used to filter the results.
     *
     * @remarks To specify more than one ID, include this parameter for each moderator you want to get.
     * For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
     * The returned list includes only the users from the list who are moderators in the broadcaster’s channel.
     * The list is returned in the same order as you specified the IDs.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-moderators
 */
export interface RESTGetModeratorsResponse extends APIPaginatedResponse<APIModerator> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-channel-moderator
 */
export interface RESTPostChannelModeratorRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the user to add as a moderator in the broadcaster’s chat room.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-channel-moderator
 */
export interface RESTDeleteChannelModeratorRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the user to remove as a moderator from the broadcaster’s chat room.
     */
    user_id: string;
}
