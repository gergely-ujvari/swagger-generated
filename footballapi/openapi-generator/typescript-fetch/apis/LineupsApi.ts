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
    Lineup,
    LineupFromJSON,
    LineupToJSON,
    NotFoundError,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    V2Lineup,
    V2LineupFromJSON,
    V2LineupToJSON,
    V2LineupInput,
    V2LineupInputFromJSON,
    V2LineupInputToJSON,
} from '../models';

export interface LineupsGetRequest {
    acceptLanguage?: string;
    lastUpdate?: Date;
}

export interface V2MatchesIdLineupsGetRequest {
    id: string;
    languageCode?: string;
}

export interface V2MatchesIdLineupsPutRequest {
    id: string;
    lineup: V2LineupInput;
}

/**
 * 
 */
export class LineupsApi extends runtime.BaseAPI {

    /**
     * Get lineup information. Includes players, formation and coach
     */
    async lineupsGetRaw(requestParameters: LineupsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Lineup>>> {
        const queryParameters: any = {};

        if (requestParameters.lastUpdate !== undefined) {
            queryParameters['last_update'] = (requestParameters.lastUpdate as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/lineups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LineupFromJSON));
    }

    /**
     * Get lineup information. Includes players, formation and coach
     */
    async lineupsGet(requestParameters: LineupsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Lineup>> {
        const response = await this.lineupsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get lineups by match id
     */
    async v2MatchesIdLineupsGetRaw(requestParameters: V2MatchesIdLineupsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2Lineup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2MatchesIdLineupsGet.');
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
            path: `/v2/matches/{id}/lineups`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2LineupFromJSON(jsonValue));
    }

    /**
     * Get lineups by match id
     */
    async v2MatchesIdLineupsGet(requestParameters: V2MatchesIdLineupsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2Lineup> {
        const response = await this.v2MatchesIdLineupsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Lineup information
     */
    async v2MatchesIdLineupsPutRaw(requestParameters: V2MatchesIdLineupsPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2Lineup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        if (requestParameters.lineup === null || requestParameters.lineup === undefined) {
            throw new runtime.RequiredError('lineup','Required parameter requestParameters.lineup was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/matches/{id}/lineups`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V2LineupInputToJSON(requestParameters.lineup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2LineupFromJSON(jsonValue));
    }

    /**
     * Update Lineup information
     */
    async v2MatchesIdLineupsPut(requestParameters: V2MatchesIdLineupsPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2Lineup> {
        const response = await this.v2MatchesIdLineupsPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
