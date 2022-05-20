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
import {MappingsSearchBody} from '../model/MappingsSearchBody';
import {V2MappingDto} from '../model/V2MappingDto';

/**
* ProviderMappings service.
* @module api/ProviderMappingsApi
* @version 0.0.1
*/
export class ProviderMappingsApi {

    /**
    * Constructs a new ProviderMappingsApi. 
    * @alias module:api/ProviderMappingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the v2MappingsSearchPost operation.
     * @callback moduleapi/ProviderMappingsApi~v2MappingsSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/V2MappingDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk find provider to internal ID mappings by their provider ID and entity type.
     * @param {Object} opts Optional parameters
     * @param {module:model/MappingsSearchBody} opts.body Data entity provider name and array of mapping requests
     * @param {module:api/ProviderMappingsApi~v2MappingsSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2MappingsSearchPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [V2MappingDto];

      return this.apiClient.callApi(
        '/v2/mappings/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}