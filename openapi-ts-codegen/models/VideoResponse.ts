/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorResponse } from './AuthorResponse';
import type { CategoryResponse } from './CategoryResponse';
import type { ChannelResponse } from './ChannelResponse';
import type { CommentPolicyResponse } from './CommentPolicyResponse';
import type { ImageResponse } from './ImageResponse';
import type { MainMedia } from './MainMedia';
import type { OriginResponse } from './OriginResponse';
import type { RegionResponse } from './RegionResponse';
import type { Seo } from './Seo';
import type { TranslationGroupResponse } from './TranslationGroupResponse';
import type { VideoUrls } from './VideoUrls';

/**
 * Video
 */
export type VideoResponse = {
    id?: string;
    /**
     * The title of the content. It should always be provided
     */
    title?: string;
    /**
     * This is a brief description or a summary of the content.
     */
    subtitle?: string;
    /**
     * Something that appears before the actual headline. For instance, a headline can be:\"Ronaldo says:\" when the actual title is \"We are a better team than Ajax\". In another use case, can be used as alternative title.
     */
    strapline?: string;
    /**
     * Content footer.
     */
    footer?: string | null;
    body?: any;
    authors?: Array<AuthorResponse>;
    owner?: OriginResponse;
    origin?: OriginResponse;
    run_ads?: boolean;
    /**
     * The first time when the content should appear to the public. If not provided, we use the date in created_at.
     */
    published_at?: string;
    /**
     * The last time when the content should be available to the public.
     */
    published_until?: string;
    published_channels?: Array<ChannelResponse>;
    published_regions?: Array<RegionResponse>;
    /**
     * Slug of a valid status for this content type
     */
    status?: string | null;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    comments?: {
        policy?: CommentPolicyResponse;
    };
    important?: boolean;
    /**
     * A field for one-time author
     */
    custom_author?: string;
    category?: CategoryResponse;
    additional_categories?: Array<CategoryResponse>;
    /**
     * Use main_media object to relate images to content
     */
    image?: {
        data?: ImageResponse;
        description?: string;
    };
    urls?: VideoUrls;
    adult_content?: boolean;
    sensitive_content?: boolean;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    seo?: Seo;
    main_media?: Array<MainMedia>;
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the article was updated.
     */
    updated_at?: string;
    /**
     * Language of the resource
     */
    language?: string;
    translation_group?: TranslationGroupResponse;
};
