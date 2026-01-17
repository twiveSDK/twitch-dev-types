import type {BaseBroadcasterInfo, BaseModeratorInfo, BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export enum ChannelModerateAction {
    Ban = "ban",
    Timeout = "timeout",
    Unban = "unban",
    Untimeout = "untimeout",
    Clear = "clear",
    EmoteOnly = "emoteonly",
    EmoteOnlyOff = "emoteonlyoff",
    Followers = "followers",
    FollowersOff = "followersoff",
    UniqueChat = "uniquechat",
    UniqueChatOff = "uniquechatoff",
    Slow = "slow",
    SlowOff = "slowoff",
    Subscribers = "subscribers",
    SubscribersOff = "subscribersoff",
    Unraid = "unraid",
    Delete = "delete",
    UnVIP = "unvip",
    VIP = "vip",
    Raid = "raid",
    AddBlockedTerm = "add_blocked_term",
    AddPermittedTerm = "add_permitted_term",
    RemoveBlockedTerm = "remove_blocked_term",
    RemovePermittedTerm = "remove_permitted_term",
    Mod = "mod",
    Unmod = "unmod",
    ApproveUnbanRequest = "approve_unban_request",
    DenyUnbanRequest = "deny_unban_request",
    SharedChatBan = "shared_chat_ban",
    SharedChatTimeout = "shared_chat_timeout",
    SharedChatUntimeout = "shared_chat_untimeout",
    SharedChatUnban = "shared_chat_unban",
    SharedChatDelete = "shared_chat_delete",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateFollowers {
    /**
     * The length of time, in minutes, that the followers must have followed the broadcaster to participate
     * in the chat room.
     */
    follow_duration_minutes: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateSlow {
    /**
     * The amount of time, in seconds, that users need to wait between sending messages.
     */
    wait_time_seconds: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateVIP extends BaseUserInfo {}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateBan extends BaseUserInfo {
    /**
     * Reason given for the ban.
     */
    reason?: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateTimeout extends BaseUserInfo{
    /**
     * The reason given for the timeout.
     */
    reason?: string;
    /**
     * The time at which the timeout ends.
     */
    expires_at: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateRaid extends BaseUserInfo {
    /**
     * The viewer count.
     */
    viewer_count: number;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateDelete extends BaseUserInfo {
    /**
     * The ID of the message being deleted.
     */
    message_id: string;
    /**
     * The message body of the message being deleted.
     */
    message_body: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export enum ChannelModerateAutomodTermAction {
    Add = "add",
    Remove = "remove",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export enum ChannelModerateAutomodTermList {
    Blocked = "blocked",
    Permitted = "permitted",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateAutomodTerms {
    /**
     * Either the term was added or removed.
     */
    action: ChannelModerateAutomodTermAction;
    /**
     * The list the term is blocked from or permitted to.
     */
    list: ChannelModerateAutomodTermList;
    /**
     * Terms being added or removed.
     */
    terms: string[];
    /**
     * Whether the terms were added due to an Automod message approve/deny action.
     */
    from_automod: boolean;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateUnbanRequest extends BaseUserInfo {
    /**
     * Whether the unban request was approved or denied.
     */
    is_approved: boolean;
    /**
     * The message included by the moderator explaining their approval or denial.
     */
    moderator_message: string;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event
 */
export interface ChannelModerateEvent extends BaseBroadcasterInfo, BaseModeratorInfo {
    /**
     * The channel in which the action originally occurred.
     *
     * @remakrks Is the same as the `broadcaster_user_id` if not in shared chat.
     */
    source_broadcaster_user_id: string;
    /**
     * The channel in which the action originally occurred.
     *
     * @remarks Is the same as the `broadcaster_user_login` if not in shared chat.
     */
    source_broadcaster_user_login: string;
    /**
     * The channel in which the action originally occurred.
     *
     * @remarks Is null when the moderator action happens in the same channel as the broadcaster.
     * Is not null when in a shared chat session, and the action happens in the channel of a participant other
     * than the broadcaster.
     */
    source_broadcaster_user_name: string;
    /**
     * The type of action.
     */
    action: ChannelModerateAction;
    /**
     * Metadata associated with the followers command.
     */
    followers?: ChannelModerateFollowers;
    /**
     * Metadata associated with the slow command.
     */
    slow?: ChannelModerateSlow;
    /**
     * Metadata associated with the vip command.
     */
    vip?: BaseUserInfo;
    /**
     * Metadata associated with the unvip command.
     */
    unvip?: BaseUserInfo;
    /**
     * Metadata associated with the mod command.
     */
    mod?: BaseUserInfo;
    /**
     * Metadata associated with the unmod command.
     */
    unmod?: BaseUserInfo;
    /**
     * Metadata associated with the ban command.
     */
    ban?: ChannelModerateBan;
    /**
     * Metadata associated with the unban command.
     */
    unban?: BaseUserInfo;
    /**
     * Metadata associated with the timeout command.
     */
    timeout?: ChannelModerateTimeout;
    /**
     * Metadata associated with the untimeout command.
     */
    untimeout?: BaseUserInfo;
    /**
     * Metadata associated with the raid command.
     */
    raid?: ChannelModerateRaid;
    /**
     * Metadata associated with the unraid command.
     */
    unraid?: BaseUserInfo;
    /**
     * Metadata associated with the delete command.
     */
    delete?: ChannelModerateDelete;
    /**
     * Metadata associated with the automod terms changes.
     */
    automod_terms?: ChannelModerateAutomodTerms;
    /**
     * Metadata associated with an unban request.
     */
    unban_request?: ChannelModerateUnbanRequest;
    /**
     * Information about the `shared_chat_ban event`.
     *
     * @remarks Is null if `action` is not `shared_chat_ban. This field has the same information as the `ban` field
     * but for an action that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_ban?: ChannelModerateBan;
    /**
     * Information about the `shared_chat_unban` event.
     *
     * @remarks Is null if `action` is not `shared_chat_unban`. This field has the same information as the `unban` field
     * but for an action that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_unban?: BaseUserInfo;
    /**
     * Information about the `shared_chat_timeout` event.
     *
     * @remarks Is null if `action` is not `shared_chat_timeout`. This field has the same information as the `timeout
     * field but for an action that happened for a channel in a shared chat session other than the broadcaster in
     * the subscription condition.
     */
    shared_chat_timeout?: ChannelModerateTimeout;
    /**
     * Information about the `shared_chat_untimeout` event.
     *
     * @remarks Is null if `action` is not `shared_chat_untimeout`. This field has the same information as the `untimeout`
     * field but for an action that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_untimeout?: BaseUserInfo;
    /**
     * Information about the `shared_chat_delete` event.
     *
     * @remarks Is null if `action` is not `shared_chat_delete`. This field has the same information as the `delete`
     * field but for an action that happened for a channel in a shared chat session other than the broadcaster in the
     * subscription condition.
     */
    shared_chat_delete?: ChannelModerateDelete;
}
