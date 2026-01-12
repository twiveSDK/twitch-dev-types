import type {BaseBroadcasterInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-vip-add-event
 */
export interface ChannelVIPAddEvent extends BaseBroadcasterInfo, BaseUserInfo {}
