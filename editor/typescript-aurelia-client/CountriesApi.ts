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
  Country,
} from './models';

/**
 * countriesGet - parameters interface
 */
export interface ICountriesGetParams {
  acceptLanguage?: string;
}

/**
 * CountriesApi - API class
 */
@autoinject()
export class CountriesApi extends Api {

  /**
   * Creates a new CountriesApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Get a list of available Country resources
   * @param params.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
   */
  async countriesGet(params: ICountriesGetParams): Promise<Array<Country>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/countries`;

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

