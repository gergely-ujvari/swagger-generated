/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MainMedia } from './MainMedia';
import type { Seo } from './Seo';

export type ArticleUpdateRequest = {
    /**
     * The title of the content. It should always be provided
     */
    title?: string;
    /**
     * This is a brief description or a summary of the content.
     */
    subtitle?: string | null;
    /**
     * Something that appears before the actual headline. For instance, a headline can be:\"Ronaldo says:\" when the actual title is \"We are a better team than Ajax\". In another use case, can be used as alternative title.
     */
    strapline?: string | null;
    /**
     * Content footer.
     */
    footer?: string | null;
    /**
     * Body is composed as Array of Json objects generated by the \"Blocky\" component from the CMS
     */
    body?: Array<any> | null;
    category_id?: string;
    /**
     * ID of a valid comment policy for this content type
     */
    comment_policy_id?: number | null;
    /**
     * The first time when the content should appear to the public. If not provided, we use the date in created_at.
     */
    published_at?: string | null;
    /**
     * The last time when the content should be available to the public.
     */
    published_until?: string | null;
    /**
     * An array of valid IDs for Distribution Channels
     */
    published_channels?: Array<number> | null;
    /**
     * An array of valid IDs for Distribution Channels
     */
    published_regions?: Array<number> | null;
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the article was updated.
     */
    updated_at?: string;
    /**
     * Slug of a valid status for this content type
     */
    status?: string | null;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    /**
     * ID of a valid origin for this content type
     */
    origin_id?: number | null;
    live?: boolean;
    important?: boolean;
    run_ads?: boolean;
    /**
     * Array of author IDs. If no author is provided upon content creation, we select the default one (if available)
     */
    authors?: Array<number> | null;
    /**
     * A field for one-time author
     */
    custom_author?: string | null;
    /**
     * Use main_media object to relate images to content
     */
    image_id?: string | null;
    /**
     * Use main_media object to relate images to content
     */
    image_description?: string | null;
    additional_categories?: Array<number> | null;
    is_adult_content?: boolean;
    is_sensitive_content?: boolean;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * A URL that is going to be used for redirects. If you want a piece of content to take you to a specific page, you should put that address here.
     */
    external_url?: string | null;
    seo?: Seo;
    main_media?: Array<MainMedia>;
};
