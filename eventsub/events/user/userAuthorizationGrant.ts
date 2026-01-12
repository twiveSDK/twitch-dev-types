import type {BaseUserInfo} from "../common";

/**
 * @see https://dev.twitch.tv/docs/eventsub/eventsub-reference/#user-authorization-grant-event
 */
export interface UserAuthorizationGrantEvent extends BaseUserInfo {
    /**
     * The client_id of the application that was granted user access.
     */
    client_id: string;
}
