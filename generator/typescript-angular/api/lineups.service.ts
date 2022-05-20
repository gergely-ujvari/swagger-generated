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

import { Lineup } from '../model/lineup';
import { NotFoundError } from '../model/notFoundError';
import { V2Lineup } from '../model/v2Lineup';
import { V2LineupInput } from '../model/v2LineupInput';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LineupsService {

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
     * Get lineup information. Includes players, formation and coach
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter lineups which have updates only after the specified time
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'body', reportProgress?: boolean): Observable<Array<Lineup>>;
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Lineup>>>;
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Lineup>>>;
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lastUpdate !== undefined && lastUpdate !== null) {
            queryParameters = queryParameters.set('last_update', <any>lastUpdate.toISOString());
        }

        let headers = this.defaultHeaders;
        if (acceptLanguage !== undefined && acceptLanguage !== null) {
            headers = headers.set('Accept-Language', String(acceptLanguage));
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

        return this.httpClient.request<Array<Lineup>>('get',`${this.basePath}/lineups`,
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
     * Get lineups by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe?: 'body', reportProgress?: boolean): Observable<V2Lineup>;
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2Lineup>>;
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2Lineup>>;
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsGet.');
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
        ];

        return this.httpClient.request<V2Lineup>('get',`${this.basePath}/v2/matches/${encodeURIComponent(String(id))}/lineups`,
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
     * Update Lineup information
     * @param body Lineup information to save in persistance
     * @param id Unique identifier of the resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2MatchesIdLineupsPut(body: V2LineupInput, id: string, observe?: 'body', reportProgress?: boolean): Observable<V2Lineup>;
    public v2MatchesIdLineupsPut(body: V2LineupInput, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2Lineup>>;
    public v2MatchesIdLineupsPut(body: V2LineupInput, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2Lineup>>;
    public v2MatchesIdLineupsPut(body: V2LineupInput, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
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

        return this.httpClient.request<V2Lineup>('put',`${this.basePath}/v2/matches/${encodeURIComponent(String(id))}/lineups`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}