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

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
  TournamentSeasonStage,
  TopscorerStandingData,
  TournamentSeasonStageWithStandingGroups,
  PartialTeam,
  StageGroupWithStandingTournamentSeasonStage,
  TournamentSeason,
  TournamentWithSeasons,
  LeagueStandingData,
  TournamentSeasonWithStages,
  EventsByDate,
  Event,
  Round,
  CardlistStandingData,
  Tournament,
} from './models';

/**
 * tournamentsGet - parameters interface
 */
export interface ITournamentsGetParams {
  acceptLanguage?: string;
  countryId?: number;
  clientOrder?: 'sportalios';
  expandClientSortorder?: 'sportalios';
}

/**
 * tournamentsIdGet - parameters interface
 */
export interface ITournamentsIdGetParams {
  id: string;
  acceptLanguage?: string;
}

/**
 * tournamentsIdSeasonsGet - parameters interface
 */
export interface ITournamentsIdSeasonsGetParams {
  id: string;
  acceptLanguage?: string;
}

/**
 * tournamentsIdSeasonsLatestGet - parameters interface
 */
export interface ITournamentsIdSeasonsLatestGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsIdCardlistGet - parameters interface
 */
export interface ITournamentsSeasonsIdCardlistGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsIdEventsGet - parameters interface
 */
export interface ITournamentsSeasonsIdEventsGetParams {
  id: number;
  acceptLanguage?: string;
  groupBy?: 'date';
}

/**
 * tournamentsSeasonsIdGet - parameters interface
 */
export interface ITournamentsSeasonsIdGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsIdTeamsGet - parameters interface
 */
export interface ITournamentsSeasonsIdTeamsGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsIdTopscorerGet - parameters interface
 */
export interface ITournamentsSeasonsIdTopscorerGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesActiveGet - parameters interface
 */
export interface ITournamentsSeasonsStagesActiveGetParams {
}

/**
 * tournamentsSeasonsStagesGroupsIdGet - parameters interface
 */
export interface ITournamentsSeasonsStagesGroupsIdGetParams {
  id: number;
  expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events';
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesGroupsIdStandingGet - parameters interface
 */
export interface ITournamentsSeasonsStagesGroupsIdStandingGetParams {
  id: number;
  expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events';
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesIdEventsGet - parameters interface
 */
export interface ITournamentsSeasonsStagesIdEventsGetParams {
  id: number;
  round?: string;
  sortDirection?: 'asc' | 'desc';
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesIdGet - parameters interface
 */
export interface ITournamentsSeasonsStagesIdGetParams {
  id: number;
  expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events';
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesIdRoundsGet - parameters interface
 */
export interface ITournamentsSeasonsStagesIdRoundsGetParams {
  id: number;
  expand?: 'events';
}

/**
 * tournamentsSeasonsStagesIdStandingGet - parameters interface
 */
export interface ITournamentsSeasonsStagesIdStandingGetParams {
  id: number;
  expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events';
  acceptLanguage?: string;
}

/**
 * tournamentsSeasonsStagesIdTeamsGet - parameters interface
 */
export interface ITournamentsSeasonsStagesIdTeamsGetParams {
  id: number;
  acceptLanguage?: string;
}

/**
 * TournamentsApi - API class
 */
@autoinject()
export class TournamentsApi extends Api {

