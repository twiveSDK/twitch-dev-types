import type {EventBroadcasterInfo, EventUserInfo} from "../common";
import type {CharityAmountData} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#charity-donation-event
 */
export interface CharityDonationEvent extends EventBroadcasterInfo, EventUserInfo {
    /**
     * An ID that identifies the donation.
     *
     * @remarks The ID is unique across campaigns.
     */
    id: string;
    /**
     * An ID that identifies the charity campaign.
     */
    campaign_id: string;
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
     * An object that contains the amount of money that the user donated.
     */
    amount: CharityAmountData;
}
