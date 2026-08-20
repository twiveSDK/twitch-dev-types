import type {
    AutomodMessageHoldCondition, AutomodMessageUpdateCondition, AutomodSettingsUpdateCondition,
    AutomodTermsUpdateCondition, ChannelAdBreakBeginCondition, ChannelBanCondition, ChannelBitsUseCondition,
    ChannelChatClearCondition, ChannelChatClearUserMessagesCondition, ChannelChatMessageCondition,
    ChannelChatMessageDeleteCondition, ChannelChatNotificationCondition, ChannelChatSettingsUpdateCondition,
    ChannelChatUserMessageHoldCondition, ChannelChatUserMessageUpdateCondition, ChannelCheerCondition,
    ChannelCustomPowerUpRedemptionAddCondition, ChannelFollowCondition, ChannelGoalsCondition,
    ChannelGuestStarGuestUpdateCondition, ChannelGuestStarSessionBeginCondition, ChannelGuestStarSessionEndCondition,
    ChannelGuestStarSettingsUpdateCondition, ChannelModerateCondition, ChannelModeratorAddCondition,
    ChannelModeratorRemoveCondition, ChannelPointsAutomaticRewardRedemptionAddCondition,
    ChannelPointsCustomRewardAddCondition, ChannelPointsCustomRewardRedemptionAddCondition,
    ChannelPointsCustomRewardRedemptionUpdateCondition, ChannelPointsCustomRewardRemoveCondition,
    ChannelPointsCustomRewardUpdateCondition, ChannelPollBeginCondition, ChannelPollEndCondition,
    ChannelPollProgressCondition, ChannelPredictionBeginCondition, ChannelPredictionEndCondition,
    ChannelPredictionLockCondition, ChannelPredictionProgressCondition, ChannelRaidCondition,
    ChannelSharedChatSessionBeginCondition, ChannelSharedChatSessionEndCondition, ChannelSharedChatSessionUpdateCondition,
    ChannelShieldModeBeginCondition, ChannelShieldModeEndCondition, ChannelShoutoutCreateCondition,
    ChannelShoutoutReceiveCondition, ChannelSubscribeCondition, ChannelSubscriptionEndCondition,
    ChannelSubscriptionGiftCondition, ChannelSubscriptionMessageCondition, ChannelSuspiciousUserMessageCondition,
    ChannelSuspiciousUserUpdateCondition, ChannelUnbanCondition, ChannelUnbanRequestCreateCondition,
    ChannelUnbanRequestResolveCondition, ChannelUpdateCondition, ChannelVIPAddCondition, ChannelVIPRemoveCondition,
    ChannelWarningAcknowledgeCondition, ChannelWarningSendCondition, ConduitShardDisabledCondition,
    DropEntitlementGrantCondition, ExtensionBitsTransactionCreateCondition, HypeTrainBeginCondition,
    HypeTrainEndCondition, HypeTrainProgressCondition, StreamOfflineCondition, StreamOnlineCondition,
    UserAuthorizationGrantCondition, UserAuthorizationRevokeCondition, UserUpdateCondition, WhisperReceivedCondition,
} from "./conditions";
import type {EventSubWebhookTransport} from "./webhook";
import type {EventSubWebsocketTransport} from "./websocket";
import type {EventSubConduitTransport} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/
 */
