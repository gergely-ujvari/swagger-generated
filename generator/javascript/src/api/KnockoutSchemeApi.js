/*
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {V2KnockoutScheme} from '../model/V2KnockoutScheme';

/**
* KnockoutScheme service.
* @module api/KnockoutSchemeApi
* @version 0.0.1
*/
export class KnockoutSchemeApi {

    /**
    * Constructs a new KnockoutSchemeApi. 
    * @alias module:api/KnockoutSchemeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the v2KnockoutSchemesStageIdGet operation.
     * @callback moduleapi/KnockoutSchemeApi~v2KnockoutSchemesStageIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/V2KnockoutScheme>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} stageId Get knockout schemes for given stage id
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/KnockoutSchemeApi~v2KnockoutSchemesStageIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2KnockoutSchemesStageIdGet(stageId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling v2KnockoutSchemesStageIdGet");
      }

      let pathParams = {
        'stage_id': stageId
      };
      let queryParams = {
        'language_code': opts['languageCode']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [V2KnockoutScheme];

      return this.apiClient.callApi(
        '/v2/knockout-schemes/{stage_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}