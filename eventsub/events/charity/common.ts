/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#charity-donation-event
 */
export interface CharityAmountData {
    /**
     * The monetary amount.
     *
     * @remarks The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents,
     * so if the amount is $5.50 USD, `value` is set to 550.
     */
    value: number;
    /**
     * The number of decimal places used by the currency.
     *
     * @remarks For example, USD uses two decimal places. Use this number to translate `value` from minor units to
     * major units by using the formula:
     *
     * `value / 10^decimal_places`
     */
    decimal_places: number;
    /**
     * The ISO-4217 three-letter currency code that identifies the type of currency in `value`.
     */
    currency: string;
}
