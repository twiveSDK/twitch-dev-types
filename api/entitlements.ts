import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements
 */
export enum APIDropsEntitlementFulfillmentStatus {
    Claimed = "CLAIMED",
    Fulfilled = "FULFILLED",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements
 */
export interface APIDropsEntitlement {
    /**
     * An ID that identifies the entitlement.
     */
    id: string;
    /**
     * An ID that identifies the benefit (reward).
     */
    benefit_id: string;
    /**
     * The UTC date and time (in RFC3339 format) of when the entitlement was granted.
     */
    timestamp: string;
    /**
     * An ID that identifies the user who was granted the entitlement.
     */
    user_id: string;
    /**
     * An ID that identifies the game the user was playing when the reward was entitled.
     */
    game_id: string;
    /**
     * The entitlement’s fulfillment status.
     */
    fulfillment_status: APIDropsEntitlementFulfillmentStatus;
    /**
     * The UTC date and time (in RFC3339 format) of when the entitlement was last updated.
     */
    last_updated: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements
 */
export interface RESTGetDropsEntitlementsRequestParams extends RESTPaginationRequestParams {
    /**
     * An ID that identifies the entitlement to get.
     * 
     * @remarks Include this parameter for each entitlement you want to get. For example, `id=1234&id=5678`.
     * You may specify a maximum of 100 IDs.
     */
    id?: string;
    /**
     * An ID that identifies a user that was granted entitlements.
     */
    user_id?: string;
    /**
     * An ID that identifies a game that offered entitlements.
     */
    game_id?: string;
    /**
     * The entitlement’s fulfillment status.
     * 
     * @remarks Used to filter the list to only those with the specified status.
     */
    fulfillment_status?: APIDropsEntitlementFulfillmentStatus;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements
 */
export interface RESTGetDropsEntitlementsResponse extends APIPaginatedResponse<APIDropsEntitlement> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements
 */
export enum APIUpdatedDropsEntitlementStatus {
    InvalidId = "INVALID_ID",
    NotFound = "NOT_FOUND",
    Success = "SUCCESS",
    Unauthorized = "UNAUTHORIZED",
    UpdateFailed = "UPDATE_FAILED",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements
 */
export interface APIUpdatedDropsEntitlementInfo {
    /**
     * A string that indicates whether the status of the entitlements in the `ids` field were successfully updated.
     */
    status: APIUpdatedDropsEntitlementStatus;
    /**
     * The list of entitlements that the status in the `status` field applies to.
     */
    ids: string[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements
 */
export interface RESTPatchDropsEntitlementRequestBody {
    /**
     * A list of IDs that identify the entitlements to update.
     *
     * @remarks You may specify a maximum of 100 IDs.
     */
    entitlement_ids: string[];
    /**
     * The fulfillment status to set the entitlements to.
     */
    fulfillment_status: APIDropsEntitlementFulfillmentStatus;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements
 */
export interface RESTPatchDropsEntitlementsResponse extends APIResponse<APIUpdatedDropsEntitlementInfo> {}
