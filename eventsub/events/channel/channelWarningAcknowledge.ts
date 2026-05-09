import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-acknowledge-event
 */
export interface ChannelWarningAcknowledgeEvent extends EventBroadcasterInfo, EventUserInfo {}
