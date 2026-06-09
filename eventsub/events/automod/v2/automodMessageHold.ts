import type { EventBroadcasterInfo, EventUserInfo } from "../../common";
import type { AutomodMessageBlockedTerm, AutomodMessageBoundary, AutomodMessageV2 } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export enum AutomodMessageHoldReason {
    Automod = "automod",
    BlockedTerm = "blocked_term",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageHoldAutomod {
    /**
     * The category of the caught message.
     */
    category: string;
    /**
     * The level of severity (1-4).
     */
    level: 1|2|3|4;
    /**
     * The bounds of the text that caused the message to be caught.
     */
    boundaries: AutomodMessageBoundary[];
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-event-v2
 */
export interface AutomodMessageHoldEventV2 extends EventBroadcasterInfo, EventUserInfo {
    /**
     * The ID of the message that was flagged by automod.
     */
    message_id: string;
    /**
     * The ID of the message that was flagged by automod.
     */
    message: AutomodMessageV2;
    /**
     * The timestamp of when automod saved the message.
     */
    held_at: string;
    /**
     * The category of the message.
     */
    reason: AutomodMessageHoldReason;
    /**
     * If the message was caught by automod, this will be populated.
     */
    automod: AutomodMessageHoldAutomod|null;
    /**
     * If the message was caught due to a blocked term, this will be populated.
     */
    blocked_term: AutomodMessageBlockedTerm|null;
}
