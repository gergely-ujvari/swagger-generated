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
  V2PlayerActiveClub,
  Player,
  PlayerDto,
  PlayerTeam,
  PlayerEditDto,
  PlayerPageDto,
  PlayerProfile,
  V2PlayerProfile,
  V2ActiveClubsInput,
  PlayerStatistics,
} from './models';

/**
 * playersGet - parameters interface
 */
export interface IPlayersGetParams {
  name: string;
  acceptLanguage?: string;
  maxResults?: number;
  teamId?: number;
}

/**
 * playersIdGet - parameters interface
 */
export interface IPlayersIdGetParams {
  id: string;
  acceptLanguage?: string;
  expand?: 'club' | 'club,current_league';
}

/**
 * playersIdStatisticsGet - parameters interface
 */
export interface IPlayersIdStatisticsGetParams {
  id: string;
  acceptLanguage?: string;
  type?: 'club' | 'national' | 'league';
  groupBy?: 'tournament' | 'team';
}

/**
 * playersIdTeamsGet - parameters interface
 */
export interface IPlayersIdTeamsGetParams {
  id: string;
  acceptLanguage?: string;
}

/**
 * v2PlayersGet - parameters interface
 */
export interface IV2PlayersGetParams {
  offset: number;
  limit: number;
  languageCode?: string;
}

/**
 * v2PlayersIdClubsActivePut - parameters interface
 */
export interface IV2PlayersIdClubsActivePutParams {
  id: string;
  clubs?: V2ActiveClubsInput;
}

/**
 * v2PlayersIdGet - parameters interface
 */
export interface IV2PlayersIdGetParams {
  id: string;
  languageCode?: string;
}

/**
 * v2PlayersIdPut - parameters interface
 */
export interface IV2PlayersIdPutParams {
  player: PlayerEditDto;
  id: string;
}

/**
 * v2PlayersPost - parameters interface
 */
export interface IV2PlayersPostParams {
  player?: PlayerEditDto;
}

/**
 * PlayersApi - API class
 */
@autoinject()
export class PlayersApi extends Api {

  /**
   * Creates a new PlayersApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Search player list by parameters
   * @param params.name Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;Ronaldo&#39; it will match both &#39;Cristiono Ronaldo&#39; and &#39;Ronaldo&#39;
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   * @param params.maxResults Limit the number of results returned
   * @param params.teamId Return only players which are currently in the specified team&#39;s squad
   */
  async playersGet(params: IPlayersGetParams): Promise<Array<Player>> {
    // Verify required parameters are set
    this.ensureParamIsSet('playersGet', params, 'name');

    // Create URL to call
    const url = `${this.basePath}/players`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'name': params['name'],
        'max_results': params['maxResults'],
        'team_id': params['teamId'],
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
   * Get information about a specific Player
   * @param params.id Unique identifier of the resource.
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   * @param params.expand Specify additional information to include in the response
   */
  async playersIdGet(params: IPlayersIdGetParams): Promise<PlayerProfile> {
    // Verify required parameters are set
    this.ensureParamIsSet('playersIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/players/{id}`
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
   * Returns statistics throughout a Player&#39;s career
   * @param params.id Unique identifier of the resource.
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   * @param params.type Filter statistics for different types of team and competition
   * @param params.groupBy Group response by a given property
   */
  async playersIdStatisticsGet(params: IPlayersIdStatisticsGetParams): Promise<Array<PlayerStatistics>> {
    // Verify required parameters are set
    this.ensureParamIsSet('playersIdStatisticsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/players/{id}/statistics`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'type': params['type'],
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
   * Get the Teams in which a Player has participated during his career
   * @param params.id Unique identifier of the resource.
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async playersIdTeamsGet(params: IPlayersIdTeamsGetParams): Promise<Array<PlayerTeam>> {
    // Verify required parameters are set
    this.ensureParamIsSet('playersIdTeamsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/players/{id}/teams`
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
   * Search player list by parameters
   * @param params.offset The number of items to skip before starting to collect the result set
   * @param params.limit Limit the number of results returned
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2PlayersGet(params: IV2PlayersGetParams): Promise<PlayerPageDto> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2PlayersGet', params, 'offset');
    this.ensureParamIsSet('v2PlayersGet', params, 'limit');

    // Create URL to call
    const url = `${this.basePath}/v2/players`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'language_code': params['languageCode'],
        'offset': params['offset'],
        'limit': params['limit'],
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
   * Update the active clubs of a player
   * @param params.id Unique identifier of the resource.
   * @param params.clubs Active clubs input
   */
  async v2PlayersIdClubsActivePut(params: IV2PlayersIdClubsActivePutParams): Promise<Array<V2PlayerActiveClub>> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2PlayersIdClubsActivePut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/players/{id}/clubs/active`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['clubs'] || {}))

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
   * Get player by id
   * @param params.id Unique identifier of the resource.
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2PlayersIdGet(params: IV2PlayersIdGetParams): Promise<V2PlayerProfile> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2PlayersIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/players/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'language_code': params['languageCode'],
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
   * Update Player information
   * @param params.player Player information to save in persistance
   * @param params.id Unique identifier of the resource.
   */
  async v2PlayersIdPut(params: IV2PlayersIdPutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2PlayersIdPut', params, 'player');
    this.ensureParamIsSet('v2PlayersIdPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/players/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['player'] || {}))

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
   * Store a newly created player in storage.
   * @param params.player PlayerEditDto object
   */
  async v2PlayersPost(params: IV2PlayersPostParams): Promise<PlayerDto> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/players`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['player'] || {}))

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

