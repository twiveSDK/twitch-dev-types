import type {EventBroadcasterInfo, EventUserInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-request-resolve-event
 */
export enum ChannelUnbanRequestResolveStatus {
    Approved = "approved",
    Canceled = "canceled",
    Denied = "denied",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-request-resolve-event
 */
export interface ChannelUnbanRequestResolveEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The ID of the unban request.
     */
    id: string;
    /**
     * User ID of moderator who approved/denied the request.
     */
    moderator_id: string|null;
    /**
     * The moderator’s login name.
     */
    moderator_login: string|null;
    /**
     * The moderator’s display name.
     */
    moderator_name: string|null;
    /**
     * Resolution text supplied by the mod/broadcaster upon approval/denial of the request.
     */
    resolution_text: string|null;
    /**
     * Dictates whether the unban request was approved or denied.
     */
    status: ChannelUnbanRequestResolveStatus;
}
