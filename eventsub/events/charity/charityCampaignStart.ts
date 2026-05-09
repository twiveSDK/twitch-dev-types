import type { CharityCampaignProgressEvent } from "./charityCampaignProgress";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#charity-campaign-start-event
 */
export interface CharityCampaignStartEvent extends CharityCampaignProgressEvent {
    /**
     * The UTC timestamp (in RFC3339 format) of when the broadcaster started the campaign.
     */
    started_at: string;
}
