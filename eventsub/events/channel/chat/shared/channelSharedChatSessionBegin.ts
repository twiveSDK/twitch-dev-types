import type {BaseBroadcasterInfo} from "../../../common";
import type {ChannelSharedChatSessionHost} from "./common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#channel-shared-chat-session-begin-event
 */
export interface ChannelSharedChatSessionBeginEvent extends BaseBroadcasterInfo, ChannelSharedChatSessionHost {
    /**
     * The unique identifier for the shared chat session.
     */
    session_id: string;
    /**
     * The list of participants in the session.
     */
    participants: BaseBroadcasterInfo[];
}
