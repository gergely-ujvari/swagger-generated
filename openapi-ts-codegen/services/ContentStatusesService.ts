/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusesCollection } from '../models/StatusesCollection';
import type { StatusRequest } from '../models/StatusRequest';
import type { StatusResponse } from '../models/StatusResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContentStatusesService {

    /**
     * @param contentType
     * @returns StatusesCollection All available statuses, scoped percontent type
     * @throws ApiError
     */
    public static getStatuses(
        contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries',
    ): CancelablePromise<StatusesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/statuses',
            path: {
                'contentType': contentType,
            },
        });
    }

    /**
     * Add Status for content type
     * @param contentType
     * @param requestBody Add Status
     * @returns StatusResponse Status
     * @throws ApiError
     */
    public static postStatuses(
        contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries',
        requestBody?: StatusRequest,
    ): CancelablePromise<StatusResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{contentType}/statuses',
            path: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Status
     * @param contentType
     * @param id
     * @returns any Status
     * @throws ApiError
     */
    public static getStatuses1(
        contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries',
        id: number,
    ): CancelablePromise<{
        data?: StatusResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/statuses/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
        });
    }

    /**
     * Update a Status
     * @param contentType
     * @param id
     * @param requestBody Update Status
     * @returns any Updated Status
     * @throws ApiError
     */
    public static patchStatuses(
        contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries',
        id: number,
        requestBody?: StatusRequest,
    ): CancelablePromise<{
        data?: StatusResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{contentType}/statuses/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}