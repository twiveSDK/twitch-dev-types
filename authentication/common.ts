export interface RESTOAuth2ErrorResponse {
    /**
     * The http status code of the response.
     */
    status: number;
    /**
     * The message of the occurred error.
     */
    message: string;
}

export enum OAuth2Endpoint {
    /**
     * Get or refresh an access token, or exchange an authorization code for an access token.
     *
     * @httpMethod POST
     */
    Token = "https://id.twitch.tv/oauth2/token",
    /**
     * Authorize a user to access their resources.
     *
     * @httpMethod GET
     */
    Authorize = "https://id.twitch.tv/oauth2/authorize",
    /**
     * Validate an access token.
     *
     * @httpMethod GET
     */
    Validate = "https://id.twitch.tv/oauth2/validate",
    /**
     * Get a device code to authenticate a user.
     *
     * @httpMethod POST
     */
    Device = "https://id.twitch.tv/oauth2/device",
    /**
     * Revoke an access token.
     *
     * @httpMethod POST
     */
    Revoke = "https://id.twitch.tv/oauth2/revoke",
}
