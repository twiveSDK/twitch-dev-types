import type {CharityCampaignProgressEvent} from "./charityCampaignProgress";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#charity-campaign-stop-event
 */
export interface CharityCampaignStopEvent extends CharityCampaignProgressEvent {
    /**
     * The UTC timestamp (in RFC3339 format) of when the broadcaster stopped the campaign.
     */
    stopped_at: string;
}
