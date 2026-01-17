import type {EventBroadcasterInfo, EventModeratorInfo, EventUserInfo} from "../../common";
import type {AutomodMessageBlockedTerm, AutomodMessageV2} from "../common";
import type {AutomodMessageUpdateStatus} from "../automodMessageUpdate";

/**
 * @sse https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-update-event-v2
 */
export enum AutomodMessageUpdateReason {
    Automod = "automod",
    BlockedTerm = "blocked_term",
}

/**
 * @sse https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-update-event-v2
 */
export interface AutomodMessageUpdateEventV2 extends EventBroadcasterInfo, EventUserInfo, EventModeratorInfo {
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The body of the message.
     */
    message: AutomodMessageV2;
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
    /**
     * The reason why the message was caught.
     */
    reason: AutomodMessageUpdateReason;
    /**
     * If the message was caught due to a blocked term, this will be populated.
     */
    blocked_term?: AutomodMessageBlockedTerm;
}
