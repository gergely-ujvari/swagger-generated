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
    EventPlayerType,
    EventPlayerTypeFromJSON,
    EventPlayerTypeToJSON,
} from '../models';

export interface EventPlayerTypesGetRequest {
    acceptLanguage?: string;
}

/**
 * 
 */
export class EventPlayerTypeApi extends runtime.BaseAPI {

    /**
     * Get a list of available EventPlayerType objects in the system
     */
    async eventPlayerTypesGetRaw(requestParameters: EventPlayerTypesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<EventPlayerType>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/event_player_types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventPlayerTypeFromJSON(jsonValue));
    }

    /**
     * Get a list of available EventPlayerType objects in the system
     */
    async eventPlayerTypesGet(requestParameters: EventPlayerTypesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<EventPlayerType> {
        const response = await this.eventPlayerTypesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
