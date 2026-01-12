import type {BaseBroadcasterInfo, BaseModeratorInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-settings-update-event
 */
export interface AutomodSettingsUpdateEvent extends BaseBroadcasterInfo, BaseModeratorInfo {
    /**
     * The Automod level for hostility involving name-calling or insults.
     */
    bullying: number;
    /**
     * The default AutoMod level for the broadcaster.
     *
     * @remarks This field is null if the broadcaster has set one or more of the individual settings.
     */
    overall_level: number|null;
    /**
     * The Automod level for discrimination against disability.
     */
    disability: number;
    /**
     * The Automod level for racial discrimination.
     */
    race_ethnicity_or_religion: number;
    /**
     * The Automod level for discrimination against women.
     */
    misogyny: number;
    /**
     * The AutoMod level for discrimination based on sexuality, sex, or gender.
     */
    sexuality_sex_or_gender: number;
    /**
     * The Automod level for hostility involving aggression.
     */
    aggression: number;
    /**
     * The Automod level for sexual content.
     */
    sex_based_terms: number;
    /**
     * The Automod level for profanity.
     */
    swearing: number;
}
