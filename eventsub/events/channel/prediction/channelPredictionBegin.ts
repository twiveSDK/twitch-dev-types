import type { EventBroadcasterInfo, EventUserInfo } from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#outcomes
 */
export enum ChannelPredictionOutcomeColor {
    Pink = "pink",
    Blue = "blue",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#top-predictors
 */
export interface ChannelPredictionOutcomeTopPredictor extends EventUserInfo {
    /**
     * The number of Channel Points won.
     *
     * @remarks This value is always `null` in the event payload for Prediction progress and Prediction lock.
     * This value is 0 if the outcome did not win or if the Prediction was canceled and Channel Points were refunded.
     */
    channel_points_won: number|null;
    /**
     * The number of Channel Points used to participate in the Prediction.
     */
    channel_points_used: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#outcomes
 */
export interface ChannelPredictionOutcome {
    /**
     * The outcome ID.
     */
    id: string;
    /**
     * The outcome title.
     */
    title: string;
    /**
     * The color for the outcome.
     */
    color: ChannelPredictionOutcomeColor;
    /**
     * The number of users who used Channel Points on this outcome.
     */
    users: number;
    /**
     * The total number of Channel Points used on this outcome.
     */
    channel_points: number;
    /**
     * An array of users who used the most Channel Points on this outcome.
     */
    top_predictors: ChannelPredictionOutcomeTopPredictor[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-begin-event
 */
export interface ChannelPredictionBeginEvent extends EventBroadcasterInfo{
    /**
     * Channel Points Prediction ID.
     */
    id: string;
    /**
     * Title for the Channel Points Prediction.
     */
    title: string;
    /**
     * An array of outcomes for the Channel Points Prediction.
     */
    outcomes: ChannelPredictionOutcome[];
    /**
     * The time the Channel Points Prediction started.
     */
    started_at: string;
    /**
     * The time the Channel Points Prediction will automatically lock.
     */
    locked_at: string;
}
