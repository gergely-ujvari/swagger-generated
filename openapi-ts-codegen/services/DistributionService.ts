/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelRequest } from '../models/ChannelRequest';
import type { ChannelResponse } from '../models/ChannelResponse';
import type { ChannelsCollection } from '../models/ChannelsCollection';
import type { RegionRequest } from '../models/RegionRequest';
import type { RegionResponse } from '../models/RegionResponse';
import type { RegionsCollection } from '../models/RegionsCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DistributionService {

    /**
     * @returns RegionsCollection All available regions for this project
     * @throws ApiError
     */
    public static getDistributionRegions(): CancelablePromise<RegionsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distribution/regions',
        });
    }

    /**
     * Add Region
     * @param requestBody Add Region
     * @returns RegionResponse Region
     * @throws ApiError
     */
    public static postDistributionRegions(
        requestBody?: RegionRequest,
    ): CancelablePromise<RegionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/distribution/regions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Region
     * @param id
     * @returns any Region
     * @throws ApiError
     */
    public static getDistributionRegions1(
        id: number,
    ): CancelablePromise<{
        data?: RegionResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distribution/regions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Region
     * @param id
     * @param requestBody Update Region
     * @returns any Updated Region
     * @throws ApiError
     */
    public static patchDistributionRegions(
        id: number,
        requestBody?: RegionRequest,
    ): CancelablePromise<{
        data?: RegionResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/distribution/regions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Region
     * @param id
     * @returns any Region Deleted
     * @throws ApiError
     */
    public static deleteDistributionRegions(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/distribution/regions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Region not found`,
            },
        });
    }

    /**
     * @returns ChannelsCollection All available channels for this project
     * @throws ApiError
     */
    public static getDistributionChannels(): CancelablePromise<ChannelsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distribution/channels',
        });
    }

    /**
     * Add Channel
     * @param requestBody Add Channel
     * @returns ChannelResponse Channel
     * @throws ApiError
     */
    public static postDistributionChannels(
        requestBody?: ChannelRequest,
    ): CancelablePromise<ChannelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/distribution/channels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Single Channel
     * @param id
     * @returns any Channel
     * @throws ApiError
     */
    public static getDistributionChannels1(
        id: number,
    ): CancelablePromise<{
        data?: ChannelResponse;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distribution/channels/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Channel
     * @param id
     * @param requestBody Update Channel
     * @returns any Updated Channel
     * @throws ApiError
     */
    public static patchDistributionChannels(
        id: number,
        requestBody?: ChannelRequest,
    ): CancelablePromise<{
        data?: ChannelResponse;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/distribution/channels/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Channel
     * @param id
     * @returns any Channel Deleted
     * @throws ApiError
     */
    public static deleteDistributionChannels(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/distribution/channels/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Channel not found`,
            },
        });
    }

}