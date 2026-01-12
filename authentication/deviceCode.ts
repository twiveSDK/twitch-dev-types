/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow
 */
export interface OAuth2DeviceCodeFormData {
    /**
     * Your app’s registered Client ID.
     */
    client_id: string;
    /**
     * A space-delimited list of scopes.
     *
     * @remarks The APIs that you’re calling identify the scopes you must list. You must URL encode the list.
     */
    scopes: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow
 */
export interface OAuth2DeviceCodeResponse {
    /**
     * The identifier for a given user.
     */
    device_code: string;
    /**
     * Time until the code is no longer valid.
     */
    expires_in: number;
    /**
     * Time until another valid code can be requested.
     */
    interval: number;
    /**
     * The code that the user will use to authenticate.
     */
    user_code: string;
    /**
     * The address you will send users to, to authenticate.
     */
    verification_uri: string;
}
