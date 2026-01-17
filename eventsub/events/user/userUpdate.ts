import type {EventUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-update-event
 */
export interface UserUpdateEvent extends EventUserInfo {
    /**
     * The user’s email address.
     *
     * @remarks The event includes the user’s email address only if the app used to request this event type includes
     * the `user:read:email` scope for the user; otherwise, the field is set to an empty string.
     */
    email: string;
    /**
     * A Boolean value that determines whether Twitch has verified the user’s email address.
     *
     * @remarks Is **true** if Twitch has verified the email address; otherwise, false.
     * Ignore this field if the **email** field contains an empty string.
     */
    email_verified: boolean;
    /**
     * The user’s description.
     */
    description: string;
}
