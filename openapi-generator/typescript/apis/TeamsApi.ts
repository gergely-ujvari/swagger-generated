// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Event } from '../models/Event';
import { NotFoundError } from '../models/NotFoundError';
import { PartialTeam } from '../models/PartialTeam';
import { Team } from '../models/Team';
import { TeamEditDto } from '../models/TeamEditDto';
import { TeamForm } from '../models/TeamForm';
import { TeamPageDto } from '../models/TeamPageDto';
import { TeamPlayer } from '../models/TeamPlayer';
import { TeamPlayerSeasonStatistics } from '../models/TeamPlayerSeasonStatistics';
import { TeamSeasonStatistics } from '../models/TeamSeasonStatistics';
import { TournamentSeasonWithTournament } from '../models/TournamentSeasonWithTournament';
import { V2TeamColors } from '../models/V2TeamColors';
import { V2TeamProfile } from '../models/V2TeamProfile';

/**
 * no description
 */
export class TeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Teams for a specific Country.id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param national Filter teams for different types of national and non national
     */
    public async countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "countriesIdTeamsGet", "id");
        }




        // Path Params
        const localVarPath = '/countries/{id}/teams'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (national !== undefined) {
            requestContext.setQueryParam("national", ObjectSerializer.serialize(national, "'1' | '0' | 'true' | 'false'", ""));
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
     * Search all teams by parameters
     * @param name Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param countryId Filter teams just from the specified country
     */
    public async teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("TeamsApi", "teamsGet", "name");
        }





        // Path Params
        const localVarPath = '/teams';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (maxResults !== undefined) {
            requestContext.setQueryParam("max_results", ObjectSerializer.serialize(maxResults, "number", ""));
        }

        // Query Params
        if (countryId !== undefined) {
            requestContext.setQueryParam("country_id", ObjectSerializer.serialize(countryId, "number", ""));
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
     * Get a list of events in which a team with a specified id has participated
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param direction Whether to sort the results by ascending or descending order
     * @param tournamentSeasonStageId Filter events for a specific tournament_season_stage.id
     */
    public async teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdEventsGet", "id");
        }







        // Path Params
        const localVarPath = '/teams/{id}/events'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "'asc' | 'desc'", ""));
        }

        // Query Params
        if (tournamentSeasonStageId !== undefined) {
            requestContext.setQueryParam("tournament_season_stage_id", ObjectSerializer.serialize(tournamentSeasonStageId, "number", ""));
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
     * Get Team form information accross all tournaments
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Whether to include information about every event in the TeamForm response
     */
    public async teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdFormGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}/form'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'events'", ""));
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
     * Get information about a specific Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the Team response
     */
    public async teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'form' | 'form.events' | 'form.events,next_event'", ""));
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
     * Get the current squad for a Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group players by a specific property
     */
    public async teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdPlayersGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}/players'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'position'", ""));
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
     * Get player statistics for the current season in the Team's League
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public async teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdPlayersStatisticsGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}/players/statistics'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'player.position'", ""));
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
     * Get a list of TournamentSeasons for which Player Statistics are available
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdPlayersStatisticsSeasonsGet", "id");
        }



        // Path Params
        const localVarPath = '/teams/{id}/players/statistics/seasons'
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
     * Get player statistics for the current season in the Team's League
     * @param seasonId Unique identifier of the TournamentSeason resource
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public async teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'seasonId' is not null or undefined
        if (seasonId === null || seasonId === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdPlayersStatisticsSeasonsSeasonIdGet", "seasonId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdPlayersStatisticsSeasonsSeasonIdGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}/players/statistics/seasons/{seasonId}'
            .replace('{' + 'seasonId' + '}', encodeURIComponent(String(seasonId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'player.position'", ""));
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
     * Get the statistics for the latest League the team participates in
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param standing Select whether to include a full league standing or just the team&#39;s position
     */
    public async teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "teamsIdStatisticsLeagueGet", "id");
        }




        // Path Params
        const localVarPath = '/teams/{id}/statistics/league'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (standing !== undefined) {
            requestContext.setQueryParam("standing", ObjectSerializer.serialize(standing, "'team' | 'full'", ""));
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
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "tournamentsSeasonsIdTeamsGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/{id}/teams'
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
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "tournamentsSeasonsStagesIdTeamsGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/stages/{id}/teams'
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
     * Manually insert team colors by team or event.
     * @param teamColorsDto Team shirt colors data
     */
    public async v2TeamsColorsPost(teamColorsDto?: V2TeamColors, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v2/teams/colors';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(teamColorsDto, "V2TeamColors", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Get teams list
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public async v2TeamsGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'offset' is not null or undefined
        if (offset === null || offset === undefined) {
            throw new RequiredError("TeamsApi", "v2TeamsGet", "offset");
        }


        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("TeamsApi", "v2TeamsGet", "limit");
        }



        // Path Params
        const localVarPath = '/v2/teams';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (languageCode !== undefined) {
            requestContext.setQueryParam("language_code", ObjectSerializer.serialize(languageCode, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


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
     * Get team by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public async v2TeamsIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "v2TeamsIdGet", "id");
        }



        // Path Params
        const localVarPath = '/v2/teams/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (languageCode !== undefined) {
            requestContext.setQueryParam("language_code", ObjectSerializer.serialize(languageCode, "string", ""));
        }


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
     * Update Team information
     * @param id Unique identifier of the resource.
     * @param team Team information to save in persistance
     */
    public async v2TeamsIdPut(id: string, team: TeamEditDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamsApi", "v2TeamsIdPut", "id");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TeamsApi", "v2TeamsIdPut", "team");
        }


        // Path Params
        const localVarPath = '/v2/teams/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(team, "TeamEditDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Manually insert team.
     * @param teamEditDto TeamEditDto object
     */
    public async v2TeamsPost(teamEditDto?: TeamEditDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v2/teams';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(teamEditDto, "TeamEditDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class TeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to countriesIdTeamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async countriesIdTeamsGet(response: ResponseContext): Promise<Array<Team> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Team> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Team>", ""
            ) as Array<Team>;
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
            const body: Array<Team> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Team>", ""
            ) as Array<Team>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsGet(response: ResponseContext): Promise<Array<Team> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Team> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Team>", ""
            ) as Array<Team>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Team> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Team>", ""
            ) as Array<Team>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdEventsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdEventsGet(response: ResponseContext): Promise<Array<Event> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Event> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Event>", ""
            ) as Array<Event>;
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
     * @params response Response returned by the server for a request to teamsIdFormGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdFormGet(response: ResponseContext): Promise<Array<TeamForm> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TeamForm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TeamForm>", ""
            ) as Array<TeamForm>;
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
            const body: Array<TeamForm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TeamForm>", ""
            ) as Array<TeamForm>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdGet(response: ResponseContext): Promise<Team > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Team", ""
            ) as Team;
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
            const body: Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Team", ""
            ) as Team;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdPlayersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdPlayersGet(response: ResponseContext): Promise<Array<TeamPlayer> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TeamPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TeamPlayer>", ""
            ) as Array<TeamPlayer>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TeamPlayer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TeamPlayer>", ""
            ) as Array<TeamPlayer>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdPlayersStatisticsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdPlayersStatisticsGet(response: ResponseContext): Promise<TeamPlayerSeasonStatistics > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TeamPlayerSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPlayerSeasonStatistics", ""
            ) as TeamPlayerSeasonStatistics;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TeamPlayerSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPlayerSeasonStatistics", ""
            ) as TeamPlayerSeasonStatistics;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdPlayersStatisticsSeasonsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdPlayersStatisticsSeasonsGet(response: ResponseContext): Promise<Array<TournamentSeasonWithTournament> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TournamentSeasonWithTournament> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeasonWithTournament>", ""
            ) as Array<TournamentSeasonWithTournament>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TournamentSeasonWithTournament> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeasonWithTournament>", ""
            ) as Array<TournamentSeasonWithTournament>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdPlayersStatisticsSeasonsSeasonIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdPlayersStatisticsSeasonsSeasonIdGet(response: ResponseContext): Promise<TeamPlayerSeasonStatistics > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TeamPlayerSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPlayerSeasonStatistics", ""
            ) as TeamPlayerSeasonStatistics;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TeamPlayerSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPlayerSeasonStatistics", ""
            ) as TeamPlayerSeasonStatistics;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsIdStatisticsLeagueGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsIdStatisticsLeagueGet(response: ResponseContext): Promise<TeamSeasonStatistics > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TeamSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamSeasonStatistics", ""
            ) as TeamSeasonStatistics;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Current league for the given team not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TeamSeasonStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamSeasonStatistics", ""
            ) as TeamSeasonStatistics;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsIdTeamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsIdTeamsGet(response: ResponseContext): Promise<Array<PartialTeam> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PartialTeam> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialTeam>", ""
            ) as Array<PartialTeam>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "No TournamentSeason with the specified id is found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PartialTeam> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialTeam>", ""
            ) as Array<PartialTeam>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesIdTeamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesIdTeamsGet(response: ResponseContext): Promise<Array<PartialTeam> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PartialTeam> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialTeam>", ""
            ) as Array<PartialTeam>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PartialTeam> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialTeam>", ""
            ) as Array<PartialTeam>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsColorsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsColorsPost(response: ResponseContext): Promise<V2TeamColors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamColors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamColors", ""
            ) as V2TeamColors;
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
            const body: V2TeamColors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamColors", ""
            ) as V2TeamColors;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsGet(response: ResponseContext): Promise<TeamPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TeamPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPageDto", ""
            ) as TeamPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TeamPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TeamPageDto", ""
            ) as TeamPageDto;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsIdGet(response: ResponseContext): Promise<V2TeamProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
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
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsIdPut(response: ResponseContext): Promise<V2TeamProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "No Team with id found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsPost(response: ResponseContext): Promise<V2TeamProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2TeamProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamProfile", ""
            ) as V2TeamProfile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
