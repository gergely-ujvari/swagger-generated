/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BannersCollection } from '../models/BannersCollection';
import type { BannersRequest } from '../models/BannersRequest';
import type { BannersResponse } from '../models/BannersResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BannersService {

    /**
     * List of all Banners
     * List of all Banners
     * @param page Pagination
     * @param limit Items per page
     * @returns BannersCollection Collection of Banners
     * @throws ApiError
     */
    public static getBanners(
        page: number = 1,
        limit: number = 20,
    ): CancelablePromise<BannersCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/banners/',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Add Banner
     * @param requestBody Add Banner
     * @returns BannersResponse Banners
     * @throws ApiError
     */
    public static postBanners(
        requestBody?: BannersRequest,
    ): CancelablePromise<BannersResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/banners/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Banner
     * @param id
     * @returns any Banner
     * @throws ApiError
     */
    public static getBanners1(
        id: number,
    ): CancelablePromise<{
        data?: BannersResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/banners/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Banner
     * @param id
     * @param requestBody Update Banner
     * @returns any Updated Banner
     * @throws ApiError
     */
    public static patchBanners(
        id: number,
        requestBody?: BannersRequest,
    ): CancelablePromise<{
        data?: BannersResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/banners/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Banner.
     * @param id
     * @returns any Banner Deleted
     * @throws ApiError
     */
    public static deleteBanners(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/banners/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param type Valid slug of banner type
     * @param limit Items per page
     * @returns BannersCollection Results
     * @throws ApiError
     */
    public static getBannersSearch(
        query: string = '*',
        ids: string = '1,2,3',
        type: string = 'static-html',
        limit: number = 20,
    ): CancelablePromise<BannersCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/banners/search',
            query: {
                'query': query,
                'ids': ids,
                'type': type,
                'limit': limit,
            },
        });
    }

}