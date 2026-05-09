import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites
 */
export enum APIGuestStarInviteStatus {
    /**
     * The user has been invited to the session but has not acknowledged it.
     */
    Invited = "INVITED",
    /**
     * The invited user has acknowledged the invite and joined the waiting room,
     * but may still be setting up their media devices or otherwise preparing to join the call.
     */
    Accepted = "ACCEPTED",
    /**
     * The invited user has signaled they are ready to join the call from the waiting room.
     */
    Ready = "READY",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites
 */
export interface APIGuestStarInvite {
    /**
     * Twitch User ID corresponding to the invited guest
     */
    user_id: string;
    /**
     * Timestamp when this user was invited to the session.
     */
    invited_at: string;
    /**
     * Status representing the invited user’s join state.
     */
    status: APIGuestStarInviteStatus;
    /**
     * Flag signaling that the invited user has chosen to disable their local video device.
     * 
     * @remarks The user has hidden themselves, but they may choose to reveal their video feed upon joining the session.
     */
    is_video_enabled: boolean;
    /**
     * Flag signaling that the invited user has chosen to disable their local audio device.
     * 
     * @remarks The user has muted themselves, but they may choose to unmute their audio feed upon joining the session.
     */
    is_audio_enabled: boolean;
    /**
     * Flag signaling that the invited user has a video device available for sharing.
     */
    is_video_available: boolean;
    /**
     * Flag signaling that the invited user has an audio device available for sharing.
     */
    is_audio_available: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites
 */
export interface RESTGetGuestStarInvitesRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The session ID to query for invite status.
     */
    session_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites
 */
export interface RESTGetGuestStarInvitesResponse extends APIResponse<APIGuestStarInvite> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-guest-star-invite
 */
export interface RESTPostGuestStarInviteRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The session ID for the invite to be sent on behalf of the broadcaster.
     */
    session_id: string;
    /**
     * Twitch User ID for the guest to invite to the Guest Star session.
     */
    guest_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-guest-star-invite
 */
export interface RESTDeleteGuestStarInviteRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the session for the invite to be revoked on behalf of the broadcaster.
     */
    session_id: string;
    /**
     * Twitch User ID for the guest to revoke the Guest Star session invite from.
     */
    guest_id: string;
}
