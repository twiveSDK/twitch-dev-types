import type { EventBroadcasterInfo, EventModeratorInfo, EventUserInfo } from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-event
 */
export interface ChannelUnbanEvent extends EventUserInfo, EventBroadcasterInfo, EventModeratorInfo {}
