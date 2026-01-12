import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status
 */
export interface APIShieldModeStatus {
    /**
     * A Boolean value that determines whether Shield Mode is active.
     *
     * @remarks Is **true** if the broadcaster activated Shield Mode; otherwise, **false**.
     */
    is_active: boolean;
    /**
     * An ID that identifies the moderator that last activated Shield Mode.
     *
     * @remarks Is an empty string if Shield Mode hasn’t been previously activated.
     */
    moderator_id: string;
    /**
     * The moderator’s login name.
     *
     * @remarks Is an empty string if Shield Mode hasn’t been previously activated.
     */
    moderator_login: string;
    /**
     * The moderator’s display name.
     *
     * @remarks Is an empty string if Shield Mode hasn’t been previously activated.
     */
    moderator_name: string;
    /**
     * The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated.
     *
     * @remarks Is an empty string if Shield Mode hasn’t been previously activated.
     */
    last_activated_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status
 */
export interface RESTPutShieldModeStatusRequestParams {
    /**
     * The ID of the broadcaster whose Shield Mode you want to activate or deactivate.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that is one of the broadcaster’s moderators.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status
 */
export interface RESTPutShieldModeStatusRequestBody {
    /**
     * A Boolean value that determines whether to activate Shield Mode.
     *
     * @remakrs Set to **true** to activate Shield Mode; otherwise, **false** to deactivate Shield Mode.
     */
    is_active: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status
 */
export interface RESTPutShieldModeStatusResponse extends APIResponse<APIShieldModeStatus> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status
 */
export interface RESTGetShieldModeStatusRequestParams {
    /**
     * The ID of the broadcaster whose Shield Mode activation status you want to get.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that is one of the broadcaster’s moderators.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status
 */
export interface RESTGetShieldModeStatusResponse extends APIResponse<APIShieldModeStatus> {}
