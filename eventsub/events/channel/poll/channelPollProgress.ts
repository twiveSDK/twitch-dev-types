import type { ChannelPollBeginEvent } from "./channelPollBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-progress-event
 */
export interface ChannelPollProgressEvent extends ChannelPollBeginEvent {}
