/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class LineupsApi {
    protected basePath = 'https://false';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Get lineup information. Includes players, formation and coach
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter lineups which have updates only after the specified time
     */
    public lineupsGet (acceptLanguage?: string, lastUpdate?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Lineup>> {
        const localVarPath = this.basePath + '/lineups';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (lastUpdate !== undefined) {
            queryParameters['last_update'] = lastUpdate;
        }

        headerParams['Accept-Language'] = acceptLanguage;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Get lineups by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdLineupsGet (id: string, languageCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.V2Lineup> {
        const localVarPath = this.basePath + '/v2/matches/{id}/lineups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsGet.');
        }

        if (languageCode !== undefined) {
            queryParameters['language_code'] = languageCode;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Update Lineup information
     * @param lineup Lineup information to save in persistance
     * @param id Unique identifier of the resource.
     */
    public v2MatchesIdLineupsPut (lineup: models.V2LineupInput, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.V2Lineup> {
        const localVarPath = this.basePath + '/v2/matches/{id}/lineups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lineup' is not null or undefined
        if (lineup === null || lineup === undefined) {
            throw new Error('Required parameter lineup was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: lineup,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
