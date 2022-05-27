/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IdMapping = {
    /**
     * The ID of the record in Content API
     */
    content_id?: string;
    content_type?: IdMapping.content_type;
    /**
     * The name or alias of the external source system.
     */
    source_name?: string;
    /**
     * Content type, as defined in source system.
     */
    source_type?: boolean;
    /**
     * Content ID, as present in source system.
     */
    source_id?: string;
};

export namespace IdMapping {

    export enum content_type {
        ARTICLE = 'article',
        VIDEO = 'video',
        GALLERY = 'gallery',
        IMAGE = 'image',
        TAG = 'tag',
        CATEGORY = 'category',
        BANNER = 'banner',
        LIST = 'list',
        POLL = 'poll',
        AUTHOR = 'author',
        TYPE = 'type',
        STATUS = 'status',
        REGION = 'region',
    }


}
