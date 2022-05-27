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
    OutputDto,
    OutputDtoFromJSON,
    OutputDtoToJSON,
    V2PlayerSeasonStatisticOutputCollection,
    V2PlayerSeasonStatisticOutputCollectionFromJSON,
    V2PlayerSeasonStatisticOutputCollectionToJSON,
    V2PlayerStatisticInput,
    V2PlayerStatisticInputFromJSON,
    V2PlayerStatisticInputToJSON,
    V2PlayerStatisticOutput,
    V2PlayerStatisticOutputFromJSON,
    V2PlayerStatisticOutputToJSON,
} from '../models';

export interface StatisticsPlayersGetRequest {
    languageCode: string;
    playerIds?: string;
    seasonIds?: string;
    teamId?: number;
}

export interface V2StatisticsPlayersMatchPutRequest {
    playerStatistics?: Array<V2PlayerStatisticInput>;
}

export interface V2StatisticsPlayersSeasonGetRequest {
    playerIds?: string;
    seasonIds?: string;
    teamId?: number;
    languageCode?: string;
}

/**
 * 
 */
export class PlayerStatisticApi extends runtime.BaseAPI {

    /**
     */
    async statisticsPlayersGetRaw(requestParameters: StatisticsPlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<OutputDto>>> {
        if (requestParameters.languageCode === null || requestParameters.languageCode === undefined) {
            throw new runtime.RequiredError('languageCode','Required parameter requestParameters.languageCode was null or undefined when calling statisticsPlayersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.playerIds !== undefined) {
            queryParameters['player_ids'] = requestParameters.playerIds;
        }

        if (requestParameters.seasonIds !== undefined) {
            queryParameters['season_ids'] = requestParameters.seasonIds;
        }

        if (requestParameters.teamId !== undefined) {
            queryParameters['team_id'] = requestParameters.teamId;
        }

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/statistics/players`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OutputDtoFromJSON));
    }

    /**
     */
    async statisticsPlayersGet(requestParameters: StatisticsPlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<OutputDto>> {
        const response = await this.statisticsPlayersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Bulk Upsert player statistics
     */
    async v2StatisticsPlayersMatchPutRaw(requestParameters: V2StatisticsPlayersMatchPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<V2PlayerStatisticOutput>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/statistics/players/match`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.playerStatistics.map(V2PlayerStatisticInputToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(V2PlayerStatisticOutputFromJSON));
    }

    /**
     * Bulk Upsert player statistics
     */
    async v2StatisticsPlayersMatchPut(requestParameters: V2StatisticsPlayersMatchPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<V2PlayerStatisticOutput>> {
        const response = await this.v2StatisticsPlayersMatchPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve player statistics, grouped by player and season
     */
    async v2StatisticsPlayersSeasonGetRaw(requestParameters: V2StatisticsPlayersSeasonGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<V2PlayerSeasonStatisticOutputCollection>>> {
        const queryParameters: any = {};

        if (requestParameters.playerIds !== undefined) {
            queryParameters['player_ids'] = requestParameters.playerIds;
        }

        if (requestParameters.seasonIds !== undefined) {
            queryParameters['season_ids'] = requestParameters.seasonIds;
        }

        if (requestParameters.teamId !== undefined) {
            queryParameters['team_id'] = requestParameters.teamId;
        }

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/statistics/players/season`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(V2PlayerSeasonStatisticOutputCollectionFromJSON));
    }

    /**
     * Retrieve player statistics, grouped by player and season
     */
    async v2StatisticsPlayersSeasonGet(requestParameters: V2StatisticsPlayersSeasonGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<V2PlayerSeasonStatisticOutputCollection>> {
        const response = await this.v2StatisticsPlayersSeasonGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}