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
import {CardlistStandingData} from '../model/CardlistStandingData';
import {Event} from '../model/Event';
import {EventsByDate} from '../model/EventsByDate';
import {LeagueStandingData} from '../model/LeagueStandingData';
import {NotFoundError} from '../model/NotFoundError';
import {PartialTeam} from '../model/PartialTeam';
import {Round} from '../model/Round';
import {StageGroupWithStandingTournamentSeasonStage} from '../model/StageGroupWithStandingTournamentSeasonStage';
import {TopscorerStandingData} from '../model/TopscorerStandingData';
import {Tournament} from '../model/Tournament';
import {TournamentSeason} from '../model/TournamentSeason';
import {TournamentSeasonStage} from '../model/TournamentSeasonStage';
import {TournamentSeasonStageWithStandingGroups} from '../model/TournamentSeasonStageWithStandingGroups';
import {TournamentSeasonWithStages} from '../model/TournamentSeasonWithStages';
import {TournamentWithSeasons} from '../model/TournamentWithSeasons';

/**
* Tournaments service.
* @module api/TournamentsApi
* @version 0.0.1
*/
export class TournamentsApi {

    /**
    * Constructs a new TournamentsApi. 
    * @alias module:api/TournamentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the tournamentsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tournament>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of available Tournament resources
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Number} opts.countryId Get Tournaments from a specific Country.id
     * @param {module:model/String} opts.clientOrder Get Tournaments ordered for a specific client
     * @param {module:model/String} opts.expandClientSortorder Include extra information with Tournament response
     * @param {module:api/TournamentsApi~tournamentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'country_id': opts['countryId'],'client_order': opts['clientOrder'],'expand_client_sortorder': opts['expandClientSortorder']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Tournament];

      return this.apiClient.callApi(
        '/tournaments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsIdGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TournamentWithSeasons{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsIdGet");
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
      let returnType = TournamentWithSeasons;

      return this.apiClient.callApi(
        '/tournaments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsIdSeasonsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsIdSeasonsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TournamentSeason>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of seasons for a given Tournament id
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsIdSeasonsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsIdSeasonsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsIdSeasonsGet");
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
      let returnType = [TournamentSeason];

      return this.apiClient.callApi(
        '/tournaments/{id}/seasons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsIdSeasonsLatestGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsIdSeasonsLatestGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TournamentSeasonWithStages{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param {Number} id Unique identifier of the Tournament resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsIdSeasonsLatestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsIdSeasonsLatestGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsIdSeasonsLatestGet");
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
      let returnType = TournamentSeasonWithStages;

      return this.apiClient.callApi(
        '/tournaments/{id}/seasons/latest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsIdCardlistGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsIdCardlistGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CardlistStandingData>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param {Number} id Unique identifier of the TournamentSeason resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsIdCardlistGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsIdCardlistGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsIdCardlistGet");
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
      let returnType = [CardlistStandingData];

      return this.apiClient.callApi(
        '/tournaments/seasons/{id}/cardlist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsIdEventsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Events, for a given TournamentSeason
     * @param {Number} id Unique identifier of the TournamentSeason resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.groupBy Whether to group events by date
     * @param {module:api/TournamentsApi~tournamentsSeasonsIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsIdEventsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsIdEventsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'group_by': opts['groupBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/tournaments/seasons/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsIdGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TournamentSeasonWithStages{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a given TournamentSeason resource id.
     * @param {Number} id Unique identifier of the TournamentSeason resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsIdGet");
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
      let returnType = TournamentSeasonWithStages;

      return this.apiClient.callApi(
        '/tournaments/seasons/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsIdTeamsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsIdTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PartialTeam>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param {Number} id Unique identifier of the TournamentSeason resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsIdTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsIdTeamsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsIdTeamsGet");
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
      let returnType = [PartialTeam];

      return this.apiClient.callApi(
        '/tournaments/seasons/{id}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsIdTopscorerGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsIdTopscorerGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TopscorerStandingData>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param {Number} id Unique identifier of the TournamentSeason resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsIdTopscorerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsIdTopscorerGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsIdTopscorerGet");
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
      let returnType = [TopscorerStandingData];

      return this.apiClient.callApi(
        '/tournaments/seasons/{id}/topscorer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesActiveGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesActiveGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TournamentSeasonStage>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all currently active tournament season stages
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesActiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesActiveGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [TournamentSeasonStage];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesGroupsIdGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesGroupsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StageGroupWithStandingTournamentSeasonStage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a StageGroup Resource
     * @param {Number} id Unique identifier of the StageGroup resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Specify additional information to include with the response
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesGroupsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesGroupsIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesGroupsIdGet");
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
      let returnType = StageGroupWithStandingTournamentSeasonStage;

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/groups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesGroupsIdStandingGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesGroupsIdStandingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LeagueStandingData>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Standing for a StageGroup Resource
     * @param {Number} id Unique identifier of the StageGroup resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Specify additional information to include with the response
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesGroupsIdStandingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesGroupsIdStandingGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesGroupsIdStandingGet");
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
      let returnType = [LeagueStandingData];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/groups/{id}/standing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdEventsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventsByDate>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.round Filter the event list by a specific round
     * @param {module:model/String} opts.sortDirection Sort results by date in ascending or descending order (default to <.>)
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdEventsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdEventsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'round': opts['round'],'sort_direction': opts['sortDirection']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [EventsByDate];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TournamentSeasonStageWithStandingGroups{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a TournamentSeasonStage Resource
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Specify additional information to include with the response
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdGet");
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
      let returnType = TournamentSeasonStageWithStandingGroups;

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdRoundsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesIdRoundsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Round>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Specify what additional information to include with the response
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesIdRoundsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdRoundsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdRoundsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Round];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}/rounds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdStandingGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesIdStandingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LeagueStandingData>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Standing for a TournamentSeasonStage Resource
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Specify additional information to include with the response
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesIdStandingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdStandingGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdStandingGet");
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
      let returnType = [LeagueStandingData];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}/standing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdTeamsGet operation.
     * @callback moduleapi/TournamentsApi~tournamentsSeasonsStagesIdTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PartialTeam>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TournamentsApi~tournamentsSeasonsStagesIdTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdTeamsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdTeamsGet");
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
      let returnType = [PartialTeam];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}