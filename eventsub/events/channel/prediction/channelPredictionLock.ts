import type {ChannelPredictionBeginEvent} from "./channelPredictionBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-lock-event
 */
export interface ChannelPredictionLockEvent extends ChannelPredictionBeginEvent {}
