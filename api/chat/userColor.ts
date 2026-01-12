import type {APIResponse} from "../common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-chat-color
 */
export enum APIUserChatColor {
    Blue = "blue",
    BlueViolet = "blue_violet",
    CadetBlue = "cadet_blue",
    Chocolate = "chocolate",
    Coral = "coral",
    DodgerBlue = "dodger_blue",
    FireBrick = "fire_brick",
    GoldenRod = "golden_rod",
    Green = "green",
    HotPink = "hot_pink",
    OrangeRed = "orange_red",
    Red = "red",
    SeaGreen = "sea_green",
    SpringGreen = "spring_green",
    YellowGreen = "yellow_green",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-chat-color
 */
export interface APIUserChatColorInfo {
    /**
     * An ID that uniquely identifies the user.
     */
    user_id: string;
    /**
     * The user's login name.
     */
    user_login: string;
    /**
     * The user's display name.
     */
    user_name: string;
    /**
     * The Hex color code that the user uses in chat for their name.
     * 
     * @remarks If the user hasn’t specified a color in their settings, the string is empty.
     */
    color: APIUserChatColor|string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-chat-color
 */
export interface RESTGetUserChatColorRequestParams {
    /**
     * The ID of the user whose username color you want to get.
     * 
     * @remarks To specify more than one user, include the user_id parameter for each user to get.
     * For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100.
     * The API ignores duplicate IDs and IDs that weren’t found.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-user-chat-color
 */
export interface RESTGetUserChatColorResponse extends APIResponse<APIUserChatColorInfo> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-user-chat-color
 */
export interface RESTPutUserChatColorRequestParams {
    /**
     * The ID of the user whose chat color you want to update.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    user_id: string;
    /**
     * The color to use for the user's name in chat.
     *
     * @remarks Turbo and Prime users may specify a named color or a Hex color code like #9146FF.
     * If you use a Hex color code, remember to URL encode it.
     */
    color: APIUserChatColor|string;
}
