import type {BaseBroadcasterInfo} from "../../../common";

/**
 * https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-clear-user-messages-event
 */
export interface ChannelChatClearUserMessagesEvent extends BaseBroadcasterInfo {
    /**
     * The ID of the user that was banned or put in a timeout. All of their messages are deleted.
     */
    target_user_id: string;
    /**
     * The username of the user that was banned or put in a timeout.
     */
    target_user_name: string;
    /**
     * The user login of the user that was banned or put in a timeout.
     */
    target_user_login: string;
}
