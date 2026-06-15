import type {EventBroadcasterInfo} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#stream-online-event
 */
export enum StreamOnlineType {
    Live = "live",
    Playlist = "playlist",
    WatchParty = "watch_party",
    Premiere = "premiere",
    Rerun = "rerun",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#stream-online-event
 */
export interface StreamOnlineEvent extends EventBroadcasterInfo {
    /**
     * The id of the stream.
     */
    id: string;
    /**
     * The stream type.
     */
    type: StreamOnlineType;
    /**
     * The timestamp at which the stream went online at.
     */
    started_at: string;
}
