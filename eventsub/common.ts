import type {
    AutomodMessageHoldEvent, AutomodMessageHoldEventV2, AutomodMessageUpdateEvent, AutomodMessageUpdateEventV2,
    AutomodSettingsUpdateEvent, AutomodTermsUpdateEvent, ChannelAdBreakBeginEvent, ChannelBanEvent, ChannelBitsUseEvent,
    ChannelChatClearEvent, ChannelChatClearUserMessagesEvent, ChannelChatMessageDeleteEvent, ChannelChatMessageEvent,
    ChannelChatNotificationEvent, ChannelChatSettingsUpdateEvent, ChannelChatUserMessageHoldEvent,
    ChannelChatUserMessageUpdateEvent, ChannelCheerEvent, ChannelCustomPowerUpRedemptionAddEvent, ChannelFollowEvent,
    ChannelGoalBeginEvent, ChannelGoalEndEvent, ChannelGoalProgressEvent, ChannelGuestStarGuestUpdateEvent,
    ChannelGuestStarSessionBeginEvent, ChannelGuestStarSessionEndEvent, ChannelGuestStarSettingsUpdateEvent,
    ChannelModerateEvent, ChannelModerateEventV2, ChannelModeratorAddEvent, ChannelModeratorRemoveEvent,
    ChannelPointsAutomaticRewardRedemptionAddEvent, ChannelPointsAutomaticRewardRedemptionAddEventV2,
    ChannelPointsCustomRewardAddEvent, ChannelPointsCustomRewardRedemptionAddEvent,
    ChannelPointsCustomRewardRedemptionUpdateEvent, ChannelPointsCustomRewardRemoveEvent,
    ChannelPointsCustomRewardUpdateEvent, ChannelPollBeginEvent, ChannelPollEndEvent, ChannelPollProgressEvent,
    ChannelPredictionBeginEvent, ChannelPredictionEndEvent, ChannelPredictionLockEvent, ChannelPredictionProgressEvent,
    ChannelRaidEvent, ChannelSharedChatSessionBeginEvent, ChannelSharedChatSessionEndEvent,
    ChannelSharedChatSessionUpdateEvent, ChannelShieldModeBeginEvent, ChannelShieldModeEndEvent,
    ChannelShoutoutCreateEvent, ChannelShoutoutReceiveEvent, ChannelSubscribeEvent, ChannelSubscriptionEndEvent,
    ChannelSubscriptionGiftEvent, ChannelSubscriptionMessageEvent, ChannelSuspiciousUserMessageEvent,
    ChannelSuspiciousUserUpdateEvent, ChannelUnbanEvent, ChannelUnbanRequestCreateEvent, ChannelUnbanRequestResolveEvent,
    ChannelUpdateEvent, ChannelVIPAddEvent, ChannelVIPRemoveEvent, ChannelWarningAcknowledgeEvent,
    ChannelWarningSendEvent, CharityCampaignProgressEvent, CharityCampaignStartEvent, CharityCampaignStopEvent,
    CharityDonationEvent, ConduitShardDisabledEvent, DropEntitlementGrantEvent, ExtensionBitsTransactionCreateEvent,
    HypeTrainBeginEvent, HypeTrainEndEvent, HypeTrainProgressEvent, StreamOfflineEvent, StreamOnlineEvent,
    UserAuthorizationGrantEvent, UserAuthorizationRevokeEvent, UserUpdateEvent, WhisperReceivedEvent,
} from "./events";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#events
 */
export type EventSubEventPayload = AutomodMessageHoldEvent
    | AutomodMessageHoldEventV2
    | AutomodMessageUpdateEvent
    | AutomodMessageUpdateEventV2
    | AutomodSettingsUpdateEvent
    | AutomodTermsUpdateEvent
    | ChannelAdBreakBeginEvent
    | ChannelBanEvent
    | ChannelBitsUseEvent
    | ChannelChatClearEvent
    | ChannelChatClearUserMessagesEvent
    | ChannelChatMessageEvent
    | ChannelChatMessageDeleteEvent
    | ChannelChatNotificationEvent
    | ChannelChatSettingsUpdateEvent
    | ChannelChatUserMessageHoldEvent
    | ChannelChatUserMessageUpdateEvent
    | ChannelCheerEvent
    | ChannelFollowEvent
    | ChannelGoalBeginEvent
    | ChannelGoalEndEvent
    | ChannelGoalProgressEvent
    | ChannelGuestStarGuestUpdateEvent
    | ChannelGuestStarSessionBeginEvent
    | ChannelGuestStarSessionEndEvent
    | ChannelGuestStarSettingsUpdateEvent
    | ChannelModerateEvent
    | ChannelModerateEventV2
    | ChannelModeratorAddEvent
    | ChannelModeratorRemoveEvent
    | ChannelPointsAutomaticRewardRedemptionAddEvent
    | ChannelPointsAutomaticRewardRedemptionAddEventV2
    | ChannelPointsCustomRewardAddEvent
    | ChannelPointsCustomRewardRedemptionAddEvent
    | ChannelPointsCustomRewardRedemptionUpdateEvent
    | ChannelPointsCustomRewardRemoveEvent
    | ChannelPointsCustomRewardUpdateEvent
    | ChannelCustomPowerUpRedemptionAddEvent
    | ChannelPollBeginEvent
    | ChannelPollEndEvent
    | ChannelPollProgressEvent
    | ChannelPredictionBeginEvent
    | ChannelPredictionEndEvent
    | ChannelPredictionLockEvent
    | ChannelPredictionProgressEvent
    | ChannelRaidEvent
    | ChannelSharedChatSessionBeginEvent
    | ChannelSharedChatSessionEndEvent
    | ChannelSharedChatSessionUpdateEvent
    | ChannelShieldModeBeginEvent
    | ChannelShieldModeEndEvent
    | ChannelShoutoutCreateEvent
    | ChannelShoutoutReceiveEvent
    | ChannelSubscribeEvent
    | ChannelSubscriptionEndEvent
    | ChannelSubscriptionGiftEvent
    | ChannelSubscriptionMessageEvent
    | ChannelSuspiciousUserMessageEvent
    | ChannelSuspiciousUserUpdateEvent
    | ChannelUnbanEvent
    | ChannelUnbanRequestCreateEvent
    | ChannelUnbanRequestResolveEvent
    | ChannelUpdateEvent
    | ChannelVIPAddEvent
    | ChannelVIPRemoveEvent
    | ChannelWarningAcknowledgeEvent
    | ChannelWarningSendEvent
    | CharityCampaignProgressEvent
    | CharityCampaignStartEvent
    | CharityCampaignStopEvent
    | CharityDonationEvent
    | ConduitShardDisabledEvent
    | DropEntitlementGrantEvent
    | ExtensionBitsTransactionCreateEvent
    | HypeTrainBeginEvent
    | HypeTrainEndEvent
    | HypeTrainProgressEvent
    | StreamOfflineEvent
    | StreamOnlineEvent
    | UserAuthorizationGrantEvent
    | UserAuthorizationRevokeEvent
    | UserUpdateEvent
    | WhisperReceivedEvent;

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#transport
 */
export enum EventSubTransportMethod {
    Webhook = "webhook",
    Websocket = "websocket",
    Conduit = "conduit",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#transport
 */
export interface EventSubConduitTransport {
    /**
     * The transport method.
     */
    method: EventSubTransportMethod.Conduit;
    /**
     * The ID of the conduit.
     */
    conduit_id: string;
}
