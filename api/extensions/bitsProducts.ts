import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products
 */
export interface APIExtensionBitsProductCost {
    /**
     * The product’s price.
     * 
     * @remarks The minimum price is 1 and the maximum is 10000.
     */
    amount: number;
    /**
     * The type of currency.
     */
    type: "bits";
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products
 */
export interface APIExtensionBitsProduct {
    /**
     * The product’s SKU. 
     * @remarks The SKU is unique across an extension’s products.
     */
    sku: string;
    /**
     * An object that contains the product’s cost information.
     */
    cost: APIExtensionBitsProductCost;
    /**
     * A Boolean value that indicates whether the product is in development.
     * 
     * @remarks If **true**, the product is not available for public use.
     */
    in_development: boolean;
    /**
     * The product’s name as displayed in the extension.
     */
    display_name: string;
    /**
     * The date and time, in RFC3339 format, when the product expires.
     */
    expiration: string;
    /**
     * A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an
     * extension on a channel.
     * 
     * @remarks The events are broadcast via the **onTransactionComplete** helper callback.
     * Is **true** if the event is broadcast to all instances.
     */
    is_broadcast: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products
 */
export interface RESTGetExtensionBitsProductsRequestParams {
    /**
     * A Boolean value that determines whether to include disabled or expired Bits products in the response.
     * 
     * @remarks The default is **false**.
     */
    should_include_all?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products
 */
export interface RESTGetExtensionBitsProductsResponse extends APIResponse<APIExtensionBitsProduct> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-extension-bits-product
 */
export interface RESTPutExtensionBitsProductRequestBody {
    /**
     * The product's SKU.
     *
     * @remarks The SKU must be unique within an extension. The product's SKU cannot be changed.
     * The SKU may contain only alphanumeric characters, dashes (-), underscores (_), and periods (.)
     * and is limited to a maximum of 255 characters. No spaces.
     */
    sku: string;
    /**
     * An object that contains the product's cost information.
     */
    cost: APIExtensionBitsProductCost;
    /**
     * The product's name as displayed in the extension.
     *
     * @remarks The maximum length is 255 characters.
     */
    display_name: string;
    /**
     * A Boolean value that indicates whether the product is in development.
     *
     * @remarks Set to **true** if the product is in development and not available for public use.
     * The default is **false**.
     */
    in_development?: boolean;
    /**
     * The date and time, in RFC3339 format, when the product expires.
     *
     * @remarks If not set, the product does not expire. To disable the product, set the expiration date to a date in
     * the past.
     */
    expiration?: string;
    /**
     * A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the
     * extension on a channel.
     *
     * @remarks The events are broadcast via the `onTransactionComplete` helper callback.
     * Set to **true** if the event is broadcast to all instances. The default is **false**.
     */
    is_broadcast?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-extension-bits-product
 */
export interface RESTPutExtensionBitsProductResponse extends APIResponse<APIExtensionBitsProduct> {}
