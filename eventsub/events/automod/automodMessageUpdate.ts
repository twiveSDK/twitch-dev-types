import type {BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo} from "../common";
import type {AutomodMessage} from "./common";

/**
 * @sse https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-update-event
 */
export enum AutomodMessageUpdateStatus {
    Approved = "Approved",
    Denied = "Denied",
    Expired = "Expired",
}

/**
 * @sse https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-update-event
 */
export interface AutomodMessageUpdateEvent extends BaseBroadcasterInfo, BaseUserInfo, BaseModeratorInfo {
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The body of the message.
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
     * The message’s status.
     */
    status: AutomodMessageUpdateStatus;
    /**
     * The timestamp of when automod saved the message.
     */
    held_at: string;
}
