// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { NotFoundError } from '../models/NotFoundError';
import { OutputDto } from '../models/OutputDto';
import { V2PlayerSeasonStatisticOutputCollection } from '../models/V2PlayerSeasonStatisticOutputCollection';
import { V2PlayerStatisticInput } from '../models/V2PlayerStatisticInput';
import { V2PlayerStatisticOutput } from '../models/V2PlayerStatisticOutput';

/**
 * no description
 */
export class PlayerStatisticApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param languageCode Return translations depending on language code
     * @param playerIds List for player IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param teamId Return only statistics for players which are currently in the specified team&#39;s squad
     */
    public async statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'languageCode' is not null or undefined
        if (languageCode === null || languageCode === undefined) {
            throw new RequiredError("PlayerStatisticApi", "statisticsPlayersGet", "languageCode");
        }





        // Path Params
        const localVarPath = '/statistics/players';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (playerIds !== undefined) {
            requestContext.setQueryParam("player_ids", ObjectSerializer.serialize(playerIds, "string", ""));
        }

        // Query Params
        if (seasonIds !== undefined) {
            requestContext.setQueryParam("season_ids", ObjectSerializer.serialize(seasonIds, "string", ""));
        }

        // Query Params
        if (teamId !== undefined) {
            requestContext.setQueryParam("team_id", ObjectSerializer.serialize(teamId, "number", ""));
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
     * Bulk Upsert player statistics
     * @param playerStatistics Array of player match statistics
     */
    public async v2StatisticsPlayersMatchPut(playerStatistics?: Array<V2PlayerStatisticInput>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v2/statistics/players/match';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(playerStatistics, "Array<V2PlayerStatisticInput>", ""),
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
     * Retrieve player statistics, grouped by player and season
     * @param playerIds CSV list of player id values
     * @param seasonIds CSV list of tournament season id values
     * @param teamId Team unique identifier
     * @param languageCode Returns translated response based on the language code
     */
    public async v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/v2/statistics/players/season';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (playerIds !== undefined) {
            requestContext.setQueryParam("player_ids", ObjectSerializer.serialize(playerIds, "string", ""));
        }

        // Query Params
        if (seasonIds !== undefined) {
            requestContext.setQueryParam("season_ids", ObjectSerializer.serialize(seasonIds, "string", ""));
        }

        // Query Params
        if (teamId !== undefined) {
            requestContext.setQueryParam("team_id", ObjectSerializer.serialize(teamId, "number", ""));
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

}

export class PlayerStatisticApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statisticsPlayersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statisticsPlayersGet(response: ResponseContext): Promise<Array<OutputDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OutputDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OutputDto>", ""
            ) as Array<OutputDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OutputDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OutputDto>", ""
            ) as Array<OutputDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2StatisticsPlayersMatchPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2StatisticsPlayersMatchPut(response: ResponseContext): Promise<Array<V2PlayerStatisticOutput> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<V2PlayerStatisticOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2PlayerStatisticOutput>", ""
            ) as Array<V2PlayerStatisticOutput>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "No entity with id found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<V2PlayerStatisticOutput> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2PlayerStatisticOutput>", ""
            ) as Array<V2PlayerStatisticOutput>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2StatisticsPlayersSeasonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2StatisticsPlayersSeasonGet(response: ResponseContext): Promise<Array<V2PlayerSeasonStatisticOutputCollection> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<V2PlayerSeasonStatisticOutputCollection> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2PlayerSeasonStatisticOutputCollection>", ""
            ) as Array<V2PlayerSeasonStatisticOutputCollection>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<V2PlayerSeasonStatisticOutputCollection> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2PlayerSeasonStatisticOutputCollection>", ""
            ) as Array<V2PlayerSeasonStatisticOutputCollection>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
