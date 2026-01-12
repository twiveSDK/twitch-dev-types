/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-whisper
 */
export interface RESTPostWhisperRequestParams {
    /**
     * The ID of the user sending the whisper.
     *
     * @remarks This user must have a verified phone number. ID must match the **user_id** in the authentication token.
     */
    from_user_id: string;
    /**
     * The ID of the user to receive the whisper.
     */
    to_user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-whisper
 */
export interface RESTPostWhisperRequestBody {
    /**
     * The whisper message to send.
     *
     * @remarks The message must not be empty. The maximum message lengths are:
     * - 500 characters if the user you're sending the message to hasn't whispered you before.
     * - 10,000 characters if the user you're sending the message to has whispered you before.
     * Messages that exceed the maximum length are truncated.
     */
    message: string;
}
