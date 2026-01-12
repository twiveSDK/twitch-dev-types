import type {BaseBroadcasterInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-acknowledge-event
 */
export interface ChannelWarningAcknowledgeEvent extends BaseBroadcasterInfo, BaseUserInfo {}
