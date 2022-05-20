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
import { NotFoundError } from '../model/notFoundError';
import { PartialTeam } from '../model/partialTeam';
import { Team } from '../model/team';
import { TeamEditDto } from '../model/teamEditDto';
import { TeamForm } from '../model/teamForm';
import { TeamPageDto } from '../model/teamPageDto';
import { TeamPlayer } from '../model/teamPlayer';
import { TeamPlayerSeasonStatistics } from '../model/teamPlayerSeasonStatistics';
import { TeamSeasonStatistics } from '../model/teamSeasonStatistics';
import { TournamentSeasonWithTournament } from '../model/tournamentSeasonWithTournament';
import { V2TeamColors } from '../model/v2TeamColors';
import { V2TeamProfile } from '../model/v2TeamProfile';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class TeamsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get Teams for a specific Country.id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param national Filter teams for different types of national and non national
     
     */
    public countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', observe?: 'body', headers?: Headers): Observable<Array<Team>>;
    public countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Team>>>;
    public countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling countriesIdTeamsGet.');
        }

        let queryParameters: string[] = [];
        if (national !== undefined) {
            queryParameters.push('national='+encodeURIComponent(String(national)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Team>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/countries/${encodeURIComponent(String(id))}/teams?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Search all teams by parameters
     * @param name Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param countryId Filter teams just from the specified country
     
     */
    public teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, observe?: 'body', headers?: Headers): Observable<Array<Team>>;
    public teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Team>>>;
    public teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!name){
            throw new Error('Required parameter name was null or undefined when calling teamsGet.');
        }

        let queryParameters: string[] = [];
        if (name !== undefined) {
            queryParameters.push('name='+encodeURIComponent(String(name)));
        }
        if (maxResults !== undefined) {
            queryParameters.push('maxResults='+encodeURIComponent(String(maxResults)));
        }
        if (countryId !== undefined) {
            queryParameters.push('countryId='+encodeURIComponent(String(countryId)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Team>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of events in which a team with a specified id has participated
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param direction Whether to sort the results by ascending or descending order
     * @param tournamentSeasonStageId Filter events for a specific tournament_season_stage.id
     
     */
    public teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, observe?: 'body', headers?: Headers): Observable<Array<Event>>;
    public teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Event>>>;
    public teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdEventsGet.');
        }

        let queryParameters: string[] = [];
        if (fromTime !== undefined) {
           queryParameters.push('fromTime='+encodeURIComponent(<any>fromTime.toISOString()));
        }
        if (toTime !== undefined) {
           queryParameters.push('toTime='+encodeURIComponent(<any>toTime.toISOString()));
        }
        if (direction !== undefined) {
            queryParameters.push('direction='+encodeURIComponent(String(direction)));
        }
        if (tournamentSeasonStageId !== undefined) {
            queryParameters.push('tournamentSeasonStageId='+encodeURIComponent(String(tournamentSeasonStageId)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Event>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/events?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get Team form information accross all tournaments
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Whether to include information about every event in the TeamForm response
     
     */
    public teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', observe?: 'body', headers?: Headers): Observable<Array<TeamForm>>;
    public teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TeamForm>>>;
    public teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdFormGet.');
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

        const response: Observable<HttpResponse<Array<TeamForm>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/form?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get information about a specific Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the Team response
     
     */
    public teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', observe?: 'body', headers?: Headers): Observable<Team>;
    public teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', observe?: 'response', headers?: Headers): Observable<HttpResponse<Team>>;
    public teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdGet.');
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

        const response: Observable<HttpResponse<Team>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get the current squad for a Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group players by a specific property
     
     */
    public teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', observe?: 'body', headers?: Headers): Observable<Array<TeamPlayer>>;
    public teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TeamPlayer>>>;
    public teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdPlayersGet.');
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

        const response: Observable<HttpResponse<Array<TeamPlayer>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/players?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get player statistics for the current season in the Team&#39;s League
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     
     */
    public teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', observe?: 'body', headers?: Headers): Observable<TeamPlayerSeasonStatistics>;
    public teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', observe?: 'response', headers?: Headers): Observable<HttpResponse<TeamPlayerSeasonStatistics>>;
    public teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdPlayersStatisticsGet.');
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

        const response: Observable<HttpResponse<TeamPlayerSeasonStatistics>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/players/statistics?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of TournamentSeasons for which Player Statistics are available
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<TournamentSeasonWithTournament>>;
    public teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TournamentSeasonWithTournament>>>;
    public teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdPlayersStatisticsSeasonsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<TournamentSeasonWithTournament>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/players/statistics/seasons` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get player statistics for the current season in the Team&#39;s League
     * @param seasonId Unique identifier of the TournamentSeason resource
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     
     */
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', observe?: 'body', headers?: Headers): Observable<TeamPlayerSeasonStatistics>;
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', observe?: 'response', headers?: Headers): Observable<HttpResponse<TeamPlayerSeasonStatistics>>;
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!seasonId){
            throw new Error('Required parameter seasonId was null or undefined when calling teamsIdPlayersStatisticsSeasonsSeasonIdGet.');
        }

        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdPlayersStatisticsSeasonsSeasonIdGet.');
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

        const response: Observable<HttpResponse<TeamPlayerSeasonStatistics>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/players/statistics/seasons/${encodeURIComponent(String(seasonId))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get the statistics for the latest League the team participates in
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param standing Select whether to include a full league standing or just the team&#39;s position
     
     */
    public teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', observe?: 'body', headers?: Headers): Observable<TeamSeasonStatistics>;
    public teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', observe?: 'response', headers?: Headers): Observable<HttpResponse<TeamSeasonStatistics>>;
    public teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling teamsIdStatisticsLeagueGet.');
        }

        let queryParameters: string[] = [];
        if (standing !== undefined) {
            queryParameters.push('standing='+encodeURIComponent(String(standing)));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TeamSeasonStatistics>> = this.httpClient.get(`${this.APIConfiguration.basePath}/teams/${encodeURIComponent(String(id))}/statistics/league?${queryParameters.join('&')}` as any, headers);
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


    /**
     * 
     * Manually insert team colors by team or event.
     * @param teamColorsDto Team shirt colors data
     
     */
    public v2TeamsColorsPost(teamColorsDto?: V2TeamColors, observe?: 'body', headers?: Headers): Observable<V2TeamColors>;
    public v2TeamsColorsPost(teamColorsDto?: V2TeamColors, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2TeamColors>>;
    public v2TeamsColorsPost(teamColorsDto?: V2TeamColors, observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2TeamColors>> = this.httpClient.post(`${this.APIConfiguration.basePath}/v2/teams/colors`, teamColorsDto as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get teams list
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     
     */
    public v2TeamsGet(offset: number, limit: number, languageCode?: string, observe?: 'body', headers?: Headers): Observable<TeamPageDto>;
    public v2TeamsGet(offset: number, limit: number, languageCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<TeamPageDto>>;
    public v2TeamsGet(offset: number, limit: number, languageCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!offset){
            throw new Error('Required parameter offset was null or undefined when calling v2TeamsGet.');
        }

        if (!limit){
            throw new Error('Required parameter limit was null or undefined when calling v2TeamsGet.');
        }

        let queryParameters: string[] = [];
        if (languageCode !== undefined) {
            queryParameters.push('languageCode='+encodeURIComponent(String(languageCode)));
        }
        if (offset !== undefined) {
            queryParameters.push('offset='+encodeURIComponent(String(offset)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit='+encodeURIComponent(String(limit)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<TeamPageDto>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/teams?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get team by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     
     */
    public v2TeamsIdGet(id: string, languageCode?: string, observe?: 'body', headers?: Headers): Observable<V2TeamProfile>;
    public v2TeamsIdGet(id: string, languageCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2TeamProfile>>;
    public v2TeamsIdGet(id: string, languageCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2TeamsIdGet.');
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

        const response: Observable<HttpResponse<V2TeamProfile>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/teams/${encodeURIComponent(String(id))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Update Team information
     * @param team Team information to save in persistance
     * @param id Unique identifier of the resource.
     
     */
    public v2TeamsIdPut(team: TeamEditDto, id: string, observe?: 'body', headers?: Headers): Observable<V2TeamProfile>;
    public v2TeamsIdPut(team: TeamEditDto, id: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2TeamProfile>>;
    public v2TeamsIdPut(team: TeamEditDto, id: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!team){
            throw new Error('Required parameter team was null or undefined when calling v2TeamsIdPut.');
        }

        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2TeamsIdPut.');
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2TeamProfile>> = this.httpClient.put(`${this.APIConfiguration.basePath}/v2/teams/${encodeURIComponent(String(id))}`, team as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Manually insert team.
     * @param teamEditDto TeamEditDto object
     
     */
    public v2TeamsPost(teamEditDto?: TeamEditDto, observe?: 'body', headers?: Headers): Observable<V2TeamProfile>;
    public v2TeamsPost(teamEditDto?: TeamEditDto, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2TeamProfile>>;
    public v2TeamsPost(teamEditDto?: TeamEditDto, observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2TeamProfile>> = this.httpClient.post(`${this.APIConfiguration.basePath}/v2/teams`, teamEditDto as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}