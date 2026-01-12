import type {BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-send-event
 */
export interface ChannelWarningSendEvent extends BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo {
    /**
     * The reason given for the warning.
     */
    reason?: string;
    /**
     * The chat rules cited for the warning.
     */
    chat_rules_cited?: string[];
}
