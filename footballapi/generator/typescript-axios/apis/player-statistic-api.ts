/* tslint:disable */
/* eslint-disable */
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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { NotFoundError } from '../models';
import { OutputDto } from '../models';
import { V2PlayerSeasonStatisticOutputCollection } from '../models';
import { V2PlayerStatisticInput } from '../models';
import { V2PlayerStatisticOutput } from '../models';
/**
 * PlayerStatisticApi - axios parameter creator
 * @export
 */
export const PlayerStatisticApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} languageCode Return translations depending on language code
         * @param {string} [playerIds] List for player IDs separated by commas.
         * @param {string} [seasonIds] List for season IDs separated by commas.
         * @param {number} [teamId] Return only statistics for players which are currently in the specified team&#x27;s squad
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statisticsPlayersGet: async (languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'languageCode' is not null or undefined
            if (languageCode === null || languageCode === undefined) {
                throw new RequiredError('languageCode','Required parameter languageCode was null or undefined when calling statisticsPlayersGet.');
            }
            const localVarPath = `/statistics/players`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (playerIds !== undefined) {
                localVarQueryParameter['player_ids'] = playerIds;
            }

            if (seasonIds !== undefined) {
                localVarQueryParameter['season_ids'] = seasonIds;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (languageCode !== undefined) {
                localVarQueryParameter['language_code'] = languageCode;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Bulk Upsert player statistics
         * @param {Array<V2PlayerStatisticInput>} [body] Array of player match statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2StatisticsPlayersMatchPut: async (body?: Array<V2PlayerStatisticInput>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/statistics/players/match`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve player statistics, grouped by player and season
         * @param {string} [playerIds] CSV list of player id values
         * @param {string} [seasonIds] CSV list of tournament season id values
         * @param {number} [teamId] Team unique identifier
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2StatisticsPlayersSeasonGet: async (playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/statistics/players/season`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (playerIds !== undefined) {
                localVarQueryParameter['player_ids'] = playerIds;
            }

            if (seasonIds !== undefined) {
                localVarQueryParameter['season_ids'] = seasonIds;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (languageCode !== undefined) {
                localVarQueryParameter['language_code'] = languageCode;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayerStatisticApi - functional programming interface
 * @export
 */
export const PlayerStatisticApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} languageCode Return translations depending on language code
         * @param {string} [playerIds] List for player IDs separated by commas.
         * @param {string} [seasonIds] List for season IDs separated by commas.
         * @param {number} [teamId] Return only statistics for players which are currently in the specified team&#x27;s squad
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<OutputDto>>>> {
            const localVarAxiosArgs = await PlayerStatisticApiAxiosParamCreator(configuration).statisticsPlayersGet(languageCode, playerIds, seasonIds, teamId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Bulk Upsert player statistics
         * @param {Array<V2PlayerStatisticInput>} [body] Array of player match statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2StatisticsPlayersMatchPut(body?: Array<V2PlayerStatisticInput>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<V2PlayerStatisticOutput>>>> {
            const localVarAxiosArgs = await PlayerStatisticApiAxiosParamCreator(configuration).v2StatisticsPlayersMatchPut(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve player statistics, grouped by player and season
         * @param {string} [playerIds] CSV list of player id values
         * @param {string} [seasonIds] CSV list of tournament season id values
         * @param {number} [teamId] Team unique identifier
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<V2PlayerSeasonStatisticOutputCollection>>>> {
            const localVarAxiosArgs = await PlayerStatisticApiAxiosParamCreator(configuration).v2StatisticsPlayersSeasonGet(playerIds, seasonIds, teamId, languageCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PlayerStatisticApi - factory interface
 * @export
 */
export const PlayerStatisticApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} languageCode Return translations depending on language code
         * @param {string} [playerIds] List for player IDs separated by commas.
         * @param {string} [seasonIds] List for season IDs separated by commas.
         * @param {number} [teamId] Return only statistics for players which are currently in the specified team&#x27;s squad
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<OutputDto>>> {
            return PlayerStatisticApiFp(configuration).statisticsPlayersGet(languageCode, playerIds, seasonIds, teamId, options).then((request) => request(axios, basePath));
        },
        /**
         * Bulk Upsert player statistics
         * @param {Array<V2PlayerStatisticInput>} [body] Array of player match statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2StatisticsPlayersMatchPut(body?: Array<V2PlayerStatisticInput>, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<V2PlayerStatisticOutput>>> {
            return PlayerStatisticApiFp(configuration).v2StatisticsPlayersMatchPut(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve player statistics, grouped by player and season
         * @param {string} [playerIds] CSV list of player id values
         * @param {string} [seasonIds] CSV list of tournament season id values
         * @param {number} [teamId] Team unique identifier
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<V2PlayerSeasonStatisticOutputCollection>>> {
            return PlayerStatisticApiFp(configuration).v2StatisticsPlayersSeasonGet(playerIds, seasonIds, teamId, languageCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayerStatisticApi - object-oriented interface
 * @export
 * @class PlayerStatisticApi
 * @extends {BaseAPI}
 */
export class PlayerStatisticApi extends BaseAPI {
    /**
     * 
     * @param {string} languageCode Return translations depending on language code
     * @param {string} [playerIds] List for player IDs separated by commas.
     * @param {string} [seasonIds] List for season IDs separated by commas.
     * @param {number} [teamId] Return only statistics for players which are currently in the specified team&#x27;s squad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerStatisticApi
     */
    public async statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<OutputDto>>> {
        return PlayerStatisticApiFp(this.configuration).statisticsPlayersGet(languageCode, playerIds, seasonIds, teamId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Bulk Upsert player statistics
     * @param {Array<V2PlayerStatisticInput>} [body] Array of player match statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerStatisticApi
     */
    public async v2StatisticsPlayersMatchPut(body?: Array<V2PlayerStatisticInput>, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<V2PlayerStatisticOutput>>> {
        return PlayerStatisticApiFp(this.configuration).v2StatisticsPlayersMatchPut(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve player statistics, grouped by player and season
     * @param {string} [playerIds] CSV list of player id values
     * @param {string} [seasonIds] CSV list of tournament season id values
     * @param {number} [teamId] Team unique identifier
     * @param {string} [languageCode] Returns translated response based on the language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerStatisticApi
     */
    public async v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<V2PlayerSeasonStatisticOutputCollection>>> {
        return PlayerStatisticApiFp(this.configuration).v2StatisticsPlayersSeasonGet(playerIds, seasonIds, teamId, languageCode, options).then((request) => request(this.axios, this.basePath));
    }
}