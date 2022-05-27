/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    NotFoundError,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    Player,
    PlayerFromJSON,
    PlayerToJSON,
    PlayerDto,
    PlayerDtoFromJSON,
    PlayerDtoToJSON,
    PlayerEditDto,
    PlayerEditDtoFromJSON,
    PlayerEditDtoToJSON,
    PlayerPageDto,
    PlayerPageDtoFromJSON,
    PlayerPageDtoToJSON,
    PlayerProfile,
    PlayerProfileFromJSON,
    PlayerProfileToJSON,
    PlayerStatistics,
    PlayerStatisticsFromJSON,
    PlayerStatisticsToJSON,
    PlayerTeam,
    PlayerTeamFromJSON,
    PlayerTeamToJSON,
    V2ActiveClubsInput,
    V2ActiveClubsInputFromJSON,
    V2ActiveClubsInputToJSON,
    V2PlayerActiveClub,
    V2PlayerActiveClubFromJSON,
    V2PlayerActiveClubToJSON,
    V2PlayerProfile,
    V2PlayerProfileFromJSON,
    V2PlayerProfileToJSON,
} from '../models';

export interface PlayersGetRequest {
    name: string;
    acceptLanguage?: string;
    maxResults?: number;
    teamId?: number;
}

export interface PlayersIdGetRequest {
    id: string;
    acceptLanguage?: string;
    expand?: PlayersIdGetExpandEnum;
}

export interface PlayersIdStatisticsGetRequest {
    id: string;
    acceptLanguage?: string;
    type?: PlayersIdStatisticsGetTypeEnum;
    groupBy?: PlayersIdStatisticsGetGroupByEnum;
}

export interface PlayersIdTeamsGetRequest {
    id: string;
    acceptLanguage?: string;
}

export interface V2PlayersGetRequest {
    offset: number;
    limit: number;
    languageCode?: string;
}

export interface V2PlayersIdClubsActivePutRequest {
    id: string;
    clubs?: V2ActiveClubsInput;
}

export interface V2PlayersIdGetRequest {
    id: string;
    languageCode?: string;
}

export interface V2PlayersIdPutRequest {
    id: string;
    player: PlayerEditDto;
}

export interface V2PlayersPostRequest {
    player?: PlayerEditDto;
}

/**
 * 
 */
export class PlayersApi extends runtime.BaseAPI {

    /**
     * Search player list by parameters
     */
    async playersGetRaw(requestParameters: PlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Player>>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling playersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['max_results'] = requestParameters.maxResults;
        }

        if (requestParameters.teamId !== undefined) {
            queryParameters['team_id'] = requestParameters.teamId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/players`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlayerFromJSON));
    }

    /**
     * Search player list by parameters
     */
    async playersGet(requestParameters: PlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Player>> {
        const response = await this.playersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about a specific Player
     */
    async playersIdGetRaw(requestParameters: PlayersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PlayerProfile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling playersIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/players/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerProfileFromJSON(jsonValue));
    }

    /**
     * Get information about a specific Player
     */
    async playersIdGet(requestParameters: PlayersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PlayerProfile> {
        const response = await this.playersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns statistics throughout a Player\'s career
     */
    async playersIdStatisticsGetRaw(requestParameters: PlayersIdStatisticsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<PlayerStatistics>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling playersIdStatisticsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['group_by'] = requestParameters.groupBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/players/{id}/statistics`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlayerStatisticsFromJSON));
    }

    /**
     * Returns statistics throughout a Player\'s career
     */
    async playersIdStatisticsGet(requestParameters: PlayersIdStatisticsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<PlayerStatistics>> {
        const response = await this.playersIdStatisticsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the Teams in which a Player has participated during his career
     */
    async playersIdTeamsGetRaw(requestParameters: PlayersIdTeamsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<PlayerTeam>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling playersIdTeamsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/players/{id}/teams`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlayerTeamFromJSON));
    }

    /**
     * Get the Teams in which a Player has participated during his career
     */
    async playersIdTeamsGet(requestParameters: PlayersIdTeamsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<PlayerTeam>> {
        const response = await this.playersIdTeamsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search player list by parameters
     */
    async v2PlayersGetRaw(requestParameters: V2PlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PlayerPageDto>> {
        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling v2PlayersGet.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling v2PlayersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/players`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerPageDtoFromJSON(jsonValue));
    }

    /**
     * Search player list by parameters
     */
    async v2PlayersGet(requestParameters: V2PlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PlayerPageDto> {
        const response = await this.v2PlayersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the active clubs of a player
     */
    async v2PlayersIdClubsActivePutRaw(requestParameters: V2PlayersIdClubsActivePutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<V2PlayerActiveClub>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2PlayersIdClubsActivePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/players/{id}/clubs/active`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V2ActiveClubsInputToJSON(requestParameters.clubs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(V2PlayerActiveClubFromJSON));
    }

    /**
     * Update the active clubs of a player
     */
    async v2PlayersIdClubsActivePut(requestParameters: V2PlayersIdClubsActivePutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<V2PlayerActiveClub>> {
        const response = await this.v2PlayersIdClubsActivePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get player by id
     */
    async v2PlayersIdGetRaw(requestParameters: V2PlayersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2PlayerProfile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2PlayersIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/players/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2PlayerProfileFromJSON(jsonValue));
    }

    /**
     * Get player by id
     */
    async v2PlayersIdGet(requestParameters: V2PlayersIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2PlayerProfile> {
        const response = await this.v2PlayersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Player information
     */
    async v2PlayersIdPutRaw(requestParameters: V2PlayersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2PlayersIdPut.');
        }

        if (requestParameters.player === null || requestParameters.player === undefined) {
            throw new runtime.RequiredError('player','Required parameter requestParameters.player was null or undefined when calling v2PlayersIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/players/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PlayerEditDtoToJSON(requestParameters.player),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update Player information
     */
    async v2PlayersIdPut(requestParameters: V2PlayersIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.v2PlayersIdPutRaw(requestParameters, initOverrides);
    }

    /**
     * Store a newly created player in storage.
     */
    async v2PlayersPostRaw(requestParameters: V2PlayersPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PlayerDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/players`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlayerEditDtoToJSON(requestParameters.player),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerDtoFromJSON(jsonValue));
    }

    /**
     * Store a newly created player in storage.
     */
    async v2PlayersPost(requestParameters: V2PlayersPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PlayerDto> {
        const response = await this.v2PlayersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const PlayersIdGetExpandEnum = {
    Club: 'club',
    ClubcurrentLeague: 'club,current_league'
} as const;
export type PlayersIdGetExpandEnum = typeof PlayersIdGetExpandEnum[keyof typeof PlayersIdGetExpandEnum];
/**
 * @export
 */
export const PlayersIdStatisticsGetTypeEnum = {
    Club: 'club',
    National: 'national',
    League: 'league'
} as const;
export type PlayersIdStatisticsGetTypeEnum = typeof PlayersIdStatisticsGetTypeEnum[keyof typeof PlayersIdStatisticsGetTypeEnum];
/**
 * @export
 */
export const PlayersIdStatisticsGetGroupByEnum = {
    Tournament: 'tournament',
    Team: 'team'
} as const;
export type PlayersIdStatisticsGetGroupByEnum = typeof PlayersIdStatisticsGetGroupByEnum[keyof typeof PlayersIdStatisticsGetGroupByEnum];
