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
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from '../IHttpClient';
import { inject, injectable } from 'inversify';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { Headers } from '../Headers';
import HttpResponse from '../HttpResponse';

import { LiveCommentaryOutputDto } from '../model/liveCommentaryOutputDto';
import { NotFoundError } from '../model/notFoundError';
import { V2Match } from '../model/v2Match';
import { V2MatchInput } from '../model/v2MatchInput';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class MatchesService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     
     */
    public matchesIdCommentaryGet(id: string, languageCode: string, observe?: 'body', headers?: Headers): Observable<Array<LiveCommentaryOutputDto>>;
    public matchesIdCommentaryGet(id: string, languageCode: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<LiveCommentaryOutputDto>>>;
    public matchesIdCommentaryGet(id: string, languageCode: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling matchesIdCommentaryGet.');
        }

        if (!languageCode){
            throw new Error('Required parameter languageCode was null or undefined when calling matchesIdCommentaryGet.');
        }

        let queryParameters: string[] = [];
        if (languageCode !== undefined) {
            queryParameters.push('languageCode='+encodeURIComponent(String(languageCode)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<LiveCommentaryOutputDto>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/matches/${encodeURIComponent(String(id))}/commentary?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
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
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe?: 'body', headers?: Headers): Observable<Array<V2Match>>;
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<V2Match>>>;
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!limit){
            throw new Error('Required parameter limit was null or undefined when calling v2MatchesGet.');
        }

        if (!offset){
            throw new Error('Required parameter offset was null or undefined when calling v2MatchesGet.');
        }

        let queryParameters: string[] = [];
        if (tournamentIds) {
            tournamentIds.forEach((element) => {
                queryParameters.push('tournamentIds='+encodeURIComponent(String(tournamentIds)));
            })
        }
        if (seasonIds) {
            seasonIds.forEach((element) => {
                queryParameters.push('seasonIds='+encodeURIComponent(String(seasonIds)));
            })
        }
        if (stageIds) {
            stageIds.forEach((element) => {
                queryParameters.push('stageIds='+encodeURIComponent(String(stageIds)));
            })
        }
        if (groupIds) {
            groupIds.forEach((element) => {
                queryParameters.push('groupIds='+encodeURIComponent(String(groupIds)));
            })
        }
        if (roundIds) {
            roundIds.forEach((element) => {
                queryParameters.push('roundIds='+encodeURIComponent(String(roundIds)));
            })
        }
        if (roundFilter) {
            roundFilter.forEach((element) => {
                queryParameters.push('roundFilter='+encodeURIComponent(String(roundFilter)));
            })
        }
        if (fromKickoffTime !== undefined) {
           queryParameters.push('fromKickoffTime='+encodeURIComponent(<any>fromKickoffTime.toISOString()));
        }
        if (toKickoffTime !== undefined) {
           queryParameters.push('toKickoffTime='+encodeURIComponent(<any>toKickoffTime.toISOString()));
        }
        if (teamIds) {
            teamIds.forEach((element) => {
                queryParameters.push('teamIds='+encodeURIComponent(String(teamIds)));
            })
        }
        if (statusTypes) {
            statusTypes.forEach((element) => {
                queryParameters.push('statusTypes='+encodeURIComponent(String(statusTypes)));
            })
        }
        if (statusCodes) {
            statusCodes.forEach((element) => {
                queryParameters.push('statusCodes='+encodeURIComponent(String(statusCodes)));
            })
        }
        if (refereeId !== undefined) {
            queryParameters.push('refereeId='+encodeURIComponent(String(refereeId)));
        }
        if (venueId !== undefined) {
            queryParameters.push('venueId='+encodeURIComponent(String(venueId)));
        }
        if (sortDirection !== undefined) {
            queryParameters.push('sortDirection='+encodeURIComponent(String(sortDirection)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit='+encodeURIComponent(String(limit)));
        }
        if (offset !== undefined) {
            queryParameters.push('offset='+encodeURIComponent(String(offset)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<V2Match>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/matches?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * 
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     
     */
    public v2MatchesIdGet(id: string, languageCode?: string, observe?: 'body', headers?: Headers): Observable<V2Match>;
    public v2MatchesIdGet(id: string, languageCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2Match>>;
    public v2MatchesIdGet(id: string, languageCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdGet.');
        }

        let queryParameters: string[] = [];
        if (languageCode !== undefined) {
            queryParameters.push('languageCode='+encodeURIComponent(String(languageCode)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<V2Match>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/matches/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * 
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     
     */
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe?: 'body', headers?: Headers): Observable<V2Match>;
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2Match>>;
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdPut.');
        }

        if (!match){
            throw new Error('Required parameter match was null or undefined when calling v2MatchesIdPut.');
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2Match>> = this.httpClient.put(`${this.APIConfiguration.basePath}/v2/matches/${encodeURIComponent(String(id))}`, match as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of matches
     * @param matchIds Filter matches by their IDs
     * @param date Filter matches by the date when they were played, format is ISO 8601
     * @param utcOffset Filter matches by date and UTC offset, allowed value range: [-12,14]
     * @param tournamentGroup Filter matches by a tournament group code
     * @param statusTypes Filter matches by status types
     * @param selectionFilter Fetch selected matches for specific date and tournament_group
     
     */
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe?: 'body', headers?: Headers): Observable<Array<V2Match>>;
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<V2Match>>>;
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (matchIds) {
            matchIds.forEach((element) => {
                queryParameters.push('matchIds='+encodeURIComponent(String(matchIds)));
            })
        }
        if (date !== undefined) {
            queryParameters.push('date='+encodeURIComponent(String(date)));
        }
        if (utcOffset !== undefined) {
            queryParameters.push('utcOffset='+encodeURIComponent(String(utcOffset)));
        }
        if (tournamentGroup !== undefined) {
            queryParameters.push('tournamentGroup='+encodeURIComponent(String(tournamentGroup)));
        }
        if (statusTypes) {
            statusTypes.forEach((element) => {
                queryParameters.push('statusTypes='+encodeURIComponent(String(statusTypes)));
            })
        }
        if (selectionFilter !== undefined) {
            queryParameters.push('selectionFilter='+encodeURIComponent(String(selectionFilter)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<V2Match>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/matches/livescore?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * 
     * @param match Match information to save
     
     */
    public v2MatchesPost(match: V2MatchInput, observe?: 'body', headers?: Headers): Observable<V2Match>;
    public v2MatchesPost(match: V2MatchInput, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2Match>>;
    public v2MatchesPost(match: V2MatchInput, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!match){
            throw new Error('Required parameter match was null or undefined when calling v2MatchesPost.');
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2Match>> = this.httpClient.post(`${this.APIConfiguration.basePath}/v2/matches`, match as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
