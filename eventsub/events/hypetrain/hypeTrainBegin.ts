import type {BaseBroadcasterInfo} from "../common";
import type {HypeTrainLastContribution, HypeTrainTopContribution} from "./common";

/**
 * @deprecated
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-begin-event
 */
export interface HypeTrainBeginEvent extends BaseBroadcasterInfo {
    /**
     * The Hype Train ID.
     */
    id: string;
    /**
     * Total points contributed to the Hype Train.
     */
    total: number;
    /**
     * The number of points contributed to the Hype Train at the current level.
     */
    progress: number;
    /**
     * The number of points required to reach the next level.
     */
    goal: number;
    /**
     * The contributors with the most points contributed.
     */
    top_contributions: HypeTrainTopContribution[];
    /**
     * The most recent contribution.
     */
    last_contribution: HypeTrainLastContribution;
    /**
     * The starting level of the Hype Train.
     */
    level: number;
    /**
     * The time when the Hype Train started.
     */
    started_at: string;
    /**
     * The time when the Hype Train expires.
     *
     * @remarks The expiration is extended when the Hype Train reaches a new level.
     */
    expires_at: string;
    /**
     * Indicates if the Hype Train is a Golden Kappa Train.
     */
    is_golden_kappa_train: boolean;
}
