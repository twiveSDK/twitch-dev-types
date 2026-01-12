/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-begin-event
 */
export interface ChannelSharedChatSessionHost {
    /**
     * The User ID of the host channel.
     */
    host_broadcaster_user_id: string;
    /**
     * The display name of the host channel.
     */
    host_broadcaster_user_name: string;
    /**
     * The user login of the host channel.
     */
    host_broadcaster_user_login: string;
}
