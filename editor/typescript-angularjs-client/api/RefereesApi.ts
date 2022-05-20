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

export class RefereesApi {
    protected basePath = 'https://false';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * List referees with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param seasonIds Filter referees which have refereed matches in the specified CSV season_ids
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesGet (offset: number, limit: number, seasonIds?: string, languageCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefereePageDto> {
        const localVarPath = this.basePath + '/v2/referees';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'offset' is not null or undefined
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling v2RefereesGet.');
        }

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling v2RefereesGet.');
        }

        if (seasonIds !== undefined) {
            queryParameters['season_ids'] = seasonIds;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
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
     * Get referee by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesIdGet (id: string, languageCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefereeDto> {
        const localVarPath = this.basePath + '/v2/referees/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2RefereesIdGet.');
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
     * Update referee information
     * @param id Unique identifier of the resource.
     * @param referee Referee information to save in persistance
     */
    public v2RefereesIdPut (id: string, referee?: models.RefereeEditDto, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefereeDto> {
        const localVarPath = this.basePath + '/v2/referees/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2RefereesIdPut.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: referee,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Store a newly created referee in storage
     * @param referee 
     */
    public v2RefereesPost (referee?: models.RefereeEditDto, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RefereeDto> {
        const localVarPath = this.basePath + '/v2/referees';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: referee,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
