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
import {StandingRule} from '../model/StandingRule';

/**
* StandingRule service.
* @module api/StandingRuleApi
* @version 0.0.1
*/
export class StandingRuleApi {

    /**
    * Constructs a new StandingRuleApi. 
    * @alias module:api/StandingRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the standingRulesGet operation.
     * @callback moduleapi/StandingRuleApi~standingRulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StandingRule{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of available StandingRule objects in the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/StandingRuleApi~standingRulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    standingRulesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = StandingRule;

      return this.apiClient.callApi(
        '/standing_rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}