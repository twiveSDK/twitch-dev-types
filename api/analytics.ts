import type {APIPaginatedResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export enum APIAnalyticsType {
    OverviewV2 = "overview_v2",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export interface APIBaseAnalytics {
    /**
     * The URL that you use to download the report. The URL is valid for 5 minutes.
     */
    URL: string;
    /**
     * The type of report.
     * 
     * @remarks Currently, the only supported type is `overview_v2`.
     */
    type: APIAnalyticsType;
    /**
     * The reporting window’s start and end dates, in RFC3339 format.
     */
    date_range: {
        /**
         * The reporting window’s start date.
         */
        started_at: string;
        /**
         * The reporting window’s end date.
         */
        ended_at: string;
    };
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export interface RESTBaseGetAnalyticsRequestParams {
    /**
     * The type of analytics report to get.
     *
     * @remarks Currently, the only supported type is `overview_v2`.
     */
    type?: APIAnalyticsType;
    /**
     * The reporting window’s start date, in RFC3339 format.
     *
     * @remark Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z).
     * If you specify a start date, you must specify an end date.
     * The start date must be within one year of today’s date.
     * If you specify an earlier date, the API ignores it and uses a date that’s one year prior to today’s date.
     * If you don’t specify a start and end date, the report includes all available data for the last 365 days from today.
     * The report contains one row of data for each day in the reporting window.
     */
    started_at?: string;
    /**
     * The reporting window’s end date, in RFC3339 format.
     *
     * @remark Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). The report is inclusive of the end date.
     * Specify an end date only if you provide a start date.
     * Because it can take up to two days for the data to be available, you must specify an end date that’s earlier
     * than today minus one to two days.
     * If not, the API ignores your end date and uses an end date that is today minus one to two days.
     */
    ended_at?: string;
    /**
     * The maximum number of report URLs to return per page in the response.
     *
     * @remarks The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
     * While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
     */
    first?: number;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     *
     * This parameter is ignored if *game_id* parameter is set.
     */
    after?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export interface APIExtensionAnalytics extends APIBaseAnalytics {
    /**
     * An ID that identifies the extension that the report was generated for.
     */
    extension_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export interface RESTGetExtensionAnalyticsRequestParams extends RESTBaseGetAnalyticsRequestParams {
    /**
     * The extension's client ID.
     *
     * @remarks If specified, the response contains a report for the specified extension.
     * If not specified, the response includes a report for each extension that the authenticated user owns.
     */
    extension_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
 */
export interface RESTGetExtensionAnalyticsResponse extends APIPaginatedResponse<APIExtensionAnalytics> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-game-analytics
 */
export interface APIGameAnalytics extends APIBaseAnalytics {
    /**
     * An ID that identifies the game that the report was generated for.
     */
    game_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-game-analytics
 */
export interface RESTGetGameAnalyticsRequestParams extends RESTBaseGetAnalyticsRequestParams {
    /**
     * The game’s client ID. If specified, the response contains a report for the specified game.
     *
     * @remarks If not specified, the response includes a report for each of the authenticated user’s games.
     */
    game_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-game-analytics
 */
export interface RESTGetGameAnalyticsResponse extends APIPaginatedResponse<APIGameAnalytics> {}
