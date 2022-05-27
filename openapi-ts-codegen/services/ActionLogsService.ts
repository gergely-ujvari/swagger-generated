/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionLogsCollection } from '../models/ActionLogsCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActionLogsService {

    /**
     * List all action logs for specific resource
     * List all action logs for specific resource
     * @param project Valid project
     * @param contentType Resource type
     * @param contentId Resource ID
     * @returns ActionLogsCollection Collection of action logs
     * @throws ApiError
     */
    public static getActionLogsContent(
        project: string = '1',
        contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption' = 'Article',
        contentId: number = 1,
    ): CancelablePromise<ActionLogsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/action/logs/content',
            headers: {
                'project': project,
            },
            query: {
                'content_type': contentType,
                'content_id': contentId,
            },
        });
    }

    /**
     * List all action logs for specific admin
     * List all action logs for specific admin
     * @param project Valid project
     * @param adminId Admin ID
     * @param contentType Resource type
     * @param action Action
     * @returns ActionLogsCollection Collection of action logs
     * @throws ApiError
     */
    public static getActionLogsAdmin(
        project: string = '1',
        adminId: number = 1,
        contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption' = 'Article',
        action: 'create' | 'update' | 'delete' = 'create',
    ): CancelablePromise<ActionLogsCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/action/logs/admin',
            headers: {
                'project': project,
            },
            query: {
                'admin_id': adminId,
                'content_type': contentType,
                'action': action,
            },
        });
    }

}