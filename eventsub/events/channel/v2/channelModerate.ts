import type {ChannelModerateEvent} from "../channelModerate";
import type {EventUserInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event-v2
 */
export enum ChannelModerateActionV2 {
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
    Warn = "warn",
    SharedChatBan = "shared_chat_ban",
    SharedChatTimeout = "shared_chat_timeout",
    SharedChatUntimeout = "shared_chat_untimeout",
    SharedChatUnban = "shared_chat_unban",
    SharedChatDelete = "shared_chat_delete",
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event-v2
 */
export interface ChannelModerateWarn extends EventUserInfo {
    /**
     * Reason given for the warning.
     */
    reason: string|null;
    /**
     * Chat rules cited for the warning.
     */
    chat_rules_cited: string[]|null;
}

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-moderate-event-v2
 */
export interface ChannelModerateEventV2 extends Omit<ChannelModerateEvent, "action"> {
    /**
     * The type of action.
     */
    action: ChannelModerateActionV2;
    /**
     * Metadata associated with the warn command.
     */
    warn: ChannelModerateWarn|null;
}
