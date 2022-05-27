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
    V2President,
    V2PresidentFromJSON,
    V2PresidentToJSON,
    V2PresidentInput,
    V2PresidentInputFromJSON,
    V2PresidentInputToJSON,
    V2PresidentUpdate,
    V2PresidentUpdateFromJSON,
    V2PresidentUpdateToJSON,
} from '../models';

export interface V2PresidentsIdPutRequest {
    id: string;
    president?: V2PresidentUpdate;
}

export interface V2PresidentsPostRequest {
    president?: V2PresidentInput;
}

/**
 * 
 */
export class PresidentsApi extends runtime.BaseAPI {

    /**
     * Update president information
     */
    async v2PresidentsIdPutRaw(requestParameters: V2PresidentsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2President>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2PresidentsIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/presidents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V2PresidentUpdateToJSON(requestParameters.president),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2PresidentFromJSON(jsonValue));
    }

    /**
     * Update president information
     */
    async v2PresidentsIdPut(requestParameters: V2PresidentsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2President> {
        const response = await this.v2PresidentsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Store a newly created president in storage
     */
    async v2PresidentsPostRaw(requestParameters: V2PresidentsPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<V2President>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/presidents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V2PresidentInputToJSON(requestParameters.president),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V2PresidentFromJSON(jsonValue));
    }

    /**
     * Store a newly created president in storage
     */
    async v2PresidentsPost(requestParameters: V2PresidentsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<V2President> {
        const response = await this.v2PresidentsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
