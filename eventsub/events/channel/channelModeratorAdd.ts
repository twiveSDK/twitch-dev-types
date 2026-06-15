import type {EventBroadcasterInfo, EventUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderator-add-event
 */
export interface ChannelModeratorAddEvent extends EventBroadcasterInfo, EventUserInfo {}
