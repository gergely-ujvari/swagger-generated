// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CardlistStandingData } from '../models/CardlistStandingData';
import { Event } from '../models/Event';
import { EventsByDate } from '../models/EventsByDate';
import { LeagueStandingData } from '../models/LeagueStandingData';
import { NotFoundError } from '../models/NotFoundError';
import { PartialTeam } from '../models/PartialTeam';
import { Round } from '../models/Round';
import { StageGroupWithStandingTournamentSeasonStage } from '../models/StageGroupWithStandingTournamentSeasonStage';
import { TopscorerStandingData } from '../models/TopscorerStandingData';
import { Tournament } from '../models/Tournament';
import { TournamentSeason } from '../models/TournamentSeason';
import { TournamentSeasonStage } from '../models/TournamentSeasonStage';
import { TournamentSeasonStageWithStandingGroups } from '../models/TournamentSeasonStageWithStandingGroups';
import { TournamentSeasonWithStages } from '../models/TournamentSeasonWithStages';
import { TournamentWithSeasons } from '../models/TournamentWithSeasons';

/**
 * no description
 */
export class TournamentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a list of available Tournament resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param countryId Get Tournaments from a specific Country.id
     * @param clientOrder Get Tournaments ordered for a specific client
     * @param expandClientSortorder Include extra information with Tournament response
     */
    public async tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/tournaments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (countryId !== undefined) {
            requestContext.setQueryParam("country_id", ObjectSerializer.serialize(countryId, "number", ""));
        }

        // Query Params
        if (clientOrder !== undefined) {
            requestContext.setQueryParam("client_order", ObjectSerializer.serialize(clientOrder, "'sportalios'", ""));
        }

        // Query Params
        if (expandClientSortorder !== undefined) {
            requestContext.setQueryParam("expand_client_sortorder", ObjectSerializer.serialize(expandClientSortorder, "'sportalios'", ""));
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
     */
    public async tournamentsIdGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsIdGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/{id}'
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
     * Get a list of seasons for a given Tournament id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsIdSeasonsGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/{id}/seasons'
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
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param id Unique identifier of the Tournament resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsIdSeasonsLatestGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/{id}/seasons/latest'
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
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsIdCardlistGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/{id}/cardlist'
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
     * Get a list of Events, for a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Whether to group events by date
     */
    public async tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsIdEventsGet", "id");
        }




        // Path Params
        const localVarPath = '/tournaments/seasons/{id}/events'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "'date'", ""));
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
     * Get information for a given TournamentSeason resource id.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsIdGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/{id}'
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
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsIdTeamsGet", "id");
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
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsIdTopscorerGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/{id}/topscorer'
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
     * Get all currently active tournament season stages
     */
    public async tournamentsSeasonsStagesActiveGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/tournaments/seasons/stages/active';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Get information for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesGroupsIdGet", "id");
        }




        // Path Params
        const localVarPath = '/tournaments/seasons/stages/groups/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events'", ""));
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
     * Get Standing for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesGroupsIdStandingGet", "id");
        }




        // Path Params
        const localVarPath = '/tournaments/seasons/stages/groups/{id}/standing'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events'", ""));
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
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesIdEventsGet", "id");
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

    /**
     * Get information for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesIdGet", "id");
        }




        // Path Params
        const localVarPath = '/tournaments/seasons/stages/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events'", ""));
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
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify what additional information to include with the response
     */
    public async tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesIdRoundsGet", "id");
        }



        // Path Params
        const localVarPath = '/tournaments/seasons/stages/{id}/rounds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'events'", ""));
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
     * Get Standing for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesIdStandingGet", "id");
        }




        // Path Params
        const localVarPath = '/tournaments/seasons/stages/{id}/standing'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events'", ""));
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
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public async tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TournamentsApi", "tournamentsSeasonsStagesIdTeamsGet", "id");
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

}

