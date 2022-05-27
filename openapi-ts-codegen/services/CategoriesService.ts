/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriesCollection } from '../models/CategoriesCollection';
import type { CategoryRequest } from '../models/CategoryRequest';
import type { CategoryResponse } from '../models/CategoryResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * List of all categories
     * List of all categories
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     * @returns CategoriesCollection OK
     * @throws ApiError
     */
    public static getCategories(
        page: number = 1,
        limit: number = 20,
        sort: string = 'created_at:desc',
    ): CancelablePromise<CategoriesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
            query: {
                'page': page,
                'limit': limit,
                'sort[]': sort,
            },
        });
    }

    /**
     * Add Category
     * @param requestBody Add Category. Category title is unique.
     * @returns CategoryResponse OK
     * @throws ApiError
     */
    public static postCategories(
        requestBody?: CategoryRequest,
    ): CancelablePromise<CategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Category
     * @param id
     * @returns any Category Response
     * @throws ApiError
     */
    public static getCategories1(
        id: number,
    ): CancelablePromise<{
        data?: CategoryResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Category. Category title is unique.
     * @param id
     * @param requestBody Update Category
     * @returns any Updated Category
     * @throws ApiError
     */
    public static patchCategories(
        id: number,
        requestBody?: CategoryRequest,
    ): CancelablePromise<{
        data?: CategoryResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Category.
     * Category cannot be deleted until all content is moved to antoher category (move-content).
     * @param id
     * @returns any Category Deleted
     * @throws ApiError
     */
    public static deleteCategories(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
        });
    }

}