import type {EventBroadcasterInfo} from "../common";
import type {HypeTrainTopContribution} from "./common";
import type {HypeTrainType} from "./hypeTrainBegin";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-end-v2-event
 */
export interface HypeTrainEndEvent extends EventBroadcasterInfo {
    /**
     * The Hype Train ID.
     */
    id: string;
    /**
     * The requested broadcaster ID.
     */
    broadcaster_user_id: string;
    /**
     * The requested broadcaster login.
     */
    broadcaster_user_login: string;
    /**
     * The requested broadcaster display name.
     */
    broadcaster_user_name: string;
    /**
     * Total points contributed to the Hype Train.
     */
    total: number;
    /**
     * The contributors with the most points contributed.
     */
    top_contributions: HypeTrainTopContribution[];
    /**
     * The current level of the Hype Train.
     */
    level: number;
    /**
     * Contains the list of broadcasters in the shared Hype Train.
     */
    shared_train_participants?: EventBroadcasterInfo[];
    /**
     * The time when the Hype Train started.
     */
    started_at: string;
    /**
     * The time when the Hype Train cooldown ends so that the next Hype Train can start.
     */
    cooldown_ends_at: string;
    /**
     * The time when the Hype Train ended.
     */
    ended_at: string;
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
