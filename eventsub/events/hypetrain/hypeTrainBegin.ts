import type {EventBroadcasterInfo} from "../common";
import type {HypeTrainTopContribution} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-begin-event
 */
export enum HypeTrainType {
    Treasure = "treasure",
    GoldenKappa = "golden_kappa",
    Regular = "regular",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-begin-event
 */
export interface HypeTrainBeginEvent extends EventBroadcasterInfo {
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
     * The current level of the Hype Train.
     */
    level: number;
    /**
     * The all-time high level this type of Hype Train has reached for this broadcaster.
     */
    all_time_high_level: number;
    /**
     * The all-time high total this type of Hype Train has reached for this broadcaster.
     */
    all_time_high_total: number;
    /**
     * Contains the list of broadcasters in the shared Hype Train.
     */
    shared_train_participants: EventBroadcasterInfo[]|null;
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
     * The type of the Hype Train.
     */
    type: HypeTrainType;
    /**
     * Indicates if the Hype Train is shared.
     *
     * @remarks When true, `shared_train_participants` will contain the list of broadcasters the train is shared with.
     */
    is_shared_train: boolean;
}
