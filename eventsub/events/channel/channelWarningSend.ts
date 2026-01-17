import type {EventBroadcasterInfo, EventModeratorInfo, EventUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-send-event
 */
export interface ChannelWarningSendEvent extends EventBroadcasterInfo, EventModeratorInfo, EventUserInfo {
    /**
     * The reason given for the warning.
     */
    reason?: string;
    /**
     * The chat rules cited for the warning.
     */
    chat_rules_cited?: string[];
}
