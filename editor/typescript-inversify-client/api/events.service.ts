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

import { Event } from '../model/event';
import { EventIncident } from '../model/eventIncident';
import { EventPlayer } from '../model/eventPlayer';
import { EventsByDate } from '../model/eventsByDate';
import { Lineup } from '../model/lineup';
import { NotFoundError } from '../model/notFoundError';
import { Odd } from '../model/odd';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class EventsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get a list of events by home and away team id
     * @param homeId Filter events with home team id
     * @param awayId Filter events with away team id
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Event>;
    public eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Event>>;
    public eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!homeId){
            throw new Error('Required parameter homeId was null or undefined when calling eventsByTeamsGet.');
        }

        if (!awayId){
            throw new Error('Required parameter awayId was null or undefined when calling eventsByTeamsGet.');
        }

        let queryParameters: string[] = [];
        if (homeId !== undefined) {
            queryParameters.push('homeId='+encodeURIComponent(String(homeId)));
        }
        if (awayId !== undefined) {
            queryParameters.push('awayId='+encodeURIComponent(String(awayId)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Event>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/by_teams?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of Events
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param clientOrder Order matching events for a specific client
     
     */
    public eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (fromTime !== undefined) {
           queryParameters.push('fromTime='+encodeURIComponent(<any>fromTime.toISOString()));
        }
        if (toTime !== undefined) {
           queryParameters.push('toTime='+encodeURIComponent(<any>toTime.toISOString()));
        }
        if (groupBy !== undefined) {
            queryParameters.push('groupBy='+encodeURIComponent(String(groupBy)));
        }
        if (clientOrder !== undefined) {
            queryParameters.push('clientOrder='+encodeURIComponent(String(clientOrder)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events?${queryParameters.join('&')}` as any, headers);
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
     * @param expand Specifies additional information to include with the standing response
     
     */
    public eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', observe?: 'body', headers?: Headers): Observable<Event>;
    public eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', observe?: 'response', headers?: Headers): Observable<HttpResponse<Event>>;
    public eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdGet.');
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

        const response: Observable<HttpResponse<Event>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @param direction Whether to sort the results by ascending or descending order
     
     */
    public eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', observe?: 'body', headers?: Headers): Observable<Array<EventIncident>>;
    public eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<EventIncident>>>;
    public eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdIncidentsGet.');
        }

        let queryParameters: string[] = [];
        if (groupBy !== undefined) {
            queryParameters.push('groupBy='+encodeURIComponent(String(groupBy)));
        }
        if (direction !== undefined) {
            queryParameters.push('direction='+encodeURIComponent(String(direction)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<EventIncident>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/incidents?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get lineup information for an event. Includes players, formation and coach
     * @param id Event.id for which lineups are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public eventsIdLineupsGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Lineup>;
    public eventsIdLineupsGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Lineup>>;
    public eventsIdLineupsGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdLineupsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Lineup>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/lineups` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     
     */
    public eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', observe?: 'body', headers?: Headers): Observable<Array<EventPlayer>>;
    public eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<EventPlayer>>>;
    public eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdPlayersGet.');
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

        const response: Observable<HttpResponse<Array<EventPlayer>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/players?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdPregameoddsGet.');
        }

        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdPregameoddsGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/pregameodds` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of events which are currently live
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     
     */
    public eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', observe: any = 'body', headers: Headers = {}): Observable<any> {
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

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/live?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of events which have been updated since the specified timestamp
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     
     */
    public eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (lastUpdate !== undefined) {
           queryParameters.push('lastUpdate='+encodeURIComponent(<any>lastUpdate.toISOString()));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/since?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of matches for team/between teams
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromStartTime Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format
     * @param toStartTime Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format
     * @param teamIds List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams.
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param stageIds List for stage IDs separated by commas.
     * @param rounds List for rounds separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param statusTypes List of status types.
     * @param offset Results offset
     * @param limit Results limit
     * @param tournamentOrder Tournament filtering and ordering.
     * @param refereeId Filter matches by referee
     * @param venueId Filter matches by venue
     * @param statusCode Filter matches by event_status.code
     * @param sortDirection Result ordering - asc/desc
     
     */
    public matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (fromStartTime !== undefined) {
           queryParameters.push('fromStartTime='+encodeURIComponent(<any>fromStartTime.toISOString()));
        }
        if (toStartTime !== undefined) {
           queryParameters.push('toStartTime='+encodeURIComponent(<any>toStartTime.toISOString()));
        }
        if (teamIds !== undefined) {
            queryParameters.push('teamIds='+encodeURIComponent(String(teamIds)));
        }
        if (matchIds !== undefined) {
            queryParameters.push('matchIds='+encodeURIComponent(String(matchIds)));
        }
        if (tournamentIds !== undefined) {
            queryParameters.push('tournamentIds='+encodeURIComponent(String(tournamentIds)));
        }
        if (stageIds !== undefined) {
            queryParameters.push('stageIds='+encodeURIComponent(String(stageIds)));
        }
        if (rounds !== undefined) {
            queryParameters.push('rounds='+encodeURIComponent(String(rounds)));
        }
        if (seasonIds !== undefined) {
            queryParameters.push('seasonIds='+encodeURIComponent(String(seasonIds)));
        }
        if (statusTypes !== undefined) {
            queryParameters.push('statusTypes='+encodeURIComponent(String(statusTypes)));
        }
        if (offset !== undefined) {
            queryParameters.push('offset='+encodeURIComponent(String(offset)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit='+encodeURIComponent(String(limit)));
        }
        if (tournamentOrder !== undefined) {
            queryParameters.push('tournamentOrder='+encodeURIComponent(String(tournamentOrder)));
        }
        if (refereeId !== undefined) {
            queryParameters.push('refereeId='+encodeURIComponent(String(refereeId)));
        }
        if (venueId !== undefined) {
            queryParameters.push('venueId='+encodeURIComponent(String(venueId)));
        }
        if (statusCode !== undefined) {
            queryParameters.push('statusCode='+encodeURIComponent(String(statusCode)));
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

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/matches?${queryParameters.join('&')}` as any, headers);
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

}
