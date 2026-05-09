import type { AutomodMessage } from "./common";
import type { EventBroadcasterInfo, EventUserInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event
 */
export interface AutomodMessageHoldEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The ID of the message that was flagged by automod.
     */
    message: AutomodMessage;
    /**
     * The category of the message.
     */
    category: string;
    /**
     * The level of severity. Measured between 1 and 4.
     */
    level: 1|2|3|4;
    /**
     * The timestamp of when automod saved the message.
     */
    held_at: string;
}
