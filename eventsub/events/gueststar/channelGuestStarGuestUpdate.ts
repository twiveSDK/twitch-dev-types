import type {BaseBroadcasterInfo} from "../common";
import type {ChannelGuestStar, ChannelGuestStarHost} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-guest-update-event
 */
export enum ChannelGuestStarGuestUpdateState {
    /**
     * The guest has transitioned to the invite queue.
     *
     * @rrmarks This can take place when the guest was previously assigned a slot, but have been removed from the call and are sent back to the invite queue.
     */
    Invited = "invited",
    /**
     * The guest has accepted the invite and is currently in the process of setting up to join the session.
     */
    Accepted = "accepted",
    /**
     * The guest has signaled they are ready and can be assigned a slot.
     */
    Ready = "ready",
    /**
     * The guest has been assigned a slot in the session, but is not currently seen live in the broadcasting software.
     */
    Backstage = "backstage",
    /**
     * The guest is now live in the host's broadcasting software.
     */
    Live = "live",
    /**
     * The guest was removed from the call or queue.
     */
    Removed = "removed",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-guest-update-event
 */
export interface ChannelGuestStarGuestUpdateEvent extends BaseBroadcasterInfo, ChannelGuestStar, ChannelGuestStarHost {
    /**
     * ID representing the unique session that was started.
     */
    season_id: string;
    /**
     * The user ID of the moderator who updated the guest’s state (could be the host).
     *
     * @remarks `null` if the update was performed by the guest.
     */
    moderator_user_id: string|null;
    /**
     * The moderator display name.
     *
     * @remarks `null` if the update was performed by the guest.
     */
    moderator_user_name: string|null;
    /**
     * The moderator login.
     *
     * @remarks `null` if the update was performed by the guest.
     */
    moderator_user_login: string|null;
    /**
     * The ID of the slot assignment the guest is assigned to.
     *
     * @remarks `null` if the guest is in the INVITED, REMOVED, READY, or ACCEPTED state.
     */
    slot_id: string|null;
    /**
     * The current state of the user after the update has taken place.
     *
     * @remarks `null` if the slot is now empty.
     */
    state: ChannelGuestStarGuestUpdateState|null;
    /**
     * Flag that signals whether the host is allowing the slot’s video to be seen by participants within the session.
     *
     * @remarks `null` if the guest is not slotted.
     */
    host_video_enabled: boolean|null;
    /**
     * Flag that signals whether the host is allowing the slot’s audio to be heard by participants within the session.
     *
     * @remarks `null` if the guest is not slotted.
     */
    host_audio_enabled: boolean|null;
    /**
     * Value between 0-100 that represents the slot’s audio level as heard by participants within the session.
     *
     * @remarks `null` if the guest is not slotted.
     */
    host_volume: number|null;
}
