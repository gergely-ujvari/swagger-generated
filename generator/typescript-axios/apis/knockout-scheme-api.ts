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
import { V2KnockoutScheme } from '../models';
/**
 * KnockoutSchemeApi - axios parameter creator
 * @export
 */
export const KnockoutSchemeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} stageId Get knockout schemes for given stage id
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2KnockoutSchemesStageIdGet: async (stageId: string, languageCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'stageId' is not null or undefined
            if (stageId === null || stageId === undefined) {
                throw new RequiredError('stageId','Required parameter stageId was null or undefined when calling v2KnockoutSchemesStageIdGet.');
            }
            const localVarPath = `/v2/knockout-schemes/{stage_id}`
                .replace(`{${"stage_id"}}`, encodeURIComponent(String(stageId)));
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
    }
};

/**
 * KnockoutSchemeApi - functional programming interface
 * @export
 */
export const KnockoutSchemeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} stageId Get knockout schemes for given stage id
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<V2KnockoutScheme>>>> {
            const localVarAxiosArgs = await KnockoutSchemeApiAxiosParamCreator(configuration).v2KnockoutSchemesStageIdGet(stageId, languageCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * KnockoutSchemeApi - factory interface
 * @export
 */
export const KnockoutSchemeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} stageId Get knockout schemes for given stage id
         * @param {string} [languageCode] Returns translated response based on the language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<V2KnockoutScheme>>> {
            return KnockoutSchemeApiFp(configuration).v2KnockoutSchemesStageIdGet(stageId, languageCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * KnockoutSchemeApi - object-oriented interface
 * @export
 * @class KnockoutSchemeApi
 * @extends {BaseAPI}
 */
export class KnockoutSchemeApi extends BaseAPI {
    /**
     * 
     * @param {string} stageId Get knockout schemes for given stage id
     * @param {string} [languageCode] Returns translated response based on the language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KnockoutSchemeApi
     */
    public async v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<V2KnockoutScheme>>> {
        return KnockoutSchemeApiFp(this.configuration).v2KnockoutSchemesStageIdGet(stageId, languageCode, options).then((request) => request(this.axios, this.basePath));
    }
}
