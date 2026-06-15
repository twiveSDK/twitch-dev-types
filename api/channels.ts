import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";
import type {APIContentClassificationLabelId, APIContentClassificationLabelSettings} from "./ccls";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-information
 */
export interface APIChannelInformation {
    /**
     * An ID that uniquely identifies the broadcaster.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster’s preferred language.
     * 
     * @remarks The value is an ISO 639-1 two-letter language code (for example, en for English).
     * The value is set to “other” if the language is not a Twitch supported language.
     */
    broadcaster_language: string;
    /**
     * The name of the game that the broadcaster is playing or last played.
     * 
     * @remarks The value is an empty string if the broadcaster has never played a game.
     */
    game_name: string;
    /**
     * An ID that uniquely identifies the game that the broadcaster is playing or last played.
     * 
     * @remarks The value is an empty string if the broadcaster has never played a game.
     */
    game_id: string;
    /**
     * The title of the stream that the broadcaster is currently streaming or last streamed.
     * 
     * @remarks The value is an empty string if the broadcaster has never streamed.
     */
    title: string;
    /**
     * The value of the broadcaster’s stream delay setting, in seconds. 
     * 
     * @remarks This field’s value defaults to zero unless
     * 1) the request specifies a user access token,
     * 2) the ID in the broadcaster_id query parameter matches the user ID in the access token, and
     * 3) the broadcaster has partner status, and they set a non-zero stream delay value.
     */
    delay: number;
    /**
     * The tags applied to the channel.
     */
    tags: string[];
    /**
     * The CCLs applied to the channel.
     */
    content_classification_labels: APIContentClassificationLabelId[];
    /**
     * Boolean flag indicating if the channel has branded content.
     */
    is_branded_content: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-information
 */
export interface RESTGetChannelInformationRequestParams {
    /**
     * The ID of the broadcaster whose channel you want to get.
     * 
     * @remarks To specify more than one ID, include this parameter for each broadcaster you want to get.
     * For example,`broadcaster_id=1234&broadcaster_id=5678`.
     * You may specify a maximum of **100** IDs. The API ignores duplicate IDs and IDs that are not found.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-information
 */
export interface RESTGetChannelInformationResponse extends APIResponse<APIChannelInformation> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#modify-channel-information
 */
export interface RESTPatchChannelInformationRequestParams {
    /**
     * The ID of the broadcaster whose channel you want to update.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#modify-channel-information
 */
export interface RESTPatchChannelInformationRequestBody {
    /**
     * The ID of the game that the user plays.
     *
     * @remarks The game is not updated if the ID isn’t a game ID that Twitch recognizes.
     * To unset this field, use "0" or "" (an empty string).
     */
    game_id?: string;
    /**
     * The user’s preferred language. Set the value to an ISO 639-1 two-letter language code
     * (for example, en for English).
     *
     * @remarks Set to “other” if the user’s preferred language is not a Twitch supported language.
     * The language isn’t updated if the language code isn’t a Twitch supported language.
     */
    broadcaster_language?: string;
    /**
     * The title of the user’s stream.
     *
     * @remarks You may not set this field to an empty string.
     */
    title?: string;
    /**
     * The number of seconds you want your broadcast buffered before streaming it live.
     *
     * @remarks The delay helps ensure fairness during competitive play. Only users with Partner status may set this
     * field. The maximum delay is 900 seconds (15 minutes).
     */
    delay?: number;
    /**
     * A list of channel-defined tags to apply to the channel.
     *
     * @remarks To remove all tags from the channel, set tags to an empty array.
     * Tags help identify the content that the channel streams.
     * {@link https://help.twitch.tv/s/article/guide-to-tags Learn More}
     * A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an
     * empty string or contain spaces or special characters. Tags are case-insensitive. For readability, consider using
     * camelCasing or PascalCasing.
     */
    tags?: string[];
    /**
     * List of labels that should be set as the Channel’s CCLs.
     */
    content_classification_labels?: APIContentClassificationLabelSettings[];
    /**
     * Boolean flag indicating if the channel has branded content.
     */
    is_branded_content?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-editors
 */
export interface APIChannelEditor {
    /**
     * An ID that uniquely identifies a user with editor permissions.
     */
    user_id: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The date and time, in RFC3339 format, when the user became one of the broadcaster’s editors.
     */
    created_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-editors
 */
export interface RESTGetChannelEditorsRequestParams {
    /**
     * The ID of the broadcaster that owns the channel.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-editors
 */
export interface RESTGetChannelEditorsResponse extends APIResponse<APIChannelEditor> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-followed-channels
 */
export interface APIFollowedChannel {
    /**
     * An ID that uniquely identifies the broadcaster that this user is following.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The UTC timestamp when the user started following the broadcaster.
     */
    followed_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-followed-channels
 */
export interface RESTGetFollowedChannelsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the user whose followed channels you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
    /**
     * A broadcaster’s ID. Use this parameter to see whether the user follows this broadcaster.
     *
     * @remarks If specified, the response contains this broadcaster if the user follows them.
     * If not specified, the response contains all broadcasters that the user follows.
     */
    broadcaster_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-followed-channels
 */
export interface RESTGetFollowedChannelsResponse extends APIPaginatedResponse<APIFollowedChannel> {
    /**
     * The total number of broadcasters that the user follows.
     *
     * @remarks As someone pages through the list, the number may change as the user follows or unfollows broadcasters.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-followers
 */
export interface APIChannelFollower {
    /**
     * The UTC timestamp when the user started following the broadcaster.
     */
    followed_at: string;
    /**
     * An ID that uniquely identifies the user that’s following the broadcaster.
     */
    user_id: string;
    /*
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-followers
 */
export interface RESTGetChannelFollowersRequestParams extends RESTPaginationRequestParams {
    /**
     * A user’s ID. Returns the list of broadcasters that this user follows.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id?: string;
    /**
     * A broadcaster’s ID.
     *
     * @remarks Use this parameter to see whether the user follows this broadcaster.
     * If specified, the response contains this broadcaster if the user follows them.
     * If not specified, the response contains all broadcasters that the user follows.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-followers
 */
export interface RESTGetChannelFollowersResponse extends APIPaginatedResponse<APIChannelFollower> {
    /**
     * The total number of users that follow this broadcaster.
     *
     * @remarks As someone pages through the list, the number of users may change as users follow or unfollow the
     * broadcaster.
     */
    total: number;
}
