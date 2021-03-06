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

import { CardlistStandingData } from '../model/cardlistStandingData';
import { Event } from '../model/event';
import { EventsByDate } from '../model/eventsByDate';
import { LeagueStandingData } from '../model/leagueStandingData';
import { NotFoundError } from '../model/notFoundError';
import { PartialTeam } from '../model/partialTeam';
import { Round } from '../model/round';
import { StageGroupWithStandingTournamentSeasonStage } from '../model/stageGroupWithStandingTournamentSeasonStage';
import { TopscorerStandingData } from '../model/topscorerStandingData';
import { Tournament } from '../model/tournament';
import { TournamentSeason } from '../model/tournamentSeason';
import { TournamentSeasonStage } from '../model/tournamentSeasonStage';
import { TournamentSeasonStageWithStandingGroups } from '../model/tournamentSeasonStageWithStandingGroups';
import { TournamentSeasonWithStages } from '../model/tournamentSeasonWithStages';
import { TournamentWithSeasons } from '../model/tournamentWithSeasons';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class TournamentsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get a list of available Tournament resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param countryId Get Tournaments from a specific Country.id
     * @param clientOrder Get Tournaments ordered for a specific client
     * @param expandClientSortorder Include extra information with Tournament response
     
     */
    public tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', observe?: 'body', headers?: Headers): Observable<Array<Tournament>>;
    public tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Tournament>>>;
    public tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (countryId !== undefined) {
            queryParameters.push('countryId='+encodeURIComponent(String(countryId)));
        }
        if (clientOrder !== undefined) {
            queryParameters.push('clientOrder='+encodeURIComponent(String(clientOrder)));
        }
        if (expandClientSortorder !== undefined) {
            queryParameters.push('expandClientSortorder='+encodeURIComponent(String(expandClientSortorder)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Tournament>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * 
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsIdGet(id: string, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<TournamentWithSeasons>;
    public tournamentsIdGet(id: string, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<TournamentWithSeasons>>;
    public tournamentsIdGet(id: string, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsIdGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TournamentWithSeasons>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/${encodeURIComponent(String(id))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of seasons for a given Tournament id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<TournamentSeason>>;
    public tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TournamentSeason>>>;
    public tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsIdSeasonsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<TournamentSeason>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/${encodeURIComponent(String(id))}/seasons` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param id Unique identifier of the Tournament resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<TournamentSeasonWithStages>;
    public tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<TournamentSeasonWithStages>>;
    public tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsIdSeasonsLatestGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TournamentSeasonWithStages>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/${encodeURIComponent(String(id))}/seasons/latest` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<CardlistStandingData>>;
    public tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<CardlistStandingData>>>;
    public tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsIdCardlistGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<CardlistStandingData>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/${encodeURIComponent(String(id))}/cardlist` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of Events, for a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Whether to group events by date
     
     */
    public tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsIdEventsGet.');
        }

        let queryParameters: string[] = [];
        if (groupBy !== undefined) {
            queryParameters.push('groupBy='+encodeURIComponent(String(groupBy)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/${encodeURIComponent(String(id))}/events?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get information for a given TournamentSeason resource id.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<TournamentSeasonWithStages>;
    public tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<TournamentSeasonWithStages>>;
    public tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsIdGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TournamentSeasonWithStages>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/${encodeURIComponent(String(id))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<PartialTeam>>;
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PartialTeam>>>;
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsIdTeamsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<PartialTeam>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/${encodeURIComponent(String(id))}/teams` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<TopscorerStandingData>>;
    public tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TopscorerStandingData>>>;
    public tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsIdTopscorerGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<TopscorerStandingData>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/${encodeURIComponent(String(id))}/topscorer` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get all currently active tournament season stages
     
     */
    public tournamentsSeasonsStagesActiveGet(observe?: 'body', headers?: Headers): Observable<Array<TournamentSeasonStage>>;
    public tournamentsSeasonsStagesActiveGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TournamentSeasonStage>>>;
    public tournamentsSeasonsStagesActiveGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<TournamentSeasonStage>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/active` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get information for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<StageGroupWithStandingTournamentSeasonStage>;
    public tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<StageGroupWithStandingTournamentSeasonStage>>;
    public tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesGroupsIdGet.');
        }

        let queryParameters: string[] = [];
        if (expand !== undefined) {
            queryParameters.push('expand='+encodeURIComponent(String(expand)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<StageGroupWithStandingTournamentSeasonStage>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/groups/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get Standing for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<LeagueStandingData>>;
    public tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<LeagueStandingData>>>;
    public tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesGroupsIdStandingGet.');
        }

        let queryParameters: string[] = [];
        if (expand !== undefined) {
            queryParameters.push('expand='+encodeURIComponent(String(expand)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<LeagueStandingData>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/groups/${encodeURIComponent(String(id))}/standing?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<EventsByDate>>;
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<EventsByDate>>>;
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdEventsGet.');
        }

        let queryParameters: string[] = [];
        if (round !== undefined) {
            queryParameters.push('round='+encodeURIComponent(String(round)));
        }
        if (sortDirection !== undefined) {
            queryParameters.push('sortDirection='+encodeURIComponent(String(sortDirection)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<EventsByDate>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/${encodeURIComponent(String(id))}/events?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get information for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<TournamentSeasonStageWithStandingGroups>;
    public tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<TournamentSeasonStageWithStandingGroups>>;
    public tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdGet.');
        }

        let queryParameters: string[] = [];
        if (expand !== undefined) {
            queryParameters.push('expand='+encodeURIComponent(String(expand)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TournamentSeasonStageWithStandingGroups>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify what additional information to include with the response
     
     */
    public tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', observe?: 'body', headers?: Headers): Observable<Array<Round>>;
    public tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Round>>>;
    public tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdRoundsGet.');
        }

        let queryParameters: string[] = [];
        if (expand !== undefined) {
            queryParameters.push('expand='+encodeURIComponent(String(expand)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Round>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/${encodeURIComponent(String(id))}/rounds?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get Standing for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<LeagueStandingData>>;
    public tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<LeagueStandingData>>>;
    public tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdStandingGet.');
        }

        let queryParameters: string[] = [];
        if (expand !== undefined) {
            queryParameters.push('expand='+encodeURIComponent(String(expand)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<LeagueStandingData>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/${encodeURIComponent(String(id))}/standing?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<PartialTeam>>;
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PartialTeam>>>;
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdTeamsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<PartialTeam>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/tournaments/seasons/stages/${encodeURIComponent(String(id))}/teams` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
