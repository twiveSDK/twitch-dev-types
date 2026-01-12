import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings
 */
export enum APIGuestStarGroupLayout {
    /**
     * All live guests are tiled within the browser source with the same size
     */
    TitledLayout = "TILED_LAYOUT",
    /**
     * All live guests are tiled within the browser source with the same size.
     * If there is an active screen share, it is sized larger than the other guests.
     */
    ScreenshareLayout = "SCREENSHARE_LAYOUT",
    /**
     * All live guests are arranged in a horizontal bar within the browser source.
     */
    HorizontalLayout = "HORIZONTAL_LAYOUT",
    /**
     * All live guests are arranged in a vertical bar within the browser source.
     */
    VerticalLayout = "VERTICAL_LAYOUT",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings
 */
export interface APIGuestStarSettings {
    /**
     * Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.
     */
    is_moderator_send_live_enabled: boolean;
    /**
     * Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
     */
    slot_count: number;
    /**
     * Flag determining if Browser Sources subscribed to sessions on this channel should output audio
     */
    is_browser_source_audio_enabled: boolean;
    /**
     * This setting determines how the guests within a session should be laid out within the browser source.
     */
    group_layout: APIGuestStarGroupLayout;
    /**
     * View only token to generate browser source URLs.
     */
    browser_source_token: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings
 */
export interface RESTGetChannelGuestStarSettingsRequestParams {
    /**
     * The ID of the broadcaster you want to get guest star settings for.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings
 */
export interface RESTGetChannelGuestStarSettingsResponse extends APIResponse<APIGuestStarSettings> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-guest-star-settings
 */
export interface RESTPutChannelGuestStarSettingsRequestParams {
    /**
     * The ID of the broadcaster you want to update Guest Star settings for.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-channel-guest-star-settings
 */
export interface RESTPutChannelGuestStarSettingsRequestBody {
    /**
     * Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.
     */
    is_moderator_send_live_enabled?: boolean;
    /**
     * Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
     */
    slot_count?: number;
    /**
     * Flag determining if Browser Sources subscribed to sessions on this channel should output audio
     */
    is_browser_source_audio_enabled?: boolean;
    /**
     * This setting determines how the guests within a session should be laid out within the browser source.
     */
    group_layout?: APIGuestStarGroupLayout;
    /**
     * Flag determining if Guest Star should regenerate the authentication token associated with the channel’s browser sources.
     * Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software.
     */
    regenerate_browser_sources: boolean;
}
