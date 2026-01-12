/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-authorization-revoke-event
 */
export interface UserAuthorizationRevokeEvent {
    /**
     * The client_id of the application with revoked user access.
     */
    client_id: string;
    /**
     * The user id for the user who has revoked authorization for your client id.
     */
    user_id: string;
    /**
     * The user login for the user who has revoked authorization for your client id.
     *
     * @remarks This is `null` if the user no longer exists.
     */
    user_login: string|null;
    /**
     * The user display name for the user who has revoked authorization for your client id.
     *
     * @remarks This is `null` if the user no longer exists.
     */
    user_name: string|null;
}
