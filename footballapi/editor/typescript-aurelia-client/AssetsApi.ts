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
  V2Asset,
} from './models';

/**
 * v2AssetsDelete - parameters interface
 */
export interface IV2AssetsDeleteParams {
  assets?: Array<V2AssetInput>;
}

/**
 * v2AssetsPost - parameters interface
 */
export interface IV2AssetsPostParams {
  assets?: Array<V2AssetInput>;
}

/**
 * AssetsApi - API class
 */
@autoinject()
export class AssetsApi extends Api {

  /**
   * Creates a new AssetsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Bulk delete assets
   * @param params.assets Array of assets
   */
  async v2AssetsDelete(params: IV2AssetsDeleteParams): Promise<any> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/assets`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asDelete()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['assets'] || {}))

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
   * Bulk Upsert assets
   * @param params.assets Array of assets
   */
  async v2AssetsPost(params: IV2AssetsPostParams): Promise<V2Asset> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/v2/assets`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['assets'] || {}))

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

