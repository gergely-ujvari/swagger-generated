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
  CityEditDto,
  CityDto,
} from './models';

/**
 * v2CitiesIdPut - parameters interface
 */
export interface IV2CitiesIdPutParams {
  id: string;
  city?: CityEditDto;
}

/**
 * v2CitiesPost - parameters interface
 */
export interface IV2CitiesPostParams {
  city?: CityEditDto;
}

/**
 * CitiesApi - API class
 */
@autoinject()
export class CitiesApi extends Api {

  /**
   * Creates a new CitiesApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Update city information
   * @param params.id Unique identifier of the resource.
   * @param params.city City information to save in persistance
   */
  async v2CitiesIdPut(params: IV2CitiesIdPutParams): Promise<CityDto> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2CitiesIdPut', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/cities/{id}`
      .replace(`{${'id'}}`, encodeURIComponent(`${params['id']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['city'] || {}))

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
   * Store a newly created city in storage
   * @param params.city 
   */
  async v2CitiesPost(params: IV2CitiesPostParams): Promise<CityDto> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/cities`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['city'] || {}))

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

