/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OriginRequest } from '../models/OriginRequest';
import type { OriginResponse } from '../models/OriginResponse';
import type { OriginsCollection } from '../models/OriginsCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContentOriginsService {

    /**
     * @param contentType
     * @returns OriginsCollection All available origins, scoped per content type
     * @throws ApiError
     */
    public static getOrigins(
        contentType: 'articles' | 'videos' | 'images' | 'galleries',
    ): CancelablePromise<OriginsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/origins',
            path: {
                'contentType': contentType,
            },
        });
    }

    /**
     * Add Origin for content type
     * @param contentType
     * @param requestBody Add Origin
     * @returns OriginResponse Origin
     * @throws ApiError
     */
    public static postOrigins(
        contentType: 'articles' | 'videos' | 'images' | 'galleries',
        requestBody?: OriginRequest,
    ): CancelablePromise<OriginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{contentType}/origins',
            path: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Origin
     * @param contentType
     * @param id
     * @returns any Origin
     * @throws ApiError
     */
    public static getOrigins1(
        contentType: 'articles' | 'videos' | 'images' | 'galleries',
        id: number,
    ): CancelablePromise<{
        data?: OriginResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/origins/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
        });
    }

    /**
     * Update an Origin
     * @param contentType
     * @param id
     * @param requestBody Update Origin
     * @returns any Updated Origin
     * @throws ApiError
     */
    public static patchOrigins(
        contentType: 'articles' | 'videos' | 'images' | 'galleries',
        id: number,
        requestBody?: OriginRequest,
    ): CancelablePromise<{
        data?: OriginResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{contentType}/origins/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}