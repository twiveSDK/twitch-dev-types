/**
 * @see https://dev.twitch.tv/docs/api/reference/#assign-guest-star-slot
 */
export interface RESTPostGuestStarSlotRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the Guest Star session in which to assign the slot.
     */
    session_id: string;
    /**
     * The Twitch User ID corresponding to the guest to assign a slot in the session.
     * 
     * @remarks This user must already have an invite to this session, and have indicated that they are ready to join.
     */
    guest_id: string;
    /**
     * The slot assignment to give to the user.
     * 
     * @remarks Must be a numeric identifier between “1” and “N” where N is the max number of slots for the session.
     * Max number of slots allowed for the session is reported by
     * {@link https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings Get Channel Guest Star Settings}.
     */
    slot_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot
 */
export interface RESTPatchGuestStarSlotRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the Guest Star session in which to update slot settings.
     */
    session_id: string;
    /**
     * The slot assignment previously assigned to a user.
     */
    source_slot_id: string;
    /**
     * The slot to move this user assignment to.
     *
     * @remarks If the destination slot is occupied, the user assigned will be swapped into `source_slot_id`.
     */
    destination_slot_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#delete-guest-star-slot
 */
export interface RESTDeleteGuestStarSlotRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the Guest Star session in which to remove the slot assignment.
     */
    session_id: string;
    /**
     * The Twitch User ID corresponding to the guest to remove from the session.
     */
    guest_id: string;
    /**
     * The slot ID representing the slot assignment to remove from the session.
     */
    slot_id: string;
    /**
     * Flag signaling that the guest should be reinvited to the session, sending them back to the invite queue.
     */
    should_reinvite_guest?: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot-settings
 */
export interface RESTPatchGuestStarSlotSettingsRequestParams {
    /**
     * The ID of the broadcaster running the Guest Star session.
     */
    broadcaster_id: string;
    /**
     * The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    moderator_id: string;
    /**
     * The ID of the Guest Star session in which to update a slot’s settings.
     */
    session_id: string;
    /**
     * The slot assignment that has previously been assigned to a user.
     */
    slot_id: string;
    /**
     * Flag indicating whether the slot is allowed to share their audio with the rest of the session.
     *
     * @remarks If **false**, the slot will be muted in any views containing the slot.
     */
    is_audio_enabled?: boolean;
    /**
     * Flag indicating whether the slot is allowed to share their video with the rest of the session.
     *
     * @remarks If **false**, the slot will have no video shared in any views containing the slot.
     */
    is_video_enabled?: boolean;
    /**
     * Flag indicating whether the user assigned to this slot is visible/can be heard from any public subscriptions.
     *
     * @remarks Generally, this determines whether the slot is enabled in any broadcasting software integrations.
     */
    is_live?: boolean;
    /**
     * Value from 0-100 that controls the audio volume for shared views containing the slot.
     */
    volume?: number;
}
