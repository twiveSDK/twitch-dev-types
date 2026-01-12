import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shared-chat-session
 */
export interface APISharedChatSessionParticipant {
    /**
     * The User ID of the participant channel.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shared-chat-session
 */
export interface APISharedChatSession {
    /**
     * The unique identifier for the shared chat session.
     */
    session_id: string;
    /**
     * The User ID of the host channel.
     */
    host_broadcaster_id: string;
    /**
     * The list of participants in the session.
     */
    participants: APISharedChatSessionParticipant[];
    /**
     * The UTC date and time (in RFC3339 format) for when the session was created.
     */
    created_at: string;
    /**
     * The UTC date and time (in RFC3339 format) for when the session was last updated.
     */
    updated_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shared-chat-session
 */
export interface RESTGetSharedChatSessionRequestParams {
    /**
     * The User ID of the channel broadcaster.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shared-chat-session
 */
export interface RESTGetSharedChatSessionResponse extends APIResponse<APISharedChatSession> {}
