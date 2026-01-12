import type {BaseBroadcasterInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-cheer-event
 */
export interface ChannelCheerEvent extends BaseBroadcasterInfo {
    /**
     * Whether the user cheered anonymously or not.
     */
    is_anonymous: boolean;
    /**
     * The user ID for the user who cheered on the specified channel.
     *
     * @remarks This is null if `is_anonymous` is true.
     */
    user_id: string|null;
    /**
     * The user login for the user who cheered on the specified channel.
     *
     * @reamrks This is null if `is_anonymous` is true.
     */
    user_login: string|null;
    /**
     * The user display name for the user who cheered on the specified channel.
     *
     * @reamrks This is null if `is_anonymous` is true.
     */
    user_name: string|null;
    /**
     * The message sent with the cheer.
     */
    message: string;
    /**
     * The number of Bits cheered.
     */
    bits: number;
}
