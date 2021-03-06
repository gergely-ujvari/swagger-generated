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
import { V2TournamentGroupCollection } from '../models';
import { V2TournamentGroupGetOutput } from '../models';
import { V2TournamentGroupInsertInput } from '../models';
import { V2TournamentGroupSelection } from '../models';
import { V2TournamentGroupUpdateInput } from '../models';
/**
 * TournamentGroupsApi - axios parameter creator
 * @export
 */
export const TournamentGroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List all tournaments for a given group name and their order
         * @param {string} code Tournament group code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TournamentsGroupsCodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling v2TournamentsGroupsCodeGet.');
            }
            const localVarPath = `/v2/tournaments/groups/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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
         * Update an existing tournament group
         * @param {V2TournamentGroupUpdateInput} body Tournament group information
         * @param {string} code Tournament group unique code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TournamentsGroupsCodePut: async (body: V2TournamentGroupUpdateInput, code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling v2TournamentsGroupsCodePut.');
            }
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling v2TournamentsGroupsCodePut.');
            }
            const localVarPath = `/v2/tournaments/groups/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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
         * 
         * @param {string} code Client code
         * @param {string} date Date in ISO 8601 format (Y-m-d)
         * @param {Array<V2TournamentGroupSelection>} [body] Array of match ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TournamentsGroupsCodeSelectionDatePost: async (code: string, date: string, body?: Array<V2TournamentGroupSelection>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling v2TournamentsGroupsCodeSelectionDatePost.');
            }
            // verify required parameter 'date' is not null or undefined
            if (date === null || date === undefined) {
                throw new RequiredError('date','Required parameter date was null or undefined when calling v2TournamentsGroupsCodeSelectionDatePost.');
            }
            const localVarPath = `/v2/tournaments/groups/{code}/selection/{date}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"date"}}`, encodeURIComponent(String(date)));
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
        /**
         * List all tournament groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TournamentsGroupsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/tournaments/groups`;
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
         * Create a new tournament group
         * @param {V2TournamentGroupInsertInput} body Tournament group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TournamentsGroupsPost: async (body: V2TournamentGroupInsertInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling v2TournamentsGroupsPost.');
            }
            const localVarPath = `/v2/tournaments/groups`;
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
 * TournamentGroupsApi - functional programming interface
 * @export
 */
export const TournamentGroupsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * List all tournaments for a given group name and their order
         * @param {string} code Tournament group code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<V2TournamentGroupGetOutput>>> {
            const localVarAxiosArgs = await TournamentGroupsApiAxiosParamCreator(configuration).v2TournamentsGroupsCodeGet(code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update an existing tournament group
         * @param {V2TournamentGroupUpdateInput} body Tournament group information
         * @param {string} code Tournament group unique code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodePut(body: V2TournamentGroupUpdateInput, code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TournamentGroupsApiAxiosParamCreator(configuration).v2TournamentsGroupsCodePut(body, code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} code Client code
         * @param {string} date Date in ISO 8601 format (Y-m-d)
         * @param {Array<V2TournamentGroupSelection>} [body] Array of match ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodeSelectionDatePost(code: string, date: string, body?: Array<V2TournamentGroupSelection>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TournamentGroupsApiAxiosParamCreator(configuration).v2TournamentsGroupsCodeSelectionDatePost(code, date, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List all tournament groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<V2TournamentGroupCollection>>> {
            const localVarAxiosArgs = await TournamentGroupsApiAxiosParamCreator(configuration).v2TournamentsGroupsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new tournament group
         * @param {V2TournamentGroupInsertInput} body Tournament group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsPost(body: V2TournamentGroupInsertInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TournamentGroupsApiAxiosParamCreator(configuration).v2TournamentsGroupsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TournamentGroupsApi - factory interface
 * @export
 */
export const TournamentGroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * List all tournaments for a given group name and their order
         * @param {string} code Tournament group code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodeGet(code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<V2TournamentGroupGetOutput>> {
            return TournamentGroupsApiFp(configuration).v2TournamentsGroupsCodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing tournament group
         * @param {V2TournamentGroupUpdateInput} body Tournament group information
         * @param {string} code Tournament group unique code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodePut(body: V2TournamentGroupUpdateInput, code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TournamentGroupsApiFp(configuration).v2TournamentsGroupsCodePut(body, code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code Client code
         * @param {string} date Date in ISO 8601 format (Y-m-d)
         * @param {Array<V2TournamentGroupSelection>} [body] Array of match ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsCodeSelectionDatePost(code: string, date: string, body?: Array<V2TournamentGroupSelection>, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TournamentGroupsApiFp(configuration).v2TournamentsGroupsCodeSelectionDatePost(code, date, body, options).then((request) => request(axios, basePath));
        },
        /**
         * List all tournament groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<V2TournamentGroupCollection>> {
            return TournamentGroupsApiFp(configuration).v2TournamentsGroupsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new tournament group
         * @param {V2TournamentGroupInsertInput} body Tournament group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TournamentsGroupsPost(body: V2TournamentGroupInsertInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TournamentGroupsApiFp(configuration).v2TournamentsGroupsPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TournamentGroupsApi - object-oriented interface
 * @export
 * @class TournamentGroupsApi
 * @extends {BaseAPI}
 */
export class TournamentGroupsApi extends BaseAPI {
    /**
     * List all tournaments for a given group name and their order
     * @param {string} code Tournament group code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentGroupsApi
     */
    public async v2TournamentsGroupsCodeGet(code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<V2TournamentGroupGetOutput>> {
        return TournamentGroupsApiFp(this.configuration).v2TournamentsGroupsCodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update an existing tournament group
     * @param {V2TournamentGroupUpdateInput} body Tournament group information
     * @param {string} code Tournament group unique code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentGroupsApi
     */
    public async v2TournamentsGroupsCodePut(body: V2TournamentGroupUpdateInput, code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TournamentGroupsApiFp(this.configuration).v2TournamentsGroupsCodePut(body, code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} code Client code
     * @param {string} date Date in ISO 8601 format (Y-m-d)
     * @param {Array<V2TournamentGroupSelection>} [body] Array of match ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentGroupsApi
     */
    public async v2TournamentsGroupsCodeSelectionDatePost(code: string, date: string, body?: Array<V2TournamentGroupSelection>, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TournamentGroupsApiFp(this.configuration).v2TournamentsGroupsCodeSelectionDatePost(code, date, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List all tournament groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentGroupsApi
     */
    public async v2TournamentsGroupsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<V2TournamentGroupCollection>> {
        return TournamentGroupsApiFp(this.configuration).v2TournamentsGroupsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new tournament group
     * @param {V2TournamentGroupInsertInput} body Tournament group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentGroupsApi
     */
    public async v2TournamentsGroupsPost(body: V2TournamentGroupInsertInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TournamentGroupsApiFp(this.configuration).v2TournamentsGroupsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
