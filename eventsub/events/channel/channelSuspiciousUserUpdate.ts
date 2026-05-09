import type { EventBroadcasterInfo, EventModeratorInfo, EventUserInfo } from "../common";

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
export interface ChannelSuspiciousUserUpdateEvent extends EventBroadcasterInfo, EventModeratorInfo, EventUserInfo {
    /**
     * The status set for the suspicious user.
     */
    low_trust_status: ChannelSuspiciousUserLowTrustStatus;
}
