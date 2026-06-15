import type {ChannelChatBadge, ChannelChatMessage} from "./common";
import type {ChannelSubscriptionTier} from "../../sub";
import type {EventBroadcasterInfo, EventUserInfo} from "../../../common";
import type {CharityAmountData} from "../../../charity";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export enum ChannelChatNotificationNoticeType {
    Sub = "sub",
    Resub = "resub",
    SubGift = "sub_gift",
    CommunitySubGift = "community_sub_gift",
    GiftPaidUpgrade = "gift_paid_upgrade",
    PrimePaidUpgrade = "prime_paid_upgrade",
    Raid = "raid",
    Unraid = "unraid",
    PayItForward = "pay_it_forward",
    Announcement = "announcement",
    BitsBadgeTier = "bits_badge_tier",
    CharityDonation = "charity_donation",
    WatchStreak = "watch_streak",
    SharedChatSub = "shared_chat_sub",
    SharedChatResub = "shared_chat_resub",
    SharedChatSubGift = "shared_chat_sub_gift",
    SharedChatCommunitySubGift = "shared_chat_community_sub_gift",
    SharedChatGiftPaidUpgrade = "shared_chat_gift_paid_upgrade",
    SharedChatPrimePaidUpgrade = "shared_chat_prime_paid_upgrade",
    SharedChatRaid = "shared_chat_raid",
    SharedChatPayItForward = "shared_chat_pay_it_forward",
    SharedChatAnnouncement = "shared_chat_announcement",
    SharedChatModiversary = "shared_chat_modiversary",
    Unknown = "unknown",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationSub {
    /**
     * The type of subscription plan being used.
     */
    sub_tier: ChannelSubscriptionTier;
    /**
     * Indicates if the subscription was obtained through Amazon Prime.
     */
    is_prime: boolean;
    /**
     * The number of months the subscription is for.
     */
    duration_months: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationResub {
    /**
     * The total number of months the user has subscribed.
     */
    cumulative_months: number;
    /**
     * The number of months the subscription is for.
     */
    duration_months: number;
    /**
     * The total number of months the user has subscribed.
     */
    streak_months: number;
    /**
     * The type of subscription plan being used.
     */
    sub_tier: ChannelSubscriptionTier;
    /**
     * The number of consecutive months the user has subscribed.
     */
    is_prime: boolean|null;
    /**
     * Whether the resub was a result of a gift.
     */
    is_gift: boolean;
    /**
     * Whether the gift was anonymous.
     */
    gifter_is_anonymous: boolean|null;
    /**
     * The user ID of the subscription gifter.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_id: string|null;
    /**
     * The username of the subscription gifter.
     *
     * @remakrs Null if anonymous.
     */
    gifter_user_name: string|null;
    /**
     * The user login of the subscription gifter.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_login: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationSubGift {
    /**
     * The number of months the subscription is for.
     */
    duration_months: number;
    /**
     * The amount of gifts the gifter has given in this channel. Null if anonymous.
     */
    cumulative_total: number|null;
    /**
     * The user ID of the subscription gift recipient.
     */
    recipient_user_id: string;
    /**
     * The username of the subscription gift recipient.
     */
    recipient_user_name: string;
    /**
     * The user login of the subscription gift recipient.
     */
    recipient_user_login: string;
    /**
     * The type of subscription plan being used.
     */
    sub_tier: ChannelSubscriptionTier;
    /**
     * The ID of the associated community gift.
     *
     * @remKRS Null if not associated with a community gift.
     */
    community_gift_id: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationCommunitySubGift {
    /**
     * The ID of the associated community gift.
     */
    id: string;
    /**
     * Number of subscriptions being gifted.
     */
    total: number;
    /**
     * The type of subscription plan being used.
     */
    sub_tier: ChannelSubscriptionTier;
    /**
     * The amount of gifts the gifter has given in this channel.
     *
     * @remKRS Null if anonymous.
     */
    cumulative_total: number|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationGiftPaidUpgrade {
    /**
     * Whether the gift was given anonymously.
     */
    gifter_is_anonymous: boolean;
    /**
     * The user ID of the user who gifted the subscription.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_id: string|null;
    /**
     * The username of the user who gifted the subscription.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_name: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationPrimePaidUpgrade {
    /**
     * The type of subscription plan being used.
     */
    sub_tier: ChannelSubscriptionTier.Tier1;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationPayItForward {
    /**
     * Whether the gift was given anonymously.
     */
    gifter_is_anonymous: boolean;
    /**
     * The user ID of the user who gifted the subscription.
     *
     * @remakrs Null if anonymous.
     */
    gifter_user_id: string|null;
    /**
     * The username of the user who gifted the subscription.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_name: string|null;
    /**
     * The user login of the user who gifted the subscription.
     *
     * @remarks Null if anonymous.
     */
    gifter_user_login: string|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationRaid extends EventUserInfo {
    /**
     * The number of viewers raiding this channel from the broadcaster’s channel.
     */
    viewer_count: number;
    /**
     * Profile image URL of the broadcaster raiding this channel.
     */
    profile_image_url: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationAnnouncement {
    /**
     * Color of the announcement.
     */
    color: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationBitsBadgeTier {
    /**
     * The tier of the Bits badge the user just earned.
     *
     * @remarks For example, 100, 1000, or 10000.
     */
    tier: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationCharityDonation {
    /**
     * Name of the charity.
     */
    charity_name: string;
    /**
     * An object that contains the amount of money that the user paid.
     */
    amount: CharityAmountData;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationWatchStreak {
    /**
     * The number of consecutive broadcasts for which the user has been watching.
     */
    streak_count: number;
    /**
     * The number of channel points awarded for the Watch Streak milestone.
     */
    channel_points_awarded: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationModiversary {
    /**
     * The number of months the user has been a moderator in this channel.
     */
    months: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-notification-event
 */
export interface ChannelChatNotificationEvent extends EventBroadcasterInfo {
    /**
     * The user ID of the user that sent the message.
     */
    chatter_user_id: string;
    /**
     * The user login of the user that sent the message.
     */
    chatter_user_name: string;
    /**
     * Whether the chatter is anonymous.
     */
    chatter_is_anonymous: boolean;
    /**
     * The color of the user’s name in the chat room.
     */
    color: string;
    /**
     * The color of the user’s name in the chat room.
     */
    badges: ChannelChatBadge[];
    /**
     * The message Twitch shows in the chat room for this notice.
     */
    system_message: string;
    /**
     * A UUID that identifies the message.
     */
    message_id: string;
    /**
     * The structured chat message.
     */
    message: ChannelChatMessage;
    /**
     * The type of notice.
     */
    notice_type: ChannelChatNotificationNoticeType;
    /**
     * Information about the sub event.
     *
     * @remarks Null if `notice_type` is not `sub`.
     */
    sub: ChannelChatNotificationSub|null;
    /**
     * Information about the resub event.
     *
     * @remarks Null if `notice_type` is not `resub`.
     */
    resub: ChannelChatNotificationResub|null;
    /**
     * Information about the gift sub event.
     *
     * @remarka Null if `notice_type` is not `sub_gift`.
     */
    sub_gift: ChannelChatNotificationSubGift|null;
    /**
     * Information about the community gift sub event.
     *
     * @remakrs Null if `notice_type` is not `community_sub_gift`.
     */
    community_sub_gift: ChannelChatNotificationCommunitySubGift|null;
    /**
     * Information about the community gift paid upgrade event.
     *
     * @remarks Null if `notice_type is not `gift_paid_upgrade`.
     */
    gift_paid_upgrade: ChannelChatNotificationGiftPaidUpgrade|null;
    /**
     * Information about the Prime gift paid upgrade event.
     *
     * @remarks Null if `notice_type` is not `prime_paid_upgrade`.
     */
    prime_paid_upgrade: ChannelChatNotificationPrimePaidUpgrade|null;
    /**
     * Information about the pay it forward event.
     *
     * @remarks Null if `notice_type` is not `pay_it_forward`.
     */
    pay_it_forward: ChannelChatNotificationPayItForward|null;
    /**
     * Information about the raid event.
     *
     * @remarks Null if `notice_type` is not `raid`.
     */
    raid: ChannelChatNotificationRaid|null;
    /**
     * Returns an empty payload if `notice_type` is not `unraid`, otherwise returns null.
     */
    unraid: ChannelChatNotificationRaid|null;
    /**
     * Information about the announcement event.
     *
     * @rermarks Null if `notice_type` is not `announcement`.
     */
    announcement: ChannelChatNotificationAnnouncement|null;
    /**
     * Information about the Bits badge tier event.
     *
     * @remarks Null if `notice_type` is not `bits_badge_tier`.
     */
    bits_badge_tier: ChannelChatNotificationBitsBadgeTier|null;
    /**
     * Information about the charity donation event.
     *
     * @remarks Null if `notice_type` is not `charity_donation`.
     */
    charity_donation: ChannelChatNotificationCharityDonation|null;
    /**
     * Information about the Watch Streak event.
     *
     * @remarks Null if `notice_type` is not `watch_streak`.
     */
    watch_streak: ChannelChatNotificationWatchStreak|null;
    /**
     * Information about the modiversary event.
     *
     * @remark Null if `notice_type` is not `modiversary`.
     */
    modiversary: ChannelChatNotificationModiversary|null;
    /**
     * The broadcaster user ID of the channel the message was sent from.
     *
     * @remarks Is null when the message notification happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_broadcaster_user_id: string|null;
    /**
     * The username of the broadcaster of the channel the message was sent from.
     *
     * @remarks Is null when the message notification happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_broadcaster_user_name: string|null;
    /**
     * The login of the broadcaster of the channel the message was sent from.
     *
     * @remarks Is null when the message notification happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_broadcaster_user_login: string|null;
    /**
     * The UUID that identifies the source message from the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_message_id: string|null;
    /**
     * The list of chat badges for the chatter in the channel the message was sent from.
     *
     * @remarks Is null when the message happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_badges: ChannelChatBadge[]|null;
    /**
     * Whether the notification is only sent to the source channel.
     *
     * @remarks Is `null` if the notification is not in a shared chat session.
     */
    is_source_only: boolean|null;
    /**
     * Information about the `shared_chat_sub` event.
     *
     * @reamrks Is null if `notice_type` is not `shared_chat_sub`. This field has the same information as the `sub`
     * field but for a notice that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_sub: ChannelChatNotificationSub|null;
    /**
     * Information about the `shared_chat_resub` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_resub`. This field has the same information as the `resub`
     * field but for a notice that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_resub: ChannelChatNotificationResub|null;
    /**
     * Information about the `shared_chat_sub_gift` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_sub_gift`.
     * This field has the same information as the `chat_sub_gift` field but for a notice that happened for a channel
     * in a shared chat session other than the broadcaster in the subscription condition.
     */
    shared_chat_sub_gift: ChannelChatNotificationSubGift|null;
    /**
     * Information about the `shared_chat_community_sub_gift` event.
     *
     * @remakrs Is null if `notice_type` is not `shared_chat_community_sub_gift`. This field has the same information
     * as the `community_sub_gift` field but for a notice that happened for a channel in a shared chat session other
     * than the broadcaster in the subscription condition.
     */
    shared_chat_community_sub_gift: ChannelChatNotificationCommunitySubGift|null;
    /**
     * Information about the `shared_chat_gift_paid_upgrade` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_gift_paid_upgrade`. This field has the same information as
     * the `gift_paid_upgrade` field but for a notice that happened for a channel in a shared chat session other than
     * the broadcaster in the subscription condition.
     */
    shared_chat_gift_paid_upgrade: ChannelChatNotificationGiftPaidUpgrade|null;
    /**
     * Information about the `shared_chat_chat_prime_paid_upgrade` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_prime_paid_upgrade`. This field has the same information
     * as the `prime_paid_upgrade` field but for a notice that happened for a channel in a shared chat session other
     * than the broadcaster in the subscription condition.
     */
    shared_chat_prime_paid_upgrade: ChannelChatNotificationPrimePaidUpgrade|null;
    /**
     * Information about the `shared_chat_pay_it_forward` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_pay_it_forward`. This field has the same information
     * as the `pay_it_forward` field but for a notice that happened for a channel in a shared chat session other than
     * the broadcaster in the subscription condition.
     */
    shared_chat_pay_it_forward: ChannelChatNotificationPayItForward|null;
    /**
     * Information about the `shared_chat_raid` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_raid`. This field has the same information as the raid
     * field but for a notice that happened for a channel in a shared chat session other than the broadcaster in
     * the subscription condition.
     */
    shared_chat_raid: ChannelChatNotificationRaid|null;
    /**
     * Information about the `shared_chat_announcement` event.
     *
     * @remarks Is null if `notice_type` is not `shared_chat_announcement`. This field has the same information as the
     * announcement field but for a notice that happened for a channel in a shared chat session other than the
     * broadcaster in the subscription condition.
     */
    shared_chat_announcement: ChannelChatNotificationAnnouncement|null;
}
