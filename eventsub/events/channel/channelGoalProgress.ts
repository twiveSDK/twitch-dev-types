import type {ChannelGoalBeginEvent} from "./channelGoalBegin";


/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#goals-event
 */
export interface ChannelGoalProgressEvent extends ChannelGoalBeginEvent {}