export class TournamentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsGet(response: ResponseContext): Promise<Array<Tournament> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Tournament> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tournament>", ""
            ) as Array<Tournament>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Tournament> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tournament>", ""
            ) as Array<Tournament>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsIdGet(response: ResponseContext): Promise<TournamentWithSeasons > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TournamentWithSeasons = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentWithSeasons", ""
            ) as TournamentWithSeasons;
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
            const body: TournamentWithSeasons = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentWithSeasons", ""
            ) as TournamentWithSeasons;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsIdSeasonsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsIdSeasonsGet(response: ResponseContext): Promise<Array<TournamentSeason> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TournamentSeason> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeason>", ""
            ) as Array<TournamentSeason>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TournamentSeason> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeason>", ""
            ) as Array<TournamentSeason>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsIdSeasonsLatestGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsIdSeasonsLatestGet(response: ResponseContext): Promise<TournamentSeasonWithStages > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TournamentSeasonWithStages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonWithStages", ""
            ) as TournamentSeasonWithStages;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Indicates that the specified Tournament id does not exist or the Tournament has no seasons", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TournamentSeasonWithStages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonWithStages", ""
            ) as TournamentSeasonWithStages;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsIdCardlistGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsIdCardlistGet(response: ResponseContext): Promise<Array<CardlistStandingData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CardlistStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CardlistStandingData>", ""
            ) as Array<CardlistStandingData>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Indicates no TournamentSeason resource with the specified id is found or no card ranking is currently not available for this Resource", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CardlistStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CardlistStandingData>", ""
            ) as Array<CardlistStandingData>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsIdEventsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsIdEventsGet(response: ResponseContext): Promise<Array<Event> > {
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
            throw new ApiException<NotFoundError>(404, "No TournamentSeason with the specified id is found", body, response.headers);
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
     * @params response Response returned by the server for a request to tournamentsSeasonsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsIdGet(response: ResponseContext): Promise<TournamentSeasonWithStages > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TournamentSeasonWithStages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonWithStages", ""
            ) as TournamentSeasonWithStages;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Indicates no TournamentSeason resource with the specified id is found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TournamentSeasonWithStages = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonWithStages", ""
            ) as TournamentSeasonWithStages;
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
     * @params response Response returned by the server for a request to tournamentsSeasonsIdTopscorerGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsIdTopscorerGet(response: ResponseContext): Promise<Array<TopscorerStandingData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TopscorerStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TopscorerStandingData>", ""
            ) as Array<TopscorerStandingData>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Indicates no TournamentSeason resource with the specified id is found or a topscorer list is currently not available for this Resource", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TopscorerStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TopscorerStandingData>", ""
            ) as Array<TopscorerStandingData>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesActiveGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesActiveGet(response: ResponseContext): Promise<Array<TournamentSeasonStage> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TournamentSeasonStage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeasonStage>", ""
            ) as Array<TournamentSeasonStage>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TournamentSeasonStage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TournamentSeasonStage>", ""
            ) as Array<TournamentSeasonStage>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesGroupsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesGroupsIdGet(response: ResponseContext): Promise<StageGroupWithStandingTournamentSeasonStage > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StageGroupWithStandingTournamentSeasonStage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StageGroupWithStandingTournamentSeasonStage", ""
            ) as StageGroupWithStandingTournamentSeasonStage;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "A StageGroup resource with the specified id is not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StageGroupWithStandingTournamentSeasonStage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StageGroupWithStandingTournamentSeasonStage", ""
            ) as StageGroupWithStandingTournamentSeasonStage;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesGroupsIdStandingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesGroupsIdStandingGet(response: ResponseContext): Promise<Array<LeagueStandingData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LeagueStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeagueStandingData>", ""
            ) as Array<LeagueStandingData>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "A StageGroup resource with the specified id is not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LeagueStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeagueStandingData>", ""
            ) as Array<LeagueStandingData>;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesIdGet(response: ResponseContext): Promise<TournamentSeasonStageWithStandingGroups > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TournamentSeasonStageWithStandingGroups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonStageWithStandingGroups", ""
            ) as TournamentSeasonStageWithStandingGroups;
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
            const body: TournamentSeasonStageWithStandingGroups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TournamentSeasonStageWithStandingGroups", ""
            ) as TournamentSeasonStageWithStandingGroups;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesIdRoundsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesIdRoundsGet(response: ResponseContext): Promise<Array<Round> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Round> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Round>", ""
            ) as Array<Round>;
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
            const body: Array<Round> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Round>", ""
            ) as Array<Round>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tournamentsSeasonsStagesIdStandingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tournamentsSeasonsStagesIdStandingGet(response: ResponseContext): Promise<Array<LeagueStandingData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LeagueStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeagueStandingData>", ""
            ) as Array<LeagueStandingData>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LeagueStandingData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeagueStandingData>", ""
            ) as Array<LeagueStandingData>;
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

}
