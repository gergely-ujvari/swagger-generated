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
    V2RoundTypes,
    V2RoundTypesFromJSON,
    V2RoundTypesToJSON,
} from '../models';

export interface V2RoundsGetRequest {
    seasonId: number;
    languageCode?: string;
}

export interface V2StagesIdRoundsGetRequest {
    id: string;
    languageCode?: string;
}

/**
 * 
 */
export class RoundsApi extends runtime.BaseAPI {

    /**
     * Get a list of rounds per season
     */
    async v2RoundsGetRaw(requestParameters: V2RoundsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2RoundTypes>> {
        if (requestParameters.seasonId === null || requestParameters.seasonId === undefined) {
            throw new runtime.RequiredError('seasonId','Required parameter requestParameters.seasonId was null or undefined when calling v2RoundsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.seasonId !== undefined) {
            queryParameters['season_id'] = requestParameters.seasonId;
        }

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/rounds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2RoundTypesFromJSON(jsonValue));
    }

    /**
     * Get a list of rounds per season
     */
    async v2RoundsGet(requestParameters: V2RoundsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2RoundTypes> {
        const response = await this.v2RoundsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of rounds per stage
     */
    async v2StagesIdRoundsGetRaw(requestParameters: V2StagesIdRoundsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2RoundTypes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2StagesIdRoundsGet.');
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
            path: `/v2/stages/{id}/rounds`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2RoundTypesFromJSON(jsonValue));
    }

    /**
     * Get a list of rounds per stage
     */
    async v2StagesIdRoundsGet(requestParameters: V2StagesIdRoundsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2RoundTypes> {
        const response = await this.v2StagesIdRoundsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
