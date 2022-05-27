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
  V2StageGroupCollection,
  StageDto,
} from './models';

/**
 * stagesGet - parameters interface
 */
export interface IStagesGetParams {
  teamId?: number;
  tournamentIds?: string;
  acceptLanguage?: string;
}

/**
 * v2GroupsIdDelete - parameters interface
 */
export interface IV2GroupsIdDeleteParams {
  id: string;
}

/**
 * v2StagesIdGroupsGet - parameters interface
 */
export interface IV2StagesIdGroupsGetParams {
  id: string;
  languageCode?: string;
}

/**
 * v2StagesIdGroupsPost - parameters interface
 */
export interface IV2StagesIdGroupsPostParams {
  groups: Array<V2StageGroup>;
  id: string;
}

/**
 * v2StagesIdTeamsPut - parameters interface
 */
export interface IV2StagesIdTeamsPutParams {
  id: string;
  teamId: Array<V2StageTeamInput>;
}

/**
 * StagesApi - API class
 */
@autoinject()
export class StagesApi extends Api {

  /**
   * Creates a new StagesApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Listing for Stages resources
   * @param params.teamId Filter stages by a team which is participating in the stage
   * @param params.tournamentIds CSV list of tournament.id values to filter stages
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async stagesGet(params: IStagesGetParams): Promise<Array<StageDto>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/stages`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'team_id': params['teamId'],
        'tournament_ids': params['tournamentIds'],
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
   * Permanently delete group
   * @param params.id Unique identifier of the resource.
   */
  async v2GroupsIdDelete(params: IV2GroupsIdDeleteParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2GroupsIdDelete', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/groups/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asDelete()

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
   * List all groups for specific stage
   * @param params.id Unique identifier of the resource.
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2StagesIdGroupsGet(params: IV2StagesIdGroupsGetParams): Promise<V2StageGroupCollection> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StagesIdGroupsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/stages/{id}/groups`
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
   * Create or update multiple groups
   * @param params.groups List of groups to be updated or created
   * @param params.id Unique identifier of the resource.
   */
  async v2StagesIdGroupsPost(params: IV2StagesIdGroupsPostParams): Promise<V2StageGroupCollection> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StagesIdGroupsPost', params, 'groups');
    this.ensureParamIsSet('v2StagesIdGroupsPost', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/stages/{id}/groups`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['groups'] || {}))

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
   * Replace teams in stage
   * @param params.id Unique identifier of the resource.
   * @param params.teamId List of team ids
   */
  async v2StagesIdTeamsPut(params: IV2StagesIdTeamsPutParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StagesIdTeamsPut', params, 'id');
    this.ensureParamIsSet('v2StagesIdTeamsPut', params, 'teamId');

    // Create URL to call
    const url = `${this.basePath}/v2/stages/{id}/teams`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['teamId'] || {}))

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
