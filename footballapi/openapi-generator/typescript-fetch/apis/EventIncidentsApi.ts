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
    EventIncident,
    EventIncidentFromJSON,
    EventIncidentToJSON,
} from '../models';

export interface EventIncidentsGetRequest {
    acceptLanguage?: string;
    lastUpdate?: Date;
}

/**
 * 
 */
export class EventIncidentsApi extends runtime.BaseAPI {

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     */
    async eventIncidentsGetRaw(requestParameters: EventIncidentsGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<EventIncident>>> {
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
            path: `/event_incidents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventIncidentFromJSON));
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     */
    async eventIncidentsGet(requestParameters: EventIncidentsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<EventIncident>> {
        const response = await this.eventIncidentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}