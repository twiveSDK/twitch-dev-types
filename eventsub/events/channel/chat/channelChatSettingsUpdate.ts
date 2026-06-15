import type {EventBroadcasterInfo} from "../../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-chat-settings-update-event
 */
export interface ChannelChatSettingsUpdateEvent extends EventBroadcasterInfo {
    /**
     * A Boolean value that determines whether chat messages must contain only emotes.
     *
     * @remarks True if only messages that are 100% emotes are allowed; otherwise false.
     */
    emote_mode: boolean;
    /**
     * A Boolean value that determines whether the broadcaster restricts the chat room to followers only,
     * based on how long they’ve followed.
     *
     * @reamrks True if the broadcaster restricts the chat room to followers only; otherwise false.
     * @see follower_mode_duration_minutes
     */
    follower_mode: boolean;
    /**
     * The length of time, in minutes, that the followers must have followed the broadcaster to participate in the
     * chat room.
     *
     * @see follower_mode.
     *
     * @reamrks Null if `follower_mode´ is false.
     */
    follower_mode_duration_minutes: number|null;
    /**
     * A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to
     * send messages.
     *
     * @reamrks Is true, if the broadcaster applies a delay; otherwise, false.
     *
     * @see slow_mode_wait_time_seconds
     */
    slow_mode: boolean;
    /**
     * The amount of time, in seconds, that users need to wait between sending messages.
     *
     * @see slow_mode
     *
     * @reamrks Null if `slow_mode` is false.
     */
    slow_mode_wait_time_seconds: number|null;
    /**
     * A Boolean value that determines whether only users that subscribe to the broadcaster’s channel can talk in the
     * chat room.
     *
     * @reamrks True if the broadcaster restricts the chat room to subscribers only; otherwise false.
     */
    subscriber_mode: boolean;
    /**
     * A Boolean value that determines whether the broadcaster requires users to post only unique messages in the
     * chat room.
     *
     * @remarks True if the broadcaster requires unique messages only; otherwise false.
     */
    unique_chat_mode: boolean;
}
