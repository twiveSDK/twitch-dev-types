import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-banned-users
 */
export interface APIBannedUser {
    /**
     * The ID of the banned user.
     */
    user_id: string;
    /**
     * The banned user’s login name.
     */
    user_login: string;
    /**
     * The banned user’s display name.
     */
    user_name: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is
     * permanently banned.
     */
    expires_at: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the user was banned.
     */
    created_at: string;
    /**
     * The reason the user was banned or put in a timeout if the moderator provided one.
     */
    reason: string;
    /**
     * The ID of the moderator that banned the user or put them in a timeout.
     */
    moderator_id: string;
    /**
     * The moderator’s login name.
     */
    moderator_login: string;
    /**
     * The moderator’s display name.
     */
    moderator_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-banned-users
 */
export interface RESTGetBannedUsersRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster whose list of banned users you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * A list of user IDs used to filter the results.
     *
     * @remarks To specify more than one ID, include this parameter for each user you want to get.
     * For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
     * The returned list includes only those users that were banned or put in a timeout.
     * The list is returned in the same order that you specified the IDs.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-banned-users
 */
export interface RESTGetBannedUsersResponse extends APIPaginatedResponse<APIBannedUser> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#ban-user
 */
export interface APIBanUserInfo {
    /**
     * The broadcaster whose chat room the user was banned from chatting in.
     */
    broadcaster_id: string;
    /**
     * The moderator that banned or put the user in the timeout.
     */
    moderator_id: string;
    /**
     * The user that was banned or put in a timeout.
     */
    user_id: string;
    /**
     * The UTC date and time (in RFC3339 format) that the ban or timeout was placed.
     */
    created_at: string;
    /**
     * The UTC date and time (in RFC3339 format) that the timeout will end.
     *
     * @remarks Is **null** if the user was banned instead of being put in a timeout.
     */
    end_time: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#ban-user
 */
export interface RESTPostBanUserRequestParams {
    /**
     * The ID of the broadcaster whose chat room the user is being banned from.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#ban-user
 */
export interface RESTPostBanUserRequestBodyData {
    /**
     * The ID of the user to ban or put in a timeout.
     */
    user_id: string;
    /**
     * To ban a user indefinitely, don’t include this field.
     *
     * @remarks To put a user in a timeout, include this field and specify the timeout period, in seconds.
     * The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks).
     * To end a user’s timeout early, set this field to 1, or use the Unban user endpoint.
     */
    duration?: number;
    /**
     * The reason you're banning the user or putting them in a timeout.
     *
     * @remarks The text is user defined and is limited to a maximum of 500 characters.
     */
    reason?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#ban-user
 */
export interface RESTPostBanUserRequestBody {
    /**
     * Identifies the user and type of ban.
     */
    data: RESTPostBanUserRequestBodyData;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#ban-user
 */
export interface RESTPostBanUserResponse extends APIResponse<APIBanUserInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#unban-user
 */
export interface RESTDeleteUnbanUserRequestParams {
    /**
     * The ID of the broadcaster whose chat room the user is banned from chatting in.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the user to remove the ban or timeout from.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-unban-requests
 */
export enum APIUnbanRequestStatus {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied",
    Acknowledged = "acknowledged",
    Canceled = "canceled"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-unban-requests
 */
export interface APIUnbanRequest {
    /**
     * Unban request ID.
     */
    id: string;
    /**
     * User ID of broadcaster whose channel is receiving the unban request.
     */
    broadcaster_id: string;
    /**
     * The broadcaster's display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster's login name.
     */
    broadcaster_login: string;
    /**
     * User ID of moderator who approved/denied the request.
     */
    moderator_id: string;
    /**
     * The moderator's login name.
     */
    moderator_login: string;
    /**
     * The moderator's display name.
     */
    moderator_name: string;
    /**
     * User ID of the requestor who is asking for an unban.
     */
    user_id: string;
    /**
     * The user's login name.
     */
    user_login: string;
    /**
     * The user's display name.
     */
    user_name: string;
    /**
     * Text of the request from the requesting user.
     */
    text: string;
    /**
     * Status of the request.
     */
    status: APIUnbanRequestStatus;
    /**
     * Timestamp of when the unban request was created.
     */
    created_at: string;
    /**
     * Timestamp of when moderator/broadcaster approved or denied the request.
     */
    resolved_at: string;
    /**
     * Text input by the resolver (moderator) of the unban request.
     */
    resolution_text: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-unban-requests
 */
export interface RESTGetUnbanRequestsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster whose channel is receiving unban requests.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * Filter by a status.
     */
    status: APIUnbanRequestStatus;
    /**
     * The ID used to filter what unban requests are returned.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-unban-requests
 */
export interface RESTGetUnbanRequestsResponse extends APIPaginatedResponse<APIUnbanRequest> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests
 */
export enum RESTPatchUnbanRequestStatusRequestParam {
    Approved = "approved",
    Denied = "denied",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests
 */
export interface RESTPatchUnbanRequestsRequestParams {
    /**
     * The ID of the broadcaster whose channel is approving or denying the unban request.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    unban_request_id: string;
    /**
     * Resolution status.
     */
    status: RESTPatchUnbanRequestStatusRequestParam;
    /**
     * Message supplied by the unban request resolver.
     *
     * @remarks The message is limited to a maximum of 500 characters.
     */
    resolution_text?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests
 */
export interface RESTPatchUnbanRequestsResponse extends APIResponse<APIUnbanRequest> {}
