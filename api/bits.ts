import type {APIResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export interface APIBitsLeaderboardUser {
    /**
     * An ID that identifies a user on the leaderboard.
     */
    user_id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The user’s position on the leaderboard.
     */
    rank: number;
    /**
     * The number of Bits the user has cheered.
     */
    score: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export interface APIBitsLeaderboardDateRange {
    /**
     * The reporting window’s start date.
     */
    started_at: string;
    /**
     * The reporting window’s end date.
     */
    ended_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export interface APIBitsLeaderboard {
    /**
     * The list of leaderboard leaders.
     *
     * @remarks The leaders are returned in rank order by how much they’ve cheered. The array is empty if nobody has cheered bits.
     */
    data: APIBitsLeaderboardUser[];
    /**
     * The reporting window’s start and end dates, in RFC3339 format.
     *
     * @remarks The dates are calculated by using the started_at and period query parameters.
     * If you don’t specify the started_at query parameter, the fields contain empty strings.
     */
    date_range: APIBitsLeaderboardDateRange;
    /**
     * The number of ranked users in `data`.
     *
     * @remarks This is the value in the count query parameter or the total number of entries on the leaderboard,
     * whichever is less.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export enum RESTGetBitsLeaderboardPeriodRequestParam {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    All = "all",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export interface RESTGetBitsLeaderboardRequestParams {
    /**
     * The number of results to return. The minimum count is 1 and the maximum is 100. The default is 10.
     */
    count?: number;
    /**
     * The time period over which data is aggregated (uses the PST time zone).
     *
     * @remarks
     * day — A day spans from 00:00:00 on the day specified in *started_at* and runs through 00:00:00 of the next day.
     *
     * week — A week spans from 00:00:00 on the Monday of the week specified in *started_at* and
     * runs through 00:00:00 of the next Monday.
     *
     * month — A month spans from 00:00:00 on the first day of the month specified in *started_at* and
     * runs through 00:00:00 of the first day of the next month.
     *
     * year — A year spans from 00:00:00 on the first day of the year specified in *started_at* and
     * runs through 00:00:00 of the first day of the next year.
     *
     * all — Default. The lifetime of the broadcaster's channel.
     */
    period?: RESTGetBitsLeaderboardPeriodRequestParam;
    /**
     * The start date, in RFC3339 format, used for determining the aggregation period.
     *
     * @remarks Specify this parameter only if you specify the period query parameter.
     * The start date is ignored if period is all.
     * If your start date uses the ‘+’ offset operator (for example, 2022-01-01T00:00:00.0+05:00),
     * you must URL encode the start date.
     * The date is converted to PST before being used, so if you set the start time to `2022-01-01T00:00:00.0Z` and period to month,
     * the actual reporting period is December 2021, not January 2022.
     * If you want the reporting period to be January 2022, you must set the start time to `2022-01-01T08:00:00.0Z` or `2022-01-01T00:00:00.0-08:00`.
     */
    started_at?: string;
    /**
     * An ID that identifies a user that cheered bits in the channel.
     *
     * @remarks If *count* is greater than 1, the response may include users ranked above and below the specified user.
     * To get the leaderboard’s top leaders, don’t specify a user ID.
     */
    user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
 */
export interface RESTGetBitsLeaderboardResponse extends APIBitsLeaderboardUser {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export type APICheermotesTierLevel = "1"|"100"|"500"|"1000"|"5000"|"10000"|"100000";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export enum APICheermotesType {
    GlobalFirstParty = "global_first_party",
    GlobalThirdParty = "global_third_party",
    ChannelCustom = "channel_custom",
    DisplayOnly = "display_only",
    Sponsored = "sponsored",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface APICheermoteTierImageSize {
    "1": string;
    "1.5": string;
    "2": string;
    "3": string;
    "4": string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface APICheermoteTierImageFormat {
    animated: APICheermoteTierImageSize;
    static: APICheermoteTierImageSize;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface APICheermoteTierImageDictionary {
    dark: APICheermoteTierImageFormat;
    light: APICheermoteTierImageFormat;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface APICheermoteTier {
    /**
     * The minimum number of Bits that you must cheer at this tier level.
     *
     * @remarks The maximum number of Bits that you can cheer at this level is determined by the required minimum Bits
     * of the next tier level minus 1. For example, if `min_bits is` 1 and `min_bits` for the next tier is 100,
     * the Bits range for this tier level is 1 through 99. The minimum Bits value of the last tier is the
     * maximum number of Bits you can cheer using this Cheermote. For example, 10000.
     */
    min_bits: number;
    /**
     * The tier level.
     */
    id: APICheermotesTierLevel;
    /**
     * The hex code of the color associated with this tier level (for example, #979797).
     */
    color: string;
    /**
     * The animated and static image sets for the Cheermote.
     *
     * @remarks The dictionary of images is organized by theme, format, and size.
     * The theme keys are dark and light. Each theme is a dictionary of formats: animated and static.
     * Each format is a dictionary of sizes: 1, 1.5, 2, 3, and 4.
     * The value of each size contains the URL to the image.
     */
    images: APICheermoteTierImageDictionary;
    /**
     * A Boolean value that determines whether users can cheer at this tier level.
     */
    can_cheer: boolean;
    /**
     * A Boolean value that determines whether this tier level is shown in the Bits card.
     *
     * @remarks Is true if this tier level is shown in the Bits card.
     */
    show_in_bits_card: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface APICheermote {
    /**
     * The name portion of the Cheermote string that you use in chat to cheer Bits.
     *
     * @remarks The full Cheermote string is the concatenation of {prefix} + {number of Bits}.
     * For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100.
     * When the Cheermote string is entered in chat, Twitch converts it to the image associated
     * with the Bits tier that was cheered.
     */
    prefix: string;
    /**
     * A list of tier levels that the Cheermote supports.
     *
     * @remarks Each tier identifies the range of Bits that you can cheer at that tier level and an image that
     * graphically identifies the tier level.
     */
    tiers: APICheermoteTier[];
    /**
     * The type of Cheermote.
     */
    type: APICheermotesType;
    /**
     * The order that the Cheermotes are shown in the Bits card.
     *
     * @remarks The numbers may not be consecutive. For example, the numbers may jump from 1 to 7 to 13.
     * The order numbers are unique within a Cheermote type (for example, global_first_party)
     * but may not be unique amongst all Cheermotes in the response.
     */
    order: number;
    /**
     * The date and time, in RFC3339 format, when this Cheermote was last updated.
     */
    last_updated: string;
    /**
     * A Boolean value that indicates whether this Cheermote provides a charitable contribution match during charity campaigns.
     */
    is_charitable: boolean;
}

/*
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface RESTGetCheermotesRequestParams {
    /**
     * The ID of the broadcaster whose custom Cheermotes you want to get.
     *
     * @remarks Specify the broadcaster’s ID if you want to include the broadcaster’s Cheermotes in the response
     * (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.
     * If the broadcaster uploaded Cheermotes, the `type` field in the response is set to **channel_custom**.
     */
    broadcaster_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
 */
export interface RESTGetCheermotesResponse extends APIResponse<APICheermote> {}
