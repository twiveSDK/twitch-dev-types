import type { ChannelPredictionBeginEvent } from "./channelPredictionBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-progress-event
 */
export interface ChannelPredictionProgressEvent extends ChannelPredictionBeginEvent {}
