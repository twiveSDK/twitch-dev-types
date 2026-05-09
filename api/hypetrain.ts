import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export enum APIHypeTrainContributionType {
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
export enum APIHypeTrainType {
    Treasure = "treasure",
    GoldenKappa = "golden_kappa",
    Regular = "regular",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
 */
export interface APIHypeTrainSharedTrainParticipant {
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
export interface APIHypeTrainContribution {
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
    type: APIHypeTrainContributionType;
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
    top_contributions: APIHypeTrainContribution[];
    /**
     * A list containing the broadcasters participating in the shared Hype Train.
     *
     * @remarks Null if the Hype Train is not shared.
     */
    shared_train_participants: APIHypeTrainSharedTrainParticipant[]|null;
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
    type: APIHypeTrainType;
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
export interface APIHypeTrainAllTimeHigh {
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
    all_time_high: APIHypeTrainAllTimeHigh|null;
    /**
     * An object with information about the channel’s shared Hype Train records.
     *
     * @remarks **Null** if a Hype Train has not occurred.
     */
    shared_all_time_high: APIHypeTrainAllTimeHigh|null;
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
