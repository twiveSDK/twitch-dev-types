import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges
 */
export interface APIChatBadgeVersion {
    /**
     * An ID that identifies this version of the badge.
     *
     * @remarks The ID can be any value. For example, for Bits, the ID is the Bits tier level,
     * but for World of Warcraft, it could be Alliance or Horde.
     */
    id: string;
    /**
     * A URL to the small version (18px x 18px) of the badge.
     */
    image_url_1x: string;
    /**
     * A URL to the medium version (36px x 36px) of the badge.
     */
    image_url_2x: string;
    /**
     * A URL to the large version (72px x 72px) of the badge.
     */
    image_url_4x: string;
    /**
     * The title of the badge.
     */
    title: string;
    /**
     * The description of the badge.
     */
    description: string;
    /**
     * The action to take when clicking on the badge.
     */
    click_action: string|null;
    /**
     * The URL to navigate to when clicking on the badge.
     */
    click_url: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges
 */
export interface APIChatBadge {
    /**
     * An ID that identifies this set of chat badges. For example, `Bits` or `Subscriber`.
     */
    set_id: string;
    /**
     * The list of chat badges in this set.
     */
    versions: APIChatBadgeVersion[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges
 */
export interface RESTGetChannelChatBadgesRequestParams {
    /**
     * The ID of the broadcaster whose chat badges you want to get.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-chat-badges
 */
export interface RESTGetChannelChatBadgesResponse extends APIResponse<APIChatBadge> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-chat-badges
 */
export interface RESTGetGlobalChatBadgesResponse extends APIResponse<APIChatBadge> {}
