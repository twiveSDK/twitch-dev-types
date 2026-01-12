export interface BaseBroadcasterInfo {
    /**
     * The ID of the broadcaster.
     */
    broadcaster_user_id: string;
    /**
     * The login name of the broadcaster.
     */
    broadcaster_user_login: string;
    /**
     * The display name of broadcaster.
     */
    broadcaster_user_name: string;
}

export interface BaseUserInfo {
    /**
     * The ID of the user.
     */
    user_id: string;
    /**
     * The login name of the user.
     */
    user_login: string;
    /**
     * The display name of the user.
     */
    user_name: string;
}

export interface BaseModeratorInfo {
    /**
     * The user ID of the moderator.
     */
    moderator_user_id: string;
    /**
     * The user login of the moderator.
     */
    moderator_user_login: string;
    /**
     * The display name of the moderator.
     */
    moderator_user_name: string;
}
