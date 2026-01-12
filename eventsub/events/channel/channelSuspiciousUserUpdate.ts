import type {BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-update-event
 */
export enum ChannelSuspiciousUserLowTrustStatus {
    None = "none",
    ActiveMonitoring = "active_monitoring",
    Restricted = "restricted",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-update-event
 */
export interface ChannelSuspiciousUserUpdateEvent extends BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo {
    /**
     * The status set for the suspicious user.
     */
    low_trust_status: ChannelSuspiciousUserLowTrustStatus;
}
