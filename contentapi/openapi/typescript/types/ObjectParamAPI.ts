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

import { ObservableActionLogsApi } from "./ObservableAPI";
import { ActionLogsApiRequestFactory, ActionLogsApiResponseProcessor} from "../apis/ActionLogsApi";

export interface ActionLogsApiActionLogsAdminGetRequest {
    /**
     * Valid project
     * @type string
     * @memberof ActionLogsApiactionLogsAdminGet
     */
    project: string
    /**
     * Admin ID
     * @type number
     * @memberof ActionLogsApiactionLogsAdminGet
     */
    adminId: number
    /**
     * Resource type
     * @type &#39;Article&#39; | &#39;Category&#39; | &#39;Gallery&#39; | &#39;Image&#39; | &#39;Video&#39; | &#39;Lists&#39; | &#39;Banner&#39; | &#39;Tag&#39; | &#39;Author&#39; | &#39;Poll&#39; | &#39;PollOption&#39;
     * @memberof ActionLogsApiactionLogsAdminGet
     */
    contentType?: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption'
    /**
     * Action
     * @type &#39;create&#39; | &#39;update&#39; | &#39;delete&#39;
     * @memberof ActionLogsApiactionLogsAdminGet
     */
    action?: 'create' | 'update' | 'delete'
}

export interface ActionLogsApiActionLogsContentGetRequest {
    /**
     * Valid project
     * @type string
     * @memberof ActionLogsApiactionLogsContentGet
     */
    project: string
    /**
     * Resource type
     * @type &#39;Article&#39; | &#39;Category&#39; | &#39;Gallery&#39; | &#39;Image&#39; | &#39;Video&#39; | &#39;Lists&#39; | &#39;Banner&#39; | &#39;Tag&#39; | &#39;Author&#39; | &#39;Poll&#39; | &#39;PollOption&#39;
     * @memberof ActionLogsApiactionLogsContentGet
     */
    contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption'
    /**
     * Resource ID
     * @type number
     * @memberof ActionLogsApiactionLogsContentGet
     */
    contentId: number
}

export class ObjectActionLogsApi {
    private api: ObservableActionLogsApi

    public constructor(configuration: Configuration, requestFactory?: ActionLogsApiRequestFactory, responseProcessor?: ActionLogsApiResponseProcessor) {
        this.api = new ObservableActionLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all action logs for specific admin
     * List all action logs for specific admin
     * @param param the request object
     */
    public actionLogsAdminGet(param: ActionLogsApiActionLogsAdminGetRequest, options?: Configuration): Promise<ActionLogsCollection> {
        return this.api.actionLogsAdminGet(param.project, param.adminId, param.contentType, param.action,  options).toPromise();
    }

    /**
     * List all action logs for specific resource
     * List all action logs for specific resource
     * @param param the request object
     */
    public actionLogsContentGet(param: ActionLogsApiActionLogsContentGetRequest, options?: Configuration): Promise<ActionLogsCollection> {
        return this.api.actionLogsContentGet(param.project, param.contentType, param.contentId,  options).toPromise();
    }

}

import { ObservableArticlesApi } from "./ObservableAPI";
import { ArticlesApiRequestFactory, ArticlesApiResponseProcessor} from "../apis/ArticlesApi";

export interface ArticlesApiArticlesGetRequest {
    /**
     * Get sports_related data
     * @type &#39;sports_related&#39;
     * @memberof ArticlesApiarticlesGet
     */
    optionalData?: 'sports_related'
    /**
     * Pagination
     * @type number
     * @memberof ArticlesApiarticlesGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof ArticlesApiarticlesGet
     */
    limit?: number
    /**
     * Sort
     * @type string
     * @memberof ArticlesApiarticlesGet
     */
    sort?: string
}

export interface ArticlesApiArticlesIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ArticlesApiarticlesIdDelete
     */
    id: number
}

export interface ArticlesApiArticlesIdGetRequest {
    /**
     * 
     * @type number
     * @memberof ArticlesApiarticlesIdGet
     */
    id: number
}

export interface ArticlesApiArticlesIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof ArticlesApiarticlesIdPatch
     */
    id: number
    /**
     * Update Article
     * @type ArticleUpdateRequest
     * @memberof ArticlesApiarticlesIdPatch
     */
    articleUpdateRequest?: ArticleUpdateRequest
}

export interface ArticlesApiArticlesIdRelatedGetRequest {
    /**
     * 
     * @type number
     * @memberof ArticlesApiarticlesIdRelatedGet
     */
    id: number
}

export interface ArticlesApiArticlesIdRelatedPostRequest {
    /**
     * 
     * @type number
     * @memberof ArticlesApiarticlesIdRelatedPost
     */
    id: number
    /**
     * Add related content
     * @type Array&lt;RelatedResponseInner&gt;
     * @memberof ArticlesApiarticlesIdRelatedPost
     */
    relatedResponseInner?: Array<RelatedResponseInner>
}

export interface ArticlesApiArticlesPostRequest {
    /**
     * Add Article
     * @type ArticleRequest
     * @memberof ArticlesApiarticlesPost
     */
    articleRequest?: ArticleRequest
}

export interface ArticlesApiArticlesSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    query: string
    /**
     * Get sports_related data
     * @type &#39;sports_related&#39;
     * @memberof ArticlesApiarticlesSearchGet
     */
    optionalData?: 'sports_related'
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    ids?: string
    /**
     * Valid ID of category
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    category?: number
    /**
     * Valid ID of admin
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    createdBy?: number
    /**
     * Valid ID of article origin
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    originId?: number
    /**
     * Valid slug of article status
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    status?: string
    /**
     * Valid slug of article type
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    type?: string
    /**
     * CSV of valid content channel IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    publishedChannels?: string
    /**
     * CSV of valid content region IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    publishedRegions?: string
    /**
     * CSV of Team IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    teamIds?: string
    /**
     * CSV of Player IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    playerIds?: string
    /**
     * CSV of Tag IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    tagIds?: string
    /**
     * Match ID
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    matchId?: number
    /**
     * Tournament ID
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    tournamentId?: number
    /**
     * 
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    tournamentIds?: string
    /**
     * Championship ID
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    championshipId?: number
    /**
     * Round ID
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    roundId?: number
    /**
     * Filter by language
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    language?: string
    /**
     * Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter.
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    categoryTreeId?: number
    /**
     * CSV of author IDs
     * @type string
     * @memberof ArticlesApiarticlesSearchGet
     */
    authorIds?: string
    /**
     * Items per page
     * @type number
     * @memberof ArticlesApiarticlesSearchGet
     */
    limit?: number
}

export class ObjectArticlesApi {
    private api: ObservableArticlesApi

