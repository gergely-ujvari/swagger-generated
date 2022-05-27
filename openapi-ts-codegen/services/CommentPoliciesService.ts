/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentPoliciesCollection } from '../models/CommentPoliciesCollection';
import type { CommentPolicyRequest } from '../models/CommentPolicyRequest';
import type { CommentPolicyResponse } from '../models/CommentPolicyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommentPoliciesService {

    /**
     * @param contentType
     * @returns CommentPoliciesCollection All available comment policies, scoped per this content type
     * @throws ApiError
     */
    public static getCommentsPolicies(
        contentType: 'articles' | 'videos' | 'polls' | 'galleries',
    ): CancelablePromise<CommentPoliciesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/comments/policies',
            path: {
                'contentType': contentType,
            },
        });
    }

    /**
     * Add Comment Policy for content type
     * @param contentType
     * @param requestBody Add Comment Policy
     * @returns CommentPolicyResponse Comment Policy
     * @throws ApiError
     */
    public static postCommentsPolicies(
        contentType: 'articles' | 'videos' | 'polls' | 'galleries',
        requestBody?: CommentPolicyRequest,
    ): CancelablePromise<CommentPolicyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{contentType}/comments/policies',
            path: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Comment Policy
     * @param contentType
     * @param id
     * @returns any CommentPolicy
     * @throws ApiError
     */
    public static getCommentsPolicies1(
        contentType: 'articles' | 'videos' | 'polls' | 'galleries',
        id: number,
    ): CancelablePromise<{
        data?: CommentPolicyResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/comments/policies/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
        });
    }

    /**
     * Update a Comment Policy
     * @param contentType
     * @param id
     * @param requestBody Update Comment Policy
     * @returns any Updated Comment Policy
     * @throws ApiError
     */
    public static patchCommentsPolicies(
        contentType: 'articles' | 'videos' | 'polls' | 'galleries',
        id: number,
        requestBody?: CommentPolicyRequest,
    ): CancelablePromise<{
        data?: CommentPolicyResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{contentType}/comments/policies/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Comment Policy
     * @param contentType
     * @param id
     * @returns any Comment Policy Deleted
     * @throws ApiError
     */
    public static deleteCommentsPolicies(
        contentType: 'articles' | 'videos' | 'polls' | 'galleries',
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{contentType}/comments/policies/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
            errors: {
                404: `Comment Policy not found`,
            },
        });
    }

}