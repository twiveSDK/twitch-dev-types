export interface APIResponse<T> {
    /**
     * A list of items that were returned.
     */
    data: T[];
}

/**
 * @see https://dev.twitch.tv/docs/api/guide/#pagination
 */
export interface APIPaginatedResponse<T> extends APIResponse<T> {
    /**
     * The information used to page through the list of results.
     *
     * @remarks The object is empty if there are no more pages left to page through.
     * {@link https://dev.twitch.tv/docs/api/guide/#pagination Read More}
     */
    pagination: {
        /**
         * The cursor used to get the next page of results.
         *
         * @remarks Set the request’s after or before query parameter to this value depending on
         * whether you’re paging forwards or backwards.
         */
        cursor?: string;
    };
}

/**
 * @see https://dev.twitch.tv/docs/api/guide/#pagination
 */
export interface RESTPaginationRequestParams {
    /**
     * Use to get the next page of results.
     */
    after?: string;
    /**
     * Use to get the previous page of results.
     */
    before?: string;
    /**
     * Use to specify the number of items to include per page.
     */
    first?: number;
}

export interface APIErrorResponse {
    /**
     * A small description of the error that occurred.
     */
    error: string;
    /**
     * The error code returned by the API.
     */
    status: number;
    /**
     * A detailed message explaining the error.
     */
    message: string;
}

