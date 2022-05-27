import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionLogsCollection } from '../models/ActionLogsCollection';
import { ActionLogsResponse } from '../models/ActionLogsResponse';
import { ActionLogsResponseActor } from '../models/ActionLogsResponseActor';
import { ArticleRequest } from '../models/ArticleRequest';
import { ArticleResponse } from '../models/ArticleResponse';
import { ArticleResponseComments } from '../models/ArticleResponseComments';
import { ArticleResponseImage } from '../models/ArticleResponseImage';
import { ArticleTypesResponse } from '../models/ArticleTypesResponse';
import { ArticleUpdateRequest } from '../models/ArticleUpdateRequest';
import { ArticlesCollection } from '../models/ArticlesCollection';
import { ArticlesIdDelete200Response } from '../models/ArticlesIdDelete200Response';
import { AuthorRequest } from '../models/AuthorRequest';
import { AuthorResponse } from '../models/AuthorResponse';
import { AuthorsCollection } from '../models/AuthorsCollection';
import { AuthorsIdDelete200Response } from '../models/AuthorsIdDelete200Response';
import { BannersCollection } from '../models/BannersCollection';
import { BannersIdDelete200Response } from '../models/BannersIdDelete200Response';
import { BannersRequest } from '../models/BannersRequest';
import { BannersResponse } from '../models/BannersResponse';
import { BlockyArticleBlock } from '../models/BlockyArticleBlock';
import { BlockyArticleBlockData } from '../models/BlockyArticleBlockData';
import { BlockyBannerBlock } from '../models/BlockyBannerBlock';
import { BlockyBannerBlockData } from '../models/BlockyBannerBlockData';
import { BlockyEditorBlock } from '../models/BlockyEditorBlock';
import { BlockyEditorBlockData } from '../models/BlockyEditorBlockData';
import { BlockyEmbeddedWidgetBlock } from '../models/BlockyEmbeddedWidgetBlock';
import { BlockyEmbeddedWidgetBlockData } from '../models/BlockyEmbeddedWidgetBlockData';
import { BlockyGalleryBlock } from '../models/BlockyGalleryBlock';
import { BlockyGalleryBlockData } from '../models/BlockyGalleryBlockData';
import { BlockyGalleryBlockDataPreview } from '../models/BlockyGalleryBlockDataPreview';
import { BlockyHighlightBlock } from '../models/BlockyHighlightBlock';
import { BlockyHighlightBlockData } from '../models/BlockyHighlightBlockData';
import { BlockyImageBlock } from '../models/BlockyImageBlock';
import { BlockyImageBlockData } from '../models/BlockyImageBlockData';
import { BlockyLinkBlock } from '../models/BlockyLinkBlock';
import { BlockyLinkBlockData } from '../models/BlockyLinkBlockData';
import { BlockySMPWidgetBlock } from '../models/BlockySMPWidgetBlock';
import { BlockySMPWidgetBlockData } from '../models/BlockySMPWidgetBlockData';
import { BlockySMPWidgetBlockDataConfig } from '../models/BlockySMPWidgetBlockDataConfig';
import { BlockySMPWidgetBlockDataPreview } from '../models/BlockySMPWidgetBlockDataPreview';
import { BlockyVideoBlock } from '../models/BlockyVideoBlock';
import { BlockyVideoBlockData } from '../models/BlockyVideoBlockData';
import { CategoriesCollection } from '../models/CategoriesCollection';
import { CategoriesIdDelete200Response } from '../models/CategoriesIdDelete200Response';
import { CategoryRequest } from '../models/CategoryRequest';
import { CategoryResponse } from '../models/CategoryResponse';
import { ChannelRequest } from '../models/ChannelRequest';
import { ChannelResponse } from '../models/ChannelResponse';
import { ChannelsCollection } from '../models/ChannelsCollection';
import { CommentPoliciesCollection } from '../models/CommentPoliciesCollection';
import { CommentPolicyRequest } from '../models/CommentPolicyRequest';
import { CommentPolicyResponse } from '../models/CommentPolicyResponse';
import { ContentTypeCommentsPoliciesIdDelete200Response } from '../models/ContentTypeCommentsPoliciesIdDelete200Response';
import { ContentTypeOriginsIdGet200Response } from '../models/ContentTypeOriginsIdGet200Response';
import { ContentTypeStatusesIdGet200Response } from '../models/ContentTypeStatusesIdGet200Response';
import { ContentTypeTypesIdGet200Response } from '../models/ContentTypeTypesIdGet200Response';
import { CreatorPartialResponse } from '../models/CreatorPartialResponse';
import { DistributionChannelsIdDelete200Response } from '../models/DistributionChannelsIdDelete200Response';
import { DistributionRegionsIdDelete200Response } from '../models/DistributionRegionsIdDelete200Response';
import { GalleriesCollection } from '../models/GalleriesCollection';
import { GalleriesIdDelete200Response } from '../models/GalleriesIdDelete200Response';
import { GalleryRequest } from '../models/GalleryRequest';
import { GalleryRequestItemsInner } from '../models/GalleryRequestItemsInner';
import { GalleryResponse } from '../models/GalleryResponse';
import { GalleryResponseItemsInner } from '../models/GalleryResponseItemsInner';
import { GalleryUpdateRequest } from '../models/GalleryUpdateRequest';
import { IdMapping } from '../models/IdMapping';
import { IdMappingCollection } from '../models/IdMappingCollection';
import { ImageRequest } from '../models/ImageRequest';
import { ImageRequestUrls } from '../models/ImageRequestUrls';
import { ImageRequestUrlsUploaded } from '../models/ImageRequestUrlsUploaded';
import { ImageResponse } from '../models/ImageResponse';
import { ImageUpdateRequest } from '../models/ImageUpdateRequest';
import { ImagesCollection } from '../models/ImagesCollection';
import { ImagesIdGet200Response } from '../models/ImagesIdGet200Response';
import { ListsCollection } from '../models/ListsCollection';
import { ListsIdDelete200Response } from '../models/ListsIdDelete200Response';
import { ListsItem } from '../models/ListsItem';
import { ListsRequest } from '../models/ListsRequest';
import { ListsRequestItemsInner } from '../models/ListsRequestItemsInner';
import { ListsResponse } from '../models/ListsResponse';
import { ListsUpdateRequest } from '../models/ListsUpdateRequest';
import { MainMedia } from '../models/MainMedia';
import { MappingsDelete200Response } from '../models/MappingsDelete200Response';
import { Meta } from '../models/Meta';
import { MetaPagination } from '../models/MetaPagination';
import { MetaPaginationLinks } from '../models/MetaPaginationLinks';
import { OriginRequest } from '../models/OriginRequest';
import { OriginResponse } from '../models/OriginResponse';
import { OriginsCollection } from '../models/OriginsCollection';
import { RegionRequest } from '../models/RegionRequest';
import { RegionResponse } from '../models/RegionResponse';
import { RegionsCollection } from '../models/RegionsCollection';
import { RelatedResponseInner } from '../models/RelatedResponseInner';
import { Seo } from '../models/Seo';
import { SportsRelatedResponseInner } from '../models/SportsRelatedResponseInner';
import { StatusRequest } from '../models/StatusRequest';
import { StatusResponse } from '../models/StatusResponse';
import { StatusesCollection } from '../models/StatusesCollection';
import { TagsCollection } from '../models/TagsCollection';
import { TagsIdDelete200Response } from '../models/TagsIdDelete200Response';
import { TagsRequest } from '../models/TagsRequest';
import { TagsResponse } from '../models/TagsResponse';
import { Translation } from '../models/Translation';
import { TranslationGroupResponse } from '../models/TranslationGroupResponse';
import { TypeRequest } from '../models/TypeRequest';
import { TypeResponse } from '../models/TypeResponse';
import { TypesCollection } from '../models/TypesCollection';
import { Urls } from '../models/Urls';
import { VideoFile } from '../models/VideoFile';
import { VideoRequest } from '../models/VideoRequest';
import { VideoResponse } from '../models/VideoResponse';
import { VideoUpdateRequest } from '../models/VideoUpdateRequest';
import { VideoUrls } from '../models/VideoUrls';
import { VideosCollection } from '../models/VideosCollection';
import { VideosIdDelete200Response } from '../models/VideosIdDelete200Response';
import { ObservableActionLogsApi } from './ObservableAPI';

