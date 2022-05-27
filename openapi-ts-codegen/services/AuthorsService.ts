/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorRequest } from '../models/AuthorRequest';
import type { AuthorResponse } from '../models/AuthorResponse';
import type { AuthorsCollection } from '../models/AuthorsCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorsService {

    /**
     * List of all authors
     * List of all authors
     * @param page Pagination
     * @param limit Items per page
     * @returns AuthorsCollection Collection of Authors
     * @throws ApiError
     */
    public static getAuthors(
        page: number = 1,
        limit: number = 20,
    ): CancelablePromise<AuthorsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authors',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Add Author
     * @param requestBody Add Author
     * @returns AuthorResponse OK
     * @throws ApiError
     */
    public static postAuthors(
        requestBody?: AuthorRequest,
    ): CancelablePromise<AuthorResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authors',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Author
     * @param id
     * @returns any Author
     * @throws ApiError
     */
    public static getAuthors1(
        id: number,
    ): CancelablePromise<{
        data?: AuthorResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authors/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Author
     * @param id
     * @param requestBody Update Author
     * @returns any Updated Author
     * @throws ApiError
     */
    public static patchAuthors(
        id: number,
        requestBody?: AuthorRequest,
    ): CancelablePromise<{
        data?: AuthorResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authors/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Author
     * @param id
     * @returns any Author Deleted
     * @throws ApiError
     */
    public static deleteAuthors(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authors/{id}',
            path: {
                'id': id,
            },
        });
    }

}