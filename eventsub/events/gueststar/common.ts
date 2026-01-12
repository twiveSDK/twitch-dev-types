/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-guest-update-event
 */
export interface ChannelGuestStar {
    /**
     * The user ID of the guest who transitioned states in the session.
     *
     * @remarks `null` if the slot is now empty.
     */
    guest_star_user_id: string|null;
    /**
     * The guest display name.
     *
     * @remarks `null` if the slot is now empty.
     */
    guest_star_user_name: string|null;
    /**
     * The guest login.
     *
     * @remarks `null` if the slot is now empty.
     */
    guest_star_user_login: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-guest-update-event
 */
export interface ChannelGuestStarHost {
    /**
     * User ID of the host channel.
     */
    host_user_id: string;
    /**
     * The host display name.
     */
    host_user_name: string;
    /**
     * The host login.
     */
    host_user_login: string;
}
