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
import { EventStatus } from '../models';
/**
 * EventStatusApi - axios parameter creator
 * @export
 */
export const EventStatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of available EventStatus objects in the system
         * @param {string} [acceptLanguage] List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatusGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event_status`;
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

            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
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
 * EventStatusApi - functional programming interface
 * @export
 */
export const EventStatusApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get a list of available EventStatus objects in the system
         * @param {string} [acceptLanguage] List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatusGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EventStatus>>> {
            const localVarAxiosArgs = await EventStatusApiAxiosParamCreator(configuration).eventStatusGet(acceptLanguage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EventStatusApi - factory interface
 * @export
 */
export const EventStatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get a list of available EventStatus objects in the system
         * @param {string} [acceptLanguage] List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatusGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<EventStatus>> {
            return EventStatusApiFp(configuration).eventStatusGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventStatusApi - object-oriented interface
 * @export
 * @class EventStatusApi
 * @extends {BaseAPI}
 */
export class EventStatusApi extends BaseAPI {
    /**
     * Get a list of available EventStatus objects in the system
     * @param {string} [acceptLanguage] List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusApi
     */
    public async eventStatusGet(acceptLanguage?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<EventStatus>> {
        return EventStatusApiFp(this.configuration).eventStatusGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
