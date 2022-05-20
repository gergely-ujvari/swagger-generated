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
  V2LeagueStandingInput,
  V2TopScorerStandingInput,
  V2StandingEntryRuleWrapper,
} from './models';

/**
 * v2StandingsLeagueEntityIdPut - parameters interface
 */
export interface IV2StandingsLeagueEntityIdPutParams {
  standingEntries: V2LeagueStandingInput;
  entity: 'season' | 'stage' | 'group';
  id: string;
}

/**
 * v2StandingsLeagueEntityIdRulesPut - parameters interface
 */
export interface IV2StandingsLeagueEntityIdRulesPutParams {
  standingRules: V2StandingEntryRuleWrapper;
  entity: 'season' | 'stage' | 'group';
  id: string;
}

/**
 * v2StandingsTopscorerEntityIdPut - parameters interface
 */
export interface IV2StandingsTopscorerEntityIdPutParams {
  standingEntries: V2TopScorerStandingInput;
  entity: 'season' | 'stage' | 'group';
  id: string;
}

/**
 * StandingsApi - API class
 */
@autoinject()
export class StandingsApi extends Api {

  /**
   * Creates a new StandingsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Update a league standing table
   * @param params.standingEntries List of all entries for the standing
   * @param params.entity type of entity to attach standing to
   * @param params.id Unique identifier of the resource.
   */
  async v2StandingsLeagueEntityIdPut(params: IV2StandingsLeagueEntityIdPutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StandingsLeagueEntityIdPut', params, 'standingEntries');
    this.ensureParamIsSet('v2StandingsLeagueEntityIdPut', params, 'entity');
    this.ensureParamIsSet('v2StandingsLeagueEntityIdPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/standings/league/{entity}/{id}`
      .replace(`{${'entity'}}`, encodeURIComponent(`${params['entity']}`))
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['standingEntries'] || {}))

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
   * Attach standing rules to a league standing
   * @param params.standingRules list of rules for every rank
   * @param params.entity type of entity to attach standing to
   * @param params.id Unique identifier of the resource.
   */
  async v2StandingsLeagueEntityIdRulesPut(params: IV2StandingsLeagueEntityIdRulesPutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StandingsLeagueEntityIdRulesPut', params, 'standingRules');
    this.ensureParamIsSet('v2StandingsLeagueEntityIdRulesPut', params, 'entity');
    this.ensureParamIsSet('v2StandingsLeagueEntityIdRulesPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/standings/league/{entity}/{id}/rules`
      .replace(`{${'entity'}}`, encodeURIComponent(`${params['entity']}`))
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['standingRules'] || {}))

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
   * Update a topscorer standing table
   * @param params.standingEntries List of all entries for the standing
   * @param params.entity type of entity to attach standing to
   * @param params.id Unique identifier of the resource.
   */
  async v2StandingsTopscorerEntityIdPut(params: IV2StandingsTopscorerEntityIdPutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StandingsTopscorerEntityIdPut', params, 'standingEntries');
    this.ensureParamIsSet('v2StandingsTopscorerEntityIdPut', params, 'entity');
    this.ensureParamIsSet('v2StandingsTopscorerEntityIdPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/standings/topscorer/{entity}/{id}`
      .replace(`{${'entity'}}`, encodeURIComponent(`${params['entity']}`))
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['standingEntries'] || {}))

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

