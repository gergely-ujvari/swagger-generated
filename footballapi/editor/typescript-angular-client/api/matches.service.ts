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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { LiveCommentaryOutputDto } from '../model/liveCommentaryOutputDto';
import { NotFoundError } from '../model/notFoundError';
import { V2Match } from '../model/v2Match';
import { V2MatchInput } from '../model/v2MatchInput';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MatchesService {

    protected basePath = 'https://false';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public matchesIdCommentaryGet(id: string, languageCode: string, observe?: 'body', reportProgress?: boolean): Observable<Array<LiveCommentaryOutputDto>>;
    public matchesIdCommentaryGet(id: string, languageCode: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<LiveCommentaryOutputDto>>>;
    public matchesIdCommentaryGet(id: string, languageCode: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<LiveCommentaryOutputDto>>>;
    public matchesIdCommentaryGet(id: string, languageCode: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling matchesIdCommentaryGet.');
        }

        if (languageCode === null || languageCode === undefined) {
            throw new Error('Required parameter languageCode was null or undefined when calling matchesIdCommentaryGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (languageCode !== undefined && languageCode !== null) {
            queryParameters = queryParameters.set('language_code', <any>languageCode);
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<LiveCommentaryOutputDto>>(`${this.basePath}/matches/${encodeURIComponent(String(id))}/commentary`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<V2Match>>;
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<V2Match>>>;
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<V2Match>>>;
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling v2MatchesGet.');
        }

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling v2MatchesGet.');
        }















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (tournamentIds) {
            tournamentIds.forEach((element) => {
                queryParameters = queryParameters.append('tournament_ids', <any>element);
            })
        }
        if (seasonIds) {
            seasonIds.forEach((element) => {
                queryParameters = queryParameters.append('season_ids', <any>element);
            })
        }
        if (stageIds) {
            stageIds.forEach((element) => {
                queryParameters = queryParameters.append('stage_ids', <any>element);
            })
        }
        if (groupIds) {
            groupIds.forEach((element) => {
                queryParameters = queryParameters.append('group_ids', <any>element);
            })
        }
        if (roundIds) {
            roundIds.forEach((element) => {
                queryParameters = queryParameters.append('round_ids', <any>element);
            })
        }
        if (roundFilter) {
            roundFilter.forEach((element) => {
                queryParameters = queryParameters.append('round_filter', <any>element);
            })
        }
        if (fromKickoffTime !== undefined && fromKickoffTime !== null) {
            queryParameters = queryParameters.set('from_kickoff_time', <any>fromKickoffTime.toISOString());
        }
        if (toKickoffTime !== undefined && toKickoffTime !== null) {
            queryParameters = queryParameters.set('to_kickoff_time', <any>toKickoffTime.toISOString());
        }
        if (teamIds) {
            teamIds.forEach((element) => {
                queryParameters = queryParameters.append('team_ids', <any>element);
            })
        }
        if (statusTypes) {
            statusTypes.forEach((element) => {
                queryParameters = queryParameters.append('status_types', <any>element);
            })
        }
        if (statusCodes) {
            statusCodes.forEach((element) => {
                queryParameters = queryParameters.append('status_codes', <any>element);
            })
        }
        if (refereeId !== undefined && refereeId !== null) {
            queryParameters = queryParameters.set('referee_id', <any>refereeId);
        }
        if (venueId !== undefined && venueId !== null) {
            queryParameters = queryParameters.set('venue_id', <any>venueId);
        }
        if (sortDirection !== undefined && sortDirection !== null) {
            queryParameters = queryParameters.set('sort_direction', <any>sortDirection);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<V2Match>>(`${this.basePath}/v2/matches`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesIdGet(id: string, languageCode?: string, observe?: 'body', reportProgress?: boolean): Observable<V2Match>;
    public v2MatchesIdGet(id: string, languageCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2Match>>;
    public v2MatchesIdGet(id: string, languageCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2Match>>;
    public v2MatchesIdGet(id: string, languageCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (languageCode !== undefined && languageCode !== null) {
            queryParameters = queryParameters.set('language_code', <any>languageCode);
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<V2Match>(`${this.basePath}/v2/matches/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe?: 'body', reportProgress?: boolean): Observable<V2Match>;
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2Match>>;
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2Match>>;
    public v2MatchesIdPut(id: string, match: V2MatchInput, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdPut.');
        }

        if (match === null || match === undefined) {
            throw new Error('Required parameter match was null or undefined when calling v2MatchesIdPut.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<V2Match>(`${this.basePath}/v2/matches/${encodeURIComponent(String(id))}`,
            match,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe?: 'body', reportProgress?: boolean): Observable<Array<V2Match>>;
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<V2Match>>>;
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<V2Match>>>;
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (matchIds) {
            matchIds.forEach((element) => {
                queryParameters = queryParameters.append('match_ids', <any>element);
            })
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (utcOffset !== undefined && utcOffset !== null) {
            queryParameters = queryParameters.set('utc_offset', <any>utcOffset);
        }
        if (tournamentGroup !== undefined && tournamentGroup !== null) {
            queryParameters = queryParameters.set('tournament_group', <any>tournamentGroup);
        }
        if (statusTypes) {
            statusTypes.forEach((element) => {
                queryParameters = queryParameters.append('status_types', <any>element);
            })
        }
        if (selectionFilter !== undefined && selectionFilter !== null) {
            queryParameters = queryParameters.set('selection_filter', <any>selectionFilter);
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<V2Match>>(`${this.basePath}/v2/matches/livescore`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param match Match information to save
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesPost(match: V2MatchInput, observe?: 'body', reportProgress?: boolean): Observable<V2Match>;
    public v2MatchesPost(match: V2MatchInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2Match>>;
    public v2MatchesPost(match: V2MatchInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2Match>>;
    public v2MatchesPost(match: V2MatchInput, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (match === null || match === undefined) {
            throw new Error('Required parameter match was null or undefined when calling v2MatchesPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<V2Match>(`${this.basePath}/v2/matches`,
            match,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
