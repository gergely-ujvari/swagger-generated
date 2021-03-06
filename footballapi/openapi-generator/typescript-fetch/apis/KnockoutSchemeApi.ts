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
    V2KnockoutScheme,
    V2KnockoutSchemeFromJSON,
    V2KnockoutSchemeToJSON,
} from '../models';

export interface V2KnockoutSchemesStageIdGetRequest {
    stageId: string;
    languageCode?: string;
}

/**
 * 
 */
export class KnockoutSchemeApi extends runtime.BaseAPI {

    /**
     */
    async v2KnockoutSchemesStageIdGetRaw(requestParameters: V2KnockoutSchemesStageIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<V2KnockoutScheme>>> {
        if (requestParameters.stageId === null || requestParameters.stageId === undefined) {
            throw new runtime.RequiredError('stageId','Required parameter requestParameters.stageId was null or undefined when calling v2KnockoutSchemesStageIdGet.');
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
            path: `/v2/knockout-schemes/{stage_id}`.replace(`{${"stage_id"}}`, encodeURIComponent(String(requestParameters.stageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(V2KnockoutSchemeFromJSON));
    }

    /**
     */
    async v2KnockoutSchemesStageIdGet(requestParameters: V2KnockoutSchemesStageIdGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<V2KnockoutScheme>> {
        const response = await this.v2KnockoutSchemesStageIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
