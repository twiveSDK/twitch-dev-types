import type {APIPaginatedResponse, APIResponse, RESTPaginationRequestParams} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export enum APIHypeTrainEventContributionType {
    /**
     * Cheering with Bits.
     */
    Bits = "BITS",
    /**
     * Subscription activity like subscribing or gifting subscriptions.
     */
    Subs = "SUBS",
    /**
     * Covers other contribution methods not listed.
     */
    Other = "OTHER"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export interface APIHypeTrainEventContribution {
    /**
     * The total amount contributed.
     * 
     * @remarks If type is BITS, total represents the amount of Bits used.
     * If type is SUBS, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.
     */
    total: number;
    /**
     * The contribution method used.
     */
    type: APIHypeTrainEventContributionType;
    /**
     * The ID of the user that made the contribution.
     */
    user: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export interface APIHypeTrainEventData {
    /**
     * The ID of the broadcaster that’s running the Hype Train.
     */
    broadcaster_id: string;
    /**
     * The UTC date and time (in RFC3339 format) that another Hype Train can start.
     */
    cooldown_end_time: string;
    /**
     * The UTC date and time (in RFC3339 format) that the Hype Train ends.
     */
    expires_at: string;
    /**
     * The value needed to reach the next level.
     */
    goal: number;
    /**
     * An ID that identifies this Hype Train.
     */
    id: string;
    /**
     * The most recent contribution towards the Hype Train’s goal.
     */
    last_contribution: APIHypeTrainEventContribution;
    /**
     * The highest level that the Hype Train reached.
     */
    level: number;
    /**
     * The UTC date and time (in RFC3339 format) that this Hype Train started.
     */
    started_at: string;
    /**
     * The top contributors for each contribution type.
     * 
     * @remarks For example, the top contributor using BITS (by aggregate) and the top contributor using SUBS (by count).
     */
    top_contributions: APIHypeTrainEventContribution[];
    /**
     * The current total amount raised.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export interface APIHypeTrainEvent {
    /**
     * An ID that identifies this event.
     */
    id: string;
    /**
     * The type of event. The string is in the form, hypetrain.{event_name}.
     * 
     * @remarks The request returns only progress event types (i.e., hypetrain.progression).
     */
    event_type: string;
    /**
     * The UTC date and time (in RFC3339 format) that the event occurred.
     */
    event_timestamp: string;
    /**
     * The version number of the definition of the event’s data.
     * 
     * @remarks For example, the value is 1 if the data in `event_data` uses the first definition of the event’s data.
     */
    version: string;
    /**
     * The event’s data.
     */
    event_data: APIHypeTrainEventData;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export interface RESTGetHypeTrainEventsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster that’s running the Hype Train.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
 */
export interface RESTGetHypeTrainEventsResponse extends APIPaginatedResponse<APIHypeTrainEvent> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export enum APICurrentHypeTrainContributionType {
    /**
     * Cheering with Bits.
     */
    Bits = "bits",
    /**
     * Subscription activity like subscribing or gifting subscriptions.
     */
    Subscription = "subscription",
    /**
     * Covers other contribution methods not listed.
     */
    Other = "other"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export enum APICurrentHypeTrainType {
    Treasure = "treasure",
    GoldenKappa = "golden_kappa",
    Regular = "regular",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APICurrentHypeTrainSharedTrainParticipant {
    /**
     * The broadcaster ID.
     */
    broadcaster_user_id: string;
    /**
     * The broadcaster login name.
     */
    broadcaster_user_login: string;
    /**
     * The broadcaster display name.
     */
    broadcaster_user_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APICurrentHypeTrainContribution {
    /**
     * The ID of the user that made the contribution.
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
     * The contribution method used.
     */
    type: APICurrentHypeTrainContributionType;
    /**
     * The total number of points contributed for the type.
     */
    total: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APICurrentHypeTrain {
    /**
     * The Hype Train ID.
     */
    id: string;
    /**
     * The broadcaster ID.
     */
    broadcaster_user_id: string;
    /**
     * The broadcaster login name.
     */
    broadcaster_user_login: string;
    /**
     * The broadcaster display name.
     */
    broadcaster_user_name: string;
    /**
     * The current level of the Hype Train.
     */
    level: number;
    /**
     * Total points contributed to the Hype Train.
     */
    total: number;
    /**
     * The number of points contributed to the Hype Train at the current level.
     */
    progress: number;
    /**
     * The number of points required to reach the next level.
     */
    goal: number;
    /**
     * The contributors with the most points contributed.
     */
    top_contributions: APICurrentHypeTrainContribution[];
    /**
     * A list containing the broadcasters participating in the shared Hype Train.
     *
     * @remarks Null if the Hype Train is not shared.
     */
    shared_train_participants: APICurrentHypeTrainSharedTrainParticipant[]|null;
    /**
     * The time when the Hype Train started.
     */
    started_at: string;
    /**
     * The time when the Hype Train expires.
     *
     * @remarks The expiration is extended when the Hype Train reaches a new level.
     */
    expires_at: string;
    /**
     * The type of the Hype Train.
     * {@link https://help.twitch.tv/s/article/hype-train-guide#special Learn More}
     */
    type: APICurrentHypeTrainType;
    /**
     * Indicates if the Hype Train is shared.
     *
     * @remarks When **true**, shared_train_participants will contain the list of broadcasters the train is shared with.
     */
    is_shared_train: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APIHypeTrainStatusAllTimeHigh {
    /**
     * The level of the record Hype Train.
     */
    level: number;
    /**
     * Total points contributed to the record Hype Train.
     */
    total: number;
    /**
     * The time when the record was achieved.
     */
    achieved_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APIHypeTrainStatus {
    /**
     * An object describing the current Hype Train.
     *
     * @remarks **Null** if a Hype Train is not active.
     */
    current: APICurrentHypeTrain|null;
    /**
     * An object with information about the channel’s Hype Train records.
     *
     * @remarks **Null** if a Hype Train has not occurred.
     */
    all_time_high: APIHypeTrainStatusAllTimeHigh|null;
    /**
     * An object with information about the channel’s shared Hype Train records.
     *
     * @remarks **Null** if a Hype Train has not occurred.
     */
    shared_all_time_high: APIHypeTrainStatusAllTimeHigh|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface RESTGetHypeTrainStatusRequestParams {
    /**
     * The User ID of the channel broadcaster.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface RESTGetHypeTrainStatusResponse extends APIResponse<APIHypeTrainStatus> {}
