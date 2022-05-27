/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageRequest } from '../models/ImageRequest';
import type { ImageResponse } from '../models/ImageResponse';
import type { ImagesCollection } from '../models/ImagesCollection';
import type { ImageUpdateRequest } from '../models/ImageUpdateRequest';
import type { RelatedRequest } from '../models/RelatedRequest';
import type { RelatedResponse } from '../models/RelatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ImageService {

    /**
     * List of all images
     * List of all available images
     * @param page Pagination
     * @param limit Items per page
     * @returns ImagesCollection OK
     * @throws ApiError
     */
    public static getImages(
        page: number = 1,
        limit: number = 20,
    ): CancelablePromise<ImagesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Upload Image
     * @param requestBody Upload Image
     * @returns any Accepted
     * @throws ApiError
     */
    public static postImages(
        requestBody?: ImageRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Image
     * @param id
     * @returns any Image Response
     * @throws ApiError
     */
    public static getImages1(
        id: number,
    ): CancelablePromise<{
        data?: ImageResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Image metadata
     * @param id
     * @param requestBody Change Uploaded Image
     * @returns any Updated Image
     * @throws ApiError
     */
    public static patchImages(
        id: number,
        requestBody?: ImageUpdateRequest,
    ): CancelablePromise<{
        data?: ImageResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/images/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Related Content
     * @param id
     * @returns RelatedResponse Image Response
     * @throws ApiError
     */
    public static getImagesRelated(
        id: number,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images/{id}/related',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add Related Content
     * @param id
     * @param requestBody Add related content.
     * @returns RelatedResponse Image Response
     * @throws ApiError
     */
    public static postImagesRelated(
        id: number,
        requestBody?: RelatedRequest,
    ): CancelablePromise<RelatedResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/{id}/related',
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
     * @param createdBy Valid ID of admin
     * @param originId Valid ID of images origin
     * @param type Valid slug of image type
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
     * @param limit Items per page
     * @returns ImagesCollection Results
     * @throws ApiError
     */
    public static getImagesSearch(
        query: string = '*',
        ids: string = '1,2,3',
        createdBy: number = 2,
        originId: number = 2,
        type: string = 'eyecatcher',
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
        limit: number = 20,
    ): CancelablePromise<ImagesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images/search',
            query: {
                'query': query,
                'ids': ids,
                'createdBy': createdBy,
                'originId': originId,
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
                'limit': limit,
            },
        });
    }

}