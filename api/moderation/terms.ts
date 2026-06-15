import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-blocked-terms
 */
export interface APIBlockedTerm {
    /**
     * The broadcaster that owns the list of blocked terms.
     */
    broadcaster_id: string;
    /**
     * The moderator that blocked the word or phrase from being used in the broadcaster’s chat room.
     */
    moderator_id: string;
    /**
     * An ID that identifies this blocked term.
     */
    id: string;
    /**
     * The blocked word or phrase.
     */
    text: string;
    /**
     * The UTC date and time (in RFC3339 format) that the term was blocked.
     */
    created_at: string;
    /**
     * The UTC date and time (in RFC3339 format) that the term was updated.
     *
     * @remarks When the term is added, this timestamp is the same as `created_at`.
     * The timestamp changes as AutoMod continues to deny the term.
     */
    updated_at: string;
    /**
     * The UTC date and time (in RFC3339 format) that the blocked term is set to expire.
     *
     * @remarks After the block expires, users may use the term in the broadcaster’s chat room.
     * This field is **null** if the term was added manually or was permanently blocked by AutoMod.
     */
    expires_at: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-blocked-terms
 */
export interface RESTGetBlockedTermsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster whose blocked terms you’re getting.
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
 * @see https://dev.twitch.tv/docs/api/reference/#get-blocked-terms
 */
export interface RESTGetBlockedTermsResponse extends APIPaginatedResponse<APIBlockedTerm> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-blocked-term
 */
export interface RESTPostBlockedTermRequestParams {
    /**
     * The ID of the broadcaster that owns the list of blocked terms.
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
 * @see https://dev.twitch.tv/docs/api/reference/#add-blocked-term
 */
export interface RESTPostBlockedTermRequestBody {
    /**
     * The word or phrase to block from being used in the broadcaster’s chat room.
     *
     * @remarks The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.
     * Terms may include a wildcard character (*). The wildcard character must appear at the beginning
     * or end of a word or set of characters. For example, *foo or foo*.
     * If the blocked term already exists, the response contains the existing blocked term.
     */
    text: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#add-blocked-term
 */
export interface RESTPostBlockedTermResponse extends APIResponse<APIBlockedTerm> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#remove-blocked-term
 */
export interface RESTDeleteBlockedTermRequestParams {
    /**
     * The ID of the broadcaster that owns the list of blocked terms.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the blocked term to remove from the broadcaster’s list of blocked terms.
     */
    id: string;
}
