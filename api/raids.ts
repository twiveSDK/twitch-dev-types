import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-raid
 */
export interface APIStartedRaid {
    /**
     * The UTC date and time, in RFC3339 format, of when the raid was requested.
     */
    created_at: string;
    /**
     * A Boolean value that indicates whether the channel being raided contains mature content.
     */
    is_mature: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-a-raid
 */
export interface RESTPostRaidRequestParams {
    /**
     * The ID of the broadcaster that’s sending the raiding party.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    from_broadcaster_id: string;
    /**
     * The ID of the broadcaster to raid.
     */
    to_broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#start-raid
 */
export interface RESTPostRaidResponse extends APIResponse<APIStartedRaid> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#cancel-a-raid
 */
export interface RESTDeleteRaidRequestParams {
    /**
     * The ID of the broadcaster that initiated the raid.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}
