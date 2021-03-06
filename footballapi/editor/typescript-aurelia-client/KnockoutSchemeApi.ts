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
  V2KnockoutScheme,
} from './models';

/**
 * v2KnockoutSchemesStageIdGet - parameters interface
 */
export interface IV2KnockoutSchemesStageIdGetParams {
  stageId: string;
  languageCode?: string;
}

/**
 * KnockoutSchemeApi - API class
 */
@autoinject()
export class KnockoutSchemeApi extends Api {

  /**
   * Creates a new KnockoutSchemeApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * @param params.stageId Get knockout schemes for given stage id
   * @param params.languageCode Returns translated response based on the language code
   */
  async v2KnockoutSchemesStageIdGet(params: IV2KnockoutSchemesStageIdGetParams): Promise<Array<V2KnockoutScheme>> {
    // Verify required parameters are set
    this.ensureParamIsSet('v2KnockoutSchemesStageIdGet', params, 'stageId');

    // Create URL to call
    const url = `${this.basePath}/v2/knockout-schemes/{stage_id}`
      .replace(`{${'stage_id'}}`, encodeURIComponent(`${params['stageId']}`));

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