    public constructor(configuration: Configuration, requestFactory?: ArticlesApiRequestFactory, responseProcessor?: ArticlesApiResponseProcessor) {
        this.api = new ObservableArticlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all articles
     * List of all articles
     * @param param the request object
     */
    public articlesGet(param: ArticlesApiArticlesGetRequest = {}, options?: Configuration): Promise<ArticlesCollection> {
        return this.api.articlesGet(param.optionalData, param.page, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Delete Article
     * @param param the request object
     */
    public articlesIdDelete(param: ArticlesApiArticlesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.articlesIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Article
     * @param param the request object
     */
    public articlesIdGet(param: ArticlesApiArticlesIdGetRequest, options?: Configuration): Promise<ArticlesIdDelete200Response> {
        return this.api.articlesIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Article
     * @param param the request object
     */
    public articlesIdPatch(param: ArticlesApiArticlesIdPatchRequest, options?: Configuration): Promise<ArticlesIdDelete200Response> {
        return this.api.articlesIdPatch(param.id, param.articleUpdateRequest,  options).toPromise();
    }

    /**
     * Get Related Content
     * @param param the request object
     */
    public articlesIdRelatedGet(param: ArticlesApiArticlesIdRelatedGetRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.articlesIdRelatedGet(param.id,  options).toPromise();
    }

    /**
     * Add Related Content
     * @param param the request object
     */
    public articlesIdRelatedPost(param: ArticlesApiArticlesIdRelatedPostRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.articlesIdRelatedPost(param.id, param.relatedResponseInner,  options).toPromise();
    }

    /**
     * Add Article
     * @param param the request object
     */
    public articlesPost(param: ArticlesApiArticlesPostRequest = {}, options?: Configuration): Promise<ArticleResponse> {
        return this.api.articlesPost(param.articleRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public articlesSearchGet(param: ArticlesApiArticlesSearchGetRequest, options?: Configuration): Promise<ArticlesCollection> {
        return this.api.articlesSearchGet(param.query, param.optionalData, param.ids, param.category, param.createdBy, param.originId, param.status, param.type, param.publishedChannels, param.publishedRegions, param.teamIds, param.playerIds, param.tagIds, param.matchId, param.tournamentId, param.tournamentIds, param.championshipId, param.roundId, param.language, param.categoryTreeId, param.authorIds, param.limit,  options).toPromise();
    }

}

import { ObservableAuthorsApi } from "./ObservableAPI";
import { AuthorsApiRequestFactory, AuthorsApiResponseProcessor} from "../apis/AuthorsApi";

export interface AuthorsApiAuthorsGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof AuthorsApiauthorsGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof AuthorsApiauthorsGet
     */
    limit?: number
}

export interface AuthorsApiAuthorsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof AuthorsApiauthorsIdDelete
     */
    id: number
}

export interface AuthorsApiAuthorsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof AuthorsApiauthorsIdGet
     */
    id: number
}

export interface AuthorsApiAuthorsIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof AuthorsApiauthorsIdPatch
     */
    id: number
    /**
     * Update Author
     * @type AuthorRequest
     * @memberof AuthorsApiauthorsIdPatch
     */
    authorRequest?: AuthorRequest
}

export interface AuthorsApiAuthorsPostRequest {
    /**
     * Add Author
     * @type AuthorRequest
     * @memberof AuthorsApiauthorsPost
     */
    authorRequest?: AuthorRequest
}

export class ObjectAuthorsApi {
    private api: ObservableAuthorsApi

    public constructor(configuration: Configuration, requestFactory?: AuthorsApiRequestFactory, responseProcessor?: AuthorsApiResponseProcessor) {
        this.api = new ObservableAuthorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all authors
     * List of all authors
     * @param param the request object
     */
    public authorsGet(param: AuthorsApiAuthorsGetRequest = {}, options?: Configuration): Promise<AuthorsCollection> {
        return this.api.authorsGet(param.page, param.limit,  options).toPromise();
    }

    /**
     * Delete Author
     * @param param the request object
     */
    public authorsIdDelete(param: AuthorsApiAuthorsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.authorsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Author
     * @param param the request object
     */
    public authorsIdGet(param: AuthorsApiAuthorsIdGetRequest, options?: Configuration): Promise<AuthorsIdDelete200Response> {
        return this.api.authorsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Author
     * @param param the request object
     */
    public authorsIdPatch(param: AuthorsApiAuthorsIdPatchRequest, options?: Configuration): Promise<AuthorsIdDelete200Response> {
        return this.api.authorsIdPatch(param.id, param.authorRequest,  options).toPromise();
    }

    /**
     * Add Author
     * @param param the request object
     */
    public authorsPost(param: AuthorsApiAuthorsPostRequest = {}, options?: Configuration): Promise<AuthorResponse> {
        return this.api.authorsPost(param.authorRequest,  options).toPromise();
    }

}

import { ObservableBannersApi } from "./ObservableAPI";
import { BannersApiRequestFactory, BannersApiResponseProcessor} from "../apis/BannersApi";

export interface BannersApiBannersGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof BannersApibannersGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof BannersApibannersGet
     */
    limit?: number
}

export interface BannersApiBannersIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof BannersApibannersIdDelete
     */
    id: number
}

export interface BannersApiBannersIdGetRequest {
    /**
     * 
     * @type number
     * @memberof BannersApibannersIdGet
     */
    id: number
}

export interface BannersApiBannersIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof BannersApibannersIdPatch
     */
    id: number
    /**
     * Update Banner
     * @type BannersRequest
     * @memberof BannersApibannersIdPatch
     */
    bannersRequest?: BannersRequest
}

export interface BannersApiBannersPostRequest {
    /**
     * Add Banner
     * @type BannersRequest
     * @memberof BannersApibannersPost
     */
    bannersRequest?: BannersRequest
}

export interface BannersApiBannersSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof BannersApibannersSearchGet
     */
    query: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof BannersApibannersSearchGet
     */
    ids?: string
    /**
     * Valid slug of banner type
     * @type string
     * @memberof BannersApibannersSearchGet
     */
    type?: string
    /**
     * Items per page
     * @type number
     * @memberof BannersApibannersSearchGet
     */
    limit?: number
}

export class ObjectBannersApi {
    private api: ObservableBannersApi

    public constructor(configuration: Configuration, requestFactory?: BannersApiRequestFactory, responseProcessor?: BannersApiResponseProcessor) {
        this.api = new ObservableBannersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Banners
     * List of all Banners
     * @param param the request object
     */
    public bannersGet(param: BannersApiBannersGetRequest = {}, options?: Configuration): Promise<BannersCollection> {
        return this.api.bannersGet(param.page, param.limit,  options).toPromise();
    }

    /**
     * Delete Banner.
     * @param param the request object
     */
    public bannersIdDelete(param: BannersApiBannersIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.bannersIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Banner
     * @param param the request object
     */
    public bannersIdGet(param: BannersApiBannersIdGetRequest, options?: Configuration): Promise<BannersIdDelete200Response> {
        return this.api.bannersIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Banner
     * @param param the request object
     */
    public bannersIdPatch(param: BannersApiBannersIdPatchRequest, options?: Configuration): Promise<BannersIdDelete200Response> {
        return this.api.bannersIdPatch(param.id, param.bannersRequest,  options).toPromise();
    }

    /**
     * Add Banner
     * @param param the request object
     */
    public bannersPost(param: BannersApiBannersPostRequest = {}, options?: Configuration): Promise<BannersResponse> {
        return this.api.bannersPost(param.bannersRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bannersSearchGet(param: BannersApiBannersSearchGetRequest, options?: Configuration): Promise<BannersCollection> {
        return this.api.bannersSearchGet(param.query, param.ids, param.type, param.limit,  options).toPromise();
    }

}

import { ObservableCategoriesApi } from "./ObservableAPI";
import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";

export interface CategoriesApiCategoriesGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof CategoriesApicategoriesGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof CategoriesApicategoriesGet
     */
    limit?: number
    /**
     * Sort
     * @type string
     * @memberof CategoriesApicategoriesGet
     */
    sort?: string
}

export interface CategoriesApiCategoriesIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof CategoriesApicategoriesIdDelete
     */
    id: number
}

export interface CategoriesApiCategoriesIdGetRequest {
    /**
     * 
     * @type number
     * @memberof CategoriesApicategoriesIdGet
     */
    id: number
}

export interface CategoriesApiCategoriesIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof CategoriesApicategoriesIdPatch
     */
    id: number
    /**
     * Update Category
     * @type CategoryRequest
     * @memberof CategoriesApicategoriesIdPatch
     */
    categoryRequest?: CategoryRequest
}

export interface CategoriesApiCategoriesPostRequest {
    /**
     * Add Category. Category title is unique.
     * @type CategoryRequest
     * @memberof CategoriesApicategoriesPost
     */
    categoryRequest?: CategoryRequest
}

export class ObjectCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: CategoriesApiRequestFactory, responseProcessor?: CategoriesApiResponseProcessor) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all categories
     * List of all categories
     * @param param the request object
     */
    public categoriesGet(param: CategoriesApiCategoriesGetRequest = {}, options?: Configuration): Promise<CategoriesCollection> {
        return this.api.categoriesGet(param.page, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Category cannot be deleted until all content is moved to antoher category (move-content).
     * Delete Category.
     * @param param the request object
     */
    public categoriesIdDelete(param: CategoriesApiCategoriesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.categoriesIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Category
     * @param param the request object
     */
    public categoriesIdGet(param: CategoriesApiCategoriesIdGetRequest, options?: Configuration): Promise<CategoriesIdDelete200Response> {
        return this.api.categoriesIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Category. Category title is unique.
     * @param param the request object
     */
    public categoriesIdPatch(param: CategoriesApiCategoriesIdPatchRequest, options?: Configuration): Promise<CategoriesIdDelete200Response> {
        return this.api.categoriesIdPatch(param.id, param.categoryRequest,  options).toPromise();
    }

    /**
     * Add Category
     * @param param the request object
     */
    public categoriesPost(param: CategoriesApiCategoriesPostRequest = {}, options?: Configuration): Promise<CategoryResponse> {
        return this.api.categoriesPost(param.categoryRequest,  options).toPromise();
    }

}

import { ObservableCommentPoliciesApi } from "./ObservableAPI";
import { CommentPoliciesApiRequestFactory, CommentPoliciesApiResponseProcessor} from "../apis/CommentPoliciesApi";

export interface CommentPoliciesApiContentTypeCommentsPoliciesGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesGet
     */
    contentType: 'articles' | 'videos' | 'polls' | 'galleries'
}

export interface CommentPoliciesApiContentTypeCommentsPoliciesIdDeleteRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdDelete
     */
    contentType: 'articles' | 'videos' | 'polls' | 'galleries'
    /**
     * 
     * @type number
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdDelete
     */
    id: number
}

export interface CommentPoliciesApiContentTypeCommentsPoliciesIdGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdGet
     */
    contentType: 'articles' | 'videos' | 'polls' | 'galleries'
    /**
     * 
     * @type number
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdGet
     */
    id: number
}

export interface CommentPoliciesApiContentTypeCommentsPoliciesIdPatchRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdPatch
     */
    contentType: 'articles' | 'videos' | 'polls' | 'galleries'
    /**
     * 
     * @type number
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdPatch
     */
    id: number
    /**
     * Update Comment Policy
     * @type CommentPolicyRequest
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesIdPatch
     */
    commentPolicyRequest?: CommentPolicyRequest
}

export interface CommentPoliciesApiContentTypeCommentsPoliciesPostRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesPost
     */
    contentType: 'articles' | 'videos' | 'polls' | 'galleries'
    /**
     * Add Comment Policy
     * @type CommentPolicyRequest
     * @memberof CommentPoliciesApicontentTypeCommentsPoliciesPost
     */
    commentPolicyRequest?: CommentPolicyRequest
}

export class ObjectCommentPoliciesApi {
    private api: ObservableCommentPoliciesApi

