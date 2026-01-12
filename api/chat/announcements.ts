/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-announcement
 */
export enum APIChatAnnouncementColor {
    Blue = "blue",
    Green = "green",
    Orange = "orange",
    Purple = "purple",
    Primary = "primary",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-announcement
 */
export interface RESTPostChatAnnouncementRequestParams {
    /**
     * The ID of the broadcaster that owns the chat room to send the announcement to.
     */
    broadcaster_id: string;
    /**
     * The ID of a user who has permission to moderate the broadcaster’s chat room,
     * or the broadcaster’s ID if they’re sending the announcement.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-chat-announcement
 */
export interface RESTPostChatAnnouncementRequestBody {
    /**
     * The announcement to make in the broadcaster’s chat room.
     *
     * @remarks Announcements are limited to a maximum of 500 characters;
     * announcements longer than 500 characters are truncated.
     */
    message: string;
    /**
     * The color used to highlight the announcement.
     *
     * @remarks If it's set to *primary* or is not set,
     * the channel’s accent color is used to highlight the announcement
     * (see **Profile Accent Color** under {@link https://www.twitch.tv/settings/profile profile settings},
     * **Channel and Videos**, and **Brand**).
     */
    color?: APIChatAnnouncementColor;
}
