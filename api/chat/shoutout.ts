/**
 * @see https://dev.twitch.tv/docs/api/reference/#send-a-shoutout
 */
export interface RESTPostShoutoutRequestParams {
    /**
     * The ID of the broadcaster that’s sending the Shoutout.
     */
    from_broadcaster_id: string;
    /**
     * The ID of the broadcaster that’s receiving the Shoutout.
     */
    to_broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that is one of the broadcaster’s moderators.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
}
