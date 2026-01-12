import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-extensions
 */
export enum APIUserExtensionType {
    Panel = "panel",
    Component = "component",
    Overlay = "overlay",
    Mobile = "mobile",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-extensions
 */
export interface APIUserExtension {
    /**
     * An ID that identifies the extension.
     */
    id: string;
    /**
     * The extension's version.
     */
    version: string;
    /**
     * The extension's name.
     */
    name: string;
    /**
     * A Boolean value that determines whether the extension is configured and can be activated.
     *
     * @remarks Is **true** if the extension is configured and can be activated.
     */
    can_activate: boolean;
    /**
     * The extension types that you can activate for this extension.
     */
    type: APIUserExtensionType[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-extensions
 */
export interface RESTGetUserExtensionsResponse extends APIResponse<APIUserExtension> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions
 */
export interface APIUserActiveExtension {
    /**
     * A Boolean value that determines the extension’s activation state.
     *
     * @remarks If **false**, the user has not configured this panel extension.
     */
    active: boolean;
    /**
     * An ID that identifies the extension.
     */
    id: string;
    /**
     * The extension’s version.
     */
    version: string;
    /**
     * The extension’s name.
     */
    name: string;
    /**
     * The x-coordinate where the extension is placed.
     *
     * @remarks This field is only present if the extension type is **component**.
     */
    x?: number;
    /**
     * The y-coordinate where the extension is placed.
     *
     * @remarks This field is only present if the extension type is **component**.
     */
    y?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions
 */
export type APIUserActiveExtensionsList = {
    /**
     * The key is the extension type.
     */
    [key in APIUserExtensionType]: {
        /**
         * The key is a sequential number beginning with 1.
         */
        [key: string]: APIUserActiveExtension;
    };
};

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions
 */
export interface RESTGetUserActiveExtensionsRequestParams {
    /**
     * The ID of the broadcaster whose active extensions you want to get.
     *
     * @remarks This parameter is required if you specify an app access token and is optional if you specify a user access token.
     * If you specify a user access token and don’t specify this parameter, the API uses the user ID from the access token.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions
 */
export interface RESTGetUserActiveExtensionsResponse extends APIResponse<APIUserActiveExtensionsList> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user-extensions
 */
export type RESTPutUserExtensionsRequestBodyData = {
    /**
     * The key is the extension type.
     */
    [key in APIUserExtensionType]: {
        /**
         * The key is a sequential number beginning with 1.
         */
        [key: string]: Omit<APIUserActiveExtension, "name">;
    };
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user-extensions
 */
export interface RESTPutUserExtensionsRequestBody {
    /**
     * The dictionary of extensions to update.
     */
    data: RESTPutUserExtensionsRequestBodyData;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user-extensions
 */
export interface RESTPutUserExtensionsResponse extends APIResponse<APIUserActiveExtensionsList> {}
