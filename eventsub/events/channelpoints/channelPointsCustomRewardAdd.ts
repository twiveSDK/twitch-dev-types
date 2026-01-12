import type {BaseBroadcasterInfo} from "../common";
import type {
    ChannelPointsCustomRewardGlobalCooldown, ChannelPointsCustomRewardImage, ChannelPointsCustomRewardMaxPerStream,
    ChannelPointsCustomRewardMaxPerUserPerStream
} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-add-event
 */
export interface ChannelPointsCustomRewardAddEvent extends BaseBroadcasterInfo {
    /**
     * The reward identifier.
     */
    id: string;
    /**
     * Is the reward currently enabled.
     *
     * @remarks If false, the reward won’t show up to viewers.
     */
    is_enabled: boolean;
    /**
     * Is the reward currently paused.
     *
     * @reamrks If true, viewers can’t redeem.
     */
    is_paused: boolean;
    /**
     * Is the reward currently in stock.
     *
     * @remarks If false, viewers can’t redeem.
     */
    is_in_stock: boolean;
    /**
     * The reward title.
     */
    title: string;
    /**
     * The reward cost.
     */
    cost: number;
    /**
     * The reward description.
     */
    prompt: string;
    /**
     * Does the viewer need to enter information when redeeming the reward.
     */
    is_user_input_required: boolean;
    /**
     * Should redemptions be set to `fulfilled status immediately when redeemed and skip the request queue instead of the normal `unfulfilled status.
     */
    should_redemptions_skip_request_queue: boolean;
    /**
     * Whether a maximum per stream is enabled and what the maximum is.
     */
    max_per_stream: ChannelPointsCustomRewardMaxPerStream;
    /**
     * Whether a maximum per user per stream is enabled and what the maximum is.
     */
    max_per_user_per_stream: ChannelPointsCustomRewardMaxPerUserPerStream;
    /**
     * Custom background color for the reward. Format: Hex with # prefix. Example: `#FA1ED2`.
     */
    background_color: string;
    /**
     * Set of custom images of 1x, 2x and 4x sizes for the reward.
     *
     * @remarks Can be `null` if no images have been uploaded.
     */
    image: ChannelPointsCustomRewardImage|null;
    /**
     * Set of default images of 1x, 2x and 4x sizes for the reward.
     */
    default_image: ChannelPointsCustomRewardImage;
    /**
     * Whether a cooldown is enabled and what the cooldown is in seconds.
     */
    global_cooldown: ChannelPointsCustomRewardGlobalCooldown;
    /**
     * Timestamp of the cooldown expiration.
     *
     * @remarks `null` if the reward isn’t on cooldown.
     */
    cooldown_expires_at: string|null;
    /**
     * The number of redemptions redeemed during the current live stream.
     *
     * @remarks Counts against the `max_per_stream` limit. `null` if the broadcasters stream isn’t live or `max_per_stream` isn’t enabled.
     */
    redemptions_redeemed_current_stream: number|null;
}
