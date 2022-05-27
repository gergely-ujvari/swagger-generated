// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { V2LeagueStandingInput } from '../models/V2LeagueStandingInput';
import { V2StandingEntryRuleWrapper } from '../models/V2StandingEntryRuleWrapper';
import { V2TopScorerStandingInput } from '../models/V2TopScorerStandingInput';

/**
 * no description
 */
export class StandingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Update a league standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public async v2StandingsLeagueEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2LeagueStandingInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdPut", "entity");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdPut", "id");
        }


        // verify required parameter 'standingEntries' is not null or undefined
        if (standingEntries === null || standingEntries === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdPut", "standingEntries");
        }


        // Path Params
        const localVarPath = '/v2/standings/league/{entity}/{id}'
            .replace('{' + 'entity' + '}', encodeURIComponent(String(entity)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(standingEntries, "V2LeagueStandingInput", ""),
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

    /**
     * Attach standing rules to a league standing
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingRules list of rules for every rank
     */
    public async v2StandingsLeagueEntityIdRulesPut(entity: 'season' | 'stage' | 'group', id: string, standingRules: V2StandingEntryRuleWrapper, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdRulesPut", "entity");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdRulesPut", "id");
        }


        // verify required parameter 'standingRules' is not null or undefined
        if (standingRules === null || standingRules === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsLeagueEntityIdRulesPut", "standingRules");
        }


        // Path Params
        const localVarPath = '/v2/standings/league/{entity}/{id}/rules'
            .replace('{' + 'entity' + '}', encodeURIComponent(String(entity)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(standingRules, "V2StandingEntryRuleWrapper", ""),
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

    /**
     * Update a topscorer standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public async v2StandingsTopscorerEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2TopScorerStandingInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsTopscorerEntityIdPut", "entity");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsTopscorerEntityIdPut", "id");
        }


        // verify required parameter 'standingEntries' is not null or undefined
        if (standingEntries === null || standingEntries === undefined) {
            throw new RequiredError("StandingsApi", "v2StandingsTopscorerEntityIdPut", "standingEntries");
        }


        // Path Params
        const localVarPath = '/v2/standings/topscorer/{entity}/{id}'
            .replace('{' + 'entity' + '}', encodeURIComponent(String(entity)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(standingEntries, "V2TopScorerStandingInput", ""),
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

export class StandingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2StandingsLeagueEntityIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2StandingsLeagueEntityIdPut(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2StandingsLeagueEntityIdRulesPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2StandingsLeagueEntityIdRulesPut(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2StandingsTopscorerEntityIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2StandingsTopscorerEntityIdPut(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
