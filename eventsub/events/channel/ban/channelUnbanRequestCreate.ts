import type { EventBroadcasterInfo, EventModeratorInfo } from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-request-create-event
 */
export interface ChannelUnbanRequestCreateEvent extends EventBroadcasterInfo, EventModeratorInfo {
    /**
     * The ID of the unban request.
     */
    id: string;
    /**
     * Message sent in the unban request.
     */
    text: string;
    /**
     * The UTC timestamp (in RFC3339 format) of when the unban request was created.
     */
    created_at: string;
}
