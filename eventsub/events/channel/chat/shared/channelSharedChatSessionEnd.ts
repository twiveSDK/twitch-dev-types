import type {BaseBroadcasterInfo} from "../../../common";
import type {ChannelSharedChatSessionHost} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-end-event
 */
export interface ChannelSharedChatSessionEndEvent extends BaseBroadcasterInfo, ChannelSharedChatSessionHost {
    /**
     * The unique identifier for the shared chat session.
     */
    session_id: string;
}
