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

export class MatchesApi {
    protected basePath = 'https://false';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     */
    public matchesIdCommentaryGet (id: string, languageCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.LiveCommentaryOutputDto>> {
        const localVarPath = this.basePath + '/matches/{id}/commentary'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling matchesIdCommentaryGet.');
        }

        // verify required parameter 'languageCode' is not null or undefined
        if (languageCode === null || languageCode === undefined) {
            throw new Error('Required parameter languageCode was null or undefined when calling matchesIdCommentaryGet.');
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
     * Get a list of matches
     * @param limit Select an upper limit for the matches that would be returned
     * @param offset Select an offset for the matches that would be returned
     * @param tournamentIds Filter matches, which have been played as part of the listed tournaments
     * @param seasonIds Filter matches, which have been played as part of the listed tournament seasons
     * @param stageIds Filter matches, which have been played as part of the listed tournament stages
     * @param groupIds Filter matches, which have been played as part of the listed tournament groups
     * @param roundIds Filter matches, which have been played as part of the listed tournament rounds
     * @param roundFilter Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
     * @param fromKickoffTime Filter matches, which have a start_time after the specified date, format is ISO 8601
     * @param toKickoffTime Filter matches, which have a start_time before the specified date, format is ISO 8601
     * @param teamIds Filter matches by teams which have taken part in them
     * @param statusTypes Filter matches by their status types
     * @param statusCodes Filter matches by their status codes
     * @param refereeId Filter matches by the referee who has taken part in them
     * @param venueId Filter matches by the venue that has hosted them
     * @param sortDirection Sort matches in asc|desc order by start_time
     */
    public v2MatchesGet (limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.V2Match>> {
        const localVarPath = this.basePath + '/v2/matches';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling v2MatchesGet.');
        }

        // verify required parameter 'offset' is not null or undefined
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling v2MatchesGet.');
        }

        if (tournamentIds !== undefined) {
            queryParameters['tournament_ids'] = tournamentIds;
        }

        if (seasonIds !== undefined) {
            queryParameters['season_ids'] = seasonIds;
        }

        if (stageIds !== undefined) {
            queryParameters['stage_ids'] = stageIds;
        }

        if (groupIds !== undefined) {
            queryParameters['group_ids'] = groupIds;
        }

        if (roundIds !== undefined) {
            queryParameters['round_ids'] = roundIds;
        }

        if (roundFilter !== undefined) {
            queryParameters['round_filter'] = roundFilter;
        }

        if (fromKickoffTime !== undefined) {
            queryParameters['from_kickoff_time'] = fromKickoffTime;
        }

        if (toKickoffTime !== undefined) {
            queryParameters['to_kickoff_time'] = toKickoffTime;
        }

        if (teamIds !== undefined) {
            queryParameters['team_ids'] = teamIds;
        }

        if (statusTypes !== undefined) {
            queryParameters['status_types'] = statusTypes;
        }

        if (statusCodes !== undefined) {
            queryParameters['status_codes'] = statusCodes;
        }

        if (refereeId !== undefined) {
            queryParameters['referee_id'] = refereeId;
        }

        if (venueId !== undefined) {
            queryParameters['venue_id'] = venueId;
        }

        if (sortDirection !== undefined) {
            queryParameters['sort_direction'] = sortDirection;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
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
     * 
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdGet (id: string, languageCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.V2Match> {
        const localVarPath = this.basePath + '/v2/matches/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdGet.');
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
     * 
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     */
    public v2MatchesIdPut (id: string, match: models.V2MatchInput, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.V2Match> {
        const localVarPath = this.basePath + '/v2/matches/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdPut.');
        }

        // verify required parameter 'match' is not null or undefined
        if (match === null || match === undefined) {
            throw new Error('Required parameter match was null or undefined when calling v2MatchesIdPut.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: match,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Get a list of matches
     * @param matchIds Filter matches by their IDs
     * @param date Filter matches by the date when they were played, format is ISO 8601
     * @param utcOffset Filter matches by date and UTC offset, allowed value range: [-12,14]
     * @param tournamentGroup Filter matches by a tournament group code
     * @param statusTypes Filter matches by status types
     * @param selectionFilter Fetch selected matches for specific date and tournament_group
     */
    public v2MatchesLivescoreGet (matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: models.'ENABLED' | 'DISABLED', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.V2Match>> {
        const localVarPath = this.basePath + '/v2/matches/livescore';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (matchIds !== undefined) {
            queryParameters['match_ids'] = matchIds;
        }

        if (date !== undefined) {
            queryParameters['date'] = date;
        }

        if (utcOffset !== undefined) {
            queryParameters['utc_offset'] = utcOffset;
        }

        if (tournamentGroup !== undefined) {
            queryParameters['tournament_group'] = tournamentGroup;
        }

        if (statusTypes !== undefined) {
            queryParameters['status_types'] = statusTypes;
        }

        if (selectionFilter !== undefined) {
            queryParameters['selection_filter'] = selectionFilter;
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
     * 
     * @param match Match information to save
     */
    public v2MatchesPost (match: models.V2MatchInput, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.V2Match> {
        const localVarPath = this.basePath + '/v2/matches';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'match' is not null or undefined
        if (match === null || match === undefined) {
            throw new Error('Required parameter match was null or undefined when calling v2MatchesPost.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: match,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}