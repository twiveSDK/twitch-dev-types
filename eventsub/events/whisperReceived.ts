/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#whisper-received-event
 */
export interface WhisperMessage {
    /**
     * The body of the whisper message.
     */
    text: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#whisper-received-event
 */
export interface WhisperReceivedEvent {
    /**
     * The ID of the user sending the message.
     */
    from_user_id: string;
    /**
     * The name of the user sending the message.
     */
    from_user_name: string;
    /**
     * The login of the user sending the message.
     */
    from_user_login: string;
    /**
     * The ID of the user receiving the message.
     */
    to_user_id: string;
    /**
     * The name of the user receiving the message.
     */
    to_user_name: string;
    /**
     * The login of the user receiving the message.
     */
    to_user_login: string;
    /**
     * The whisper ID.
     */
    whisper_id: string;
    /**
     * Object containing whisper information.
     */
    whisper: WhisperMessage;
}