  /**
   * Creates a new TournamentsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Get a list of available Tournament resources
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   * @param params.countryId Get Tournaments from a specific Country.id
   * @param params.clientOrder Get Tournaments ordered for a specific client
   * @param params.expandClientSortorder Include extra information with Tournament response
   */
  async tournamentsGet(params: ITournamentsGetParams): Promise<Array<Tournament>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/tournaments`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'country_id': params['countryId'],
        'client_order': params['clientOrder'],
        'expand_client_sortorder': params['expandClientSortorder'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * @param params.id Unique identifier of the resource.
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsIdGet(params: ITournamentsIdGetParams): Promise<TournamentWithSeasons> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of seasons for a given Tournament id
   * @param params.id Unique identifier of the resource.
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsIdSeasonsGet(params: ITournamentsIdSeasonsGetParams): Promise<Array<TournamentSeason>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsIdSeasonsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/{id}/seasons`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
   * @param params.id Unique identifier of the Tournament resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsIdSeasonsLatestGet(params: ITournamentsIdSeasonsLatestGetParams): Promise<TournamentSeasonWithStages> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsIdSeasonsLatestGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/{id}/seasons/latest`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a standing by red,yellow cards for a specific TournamentSeason resource.
   * @param params.id Unique identifier of the TournamentSeason resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsIdCardlistGet(params: ITournamentsSeasonsIdCardlistGetParams): Promise<Array<CardlistStandingData>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsIdCardlistGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/{id}/cardlist`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of Events, for a given TournamentSeason
   * @param params.id Unique identifier of the TournamentSeason resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   * @param params.groupBy Whether to group events by date
   */
  async tournamentsSeasonsIdEventsGet(params: ITournamentsSeasonsIdEventsGetParams): Promise<Array<Event>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsIdEventsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/{id}/events`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'group_by': params['groupBy'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get information for a given TournamentSeason resource id.
   * @param params.id Unique identifier of the TournamentSeason resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsIdGet(params: ITournamentsSeasonsIdGetParams): Promise<TournamentSeasonWithStages> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of Teams, which are participating in a given TournamentSeason
   * @param params.id Unique identifier of the TournamentSeason resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsIdTeamsGet(params: ITournamentsSeasonsIdTeamsGetParams): Promise<Array<PartialTeam>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsIdTeamsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/{id}/teams`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of topscorers for a specific TournamentSeason resource.
   * @param params.id Unique identifier of the TournamentSeason resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsIdTopscorerGet(params: ITournamentsSeasonsIdTopscorerGetParams): Promise<Array<TopscorerStandingData>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsIdTopscorerGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/{id}/topscorer`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get all currently active tournament season stages
   */
  async tournamentsSeasonsStagesActiveGet(): Promise<Array<TournamentSeasonStage>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/active`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get information for a StageGroup Resource
   * @param params.id Unique identifier of the StageGroup resource
   * @param params.expand Specify additional information to include with the response
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesGroupsIdGet(params: ITournamentsSeasonsStagesGroupsIdGetParams): Promise<StageGroupWithStandingTournamentSeasonStage> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesGroupsIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/groups/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'expand': params['expand'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get Standing for a StageGroup Resource
   * @param params.id Unique identifier of the StageGroup resource
   * @param params.expand Specify additional information to include with the response
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesGroupsIdStandingGet(params: ITournamentsSeasonsStagesGroupsIdStandingGetParams): Promise<Array<LeagueStandingData>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesGroupsIdStandingGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/groups/{id}/standing`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'expand': params['expand'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of events which are fixtures in a given TournamentSeasonStage resource
   * @param params.id Unique identifier of the TournamentSeasonStage resource
   * @param params.round Filter the event list by a specific round
   * @param params.sortDirection Sort results by date in ascending or descending order
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesIdEventsGet(params: ITournamentsSeasonsStagesIdEventsGetParams): Promise<Array<EventsByDate>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesIdEventsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/{id}/events`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'round': params['round'],
        'sort_direction': params['sortDirection'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get information for a TournamentSeasonStage Resource
   * @param params.id Unique identifier of the TournamentSeasonStage resource
   * @param params.expand Specify additional information to include with the response
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesIdGet(params: ITournamentsSeasonsStagesIdGetParams): Promise<TournamentSeasonStageWithStandingGroups> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'expand': params['expand'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of rounds for a specific TournamentSeasonStage
   * @param params.id Unique identifier of the TournamentSeasonStage resource
   * @param params.expand Specify what additional information to include with the response
   */
  async tournamentsSeasonsStagesIdRoundsGet(params: ITournamentsSeasonsStagesIdRoundsGetParams): Promise<Array<Round>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesIdRoundsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/{id}/rounds`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'expand': params['expand'],
      })

      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get Standing for a TournamentSeasonStage Resource
   * @param params.id Unique identifier of the TournamentSeasonStage resource
   * @param params.expand Specify additional information to include with the response
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesIdStandingGet(params: ITournamentsSeasonsStagesIdStandingGetParams): Promise<Array<LeagueStandingData>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesIdStandingGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/{id}/standing`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'expand': params['expand'],
      })
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a list of Teams, which are participating in a given TournamentSeasonStage
   * @param params.id Unique identifier of the TournamentSeasonStage resource
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async tournamentsSeasonsStagesIdTeamsGet(params: ITournamentsSeasonsStagesIdTeamsGetParams): Promise<Array<PartialTeam>> {
    // Verify required parameters are set
    this.ensureParamIsSet('tournamentsSeasonsStagesIdTeamsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/tournaments/seasons/stages/{id}/teams`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      .withHeader('Accept-Language', params['acceptLanguage'])
      // Authentication 'basicAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

}

