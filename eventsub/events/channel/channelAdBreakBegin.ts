import type {EventBroadcasterInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-ad-break-begin-event
 */
export interface ChannelAdBreakBeginEvent extends EventBroadcasterInfo {
    /**
     * Length in seconds of the mid-roll ad break requested.
     */
    duration_seconds: number;
    /**
     * The UTC timestamp of when the ad break began, in RFC3339 format.
     *
     * @remarks Note that there is potential delay between this event, when the streamer requested the ad break,
     * and when the viewers will see ads.
     */
    started_at: string;
    /**
     * Indicates if the ad was automatically scheduled via Ads Manager.
     */
    is_automatic: boolean;
    /**
     * The ID of the user that requested the ad. For automatic ads, this will be the ID of the broadcaster.
     */
    request_user_id: string;
    /**
     * The login of the user that requested the ad.
     */
    request_user_login: string;
    /**
     * The display name of the user that requested the ad.
     */
    request_user_name: string;
}
