// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { LiveCommentaryOutputDto } from '../models/LiveCommentaryOutputDto';
import { NotFoundError } from '../models/NotFoundError';
import { V2Match } from '../models/V2Match';
import { V2MatchInput } from '../models/V2MatchInput';

/**
 * no description
 */
export class MatchesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     */
    public async matchesIdCommentaryGet(id: string, languageCode: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MatchesApi", "matchesIdCommentaryGet", "id");
        }


        // verify required parameter 'languageCode' is not null or undefined
        if (languageCode === null || languageCode === undefined) {
            throw new RequiredError("MatchesApi", "matchesIdCommentaryGet", "languageCode");
        }


        // Path Params
        const localVarPath = '/matches/{id}/commentary'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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

    /**
     * Get a list of matches
     * @param limit Select an upper limit for the matches that would be returned
     * @param offset Select an offset for the matches that would be returned
     * @param tournamentIds Filter matches, which have been played as part of the listed tournaments
     * @param seasonIds Filter matches, which have been played as part of the listed tournament seasons
     * @param stageIds Filter matches, which have been played as part of the listed tournament stages
     * @param groupIds Filter matches, which have been played as part of the listed tournament groups
     * @param roundIds Filter matches, which have been played as part of the listed tournament rounds
     * @param roundFilter Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
     * @param fromKickoffTime Filter matches, which have a start_time after the specified date, format is ISO 8601
     * @param toKickoffTime Filter matches, which have a start_time before the specified date, format is ISO 8601
     * @param teamIds Filter matches by teams which have taken part in them
     * @param statusTypes Filter matches by their status types
     * @param statusCodes Filter matches by their status codes
     * @param refereeId Filter matches by the referee who has taken part in them
     * @param venueId Filter matches by the venue that has hosted them
     * @param sortDirection Sort matches in asc|desc order by start_time
     */
    public async v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesGet", "limit");
        }


        // verify required parameter 'offset' is not null or undefined
        if (offset === null || offset === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesGet", "offset");
        }
















        // Path Params
        const localVarPath = '/v2/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tournamentIds !== undefined) {
            requestContext.setQueryParam("tournament_ids", ObjectSerializer.serialize(tournamentIds, "Array<number>", ""));
        }

        // Query Params
        if (seasonIds !== undefined) {
            requestContext.setQueryParam("season_ids", ObjectSerializer.serialize(seasonIds, "Array<number>", ""));
        }

        // Query Params
        if (stageIds !== undefined) {
            requestContext.setQueryParam("stage_ids", ObjectSerializer.serialize(stageIds, "Array<number>", ""));
        }

        // Query Params
        if (groupIds !== undefined) {
            requestContext.setQueryParam("group_ids", ObjectSerializer.serialize(groupIds, "Array<number>", ""));
        }

        // Query Params
        if (roundIds !== undefined) {
            requestContext.setQueryParam("round_ids", ObjectSerializer.serialize(roundIds, "Array<string>", ""));
        }

        // Query Params
        if (roundFilter !== undefined) {
            requestContext.setQueryParam("round_filter", ObjectSerializer.serialize(roundFilter, "Array<string>", ""));
        }

        // Query Params
        if (fromKickoffTime !== undefined) {
            requestContext.setQueryParam("from_kickoff_time", ObjectSerializer.serialize(fromKickoffTime, "Date", "date-time"));
        }

        // Query Params
        if (toKickoffTime !== undefined) {
            requestContext.setQueryParam("to_kickoff_time", ObjectSerializer.serialize(toKickoffTime, "Date", "date-time"));
        }

        // Query Params
        if (teamIds !== undefined) {
            requestContext.setQueryParam("team_ids", ObjectSerializer.serialize(teamIds, "Array<number>", ""));
        }

        // Query Params
        if (statusTypes !== undefined) {
            requestContext.setQueryParam("status_types", ObjectSerializer.serialize(statusTypes, "Array<string>", ""));
        }

        // Query Params
        if (statusCodes !== undefined) {
            requestContext.setQueryParam("status_codes", ObjectSerializer.serialize(statusCodes, "Array<string>", ""));
        }

        // Query Params
        if (refereeId !== undefined) {
            requestContext.setQueryParam("referee_id", ObjectSerializer.serialize(refereeId, "number", ""));
        }

        // Query Params
        if (venueId !== undefined) {
            requestContext.setQueryParam("venue_id", ObjectSerializer.serialize(venueId, "string", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sort_direction", ObjectSerializer.serialize(sortDirection, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
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
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public async v2MatchesIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesIdGet", "id");
        }



        // Path Params
        const localVarPath = '/v2/matches/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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

    /**
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     */
    public async v2MatchesIdPut(id: string, match: V2MatchInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesIdPut", "id");
        }


        // verify required parameter 'match' is not null or undefined
        if (match === null || match === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesIdPut", "match");
        }


        // Path Params
        const localVarPath = '/v2/matches/{id}'
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
            ObjectSerializer.serialize(match, "V2MatchInput", ""),
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
     * Get a list of matches
     * @param matchIds Filter matches by their IDs
     * @param date Filter matches by the date when they were played, format is ISO 8601
     * @param utcOffset Filter matches by date and UTC offset, allowed value range: [-12,14]
     * @param tournamentGroup Filter matches by a tournament group code
     * @param statusTypes Filter matches by status types
     * @param selectionFilter Fetch selected matches for specific date and tournament_group
     */
    public async v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/v2/matches/livescore';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (matchIds !== undefined) {
            requestContext.setQueryParam("match_ids", ObjectSerializer.serialize(matchIds, "Array<number>", ""));
        }

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", "date"));
        }

        // Query Params
        if (utcOffset !== undefined) {
            requestContext.setQueryParam("utc_offset", ObjectSerializer.serialize(utcOffset, "number", "float"));
        }

        // Query Params
        if (tournamentGroup !== undefined) {
            requestContext.setQueryParam("tournament_group", ObjectSerializer.serialize(tournamentGroup, "string", ""));
        }

        // Query Params
        if (statusTypes !== undefined) {
            requestContext.setQueryParam("status_types", ObjectSerializer.serialize(statusTypes, "Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>", ""));
        }

        // Query Params
        if (selectionFilter !== undefined) {
            requestContext.setQueryParam("selection_filter", ObjectSerializer.serialize(selectionFilter, "'ENABLED' | 'DISABLED'", ""));
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
     * @param match Match information to save
     */
    public async v2MatchesPost(match: V2MatchInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'match' is not null or undefined
        if (match === null || match === undefined) {
            throw new RequiredError("MatchesApi", "v2MatchesPost", "match");
        }


        // Path Params
        const localVarPath = '/v2/matches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(match, "V2MatchInput", ""),
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

export class MatchesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to matchesIdCommentaryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async matchesIdCommentaryGet(response: ResponseContext): Promise<Array<LiveCommentaryOutputDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LiveCommentaryOutputDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LiveCommentaryOutputDto>", ""
            ) as Array<LiveCommentaryOutputDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LiveCommentaryOutputDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LiveCommentaryOutputDto>", ""
            ) as Array<LiveCommentaryOutputDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MatchesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MatchesGet(response: ResponseContext): Promise<Array<V2Match> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<V2Match> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2Match>", ""
            ) as Array<V2Match>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<V2Match> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2Match>", ""
            ) as Array<V2Match>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MatchesIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MatchesIdGet(response: ResponseContext): Promise<V2Match > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Resource not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MatchesIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MatchesIdPut(response: ResponseContext): Promise<V2Match > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(404, "Resource not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MatchesLivescoreGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MatchesLivescoreGet(response: ResponseContext): Promise<Array<V2Match> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<V2Match> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2Match>", ""
            ) as Array<V2Match>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<V2Match> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<V2Match>", ""
            ) as Array<V2Match>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MatchesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MatchesPost(response: ResponseContext): Promise<V2Match > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2Match = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2Match", ""
            ) as V2Match;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
