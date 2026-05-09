import type { APIResponse } from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment
 */
export enum APIExtensionConfigurationSegmentType {
    Broadcaster = "broadcaster",
    Developer = "developer",
    Global = "global",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment
 */
export interface APIExtensionConfigurationSegment {
    /**
     * The type of segment.
     */
    segment: APIExtensionConfigurationSegmentType;
    /**
     * The ID of the broadcaster that installed the extension.
     * 
     * @remarks The object includes this field only if the segment query parameter is set to developer or broadcaster.
     */
    broadcaster_id?: string;
    /**
     * The contents of the segment.
     * 
     * @remarks This string may be a plain-text string or a string-encoded JSON object.
     */
    content: string;
    /**
     * The version number that identifies this definition of the segment’s data.
     */
    version: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment
 */
export interface RESTGetExtensionConfigurationSegmentRequestParams {
    /**
     * The ID of the broadcaster that installed the extension.
     * 
     * @remarks This parameter is required if you set the segment parameter to broadcaster or developer.
     * Do not specify this parameter if you set *segment* to global.
     */
    broadcaster_id?: string;
    /**
     * The ID of the extension that contains the configuration segment you want to get.
     */
    extension_id: string;
    /**
     * The type of configuration segment to get.
     */
    segment: APIExtensionConfigurationSegmentType
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment
 */
export interface RESTGetExtensionConfigurationSegmentResponse extends APIResponse<APIExtensionConfigurationSegment> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#set-extension-configuration-segment
 */
export interface RESTPutExtensionConfigurationSegmentRequestBody {
    /**
     * The ID of the extension to update.
     */
    extension_id: string;
    /**
     * 	The configuration segment to update.
     */
    segment: APIExtensionConfigurationSegmentType;
    /**
     * The ID of the broadcaster that installed the extension.
     *
     * @remarks Include this field only if the `segment` is set to developer or broadcaster.
     */
    broadcaster_id?: string;
    /**
     * The contents of the segment.
     *
     * @reamrks This string may be a plain-text string or a string-encoded JSON object.
     */
    content?: string;
    /**
     * The version number that identifies this definition of the segment’s data.
     *
     * @remarks If not specified, the latest definition is updated.
     */
    version?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#set-extension-required-configuration
 */
export interface RESTPutExtensionRequiredConfigurationRequestParams {
    /**
     * The ID of the broadcaster that installed the extension on their channel.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#set-extension-required-configuration
 */
export interface RESTPutExtensionRequiredConfigurationRequestBody {
    /**
     * The ID of the extension to update.
     */
    extension_id: string;
    /**
     * The version of the extension to update.
     */
    extension_version: string;
    /**
     * The required_configuration string to use with the extension.
     */
    required_configuration: string;
}
