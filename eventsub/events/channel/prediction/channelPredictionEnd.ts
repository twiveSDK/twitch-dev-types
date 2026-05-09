import type { ChannelPredictionBeginEvent } from "./channelPredictionBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-end-event
 */
export enum ChannelPredictionEndStatus {
    Resolved = "resolved",
    Canceled = "canceled",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-end-event
 */
export interface ChannelPredictionEndEvent extends ChannelPredictionBeginEvent {
    /**
     * The status of the Channel Points Prediction.
     */
    status: ChannelPredictionEndStatus;
}
