import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export enum APISuspiciousUserStatus {
    ActiveMonitoring = "ACTIVE_MONITORING",
    Restricted = "RESTRICTED",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export enum APISuspiciousUserType {
    ManualAdded = "MANUAL_ADDED",
    DetectedBanEvader = "DETECTED_BAN_EVADER",
    DetectedSusChatter = "DETECTED_SUS_CHATTER",
    BannedInSharedChannel = "BANNED_IN_SHARED_CHANNEL",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export interface APISuspiciousUser {
    /**
     * The ID of the user being given the suspicious status.
     */
    user_id: string;
    /**
     * The user ID of the broadcaster indicating in which channel the status is being applied.
     */
    broadcaster_id: string;
    /**
     * The user ID of the moderator who applied the last status.
     */
    moderator_id: string;
    /**
     * The timestamp of the last time this user’s status was updated.
     */
    updated_at: string;
    /**
     * The type of suspicious status.
     */
    status: APISuspiciousUserStatus;
    /**
     * An array of strings representing the type(s) of suspicious user this is.
     */
    types: APISuspiciousUserType[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-suspicious-status-from-chat-user
 */
export interface APIRemovedSuspiciousUser extends Omit<APISuspiciousUser, "status"> {
    /**
     * The type of suspicious status.
     */
    status: "NO_TREATMENT";
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export interface RESTPostSuspiciousStatusToChatUserRequestParams {
    /**
     * The user ID of the broadcaster, indicating the channel where the status is being applied.
     */
    broadcaster_id: string;
    /**
     * The user ID of the moderator who is applying the status.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export interface RESTPostSuspiciousStatusToChatUserRequestBody {
    /**
     * The ID of the user being given the suspicious status.
     */
    user_id: string;
    /**
     * The type of suspicious status.
     */
    status: APISuspiciousUserStatus;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user
 */
export interface RESTPostSuspiciousStatusToChatUserResponse extends APIResponse<APISuspiciousUser> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-suspicious-status-from-chat-user
 */
export interface RESTDeleteSuspiciousStatusFromChatUserRequestParams {
    /**
     * The user ID of the broadcaster, indicating the channel where the status is being removed.
     */
    broadcaster_id: string;
    /**
     * The user ID of the moderator who is removing the status.
     */
    moderator_id: string;
    /**
     * The ID of the user having the suspicious status removed.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-suspicious-status-from-chat-user
 */
export interface RESTDeleteSuspiciousStatusFromChatUserResponse extends APIResponse<APIRemovedSuspiciousUser> {}
