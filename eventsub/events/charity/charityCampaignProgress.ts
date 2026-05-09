import type { CharityAmountData } from "./common";
import type { EventBroadcasterInfo } from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#charity-campaign-progress-event
 */
export interface CharityCampaignProgressEvent extends EventBroadcasterInfo {
    /**
     * An ID that identifies the charity campaign.
     */
    id: string;
    /**
     * The charity’s name.
     */
    charity_name: string;
    /**
     * A description of the charity.
     */
    charity_description: string;
    /**
     * A URL to an image of the charity’s logo.
     *
     * @remarks The image’s type is PNG and its size is 100px X 100px.
     */
    charity_logo: string;
    /**
     * A URL to the charity’s website.
     */
    charity_website: string;
    /**
     * An object that contains the current amount of donations that the campaign has received.
     */
    current_amount: CharityAmountData;
    /**
     * An object that contains the campaign’s target fundraising goal.
     */
    target_amount: CharityAmountData;
}
