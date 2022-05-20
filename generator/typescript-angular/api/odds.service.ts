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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Odd } from '../model/odd';
import { OddProvider } from '../model/oddProvider';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OddsService {

    protected basePath = 'https://false/';
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
     * Get available liveodds for an event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdLiveoddsGet.');
        }

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdLiveoddsGet.');
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/events/${encodeURIComponent(String(id))}/liveodds`,
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
     * Get a list of odds available in the system
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public eventsIdOddsGet(id: string, xOddClient: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public eventsIdOddsGet(id: string, xOddClient: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdOddsGet(id: string, xOddClient: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public eventsIdOddsGet(id: string, xOddClient: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdOddsGet.');
        }

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdOddsGet.');
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/events/${encodeURIComponent(String(id))}/odds`,
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
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdPregameoddsGet.');
        }

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdPregameoddsGet.');
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/events/${encodeURIComponent(String(id))}/pregameodds`,
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
     * Get a list of liveodds available in the system
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public liveoddsGet(xOddClient: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public liveoddsGet(xOddClient: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public liveoddsGet(xOddClient: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public liveoddsGet(xOddClient: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling liveoddsGet.');
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/liveodds`,
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
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oddProvidersGet(xOddClient: string, observe?: 'body', reportProgress?: boolean): Observable<Array<OddProvider>>;
    public oddProvidersGet(xOddClient: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<OddProvider>>>;
    public oddProvidersGet(xOddClient: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<OddProvider>>>;
    public oddProvidersGet(xOddClient: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling oddProvidersGet.');
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<OddProvider>>('get',`${this.basePath}/odd_providers`,
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
     * Returns a list of Odds
     * @param oddClient Odd client code
     * @param sportType Sport type filter
     * @param eventType Event type filter
     * @param fromEventStartTime Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format
     * @param toEventStartTime Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format
     * @param teamId Team ID
     * @param teamIds List for team IDs separated by commas.
     * @param eventOrder Order matching events for a specific client
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param oddsType Pregame or live odds selector.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oddsGet(oddClient: string, sportType: string, eventType: string, fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public oddsGet(oddClient: string, sportType: string, eventType: string, fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public oddsGet(oddClient: string, sportType: string, eventType: string, fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public oddsGet(oddClient: string, sportType: string, eventType: string, fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (oddClient === null || oddClient === undefined) {
            throw new Error('Required parameter oddClient was null or undefined when calling oddsGet.');
        }

        if (sportType === null || sportType === undefined) {
            throw new Error('Required parameter sportType was null or undefined when calling oddsGet.');
        }

        if (eventType === null || eventType === undefined) {
            throw new Error('Required parameter eventType was null or undefined when calling oddsGet.');
        }










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fromEventStartTime !== undefined && fromEventStartTime !== null) {
            queryParameters = queryParameters.set('from_event_start_time', <any>fromEventStartTime.toISOString());
        }
        if (toEventStartTime !== undefined && toEventStartTime !== null) {
            queryParameters = queryParameters.set('to_event_start_time', <any>toEventStartTime.toISOString());
        }
        if (oddClient !== undefined && oddClient !== null) {
            queryParameters = queryParameters.set('odd_client', <any>oddClient);
        }
        if (teamId !== undefined && teamId !== null) {
            queryParameters = queryParameters.set('team_id', <any>teamId);
        }
        if (teamIds !== undefined && teamIds !== null) {
            queryParameters = queryParameters.set('team_ids', <any>teamIds);
        }
        if (eventOrder !== undefined && eventOrder !== null) {
            queryParameters = queryParameters.set('event_order', <any>eventOrder);
        }
        if (sportType !== undefined && sportType !== null) {
            queryParameters = queryParameters.set('sport_type', <any>sportType);
        }
        if (matchIds !== undefined && matchIds !== null) {
            queryParameters = queryParameters.set('match_ids', <any>matchIds);
        }
        if (tournamentIds !== undefined && tournamentIds !== null) {
            queryParameters = queryParameters.set('tournament_ids', <any>tournamentIds);
        }
        if (seasonIds !== undefined && seasonIds !== null) {
            queryParameters = queryParameters.set('season_ids', <any>seasonIds);
        }
        if (eventType !== undefined && eventType !== null) {
            queryParameters = queryParameters.set('event_type', <any>eventType);
        }
        if (oddsType !== undefined && oddsType !== null) {
            queryParameters = queryParameters.set('odds_type', <any>oddsType);
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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/odds`,
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
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param fromTime Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @param toTime Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe?: 'body', reportProgress?: boolean): Observable<Array<Odd>>;
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Odd>>>;
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Odd>>>;
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling pregameoddsGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fromTime !== undefined && fromTime !== null) {
            queryParameters = queryParameters.set('from_time', <any>fromTime.toISOString());
        }
        if (toTime !== undefined && toTime !== null) {
            queryParameters = queryParameters.set('to_time', <any>toTime.toISOString());
        }

        let headers = this.defaultHeaders;
        if (xOddClient !== undefined && xOddClient !== null) {
            headers = headers.set('X-Odd-Client', String(xOddClient));
        }

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
        ];

        return this.httpClient.request<Array<Odd>>('get',`${this.basePath}/pregameodds`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
