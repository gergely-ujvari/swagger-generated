/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListsCollection } from '../models/ListsCollection';
import type { ListsRequest } from '../models/ListsRequest';
import type { ListsResponse } from '../models/ListsResponse';
import type { ListsUpdateRequest } from '../models/ListsUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ListsService {

    /**
     * List of all Lists
     * List of all Lists
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     * @returns ListsCollection Collection of Lists
     * @throws ApiError
     */
    public static getLists(
        page: number = 1,
        limit: number = 20,
        sort: string = 'created_at:desc',
    ): CancelablePromise<ListsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists',
            query: {
                'page': page,
                'limit': limit,
                'sort[]': sort,
            },
        });
    }

    /**
     * Add List
     * @param requestBody Add List
     * @returns ListsResponse Article
     * @throws ApiError
     */
    public static postLists(
        requestBody?: ListsRequest,
    ): CancelablePromise<ListsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single List
     * @param id
     * @returns any List
     * @throws ApiError
     */
    public static getLists1(
        id: number,
    ): CancelablePromise<{
        data?: ListsResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update List
     * @param id
     * @param requestBody Update List
     * @returns any Updated List
     * @throws ApiError
     */
    public static patchLists(
        id: number,
        requestBody?: ListsUpdateRequest,
    ): CancelablePromise<{
        data?: ListsResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lists/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete List.
     * @param id
     * @returns any List Deleted
     * @throws ApiError
     */
    public static deleteLists(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lists/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param query Search string
     * @param ids CSV of valid list IDs. OR filter. List ID is 1 or 2 or 3
     * @param itemIds CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param createdBy Valid ID of admin
     * @param status Valid slug of list status
     * @param language Filter by language
     * @param limit Items per page
     * @returns ListsCollection Results
     * @throws ApiError
     */
    public static getListsSearch(
        query: string = '*',
        ids: string = '1,2,3',
        itemIds: string = '1,2,3',
        createdBy: number = 2,
        status: string = 'active',
        language?: string,
        limit: number = 20,
    ): CancelablePromise<ListsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/search',
            query: {
                'query': query,
                'ids': ids,
                'itemIds': itemIds,
                'createdBy': createdBy,
                'status': status,
                'language': language,
                'limit': limit,
            },
        });
    }

}