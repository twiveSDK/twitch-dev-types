import type {BaseUserInfo} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#drop-entitlement-grant-event
 */
export interface DropEntitlement extends BaseUserInfo {
    /**
     * The ID of the organization that owns the game that has Drops enabled.
     */
    organization_id: string;
    /**
     * Twitch category ID of the game that was being played when this benefit was entitled.
     */
    category_id: string;
    /**
     * The category name.
     */
    category_name: string;
    /**
     * The campaign this entitlement is associated with.
     */
    campaign_id: string;
    /**
     * Unique identifier of the entitlement. Use this to de-duplicate entitlements.
     */
    entitlement_id: string;
    /**
     * Identifier of the Benefit.
     */
    benefit_id: string;
    /**
     * UTC timestamp in ISO format when this entitlement was granted on Twitch.
     */
    created_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#drop-entitlement-grant-event
 */
export interface DropEntitlementGrantEvent {
    /**
     * Individual event ID, as assigned by EventSub.
     *
     * @remarks Use this for de-duplicating messages.
     */
    id: string;
    /**
     * Entitlement object.
     */
    data: DropEntitlement[];
}
