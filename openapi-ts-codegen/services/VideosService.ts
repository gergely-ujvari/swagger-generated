/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticlesCollection } from '../models/ArticlesCollection';
import type { RelatedRequest } from '../models/RelatedRequest';
import type { RelatedResponse } from '../models/RelatedResponse';
import type { VideoRequest } from '../models/VideoRequest';
import type { VideoResponse } from '../models/VideoResponse';
import type { VideosCollection } from '../models/VideosCollection';
import type { VideoUpdateRequest } from '../models/VideoUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VideosService {

    /**
     * List of all videos
     * List of all videos
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     * @returns VideosCollection Collection of Videos
     * @throws ApiError
     */
    public static getVideos(
        page: number = 1,
        limit: number = 20,
        sort: string = 'created_at:desc',
    ): CancelablePromise<VideosCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/videos',
            query: {
                'page': page,
                'limit': limit,
                'sort[]': sort,
            },
        });
    }

    /**
     * Add Video
     * @param requestBody Add Video
     * @returns VideoResponse OK
     * @throws ApiError
     */
    public static postVideos(
        requestBody?: VideoRequest,
    ): CancelablePromise<VideoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/videos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Video
     * @param id
     * @returns any Video
     * @throws ApiError
     */
    public static getVideos1(
        id: number,
    ): CancelablePromise<{
        data?: VideoResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/videos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Video
     * @param id
     * @param requestBody Update Video
     * @returns any Updated Video
     * @throws ApiError
     */
    public static patchVideos(
        id: number,
        requestBody?: VideoUpdateRequest,
    ): CancelablePromise<{
        data?: VideoResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/videos/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Video.
     * @param id
     * @returns any Video Deleted
     * @throws ApiError
     */
    public static deleteVideos(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/videos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Related Content
     * @param id
     * @returns RelatedResponse Related Content.
     * @throws ApiError
     */
    public static getVideosRelated(
        id: number,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/videos/{id}/related',
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
    public static postVideosRelated(
        id: number,
        requestBody?: RelatedRequest,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/videos/{id}/related',
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
     * @param originId Valid ID of video origin
     * @param status Valid slug of video status
     * @param type Valid slug of video type
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
    public static getVideosSearch(
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
            url: '/videos/search',
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