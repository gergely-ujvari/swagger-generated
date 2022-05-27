/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleRequest } from '../models/ArticleRequest';
import type { ArticleResponse } from '../models/ArticleResponse';
import type { ArticlesCollection } from '../models/ArticlesCollection';
import type { ArticleUpdateRequest } from '../models/ArticleUpdateRequest';
import type { RelatedRequest } from '../models/RelatedRequest';
import type { RelatedResponse } from '../models/RelatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArticlesService {

    /**
     * List of all articles
     * List of all articles
     * @param optionalData Get sports_related data
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     * @returns ArticlesCollection Collection of Articles
     * @throws ApiError
     */
    public static getArticles(
        optionalData?: 'sports_related',
        page: number = 1,
        limit: number = 20,
        sort: string = 'created_at:desc',
    ): CancelablePromise<ArticlesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles',
            query: {
                'optional_data': optionalData,
                'page': page,
                'limit': limit,
                'sort[]': sort,
            },
        });
    }

    /**
     * Add Article
     * @param requestBody Add Article
     * @returns ArticleResponse Article
     * @throws ApiError
     */
    public static postArticles(
        requestBody?: ArticleRequest,
    ): CancelablePromise<ArticleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/articles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Article
     * @param id
     * @returns any Article
     * @throws ApiError
     */
    public static getArticles1(
        id: number,
    ): CancelablePromise<{
        data?: ArticleResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Article
     * @param id
     * @param requestBody Update Article
     * @returns any Updated Article
     * @throws ApiError
     */
    public static patchArticles(
        id: number,
        requestBody?: ArticleUpdateRequest,
    ): CancelablePromise<{
        data?: ArticleResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Article
     * @param id
     * @returns any Article Deleted
     * @throws ApiError
     */
    public static deleteArticles(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Related Content
     * @param id
     * @returns RelatedResponse Related Content
     * @throws ApiError
     */
    public static getArticlesRelated(
        id: number,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/{id}/related',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add Related Content
     * @param id
     * @param requestBody Add related content
     * @returns RelatedResponse Related Content
     * @throws ApiError
     */
    public static postArticlesRelated(
        id: number,
        requestBody?: RelatedRequest,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/articles/{id}/related',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param optionalData Get sports_related data
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param category Valid ID of category
     * @param createdBy Valid ID of admin
     * @param originId Valid ID of article origin
     * @param status Valid slug of article status
     * @param type Valid slug of article type
     * @param publishedChannels CSV of valid content channel IDs
     * @param publishedRegions CSV of valid content region IDs
     * @param teamIds CSV of Team IDs
     * @param playerIds CSV of Player IDs
     * @param tagIds CSV of Tag IDs
     * @param matchId Match ID
     * @param tournamentId Tournament ID
     * @param tournamentIds
     * @param championshipId Championship ID
     * @param roundId Round ID
     * @param language Filter by language
     * @param categoryTreeId Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter.
     * @param authorIds CSV of author IDs
     * @param limit Items per page
     * @returns ArticlesCollection Results
     * @throws ApiError
     */
    public static getArticlesSearch(
        optionalData?: 'sports_related',
        query: string = '*',
        ids: string = '1,2,3',
        category: number = 2,
        createdBy: number = 2,
        originId: number = 2,
        status: string = 'active',
        type: string = 'news',
        publishedChannels: string = '1,2,3',
        publishedRegions: string = '1,2,3',
        teamIds: string = '1,2,3',
        playerIds: string = '1,2,3',
        tagIds: string = '1,2,3',
        matchId: number = 1,
        tournamentId: number = 1,
        tournamentIds: string = '1,2,3',
        championshipId: number = 1,
        roundId: number = 1,
        language?: string,
        categoryTreeId: number = 1,
        authorIds: string = '1,2,3',
        limit: number = 20,
    ): CancelablePromise<ArticlesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/search',
            query: {
                'optional_data': optionalData,
                'query': query,
                'ids': ids,
                'category': category,
                'createdBy': createdBy,
                'originId': originId,
                'status': status,
                'type': type,
                'publishedChannels': publishedChannels,
                'publishedRegions': publishedRegions,
                'teamIds': teamIds,
                'playerIds': playerIds,
                'tagIds': tagIds,
                'matchId': matchId,
                'tournamentId': tournamentId,
                'tournamentIds': tournamentIds,
                'championshipId': championshipId,
                'roundId': roundId,
                'language': language,
                'categoryTreeId': categoryTreeId,
                'authorIds': authorIds,
                'limit': limit,
            },
        });
    }

}