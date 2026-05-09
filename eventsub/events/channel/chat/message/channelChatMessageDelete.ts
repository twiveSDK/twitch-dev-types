import type { EventBroadcasterInfo } from "../../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-delete-event
 */
export interface ChannelChatMessageDeleteEvent extends EventBroadcasterInfo {
    /**
     * The ID of the user whose message was deleted.
     */
    target_user_id: string;
    /**
     * The username of the user whose message was deleted.
     */
    target_user_name: string;
    /**
     * The user login of the user whose message was deleted.
     */
    target_user_login: string;
    /**
     * A UUID that identifies the message that was removed.
     */
    message_id: string;
}