export enum EventSubSubscriptionType {
    /**
     * A user is notified if a message is caught by automod for review.
     *
     * @version 1 | 2
     */
    AutomodMessageHold = "automod.message.hold",
    /**
     * A message in the automod queue had its status changed.
     *
     * @version 1 | 2
     */
    AutomodMessageUpdate = "automod.message.update",
    /**
     * A notification is sent when a broadcaster’s automod settings are updated.
     *
     * @version 1
     */
    AutomodSettingsUpdate = "automod.settings.update",
    /**
     * A notification is sent when a broadcaster’s automod terms are updated.
     *
     * @version 1
     */
    AutomodTermsUpdate = "automod.terms.update",
    /**
     * A notification is sent whenever Bits are used on a channel.
     *
     * @version 1
     */
    ChannelBitsUse = "channel.bits.use",
    /**
     * A broadcaster updates their channel properties e.g., category, title, content classification labels, broadcast,
     * or language.
     *
     * @version 2
     */
    ChannelUpdate = "channel.update",
    /**
     * A specified channel receives a follow.
     *
     * @version 2
     */
    ChannelFollow = "channel.follow",
    /**
     * A midroll commercial break has started running.
     *
     * @version 1
     */
    ChannelAdBreakBegin = "channel.ad_break.begin",
    /**
     * A moderator or bot has cleared all messages from the chat room.
     *
     * @version 1
     */
    ChannelChatClear = "channel.chat.clear",
    /**
     * A moderator or bot has cleared all messages from a specific user.
     *
     * @version 1
     */
    ChannelChatClearUserMessages = "channel.chat.clear_user_messages",
    /**
     * Any user sends a message to a specific chat room.
     *
     * @version 1
     */
    ChannelChatMessage = "channel.chat.message",
    /**
     * A moderator has removed a specific message.
     *
     * @version 1
     */
    ChannelChatMessageDelete = "channel.chat.message_delete",
    /**
     * A notification for when an event that appears in chat has occurred.
     *
     * @version 1
     */
    ChannelChatNotification = "channel.chat.notification",
    /**
     * A notification for when a broadcaster’s chat settings are updated.
     *
     * @version 1
     */
    ChannelChatSettingsUpdate = "channel.chat_settings.update",
    /**
     * A user is notified if their message is caught by automod.
     *
     * @version 1
     */
    ChannelChatUserMessageHold = "channel.chat.user_message_hold",
    /**
     * A user is notified if their message’s automod status is updated.
     *
     * @version 1
     */
    ChannelChatUserMessageUpdate = "channel.chat.user_message_update",
    /**
     * A notification when a channel becomes active in an active shared chat session.
     *
     * @version 1
     */
    ChannelSharedChatBegin = "channel.shared_chat.begin",
    /**
     * A notification when the active shared chat session the channel is in changes.
     *
     * @version 1
     */
    ChannelSharedChatUpdate = "channel.shared_chat.update",
    /**
     * A notification when a channel leaves a shared chat session or the session ends.
     *
     * @version 1
     */
    ChannelSharedChatEnd = "channel.shared_chat.end",
    /**
     * A notification is sent when a specified channel receives a subscriber.
     *
     * @remarks This does not include resubscribes.
     * @version 1
     */
    ChannelSubscribe = "channel.subscribe",
    /**
     * A notification when a subscription to the specified channel ends.
     *
     * @version 1
     */
    ChannelSubscriptionEnd = "channel.subscription.end",
    /**
     * A notification when a viewer gives a gift subscription to one or more users in the specified channel.
     *
     * @version 1
     */
    ChannelSubscriptionGift = "channel.subscription.gift",
    /**
     * A notification when a user sends a resubscription chat message in a specific channel.
     *
     * @version 1
     */
    ChannelSubscriptionMessage = "channel.subscription.message",
    /**
     * A user cheers on the specified channel.
     *
     * @version 1
     */
    ChannelCheer = "channel.cheer",
    /**
     * A broadcaster raids another broadcaster’s channel.
     *
     * @version 1
     */
    ChannelRaid = "channel.raid",
    /**
     * A viewer is banned from the specified channel.
     *
     * @version 1
     */
    ChannelBan = "channel.ban",
    /**
     * A viewer is unbanned from the specified channel.
     *
     * @version 1
     */
    ChannelUnban = "channel.unban",
    /**
     * A user creates an unban request.
     *
     * @version 1
     */
    ChannelUnbanRequestCreate = "channel.unban_request.create",
    /**
     * An unban request has been resolved.
     *
     * @version 1
     */
    ChannelUnbanRequestResolve = "channel.unban_request.resolve",
    /**
     * A moderator performs a moderation action in a channel.
     *
     * @version 1 | 2
     */
    ChannelModerate = "channel.moderate",
    /**
     * Moderator privileges were added to a user on a specified channel.
     *
     * @version 1
     */
    ChannelModeratorAdd = "channel.moderator.add",
    /**
     * Moderator privileges were removed from a user on a specified channel.
     *
     * @version 1
     */
    ChannelModeratorRemove = "channel.moderator.remove",
    /**
     * The host began a new Guest Star session.
     *
     * @version beta
     */
    ChannelGuestStarSessionBegin = "channel.guest_star_session.begin",
    /**
     * A running Guest Star session has ended.
     *
     * @version beta
     */
    ChannelGuestStarSessionEnd = "channel.guest_star_session.end",
    /**
     * A guest or a slot is updated in an active Guest Star session.
     *
     * @version beta
     */
    ChannelGuestStarGuestUpdate = "channel.guest_star_guest.update",
    /**
     * The host preferences for Guest Star have been updated.
     */
    ChannelGuestStartSettingsUpdate = "channel.guest_star_settings.update",
    /**
     * A viewer has redeemed an automatic channel points reward on the specified channel.
     *
     * @version 1 | 2
     */
    ChannelPointsAutomaticRewardRedemptionAdd = "channel.channel_points_automatic_reward_redemption.add",
    /**
     * A custom channel points reward has been created for the specified channel.
     *
     * @version 1
     */
    ChannelPointsCustomRewardAdd = "channel.channel_points_custom_reward.add",
    /**
     * A custom channel points reward has been updated for the specified channel.
     *
     * @version 1
     */
    ChannelPointsCustomRewardUpdate = "channel.channel_points_custom_reward.update",
    /**
     * A custom channel points reward has been removed from the specified channel.
     *
     * @version 1
      */
    ChannelPointsCustomRewardRemove = "channel.channel_points_custom_reward.remove",
    /**
     * A viewer has redeemed a custom channel points reward on the specified channel.
     *
     * @version 1
     */
    ChannelPointsCustomRewardRedemptionAdd = "channel.channel_points_custom_reward_redemption.add",
    /**
     * A redemption of a channel points custom reward has been updated for the specified channel.
     *
     * @version 1
     */
    ChannelPointsCustomRewardRedemptionUpdate = "channel.channel_points_custom_reward_redemption.update",
    /**
     * A viewer has redeemed a custom Power-up on the specified channel.
     *
     * @version 1
     */
    ChannelCustomPowerUpsRedemptionAdd = "channel.custom_power_up_redemption.add",
    /**
     * A poll started on a specified channel.
     *
     * @version 1
     */
    ChannelPollBegin = "channel.poll.begin",
    /**
     * Users respond to a poll on a specified channel.
     *
     * @version 1
     */
    ChannelPollProgress = "channel.poll.progress",
    /**
     * A poll ended on a specified channel.
     *
     * @version 1
     */
    ChannelPollEnd = "channel.poll.end",
    /**
     * A Prediction started on a specified channel.
     *
     * @version 1
     */
    ChannelPredictionBegin = "channel.prediction.begin",
    /**
     * Users participated in a Prediction on a specified channel.
     *
     * @version 1
     */
    ChannelPredictionProgress = "channel.prediction.progress",
    /**
     * A Prediction was locked on a specified channel.
     *
     * @version 1
     */
    ChannelPredictionLook = "channel.prediction.lock",
    /**
     * A Prediction ended on a specified channel.
     *
     * @version 1
     */
    ChannelPredictionEnd = "channel.prediction.end",
    /**
     * A chat message has been sent by a suspicious user.
     *
     * @version 1
     */
    ChannelSuspiciousUserMessage = "channel.suspicious_user.message",
    /**
     * A suspicious user has been updated.
     *
     * @version 1
     */
    ChannelSuspiciousUserUpdate = "channel.suspicious_user.update",
    /**
     * A VIP is added to the channel.
     *
     * @version 1
     */
    ChannelVIPAdd = "channel.vip.add",
    /**
     * A VIP is removed from the channel.
     *
     * @version 1
     */
    ChannelVIPRemove = "channel.vip.remove",
    /**
     * A user acknowledges a warning.
     *
     * @remarks Broadcasters and moderators can see the warning’s details.
     * @version 1
     */
    ChannelWarningAcknowledge = "channel.warning.acknowledge",
    /**
     * A user is sent a warning. Broadcasters and moderators can see the warning’s details.
     *
     * @version 1
     */
    ChannelWarningSend = "channel.warning.send",
    /**
     * Sends an event notification when a user donates to the broadcaster’s charity campaign.
     *
     * @version 1
     */
    ChannelCharityCampaignDonate = "channel.charity_campaign.donate",
    /**
     * Sends an event notification when the broadcaster starts a charity campaign.
     *
     * @version 1
     */
    ChannelCharityCampaignStart = "channel.charity_campaign.start",
    /**
     * Sends an event notification when progress is made towards the campaign’s goal or when the broadcaster changes
     * the fundraising goal.
     *
     * @version 1
     */
    ChannelCharityCampaignProgress = "channel.charity_campaign.progress",
    /**
     * Sends an event notification when the broadcaster stops a charity campaign.
     *
     * @version 1
     */
    ChannelCharityCampaignStop = "channel.charity_campaign.stop",
    /**
     * Sends a notification when EventSub disables a shard due to the status of the underlying transport changing.
     *
     * @version 1
     */
    ConduitShardDisabled = "conduit.shard.disabled",
    /**
     * An entitlement for a Drop is granted to a user.
     *
     * @version 1
     */
    DropEntitlementGrant = "drop.entitlement.grant",
    /**
     * A Bits transaction occurred for a specified Twitch Extension.
     *
     * @version 1
     */
    ExtensionBitsTransactionCreate = "extension.bits_transaction.create",
    /**
     * Get notified when a broadcaster begins a goal.
     *
     * @version 1
     */
    ChannelGoalBegin = "channel.goal.begin",
    /**
     * Get notified when progress (either positive or negative) is made towards a broadcaster’s goal.
     *
     * @version 1
     */
    ChannelGoalProgress = "channel.goal.progress",
    /**
     * Get notified when a broadcaster ends a goal.
     *
     * @version 1
     */
    ChannelGoalEnd = "channel.goal.end",
    /**
     * A Hype Train begins on the specified channel.
     *
     * @version 2
     */
    HypeTrainBegin = "channel.hype_train.begin",
    /**
     * A Hype Train makes progress on the specified channel.
     *
     * @version 2
     */
    HypeTrainProgress = "channel.hype_train.progress",
    /**
     * A Hype Train ends on the specified channel.
     *
     * @version 2
     */
    HypeTrainEnd = "channel.hype_train.end",
    /**
     * Sends a notification when the broadcaster activates Shield Mode.
     *
     * @version 1
     */
    ChannelShieldModeBegin = "channel.shield_mode.begin",
    /**
     * Sends a notification when the broadcaster deactivates Shield Mode.
     *
     * @version 1
     */
    ChannelShieldModeEnd = "channel.shield_mode.end",
    /**
     * Sends a notification when the specified broadcaster sends a Shoutout.
     *
     * @version 1
     */
    ChannelShoutoutCreate = "channel.shoutout.create",
    /**
     * Sends a notification when the specified broadcaster receives a Shoutout.
     *
     * @version 1
     */
    ChannelShoutoutReceive = "channel.shoutout.receive",
    /**
     * The specified broadcaster starts a stream.
     *
     * @version 1
     */
    StreamOnline = "stream.online",
    /**
     * The specified broadcaster stops a stream.
     *
     * @version 1
     */
    StreamOffline = "stream.offline",
    /**
     * A user’s authorization has been granted to your client id.
     *
     * @version 1
     */
    UserAuthorizationGrant = "user.authorization.grant",
    /**
     * A user’s authorization has been revoked for your client id.
     *
     * @version 1
     */
    UserAuthorizationRevoke = "user.authorization.revoke",
    /**
     * A user has updated their account.
     *
     * @version 1
     */
    UserUpdate = "user.update",
    /**
     * A user receives a whisper.
     *
     * @version 1
     */
    WhisperMessage = "user.whisper.message",
}

