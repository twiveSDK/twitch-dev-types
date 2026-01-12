import type {BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-event
 */
export interface ChannelUnbanEvent extends BaseUserInfo, BaseBroadcasterInfo, BaseModeratorInfo {}
