/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdMapping } from '../models/IdMapping';
import type { IdMappingCollection } from '../models/IdMappingCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MiscellaneousService {

    /**
     * Get ID mappings according to various filters
     * @param contentId
     * @param contentType
     * @param sourceName
     * @param sourceType
     * @param sourceId
     * @returns any ID Mapping
     * @throws ApiError
     */
    public static getMappings(
        contentId?: string,
        contentType?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom',
        sourceName: string = 'AFP',
        sourceType: string = 'newsarticle',
        sourceId: string = 'afp123',
    ): CancelablePromise<{
        data?: IdMappingCollection;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mappings',
            query: {
                'content_id': contentId,
                'content_type': contentType,
                'source_name': sourceName,
                'source_type': sourceType,
                'source_id': sourceId,
            },
        });
    }

    /**
     * Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key
     * @param requestBody Add ID Mapping entry
     * @returns IdMapping ID Mapping
     * @throws ApiError
     */
    public static putMappings(
        requestBody?: IdMapping,
    ): CancelablePromise<IdMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mappings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete ID Mapping by content_id/content_type key
     * @param contentId
     * @param contentType
     * @returns any ID Mapping Deleted
     * @throws ApiError
     */
    public static deleteMappings(
        contentId: string,
        contentType: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mappings',
            query: {
                'content_id': contentId,
                'content_type': contentType,
            },
            errors: {
                404: `ID Mapping not found`,
            },
        });
    }

}