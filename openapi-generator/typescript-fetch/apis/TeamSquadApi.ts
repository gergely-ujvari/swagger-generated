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
    V2TeamSquad,
    V2TeamSquadFromJSON,
    V2TeamSquadToJSON,
    V2TeamSquadInput,
    V2TeamSquadInputFromJSON,
    V2TeamSquadInputToJSON,
} from '../models';

export interface V2TeamsIdSquadGetRequest {
    id: string;
    memberStatus?: V2TeamsIdSquadGetMemberStatusEnum;
    languageCode?: string;
}

export interface V2TeamsIdSquadPatchRequest {
    id: string;
    squadMembers: V2TeamSquadInput;
}

/**
 * 
 */
export class TeamSquadApi extends runtime.BaseAPI {

    /**
     * Get teams squad
     */
    async v2TeamsIdSquadGetRaw(requestParameters: V2TeamsIdSquadGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2TeamSquad>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2TeamsIdSquadGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.memberStatus !== undefined) {
            queryParameters['memberStatus'] = requestParameters.memberStatus;
        }

        if (requestParameters.languageCode !== undefined) {
            queryParameters['language_code'] = requestParameters.languageCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/teams/{id}/squad`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2TeamSquadFromJSON(jsonValue));
    }

    /**
     * Get teams squad
     */
    async v2TeamsIdSquadGet(requestParameters: V2TeamsIdSquadGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2TeamSquad> {
        const response = await this.v2TeamsIdSquadGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update TeamSquad members
     */
    async v2TeamsIdSquadPatchRaw(requestParameters: V2TeamsIdSquadPatchRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2TeamSquad>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2TeamsIdSquadPatch.');
        }

        if (requestParameters.squadMembers === null || requestParameters.squadMembers === undefined) {
            throw new runtime.RequiredError('squadMembers','Required parameter requestParameters.squadMembers was null or undefined when calling v2TeamsIdSquadPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/teams/{id}/squad`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V2TeamSquadInputToJSON(requestParameters.squadMembers),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2TeamSquadFromJSON(jsonValue));
    }

    /**
     * Update TeamSquad members
     */
    async v2TeamsIdSquadPatch(requestParameters: V2TeamsIdSquadPatchRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2TeamSquad> {
        const response = await this.v2TeamsIdSquadPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const V2TeamsIdSquadGetMemberStatusEnum = {
    All: 'ALL',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE'
} as const;
export type V2TeamsIdSquadGetMemberStatusEnum = typeof V2TeamsIdSquadGetMemberStatusEnum[keyof typeof V2TeamsIdSquadGetMemberStatusEnum];