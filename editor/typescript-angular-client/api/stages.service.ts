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

import { NotFoundError } from '../model/notFoundError';
import { StageDto } from '../model/stageDto';
import { V2StageGroup } from '../model/v2StageGroup';
import { V2StageGroupCollection } from '../model/v2StageGroupCollection';
import { V2StageTeamInput } from '../model/v2StageTeamInput';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class StagesService {

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
     * Listing for Stages resources
     * @param teamId Filter stages by a team which is participating in the stage
     * @param tournamentIds CSV list of tournament.id values to filter stages
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<StageDto>>;
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<StageDto>>>;
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<StageDto>>>;
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (teamId !== undefined && teamId !== null) {
            queryParameters = queryParameters.set('team_id', <any>teamId);
        }
        if (tournamentIds !== undefined && tournamentIds !== null) {
            queryParameters = queryParameters.set('tournament_ids', <any>tournamentIds);
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
            'application/json'
        ];

        return this.httpClient.get<Array<StageDto>>(`${this.basePath}/stages`,
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
     * Permanently delete group
     * @param id Unique identifier of the resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2GroupsIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v2GroupsIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v2GroupsIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v2GroupsIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2GroupsIdDelete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/v2/groups/${encodeURIComponent(String(id))}`,
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
     * List all groups for specific stage
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2StagesIdGroupsGet(id: string, languageCode?: string, observe?: 'body', reportProgress?: boolean): Observable<V2StageGroupCollection>;
    public v2StagesIdGroupsGet(id: string, languageCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2StageGroupCollection>>;
    public v2StagesIdGroupsGet(id: string, languageCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2StageGroupCollection>>;
    public v2StagesIdGroupsGet(id: string, languageCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StagesIdGroupsGet.');
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

        return this.httpClient.get<V2StageGroupCollection>(`${this.basePath}/v2/stages/${encodeURIComponent(String(id))}/groups`,
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
     * Create or update multiple groups
     * @param groups List of groups to be updated or created
     * @param id Unique identifier of the resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2StagesIdGroupsPost(groups: Array<V2StageGroup>, id: string, observe?: 'body', reportProgress?: boolean): Observable<V2StageGroupCollection>;
    public v2StagesIdGroupsPost(groups: Array<V2StageGroup>, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<V2StageGroupCollection>>;
    public v2StagesIdGroupsPost(groups: Array<V2StageGroup>, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<V2StageGroupCollection>>;
    public v2StagesIdGroupsPost(groups: Array<V2StageGroup>, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (groups === null || groups === undefined) {
            throw new Error('Required parameter groups was null or undefined when calling v2StagesIdGroupsPost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StagesIdGroupsPost.');
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

        return this.httpClient.post<V2StageGroupCollection>(`${this.basePath}/v2/stages/${encodeURIComponent(String(id))}/groups`,
            groups,
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
     * Replace teams in stage
     * @param id Unique identifier of the resource.
     * @param teamId List of team ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v2StagesIdTeamsPut.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling v2StagesIdTeamsPut.');
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

        return this.httpClient.put<any>(`${this.basePath}/v2/stages/${encodeURIComponent(String(id))}/teams`,
            teamId,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
