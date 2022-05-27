// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Event } from '../models/Event';
import { EventIncident } from '../models/EventIncident';
import { EventPlayer } from '../models/EventPlayer';
import { EventsByDate } from '../models/EventsByDate';
import { Lineup } from '../models/Lineup';
import { NotFoundError } from '../models/NotFoundError';
import { Odd } from '../models/Odd';

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a list of events by home and away team id
     * @param homeId Filter events with home team id
     * @param awayId Filter events with away team id
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'homeId' is not null or undefined
        if (homeId === null || homeId === undefined) {
            throw new RequiredError("EventsApi", "eventsByTeamsGet", "homeId");
        }


        // verify required parameter 'awayId' is not null or undefined
        if (awayId === null || awayId === undefined) {
            throw new RequiredError("EventsApi", "eventsByTeamsGet", "awayId");
        }



        // Path Params
        const localVarPath = '/events/by_teams';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (homeId !== undefined) {
            requestContext.setQueryParam("home_id", ObjectSerializer.serialize(homeId, "number", ""));
        }

        // Query Params
        if (awayId !== undefined) {
            requestContext.setQueryParam("away_id", ObjectSerializer.serialize(awayId, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of Events
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param clientOrder Order matching events for a specific client
     */
    public async eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTime !== undefined) {
            requestContext.setQueryParam("from_time", ObjectSerializer.serialize(fromTime, "Date", "date-time"));
        }

        // Query Params
        if (toTime !== undefined) {
            requestContext.setQueryParam("to_time", ObjectSerializer.serialize(toTime, "Date", "date-time"));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'' | 'tournament_season_stage'", ""));
        }

        // Query Params
        if (clientOrder !== undefined) {
            requestContext.setQueryParam("client_order", ObjectSerializer.serialize(clientOrder, "'sportalios'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the standing response
     */
    public async eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "eventsIdGet", "id");
        }




        // Path Params
        const localVarPath = '/events/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'form' | 'form.events'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @param direction Whether to sort the results by ascending or descending order
     */
    public async eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "eventsIdIncidentsGet", "id");
        }





        // Path Params
        const localVarPath = '/events/{id}/incidents'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'team'", ""));
        }

        // Query Params
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "'asc' | 'desc'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get lineup information for an event. Includes players, formation and coach
     * @param id Event.id for which lineups are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async eventsIdLineupsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "eventsIdLineupsGet", "id");
        }



        // Path Params
        const localVarPath = '/events/{id}/lineups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     */
    public async eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "eventsIdPlayersGet", "id");
        }




        // Path Params
        const localVarPath = '/events/{id}/players'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'team'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "eventsIdPregameoddsGet", "id");
        }


        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("EventsApi", "eventsIdPregameoddsGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/events/{id}/pregameodds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of events which are currently live
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     */
    public async eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/events/live';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'tournament_season_stage'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of events which have been updated since the specified timestamp
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     */
    public async eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/events/since';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastUpdate !== undefined) {
            requestContext.setQueryParam("last_update", ObjectSerializer.serialize(lastUpdate, "Date", "date-time"));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


















        // Path Params
        const localVarPath = '/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromStartTime !== undefined) {
            requestContext.setQueryParam("from_start_time", ObjectSerializer.serialize(fromStartTime, "Date", "date-time"));
        }

        // Query Params
        if (toStartTime !== undefined) {
            requestContext.setQueryParam("to_start_time", ObjectSerializer.serialize(toStartTime, "Date", "date-time"));
        }

        // Query Params
        if (teamIds !== undefined) {
            requestContext.setQueryParam("team_ids", ObjectSerializer.serialize(teamIds, "string", ""));
        }

        // Query Params
        if (matchIds !== undefined) {
            requestContext.setQueryParam("match_ids", ObjectSerializer.serialize(matchIds, "string", ""));
        }

        // Query Params
        if (tournamentIds !== undefined) {
            requestContext.setQueryParam("tournament_ids", ObjectSerializer.serialize(tournamentIds, "string", ""));
        }

        // Query Params
        if (stageIds !== undefined) {
            requestContext.setQueryParam("stage_ids", ObjectSerializer.serialize(stageIds, "string", ""));
        }

        // Query Params
        if (rounds !== undefined) {
            requestContext.setQueryParam("rounds", ObjectSerializer.serialize(rounds, "string", ""));
        }

        // Query Params
        if (seasonIds !== undefined) {
            requestContext.setQueryParam("season_ids", ObjectSerializer.serialize(seasonIds, "string", ""));
        }

        // Query Params
        if (statusTypes !== undefined) {
            requestContext.setQueryParam("status_types", ObjectSerializer.serialize(statusTypes, "'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled'", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (tournamentOrder !== undefined) {
            requestContext.setQueryParam("tournament_order", ObjectSerializer.serialize(tournamentOrder, "string", ""));
        }

        // Query Params
        if (refereeId !== undefined) {
            requestContext.setQueryParam("referee_id", ObjectSerializer.serialize(refereeId, "string", ""));
        }

        // Query Params
        if (venueId !== undefined) {
            requestContext.setQueryParam("venue_id", ObjectSerializer.serialize(venueId, "string", ""));
        }

        // Query Params
        if (statusCode !== undefined) {
            requestContext.setQueryParam("status_code", ObjectSerializer.serialize(statusCode, "string", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sort_direction", ObjectSerializer.serialize(sortDirection, "'asc' | 'desc'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("EventsApi", "tournamentsSeasonsStagesIdEventsGet", "id");
        }





        // Path Params
        const localVarPath = '/tournaments/seasons/stages/{id}/events'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (round !== undefined) {
            requestContext.setQueryParam("round", ObjectSerializer.serialize(round, "string", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sort_direction", ObjectSerializer.serialize(sortDirection, "'asc' | 'desc'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsByTeamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsByTeamsGet(response: ResponseContext): Promise<Event > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Event", ""
            ) as Event;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Event", ""
            ) as Event;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsGet(response: ResponseContext): Promise<Array<Event> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdGet(response: ResponseContext): Promise<Event > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Event", ""
            ) as Event;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Resource not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Event", ""
            ) as Event;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdIncidentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdIncidentsGet(response: ResponseContext): Promise<Array<EventIncident> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EventIncident> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventIncident>", ""
            ) as Array<EventIncident>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EventIncident> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventIncident>", ""
            ) as Array<EventIncident>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdLineupsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdLineupsGet(response: ResponseContext): Promise<Lineup > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Lineup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Lineup", ""
            ) as Lineup;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "No lineup information found for the event", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Lineup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Lineup", ""
            ) as Lineup;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdPlayersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdPlayersGet(response: ResponseContext): Promise<Array<EventPlayer> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EventPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventPlayer>", ""
            ) as Array<EventPlayer>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EventPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventPlayer>", ""
            ) as Array<EventPlayer>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdPregameoddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdPregameoddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsLiveGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsLiveGet(response: ResponseContext): Promise<Array<Event> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsSinceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsSinceGet(response: ResponseContext): Promise<Array<Event> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to matchesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async matchesGet(response: ResponseContext): Promise<Array<Event> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesIdEventsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesIdEventsGet(response: ResponseContext): Promise<Array<EventsByDate> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EventsByDate> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventsByDate>", ""
            ) as Array<EventsByDate>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "A TournamentSeasonStage resource with the specified id is not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EventsByDate> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EventsByDate>", ""
            ) as Array<EventsByDate>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
