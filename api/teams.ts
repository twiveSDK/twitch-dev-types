import type { APIResponse } from "./common";

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-teams
 */
export interface APIBaseTeam {
    /**
     * A URL to the team’s background image.
     */
    background_image_url: string;
    /**
     * A URL to the team’s banner.
     */
    banner: string;
    /**
     * 	The UTC date and time (in RFC3339 format) of when the team was created.
     */
    created_at: string;
    /**
     * The UTC date and time (in RFC3339 format) of the last time the team was updated.
     */
    updated_at: string;
    /**
     * The team’s description.
     *
     * @remarks The description may contain formatting such as Markdown, HTML, newline (\n) characters, etc.
     */
    info: string;
    /**
     * A URL to a thumbnail image of the team’s logo.
     */
    thumbnail_url: string;
    /**
     * The team’s name.
     */
    team_name: string;
    /**
     * The team’s display name.
     */
    team_display_name: string;
    /**
     * An ID that identifies the team.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-teams
 */
export interface APIChannelTeam extends APIBaseTeam {
    /**
     * An ID that identifies the broadcaster.
     */
    broadcaster_id: string;
    /**
     * The broadcaster’s login name.
     */
    broadcaster_login: string;
    /**
     * The broadcaster’s display name.
     */
    broadcaster_name: string;

}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-teams
 */
export interface RESTGetChannelTeamsRequestParams {
    /**
     * The ID of the broadcaster whose teams you want to get.
     */
    broadcaster_id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-channel-teams
 */
export interface RESTGetChannelTeamsResponse extends APIResponse<APIChannelTeam> {}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-teams
 */
export interface APITeamMember {
    /**
     * An ID that identifies the team member.
     */
    user_id: string;
    /**
     * The team member’s login name.
     */
    user_login: string;
    /**
     * The team member’s display name.
     */
    user_name: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-teams
 */
export interface APITeam extends APIBaseTeam {
    users: APITeamMember[];
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-teams
 */
export interface RESTGetTeamsRequestParams {
    /**
     * The name of the team to get.
     *
     * @remarks This parameter and the *id* parameter are mutually exclusive; you must specify the team’s name or ID
     * but not both.
     */
    name: string;
    /**
     * The ID of the team to get.
     *
     * @remarks This parameter and the *name* parameter are mutually exclusive; you must specify the team’s name or ID
     * but not both.
     */
    id: string;
}

/**
 * @see https://dev.twitch.tv/docs/api/reference/#get-teams
 */
export interface RESTGetTeamsResponse extends APIResponse<APITeam> {}
