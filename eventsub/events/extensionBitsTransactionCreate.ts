import type {EventBroadcasterInfo, EventUserInfo} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#product
 */
export interface ExtensionBitsTransactionCreateProduct {
    /**
     * Product name.
     */
    name: string;
    /**
     * Bits involved in the transaction.
     */
    bits: number;
    /**
     * Unique identifier for the product acquired.
     */
    sku: string;
    /**
     * Flag indicating if the product is in development.
     *
     * @remarks If `in_development is true, `bits` will be 0.
     */
    in_development: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#extension-bits-transaction-create-event
 */
export interface ExtensionBitsTransactionCreateEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * Client ID of the extension.
     */
    extension_client_id: string;
    /**
     * Transaction ID.
     */
    id: string;
    /**
     * Additional extension product information.
     */
    product: ExtensionBitsTransactionCreateProduct;
}
