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
  V2RoundTypes,
} from './models';

/**
 * v2RoundsGet - parameters interface
 */
export interface IV2RoundsGetParams {
  seasonId: number;
  languageCode?: string;
}

/**
 * v2StagesIdRoundsGet - parameters interface
 */
export interface IV2StagesIdRoundsGetParams {
  id: string;
  languageCode?: string;
}

/**
 * RoundsApi - API class
 */
@autoinject()
export class RoundsApi extends Api {

  /**
   * Creates a new RoundsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Get a list of rounds per season
   * @param params.seasonId Filter round types per a season ID
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2RoundsGet(params: IV2RoundsGetParams): Promise<V2RoundTypes> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2RoundsGet', params, 'seasonId');

    // Create URL to call
    const url = `${this.basePath}/v2/rounds`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'season_id': params['seasonId'],
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
   * Get a list of rounds per stage
   * @param params.id Unique identifier of the resource.
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2StagesIdRoundsGet(params: IV2StagesIdRoundsGetParams): Promise<V2RoundTypes> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2StagesIdRoundsGet', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/stages/{id}/rounds`
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

}