export enum EventSubSubscriptionStatus {
    /**
     * The subscription is enabled.
     */
    Enabled = "enabled",
    /**
     * The subscription is pending verification of the specified callback URL.
     */
    WebhookCallbackVerificationPending = "webhook_callback_verification_pending",
    /**
     * The specified callback URL failed verification.
     */
    WebhookCallbackVerificationFailed = "webhook_callback_verification_failed",
    /**
     * The notification delivery failure rate was too high.
     */
    NotificationFailuresExceeded = "notification_failures_exceeded",
    /**
     * The authorization was revoked for one or more users specified in the **Condition** object.
     */
    AuthorizationRevoked = "authorization_revoked",
    /**
     * The moderator that authorized the subscription is no longer one of the broadcaster's moderators.
     */
    ModeratorRemoved = "moderator_removed",
    /**
     * One of the users specified in the **Condition** object was removed.
     */
    UserRemoved = "user_removed",
    /**
     * The user specified in the **Condition** object was banned from the broadcaster's chat.
     */
    ChatUserBanned = "chat_user_banned",
    /**
     * The subscription to subscription type and version is no longer supported.
     */
    VersionRemoved = "version_removed",
    /**
     * The subscription to the beta subscription type was removed due to maintenance.
     */
    BetaMaintenance = "beta_maintenance",
    /**
     * The client closed the connection.
     */
    WebsocketDisconnected = "websocket_disconnected",
    /**
     * The client failed to respond to a ping message.
     */
    WebsocketFailedPingPong = "websocket_failed_ping_pong",
    /**
     * The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).
     */
    WebsocketReceivedInboundTraffic = "websocket_received_inbound_traffic",
    /**
     * The client failed to subscribe to events within the required time.
     */
    WebsocketConnectionUnused = "websocket_connection_unused",
    /**
     * The Twitch WebSocket server experienced an unexpected error.
     */
    WebsocketInternalError = "websocket_internal_error",
    /**
     * The Twitch WebSocket server timed out writing the message to the client.
     */
    WebsocketNetworkTimeout = "websocket_network_timeout",
    /**
     * The Twitch WebSocket server experienced a network error writing the message to the client.
     */
    WebsocketNetworkError = "websocket_network_error",
    /**
     * The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
     */
    WebsocketFailedToReconnect = "websocket_failed_to_reconnect",
    /**
     * The conduit associated with the subscription was deleted.
     */
    ConduitDeleted = "conduit_deleted",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#conditions
 */
export type EventSubSubscriptionCondition = AutomodMessageHoldCondition
    | AutomodMessageUpdateCondition
    | AutomodSettingsUpdateCondition
    | AutomodTermsUpdateCondition
    | ChannelAdBreakBeginCondition
    | ChannelBanCondition
    | ChannelBitsUseCondition
    | ChannelChatClearCondition
    | ChannelChatClearUserMessagesCondition
    | ChannelChatMessageCondition
    | ChannelChatMessageDeleteCondition
    | ChannelChatNotificationCondition
    | ChannelChatSettingsUpdateCondition
    | ChannelChatUserMessageHoldCondition
    | ChannelChatUserMessageUpdateCondition
    | ChannelSubscribeCondition
    | ChannelSubscriptionEndCondition
    | ChannelSubscriptionGiftCondition
    | ChannelSubscriptionMessageCondition
    | ChannelCheerCondition
    | ChannelUpdateCondition
    | ChannelFollowCondition
    | ChannelUnbanCondition
    | ChannelUnbanRequestCreateCondition
    | ChannelUnbanRequestResolveCondition
    | ChannelRaidCondition
    | ChannelModerateCondition
    | ChannelModeratorAddCondition
    | ChannelModeratorRemoveCondition
    | ChannelGoalsCondition
    | ChannelGuestStarSessionBeginCondition
    | ChannelGuestStarSessionEndCondition
    | ChannelGuestStarGuestUpdateCondition
    | ChannelGuestStarSettingsUpdateCondition
    | ChannelPointsAutomaticRewardRedemptionAddCondition
    | ChannelPointsCustomRewardAddCondition
    | ChannelPointsCustomRewardUpdateCondition
    | ChannelPointsCustomRewardRemoveCondition
    | ChannelPointsCustomRewardRedemptionAddCondition
    | ChannelPointsCustomRewardRedemptionUpdateCondition
    | ChannelCustomPowerUpRedemptionAddCondition
    | ChannelPollBeginCondition
    | ChannelPollProgressCondition
    | ChannelPollEndCondition
    | ChannelPredictionBeginCondition
    | ChannelPredictionProgressCondition
    | ChannelPredictionLockCondition
    | ChannelPredictionEndCondition
    | ChannelSharedChatSessionBeginCondition
    | ChannelSharedChatSessionUpdateCondition
    | ChannelSharedChatSessionEndCondition
    | ChannelSuspiciousUserMessageCondition
    | ChannelSuspiciousUserUpdateCondition
    | ChannelShieldModeBeginCondition
    | ChannelShieldModeEndCondition
    | ChannelShoutoutCreateCondition
    | ChannelShoutoutReceiveCondition
    | ChannelVIPAddCondition
    | ChannelVIPRemoveCondition
    | ChannelWarningAcknowledgeCondition
    | ChannelWarningSendCondition
    | ConduitShardDisabledCondition
    | DropEntitlementGrantCondition
    | ExtensionBitsTransactionCreateCondition
    | HypeTrainBeginCondition
    | HypeTrainProgressCondition
    | HypeTrainEndCondition
    | StreamOnlineCondition
    | StreamOfflineCondition
    | UserAuthorizationGrantCondition
    | UserAuthorizationRevokeCondition
    | UserUpdateCondition
    | WhisperReceivedCondition;

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#subscription
 */
export interface EventSubSubscription {
    /**
     * Your client ID.
     */
    id: string;
    /**
     * The notification’s subscription type.
     */
    type: EventSubSubscriptionType;
    /**
     * The version of the subscription.
     */
    version: EventSubSubscriptionVersion;
    /**
     * The status of the subscription.
     */
    status: EventSubSubscriptionStatus;
    /**
     * How much the subscription counts against your limit.
     */
    cost: number;
    /**
     * Subscription-specific parameters.
     */
    condition: EventSubSubscriptionCondition;
    /**
     * The time the notification was created.
     */
    created_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types
 */
export interface EventSubSubscriptionRequestBody {
    /**
     * The subscription type name.
     */
    type: EventSubSubscriptionType;
    /**
     * The subscription type version.
     */
    version: EventSubSubscriptionVersion;
    /**
     * Subscription-specific parameters.
     */
    condition: EventSubSubscriptionCondition;
    /**
     * Transport-specific parameters.
     */
    transport: EventSubWebhookTransport|EventSubWebsocketTransport|EventSubConduitTransport;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types
 */
export type EventSubSubscriptionVersion = "1"|"2"|"beta";