    public constructor(configuration: Configuration, requestFactory?: CommentPoliciesApiRequestFactory, responseProcessor?: CommentPoliciesApiResponseProcessor) {
        this.api = new ObservableCommentPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contentTypeCommentsPoliciesGet(param: CommentPoliciesApiContentTypeCommentsPoliciesGetRequest, options?: Configuration): Promise<CommentPoliciesCollection> {
        return this.api.contentTypeCommentsPoliciesGet(param.contentType,  options).toPromise();
    }

    /**
     * Delete Comment Policy
     * @param param the request object
     */
    public contentTypeCommentsPoliciesIdDelete(param: CommentPoliciesApiContentTypeCommentsPoliciesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.contentTypeCommentsPoliciesIdDelete(param.contentType, param.id,  options).toPromise();
    }

    /**
     * Get Single Comment Policy
     * @param param the request object
     */
    public contentTypeCommentsPoliciesIdGet(param: CommentPoliciesApiContentTypeCommentsPoliciesIdGetRequest, options?: Configuration): Promise<ContentTypeCommentsPoliciesIdDelete200Response> {
        return this.api.contentTypeCommentsPoliciesIdGet(param.contentType, param.id,  options).toPromise();
    }

    /**
     * Update a Comment Policy
     * @param param the request object
     */
    public contentTypeCommentsPoliciesIdPatch(param: CommentPoliciesApiContentTypeCommentsPoliciesIdPatchRequest, options?: Configuration): Promise<ContentTypeCommentsPoliciesIdDelete200Response> {
        return this.api.contentTypeCommentsPoliciesIdPatch(param.contentType, param.id, param.commentPolicyRequest,  options).toPromise();
    }

    /**
     * Add Comment Policy for content type
     * @param param the request object
     */
    public contentTypeCommentsPoliciesPost(param: CommentPoliciesApiContentTypeCommentsPoliciesPostRequest, options?: Configuration): Promise<CommentPolicyResponse> {
        return this.api.contentTypeCommentsPoliciesPost(param.contentType, param.commentPolicyRequest,  options).toPromise();
    }

}

import { ObservableContentOriginsApi } from "./ObservableAPI";
import { ContentOriginsApiRequestFactory, ContentOriginsApiResponseProcessor} from "../apis/ContentOriginsApi";

export interface ContentOriginsApiContentTypeOriginsGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;
     * @memberof ContentOriginsApicontentTypeOriginsGet
     */
    contentType: 'articles' | 'videos' | 'images' | 'galleries'
}

export interface ContentOriginsApiContentTypeOriginsIdGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;
     * @memberof ContentOriginsApicontentTypeOriginsIdGet
     */
    contentType: 'articles' | 'videos' | 'images' | 'galleries'
    /**
     * 
     * @type number
     * @memberof ContentOriginsApicontentTypeOriginsIdGet
     */
    id: number
}

export interface ContentOriginsApiContentTypeOriginsIdPatchRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;
     * @memberof ContentOriginsApicontentTypeOriginsIdPatch
     */
    contentType: 'articles' | 'videos' | 'images' | 'galleries'
    /**
     * 
     * @type number
     * @memberof ContentOriginsApicontentTypeOriginsIdPatch
     */
    id: number
    /**
     * Update Origin
     * @type OriginRequest
     * @memberof ContentOriginsApicontentTypeOriginsIdPatch
     */
    originRequest?: OriginRequest
}

