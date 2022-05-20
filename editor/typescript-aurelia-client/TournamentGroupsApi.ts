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
  V2TournamentGroupGetOutput,
  V2TournamentGroupCollection,
  V2TournamentGroupUpdateInput,
  V2TournamentGroupInsertInput,
} from './models';

/**
 * v2TournamentsGroupsCodeGet - parameters interface
 */
export interface IV2TournamentsGroupsCodeGetParams {
  code: string;
}

/**
 * v2TournamentsGroupsCodePut - parameters interface
 */
export interface IV2TournamentsGroupsCodePutParams {
  code: string;
  group: V2TournamentGroupUpdateInput;
}

/**
 * v2TournamentsGroupsCodeSelectionDatePost - parameters interface
 */
export interface IV2TournamentsGroupsCodeSelectionDatePostParams {
  code: string;
  date: string;
  matchIds?: Array<V2TournamentGroupSelection>;
}

/**
 * v2TournamentsGroupsGet - parameters interface
 */
export interface IV2TournamentsGroupsGetParams {
}

/**
 * v2TournamentsGroupsPost - parameters interface
 */
export interface IV2TournamentsGroupsPostParams {
  group: V2TournamentGroupInsertInput;
}

/**
 * TournamentGroupsApi - API class
 */
@autoinject()
export class TournamentGroupsApi extends Api {

  /**
   * Creates a new TournamentGroupsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * List all tournaments for a given group name and their order
   * @param params.code Tournament group code
   */
  async v2TournamentsGroupsCodeGet(params: IV2TournamentsGroupsCodeGetParams): Promise<V2TournamentGroupGetOutput> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2TournamentsGroupsCodeGet', params, 'code');

    // Create URL to call
    const url = `${this.basePath}/v2/tournaments/groups/{code}`
      .replace(`{${'code'}}`, encodeURIComponent(`${params['code']}`));

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
   * Update an existing tournament group
   * @param params.code Tournament group unique code
   * @param params.group Tournament group information
   */
  async v2TournamentsGroupsCodePut(params: IV2TournamentsGroupsCodePutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2TournamentsGroupsCodePut', params, 'code');
    this.ensureParamIsSet('v2TournamentsGroupsCodePut', params, 'group');

    // Create URL to call
    const url = `${this.basePath}/v2/tournaments/groups/{code}`
      .replace(`{${'code'}}`, encodeURIComponent(`${params['code']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['group'] || {}))

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
   * @param params.code Client code
   * @param params.date Date in ISO 8601 format (Y-m-d)
   * @param params.matchIds Array of match ids
   */
  async v2TournamentsGroupsCodeSelectionDatePost(params: IV2TournamentsGroupsCodeSelectionDatePostParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2TournamentsGroupsCodeSelectionDatePost', params, 'code');
    this.ensureParamIsSet('v2TournamentsGroupsCodeSelectionDatePost', params, 'date');

    // Create URL to call
    const url = `${this.basePath}/v2/tournaments/groups/{code}/selection/{date}`
      .replace(`{${'code'}}`, encodeURIComponent(`${params['code']}`))
      .replace(`{${'date'}}`, encodeURIComponent(`${params['date']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['matchIds'] || {}))

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
   * List all tournament groups
   */
  async v2TournamentsGroupsGet(): Promise<V2TournamentGroupCollection> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/tournaments/groups`;

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
   * Create a new tournament group
   * @param params.group Tournament group information
   */
  async v2TournamentsGroupsPost(params: IV2TournamentsGroupsPostParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2TournamentsGroupsPost', params, 'group');

    // Create URL to call
    const url = `${this.basePath}/v2/tournaments/groups`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['group'] || {}))

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
