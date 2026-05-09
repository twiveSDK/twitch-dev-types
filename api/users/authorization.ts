import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-authorization-by-user
 */
export interface APIUserAuthorization {
    /**
     * The user’s ID.
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
    /**
     * An array of all the scopes the user has granted to the client ID.
     */
    scopes: string[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-authorization-by-user
 */
export interface RESTGetAuthorizationByUserRequestParams {
    /**
     * The ID of the user(s) you want to check authorization for.
     *
     * @remarks To specify more than one user, include the user_id parameter for each user to get.
     * For example, `user_id=1234&user_id=5678`. The maximum number of IDs you may specify is 10.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-authorization-by-user
 */
export interface RESTGetAuthorizationByUserResponse extends APIResponse<APIUserAuthorization> {}
