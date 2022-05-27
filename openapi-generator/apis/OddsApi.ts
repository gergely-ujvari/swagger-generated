// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Odd } from '../models/Odd';
import { OddProvider } from '../models/OddProvider';

/**
 * no description
 */
export class OddsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get available liveodds for an event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async eventsIdLiveoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OddsApi", "eventsIdLiveoddsGet", "id");
        }


        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "eventsIdLiveoddsGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/events/{id}/liveodds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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
     * Get a list of odds available in the system
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async eventsIdOddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OddsApi", "eventsIdOddsGet", "id");
        }


        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "eventsIdOddsGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/events/{id}/odds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OddsApi", "eventsIdPregameoddsGet", "id");
        }


        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "eventsIdPregameoddsGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/events/{id}/pregameodds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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
     * Get a list of liveodds available in the system
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async liveoddsGet(xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "liveoddsGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/liveodds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public async oddProvidersGet(xOddClient: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "oddProvidersGet", "xOddClient");
        }


        // Path Params
        const localVarPath = '/odd_providers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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
     * Returns a list of Odds
     * @param oddClient Odd client code
     * @param sportType Sport type filter
     * @param eventType Event type filter
     * @param fromEventStartTime Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format
     * @param toEventStartTime Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format
     * @param teamId Team ID
     * @param teamIds List for team IDs separated by commas.
     * @param eventOrder Order matching events for a specific client
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param oddsType Pregame or live odds selector.
     */
    public async oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'oddClient' is not null or undefined
        if (oddClient === null || oddClient === undefined) {
            throw new RequiredError("OddsApi", "oddsGet", "oddClient");
        }


        // verify required parameter 'sportType' is not null or undefined
        if (sportType === null || sportType === undefined) {
            throw new RequiredError("OddsApi", "oddsGet", "sportType");
        }


        // verify required parameter 'eventType' is not null or undefined
        if (eventType === null || eventType === undefined) {
            throw new RequiredError("OddsApi", "oddsGet", "eventType");
        }











        // Path Params
        const localVarPath = '/odds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromEventStartTime !== undefined) {
            requestContext.setQueryParam("from_event_start_time", ObjectSerializer.serialize(fromEventStartTime, "Date", "date-time"));
        }

        // Query Params
        if (toEventStartTime !== undefined) {
            requestContext.setQueryParam("to_event_start_time", ObjectSerializer.serialize(toEventStartTime, "Date", "date-time"));
        }

        // Query Params
        if (oddClient !== undefined) {
            requestContext.setQueryParam("odd_client", ObjectSerializer.serialize(oddClient, "string", ""));
        }

        // Query Params
        if (teamId !== undefined) {
            requestContext.setQueryParam("team_id", ObjectSerializer.serialize(teamId, "number", ""));
        }

        // Query Params
        if (teamIds !== undefined) {
            requestContext.setQueryParam("team_ids", ObjectSerializer.serialize(teamIds, "string", ""));
        }

        // Query Params
        if (eventOrder !== undefined) {
            requestContext.setQueryParam("event_order", ObjectSerializer.serialize(eventOrder, "string", ""));
        }

        // Query Params
        if (sportType !== undefined) {
            requestContext.setQueryParam("sport_type", ObjectSerializer.serialize(sportType, "'football'", ""));
        }

        // Query Params
        if (matchIds !== undefined) {
            requestContext.setQueryParam("match_ids", ObjectSerializer.serialize(matchIds, "string", ""));
        }

        // Query Params
        if (tournamentIds !== undefined) {
            requestContext.setQueryParam("tournament_ids", ObjectSerializer.serialize(tournamentIds, "string", ""));
        }

        // Query Params
        if (seasonIds !== undefined) {
            requestContext.setQueryParam("season_ids", ObjectSerializer.serialize(seasonIds, "string", ""));
        }

        // Query Params
        if (eventType !== undefined) {
            requestContext.setQueryParam("event_type", ObjectSerializer.serialize(eventType, "'match'", ""));
        }

        // Query Params
        if (oddsType !== undefined) {
            requestContext.setQueryParam("odds_type", ObjectSerializer.serialize(oddsType, "'prematch' | 'live' | 'all'", ""));
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
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @param fromTime Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @param toTime Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     */
    public async pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xOddClient' is not null or undefined
        if (xOddClient === null || xOddClient === undefined) {
            throw new RequiredError("OddsApi", "pregameoddsGet", "xOddClient");
        }




        // Path Params
        const localVarPath = '/pregameodds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTime !== undefined) {
            requestContext.setQueryParam("from_time", ObjectSerializer.serialize(fromTime, "Date", "date-time"));
        }

        // Query Params
        if (toTime !== undefined) {
            requestContext.setQueryParam("to_time", ObjectSerializer.serialize(toTime, "Date", "date-time"));
        }

        // Header Params
        requestContext.setHeaderParam("X-Odd-Client", ObjectSerializer.serialize(xOddClient, "string", ""));


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

export class OddsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdLiveoddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdLiveoddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdOddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdOddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsIdPregameoddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsIdPregameoddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to liveoddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async liveoddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oddProvidersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oddProvidersGet(response: ResponseContext): Promise<Array<OddProvider> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OddProvider> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OddProvider>", ""
            ) as Array<OddProvider>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OddProvider> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OddProvider>", ""
            ) as Array<OddProvider>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pregameoddsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pregameoddsGet(response: ResponseContext): Promise<Array<Odd> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Odd> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Odd>", ""
            ) as Array<Odd>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