export interface ContentOriginsApiContentTypeOriginsPostRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;
     * @memberof ContentOriginsApicontentTypeOriginsPost
     */
    contentType: 'articles' | 'videos' | 'images' | 'galleries'
    /**
     * Add Origin
     * @type OriginRequest
     * @memberof ContentOriginsApicontentTypeOriginsPost
     */
    originRequest?: OriginRequest
}

export class ObjectContentOriginsApi {
    private api: ObservableContentOriginsApi

    public constructor(configuration: Configuration, requestFactory?: ContentOriginsApiRequestFactory, responseProcessor?: ContentOriginsApiResponseProcessor) {
        this.api = new ObservableContentOriginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contentTypeOriginsGet(param: ContentOriginsApiContentTypeOriginsGetRequest, options?: Configuration): Promise<OriginsCollection> {
        return this.api.contentTypeOriginsGet(param.contentType,  options).toPromise();
    }

    /**
     * Get Single Origin
     * @param param the request object
     */
    public contentTypeOriginsIdGet(param: ContentOriginsApiContentTypeOriginsIdGetRequest, options?: Configuration): Promise<ContentTypeOriginsIdGet200Response> {
        return this.api.contentTypeOriginsIdGet(param.contentType, param.id,  options).toPromise();
    }

    /**
     * Update an Origin
     * @param param the request object
     */
    public contentTypeOriginsIdPatch(param: ContentOriginsApiContentTypeOriginsIdPatchRequest, options?: Configuration): Promise<ContentTypeOriginsIdGet200Response> {
        return this.api.contentTypeOriginsIdPatch(param.contentType, param.id, param.originRequest,  options).toPromise();
    }

    /**
     * Add Origin for content type
     * @param param the request object
     */
    public contentTypeOriginsPost(param: ContentOriginsApiContentTypeOriginsPostRequest, options?: Configuration): Promise<OriginResponse> {
        return this.api.contentTypeOriginsPost(param.contentType, param.originRequest,  options).toPromise();
    }

}

import { ObservableContentStatusesApi } from "./ObservableAPI";
import { ContentStatusesApiRequestFactory, ContentStatusesApiResponseProcessor} from "../apis/ContentStatusesApi";

export interface ContentStatusesApiContentTypeStatusesGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;
     * @memberof ContentStatusesApicontentTypeStatusesGet
     */
    contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
}

export interface ContentStatusesApiContentTypeStatusesIdGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;
     * @memberof ContentStatusesApicontentTypeStatusesIdGet
     */
    contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
    /**
     * 
     * @type number
     * @memberof ContentStatusesApicontentTypeStatusesIdGet
     */
    id: number
}

export interface ContentStatusesApiContentTypeStatusesIdPatchRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;
     * @memberof ContentStatusesApicontentTypeStatusesIdPatch
     */
    contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
    /**
     * 
     * @type number
     * @memberof ContentStatusesApicontentTypeStatusesIdPatch
     */
    id: number
    /**
     * Update Status
     * @type StatusRequest
     * @memberof ContentStatusesApicontentTypeStatusesIdPatch
     */
    statusRequest?: StatusRequest
}

export interface ContentStatusesApiContentTypeStatusesPostRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;
     * @memberof ContentStatusesApicontentTypeStatusesPost
     */
    contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
    /**
     * Add Status
     * @type StatusRequest
     * @memberof ContentStatusesApicontentTypeStatusesPost
     */
    statusRequest?: StatusRequest
}

export class ObjectContentStatusesApi {
    private api: ObservableContentStatusesApi

    public constructor(configuration: Configuration, requestFactory?: ContentStatusesApiRequestFactory, responseProcessor?: ContentStatusesApiResponseProcessor) {
        this.api = new ObservableContentStatusesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contentTypeStatusesGet(param: ContentStatusesApiContentTypeStatusesGetRequest, options?: Configuration): Promise<StatusesCollection> {
        return this.api.contentTypeStatusesGet(param.contentType,  options).toPromise();
    }

    /**
     * Get Single Status
     * @param param the request object
     */
    public contentTypeStatusesIdGet(param: ContentStatusesApiContentTypeStatusesIdGetRequest, options?: Configuration): Promise<ContentTypeStatusesIdGet200Response> {
        return this.api.contentTypeStatusesIdGet(param.contentType, param.id,  options).toPromise();
    }

    /**
     * Update a Status
     * @param param the request object
     */
    public contentTypeStatusesIdPatch(param: ContentStatusesApiContentTypeStatusesIdPatchRequest, options?: Configuration): Promise<ContentTypeStatusesIdGet200Response> {
        return this.api.contentTypeStatusesIdPatch(param.contentType, param.id, param.statusRequest,  options).toPromise();
    }

    /**
     * Add Status for content type
     * @param param the request object
     */
    public contentTypeStatusesPost(param: ContentStatusesApiContentTypeStatusesPostRequest, options?: Configuration): Promise<StatusResponse> {
        return this.api.contentTypeStatusesPost(param.contentType, param.statusRequest,  options).toPromise();
    }

}

import { ObservableContentTypesApi } from "./ObservableAPI";
import { ContentTypesApiRequestFactory, ContentTypesApiResponseProcessor} from "../apis/ContentTypesApi";

export interface ContentTypesApiContentTypeTypesGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;
     * @memberof ContentTypesApicontentTypeTypesGet
     */
    contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
}

export interface ContentTypesApiContentTypeTypesIdGetRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;
     * @memberof ContentTypesApicontentTypeTypesIdGet
     */
    contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
    /**
     * 
     * @type number
     * @memberof ContentTypesApicontentTypeTypesIdGet
     */
    id: number
}

export interface ContentTypesApiContentTypeTypesIdPatchRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;
     * @memberof ContentTypesApicontentTypeTypesIdPatch
     */
    contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
    /**
     * 
     * @type number
     * @memberof ContentTypesApicontentTypeTypesIdPatch
     */
    id: number
    /**
     * Update Type
     * @type TypeRequest
     * @memberof ContentTypesApicontentTypeTypesIdPatch
     */
    typeRequest?: TypeRequest
}

export interface ContentTypesApiContentTypeTypesPostRequest {
    /**
     * 
     * @type &#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;
     * @memberof ContentTypesApicontentTypeTypesPost
     */
    contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
    /**
     * Add Type
     * @type TypeRequest
     * @memberof ContentTypesApicontentTypeTypesPost
     */
    typeRequest?: TypeRequest
}

export class ObjectContentTypesApi {
    private api: ObservableContentTypesApi

