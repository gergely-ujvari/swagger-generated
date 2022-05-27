// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ActionLogsCollection } from '../models/ActionLogsCollection';

/**
 * no description
 */
export class ActionLogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List all action logs for specific admin
     * List all action logs for specific admin
     * @param project Valid project
     * @param adminId Admin ID
     * @param contentType Resource type
     * @param action Action
     */
    public async actionLogsAdminGet(project: string, adminId: number, contentType?: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', action?: 'create' | 'update' | 'delete', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new RequiredError("ActionLogsApi", "actionLogsAdminGet", "project");
        }


        // verify required parameter 'adminId' is not null or undefined
        if (adminId === null || adminId === undefined) {
            throw new RequiredError("ActionLogsApi", "actionLogsAdminGet", "adminId");
        }




        // Path Params
        const localVarPath = '/action/logs/admin';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (adminId !== undefined) {
            requestContext.setQueryParam("admin_id", ObjectSerializer.serialize(adminId, "number", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption'", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "'create' | 'update' | 'delete'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("project", ObjectSerializer.serialize(project, "string", ""));


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
     * List all action logs for specific resource
     * List all action logs for specific resource
     * @param project Valid project
     * @param contentType Resource type
     * @param contentId Resource ID
     */
    public async actionLogsContentGet(project: string, contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', contentId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new RequiredError("ActionLogsApi", "actionLogsContentGet", "project");
        }


        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new RequiredError("ActionLogsApi", "actionLogsContentGet", "contentType");
        }


        // verify required parameter 'contentId' is not null or undefined
        if (contentId === null || contentId === undefined) {
            throw new RequiredError("ActionLogsApi", "actionLogsContentGet", "contentId");
        }


        // Path Params
        const localVarPath = '/action/logs/content';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption'", ""));
        }

        // Query Params
        if (contentId !== undefined) {
            requestContext.setQueryParam("content_id", ObjectSerializer.serialize(contentId, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("project", ObjectSerializer.serialize(project, "string", ""));


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

export class ActionLogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionLogsAdminGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionLogsAdminGet(response: ResponseContext): Promise<ActionLogsCollection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionLogsCollection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionLogsCollection", ""
            ) as ActionLogsCollection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ActionLogsCollection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionLogsCollection", ""
            ) as ActionLogsCollection;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to actionLogsContentGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async actionLogsContentGet(response: ResponseContext): Promise<ActionLogsCollection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionLogsCollection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionLogsCollection", ""
            ) as ActionLogsCollection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ActionLogsCollection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionLogsCollection", ""
            ) as ActionLogsCollection;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
