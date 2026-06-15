import type {EventBroadcasterInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-update-event
 */
export interface ChannelUpdateEvent extends EventBroadcasterInfo {
    /**
     * The channel’s stream title.
     */
    title: string;
    /**
     * The channel’s broadcast language.
     */
    language: string;
    /**
     * The channel’s category ID.
     */
    category_id: string;
    /**
     * The category name.
     */
    category_name: string;
    /**
     * Array of content classification label IDs currently applied on the Channel.
     *
     * @remarks To retrieve a list of all possible IDs, use the
     * {@link https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
     * Get Content Classification Labels} API endpoint.
     */
    content_classification_labels: string[];
}
