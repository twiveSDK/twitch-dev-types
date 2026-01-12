import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export enum APIExtensionConfigurationLocation {
    /**
     * The Extensions Configuration Service hosts the configuration.
     */
    Hosted = "hosted",
    /**
     * The Extension Backend Service (EBS) hosts the configuration.
     */
    Custom = "custom",
    /**
     * The extension doesn't require configuration.
     */
    None = "none",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export enum APIExtensionState {
    Approved = "Approved",
    AssetsUploaded = "AssetsUploaded",
    Deleted = "Deleted",
    Deprecated = "Deprecated",
    InReview = "InReview",
    InTest = "InTest",
    PendingAction = "PendingAction",
    Rejected = "Rejected",
    Released = "Released",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export enum APIExtensionSubscriptionsSupportLevel {
    /**
     * The extension can't view the user’s subscription level.
     */
    None = "none",
    /**
     * The extension can view the user’s subscription level.
     */
    Optional = "optional",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionMobileView {
    /**
     * The HTML file that is shown to viewers on mobile devices.
     * 
     * @remarks This page is presented to viewers as a panel behind the chat area of the mobile app.
     */
    viewer_url: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionPanelView {
    /**
     * The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot.
     */
    viewer_url: string;
    /**
     * The height, in pixels, of the panel component that the extension is rendered in.
     */
    height: number;
    /**
     * A Boolean value that determines whether the extension can link to non-Twitch domains.
     */
    can_link_external_content: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionVideoOverlayView {
    /**
     * The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot.
     */
    viewer_url: string;
    /**
     * A Boolean value that determines whether the extension can link to non-Twitch domains.
     */
    can_link_external_content: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionComponentView {
    /**
     * The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot.
     */
    viewer_url: string;
    /**
     * The width value of the ratio (width : height) which determines the extension’s width,
     * and how the extension’s iframe will resize in different video player environments.
     */
    aspect_ratio_x: number;
    /**
     * The height value of the ratio (width : height) which determines the extension’s height,
     * and how the extension’s iframe will resize in different video player environments.
     */
    aspect_ratio_y: number;
    /**
     * A Boolean value that determines whether to apply CSS zoom.
     *
     * @remakrs If **true**, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions
     * are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height.
     * If **false**, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness.
     */
    autoscale: boolean;
    /**
     * The base width, in pixels, of the extension to use when scaling (see `autoscale`).
     *
     * @remarks This value is ignored if `autoscale` is **false**.
     */
    scale_pixels?: boolean;
    /**
     * The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.
     */
    target_height: number;
    /**
     * A Boolean value that determines whether the extension can link to non-Twitch domains.
     */
    can_link_external_content: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionConfigView {
    /**
     * The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager.
     */
    viewer_url: string;
    /**
     * A Boolean value that determines whether the extension can link to non-Twitch domains.
     */
    can_link_external_content: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtensionViews {
    /**
     * Describes how the extension is displayed on mobile devices.
     */
    mobile: APIExtensionMobileView;
    /**
     * Describes how the extension is rendered if the extension may be activated as a panel extension.
     */
    panel: APIExtensionPanelView;
    /**
     * Describes how the extension is rendered if the extension may be activated as a video-overlay extension.
     */
    video_overlay: APIExtensionVideoOverlayView;
    /**
     * Describes how the extension is rendered if the extension may be activated as a video-component extension.
     */
    component: APIExtensionComponentView;
    /**
     * Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager.
     */
    config: APIExtensionConfigView;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface APIExtension {
    /**
     * The name of the user or organization that owns the extension.
     */
    author_name: string;
    /**
     * A Boolean value that determines whether the extension has features that use Bits.
     * 
     * @remarks Is **true** if the extension has features that use Bits.
     */
    bits_enabled: boolean;
    /**
     * A Boolean value that determines whether a user can install the extension on their channel.
     * 
     * @remarks Is **true** if a user can install the extension.
     * Typically, this is set to **false** if the extension is currently in testing mode
     * and requires users to be allowlisted (the allowlist is configured on Twitch’s
     * {@link https://dev.twitch.tv/console/extensions developer site} under the Extensions -> Extension -> Version -> Access).
     */
    can_install: boolean;
    /**
     * The location of where the extension’s configuration is stored.
     */
    configuration_location: APIExtensionConfigurationLocation;
    /**
     * A longer description of the extension. It appears on the details page.
     */
    description: string;
    /**
     * A URL to the extension’s Terms of Service.
     */
    eula_tos_url: string;
    /**
     * A Boolean value that determines whether the extension can communicate with the installed channel’s chat.
     * 
     * @remarks Is **true** if the extension can communicate with the channel’s chat room.
     */
    has_chat_support: boolean;
    /**
     * A URL to the default icon that’s displayed in the Extensions directory.
     */
    icon_url: string;
    /**
     * A dictionary that contains URLs to different sizes of the default icon.
     * 
     * @remarks The dictionary’s key identifies the icon’s size (for example, 24x24),
     * and the dictionary’s value contains the URL to the icon.
     */
    icon_urls: Map<string, string>;
    /**
     * The extension’s ID.
     */
    id: string;
    /**
     * The extension’s name.
     */
    name: string;
    /**
     * A URL to the extension’s privacy policy.
     */
    privacy_policy_url: string;
    /**
     * A Boolean value that determines whether the extension wants to explicitly
     * ask viewers to link their Twitch identity.
     */
    request_identity_link: boolean;
    /**
     * A list of URLs to screenshots that are shown in the Extensions marketplace.
     */
    screenshot_urls: string[];
    /**
     * The extension’s state.
     */
    state: APIExtensionState;
    /**
     * Indicates whether the extension can view the user’s subscription level
     * on the channel that the extension is installed on.
     */
    subscriptions_support_level: APIExtensionSubscriptionsSupportLevel;
    /**
     * A short description of the extension that streamers see
     * when hovering over the discovery splash screen in the Extensions manager.
     */
    summary: string;
    /**
     * The email address that users use to get support for the extension.
     */
    support_email: string;
    /**
     * The extension’s version number.
     */
    version: string;
    /**
     * A brief description displayed on the channel to explain how the extension works.
     */
    viewer_summary: string;
    /**
     * Describes all views-related information such as how the extension is displayed on mobile devices.
     */
    views: APIExtensionViews;
    /**
     * Allowlisted configuration URLs for displaying the extension
     * (the allowlist is configured on Twitch’s {@link https://dev.twitch.tv/console/extensions developer site}
     * under the Extensions -> Extension -> Version -> Capabilities).
     */
    allowlisted_config_urls: string[];
    /**
     * Allowlisted panel URLs for displaying the extension
     * (the allowlist is configured on Twitch’s {@link https://dev.twitch.tv/console/extensions developer site}
     * under the Extensions -> Extension -> Version -> Capabilities).
     */
    allowlisted_panel_urls: string[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface RESTGetExtensionsRequestParams {
    /**
     * The ID of the extension to get.
     */
    extension_id: string;
    /**
     * The version of the extension to get.
     * 
     * @remarks If not specified, it returns the latest, released version.
     * If you don’t have a released version, you must specify a version; otherwise, the list is empty.
     */
    extension_version?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
 */
export interface RESTGetExtensionsResponse extends APIResponse<APIExtension> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-released-extensions
 */
export interface RESTGetReleasedExtensionsRequestParams {
    /**
     * The ID of the extension to get.
     */
    extension_id: string;
    /**
     * The version of the extension to get.
     *
     * @remarks If not specified, it returns the latest version.
     */
    extension_version?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-released-extensions
 */
export interface RESTGetReleasedExtensionsResponse extends APIResponse<APIExtension> {}