import { ActionLogsApiRequestFactory, ActionLogsApiResponseProcessor} from "../apis/ActionLogsApi";
export class PromiseActionLogsApi {
    private api: ObservableActionLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionLogsApiRequestFactory,
        responseProcessor?: ActionLogsApiResponseProcessor
    ) {
        this.api = new ObservableActionLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all action logs for specific admin
     * List all action logs for specific admin
     * @param project Valid project
     * @param adminId Admin ID
     * @param contentType Resource type
     * @param action Action
     */
    public actionLogsAdminGet(project: string, adminId: number, contentType?: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', action?: 'create' | 'update' | 'delete', _options?: Configuration): Promise<ActionLogsCollection> {
        const result = this.api.actionLogsAdminGet(project, adminId, contentType, action, _options);
        return result.toPromise();
    }

    /**
     * List all action logs for specific resource
     * List all action logs for specific resource
     * @param project Valid project
     * @param contentType Resource type
     * @param contentId Resource ID
     */
    public actionLogsContentGet(project: string, contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', contentId: number, _options?: Configuration): Promise<ActionLogsCollection> {
        const result = this.api.actionLogsContentGet(project, contentType, contentId, _options);
        return result.toPromise();
    }


}



import { ObservableArticlesApi } from './ObservableAPI';

