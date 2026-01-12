import type {APIPaginatedResponse, APIResponse} from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export enum APIPredictionOutcomeColor {
    Blue = "BLUE",
    Pink = "PINK"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export interface APIPredictionOutcomeTopPredictor {
    /**
     * An ID that identifies the viewer.
     */
    user_id: string;
    /**
     * The viewer’s login name.
     */
    user_login: string;
    /**
     * The viewer’s display name.
     */
    user_name: string;
    /**
     * The number of Channel Points the viewer spent.
     */
    channel_points_used: number;
    /**
     * The number of Channel Points distributed to the viewer.
     */
    channel_points_won: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export interface APIPredictionOutcome {
    /**
     * An ID that identifies this outcome.
     */
    id: string;
    /**
     * The outcome’s text.
     */
    title: string;
    /**
     * The number of unique viewers that chose this outcome.
     */
    users: number;
    /**
     * The number of Channel Points spent by viewers on this outcome.
     */
    channel_points: number;
    /**
     * A list of viewers who were the top predictors; otherwise, **null** if none.
     */
    top_predictors: APIPredictionOutcomeTopPredictor|null,
    /**
     * The color that visually identifies this outcome in the UX.
     *
     * @remarks If the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome.
     * If there are more than two outcomes, the color is BLUE for all outcomes.
     */
    color: APIPredictionOutcomeColor;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export enum APIPredictionStatus {
    /**
     * The Prediction is running and viewers can make predictions.
     */
    Active = "ACTIVE",
    /**
     * The broadcaster canceled the Prediction and refunded the Channel Points to the participants.
     */
    Canceled = "CANCELED",
    /**
     * The broadcaster locked the Prediction, which means viewers can no longer make predictions.
     */
    Locked = "LOCKED",
    /**
     * The winning outcome was determined and the Channel Points were distributed to the viewers
     * who predicted the correct outcome.
     */
    Resolved = "RESOLVED"
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export interface APIPrediction {
    /**
     * An ID that identifies this prediction.
     */
    id: string;
    /**
     * An ID that identifies the broadcaster that created the prediction.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The question that the prediction asks. For example, `Will I finish this entire pizza?`
     */
    title: string;
    /**
     * The ID of the winning outcome.
     *
     * @remarks Is **null** unless `status` is RESOLVED.
     */
    winning_outcome_id: string|null;
    /**
     * The list of possible outcomes for the prediction.
     */
    outcomes: APIPredictionOutcome[];
    /**
     * The length of time (in seconds) that the prediction will run for.
     */
    prediction_window: number;
    /**
     * The prediction’s status.
     */
    status: APIPredictionStatus;
    /**
     * The UTC date and time of when the Prediction began.
     */
    created_at: string;
    /**
     * The UTC date and time of when the Prediction ended.
     *
     * @remarks If `status` is ACTIVE, this is set to **null**.
     */
    ended_at: string|null;
    /**
     * The UTC date and time of when the Prediction was locked.
     *
     * @remarks If `status` is not LOCKED, this is set to **null**.
     */
    locked_at: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export interface RESTGetPredictionsRequestParams {
    /**
     * The ID of the broadcaster whose predictions you want to get.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the prediction to get.
     *
     * @remarks To specify more than one ID, include this parameter for each prediction you want to get.
     * For example, `id=1234&id=5678`. You may specify a maximum of 25 IDs.
     * The endpoint ignores duplicate IDs and those not owned by the broadcaster.
     */
    id?: string;
    /**
     * The maximum number of items to return per page in the response.
     *
     * @remarks The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.
     */
    first?: number;
    /**
     * The cursor used to get the next page of results.
     *
     * @remarks The **Pagination** object in the response contains the cursor’s value.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    after?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
 */
export interface RESTGetPredictionsResponse extends APIPaginatedResponse<APIPrediction> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-prediction
 */
export interface RESTPostPredictionOutcome {
    /**
     * The text of one of the outcomes that the viewer may select.
     *
     * @remarks The title is limited to a maximum of 25 characters.
     */
    title: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-prediction
 */
export interface RESTPostPredictionRequestBody {
    /**
     * The ID of the broadcaster that’s running the prediction.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The question that the broadcaster is asking. For example, `Will I finish this entire pizza?`
     *
     * @remarks The title is limited to a maximum of 45 characters.
     */
    title: string;
    /**
     * The list of possible outcomes that the viewers may choose from.
     *
     * @remarks The list must contain a minimum of 2 choices and up to a maximum of 10 choices.
     */
    outcomes: RESTPostPredictionOutcome[];
    /**
     * The length of time (in seconds) that the prediction will run for.
     *
     * @remarks The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes).
     */
    prediction_window: number;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#create-prediction
 */
export interface RESTPostPredictionResponse extends APIResponse<APIPrediction> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-prediction
 */
export enum RESTPatchPredictionStatusRequestBodyParam {
    /**
     * The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome.
     */
    Resolved = "RESOLVED",
    /**
     * The broadcaster is canceling the prediction and sending refunds to the participants.
     */
    Canceled = "CANCELED",
    /**
     * The broadcaster is locking the prediction, which means viewers may no longer make predictions.
     */
    Locked = "LOCKED",
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-prediction
 */
export interface RESTPatchPredictionRequestBody {
    /**
     * The ID of the broadcaster that’s running the prediction.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
    /**
     * The ID of the prediction to end.
     */
    id: string;
    /**
     * The status of the prediction.
     *
     * @remarks The broadcaster can update an active prediction to LOCKED, RESOLVED, or CANCELED;
     * and update a locked prediction to RESOLVED or CANCELED.
     * The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction.
     * If not, Twitch sets the status to CANCELED and returns the points.
     */
    status: RESTPatchPredictionStatusRequestBodyParam;
    /**
     * The ID of the winning outcome.
     *
     * @remarks You must set this parameter if you set `status` to RESOLVED.
     */
    winning_outcome_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#end-prediction
 */
export interface RESTPatchPredictionResponse extends APIResponse<APIPrediction> {}
