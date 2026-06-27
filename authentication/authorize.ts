/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/
 */
export enum OAuth2AuthorizeResponseType {
    Code = "code",
    Token = "token",
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow
 */
export interface OAuth2AuthorizeParams {
    /**
     * Your app’s registered client ID.
     */
    client_id: string;
    /**
     * Set to **true** to force the user to re-authorize your app’s access to their resources. The default is **false.**
     */
    force_verify?: boolean;
    /**
     * Your app’s registered redirect URI. The authorization code is sent to this URI.
     */
    redirect_uri: string;
    /**
     * Set to `code` or `token` depending on the response type you want.
     */
    response_type: OAuth2AuthorizeResponseType;
    /**
     * A space-delimited list of scopes.
     *
     * @remarks The APIs that you’re calling will identify the scopes you must list. You must URL encode the list.
     */
    scope: string;
    /**
     * Although optional, you are *strongly encouraged* to pass a state string to help prevent
     * {@link https://datatracker.ietf.org/doc/html/rfc6749#section-10.12 Cross-Site Request Forgery} (CSRF) attacks.
     *
     * @remarks The server returns this string to you in your redirect URI (see the state parameter in the
     * fragment portion of the URI). If this string doesn’t match the state string that you passed, ignore the response.
     * The state string should be randomly generated and unique for each OAuth request.
     */
    state?: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/
 */
export interface OAuth2BaseAuthorizeSuccessParams {
    /**
     * A space-delimited list of scopes.
     */
    scope: string;
    /**
     * The state string that was passed in the request.
     */
    state?: string;
}

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/
 */
export type OAuth2AuthorizeSuccessParams = | (OAuth2BaseAuthorizeSuccessParams & {
    /**
     * The code that can be exchanged for an access token.
     */
    code: string;
}) | (OAuth2BaseAuthorizeSuccessParams & {
    /**
     * The authenticated token, to be used for various API endpoints and EventSub subscriptions.
     */
    access_token: string;
    /**
     * Will generally be "bearer".
     */
    token_type: string;
})

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/
 */
export interface OAuth2AuthorizeErrorParams {
    /**
     * The error code.
     */
    error: string;
    /**
     * A description of the error.
     */
    error_description: string;
    /**
     * The state string that was passed in the request.
     */
    state?: string;
}
