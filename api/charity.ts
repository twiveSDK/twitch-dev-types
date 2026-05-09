import type { APIPaginatedResponse, APIResponse, RESTPaginationRequestParams } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign
 */
export interface APICharityAmount {
    /**
     * The monetary amount.
     *
     * @remarks The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents,
     * so if the amount is $5.50 USD, value is set to 550.
     */
    value: number;
    /**
     * The number of decimal places used by the currency.
     * For example, USD uses two decimal places.
     *
     * @remarks Use this number to translate `value` from minor units to major
     * units by using the formula: `value / 10^decimal_places`
     */
    decimal_places: number;
    /**
     * The ISO-4217 three-letter currency code that identifies the type of currency in `value`.
     */
    currency: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign
 */
export interface APICharityCampaign {
    /**
     * An ID that identifies the charity campaign.
     */
    id: string;
    /**
     * An ID that identifies the broadcaster that’s running the campaign.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;
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
     * The current amount of donations that the campaign has received.
     */
    current_amount: APICharityAmount;
    /**
     * The campaign’s fundraising goal. 
     * 
     * @remarks This field is null if the broadcaster has not defined a fundraising goal.
     */
    target_amount: APICharityAmount|null;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign
 */
export interface RESTGetCharityCampaignRequestParams {
    /**
     * The ID of the broadcaster that’s running the charity campaign.
     * 
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign
 */
export interface RESTGetCharityCampaignResponse extends APIResponse<APICharityCampaign> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations
 */
export interface APICharityCampaignDonation {
    /**
     * An ID that identifies the donation. The ID is unique across campaigns.
     */
    id: string;
    /**
     * An ID that identifies the charity campaign that the donation applies to.
     */
    campaign_id: string;
    /**
     * An ID that identifies a user that donated money to the campaign.
     */
    user_id: string;
    /**
     * The user’s login name.
     */
    user_login: string;
    /**
     * The user’s display name.
     */
    user_name: string;
    /**
     * The amount of money that the user donated.
     */
    amount: APICharityAmount;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations
 */
export interface RESTGetCharityCampaignDonationsRequestParams extends RESTPaginationRequestParams {
    /**
     * The ID of the broadcaster that’s running the charity campaign.
     *
     * @remarks ID must match the **user_id** in the authentication token.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations
 */
export interface RESTGetCharityCampaignDonationsResponse extends APIPaginatedResponse<APICharityCampaignDonation> {}
