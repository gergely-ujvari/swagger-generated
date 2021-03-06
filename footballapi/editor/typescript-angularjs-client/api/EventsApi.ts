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

export class EventsApi {
    protected basePath = 'https://false';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Get a list of events by home and away team id
     * @param homeId Filter events with home team id
     * @param awayId Filter events with away team id
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsByTeamsGet (homeId: number, awayId: number, acceptLanguage?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Event> {
        const localVarPath = this.basePath + '/events/by_teams';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'homeId' is not null or undefined
        if (homeId === null || homeId === undefined) {
            throw new Error('Required parameter homeId was null or undefined when calling eventsByTeamsGet.');
        }

        // verify required parameter 'awayId' is not null or undefined
        if (awayId === null || awayId === undefined) {
            throw new Error('Required parameter awayId was null or undefined when calling eventsByTeamsGet.');
        }

        if (homeId !== undefined) {
            queryParameters['home_id'] = homeId;
        }

        if (awayId !== undefined) {
            queryParameters['away_id'] = awayId;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get a list of Events
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param clientOrder Order matching events for a specific client
     */
    public eventsGet (acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: models.'' | 'tournament_season_stage', clientOrder?: models.'sportalios', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Event>> {
        const localVarPath = this.basePath + '/events';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (fromTime !== undefined) {
            queryParameters['from_time'] = fromTime;
        }

        if (toTime !== undefined) {
            queryParameters['to_time'] = toTime;
        }

        if (groupBy !== undefined) {
            queryParameters['group_by'] = groupBy;
        }

        if (clientOrder !== undefined) {
            queryParameters['client_order'] = clientOrder;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the standing response
     */
    public eventsIdGet (id: string, acceptLanguage?: string, expand?: models.'form' | 'form.events', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Event> {
        const localVarPath = this.basePath + '/events/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdGet.');
        }

        if (expand !== undefined) {
            queryParameters['expand'] = expand;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @param direction Whether to sort the results by ascending or descending order
     */
    public eventsIdIncidentsGet (id: string, acceptLanguage?: string, groupBy?: models.'team', direction?: models.'asc' | 'desc', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EventIncident>> {
        const localVarPath = this.basePath + '/events/{id}/incidents'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdIncidentsGet.');
        }

        if (groupBy !== undefined) {
            queryParameters['group_by'] = groupBy;
        }

        if (direction !== undefined) {
            queryParameters['direction'] = direction;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get lineup information for an event. Includes players, formation and coach
     * @param id Event.id for which lineups are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsIdLineupsGet (id: number, acceptLanguage?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Lineup> {
        const localVarPath = this.basePath + '/events/{id}/lineups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdLineupsGet.');
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     */
    public eventsIdPlayersGet (id: string, acceptLanguage?: string, groupBy?: models.'team', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EventPlayer>> {
        const localVarPath = this.basePath + '/events/{id}/players'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdPlayersGet.');
        }

        if (groupBy !== undefined) {
            queryParameters['group_by'] = groupBy;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdPregameoddsGet (id: string, xOddClient: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Odd>> {
        const localVarPath = this.basePath + '/events/{id}/pregameodds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventsIdPregameoddsGet.');
        }

        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdPregameoddsGet.');
        }

        headerParams['X-Odd-Client'] = xOddClient;

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
     * Get a list of events which are currently live
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     */
    public eventsLiveGet (acceptLanguage?: string, groupBy?: models.'tournament_season_stage', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Event>> {
        const localVarPath = this.basePath + '/events/live';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (groupBy !== undefined) {
            queryParameters['group_by'] = groupBy;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get a list of events which have been updated since the specified timestamp
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     */
    public eventsSinceGet (acceptLanguage?: string, lastUpdate?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Event>> {
        const localVarPath = this.basePath + '/events/since';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (lastUpdate !== undefined) {
            queryParameters['last_update'] = lastUpdate;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
    public matchesGet (acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: models.'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: models.'asc' | 'desc', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Event>> {
        const localVarPath = this.basePath + '/matches';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (fromStartTime !== undefined) {
            queryParameters['from_start_time'] = fromStartTime;
        }

        if (toStartTime !== undefined) {
            queryParameters['to_start_time'] = toStartTime;
        }

        if (teamIds !== undefined) {
            queryParameters['team_ids'] = teamIds;
        }

        if (matchIds !== undefined) {
            queryParameters['match_ids'] = matchIds;
        }

        if (tournamentIds !== undefined) {
            queryParameters['tournament_ids'] = tournamentIds;
        }

        if (stageIds !== undefined) {
            queryParameters['stage_ids'] = stageIds;
        }

        if (rounds !== undefined) {
            queryParameters['rounds'] = rounds;
        }

        if (seasonIds !== undefined) {
            queryParameters['season_ids'] = seasonIds;
        }

        if (statusTypes !== undefined) {
            queryParameters['status_types'] = statusTypes;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (tournamentOrder !== undefined) {
            queryParameters['tournament_order'] = tournamentOrder;
        }

        if (refereeId !== undefined) {
            queryParameters['referee_id'] = refereeId;
        }

        if (venueId !== undefined) {
            queryParameters['venue_id'] = venueId;
        }

        if (statusCode !== undefined) {
            queryParameters['status_code'] = statusCode;
        }

        if (sortDirection !== undefined) {
            queryParameters['sort_direction'] = sortDirection;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdEventsGet (id: number, round?: string, sortDirection?: models.'asc' | 'desc', acceptLanguage?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EventsByDate>> {
        const localVarPath = this.basePath + '/tournaments/seasons/stages/{id}/events'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling tournamentsSeasonsStagesIdEventsGet.');
        }

        if (round !== undefined) {
            queryParameters['round'] = round;
        }

        if (sortDirection !== undefined) {
            queryParameters['sort_direction'] = sortDirection;
        }

        headerParams['Accept-Language'] = acceptLanguage;

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
}
