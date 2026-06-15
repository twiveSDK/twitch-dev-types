import type {EventBroadcasterInfo} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#stream-offline-event
 */
export interface StreamOfflineEvent extends EventBroadcasterInfo {}
