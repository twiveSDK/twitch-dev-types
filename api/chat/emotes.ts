import type {APIPaginatedResponse, APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export enum APIEmoteTheme {
    Light = "light",
    Dark = "dark",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export enum APIEmoteFormat {
    /**
     * An animated GIF is available for this emote.
     */
    Animated = "animated",
    /**
     * A static PNG file is available for this emote.
     */
    Static = "static",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export interface APIEmoteImages {
    /**
     * A URL to the small version (28px x 28px) of the emote.
     */
    url_1x: string;
    /**
     * A URL to the medium version (56px x 56px) of the emote.
     */
    url_2x: string;
    /**
     * A URL to the large version (112px x 112px) of the emote.
     */
    url_4x: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export interface APIBaseEmote {
    /**
     * An ID that identifies the emote.
     */
    id: string;
    /**
     * The name of the emote.
     *
     * @remarks This is the name that viewers type in the chat window to get the emote to appear.
     */
    name: string;
    /**
     * The formats that the emote is available in.
     *
     * @remarks For example, if the emote is available only as a static PNG, the array contains only static.
     * But if the emote is available as a static PNG and an animated GIF, the array contains static and animated.
     */
    format: APIEmoteFormat[];
    /**
     * The sizes that the emote is available in.
     *
     * @remarks For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0.
     */
    scale: string[];
    /**
     * The background themes that the emote is available in.
     */
    theme_mode: APIEmoteTheme[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-emotes
 */
export enum APIChannelEmoteType {
    /**
     * A custom Bits tier emote.
     */
    Bitstier = "bitstier",
    /**
     * A custom follower emote.
     */
    Follower = "follower",
    /**
     * A custom subscriber emote.
     */
    Subscriptions = "subscriptions",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-emotes
 */
export interface APIChannelEmote extends APIBaseEmote {
    /**
     * The image URLs for the emote.
     *
     * @remarks These image URLs always provide a static, non-animated emote image with a light background.
     * You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
     */
    images: APIEmoteImages;
    /**
     * The subscriber tier at which the emote is unlocked.
     *
     * @remarks This field contains the tier information only if `emote_type` is set to `subscriptions`, otherwise, it's an empty string.
     */
    tier: string;
    /**
     * The type of the emote.
     */
    emote_type: APIChannelEmoteType;
    /**
     * An ID that identifies the emote set that the emote belongs to.
     */
    emote_set_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-emotes
 */
export interface RESTGetChannelEmotesRequestRequestParams {
    /**
     * An ID that identifies the broadcaster whose emotes you want to get.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-emotes
 */
export interface RESTGetChannelEmotesResponse extends APIResponse<APIChannelEmote> {
    /**
     * A templated URL.
     *
     * @remarks Use the values from the id, format, scale, and theme_mode fields to replace
     * the like-named placeholder strings in the templated URL to create a CDN (Content Delivery Network)
     * URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes,
     * see {@link https://dev.twitch.tv/docs/chat/send-receive-messages/#cdn-template Emote CDN URL format}.
     * You should use this template instead of using the URLs in the images object.
     */
    template: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export interface APIGlobalEmote extends APIBaseEmote {
    /**
     * The image URLs for the emote.
     *
     * @remarks These image URLs always provide a static, non-animated emote image with a light background.
     * You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
     */
    images: APIEmoteImages;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
 */
export interface RESTGetGlobalEmotesResponse extends APIResponse<APIGlobalEmote> {
    /**
     * A templated URL.
     *
     * @remarks Use the values from the id, format, scale, and theme_mode fields to replace
     * the like-named placeholder strings in the templated URL to create a CDN (Content Delivery Network)
     * URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes,
     * see {@link https://dev.twitch.tv/docs/chat/send-receive-messages/#cdn-template Emote CDN URL format}.
     * You should use this template instead of using the URLs in the images object.
     */
    template: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-emote-sets
 */
export interface APIEmoteSet extends APIBaseEmote {
    /**
     * The image URLs for the emote.
     *
     * @remarks These image URLs always provide a static, non-animated emote image with a light background.
     * You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
     */
    images: APIEmoteImages;
    /**
     * The type of the emote.
     */
    emote_type: APIChannelEmoteType;
    /**
     * An ID that identifies the emote set that the emote belongs to.
     */
    emote_set_id: string;
    /**
     * The ID of the broadcaster who owns the emote.
     */
    owner_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-emote-sets
 */
export interface RESTGetEmoteSetsRequestParams {
    /**
     * An ID that identifies the emote set to get.
     *
     * @remarks Include this parameter for each emote set you want to get.
     * For example, `emote_set_id=1234&emote_set_id=5678`.
     * You may specify a maximum of 25 IDs.
     * The response contains only the IDs that were found and ignores duplicate IDs.
     */
    emote_set_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-emote-sets
 */
export interface RESTGetEmoteSetsResponse extends APIResponse<APIEmoteSet> {
    /**
     * A templated URL.
     *
     * @remarks Use the values from the id, format, scale, and theme_mode fields to replace
     * the like-named placeholder strings in the templated URL to create a CDN (Content Delivery Network)
     * URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes,
     * see {@link https://dev.twitch.tv/docs/chat/send-receive-messages/#cdn-template Emote CDN URL format}.
     * You should use this template instead of using the URLs in the images object.
     */
    template: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-emotes
 */
export enum APIUserEmoteType {
    /**
     * No emote type was assigned to this emote.
     */
    None = "none",
    /**
     * A Bits tier emote.
     */
    Bitstier = "bitstier",
    /**
     * A follower emote.
     */
    Follower = "follower",
    /**
     * A subscriber emote.
     */
    Subscriptions = "subscriptions",
    /**
     * An emote granted by using channel points.
     */
    ChannelPoints = "channelpoints",
    /**
     * An emote granted to the user through a special event.
     */
    Rewards = "rewards",
    /**
     * An emote granted for participation in a Hype Train.
     */
    Hypetrain = "hypetrain",
    /**
     * An emote granted for linking an Amazon Prime account.
     */
    Prime = "prime",
    /**
     * An emote granted for having Twitch Turbo.
     */
    Turbo = "turbo",
    /**
     * Emoticons supported by Twitch.
     */
    Smilies = "smilies",
    /**
     * An emote accessible by everyone.
     */
    Globals = "globals",
    /**
     * Emotes related to Overwatch League 2019.
     */
    Owl2019 = "owl2019",
    /**
     * Emotes granted by enabling two-factor authentication on an account.
     */
    Twofactor = "twofactor",
    /**
     * Emotes that were granted for only a limited time.
     */
    LimitedTime = "limitedtime",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-emotes
 */
export interface APIUserEmote extends APIBaseEmote {
    /**
     * The type of emote.
     */
    emote_type: APIUserEmoteType;
    /**
     * An ID that identifies the emote set that the emote belongs to.
     */
    emote_set_id: string;
    /**
     * The ID of the broadcaster who owns the emote.
     */
    owner_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-emotes
 */
export interface RESTGetUserEmotesRequestParams {
    /**
     * The ID of the user whose emotes you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
    /**
     * The User ID of a broadcaster you wish to get follower emotes of.
     *
     * @remarks Using this query parameter will guarantee inclusion of the broadcaster’s follower emotes in the response body.
     * If the user specified in `user_id` is subscribed to the broadcaster specified,
     * their follower emotes will appear in the response body regardless if this query parameter is used.
     */
    broadcaster_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-emotes
 */
export interface RESTGetUserEmotesResponse extends APIPaginatedResponse<APIUserEmote> {
    /**
     * A templated URL.
     *
     * @remarks Use the values from the id, format, scale, and theme_mode fields to replace
     * the like-named placeholder strings in the templated URL to create a CDN (Content Delivery Network)
     * URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes,
     * see {@link https://dev.twitch.tv/docs/chat/send-receive-messages/#cdn-template Emote CDN URL format}.
     * You should use this template instead of using the URLs in the images object.
     */
    template: string;
}
