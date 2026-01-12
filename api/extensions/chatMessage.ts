/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-extension-chat-message
 */
export interface RESTPostExtensionChatMessageRequestParams {
    /**
     * The ID of the broadcaster that has activated the extension.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-extension-chat-message
 */
export interface RESTPostExtensionChatMessageRequestBody {
    /**
     * The message text.
     * 
     * @remarks The message may contain a maximum of 280 characters.
     */
    text: string;
    /**
     * The ID of the extension that’s sending the chat message.
     */
    extension_id: string;
    /**
     * The extension’s version number.
     */
    extension_version: string;
}
