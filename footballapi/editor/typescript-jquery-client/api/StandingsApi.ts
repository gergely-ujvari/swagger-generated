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


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class StandingsApi {
    protected basePath = 'https://false';
    public defaultHeaders: Array<string> = [];
    public defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings = null;
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration, defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        if (defaultExtraJQueryAjaxSettings) {
            this.defaultExtraJQueryAjaxSettings = defaultExtraJQueryAjaxSettings;
        }
    }

    private extendObj<T1, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Update a league standing table
     * @param standingEntries List of all entries for the standing
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     */
    public v2StandingsLeagueEntityIdPut(standingEntries: models.V2LeagueStandingInput, entity: 'season' | 'stage' | 'group', id: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/v2/standings/league/{entity}/{id}'.replace('{' + 'entity' + '}', encodeURIComponent(String(entity))).replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'standingEntries' is not null or undefined
        if (standingEntries === null || standingEntries === undefined) {
            throw new Error('Required parameter standingEntries was null or undefined when calling v2StandingsLeagueEntityIdPut.');
        }

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling v2StandingsLeagueEntityIdPut.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StandingsLeagueEntityIdPut.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (basicAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(standingEntries);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Attach standing rules to a league standing
     * @param standingRules list of rules for every rank
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     */
    public v2StandingsLeagueEntityIdRulesPut(standingRules: models.V2StandingEntryRuleWrapper, entity: 'season' | 'stage' | 'group', id: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/v2/standings/league/{entity}/{id}/rules'.replace('{' + 'entity' + '}', encodeURIComponent(String(entity))).replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'standingRules' is not null or undefined
        if (standingRules === null || standingRules === undefined) {
            throw new Error('Required parameter standingRules was null or undefined when calling v2StandingsLeagueEntityIdRulesPut.');
        }

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling v2StandingsLeagueEntityIdRulesPut.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StandingsLeagueEntityIdRulesPut.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (basicAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(standingRules);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Update a topscorer standing table
     * @param standingEntries List of all entries for the standing
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     */
    public v2StandingsTopscorerEntityIdPut(standingEntries: models.V2TopScorerStandingInput, entity: 'season' | 'stage' | 'group', id: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/v2/standings/topscorer/{entity}/{id}'.replace('{' + 'entity' + '}', encodeURIComponent(String(entity))).replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'standingEntries' is not null or undefined
        if (standingEntries === null || standingEntries === undefined) {
            throw new Error('Required parameter standingEntries was null or undefined when calling v2StandingsTopscorerEntityIdPut.');
        }

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling v2StandingsTopscorerEntityIdPut.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StandingsTopscorerEntityIdPut.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (basicAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(standingEntries);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

}
