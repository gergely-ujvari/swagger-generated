// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { V2KnockoutScheme } from '../models/V2KnockoutScheme';

/**
 * no description
 */
export class KnockoutSchemeApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param stageId Get knockout schemes for given stage id
     * @param languageCode Returns translated response based on the language code
     */
    public async v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'stageId' is not null or undefined
        if (stageId === null || stageId === undefined) {
            throw new RequiredError("KnockoutSchemeApi", "v2KnockoutSchemesStageIdGet", "stageId");
        }



        // Path Params
        const localVarPath = '/v2/knockout-schemes/{stage_id}'
            .replace('{' + 'stage_id' + '}', encodeURIComponent(String(stageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (languageCode !== undefined) {
            requestContext.setQueryParam("language_code", ObjectSerializer.serialize(languageCode, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class KnockoutSchemeApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2KnockoutSchemesStageIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2KnockoutSchemesStageIdGet(response: ResponseContext): Promise<Array<V2KnockoutScheme> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<V2KnockoutScheme> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2KnockoutScheme>", ""
            ) as Array<V2KnockoutScheme>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<V2KnockoutScheme> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2KnockoutScheme>", ""
            ) as Array<V2KnockoutScheme>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
