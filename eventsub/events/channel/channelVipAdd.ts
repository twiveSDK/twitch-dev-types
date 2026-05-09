import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-vip-add-event
 */
export interface ChannelVIPAddEvent extends EventBroadcasterInfo, EventUserInfo {}
