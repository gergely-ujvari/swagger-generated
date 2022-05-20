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
import {V2Asset} from '../model/V2Asset';
import {V2AssetInput} from '../model/V2AssetInput';

/**
* Assets service.
* @module api/AssetsApi
* @version 0.0.1
*/
export class AssetsApi {

    /**
    * Constructs a new AssetsApi. 
    * @alias module:api/AssetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the v2AssetsDelete operation.
     * @callback moduleapi/AssetsApi~v2AssetsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk delete assets
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/V2AssetInput>} opts.body Array of assets
     * @param {module:api/AssetsApi~v2AssetsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v2AssetsDelete(opts, callback) {
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
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/v2/assets', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2AssetsPost operation.
     * @callback moduleapi/AssetsApi~v2AssetsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Asset{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk Upsert assets
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/V2AssetInput>} opts.body Array of assets
     * @param {module:api/AssetsApi~v2AssetsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2AssetsPost(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = V2Asset;

      return this.apiClient.callApi(
        '/v2/assets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}