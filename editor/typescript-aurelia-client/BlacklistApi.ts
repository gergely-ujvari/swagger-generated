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
  BlacklistDto,
} from './models';

/**
 * v2BlacklistIdDelete - parameters interface
 */
export interface IV2BlacklistIdDeleteParams {
  id: string;
}

/**
 * v2BlacklistSearchPost - parameters interface
 */
export interface IV2BlacklistSearchPostParams {
  blacklistKeys?: Array<BlacklistKeyDto>;
}

/**
 * BlacklistApi - API class
 */
@autoinject()
export class BlacklistApi extends Api {

  /**
   * Creates a new BlacklistApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Remove the specified resource from storage.
   * Remove blacklist record by id.
   * @param params.id Unique identifier of the resource.
   */
  async v2BlacklistIdDelete(params: IV2BlacklistIdDeleteParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2BlacklistIdDelete', params, 'id');

    // Create URL to call
    const url = `${this.basePath}/v2/blacklist/{id}`
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
   * Bulk find in blacklist table and return matching entries by the unique blacklist key.
   * @param params.blacklistKeys Array of blacklistsKeys
   */
  async v2BlacklistSearchPost(params: IV2BlacklistSearchPostParams): Promise<Array<BlacklistDto>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/blacklist/search`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['blacklistKeys'] || {}))

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

