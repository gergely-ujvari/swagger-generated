/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagsCollection } from '../models/TagsCollection';
import type { TagsRequest } from '../models/TagsRequest';
import type { TagsResponse } from '../models/TagsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * List of all Tags
     * List of all Tags
     * @param page Pagination
     * @param limit Items per page
     * @param orderType Filter tags by order type
     * @returns TagsCollection Collection of Tags
     * @throws ApiError
     */
    public static getTags(
        page: number = 1,
        limit: number = 20,
        orderType?: 'ordered' | 'unordered',
    ): CancelablePromise<TagsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
            query: {
                'page': page,
                'limit': limit,
                'order_type': orderType,
            },
        });
    }

    /**
     * Add Tag
     * @param requestBody Add Tag
     * @returns TagsResponse Article
     * @throws ApiError
     */
    public static postTags(
        requestBody?: TagsRequest,
    ): CancelablePromise<TagsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Tag
     * @param id
     * @returns any Tag
     * @throws ApiError
     */
    public static getTags1(
        id: number,
    ): CancelablePromise<{
        data?: TagsResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Tag
     * @param id
     * @param requestBody Update Tag
     * @returns any Updated Tag
     * @throws ApiError
     */
    public static patchTags(
        id: number,
        requestBody?: TagsRequest,
    ): CancelablePromise<{
        data?: TagsResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Tag.
     * @param id
     * @returns any Tag Deleted
     * @throws ApiError
     */
    public static deleteTags(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param limit Items per page
     * @param orderType Filter tags by order type
     * @returns TagsCollection Results
     * @throws ApiError
     */
    public static getTagsSearch(
        query: string = '*',
        ids: string = '1,2,3',
        limit: number = 20,
        orderType?: 'ordered' | 'unordered',
    ): CancelablePromise<TagsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/search',
            query: {
                'query': query,
                'ids': ids,
                'limit': limit,
                'order_type': orderType,
            },
        });
    }

}