/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GalleriesCollection } from '../models/GalleriesCollection';
import type { GalleryRequest } from '../models/GalleryRequest';
import type { GalleryResponse } from '../models/GalleryResponse';
import type { GalleryUpdateRequest } from '../models/GalleryUpdateRequest';
import type { RelatedRequest } from '../models/RelatedRequest';
import type { RelatedResponse } from '../models/RelatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GalleriesService {

    /**
     * List of all galleries
     * List of all galleries
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     * @returns GalleriesCollection Collection of Galleries
     * @throws ApiError
     */
    public static getGalleries(
        page: number = 1,
        limit: number = 20,
        sort: string = 'created_at:desc',
    ): CancelablePromise<GalleriesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/galleries',
            query: {
                'page': page,
                'limit': limit,
                'sort[]': sort,
            },
        });
    }

    /**
     * Add Gallery
     * @param requestBody Add Gallery
     * @returns GalleryResponse Gallery
     * @throws ApiError
     */
    public static postGalleries(
        requestBody?: GalleryRequest,
    ): CancelablePromise<GalleryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/galleries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Gallery
     * @param id
     * @returns any Gallery
     * @throws ApiError
     */
    public static getGalleries1(
        id: number,
    ): CancelablePromise<{
        data?: GalleryResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Gallery
     * @param id
     * @param requestBody Update Gallery
     * @returns any Updated Gallery
     * @throws ApiError
     */
    public static patchGalleries(
        id: number,
        requestBody?: GalleryUpdateRequest,
    ): CancelablePromise<{
        data?: GalleryResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Gallery
     * @param id
     * @returns any Gallery Deleted
     * @throws ApiError
     */
    public static deleteGalleries(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/galleries/{id}',
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
    public static getGalleriesRelated(
        id: number,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/galleries/{id}/related',
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
    public static postGalleriesRelated(
        id: number,
        requestBody?: RelatedRequest,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/galleries/{id}/related',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param category Valid ID of category
     * @param createdBy Valid ID of admin
     * @param originId Valid ID of gallery origin
     * @param status Valid slug of gallery status
     * @param type Valid slug of gallery type
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
     * @returns GalleriesCollection Results
     * @throws ApiError
     */
    public static getGalleriesSearch(
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
    ): CancelablePromise<GalleriesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/galleries/search',
            query: {
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