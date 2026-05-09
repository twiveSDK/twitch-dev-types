import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-shared-secrets
 */
export interface APIExtensionSecret {
    /**
     * The raw secret that you use with JWT encoding.
     */
    content: string;
    /**
     * The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.
     */
    active_at: string;
    /**
     * The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.
     */
    expires_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-shared-secrets
 */
export interface APIExtensionSharedSecrets {
    /**
     * The version number that identifies this definition of the secret’s data.
     */
    format_version: string;
    /**
     * The list of secrets.
     */
    secrets: APIExtensionSecret[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-shared-secrets
 */
export interface RESTGetExtensionSecretsRequestParams {
    /**
     * The ID of the extension whose shared secrets you want to get.
     */
    extension_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-shared-secrets
 */
export interface RESTGetExtensionSecretsResponse extends APIResponse<APIExtensionSharedSecrets> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-extension-secret
 */
export interface RESTPostExtensionSecretRequestParams {
    /**
     * The ID of the extension to apply the shared secret to.
     */
    extension_id: string;
    /**
     * The amount of time, in seconds, to delay activating the secret.
     *
     * @remarks The delay should provide enough time for instances of the extension to gracefully switch over to the
     * new secret. The minimum delay is 300 seconds (5 minutes). The default is 300 seconds.
     */
    delay?: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-extension-secret
 */
export interface RESTPostExtensionSecretResponse extends APIResponse<APIExtensionSharedSecrets> {}
