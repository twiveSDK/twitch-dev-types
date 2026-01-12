import type {APIPaginatedResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export enum APIExtensionTransactionProductType {
    BitsInExtension = "BITS_IN_EXTENSION",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export enum APIExtensionTransactionProductCostType {
    Bits = "bits",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export interface APIExtensionTransactionProductCost {
    /**
     * The amount exchanged for the digital product.
     */
    amount: number;
    /**
     * The type of currency exchanged.
     */
    type: APIExtensionTransactionProductCostType;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export interface APIExtensionTransactionProductData {
    /**
     * An ID that identifies the digital product.
     */
    sku: string;
    /**
     * The domain of the extension that sold the digital product. (twitch.ext. + <extension_id>)
     */
    domain: string;
    /**
     * Contains details about the digital product’s cost.
     */
    cost: APIExtensionTransactionProductCost;
    /**
     * A Boolean value that determines whether the product is in development.
     * 
     * @remarks Is **true** if the digital product is in development and cannot be exchanged.
     */
    inDevelopment: boolean;
    /**
     * The name of the digital product.
     */
    displayName: string;
    /**
     * This field is always empty since you may purchase only unexpired products.
     */
    expiration: string;
    /**
     * A Boolean value that determines whether the data was broadcast to all instances of the extension.
     *
     * @remarks Is **true** if the data was broadcast to all instances.
     */
    broadcast: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export interface APIExtensionTransaction {
    /**
     * An ID that identifies the transaction.
     */
    id: string;
    /**
     * The UTC date and time (in RFC3339 format) of the transaction.
     */
    timestamp: string;
    /**
     * The ID of the broadcaster that owns the channel where the transaction occurred.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The ID of the user that purchased the digital product.
     */
    user_id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The type of transaction.
     */
    product_type: APIExtensionTransactionProductType;
    /**
     * Contains details about the digital product.
     */
    product_data: APIExtensionTransactionProductData;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export interface RESTGetExtensionTransactionsRequestParams {
    /**
     * The ID of the extension whose list of transactions you want to get.
     */
    extension_id: string;
    /**
     * A transaction ID used to filter the list of transactions.
     * 
     * @remarks Specify this parameter for each transaction you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs.
     */
    id?: string;
    /**
     * The maximum number of items to return per page in the response.
     * 
     * @remarks The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
     */
    first?: number;
    /**
     * The cursor used to get the next page of results.
     * 
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
 */
export interface RESTGetExtensionTransactionsResponse extends APIPaginatedResponse<APIExtensionTransaction> {}
