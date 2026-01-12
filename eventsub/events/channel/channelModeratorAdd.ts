import type {BaseBroadcasterInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderator-add-event
 */
export interface ChannelModeratorAddEvent extends BaseBroadcasterInfo, BaseUserInfo {}