export enum APIEndpoint {
    /**
     * Starts a commercial on the specified channel.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#start-commercial
     */
    StartCommercial = "https://api.twitch.tv/helix/start_commercial",
    /**
     * Gets the ad schedule related information, including snooze, when the last ad was run, when the next ad is
     * scheduled, and if the channel is currently in pre-roll free time.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-ad-schedule
     */
    GetAdSchedule = "https://api.twitch.tv/helix/channels/ads",
    /**
     * Pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#snooze-next-ad
     */
    SnoozeNextAd = "https://api.twitch.tv/helix/channels/ads/schedule/snooze",
    /**
     * Gets an analytics report for one or more extensions.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
     */
    GetExtensionAnalytics = "https://api.twitch.tv/helix/analytics/extensions",
    /**
     * Gets an analytics report for one or more games.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-game-analytics
     */
    GetGameAnalytics = "https://api.twitch.tv/helix/analytics/games",
    /**
     * Gets the Bits leaderboard for the authenticated broadcaster.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard
     */
    GetBitsLeaderboard = "https://api.twitch.tv/helix/bits/leaderboard",
    /**
     * Gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel’s chat room.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-cheermotes
     */
    GetCheermotes = "https://api.twitch.tv/helix/bits/cheermotes",
    /**
     * Gets an extension’s list of transactions.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extension-transactions
     */
    GetExtensionTransactions = "https://api.twitch.tv/helix/extensions/transactions",
    /**
     * Gets information about one or more channels.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-information
     */
    GetChannelInformation = "https://api.twitch.tv/helix/channels",
    /**
     * Updates a channel’s properties.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#modify-channel-information
     */
    ModifyChannelInformation = "https://api.twitch.tv/helix/channels",
    /**
     * Gets the broadcaster’s list editors.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-editors
     */
    GetChannelEditors = "https://api.twitch.tv/helix/channels/editors",
    /**
     * Gets a list of broadcasters that the specified user follows.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-followed-channels
     */
    GetFollowedChannels = "https://api.twitch.tv/helix/channels/followed",
    /**
     * Gets a list of users that follow the specified broadcaster.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-followers
     */
    GetChannelFollowers = "https://api.twitch.tv/helix/channels/followers",
    /**
     * Creates a Custom Reward in the broadcaster’s channel.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-custom-reward
     */
    CreateCustomRewards = "https://api.twitch.tv/helix/channel_points/custom_rewards",
    /**
     * Deletes a custom reward that the broadcaster created.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-custom-reward
     */
    DeleteCustomReward = "https://api.twitch.tv/helix/channel_points/custom_rewards",
    /**
     * Gets a list of custom rewards that the specified broadcaster created.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward
     */
    GetCustomReward = "https://api.twitch.tv/helix/channel_points/custom_rewards",
    /**
     * Gets a list of redemptions for the specified custom reward.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemptions
     */
    GetCustomRewardRedemptions = "https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions",
    /**
     * Updates a custom reward.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-custom-reward
     */
    UpdateCustomReward = "https://api.twitch.tv/helix/channel_points/custom_rewards",
    /**
     * Updates a redemption’s status.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-redemption-status
     */
    UpdateRedemptionStatus = "https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions",
    /**
     * Gets information about the charity campaign that a broadcaster is running.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign
     */
    GetCharityCampaign = "https://api.twitch.tv/helix/charity/campaigns",
    /**
     * Gets the list of donations that users have made to the broadcaster’s active charity campaign.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations
     */
    GetCharityCampaignDonations = "https://api.twitch.tv/helix/charity/donations",
    /**
     * Gets the list of users that are connected to the broadcaster’s chat session.
     * You can check the roles of up to 100 users.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-chatters
     */
    GetChatters = "https://api.twitch.tv/helix/chat/chatters",
    /**
     * Gets the broadcaster’s list of custom emotes.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-emotes
     */
    GetChannelEmotes = "https://api.twitch.tv/helix/chat/emotes",
    /**
     * Gets the list of global emotes.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-global-emotes
     */
    GetGlobalEmotes = "https://api.twitch.tv/helix/chat/emotes/global",
    /**
     * Gets emotes for one or more specified emote sets.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-emote-sets
     */
    GetEmoteSets = "https://api.twitch.tv/helix/chat/emotes/set",
    /**
     * Gets the broadcaster’s list of custom chat badges.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges
     */
    GetChannelChatBadges = "https://api.twitch.tv/helix/chat/badges",
    /**
     * Gets Twitch’s list of chat badges, which users may use in any channel’s chat room.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-global-chat-badges
     */
    GetGlobalChatBadges = "https://api.twitch.tv/helix/chat/badges/global",
    /**
     * Gets the broadcaster’s chat settings.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-chat-settings
     */
    GetChatSettings = "https://api.twitch.tv/helix/chat/settings",
    /**
     * Retrieves the active shared chat session for a channel.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-shared-chat-session
     */
    GetSharedChatSession = "https://api.twitch.tv/helix/shared_chat/session",
    /**
     * Retrieves emotes available to the user across all channels.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-user-emotes
     */
    GetUserEmotes = "https://api.twitch.tv/helix/chat/emotes/user",
    /**
     * Updates the broadcaster’s chat settings.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-chat-settings
     */
    UpdateChatSettings = "https://api.twitch.tv/helix/chat/settings",
    /**
     * Sends an announcement to the broadcaster’s chat room.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#send-chat-announcement
     */
    SendChatAnnouncement = "https://api.twitch.tv/helix/chat/announcements",
    /**
     * Sends a Shoutout to the specified broadcaster.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#send-a-shoutout
     */
    SendAShoutout = "https://api.twitch.tv/helix/chat/shoutouts",
    /**
     * Sends a message to the broadcaster’s chat room.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#send-chat-message
     */
    SendChatMessage = "https://api.twitch.tv/helix/chat/messages",
    /**
     * Gets the color used for the user’s name in chat.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-user-chat-color
     */
    GetUserChatColor = "https://api.twitch.tv/helix/chat/color",
    /**
     * Updates the color used for the user’s name in chat.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-user-chat-color
     */
    UpdateUserChatColor = "https://api.twitch.tv/helix/chat/color",
    /**
     * Creates a clip from the broadcaster’s stream.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#get-clips
     */
    CreateClip = "https://api.twitch.tv/helix/clips",
    /**
     * Creates a clip from the broadcaster’s VOD.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-clip-from-vod
     */
    CreateClipFromVOD = "https://api.twitch.tv/helix/videos/clips",
    /**
     * Gets one or more video clips that were captured from streams.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-clips
     */
    GetClips = "https://api.twitch.tv/helix/clips",
    /**
     * Provides URLs to download the video file(s) for the specified clips.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference#get-clips-download
     */
    GetClipsDownload = "https://api.twitch.tv/helix/clips/downloads",
    /**
     * Gets the conduits for a client ID.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
     */
    GetConduits = "https://api.twitch.tv/helix/eventsub/conduits",
    /**
     * Creates a new conduit.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-conduit
     */
    CreateConduits = "https://api.twitch.tv/helix/eventsub/conduits",
    /**
     * Updates a conduit’s shard count.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-conduit
     */
    UpdateConduits = "https://api.twitch.tv/helix/eventsub/conduits",
    /**
     * Deletes a specified conduit.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-conduit
     */
    DeleteConduit = "https://api.twitch.tv/helix/eventsub/conduits",
    /**
     *  Gets a lists of all shards for a conduit.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-conduit-shards
     */
    GetConduitShards = "https://api.twitch.tv/helix/eventsub/conduits/shards",
    /**
     * Updates shard(s) for a conduit.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-conduit-shards
     */
    UpdateConduitShards = "https://api.twitch.tv/helix/eventsub/conduits/shards",
    /**
     * Gets information about Twitch content classification labels.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels
     */
    GetContentClassificationLabels = "https://api.twitch.tv/helix/content_classification_labels",
    /**
     * Gets an organization’s list of entitlements that have been granted to a game, a user, or both.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements
     */
    GetDropsEntitlements = "https://api.twitch.tv/helix/entitlements/drops",
    /**
     * Updates the Drop entitlement’s fulfillment status.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements
     */
    UpdateDropsEntitlements = "https://api.twitch.tv/helix/entitlements/drops",
    /**
     * Gets the specified configuration segment from the specified extension.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
     */
    GetExtensionConfigurationSegment = "https://api.twitch.tv/helix/extensions/configurations",
    /**
     * Updates a configuration segment.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#set-extension-configuration-segment
     */
    SetExtensionConfigurationSegment = "https://api.twitch.tv/helix/extensions/configurations",
    /**
     * Updates the extension’s required_configuration string.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#set-extension-required-configuration
     */
    SetExtensionRequiredConfiguration = "https://api.twitch.tv/helix/extensions/required_configuration",
    /**
     * Sends a message to one or more viewers.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#send-extension-pubsub-message
     */
    SendExtensionPubSubMessage = "https://api.twitch.tv/helix/extensions/pubsub",
    /**
     * Gets a list of broadcasters that are streaming live and have installed or activated the extension.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels
     */
    GetExtensionLiveChannels = "https://api.twitch.tv/helix/extensions/live",
    /**
     * Gets an extension’s list of shared secrets.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extension-jwt-secrets
     */
    GetExtensionSecrets = "https://api.twitch.tv/helix/extensions/jwt/secrets",
    /**
     * Creates a shared secret used to sign and verify JWT tokens.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-extension-jwt-secret
     */
    CreateExtensionSecret = "https://api.twitch.tv/helix/extensions/jwt/secrets",
    /**
     * Sends a message to the specified broadcaster’s chat room.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#send-extension-chat-message
     */
    SendExtensionChatMessage = "https://api.twitch.tv/helix/extensions/chat",
    /**
     * Gets information about an extension.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extensions
     */
    GetExtensions = "https://api.twitch.tv/helix/extensions",
    /**
     * Gets information about a released extension.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-released-extensions
     */
    GetReleasedExtensions = "https://api.twitch.tv/helix/extensions/released",
    /**
     * Gets the list of Bits products that belongs to the extension.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products
     */
    GetExtensionBitsProducts = "https://api.twitch.tv/helix/bits/extensions",
    /**
     * Adds or updates a Bits product that the extension created.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-extension-bits-product
     */
    UpdateExtensionBitsProduct = "https://api.twitch.tv/helix/bits/extensions",
    /**
     * Creates an EventSub subscription.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription
     */
    CreateEventSubSubscription = "https://api.twitch.tv/helix/eventsub/subscriptions",
    /**
     * Deletes an EventSub subscription.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-eventsub-subscription
     */
    DeleteEventSubSubscription = "https://api.twitch.tv/helix/eventsub/subscriptions",
    /**
     * Gets a list of EventSub subscriptions that the client in the access token created.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions
     */
    GetEventSubSubscriptions = "https://api.twitch.tv/helix/eventsub/subscriptions",
    /**
     * Gets information about all broadcasts on Twitch.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-top-games
     */
    GetTopGames = "https://api.twitch.tv/helix/games/top",
    /**
     * Gets information about specified categories or games.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-games
     */
    GetGames = "https://api.twitch.tv/helix/games",
    /**
     * Gets the broadcaster’s list of active goals.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-creator-goals
     */
    GetCreatorGoals = "https://api.twitch.tv/helix/goals",
    /**
     * Gets the channel settings for configuration of the Guest Star feature for a particular host.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings
     */
    GetChannelGuestStarSettings = "https://api.twitch.tv/helix/guest_star/channel_settings",
    /**
     * Mutates the channel settings for configuration of the Guest Star feature for a particular host.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-channel-guest-star-settings
     */
    UpdateChannelGuestStarSettings = "https://api.twitch.tv/helix/guest_star/channel_settings",
    /**
     * Gets information about an ongoing Guest Star session for a particular channel.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-session
     */
    GetGuestStarSession = "https://api.twitch.tv/helix/guest_star/session",
    /**
     * Programmatically creates a Guest Star session on behalf of the broadcaster.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-guest-star-session
     */
    CreateGuestStarSession = "https://api.twitch.tv/helix/guest_star/session",
    /**
     * Programmatically ends a Guest Star session on behalf of the broadcaster.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#end-guest-star-session
     */
    EndGuestStarSession = "https://api.twitch.tv/helix/guest_star/session",
    /**
     * Provides the caller with a list of pending invites to a Guest Star session, including the invitee’s ready status
     * while joining the waiting room.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites
     */
    GetGuestStarInvites = "https://api.twitch.tv/helix/guest_star/invites",
    /**
     * Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#send-guest-star-invite
     */
    SendGuestStarInvite = "https://api.twitch.tv/helix/guest_star/invites",
    /**
     * Revokes a previously sent invite for a Guest Star session.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-guest-star-invite
     */
    DeleteGuestStarInvite = "https://api.twitch.tv/helix/guest_star/invites",
    /**
     * Allows a previously invited user to be assigned a slot within the active Guest Star session,
     * once that guest has indicated they are ready to join.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#assign-guest-star-slot
     */
    AssignGuestStarSlot = "https://api.twitch.tv/helix/guest_star/slot",
    /**
     * Allows a user to update the assigned slot for a particular user within the active Guest Star session.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot
     */
    UpdateGuestStarSlot = "https://api.twitch.tv/helix/guest_star/slot",
    /**
     * Allows a caller to remove a slot assignment from a user participating in an active Guest Star session.
     * This revokes their access to the session immediately and disables their access to publish
     * or subscribe to media within the session.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-guest-star-slot
     */
    DeleteGuestStarSlot = "https://api.twitch.tv/helix/guest_star/slot",
    /**
     * Allows a user to update slot settings for a particular guest within a Guest Star session,
     * such as allowing the user to share audio or video within the call as a host.
     * These settings will be broadcasted to all subscribers which control their view of the guest in that slot.
     * One or more of the optional parameters to this API can be specified at any time.
     *
     * @remarks Currently in **beta**.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot-settings
     */
    UpdateGuestStarSlotSettings = "https://api.twitch.tv/helix/guest_star/slot_settings",
    /**
     * Gets information about the broadcaster’s current or most recent Hype Train event.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-events
     */
    GetHypeTrainEvents = "https://api.twitch.tv/helix/hypetrain/events",
    /**
     * Get the status of a Hype Train for the specified broadcaster.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-hype-train-status
     */
    GetHypeTrainStatus = "https://api.twitch.tv/helix/hypetrain/status",
    /**
     * Checks whether AutoMod would flag the specified message for review.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#check-automod-status
     */
    CheckAutoModStatus = "https://api.twitch.tv/helix/moderation/enforcements/status",
    /**
     * Allow or deny the message that AutoMod flagged for review.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages
     */
    ManageHeldAutoModMessages = "https://api.twitch.tv/helix/moderation/automod/message",
    /**
     * Gets the broadcaster’s AutoMod settings.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-automod-settings
     */
    GetAutoModSettings = "https://api.twitch.tv/helix/moderation/automod/settings",
    /**
     * Updates the broadcaster’s AutoMod settings.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-automod-settings
     */
    UpdateAutoModSettings = "https://api.twitch.tv/helix/moderation/automod/settings",
    /**
     * Gets all users that the broadcaster banned or put in a timeout.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-banned-users
     */
    GetBannedUsers = "https://api.twitch.tv/helix/moderation/banned",
    /**
     * Bans a user from participating in the specified broadcaster’s chat room or puts them in a timeout.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#ban-user
     */
    BanUser = "https://api.twitch.tv/helix/moderation/bans",
    /**
     * Removes the ban or timeout that was placed on the specified user.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#unban-user
     */
    UnbanUser = "https://api.twitch.tv/helix/moderation/bans",
    /**
     * Gets a list of unban requests for a broadcaster’s channel.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-unban-requests
     */
    GetUnbanRequests = "https://api.twitch.tv/helix/moderation/unban_requests",
    /**
     * Resolves an unban request by approving or denying it.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests
     */
    ResolveUnbanRequest = "https://api.twitch.tv/helix/moderation/unban_requests",
    /**
     * Gets the broadcaster’s list of non-private, blocked words or phrases.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-blocked-terms
     */
    GetBlockedTerms = "https://api.twitch.tv/helix/moderation/blocked_terms",
    /**
     * Adds a word or phrase to the broadcaster’s list of blocked terms.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#add-blocked-term
     */
    AddBlockedTerm = "https://api.twitch.tv/helix/moderation/blocked_terms",
    /**
     * Removes the word or phrase from the broadcaster’s list of blocked terms.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#remove-blocked-term
     */
    RemoveBlockedTerm = "https://api.twitch.tv/helix/moderation/blocked_terms",
    /**
     * Removes a single chat message or all chat messages from the broadcaster’s chat room.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-chat-messages
     */
    DeleteChatMessages = "https://api.twitch.tv/helix/moderation/chat",
    /**
     * Gets a list of channels that the specified user has moderator privileges in.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-moderated-channels
     */
    GetModeratedChannels = "https://api.twitch.tv/helix/moderation/channels",
    /**
     * Gets all users allowed to moderate the broadcaster’s chat room.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-moderators
     */
    GetModerators = "https://api.twitch.tv/helix/moderation/moderators",
    /**
     * Adds a moderator to the broadcaster’s chat room.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#add-channel-moderator
     */
    AddChannelModerator = "https://api.twitch.tv/helix/moderation/moderators",
    /**
     * Removes a moderator from the broadcaster’s chat room.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#remove-channel-moderator
     */
    RemoveChannelModerator = "https://api.twitch.tv/helix/moderation/moderators",
    /**
     * Gets a list of the broadcaster’s VIPs.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-vips
     */
    GetVIPs = "https://api.twitch.tv/helix/channels/vips",
    /**
     * Adds the specified user as a VIP in the broadcaster’s channel.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#add-channel-vip
     */
    AddChannelVIP = "https://api.twitch.tv/helix/channels/vips",
    /**
     * Removes the specified user as a VIP in the broadcaster’s channel.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#remove-channel-vip
     */
    RemoveChannelVIP = "https://api.twitch.tv/helix/channels/vips",
    /**
     * Activates or deactivates the broadcaster’s Shield Mode.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status
     */
    UpdateShieldModeStatus = "https://api.twitch.tv/helix/moderation/shield_mode",
    /**
     * Gets the broadcaster’s Shield Mode activation status.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status
     */
    GetShieldModeStatus = "https://api.twitch.tv/helix/moderation/shield_mode",
    /**
     * Warns a user in the specified broadcaster’s chat room, preventing them from chat interaction
     * until the warning is acknowledged.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#warn-chat-user
     */
    WarnChatUser = "https://api.twitch.tv/helix/moderation/warnings",
    /**
     * Gets a list of polls that the broadcaster created.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-polls
     */
    GetPolls = "https://api.twitch.tv/helix/polls",
    /**
     * Creates a poll that viewers in the broadcaster’s channel can vote on.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-poll
     */
    CreatePoll = "https://api.twitch.tv/helix/polls",
    /**
     * Ends an active poll.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#end-poll
     */
    EndPoll = "https://api.twitch.tv/helix/polls",
    /**
     * Gets a list of Channel Points Predictions that the broadcaster created.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-predictions
     */
    GetPredictions = "https://api.twitch.tv/helix/predictions",
    /**
     * Creates a Channel Points Prediction.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-prediction
     */
    CreatePrediction = "https://api.twitch.tv/helix/predictions",
    /**
     * Locks, resolves, or cancels a Channel Points Prediction.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#end-prediction
     */
    EndPrediction = "https://api.twitch.tv/helix/predictions",
    /**
     * Raid another channel by sending the broadcaster’s viewers to the targeted channel.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#start-a-raid
     */
    StartRaid = "https://api.twitch.tv/helix/raids",
    /**
     * Cancel a pending raid.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#cancel-a-raid
     */
    CancelRaid = "https://api.twitch.tv/helix/raids",
    /**
     * Gets the broadcaster’s streaming schedule.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule
     */
    GetChannelStreamSchedule = "https://api.twitch.tv/helix/schedule",
    /**
     * Gets the broadcaster’s streaming schedule as an iCalendar.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-icalendar
     */
    GetChanneliCalendar = "https://api.twitch.tv/helix/schedule/icalendar",
    /**
     * Updates the broadcaster’s schedule settings, such as scheduling a vacation.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule
     */
    UpdateChannelStreamSchedule = "https://api.twitch.tv/helix/schedule/settings",
    /**
     * Adds a single or recurring broadcast to the broadcaster’s streaming schedule.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment
     */
    CreateChannelStreamScheduleSegment = "https://api.twitch.tv/helix/schedule/segment",
    /**
     * Updates a scheduled broadcast segment.
     *
     * @httpMethod PATCH
     * @see https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment
     */
    UpdateChannelStreamScheduleSegment = "https://api.twitch.tv/helix/schedule/segment",
    /**
     * Removes a broadcast segment from the broadcaster’s streaming schedule.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-channel-stream-schedule-segment
     */
    DeleteChannelStreamScheduleSegment = "https://api.twitch.tv/helix/schedule/segment",
    /**
     * Gets the games or categories that match the specified query.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#search-categories
     */
    SearchCategories = "https://api.twitch.tv/helix/search/categories",
    /**
     * Gets the channels that match the specified query and have streamed content within the past 6 months.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#search-channels
     */
    SearchChannels = "https://api.twitch.tv/helix/search/channels",
    /**
     * Gets the channel’s stream key.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-stream-key
     */
    GetStreamKey = "https://api.twitch.tv/helix/streams/key",
    /**
     * Gets a list of all streams.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-streams
     */
    GetStreams = "https://api.twitch.tv/helix/streams",
    /**
     * Gets the list of broadcasters that the user follows and that are streaming live.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-followed-streams
     */
    GetFollowedStreams = "https://api.twitch.tv/helix/streams/followed",
    /**
     * Adds a marker to a live stream.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#create-stream-marker
     */
    CreateStreamMarker = "https://api.twitch.tv/helix/streams/markers",
    /**
     * Gets a list of markers from the user’s most recent stream or from the specified VOD/video.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-stream-markers
     */
    GetStreamMarkers = "https://api.twitch.tv/helix/streams/markers",
    /**
     * Gets a list of users that subscribe to the specified broadcaster.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions
     */
    GetBroadcasterSubscriptions = "https://api.twitch.tv/helix/subscriptions",
    /**
     * Checks whether the user subscribes to the broadcaster’s channel.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#check-user-subscription
     */
    CheckUserSubscription = "https://api.twitch.tv/helix/subscriptions/user",
    /**
     * Gets a list of all stream tags that Twitch defines.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-all-stream-tags
     */
    GetAllStreamTags = "https://api.twitch.tv/helix/tags/streams",
    /**
     * Gets the list of stream tags that the broadcaster or Twitch added to their channel.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-stream-tags
     */
    GetStreamTags = "https://api.twitch.tv/helix/streams/tags",
    /**
     * Gets the list of Twitch teams that the broadcaster is a member of.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-channel-teams
     */
    GetChannelTeams = "https://api.twitch.tv/helix/teams/channel",
    /**
     * Gets information about the specified Twitch team.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-teams
     */
    GetTeams = "https://api.twitch.tv/helix/teams",
    /**
     * Gets information about one or more users.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-users
     */
    GetUsers = "https://api.twitch.tv/helix/users",
    /**
     * Updates the specified user’s information.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-user
     */
    UpdateUser = "https://api.twitch.tv/helix/users",
    /**
     * Gets the list of users that the broadcaster has blocked.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-user-block-list
     */
    GetUserBlockList = "https://api.twitch.tv/helix/users/blocks",
    /**
     * Blocks the specified user from interacting with or having contact with the broadcaster.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#block-user
     */
    BlockUser = "https://api.twitch.tv/helix/users/blocks",
    /**
     * Removes the user from the broadcaster’s list of blocked users.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#unblock-user
     */
    UnblockUser = "https://api.twitch.tv/helix/users/blocks",
    /**
     * Gets a list of all extensions (both active and inactive) that the broadcaster has installed.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-user-extensions
     */
    GetUserExtensions = "https://api.twitch.tv/helix/users/extensions/list",
    /**
     * Gets the active extensions that the broadcaster has installed for each configuration.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions
     */
    GetUserActiveExtensions = "https://api.twitch.tv/helix/users/extensions",
    /**
     * Updates an installed extension’s information.
     *
     * @httpMethod PUT
     * @see https://dev.twitch.tv/docs/api/reference/#update-user-extensions
     */
    UpdateUserExtensions = "https://api.twitch.tv/helix/users/extensions",
    /**
     * Gets information about one or more published videos.
     *
     * @httpMethod GET
     * @see https://dev.twitch.tv/docs/api/reference/#get-videos
     */
    GetVideos = "https://api.twitch.tv/helix/videos",
    /**
     * Deletes one or more videos.
     *
     * @httpMethod DELETE
     * @see https://dev.twitch.tv/docs/api/reference/#delete-videos
     */
    DeleteVideos = "https://api.twitch.tv/helix/videos",
    /**
     * Sends a whisper message to the specified user.
     *
     * @httpMethod POST
     * @see https://dev.twitch.tv/docs/api/reference/#delete-videos
     */
    SendWhisper = "https://api.twitch.tv/helix/whispers"
}
