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
  RefereeDto,
  RefereePageDto,
  RefereeEditDto,
} from './models';

/**
 * v2RefereesGet - parameters interface
 */
export interface IV2RefereesGetParams {
  offset: number;
  limit: number;
  seasonIds?: string;
  languageCode?: string;
}

/**
 * v2RefereesIdGet - parameters interface
 */
export interface IV2RefereesIdGetParams {
  id: string;
  languageCode?: string;
}

/**
 * v2RefereesIdPut - parameters interface
 */
export interface IV2RefereesIdPutParams {
  id: string;
  referee?: RefereeEditDto;
}

/**
 * v2RefereesPost - parameters interface
 */
export interface IV2RefereesPostParams {
  referee?: RefereeEditDto;
}

/**
 * RefereesApi - API class
 */
@autoinject()
export class RefereesApi extends Api {

  /**
   * Creates a new RefereesApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * List referees with offset and limit parameters
   * @param params.offset The number of items to skip before starting to collect the result set
   * @param params.limit Limit the number of results returned
   * @param params.seasonIds Filter referees which have refereed matches in the specified CSV season_ids
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2RefereesGet(params: IV2RefereesGetParams): Promise<RefereePageDto> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2RefereesGet', params, 'offset');
    this.ensureParamIsSet('v2RefereesGet', params, 'limit');

    // Create URL to call
    const url = `${this.basePath}/v2/referees`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'season_ids': params['seasonIds'],
        'offset': params['offset'],
        'limit': params['limit'],
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
   * Get referee by id
   * @param params.id Unique identifier of the resource.
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2RefereesIdGet(params: IV2RefereesIdGetParams): Promise<RefereeDto> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2RefereesIdGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/referees/{id}`
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
   * Update referee information
   * @param params.id Unique identifier of the resource.
   * @param params.referee Referee information to save in persistance
   */
  async v2RefereesIdPut(params: IV2RefereesIdPutParams): Promise<RefereeDto> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2RefereesIdPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/referees/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['referee'] || {}))

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
   * Store a newly created referee in storage
   * @param params.referee 
   */
  async v2RefereesPost(params: IV2RefereesPostParams): Promise<RefereeDto> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/referees`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['referee'] || {}))

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

