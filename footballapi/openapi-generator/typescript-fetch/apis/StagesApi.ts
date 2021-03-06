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
    StageDto,
    StageDtoFromJSON,
    StageDtoToJSON,
    V2StageGroup,
    V2StageGroupFromJSON,
    V2StageGroupToJSON,
    V2StageGroupCollection,
    V2StageGroupCollectionFromJSON,
    V2StageGroupCollectionToJSON,
    V2StageTeamInput,
    V2StageTeamInputFromJSON,
    V2StageTeamInputToJSON,
} from '../models';

export interface StagesGetRequest {
    teamId?: number;
    tournamentIds?: string;
    acceptLanguage?: string;
}

export interface V2GroupsIdDeleteRequest {
    id: string;
}

export interface V2StagesIdGroupsGetRequest {
    id: string;
    languageCode?: string;
}

export interface V2StagesIdGroupsPostRequest {
    id: string;
    groups: Array<V2StageGroup>;
}

export interface V2StagesIdTeamsPutRequest {
    id: string;
    teamId: Array<V2StageTeamInput>;
}

/**
 * 
 */
export class StagesApi extends runtime.BaseAPI {

    /**
     * Listing for Stages resources
     */
    async stagesGetRaw(requestParameters: StagesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<StageDto>>> {
        const queryParameters: any = {};

        if (requestParameters.teamId !== undefined) {
            queryParameters['team_id'] = requestParameters.teamId;
        }

        if (requestParameters.tournamentIds !== undefined) {
            queryParameters['tournament_ids'] = requestParameters.tournamentIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/stages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StageDtoFromJSON));
    }

    /**
     * Listing for Stages resources
     */
    async stagesGet(requestParameters: StagesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<StageDto>> {
        const response = await this.stagesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently delete group
     */
    async v2GroupsIdDeleteRaw(requestParameters: V2GroupsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2GroupsIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently delete group
     */
    async v2GroupsIdDelete(requestParameters: V2GroupsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.v2GroupsIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * List all groups for specific stage
     */
    async v2StagesIdGroupsGetRaw(requestParameters: V2StagesIdGroupsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2StageGroupCollection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2StagesIdGroupsGet.');
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
            path: `/v2/stages/{id}/groups`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2StageGroupCollectionFromJSON(jsonValue));
    }

    /**
     * List all groups for specific stage
     */
    async v2StagesIdGroupsGet(requestParameters: V2StagesIdGroupsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2StageGroupCollection> {
        const response = await this.v2StagesIdGroupsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update multiple groups
     */
    async v2StagesIdGroupsPostRaw(requestParameters: V2StagesIdGroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2StageGroupCollection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2StagesIdGroupsPost.');
        }

        if (requestParameters.groups === null || requestParameters.groups === undefined) {
            throw new runtime.RequiredError('groups','Required parameter requestParameters.groups was null or undefined when calling v2StagesIdGroupsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/stages/{id}/groups`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.groups.map(V2StageGroupToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2StageGroupCollectionFromJSON(jsonValue));
    }

    /**
     * Create or update multiple groups
     */
    async v2StagesIdGroupsPost(requestParameters: V2StagesIdGroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2StageGroupCollection> {
        const response = await this.v2StagesIdGroupsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Replace teams in stage
     */
    async v2StagesIdTeamsPutRaw(requestParameters: V2StagesIdTeamsPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2StagesIdTeamsPut.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling v2StagesIdTeamsPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/stages/{id}/teams`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.teamId.map(V2StageTeamInputToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Replace teams in stage
     */
    async v2StagesIdTeamsPut(requestParameters: V2StagesIdTeamsPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.v2StagesIdTeamsPutRaw(requestParameters, initOverrides);
    }

}
