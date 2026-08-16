import type {AccessTokenScopes} from "./scopes";

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
 */
export enum OAuth2GrantType {
    ClientCredentials = "client_credentials",
    AuthorizationCode = "authorization_code",
    DeviceCode = "urn:ietf:params:oauth:grant-type:device_code",
    RefreshToken = "refresh_token",
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
 */
export interface RESTBaseTokenRequestBody {
    /**
     * Your app’s registered client ID.
     */
    client_id: string;
    /**
     * The type of grant you are requesting based on the OAuth 2.0 flow you are using.
     */
    grant_type: OAuth2GrantType;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth
 */
export interface RESTBaseTokenResponse {
    /**
     * The authenticated token, to be used for various API endpoints and EventSub subscriptions.
     */
    access_token: string;
    /**
     * Time until the code is no longer valid.
     */
    expires_in: number;
    /**
     * Will generally be "bearer".
     */
    token_type: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow
 */
export interface RESTPostClientCredentialsGrantFlowTokenRequestBody extends RESTBaseTokenRequestBody {
    client_secret: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow
 */
export interface RESTPostClientCredentialsGrantFlowTokenResponse extends RESTBaseTokenResponse {}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#authorization-code-grant-flow
 */
export interface RESTGetAuthorizationCodeGrantFlowTokenRequestBody extends RESTBaseTokenRequestBody {
    /**
     * Your app’s registered client secret.
     */
    client_secret: string;
    /**
     * The code that the `/authorize` response returned in the code query parameter.
     */
    code: string;
    /**
     * Your app’s registered redirect URI.
     */
    redirect_uri: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#authorization-code-grant-flow
 */
export interface RESTGetAuthorizationCodeGrantFlowTokenResponse extends RESTBaseTokenResponse {
    /**
     * A token used to refresh the access token.
     */
    refresh_token: string;
    /**
     * An array of the scopes requested.
     */
    scope?: AccessTokenScopes[];
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow
 */
export interface RESTLocationDeviceCodeGrantFlowTokenFormData extends RESTBaseTokenRequestBody {
    /**
     * URL used to request a token from Twitch. Will always be the same.
     */
    location: string;
    /**
     * A space-delimited list of scopes.
     *
     * @remarks The APIs that you’re calling identify the scopes you must list. You must URL encode the list.
     */
    scopes: string;
    /**
     * The code that will authenticate the user.
     */
    device_code: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow
 */
export interface RESTLocationDeviceCodeGrantFlowTokenResponse extends RESTBaseTokenResponse {
    /**
     * A token used to refresh the access token.
     */
    refresh_token: string;
    /**
     * An array of the scopes requested.
     */
    scope: AccessTokenScopes[];
}

/**
 * @see https://dev.twitch.tv/docs/authentication/refresh-tokens/
 */
export interface RESTPostRefreshTokenRequestBody extends RESTBaseTokenRequestBody {
    /**
     * Your app’s client secret.
     */
    client_secret: string;
    /**
     * The refresh token issued to the client.
     *
     * You must URL encode the refresh token before posting the request.
     * If you don’t, and the token contains restricted characters, the request may fail with "Invalid refresh token".
     */
    refresh_token: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/refresh-tokens/
 */
export interface RESTPostRefreshTokenResponse {
    /**
     * The authenticated token, to be used for various API endpoints and EventSub subscriptions.
     */
    access_token: string;
    /**
     * A token used to refresh the access token.
     */
    refresh_token: string;
    /**
     * An array of the scopes requested.
     */
    scope: AccessTokenScopes[];
    /**
     * Will generally be "bearer".
     */
    token_type: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/revoke-tokens/
 */
export interface RESTPostRevokeTokenRequestParams {
    /**
     * Your app’s client ID.
     */
    client_id: string;
    /**
     * The access token to revoke.
     */
    token: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/validate-tokens/
 */
export interface RESTGetValidateTokenResponse {
    /**
     * Your app’s client ID.
     */
    client_id: string;
    /**
     * The authorized user login name.
     *
     * @remarks This field is only present when the token is a user access token.
     */
    login?: string;
    /**
     * An array of the scopes requested.
     *
     * @remarks It is **null** when the token is an app access token.
     */
    scopes: AccessTokenScopes[]|null;
    /**
     * The ID of the authorized user.
     */
    user_id?: string;
    /**
     * Time until the code is no longer valid.
     */
    expires_in: number;
}
