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
import {NotFoundError} from '../model/NotFoundError';
import {Player} from '../model/Player';
import {PlayerDto} from '../model/PlayerDto';
import {PlayerEditDto} from '../model/PlayerEditDto';
import {PlayerPageDto} from '../model/PlayerPageDto';
import {PlayerProfile} from '../model/PlayerProfile';
import {PlayerStatistics} from '../model/PlayerStatistics';
import {PlayerTeam} from '../model/PlayerTeam';
import {V2ActiveClubsInput} from '../model/V2ActiveClubsInput';
import {V2PlayerActiveClub} from '../model/V2PlayerActiveClub';
import {V2PlayerProfile} from '../model/V2PlayerProfile';

/**
* Players service.
* @module api/PlayersApi
* @version 0.0.1
*/
export class PlayersApi {

    /**
    * Constructs a new PlayersApi. 
    * @alias module:api/PlayersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the playersGet operation.
     * @callback moduleapi/PlayersApi~playersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Player>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search player list by parameters
     * @param {String} name Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#x27;Ronaldo&#x27; it will match both &#x27;Cristiono Ronaldo&#x27; and &#x27;Ronaldo&#x27;
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Number} opts.maxResults Limit the number of results returned (default to <.>)
     * @param {Number} opts.teamId Return only players which are currently in the specified team&#x27;s squad
     * @param {module:api/PlayersApi~playersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    playersGet(name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling playersGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'name': name,'max_results': opts['maxResults'],'team_id': opts['teamId']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Player];

      return this.apiClient.callApi(
        '/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the playersIdGet operation.
     * @callback moduleapi/PlayersApi~playersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayerProfile{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about a specific Player
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.expand Specify additional information to include in the response
     * @param {module:api/PlayersApi~playersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    playersIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playersIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = PlayerProfile;

      return this.apiClient.callApi(
        '/players/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the playersIdStatisticsGet operation.
     * @callback moduleapi/PlayersApi~playersIdStatisticsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PlayerStatistics>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns statistics throughout a Player&#x27;s career
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.type Filter statistics for different types of team and competition
     * @param {module:model/String} opts.groupBy Group response by a given property
     * @param {module:api/PlayersApi~playersIdStatisticsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    playersIdStatisticsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playersIdStatisticsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'type': opts['type'],'group_by': opts['groupBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [PlayerStatistics];

      return this.apiClient.callApi(
        '/players/{id}/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the playersIdTeamsGet operation.
     * @callback moduleapi/PlayersApi~playersIdTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PlayerTeam>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Teams in which a Player has participated during his career
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/PlayersApi~playersIdTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    playersIdTeamsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playersIdTeamsGet");
      }

      let pathParams = {
        'id': id
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
      let returnType = [PlayerTeam];

      return this.apiClient.callApi(
        '/players/{id}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2PlayersGet operation.
     * @callback moduleapi/PlayersApi~v2PlayersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayerPageDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search player list by parameters
     * @param {Number} offset The number of items to skip before starting to collect the result set
     * @param {Number} limit Limit the number of results returned
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/PlayersApi~v2PlayersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2PlayersGet(offset, limit, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling v2PlayersGet");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling v2PlayersGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'language_code': opts['languageCode'],'offset': offset,'limit': limit
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = PlayerPageDto;

      return this.apiClient.callApi(
        '/v2/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2PlayersIdClubsActivePut operation.
     * @callback moduleapi/PlayersApi~v2PlayersIdClubsActivePutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/V2PlayerActiveClub>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the active clubs of a player
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/V2ActiveClubsInput} opts.body Active clubs input
     * @param {module:api/PlayersApi~v2PlayersIdClubsActivePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2PlayersIdClubsActivePut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2PlayersIdClubsActivePut");
      }

      let pathParams = {
        'id': id
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
      let returnType = [V2PlayerActiveClub];

      return this.apiClient.callApi(
        '/v2/players/{id}/clubs/active', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2PlayersIdGet operation.
     * @callback moduleapi/PlayersApi~v2PlayersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2PlayerProfile{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get player by id
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/PlayersApi~v2PlayersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2PlayersIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2PlayersIdGet");
      }

      let pathParams = {
        'id': id
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
      let returnType = V2PlayerProfile;

      return this.apiClient.callApi(
        '/v2/players/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2PlayersIdPut operation.
     * @callback moduleapi/PlayersApi~v2PlayersIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Player information
     * @param {module:model/PlayerEditDto} body Player information to save in persistance
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/PlayersApi~v2PlayersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v2PlayersIdPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2PlayersIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2PlayersIdPut");
      }

      let pathParams = {
        'id': id
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
      let returnType = null;

      return this.apiClient.callApi(
        '/v2/players/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2PlayersPost operation.
     * @callback moduleapi/PlayersApi~v2PlayersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayerDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Store a newly created player in storage.
     * @param {Object} opts Optional parameters
     * @param {module:model/PlayerEditDto} opts.body PlayerEditDto object
     * @param {module:api/PlayersApi~v2PlayersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2PlayersPost(opts, callback) {
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
      let returnType = PlayerDto;

      return this.apiClient.callApi(
        '/v2/players', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}