    public constructor(configuration: Configuration, requestFactory?: ContentTypesApiRequestFactory, responseProcessor?: ContentTypesApiResponseProcessor) {
        this.api = new ObservableContentTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contentTypeTypesGet(param: ContentTypesApiContentTypeTypesGetRequest, options?: Configuration): Promise<TypesCollection> {
        return this.api.contentTypeTypesGet(param.contentType,  options).toPromise();
    }

    /**
     * Get Single Type
     * @param param the request object
     */
    public contentTypeTypesIdGet(param: ContentTypesApiContentTypeTypesIdGetRequest, options?: Configuration): Promise<ContentTypeTypesIdGet200Response> {
        return this.api.contentTypeTypesIdGet(param.contentType, param.id,  options).toPromise();
    }

    /**
     * Update a Type
     * @param param the request object
     */
    public contentTypeTypesIdPatch(param: ContentTypesApiContentTypeTypesIdPatchRequest, options?: Configuration): Promise<ContentTypeTypesIdGet200Response> {
        return this.api.contentTypeTypesIdPatch(param.contentType, param.id, param.typeRequest,  options).toPromise();
    }

    /**
     * Add Type for content type
     * @param param the request object
     */
    public contentTypeTypesPost(param: ContentTypesApiContentTypeTypesPostRequest, options?: Configuration): Promise<TypeResponse> {
        return this.api.contentTypeTypesPost(param.contentType, param.typeRequest,  options).toPromise();
    }

}

import { ObservableDistributionApi } from "./ObservableAPI";
import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";

export interface DistributionApiDistributionChannelsGetRequest {
}

export interface DistributionApiDistributionChannelsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionChannelsIdDelete
     */
    id: number
}

export interface DistributionApiDistributionChannelsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionChannelsIdGet
     */
    id: number
}

export interface DistributionApiDistributionChannelsIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionChannelsIdPatch
     */
    id: number
    /**
     * Update Channel
     * @type ChannelRequest
     * @memberof DistributionApidistributionChannelsIdPatch
     */
    channelRequest?: ChannelRequest
}

export interface DistributionApiDistributionChannelsPostRequest {
    /**
     * Add Channel
     * @type ChannelRequest
     * @memberof DistributionApidistributionChannelsPost
     */
    channelRequest?: ChannelRequest
}

export interface DistributionApiDistributionRegionsGetRequest {
}

export interface DistributionApiDistributionRegionsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionRegionsIdDelete
     */
    id: number
}

export interface DistributionApiDistributionRegionsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionRegionsIdGet
     */
    id: number
}

export interface DistributionApiDistributionRegionsIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof DistributionApidistributionRegionsIdPatch
     */
    id: number
    /**
     * Update Region
     * @type RegionRequest
     * @memberof DistributionApidistributionRegionsIdPatch
     */
    regionRequest?: RegionRequest
}

export interface DistributionApiDistributionRegionsPostRequest {
    /**
     * Add Region
     * @type RegionRequest
     * @memberof DistributionApidistributionRegionsPost
     */
    regionRequest?: RegionRequest
}

export class ObjectDistributionApi {
    private api: ObservableDistributionApi

