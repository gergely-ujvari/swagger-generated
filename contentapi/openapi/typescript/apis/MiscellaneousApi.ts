// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { IdMapping } from '../models/IdMapping';
import { MappingsDelete200Response } from '../models/MappingsDelete200Response';

/**
 * no description
 */
export class MiscellaneousApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete ID Mapping by content_id/content_type key
     * @param contentId 
     * @param contentType 
     */
    public async mappingsDelete(contentId: string, contentType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contentId' is not null or undefined
        if (contentId === null || contentId === undefined) {
            throw new RequiredError("MiscellaneousApi", "mappingsDelete", "contentId");
        }


        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new RequiredError("MiscellaneousApi", "mappingsDelete", "contentType");
        }


        // Path Params
        const localVarPath = '/mappings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentId !== undefined) {
            requestContext.setQueryParam("content_id", ObjectSerializer.serialize(contentId, "string", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Project"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oAuth2"]
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
     * Get ID mappings according to various filters
     * @param contentId 
     * @param contentType 
     * @param sourceName 
     * @param sourceType 
     * @param sourceId 
     */
    public async mappingsGet(contentId?: string, contentType?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom', sourceName?: string, sourceType?: string, sourceId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/mappings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentId !== undefined) {
            requestContext.setQueryParam("content_id", ObjectSerializer.serialize(contentId, "string", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom'", ""));
        }

        // Query Params
        if (sourceName !== undefined) {
            requestContext.setQueryParam("source_name", ObjectSerializer.serialize(sourceName, "string", ""));
        }

        // Query Params
        if (sourceType !== undefined) {
            requestContext.setQueryParam("source_type", ObjectSerializer.serialize(sourceType, "string", ""));
        }

        // Query Params
        if (sourceId !== undefined) {
            requestContext.setQueryParam("source_id", ObjectSerializer.serialize(sourceId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Project"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oAuth2"]
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
     * Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key
     * @param idMapping Add ID Mapping entry
     */
    public async mappingsPut(idMapping?: IdMapping, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/mappings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(idMapping, "IdMapping", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Project"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oAuth2"]
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

export class MiscellaneousApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mappingsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mappingsDelete(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ID Mapping not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to mappingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mappingsGet(response: ResponseContext): Promise<MappingsDelete200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MappingsDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MappingsDelete200Response", ""
            ) as MappingsDelete200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MappingsDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MappingsDelete200Response", ""
            ) as MappingsDelete200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mappingsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mappingsPut(response: ResponseContext): Promise<IdMapping > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdMapping", ""
            ) as IdMapping;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdMapping", ""
            ) as IdMapping;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
