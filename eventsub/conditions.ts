/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conditions
 */
export interface BaseBroadcasterCondition {
    /**
     * The ID of the broadcaster that you want to get notifications for.
     */
    broadcaster_user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conditions
 */
export interface BaseModeratorCondition extends BaseBroadcasterCondition {
    /**
     * The ID of the user that has permission to moderate the broadcaster’s channel and has granted your
     * app permission to subscribe to this subscription type.
     */
    moderator_user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conditions
 */
export interface BaseUserCondition extends BaseBroadcasterCondition {
    /**
     * The user ID of the user.
     */
    user_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-hold-condition
 */
export interface AutomodMessageHoldCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-message-update-condition
 */
export interface AutomodMessageUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-settings-update-condition
 */
export interface AutomodSettingsUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#automod-terms-update-condition
 */
export interface AutomodTermsUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-ad-break-begin-condition
 */
export interface ChannelAdBreakBeginCondition {
    /**
     * The ID of the broadcaster that you want to get Channel Ad Break begin notifications for.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-ban-condition
 */
export interface ChannelBanCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-bits-use-condition
 */
export interface ChannelBitsUseCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-clear-condition
 */
export interface ChannelChatClearCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-clear-user-messages-condition
 */
export interface ChannelChatClearUserMessagesCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-condition
 */
export interface ChannelChatMessageCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-message-delete-condition
 */
export interface ChannelChatMessageDeleteCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-condition
 */
export interface ChannelChatNotificationCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-settings-update-condition
 */
export interface ChannelChatSettingsUpdateCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-hold-condition
 */
export interface ChannelChatUserMessageHoldCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-user-message-update-condition
 */
export interface ChannelChatUserMessageUpdateCondition extends BaseBroadcasterCondition, BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscribe-condition
 */
export interface ChannelSubscribeCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-end-condition
 */
export interface ChannelSubscriptionEndCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-gift-condition
 */
export interface ChannelSubscriptionGiftCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-subscription-message-condition
 */
export interface ChannelSubscriptionMessageCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-cheer-condition
 */
export interface ChannelCheerCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-update-condition
 */
export interface ChannelUpdateCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-follow-condition
 */
export interface ChannelFollowCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-condition
 */
export interface ChannelUnbanCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-request-create-condition
 */
export interface ChannelUnbanRequestCreateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-unban-request-resolve-condition
 */
export interface ChannelUnbanRequestResolveCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-raid-condition
 */
export interface ChannelRaidCondition {
    /**
     * The broadcaster user ID that created the channel raid you want to get notifications for.
     *
     * @remarks Use this parameter if you want to know when a specific broadcaster raids another broadcaster.
     * The channel raid condition must include either `from_broadcaster_user_id` or `to_broadcaster_user_id`.
     */
    from_broadcaster_user_id?: string;
    /**
     * The broadcaster user ID that received the channel raid you want to get notifications for.
     *
     * @remarks Use this parameter if you want to know when a specific broadcaster is raided by another broadcaster.
     * The channel raid condition must include either`from_broadcaster_user_id` or `to_broadcaster_user_id`.
     */
    to_broadcaster_user_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-condition
 */
export interface ChannelModerateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderator-add-condition
 */
export interface ChannelModeratorAddCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderator-remove-condition
 */
export interface ChannelModeratorRemoveCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-session-begin-condition
 */
export interface ChannelGuestStarSessionBeginCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-session-end-condition
 */
export interface ChannelGuestStarSessionEndCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-guest-update-condition
 */
export interface ChannelGuestStarGuestUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-guest-star-settings-update-condition
 */
export interface ChannelGuestStarSettingsUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-automatic-reward-redemption-add-condition
 */
export interface ChannelPointsAutomaticRewardRedemptionAddCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-add-condition
 */
export interface ChannelPointsCustomRewardAddCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-update-condition
 */
export interface ChannelPointsCustomRewardUpdateCondition extends BaseBroadcasterCondition {
    /**
     * Specify a reward id to only receive notifications for a specific reward.
     */
    reward_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-remove-condition
 */
export interface ChannelPointsCustomRewardRemoveCondition extends BaseBroadcasterCondition {
    /**
     * Specify a reward id to only receive notifications for a specific reward.
     */
    reward_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-redemption-add-condition
 */
export interface ChannelPointsCustomRewardRedemptionAddCondition extends BaseBroadcasterCondition {
    /**
     * Specify a reward id to only receive notifications for a specific reward.
     */
    reward_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-points-custom-reward-redemption-update-condition
 */
export interface ChannelPointsCustomRewardRedemptionUpdateCondition extends BaseBroadcasterCondition {
    /**
     * Specify a reward id to only receive notifications for a specific reward.
     */
    reward_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-begin-condition
 */
export interface ChannelPollBeginCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-progress-condition
 */
export interface ChannelPollProgressCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-poll-end-condition
 */
export interface ChannelPollEndCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-begin-condition
 */
export interface ChannelPredictionBeginCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-progress-condition
 */
export interface ChannelPredictionProgressCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-lock-condition
 */
export interface ChannelPredictionLockCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-prediction-end-condition
 */
export interface ChannelPredictionEndCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-begin-condition
 */
export interface ChannelSharedChatSessionBeginCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-update-condition
 */
export interface ChannelSharedChatSessionUpdateCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-end-condition
 */
export interface ChannelSharedChatSessionEndCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-message-condition
 */
export interface ChannelSuspiciousUserMessageCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-suspicious-user-update-condition
 */
export interface ChannelSuspiciousUserUpdateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield_modebegin
 */
export interface ChannelShieldModeBeginCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield_modeend
 */
export interface ChannelShieldModeEndCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutcreate
 */
export interface ChannelShoutoutCreateCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutreceive
 */
export interface ChannelShoutoutReceiveCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-vip-add-condition
 */
export interface ChannelVIPAddCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-vip-remove-condition
 */
export interface ChannelVIPRemoveCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-acknowledge-condition
 */
export interface ChannelWarningAcknowledgeCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-warning-send-condition
 */
export interface ChannelWarningSendCondition extends BaseBroadcasterCondition, BaseModeratorCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conduit-shard-disabled-condition
 */
export interface ConduitShardDisabledCondition {
    /**
     * Your application’s client id.
     *
     * @remarks The provided client_id must match the client ID in the application access token.
     */
    client_id: string;
    /**
     * The conduit ID to receive events for.
     *
     * @remarks If omitted, events for all of this client’s conduits are sent.
     */
    conduit_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#drop-entitlement-grant-condition
 */
export interface DropEntitlementGrantCondition {
    /**
     * The organization ID of the organization that owns the game on the developer portal.
     */
    organization_id: string;
    /**
     * The category (or game) ID of the game for which entitlement notifications will be received.
     */
    category_id?: string;
    /**
     * The campaign ID for a specific campaign for which entitlement notifications will be received.
     */
    campaign_id?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#extension-bits-transaction-create-condition
 */
export interface ExtensionBitsTransactionCreateCondition {
    /**
     * The client ID of the extension.
     */
    extension_client_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#goals-condition
 */
export interface ChannelGoalsCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-begin-condition
 */
export interface HypeTrainBeginCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-progress-condition
 */
export interface HypeTrainProgressCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#hype-train-end-condition
 */
export interface HypeTrainEndCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#stream-online-condition
 */
export interface StreamOnlineCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#stream-offline-condition
 */
export interface StreamOfflineCondition extends BaseBroadcasterCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-authorization-grant-condition
 */
export interface UserAuthorizationGrantCondition {
    /**
     * Your application’s client id.
     *
     * @remarks The provided client_id must match the client id in the application access token.
     */
    client_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-authorization-revoke-condition
 */
export interface UserAuthorizationRevokeCondition {
    /**
     * Your application’s client id.
     *
     * @remarks The provided client_id must match the client id in the application access token.
     */
    client_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-update-condition
 */
export interface UserUpdateCondition extends BaseUserCondition {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#whisper-received-condition
 */
export interface WhisperReceivedCondition extends BaseUserCondition {}
