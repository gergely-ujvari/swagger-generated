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
import { RefereeDto } from '../models';
import { RefereeEditDto } from '../models';
import { RefereePageDto } from '../models';
/**
 * RefereesApi - axios parameter creator
 * @export
 */
export const RefereesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List referees with offset and limit parameters
         * @param {number} offset The number of items to skip before starting to collect the result set
         * @param {number} limit Limit the number of results returned
         * @param {string} [seasonIds] Filter referees which have refereed matches in the specified CSV season_ids
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2RefereesGet: async (offset: number, limit: number, seasonIds?: string, languageCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'offset' is not null or undefined
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling v2RefereesGet.');
            }
            // verify required parameter 'limit' is not null or undefined
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling v2RefereesGet.');
            }
            const localVarPath = `/v2/referees`;
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

            if (seasonIds !== undefined) {
                localVarQueryParameter['season_ids'] = seasonIds;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * Get referee by id
         * @param {string} id Unique identifier of the resource.
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2RefereesIdGet: async (id: string, languageCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2RefereesIdGet.');
            }
            const localVarPath = `/v2/referees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Update referee information
         * @param {string} id Unique identifier of the resource.
         * @param {RefereeEditDto} [body] Referee information to save in persistance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2RefereesIdPut: async (id: string, body?: RefereeEditDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2RefereesIdPut.');
            }
            const localVarPath = `/v2/referees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Store a newly created referee in storage
         * @param {RefereeEditDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2RefereesPost: async (body?: RefereeEditDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/referees`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
    }
};

/**
 * RefereesApi - functional programming interface
 * @export
 */
export const RefereesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * List referees with offset and limit parameters
         * @param {number} offset The number of items to skip before starting to collect the result set
         * @param {number} limit Limit the number of results returned
         * @param {string} [seasonIds] Filter referees which have refereed matches in the specified CSV season_ids
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefereePageDto>>> {
            const localVarAxiosArgs = await RefereesApiAxiosParamCreator(configuration).v2RefereesGet(offset, limit, seasonIds, languageCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get referee by id
         * @param {string} id Unique identifier of the resource.
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesIdGet(id: string, languageCode?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefereeDto>>> {
            const localVarAxiosArgs = await RefereesApiAxiosParamCreator(configuration).v2RefereesIdGet(id, languageCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update referee information
         * @param {string} id Unique identifier of the resource.
         * @param {RefereeEditDto} [body] Referee information to save in persistance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesIdPut(id: string, body?: RefereeEditDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefereeDto>>> {
            const localVarAxiosArgs = await RefereesApiAxiosParamCreator(configuration).v2RefereesIdPut(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Store a newly created referee in storage
         * @param {RefereeEditDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesPost(body?: RefereeEditDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefereeDto>>> {
            const localVarAxiosArgs = await RefereesApiAxiosParamCreator(configuration).v2RefereesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RefereesApi - factory interface
 * @export
 */
export const RefereesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * List referees with offset and limit parameters
         * @param {number} offset The number of items to skip before starting to collect the result set
         * @param {number} limit Limit the number of results returned
         * @param {string} [seasonIds] Filter referees which have refereed matches in the specified CSV season_ids
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RefereePageDto>> {
            return RefereesApiFp(configuration).v2RefereesGet(offset, limit, seasonIds, languageCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Get referee by id
         * @param {string} id Unique identifier of the resource.
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesIdGet(id: string, languageCode?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RefereeDto>> {
            return RefereesApiFp(configuration).v2RefereesIdGet(id, languageCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Update referee information
         * @param {string} id Unique identifier of the resource.
         * @param {RefereeEditDto} [body] Referee information to save in persistance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesIdPut(id: string, body?: RefereeEditDto, options?: AxiosRequestConfig): Promise<AxiosResponse<RefereeDto>> {
            return RefereesApiFp(configuration).v2RefereesIdPut(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Store a newly created referee in storage
         * @param {RefereeEditDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2RefereesPost(body?: RefereeEditDto, options?: AxiosRequestConfig): Promise<AxiosResponse<RefereeDto>> {
            return RefereesApiFp(configuration).v2RefereesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RefereesApi - object-oriented interface
 * @export
 * @class RefereesApi
 * @extends {BaseAPI}
 */
export class RefereesApi extends BaseAPI {
    /**
     * List referees with offset and limit parameters
     * @param {number} offset The number of items to skip before starting to collect the result set
     * @param {number} limit Limit the number of results returned
     * @param {string} [seasonIds] Filter referees which have refereed matches in the specified CSV season_ids
     * @param {string} [languageCode] Returns translated response based on the language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefereesApi
     */
    public async v2RefereesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefereePageDto>> {
        return RefereesApiFp(this.configuration).v2RefereesGet(offset, limit, seasonIds, languageCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get referee by id
     * @param {string} id Unique identifier of the resource.
     * @param {string} [languageCode] Returns translated response based on the language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefereesApi
     */
    public async v2RefereesIdGet(id: string, languageCode?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefereeDto>> {
        return RefereesApiFp(this.configuration).v2RefereesIdGet(id, languageCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update referee information
     * @param {string} id Unique identifier of the resource.
     * @param {RefereeEditDto} [body] Referee information to save in persistance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefereesApi
     */
    public async v2RefereesIdPut(id: string, body?: RefereeEditDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefereeDto>> {
        return RefereesApiFp(this.configuration).v2RefereesIdPut(id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Store a newly created referee in storage
     * @param {RefereeEditDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefereesApi
     */
    public async v2RefereesPost(body?: RefereeEditDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefereeDto>> {
        return RefereesApiFp(this.configuration).v2RefereesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