import { ArticlesApiRequestFactory, ArticlesApiResponseProcessor} from "../apis/ArticlesApi";
export class PromiseArticlesApi {
    private api: ObservableArticlesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesApiRequestFactory,
        responseProcessor?: ArticlesApiResponseProcessor
    ) {
        this.api = new ObservableArticlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all articles
     * List of all articles
     * @param optionalData Get sports_related data
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public articlesGet(optionalData?: 'sports_related', page?: number, limit?: number, sort?: string, _options?: Configuration): Promise<ArticlesCollection> {
        const result = this.api.articlesGet(optionalData, page, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Delete Article
     * @param id 
     */
    public articlesIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.articlesIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Article
     * @param id 
     */
    public articlesIdGet(id: number, _options?: Configuration): Promise<ArticlesIdDelete200Response> {
        const result = this.api.articlesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Article
     * @param id 
     * @param articleUpdateRequest Update Article
     */
    public articlesIdPatch(id: number, articleUpdateRequest?: ArticleUpdateRequest, _options?: Configuration): Promise<ArticlesIdDelete200Response> {
        const result = this.api.articlesIdPatch(id, articleUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Related Content
     * @param id 
     */
    public articlesIdRelatedGet(id: number, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.articlesIdRelatedGet(id, _options);
        return result.toPromise();
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public articlesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.articlesIdRelatedPost(id, relatedResponseInner, _options);
        return result.toPromise();
    }

    /**
     * Add Article
     * @param articleRequest Add Article
     */
    public articlesPost(articleRequest?: ArticleRequest, _options?: Configuration): Promise<ArticleResponse> {
        const result = this.api.articlesPost(articleRequest, _options);
        return result.toPromise();
    }

    /**
     * @param query Search string
     * @param optionalData Get sports_related data
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
     */
    public articlesSearchGet(query: string, optionalData?: 'sports_related', ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Promise<ArticlesCollection> {
        const result = this.api.articlesSearchGet(query, optionalData, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);
        return result.toPromise();
    }


}



import { ObservableAuthorsApi } from './ObservableAPI';

import { AuthorsApiRequestFactory, AuthorsApiResponseProcessor} from "../apis/AuthorsApi";
export class PromiseAuthorsApi {
    private api: ObservableAuthorsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorsApiRequestFactory,
        responseProcessor?: AuthorsApiResponseProcessor
    ) {
        this.api = new ObservableAuthorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all authors
     * List of all authors
     * @param page Pagination
     * @param limit Items per page
     */
    public authorsGet(page?: number, limit?: number, _options?: Configuration): Promise<AuthorsCollection> {
        const result = this.api.authorsGet(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Delete Author
     * @param id 
     */
    public authorsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.authorsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Author
     * @param id 
     */
    public authorsIdGet(id: number, _options?: Configuration): Promise<AuthorsIdDelete200Response> {
        const result = this.api.authorsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Author
     * @param id 
     * @param authorRequest Update Author
     */
    public authorsIdPatch(id: number, authorRequest?: AuthorRequest, _options?: Configuration): Promise<AuthorsIdDelete200Response> {
        const result = this.api.authorsIdPatch(id, authorRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Author
     * @param authorRequest Add Author
     */
    public authorsPost(authorRequest?: AuthorRequest, _options?: Configuration): Promise<AuthorResponse> {
        const result = this.api.authorsPost(authorRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBannersApi } from './ObservableAPI';

import { BannersApiRequestFactory, BannersApiResponseProcessor} from "../apis/BannersApi";
export class PromiseBannersApi {
    private api: ObservableBannersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BannersApiRequestFactory,
        responseProcessor?: BannersApiResponseProcessor
    ) {
        this.api = new ObservableBannersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Banners
     * List of all Banners
     * @param page Pagination
     * @param limit Items per page
     */
    public bannersGet(page?: number, limit?: number, _options?: Configuration): Promise<BannersCollection> {
        const result = this.api.bannersGet(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Delete Banner.
     * @param id 
     */
    public bannersIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.bannersIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Banner
     * @param id 
     */
    public bannersIdGet(id: number, _options?: Configuration): Promise<BannersIdDelete200Response> {
        const result = this.api.bannersIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Banner
     * @param id 
     * @param bannersRequest Update Banner
     */
    public bannersIdPatch(id: number, bannersRequest?: BannersRequest, _options?: Configuration): Promise<BannersIdDelete200Response> {
        const result = this.api.bannersIdPatch(id, bannersRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Banner
     * @param bannersRequest Add Banner
     */
    public bannersPost(bannersRequest?: BannersRequest, _options?: Configuration): Promise<BannersResponse> {
        const result = this.api.bannersPost(bannersRequest, _options);
        return result.toPromise();
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param type Valid slug of banner type
     * @param limit Items per page
     */
    public bannersSearchGet(query: string, ids?: string, type?: string, limit?: number, _options?: Configuration): Promise<BannersCollection> {
        const result = this.api.bannersSearchGet(query, ids, type, limit, _options);
        return result.toPromise();
    }


}



import { ObservableCategoriesApi } from './ObservableAPI';

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class PromiseCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all categories
     * List of all categories
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public categoriesGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Promise<CategoriesCollection> {
        const result = this.api.categoriesGet(page, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Category cannot be deleted until all content is moved to antoher category (move-content).
     * Delete Category.
     * @param id 
     */
    public categoriesIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.categoriesIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Category
     * @param id 
     */
    public categoriesIdGet(id: number, _options?: Configuration): Promise<CategoriesIdDelete200Response> {
        const result = this.api.categoriesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Category. Category title is unique.
     * @param id 
     * @param categoryRequest Update Category
     */
    public categoriesIdPatch(id: number, categoryRequest?: CategoryRequest, _options?: Configuration): Promise<CategoriesIdDelete200Response> {
        const result = this.api.categoriesIdPatch(id, categoryRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Category
     * @param categoryRequest Add Category. Category title is unique.
     */
    public categoriesPost(categoryRequest?: CategoryRequest, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.categoriesPost(categoryRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCommentPoliciesApi } from './ObservableAPI';

import { CommentPoliciesApiRequestFactory, CommentPoliciesApiResponseProcessor} from "../apis/CommentPoliciesApi";
export class PromiseCommentPoliciesApi {
    private api: ObservableCommentPoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentPoliciesApiRequestFactory,
        responseProcessor?: CommentPoliciesApiResponseProcessor
    ) {
        this.api = new ObservableCommentPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param contentType 
     */
    public contentTypeCommentsPoliciesGet(contentType: 'articles' | 'videos' | 'polls' | 'galleries', _options?: Configuration): Promise<CommentPoliciesCollection> {
        const result = this.api.contentTypeCommentsPoliciesGet(contentType, _options);
        return result.toPromise();
    }

    /**
     * Delete Comment Policy
     * @param contentType 
     * @param id 
     */
    public contentTypeCommentsPoliciesIdDelete(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, _options?: Configuration): Promise<void> {
        const result = this.api.contentTypeCommentsPoliciesIdDelete(contentType, id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Comment Policy
     * @param contentType 
     * @param id 
     */
    public contentTypeCommentsPoliciesIdGet(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, _options?: Configuration): Promise<ContentTypeCommentsPoliciesIdDelete200Response> {
        const result = this.api.contentTypeCommentsPoliciesIdGet(contentType, id, _options);
        return result.toPromise();
    }

    /**
     * Update a Comment Policy
     * @param contentType 
     * @param id 
     * @param commentPolicyRequest Update Comment Policy
     */
    public contentTypeCommentsPoliciesIdPatch(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, commentPolicyRequest?: CommentPolicyRequest, _options?: Configuration): Promise<ContentTypeCommentsPoliciesIdDelete200Response> {
        const result = this.api.contentTypeCommentsPoliciesIdPatch(contentType, id, commentPolicyRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Comment Policy for content type
     * @param contentType 
     * @param commentPolicyRequest Add Comment Policy
     */
    public contentTypeCommentsPoliciesPost(contentType: 'articles' | 'videos' | 'polls' | 'galleries', commentPolicyRequest?: CommentPolicyRequest, _options?: Configuration): Promise<CommentPolicyResponse> {
        const result = this.api.contentTypeCommentsPoliciesPost(contentType, commentPolicyRequest, _options);
        return result.toPromise();
    }


}



import { ObservableContentOriginsApi } from './ObservableAPI';

import { ContentOriginsApiRequestFactory, ContentOriginsApiResponseProcessor} from "../apis/ContentOriginsApi";
export class PromiseContentOriginsApi {
    private api: ObservableContentOriginsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentOriginsApiRequestFactory,
        responseProcessor?: ContentOriginsApiResponseProcessor
    ) {
        this.api = new ObservableContentOriginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param contentType 
     */
    public contentTypeOriginsGet(contentType: 'articles' | 'videos' | 'images' | 'galleries', _options?: Configuration): Promise<OriginsCollection> {
        const result = this.api.contentTypeOriginsGet(contentType, _options);
        return result.toPromise();
    }

    /**
     * Get Single Origin
     * @param contentType 
     * @param id 
     */
    public contentTypeOriginsIdGet(contentType: 'articles' | 'videos' | 'images' | 'galleries', id: number, _options?: Configuration): Promise<ContentTypeOriginsIdGet200Response> {
        const result = this.api.contentTypeOriginsIdGet(contentType, id, _options);
        return result.toPromise();
    }

    /**
     * Update an Origin
     * @param contentType 
     * @param id 
     * @param originRequest Update Origin
     */
    public contentTypeOriginsIdPatch(contentType: 'articles' | 'videos' | 'images' | 'galleries', id: number, originRequest?: OriginRequest, _options?: Configuration): Promise<ContentTypeOriginsIdGet200Response> {
        const result = this.api.contentTypeOriginsIdPatch(contentType, id, originRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Origin for content type
     * @param contentType 
     * @param originRequest Add Origin
     */
    public contentTypeOriginsPost(contentType: 'articles' | 'videos' | 'images' | 'galleries', originRequest?: OriginRequest, _options?: Configuration): Promise<OriginResponse> {
        const result = this.api.contentTypeOriginsPost(contentType, originRequest, _options);
        return result.toPromise();
    }


}



import { ObservableContentStatusesApi } from './ObservableAPI';

import { ContentStatusesApiRequestFactory, ContentStatusesApiResponseProcessor} from "../apis/ContentStatusesApi";
export class PromiseContentStatusesApi {
    private api: ObservableContentStatusesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentStatusesApiRequestFactory,
        responseProcessor?: ContentStatusesApiResponseProcessor
    ) {
        this.api = new ObservableContentStatusesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param contentType 
     */
    public contentTypeStatusesGet(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', _options?: Configuration): Promise<StatusesCollection> {
        const result = this.api.contentTypeStatusesGet(contentType, _options);
        return result.toPromise();
    }

    /**
     * Get Single Status
     * @param contentType 
     * @param id 
     */
    public contentTypeStatusesIdGet(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', id: number, _options?: Configuration): Promise<ContentTypeStatusesIdGet200Response> {
        const result = this.api.contentTypeStatusesIdGet(contentType, id, _options);
        return result.toPromise();
    }

    /**
     * Update a Status
     * @param contentType 
     * @param id 
     * @param statusRequest Update Status
     */
    public contentTypeStatusesIdPatch(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', id: number, statusRequest?: StatusRequest, _options?: Configuration): Promise<ContentTypeStatusesIdGet200Response> {
        const result = this.api.contentTypeStatusesIdPatch(contentType, id, statusRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Status for content type
     * @param contentType 
     * @param statusRequest Add Status
     */
    public contentTypeStatusesPost(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', statusRequest?: StatusRequest, _options?: Configuration): Promise<StatusResponse> {
        const result = this.api.contentTypeStatusesPost(contentType, statusRequest, _options);
        return result.toPromise();
    }


}



import { ObservableContentTypesApi } from './ObservableAPI';

import { ContentTypesApiRequestFactory, ContentTypesApiResponseProcessor} from "../apis/ContentTypesApi";
export class PromiseContentTypesApi {
    private api: ObservableContentTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentTypesApiRequestFactory,
        responseProcessor?: ContentTypesApiResponseProcessor
    ) {
        this.api = new ObservableContentTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param contentType 
     */
    public contentTypeTypesGet(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', _options?: Configuration): Promise<TypesCollection> {
        const result = this.api.contentTypeTypesGet(contentType, _options);
        return result.toPromise();
    }

    /**
     * Get Single Type
     * @param contentType 
     * @param id 
     */
    public contentTypeTypesIdGet(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', id: number, _options?: Configuration): Promise<ContentTypeTypesIdGet200Response> {
        const result = this.api.contentTypeTypesIdGet(contentType, id, _options);
        return result.toPromise();
    }

    /**
     * Update a Type
     * @param contentType 
     * @param id 
     * @param typeRequest Update Type
     */
    public contentTypeTypesIdPatch(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', id: number, typeRequest?: TypeRequest, _options?: Configuration): Promise<ContentTypeTypesIdGet200Response> {
        const result = this.api.contentTypeTypesIdPatch(contentType, id, typeRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Type for content type
     * @param contentType 
     * @param typeRequest Add Type
     */
    public contentTypeTypesPost(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', typeRequest?: TypeRequest, _options?: Configuration): Promise<TypeResponse> {
        const result = this.api.contentTypeTypesPost(contentType, typeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableDistributionApi } from './ObservableAPI';

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class PromiseDistributionApi {
    private api: ObservableDistributionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public distributionChannelsGet(_options?: Configuration): Promise<ChannelsCollection> {
        const result = this.api.distributionChannelsGet(_options);
        return result.toPromise();
    }

    /**
     * Delete Channel
     * @param id 
     */
    public distributionChannelsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.distributionChannelsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Channel
     * @param id 
     */
    public distributionChannelsIdGet(id: number, _options?: Configuration): Promise<DistributionChannelsIdDelete200Response> {
        const result = this.api.distributionChannelsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update a Channel
     * @param id 
     * @param channelRequest Update Channel
     */
    public distributionChannelsIdPatch(id: number, channelRequest?: ChannelRequest, _options?: Configuration): Promise<DistributionChannelsIdDelete200Response> {
        const result = this.api.distributionChannelsIdPatch(id, channelRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Channel
     * @param channelRequest Add Channel
     */
    public distributionChannelsPost(channelRequest?: ChannelRequest, _options?: Configuration): Promise<ChannelResponse> {
        const result = this.api.distributionChannelsPost(channelRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public distributionRegionsGet(_options?: Configuration): Promise<RegionsCollection> {
        const result = this.api.distributionRegionsGet(_options);
        return result.toPromise();
    }

    /**
     * Delete Region
     * @param id 
     */
    public distributionRegionsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.distributionRegionsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Region
     * @param id 
     */
    public distributionRegionsIdGet(id: number, _options?: Configuration): Promise<DistributionRegionsIdDelete200Response> {
        const result = this.api.distributionRegionsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update a Region
     * @param id 
     * @param regionRequest Update Region
     */
    public distributionRegionsIdPatch(id: number, regionRequest?: RegionRequest, _options?: Configuration): Promise<DistributionRegionsIdDelete200Response> {
        const result = this.api.distributionRegionsIdPatch(id, regionRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Region
     * @param regionRequest Add Region
     */
    public distributionRegionsPost(regionRequest?: RegionRequest, _options?: Configuration): Promise<RegionResponse> {
        const result = this.api.distributionRegionsPost(regionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGalleriesApi } from './ObservableAPI';

import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";
export class PromiseGalleriesApi {
    private api: ObservableGalleriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GalleriesApiRequestFactory,
        responseProcessor?: GalleriesApiResponseProcessor
    ) {
        this.api = new ObservableGalleriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all galleries
     * List of all galleries
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public galleriesGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Promise<GalleriesCollection> {
        const result = this.api.galleriesGet(page, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Delete Gallery
     * @param id 
     */
    public galleriesIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.galleriesIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Gallery
     * @param id 
     */
    public galleriesIdGet(id: number, _options?: Configuration): Promise<GalleriesIdDelete200Response> {
        const result = this.api.galleriesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Gallery
     * @param id 
     * @param galleryUpdateRequest Update Gallery
     */
    public galleriesIdPatch(id: number, galleryUpdateRequest?: GalleryUpdateRequest, _options?: Configuration): Promise<GalleriesIdDelete200Response> {
        const result = this.api.galleriesIdPatch(id, galleryUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Related Content
     * @param id 
     */
    public galleriesIdRelatedGet(id: number, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.galleriesIdRelatedGet(id, _options);
        return result.toPromise();
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public galleriesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.galleriesIdRelatedPost(id, relatedResponseInner, _options);
        return result.toPromise();
    }

    /**
     * Add Gallery
     * @param galleryRequest Add Gallery
     */
    public galleriesPost(galleryRequest?: GalleryRequest, _options?: Configuration): Promise<GalleryResponse> {
        const result = this.api.galleriesPost(galleryRequest, _options);
        return result.toPromise();
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
     */
    public galleriesSearchGet(query: string, ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Promise<GalleriesCollection> {
        const result = this.api.galleriesSearchGet(query, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);
        return result.toPromise();
    }


}



import { ObservableImageApi } from './ObservableAPI';

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class PromiseImageApi {
    private api: ObservableImageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available images
     * List of all images
     * @param page Pagination
     * @param limit Items per page
     */
    public imagesGet(page?: number, limit?: number, _options?: Configuration): Promise<ImagesCollection> {
        const result = this.api.imagesGet(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Get Single Image
     * @param id 
     */
    public imagesIdGet(id: number, _options?: Configuration): Promise<ImagesIdGet200Response> {
        const result = this.api.imagesIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Image metadata
     * @param id 
     * @param imageUpdateRequest Change Uploaded Image
     */
    public imagesIdPatch(id: number, imageUpdateRequest?: ImageUpdateRequest, _options?: Configuration): Promise<ImagesIdGet200Response> {
        const result = this.api.imagesIdPatch(id, imageUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Related Content
     * @param id 
     */
    public imagesIdRelatedGet(id: number, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.imagesIdRelatedGet(id, _options);
        return result.toPromise();
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content.
     */
    public imagesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.imagesIdRelatedPost(id, relatedResponseInner, _options);
        return result.toPromise();
    }

    /**
     * Upload Image
     * @param imageRequest Upload Image
     */
    public imagesPost(imageRequest?: ImageRequest, _options?: Configuration): Promise<void> {
        const result = this.api.imagesPost(imageRequest, _options);
        return result.toPromise();
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
     */
    public imagesSearchGet(query: string, ids?: string, createdBy?: number, originId?: number, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, limit?: number, _options?: Configuration): Promise<ImagesCollection> {
        const result = this.api.imagesSearchGet(query, ids, createdBy, originId, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, limit, _options);
        return result.toPromise();
    }


}



import { ObservableListsApi } from './ObservableAPI';

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";
export class PromiseListsApi {
    private api: ObservableListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Lists
     * List of all Lists
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public listsGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Promise<ListsCollection> {
        const result = this.api.listsGet(page, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Delete List.
     * @param id 
     */
    public listsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.listsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single List
     * @param id 
     */
    public listsIdGet(id: number, _options?: Configuration): Promise<ListsIdDelete200Response> {
        const result = this.api.listsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update List
     * @param id 
     * @param listsUpdateRequest Update List
     */
    public listsIdPatch(id: number, listsUpdateRequest?: ListsUpdateRequest, _options?: Configuration): Promise<ListsIdDelete200Response> {
        const result = this.api.listsIdPatch(id, listsUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Add List
     * @param listsRequest Add List
     */
    public listsPost(listsRequest?: ListsRequest, _options?: Configuration): Promise<ListsResponse> {
        const result = this.api.listsPost(listsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param query Search string
     * @param ids CSV of valid list IDs. OR filter. List ID is 1 or 2 or 3
     * @param itemIds CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param createdBy Valid ID of admin
     * @param status Valid slug of list status
     * @param language Filter by language
     * @param limit Items per page
     */
    public listsSearchGet(query: string, ids?: string, itemIds?: string, createdBy?: number, status?: string, language?: string, limit?: number, _options?: Configuration): Promise<ListsCollection> {
        const result = this.api.listsSearchGet(query, ids, itemIds, createdBy, status, language, limit, _options);
        return result.toPromise();
    }


}



import { ObservableMiscellaneousApi } from './ObservableAPI';

import { MiscellaneousApiRequestFactory, MiscellaneousApiResponseProcessor} from "../apis/MiscellaneousApi";
export class PromiseMiscellaneousApi {
    private api: ObservableMiscellaneousApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MiscellaneousApiRequestFactory,
        responseProcessor?: MiscellaneousApiResponseProcessor
    ) {
        this.api = new ObservableMiscellaneousApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete ID Mapping by content_id/content_type key
     * @param contentId 
     * @param contentType 
     */
    public mappingsDelete(contentId: string, contentType: string, _options?: Configuration): Promise<void> {
        const result = this.api.mappingsDelete(contentId, contentType, _options);
        return result.toPromise();
    }

    /**
     * Get ID mappings according to various filters
     * @param contentId 
     * @param contentType 
     * @param sourceName 
     * @param sourceType 
     * @param sourceId 
     */
    public mappingsGet(contentId?: string, contentType?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom', sourceName?: string, sourceType?: string, sourceId?: string, _options?: Configuration): Promise<MappingsDelete200Response> {
        const result = this.api.mappingsGet(contentId, contentType, sourceName, sourceType, sourceId, _options);
        return result.toPromise();
    }

    /**
     * Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key
     * @param idMapping Add ID Mapping entry
     */
    public mappingsPut(idMapping?: IdMapping, _options?: Configuration): Promise<IdMapping> {
        const result = this.api.mappingsPut(idMapping, _options);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Tags
     * List of all Tags
     * @param page Pagination
     * @param limit Items per page
     * @param orderType Filter tags by order type
     */
    public tagsGet(page?: number, limit?: number, orderType?: 'ordered' | 'unordered', _options?: Configuration): Promise<TagsCollection> {
        const result = this.api.tagsGet(page, limit, orderType, _options);
        return result.toPromise();
    }

    /**
     * Delete Tag.
     * @param id 
     */
    public tagsIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.tagsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Tag
     * @param id 
     */
    public tagsIdGet(id: number, _options?: Configuration): Promise<TagsIdDelete200Response> {
        const result = this.api.tagsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Tag
     * @param id 
     * @param tagsRequest Update Tag
     */
    public tagsIdPatch(id: number, tagsRequest?: TagsRequest, _options?: Configuration): Promise<TagsIdDelete200Response> {
        const result = this.api.tagsIdPatch(id, tagsRequest, _options);
        return result.toPromise();
    }

    /**
     * Add Tag
     * @param tagsRequest Add Tag
     */
    public tagsPost(tagsRequest?: TagsRequest, _options?: Configuration): Promise<TagsResponse> {
        const result = this.api.tagsPost(tagsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param limit Items per page
     * @param orderType Filter tags by order type
     */
    public tagsSearchGet(query: string, ids?: string, limit?: number, orderType?: 'ordered' | 'unordered', _options?: Configuration): Promise<TagsCollection> {
        const result = this.api.tagsSearchGet(query, ids, limit, orderType, _options);
        return result.toPromise();
    }


}



import { ObservableVideosApi } from './ObservableAPI';

import { VideosApiRequestFactory, VideosApiResponseProcessor} from "../apis/VideosApi";
export class PromiseVideosApi {
    private api: ObservableVideosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VideosApiRequestFactory,
        responseProcessor?: VideosApiResponseProcessor
    ) {
        this.api = new ObservableVideosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all videos
     * List of all videos
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public videosGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Promise<VideosCollection> {
        const result = this.api.videosGet(page, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Delete Video.
     * @param id 
     */
    public videosIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.videosIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get Single Video
     * @param id 
     */
    public videosIdGet(id: number, _options?: Configuration): Promise<VideosIdDelete200Response> {
        const result = this.api.videosIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update Video
     * @param id 
     * @param videoUpdateRequest Update Video
     */
    public videosIdPatch(id: number, videoUpdateRequest?: VideoUpdateRequest, _options?: Configuration): Promise<VideosIdDelete200Response> {
        const result = this.api.videosIdPatch(id, videoUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Related Content
     * @param id 
     */
    public videosIdRelatedGet(id: number, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.videosIdRelatedGet(id, _options);
        return result.toPromise();
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public videosIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Promise<Array<RelatedResponseInner>> {
        const result = this.api.videosIdRelatedPost(id, relatedResponseInner, _options);
        return result.toPromise();
    }

    /**
     * Add Video
     * @param videoRequest Add Video
     */
    public videosPost(videoRequest?: VideoRequest, _options?: Configuration): Promise<VideoResponse> {
        const result = this.api.videosPost(videoRequest, _options);
        return result.toPromise();
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
     */
    public videosSearchGet(query: string, ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Promise<ArticlesCollection> {
        const result = this.api.videosSearchGet(query, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);
        return result.toPromise();
    }


}



