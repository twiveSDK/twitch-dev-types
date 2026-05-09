import type { EventBroadcasterInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-settings-update-event
 */
export enum ChannelGuestStarSettingsGroupLayout {
    /**
     * All live guests are tiled within the browser source with the same size.
     */
    Titled = "titled",
    /**
     * All live guests are tiled within the browser source with the same size.
     *
     * @remarks If there is an active screen share, it is sized larger than the other guests.
     */
    Screenshare = "screenshare",
    /**
     * Indicates the group layout will contain all participants in a top-aligned horizontal stack.
     */
    HorizontalTop = "horizontal_top",
    /**
     * Indicates the group layout will contain all participants in a bottom-aligned horizontal stack.
     */
    HorizontalBottom = "horizontal_bottom",
    /**
     * Indicates the group layout will contain all participants in a left-aligned vertical stack.
     */
    VerticalLeft = "vertical_left",
    /**
     * Indicates the group layout will contain all participants in a right-aligned vertical stack.
     */
    VerticalRight = "vertical_right",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-settings-update-event
 */
export interface ChannelGuestStarSettingsUpdateEvent extends EventBroadcasterInfo {
    /**
     * Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.
     */
    is_moderator_send_live_enabled: boolean;
    /**
     * Number of slots the Guest Star call interface will allow the host to add to a call.
     */
    slot_count: number;
    /**
     * Flag determining if browser sources subscribed to sessions on this channel should output audio.
     */
    is_browser_source_audio_enabled: boolean;
    /**
     * This setting determines how the guests within a session should be laid out within a group browser source.
     */
    group_layout: ChannelGuestStarSettingsGroupLayout;
}
