// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { V2TeamSquad } from '../models/V2TeamSquad';
import { V2TeamSquadInput } from '../models/V2TeamSquadInput';

/**
 * no description
 */
export class TeamSquadApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get teams squad
     * @param id Unique identifier of the resource.
     * @param memberStatus 
     * @param languageCode Returns translated response based on the language code
     */
    public async v2TeamsIdSquadGet(id: string, memberStatus?: 'ALL' | 'ACTIVE' | 'INACTIVE', languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamSquadApi", "v2TeamsIdSquadGet", "id");
        }




        // Path Params
        const localVarPath = '/v2/teams/{id}/squad'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (memberStatus !== undefined) {
            requestContext.setQueryParam("memberStatus", ObjectSerializer.serialize(memberStatus, "'ALL' | 'ACTIVE' | 'INACTIVE'", ""));
        }

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

    /**
     * Update TeamSquad members
     * @param id Unique identifier of the resource.
     * @param squadMembers TeamSquad members to update. Null value for a property means no update
     */
    public async v2TeamsIdSquadPatch(id: string, squadMembers: V2TeamSquadInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TeamSquadApi", "v2TeamsIdSquadPatch", "id");
        }


        // verify required parameter 'squadMembers' is not null or undefined
        if (squadMembers === null || squadMembers === undefined) {
            throw new RequiredError("TeamSquadApi", "v2TeamsIdSquadPatch", "squadMembers");
        }


        // Path Params
        const localVarPath = '/v2/teams/{id}/squad'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(squadMembers, "V2TeamSquadInput", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class TeamSquadApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsIdSquadGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsIdSquadGet(response: ResponseContext): Promise<V2TeamSquad > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamSquad = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamSquad", ""
            ) as V2TeamSquad;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2TeamSquad = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamSquad", ""
            ) as V2TeamSquad;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2TeamsIdSquadPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2TeamsIdSquadPatch(response: ResponseContext): Promise<V2TeamSquad > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2TeamSquad = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamSquad", ""
            ) as V2TeamSquad;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2TeamSquad = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2TeamSquad", ""
            ) as V2TeamSquad;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