    public constructor(configuration: Configuration, requestFactory?: DistributionApiRequestFactory, responseProcessor?: DistributionApiResponseProcessor) {
        this.api = new ObservableDistributionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public distributionChannelsGet(param: DistributionApiDistributionChannelsGetRequest = {}, options?: Configuration): Promise<ChannelsCollection> {
        return this.api.distributionChannelsGet( options).toPromise();
    }

    /**
     * Delete Channel
     * @param param the request object
     */
    public distributionChannelsIdDelete(param: DistributionApiDistributionChannelsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.distributionChannelsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Channel
     * @param param the request object
     */
    public distributionChannelsIdGet(param: DistributionApiDistributionChannelsIdGetRequest, options?: Configuration): Promise<DistributionChannelsIdDelete200Response> {
        return this.api.distributionChannelsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update a Channel
     * @param param the request object
     */
    public distributionChannelsIdPatch(param: DistributionApiDistributionChannelsIdPatchRequest, options?: Configuration): Promise<DistributionChannelsIdDelete200Response> {
        return this.api.distributionChannelsIdPatch(param.id, param.channelRequest,  options).toPromise();
    }

    /**
     * Add Channel
     * @param param the request object
     */
    public distributionChannelsPost(param: DistributionApiDistributionChannelsPostRequest = {}, options?: Configuration): Promise<ChannelResponse> {
        return this.api.distributionChannelsPost(param.channelRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public distributionRegionsGet(param: DistributionApiDistributionRegionsGetRequest = {}, options?: Configuration): Promise<RegionsCollection> {
        return this.api.distributionRegionsGet( options).toPromise();
    }

    /**
     * Delete Region
     * @param param the request object
     */
    public distributionRegionsIdDelete(param: DistributionApiDistributionRegionsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.distributionRegionsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Region
     * @param param the request object
     */
    public distributionRegionsIdGet(param: DistributionApiDistributionRegionsIdGetRequest, options?: Configuration): Promise<DistributionRegionsIdDelete200Response> {
        return this.api.distributionRegionsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update a Region
     * @param param the request object
     */
    public distributionRegionsIdPatch(param: DistributionApiDistributionRegionsIdPatchRequest, options?: Configuration): Promise<DistributionRegionsIdDelete200Response> {
        return this.api.distributionRegionsIdPatch(param.id, param.regionRequest,  options).toPromise();
    }

    /**
     * Add Region
     * @param param the request object
     */
    public distributionRegionsPost(param: DistributionApiDistributionRegionsPostRequest = {}, options?: Configuration): Promise<RegionResponse> {
        return this.api.distributionRegionsPost(param.regionRequest,  options).toPromise();
    }

}

import { ObservableGalleriesApi } from "./ObservableAPI";
import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";

export interface GalleriesApiGalleriesGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof GalleriesApigalleriesGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof GalleriesApigalleriesGet
     */
    limit?: number
    /**
     * Sort
     * @type string
     * @memberof GalleriesApigalleriesGet
     */
    sort?: string
}

export interface GalleriesApiGalleriesIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof GalleriesApigalleriesIdDelete
     */
    id: number
}

export interface GalleriesApiGalleriesIdGetRequest {
    /**
     * 
     * @type number
     * @memberof GalleriesApigalleriesIdGet
     */
    id: number
}

export interface GalleriesApiGalleriesIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof GalleriesApigalleriesIdPatch
     */
    id: number
    /**
     * Update Gallery
     * @type GalleryUpdateRequest
     * @memberof GalleriesApigalleriesIdPatch
     */
    galleryUpdateRequest?: GalleryUpdateRequest
}

export interface GalleriesApiGalleriesIdRelatedGetRequest {
    /**
     * 
     * @type number
     * @memberof GalleriesApigalleriesIdRelatedGet
     */
    id: number
}

export interface GalleriesApiGalleriesIdRelatedPostRequest {
    /**
     * 
     * @type number
     * @memberof GalleriesApigalleriesIdRelatedPost
     */
    id: number
    /**
     * Add related content
     * @type Array&lt;RelatedResponseInner&gt;
     * @memberof GalleriesApigalleriesIdRelatedPost
     */
    relatedResponseInner?: Array<RelatedResponseInner>
}

export interface GalleriesApiGalleriesPostRequest {
    /**
     * Add Gallery
     * @type GalleryRequest
     * @memberof GalleriesApigalleriesPost
     */
    galleryRequest?: GalleryRequest
}

export interface GalleriesApiGalleriesSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    query: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    ids?: string
    /**
     * Valid ID of category
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    category?: number
    /**
     * Valid ID of admin
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    createdBy?: number
    /**
     * Valid ID of gallery origin
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    originId?: number
    /**
     * Valid slug of gallery status
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    status?: string
    /**
     * Valid slug of gallery type
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    type?: string
    /**
     * CSV of valid content channel IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    publishedChannels?: string
    /**
     * CSV of valid content region IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    publishedRegions?: string
    /**
     * CSV of Team IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    teamIds?: string
    /**
     * CSV of Player IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    playerIds?: string
    /**
     * CSV of Tag IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    tagIds?: string
    /**
     * Match ID
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    matchId?: number
    /**
     * Tournament ID
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    tournamentId?: number
    /**
     * 
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    tournamentIds?: string
    /**
     * Championship ID
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    championshipId?: number
    /**
     * Round ID
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    roundId?: number
    /**
     * Filter by language
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    language?: string
    /**
     * Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter.
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    categoryTreeId?: number
    /**
     * CSV of author IDs
     * @type string
     * @memberof GalleriesApigalleriesSearchGet
     */
    authorIds?: string
    /**
     * Items per page
     * @type number
     * @memberof GalleriesApigalleriesSearchGet
     */
    limit?: number
}

export class ObjectGalleriesApi {
    private api: ObservableGalleriesApi

    public constructor(configuration: Configuration, requestFactory?: GalleriesApiRequestFactory, responseProcessor?: GalleriesApiResponseProcessor) {
        this.api = new ObservableGalleriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all galleries
     * List of all galleries
     * @param param the request object
     */
    public galleriesGet(param: GalleriesApiGalleriesGetRequest = {}, options?: Configuration): Promise<GalleriesCollection> {
        return this.api.galleriesGet(param.page, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Delete Gallery
     * @param param the request object
     */
    public galleriesIdDelete(param: GalleriesApiGalleriesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.galleriesIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Gallery
     * @param param the request object
     */
    public galleriesIdGet(param: GalleriesApiGalleriesIdGetRequest, options?: Configuration): Promise<GalleriesIdDelete200Response> {
        return this.api.galleriesIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Gallery
     * @param param the request object
     */
    public galleriesIdPatch(param: GalleriesApiGalleriesIdPatchRequest, options?: Configuration): Promise<GalleriesIdDelete200Response> {
        return this.api.galleriesIdPatch(param.id, param.galleryUpdateRequest,  options).toPromise();
    }

    /**
     * Get Related Content
     * @param param the request object
     */
    public galleriesIdRelatedGet(param: GalleriesApiGalleriesIdRelatedGetRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.galleriesIdRelatedGet(param.id,  options).toPromise();
    }

    /**
     * Add Related Content
     * @param param the request object
     */
    public galleriesIdRelatedPost(param: GalleriesApiGalleriesIdRelatedPostRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.galleriesIdRelatedPost(param.id, param.relatedResponseInner,  options).toPromise();
    }

    /**
     * Add Gallery
     * @param param the request object
     */
    public galleriesPost(param: GalleriesApiGalleriesPostRequest = {}, options?: Configuration): Promise<GalleryResponse> {
        return this.api.galleriesPost(param.galleryRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesSearchGet(param: GalleriesApiGalleriesSearchGetRequest, options?: Configuration): Promise<GalleriesCollection> {
        return this.api.galleriesSearchGet(param.query, param.ids, param.category, param.createdBy, param.originId, param.status, param.type, param.publishedChannels, param.publishedRegions, param.teamIds, param.playerIds, param.tagIds, param.matchId, param.tournamentId, param.tournamentIds, param.championshipId, param.roundId, param.language, param.categoryTreeId, param.authorIds, param.limit,  options).toPromise();
    }

}

import { ObservableImageApi } from "./ObservableAPI";
import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";

export interface ImageApiImagesGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof ImageApiimagesGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof ImageApiimagesGet
     */
    limit?: number
}

export interface ImageApiImagesIdGetRequest {
    /**
     * 
     * @type number
     * @memberof ImageApiimagesIdGet
     */
    id: number
}

export interface ImageApiImagesIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof ImageApiimagesIdPatch
     */
    id: number
    /**
     * Change Uploaded Image
     * @type ImageUpdateRequest
     * @memberof ImageApiimagesIdPatch
     */
    imageUpdateRequest?: ImageUpdateRequest
}

export interface ImageApiImagesIdRelatedGetRequest {
    /**
     * 
     * @type number
     * @memberof ImageApiimagesIdRelatedGet
     */
    id: number
}

export interface ImageApiImagesIdRelatedPostRequest {
    /**
     * 
     * @type number
     * @memberof ImageApiimagesIdRelatedPost
     */
    id: number
    /**
     * Add related content.
     * @type Array&lt;RelatedResponseInner&gt;
     * @memberof ImageApiimagesIdRelatedPost
     */
    relatedResponseInner?: Array<RelatedResponseInner>
}

export interface ImageApiImagesPostRequest {
    /**
     * Upload Image
     * @type ImageRequest
     * @memberof ImageApiimagesPost
     */
    imageRequest?: ImageRequest
}

export interface ImageApiImagesSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    query: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    ids?: string
    /**
     * Valid ID of admin
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    createdBy?: number
    /**
     * Valid ID of images origin
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    originId?: number
    /**
     * Valid slug of image type
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    type?: string
    /**
     * CSV of valid content channel IDs
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    publishedChannels?: string
    /**
     * CSV of valid content region IDs
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    publishedRegions?: string
    /**
     * CSV of Team IDs
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    teamIds?: string
    /**
     * CSV of Player IDs
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    playerIds?: string
    /**
     * CSV of Tag IDs
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    tagIds?: string
    /**
     * Match ID
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    matchId?: number
    /**
     * Tournament ID
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    tournamentId?: number
    /**
     * 
     * @type string
     * @memberof ImageApiimagesSearchGet
     */
    tournamentIds?: string
    /**
     * Championship ID
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    championshipId?: number
    /**
     * Round ID
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    roundId?: number
    /**
     * Items per page
     * @type number
     * @memberof ImageApiimagesSearchGet
     */
    limit?: number
}

export class ObjectImageApi {
    private api: ObservableImageApi

    public constructor(configuration: Configuration, requestFactory?: ImageApiRequestFactory, responseProcessor?: ImageApiResponseProcessor) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available images
     * List of all images
     * @param param the request object
     */
    public imagesGet(param: ImageApiImagesGetRequest = {}, options?: Configuration): Promise<ImagesCollection> {
        return this.api.imagesGet(param.page, param.limit,  options).toPromise();
    }

    /**
     * Get Single Image
     * @param param the request object
     */
    public imagesIdGet(param: ImageApiImagesIdGetRequest, options?: Configuration): Promise<ImagesIdGet200Response> {
        return this.api.imagesIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Image metadata
     * @param param the request object
     */
    public imagesIdPatch(param: ImageApiImagesIdPatchRequest, options?: Configuration): Promise<ImagesIdGet200Response> {
        return this.api.imagesIdPatch(param.id, param.imageUpdateRequest,  options).toPromise();
    }

    /**
     * Get Related Content
     * @param param the request object
     */
    public imagesIdRelatedGet(param: ImageApiImagesIdRelatedGetRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.imagesIdRelatedGet(param.id,  options).toPromise();
    }

    /**
     * Add Related Content
     * @param param the request object
     */
    public imagesIdRelatedPost(param: ImageApiImagesIdRelatedPostRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.imagesIdRelatedPost(param.id, param.relatedResponseInner,  options).toPromise();
    }

    /**
     * Upload Image
     * @param param the request object
     */
    public imagesPost(param: ImageApiImagesPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imagesPost(param.imageRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public imagesSearchGet(param: ImageApiImagesSearchGetRequest, options?: Configuration): Promise<ImagesCollection> {
        return this.api.imagesSearchGet(param.query, param.ids, param.createdBy, param.originId, param.type, param.publishedChannels, param.publishedRegions, param.teamIds, param.playerIds, param.tagIds, param.matchId, param.tournamentId, param.tournamentIds, param.championshipId, param.roundId, param.limit,  options).toPromise();
    }

}

import { ObservableListsApi } from "./ObservableAPI";
import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";

export interface ListsApiListsGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof ListsApilistsGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof ListsApilistsGet
     */
    limit?: number
    /**
     * Sort
     * @type string
     * @memberof ListsApilistsGet
     */
    sort?: string
}

export interface ListsApiListsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ListsApilistsIdDelete
     */
    id: number
}

export interface ListsApiListsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof ListsApilistsIdGet
     */
    id: number
}

export interface ListsApiListsIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof ListsApilistsIdPatch
     */
    id: number
    /**
     * Update List
     * @type ListsUpdateRequest
     * @memberof ListsApilistsIdPatch
     */
    listsUpdateRequest?: ListsUpdateRequest
}

export interface ListsApiListsPostRequest {
    /**
     * Add List
     * @type ListsRequest
     * @memberof ListsApilistsPost
     */
    listsRequest?: ListsRequest
}

export interface ListsApiListsSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof ListsApilistsSearchGet
     */
    query: string
    /**
     * CSV of valid list IDs. OR filter. List ID is 1 or 2 or 3
     * @type string
     * @memberof ListsApilistsSearchGet
     */
    ids?: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof ListsApilistsSearchGet
     */
    itemIds?: string
    /**
     * Valid ID of admin
     * @type number
     * @memberof ListsApilistsSearchGet
     */
    createdBy?: number
    /**
     * Valid slug of list status
     * @type string
     * @memberof ListsApilistsSearchGet
     */
    status?: string
    /**
     * Filter by language
     * @type string
     * @memberof ListsApilistsSearchGet
     */
    language?: string
    /**
     * Items per page
     * @type number
     * @memberof ListsApilistsSearchGet
     */
    limit?: number
}

export class ObjectListsApi {
    private api: ObservableListsApi

    public constructor(configuration: Configuration, requestFactory?: ListsApiRequestFactory, responseProcessor?: ListsApiResponseProcessor) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Lists
     * List of all Lists
     * @param param the request object
     */
    public listsGet(param: ListsApiListsGetRequest = {}, options?: Configuration): Promise<ListsCollection> {
        return this.api.listsGet(param.page, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Delete List.
     * @param param the request object
     */
    public listsIdDelete(param: ListsApiListsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.listsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single List
     * @param param the request object
     */
    public listsIdGet(param: ListsApiListsIdGetRequest, options?: Configuration): Promise<ListsIdDelete200Response> {
        return this.api.listsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update List
     * @param param the request object
     */
    public listsIdPatch(param: ListsApiListsIdPatchRequest, options?: Configuration): Promise<ListsIdDelete200Response> {
        return this.api.listsIdPatch(param.id, param.listsUpdateRequest,  options).toPromise();
    }

    /**
     * Add List
     * @param param the request object
     */
    public listsPost(param: ListsApiListsPostRequest = {}, options?: Configuration): Promise<ListsResponse> {
        return this.api.listsPost(param.listsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listsSearchGet(param: ListsApiListsSearchGetRequest, options?: Configuration): Promise<ListsCollection> {
        return this.api.listsSearchGet(param.query, param.ids, param.itemIds, param.createdBy, param.status, param.language, param.limit,  options).toPromise();
    }

}

import { ObservableMiscellaneousApi } from "./ObservableAPI";
import { MiscellaneousApiRequestFactory, MiscellaneousApiResponseProcessor} from "../apis/MiscellaneousApi";

export interface MiscellaneousApiMappingsDeleteRequest {
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsDelete
     */
    contentId: string
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsDelete
     */
    contentType: string
}

export interface MiscellaneousApiMappingsGetRequest {
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsGet
     */
    contentId?: string
    /**
     * 
     * @type &#39;article&#39; | &#39;video&#39; | &#39;gallery&#39; | &#39;image&#39; | &#39;tag&#39; | &#39;category&#39; | &#39;banner&#39; | &#39;list&#39; | &#39;poll&#39; | &#39;author&#39; | &#39;type&#39; | &#39;status&#39; | &#39;region&#39; | &#39;custom&#39;
     * @memberof MiscellaneousApimappingsGet
     */
    contentType?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom'
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsGet
     */
    sourceName?: string
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsGet
     */
    sourceType?: string
    /**
     * 
     * @type string
     * @memberof MiscellaneousApimappingsGet
     */
    sourceId?: string
}

export interface MiscellaneousApiMappingsPutRequest {
    /**
     * Add ID Mapping entry
     * @type IdMapping
     * @memberof MiscellaneousApimappingsPut
     */
    idMapping?: IdMapping
}

export class ObjectMiscellaneousApi {
    private api: ObservableMiscellaneousApi

    public constructor(configuration: Configuration, requestFactory?: MiscellaneousApiRequestFactory, responseProcessor?: MiscellaneousApiResponseProcessor) {
        this.api = new ObservableMiscellaneousApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete ID Mapping by content_id/content_type key
     * @param param the request object
     */
    public mappingsDelete(param: MiscellaneousApiMappingsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.mappingsDelete(param.contentId, param.contentType,  options).toPromise();
    }

    /**
     * Get ID mappings according to various filters
     * @param param the request object
     */
    public mappingsGet(param: MiscellaneousApiMappingsGetRequest = {}, options?: Configuration): Promise<MappingsDelete200Response> {
        return this.api.mappingsGet(param.contentId, param.contentType, param.sourceName, param.sourceType, param.sourceId,  options).toPromise();
    }

    /**
     * Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key
     * @param param the request object
     */
    public mappingsPut(param: MiscellaneousApiMappingsPutRequest = {}, options?: Configuration): Promise<IdMapping> {
        return this.api.mappingsPut(param.idMapping,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiTagsGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof TagsApitagsGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof TagsApitagsGet
     */
    limit?: number
    /**
     * Filter tags by order type
     * @type &#39;ordered&#39; | &#39;unordered&#39;
     * @memberof TagsApitagsGet
     */
    orderType?: 'ordered' | 'unordered'
}

export interface TagsApiTagsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof TagsApitagsIdDelete
     */
    id: number
}

export interface TagsApiTagsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof TagsApitagsIdGet
     */
    id: number
}

export interface TagsApiTagsIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof TagsApitagsIdPatch
     */
    id: number
    /**
     * Update Tag
     * @type TagsRequest
     * @memberof TagsApitagsIdPatch
     */
    tagsRequest?: TagsRequest
}

export interface TagsApiTagsPostRequest {
    /**
     * Add Tag
     * @type TagsRequest
     * @memberof TagsApitagsPost
     */
    tagsRequest?: TagsRequest
}

export interface TagsApiTagsSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof TagsApitagsSearchGet
     */
    query: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof TagsApitagsSearchGet
     */
    ids?: string
    /**
     * Items per page
     * @type number
     * @memberof TagsApitagsSearchGet
     */
    limit?: number
    /**
     * Filter tags by order type
     * @type &#39;ordered&#39; | &#39;unordered&#39;
     * @memberof TagsApitagsSearchGet
     */
    orderType?: 'ordered' | 'unordered'
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all Tags
     * List of all Tags
     * @param param the request object
     */
    public tagsGet(param: TagsApiTagsGetRequest = {}, options?: Configuration): Promise<TagsCollection> {
        return this.api.tagsGet(param.page, param.limit, param.orderType,  options).toPromise();
    }

    /**
     * Delete Tag.
     * @param param the request object
     */
    public tagsIdDelete(param: TagsApiTagsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.tagsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Tag
     * @param param the request object
     */
    public tagsIdGet(param: TagsApiTagsIdGetRequest, options?: Configuration): Promise<TagsIdDelete200Response> {
        return this.api.tagsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Tag
     * @param param the request object
     */
    public tagsIdPatch(param: TagsApiTagsIdPatchRequest, options?: Configuration): Promise<TagsIdDelete200Response> {
        return this.api.tagsIdPatch(param.id, param.tagsRequest,  options).toPromise();
    }

    /**
     * Add Tag
     * @param param the request object
     */
    public tagsPost(param: TagsApiTagsPostRequest = {}, options?: Configuration): Promise<TagsResponse> {
        return this.api.tagsPost(param.tagsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public tagsSearchGet(param: TagsApiTagsSearchGetRequest, options?: Configuration): Promise<TagsCollection> {
        return this.api.tagsSearchGet(param.query, param.ids, param.limit, param.orderType,  options).toPromise();
    }

}

import { ObservableVideosApi } from "./ObservableAPI";
import { VideosApiRequestFactory, VideosApiResponseProcessor} from "../apis/VideosApi";

export interface VideosApiVideosGetRequest {
    /**
     * Pagination
     * @type number
     * @memberof VideosApivideosGet
     */
    page?: number
    /**
     * Items per page
     * @type number
     * @memberof VideosApivideosGet
     */
    limit?: number
    /**
     * Sort
     * @type string
     * @memberof VideosApivideosGet
     */
    sort?: string
}

export interface VideosApiVideosIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof VideosApivideosIdDelete
     */
    id: number
}

export interface VideosApiVideosIdGetRequest {
    /**
     * 
     * @type number
     * @memberof VideosApivideosIdGet
     */
    id: number
}

export interface VideosApiVideosIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof VideosApivideosIdPatch
     */
    id: number
    /**
     * Update Video
     * @type VideoUpdateRequest
     * @memberof VideosApivideosIdPatch
     */
    videoUpdateRequest?: VideoUpdateRequest
}

export interface VideosApiVideosIdRelatedGetRequest {
    /**
     * 
     * @type number
     * @memberof VideosApivideosIdRelatedGet
     */
    id: number
}

export interface VideosApiVideosIdRelatedPostRequest {
    /**
     * 
     * @type number
     * @memberof VideosApivideosIdRelatedPost
     */
    id: number
    /**
     * Add related content
     * @type Array&lt;RelatedResponseInner&gt;
     * @memberof VideosApivideosIdRelatedPost
     */
    relatedResponseInner?: Array<RelatedResponseInner>
}

export interface VideosApiVideosPostRequest {
    /**
     * Add Video
     * @type VideoRequest
     * @memberof VideosApivideosPost
     */
    videoRequest?: VideoRequest
}

export interface VideosApiVideosSearchGetRequest {
    /**
     * Search string
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    query: string
    /**
     * CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    ids?: string
    /**
     * Valid ID of category
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    category?: number
    /**
     * Valid ID of admin
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    createdBy?: number
    /**
     * Valid ID of video origin
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    originId?: number
    /**
     * Valid slug of video status
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    status?: string
    /**
     * Valid slug of video type
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    type?: string
    /**
     * CSV of valid content channel IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    publishedChannels?: string
    /**
     * CSV of valid content region IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    publishedRegions?: string
    /**
     * CSV of Team IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    teamIds?: string
    /**
     * CSV of Player IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    playerIds?: string
    /**
     * CSV of Tag IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    tagIds?: string
    /**
     * Match ID
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    matchId?: number
    /**
     * Tournament ID
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    tournamentId?: number
    /**
     * 
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    tournamentIds?: string
    /**
     * Championship ID
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    championshipId?: number
    /**
     * Round ID
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    roundId?: number
    /**
     * Filter by language
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    language?: string
    /**
     * Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter.
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    categoryTreeId?: number
    /**
     * CSV of author IDs
     * @type string
     * @memberof VideosApivideosSearchGet
     */
    authorIds?: string
    /**
     * Items per page
     * @type number
     * @memberof VideosApivideosSearchGet
     */
    limit?: number
}

export class ObjectVideosApi {
    private api: ObservableVideosApi

    public constructor(configuration: Configuration, requestFactory?: VideosApiRequestFactory, responseProcessor?: VideosApiResponseProcessor) {
        this.api = new ObservableVideosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all videos
     * List of all videos
     * @param param the request object
     */
    public videosGet(param: VideosApiVideosGetRequest = {}, options?: Configuration): Promise<VideosCollection> {
        return this.api.videosGet(param.page, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Delete Video.
     * @param param the request object
     */
    public videosIdDelete(param: VideosApiVideosIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.videosIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Single Video
     * @param param the request object
     */
    public videosIdGet(param: VideosApiVideosIdGetRequest, options?: Configuration): Promise<VideosIdDelete200Response> {
        return this.api.videosIdGet(param.id,  options).toPromise();
    }

    /**
     * Update Video
     * @param param the request object
     */
    public videosIdPatch(param: VideosApiVideosIdPatchRequest, options?: Configuration): Promise<VideosIdDelete200Response> {
        return this.api.videosIdPatch(param.id, param.videoUpdateRequest,  options).toPromise();
    }

    /**
     * Get Related Content
     * @param param the request object
     */
    public videosIdRelatedGet(param: VideosApiVideosIdRelatedGetRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.videosIdRelatedGet(param.id,  options).toPromise();
    }

    /**
     * Add Related Content
     * @param param the request object
     */
    public videosIdRelatedPost(param: VideosApiVideosIdRelatedPostRequest, options?: Configuration): Promise<Array<RelatedResponseInner>> {
        return this.api.videosIdRelatedPost(param.id, param.relatedResponseInner,  options).toPromise();
    }

    /**
     * Add Video
     * @param param the request object
     */
    public videosPost(param: VideosApiVideosPostRequest = {}, options?: Configuration): Promise<VideoResponse> {
        return this.api.videosPost(param.videoRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public videosSearchGet(param: VideosApiVideosSearchGetRequest, options?: Configuration): Promise<ArticlesCollection> {
        return this.api.videosSearchGet(param.query, param.ids, param.category, param.createdBy, param.originId, param.status, param.type, param.publishedChannels, param.publishedRegions, param.teamIds, param.playerIds, param.tagIds, param.matchId, param.tournamentId, param.tournamentIds, param.championshipId, param.roundId, param.language, param.categoryTreeId, param.authorIds, param.limit,  options).toPromise();
    }

}
