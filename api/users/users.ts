import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-users
 */
export enum APIUserType {
    /**
     * Twitch administrator
     */
    Admin = "admin",
    GlobalMod = "global_mod",
    /**
     * Twitch staff
     */
    Staff = "staff",
    /**
     * Normal user
     */
    Normal = ""
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-users
 */
export enum APIBroadcasterType {
    /**
     * An affiliate broadcaster
     */
    Affiliate = "affiliate",
    /**
     * A partner broadcaster
     */
    Partner = "partner",
    /**
     * A normal broadcaster
     */
    Normal = ""
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-users
 */
export interface APIUser {
    /**
     * An ID that identifies the user.
     */
    id: string;
    /**
     * The user’s login name.
     */
    login: string;
    /**
     * The user’s display name.
     */
    display_name: string;
    /**
     * The type of user.
     */
    type: APIUserType;
    /**
     * The type of broadcaster.
     */
    broadcaster_type: APIBroadcasterType;
    /**
     * The user’s description of their channel.
     */
    description: string;
    /**
     * A URL to the user’s profile image.
     */
    profile_image_url: string;
    /**
     * A URL to the user’s offline image.
     */
    offline_image_url: string;
    /**
     * @deprecated Any data in this field is not valid and should not be used.
     */
    view_count: number;
    /**
     * The user’s verified email address.
     *
     * @remarks The object includes this field only if the user access token includes the **user:read:email** scope.
     * If the request contains more than one user, only the user associated with the access token that provided consent
     * will include an email address — the email address for all other users will be empty.
     */
    email?: string;
    /**
     * The UTC date and time that the user’s account was created.
     *
     * @remarks The timestamp is in RFC3339 format.
     */
    created_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-users
 */
export interface RESTGetUsersRequestParams {
    /**
     * The ID of the user to get.
     *
     * @remarks To specify more than one user, include the id parameter for each user to get.
     * For example, `id=1234&id=5678`. The maximum number of IDs you may specify is 100.
     */
    id?: string;
    /**
     * The login name of the user to get.
     *
     * @remarks To specify more than one user, include the login parameter for each user to get.
     * For example, `login=foo&login=bar`. The maximum number of login names you may specify is 100.
     */
    login?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-users
 */
export interface RESTGetUsersResponse extends APIResponse<APIUser> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user
 */
export interface RESTPutUserRequestParams {
    /**
     * The string to update the channel’s description to.
     *
     * @remarks The description is limited to a maximum of 300 characters.
     * To remove the description, specify this parameter but don’t set its value (for example, `?description=`).
     */
    description?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user
 */
export interface RESTPutUserResponse extends APIResponse<APIUser> {}
