import type {EventBroadcasterInfo, EventModeratorInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-terms-update-event
 */
export enum AutomodTermsUpdateAction {
    AddPermitted = "add_permitted",
    RemovePermitted = "remove_permitted",
    AddBlocked = "add_blocked",
    RemoveBlocked = "remove_blocked"
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-terms-update-event
 */
export interface AutomodTermsUpdateEvent extends EventBroadcasterInfo, EventModeratorInfo {
    /**
     * The status change applied to the terms.
     */
    action: AutomodTermsUpdateAction;
    /**
     * Indicates whether this term was added due to an Automod message approve/deny action.
     */
    from_automod: boolean;
    /**
     * The list of terms that had a status change.
     */
    terms: string[];
}
