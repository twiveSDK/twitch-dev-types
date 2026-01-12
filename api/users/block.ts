import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-block-list
 */
export interface APIBlockedUser {
    /**
     * An ID that identifies the blocked user.
     */
    user_id: string;
    /**
     * The blocked user’s login name.
     */
    user_login: string;
    /**
     * The blocked user’s display name.
     */
    display_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-block-list
 */
export interface RESTGetUserBlockListRequestParams {
    /**
     * The ID of the broadcaster whose list of blocked users you want to get.
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
    after?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-block-list
 */
export interface RESTGetUserBlockListResponse extends APIResponse<APIBlockedUser> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#block-user
 */
export enum RESTPutBlockUserSourceContextRequestParam {
    Chat = "chat",
    Whisper = "whisper",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#block-user
 */
export enum RESTPutBlockUserReasonRequestParam {
    Harassment = "harassment",
    Spam = "spam",
    Other = "other",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#block-user
 */
export interface RESTPutBlockUserRequestParams {
    /**
     * The ID of the user to block.
     *
     * @remarks The API ignores the request if the broadcaster has already blocked the user.
     */
    target_user_id: string;
    /**
     * The location where the harassment took place that is causing the broadcaster to block the user.
     */
    source_context?: RESTPutBlockUserSourceContextRequestParam;
    /**
     * The reason that the broadcaster is blocking the user.
     */
    reason?: RESTPutBlockUserReasonRequestParam;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#unblock-user
 */
export interface RESTDeleteBlockUserParams {
    /**
     * The ID of the user to remove from the broadcaster’s list of blocked users.
     *
     * @remarks The API ignores the request if the broadcaster hasn’t blocked the user.
     */
    target_user_id: string;
}
