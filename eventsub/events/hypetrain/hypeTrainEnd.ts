import type {EventBroadcasterInfo} from "../common";
import type {HypeTrainTopContribution} from "./common";

/**
 * @deprecated
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-end-event
 */
export interface HypeTrainEndEvent extends EventBroadcasterInfo{
    /**
     * The Hype Train ID.
     */
    id: string;
    /**
     * The final level of the Hype Train.
     */
    level: number;
    /**
     * Total points contributed to the Hype Train.
     */
    total: number;
    /**
     * The contributors with the most points contributed.
     */
    top_contributions: HypeTrainTopContribution[];

    /**
     * The time when the Hype Train started.
     */
    started_at: string;
    /**
     * The time when the Hype Train ended.
     */
    ended_at: string;
    /**
     * The time when the Hype Train cooldown ends so that the next Hype Train can start.
     */
    cooldown_ends_at: string;
    /**
     * Indicates if the Hype Train is a Golden Kappa Train.
     */
    is_golden_kappa_train: boolean;
}
