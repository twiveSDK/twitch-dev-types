import type {BaseBroadcasterInfo, BaseModeratorInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#shield-mode
 */
export interface ChannelShieldModeBeginEvent extends BaseBroadcasterInfo, BaseModeratorInfo {
    /**
     * The UTC timestamp (in RFC3339 format) of when the moderator activated Shield Mode.
     */
    started_at: string;
}
