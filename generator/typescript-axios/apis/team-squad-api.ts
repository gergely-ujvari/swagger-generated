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
import { V2TeamSquad } from '../models';
import { V2TeamSquadInput } from '../models';
/**
 * TeamSquadApi - axios parameter creator
 * @export
 */
export const TeamSquadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get teams squad
         * @param {string} id Unique identifier of the resource.
         * @param {string} [memberStatus] 
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TeamsIdSquadGet: async (id: string, memberStatus?: string, languageCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2TeamsIdSquadGet.');
            }
            const localVarPath = `/v2/teams/{id}/squad`
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

            if (memberStatus !== undefined) {
                localVarQueryParameter['memberStatus'] = memberStatus;
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
         * Update TeamSquad members
         * @param {V2TeamSquadInput} body TeamSquad members to update. Null value for a property means no update
         * @param {string} id Unique identifier of the resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TeamsIdSquadPatch: async (body: V2TeamSquadInput, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling v2TeamsIdSquadPatch.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2TeamsIdSquadPatch.');
            }
            const localVarPath = `/v2/teams/{id}/squad`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
 * TeamSquadApi - functional programming interface
 * @export
 */
export const TeamSquadApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get teams squad
         * @param {string} id Unique identifier of the resource.
         * @param {string} [memberStatus] 
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TeamsIdSquadGet(id: string, memberStatus?: string, languageCode?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<V2TeamSquad>>> {
            const localVarAxiosArgs = await TeamSquadApiAxiosParamCreator(configuration).v2TeamsIdSquadGet(id, memberStatus, languageCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update TeamSquad members
         * @param {V2TeamSquadInput} body TeamSquad members to update. Null value for a property means no update
         * @param {string} id Unique identifier of the resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TeamsIdSquadPatch(body: V2TeamSquadInput, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<V2TeamSquad>>> {
            const localVarAxiosArgs = await TeamSquadApiAxiosParamCreator(configuration).v2TeamsIdSquadPatch(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TeamSquadApi - factory interface
 * @export
 */
export const TeamSquadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get teams squad
         * @param {string} id Unique identifier of the resource.
         * @param {string} [memberStatus] 
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TeamsIdSquadGet(id: string, memberStatus?: string, languageCode?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<V2TeamSquad>> {
            return TeamSquadApiFp(configuration).v2TeamsIdSquadGet(id, memberStatus, languageCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Update TeamSquad members
         * @param {V2TeamSquadInput} body TeamSquad members to update. Null value for a property means no update
         * @param {string} id Unique identifier of the resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TeamsIdSquadPatch(body: V2TeamSquadInput, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<V2TeamSquad>> {
            return TeamSquadApiFp(configuration).v2TeamsIdSquadPatch(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TeamSquadApi - object-oriented interface
 * @export
 * @class TeamSquadApi
 * @extends {BaseAPI}
 */
export class TeamSquadApi extends BaseAPI {
    /**
     * Get teams squad
     * @param {string} id Unique identifier of the resource.
     * @param {string} [memberStatus] 
     * @param {string} [languageCode] Returns translated response based on the language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamSquadApi
     */
    public async v2TeamsIdSquadGet(id: string, memberStatus?: string, languageCode?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<V2TeamSquad>> {
        return TeamSquadApiFp(this.configuration).v2TeamsIdSquadGet(id, memberStatus, languageCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update TeamSquad members
     * @param {V2TeamSquadInput} body TeamSquad members to update. Null value for a property means no update
     * @param {string} id Unique identifier of the resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamSquadApi
     */
    public async v2TeamsIdSquadPatch(body: V2TeamSquadInput, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<V2TeamSquad>> {
        return TeamSquadApiFp(this.configuration).v2TeamsIdSquadPatch(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}
