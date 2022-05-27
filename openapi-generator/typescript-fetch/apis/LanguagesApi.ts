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
    LanguageDto,
    LanguageDtoFromJSON,
    LanguageDtoToJSON,
} from '../models';

/**
 * 
 */
export class LanguagesApi extends runtime.BaseAPI {

    /**
     * Get all possible languages.
     */
    async v2LanguagesGetRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<LanguageDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v2/languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LanguageDtoFromJSON));
    }

    /**
     * Get all possible languages.
     */
    async v2LanguagesGet(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<LanguageDto>> {
        const response = await this.v2LanguagesGetRaw(initOverrides);
        return await response.value();
    }

}
