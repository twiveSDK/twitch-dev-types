import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
 */
export interface APIGuestStarMediaSettings {
    /**
     * Flag determining whether the host is allowing this media type.
     */
    is_host_enabled: boolean;
    /**
     * Flag determining whether the guest has enabled this media type.
     */
    is_guest_enabled: boolean;
    /**
     * Flag determining whether this media type is available for use by the guest.
     */
    is_available: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
 */
export interface APIGuestStar {
    /**
     * ID representing this guest’s slot assignment.
     */
    slot_id: string;
    /**
     * Flag determining whether the guest is visible in the browser source in the host’s streaming software.
     */
    is_live: boolean;
    /**
     * User ID of the guest assigned to this slot.
     */
    user_id: string;
    /**
     * Display name of the guest assigned to this slot.
     */
    user_display_name: string;
    /**
     * Login of the guest assigned to this slot.
     */
    user_login: string;
    /**
     * Value from 0 to 100 representing the host’s volume setting for this guest.
     */
    volume: number;
    /**
     * Timestamp when this guest was assigned a slot in the session.
     */
    assigned_at: string;
    /**
     * Information about the guest’s audio settings.
     */
    audio_settings: APIGuestStarMediaSettings;
    /**
     * Information about the guest’s video settings.
     */
    video_settings: APIGuestStarMediaSettings;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
 */
export interface APIGuestStarSession {
    /**
     * ID uniquely representing the Guest Star session.
     */
    id: string;
    /**
     * List of guests currently interacting with the Guest Star session.
     */
    guests: APIGuestStar[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
 */
export interface RESTGetGuestStarSessionRequestParams {
    /**
     * ID for the user hosting the Guest Star session.
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
 */
export interface RESTGetGuestStarSessionResponse extends APIResponse<APIGuestStarSession> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-guest-star-session
 */
export interface RESTPostGuestStarSessionRequestParams {
    /**
     * The ID of the broadcaster you want to create a Guest Star session for.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-guest-star-session
 */
export interface RESTPostGuestStarSessionResponse extends APIResponse<APIGuestStarSession> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-guest-star-session
 */
export interface RESTDeleteGuestStarSessionRequestParams {
    /**
     * The ID of the broadcaster you want to end a Guest Star session for.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * ID for the session to end on behalf of the broadcaster.
     */
    session_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-guest-star-session
 */
export interface RESTDeleteGuestStarSessionResponse extends APIResponse<APIGuestStarSession> {}
