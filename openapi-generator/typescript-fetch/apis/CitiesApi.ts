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
    CityDto,
    CityDtoFromJSON,
    CityDtoToJSON,
    CityEditDto,
    CityEditDtoFromJSON,
    CityEditDtoToJSON,
    NotFoundError,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
} from '../models';

export interface V2CitiesIdPutRequest {
    id: string;
    city?: CityEditDto;
}

export interface V2CitiesPostRequest {
    city?: CityEditDto;
}

/**
 * 
 */
export class CitiesApi extends runtime.BaseAPI {

    /**
     * Update city information
     */
    async v2CitiesIdPutRaw(requestParameters: V2CitiesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CityDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling v2CitiesIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/cities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CityEditDtoToJSON(requestParameters.city),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CityDtoFromJSON(jsonValue));
    }

    /**
     * Update city information
     */
    async v2CitiesIdPut(requestParameters: V2CitiesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CityDto> {
        const response = await this.v2CitiesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Store a newly created city in storage
     */
    async v2CitiesPostRaw(requestParameters: V2CitiesPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CityDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/cities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CityEditDtoToJSON(requestParameters.city),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CityDtoFromJSON(jsonValue));
    }

    /**
     * Store a newly created city in storage
     */
    async v2CitiesPost(requestParameters: V2CitiesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CityDto> {
        const response = await this.v2CitiesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}