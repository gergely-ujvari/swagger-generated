/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeRequest } from '../models/TypeRequest';
import type { TypeResponse } from '../models/TypeResponse';
import type { TypesCollection } from '../models/TypesCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContentTypesService {

    /**
     * @param contentType
     * @returns TypesCollection All available types, scoped per content type
     * @throws ApiError
     */
    public static getTypes(
        contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners',
    ): CancelablePromise<TypesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/types',
            path: {
                'contentType': contentType,
            },
        });
    }

    /**
     * Add Type for content type
     * @param contentType
     * @param requestBody Add Type
     * @returns TypeResponse Type
     * @throws ApiError
     */
    public static postTypes(
        contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners',
        requestBody?: TypeRequest,
    ): CancelablePromise<TypeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{contentType}/types',
            path: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Type
     * @param contentType
     * @param id
     * @returns any Type
     * @throws ApiError
     */
    public static getTypes1(
        contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners',
        id: number,
    ): CancelablePromise<{
        data?: TypeResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{contentType}/types/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
        });
    }

    /**
     * Update a Type
     * @param contentType
     * @param id
     * @param requestBody Update Type
     * @returns any Updated Type
     * @throws ApiError
     */
    public static patchTypes(
        contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners',
        id: number,
        requestBody?: TypeRequest,
    ): CancelablePromise<{
        data?: TypeResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{contentType}/types/{id}',
            path: {
                'contentType': contentType,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}