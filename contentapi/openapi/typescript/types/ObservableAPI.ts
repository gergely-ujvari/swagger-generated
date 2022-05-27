import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ActionLogsApiRequestFactory, ActionLogsApiResponseProcessor} from "../apis/ActionLogsApi";
export class ObservableActionLogsApi {
    private requestFactory: ActionLogsApiRequestFactory;
    private responseProcessor: ActionLogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionLogsApiRequestFactory,
        responseProcessor?: ActionLogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ActionLogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ActionLogsApiResponseProcessor();
    }

    /**
     * List all action logs for specific admin
     * List all action logs for specific admin
     * @param project Valid project
     * @param adminId Admin ID
     * @param contentType Resource type
     * @param action Action
     */
    public actionLogsAdminGet(project: string, adminId: number, contentType?: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', action?: 'create' | 'update' | 'delete', _options?: Configuration): Observable<ActionLogsCollection> {
        const requestContextPromise = this.requestFactory.actionLogsAdminGet(project, adminId, contentType, action, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionLogsAdminGet(rsp)));
            }));
    }

    /**
     * List all action logs for specific resource
     * List all action logs for specific resource
     * @param project Valid project
     * @param contentType Resource type
     * @param contentId Resource ID
     */
    public actionLogsContentGet(project: string, contentType: 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption', contentId: number, _options?: Configuration): Observable<ActionLogsCollection> {
        const requestContextPromise = this.requestFactory.actionLogsContentGet(project, contentType, contentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.actionLogsContentGet(rsp)));
            }));
    }

}

import { ArticlesApiRequestFactory, ArticlesApiResponseProcessor} from "../apis/ArticlesApi";
export class ObservableArticlesApi {
    private requestFactory: ArticlesApiRequestFactory;
    private responseProcessor: ArticlesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesApiRequestFactory,
        responseProcessor?: ArticlesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArticlesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArticlesApiResponseProcessor();
    }

    /**
     * List of all articles
     * List of all articles
     * @param optionalData Get sports_related data
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public articlesGet(optionalData?: 'sports_related', page?: number, limit?: number, sort?: string, _options?: Configuration): Observable<ArticlesCollection> {
        const requestContextPromise = this.requestFactory.articlesGet(optionalData, page, limit, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesGet(rsp)));
            }));
    }

    /**
     * Delete Article
     * @param id 
     */
    public articlesIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.articlesIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Article
     * @param id 
     */
    public articlesIdGet(id: number, _options?: Configuration): Observable<ArticlesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.articlesIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesIdGet(rsp)));
            }));
    }

    /**
     * Update Article
     * @param id 
     * @param articleUpdateRequest Update Article
     */
    public articlesIdPatch(id: number, articleUpdateRequest?: ArticleUpdateRequest, _options?: Configuration): Observable<ArticlesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.articlesIdPatch(id, articleUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesIdPatch(rsp)));
            }));
    }

    /**
     * Get Related Content
     * @param id 
     */
    public articlesIdRelatedGet(id: number, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.articlesIdRelatedGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesIdRelatedGet(rsp)));
            }));
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public articlesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.articlesIdRelatedPost(id, relatedResponseInner, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesIdRelatedPost(rsp)));
            }));
    }

    /**
     * Add Article
     * @param articleRequest Add Article
     */
    public articlesPost(articleRequest?: ArticleRequest, _options?: Configuration): Observable<ArticleResponse> {
        const requestContextPromise = this.requestFactory.articlesPost(articleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesPost(rsp)));
            }));
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
    public articlesSearchGet(query: string, optionalData?: 'sports_related', ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Observable<ArticlesCollection> {
        const requestContextPromise = this.requestFactory.articlesSearchGet(query, optionalData, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesSearchGet(rsp)));
            }));
    }

}

import { AuthorsApiRequestFactory, AuthorsApiResponseProcessor} from "../apis/AuthorsApi";
export class ObservableAuthorsApi {
    private requestFactory: AuthorsApiRequestFactory;
    private responseProcessor: AuthorsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorsApiRequestFactory,
        responseProcessor?: AuthorsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorsApiResponseProcessor();
    }

    /**
     * List of all authors
     * List of all authors
     * @param page Pagination
     * @param limit Items per page
     */
    public authorsGet(page?: number, limit?: number, _options?: Configuration): Observable<AuthorsCollection> {
        const requestContextPromise = this.requestFactory.authorsGet(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorsGet(rsp)));
            }));
    }

    /**
     * Delete Author
     * @param id 
     */
    public authorsIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authorsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorsIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Author
     * @param id 
     */
    public authorsIdGet(id: number, _options?: Configuration): Observable<AuthorsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.authorsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorsIdGet(rsp)));
            }));
    }

    /**
     * Update Author
     * @param id 
     * @param authorRequest Update Author
     */
    public authorsIdPatch(id: number, authorRequest?: AuthorRequest, _options?: Configuration): Observable<AuthorsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.authorsIdPatch(id, authorRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorsIdPatch(rsp)));
            }));
    }

    /**
     * Add Author
     * @param authorRequest Add Author
     */
    public authorsPost(authorRequest?: AuthorRequest, _options?: Configuration): Observable<AuthorResponse> {
        const requestContextPromise = this.requestFactory.authorsPost(authorRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorsPost(rsp)));
            }));
    }

}

import { BannersApiRequestFactory, BannersApiResponseProcessor} from "../apis/BannersApi";
export class ObservableBannersApi {
    private requestFactory: BannersApiRequestFactory;
    private responseProcessor: BannersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BannersApiRequestFactory,
        responseProcessor?: BannersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BannersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BannersApiResponseProcessor();
    }

    /**
     * List of all Banners
     * List of all Banners
     * @param page Pagination
     * @param limit Items per page
     */
    public bannersGet(page?: number, limit?: number, _options?: Configuration): Observable<BannersCollection> {
        const requestContextPromise = this.requestFactory.bannersGet(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersGet(rsp)));
            }));
    }

    /**
     * Delete Banner.
     * @param id 
     */
    public bannersIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.bannersIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Banner
     * @param id 
     */
    public bannersIdGet(id: number, _options?: Configuration): Observable<BannersIdDelete200Response> {
        const requestContextPromise = this.requestFactory.bannersIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersIdGet(rsp)));
            }));
    }

    /**
     * Update Banner
     * @param id 
     * @param bannersRequest Update Banner
     */
    public bannersIdPatch(id: number, bannersRequest?: BannersRequest, _options?: Configuration): Observable<BannersIdDelete200Response> {
        const requestContextPromise = this.requestFactory.bannersIdPatch(id, bannersRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersIdPatch(rsp)));
            }));
    }

    /**
     * Add Banner
     * @param bannersRequest Add Banner
     */
    public bannersPost(bannersRequest?: BannersRequest, _options?: Configuration): Observable<BannersResponse> {
        const requestContextPromise = this.requestFactory.bannersPost(bannersRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersPost(rsp)));
            }));
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param type Valid slug of banner type
     * @param limit Items per page
     */
    public bannersSearchGet(query: string, ids?: string, type?: string, limit?: number, _options?: Configuration): Observable<BannersCollection> {
        const requestContextPromise = this.requestFactory.bannersSearchGet(query, ids, type, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bannersSearchGet(rsp)));
            }));
    }

}

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class ObservableCategoriesApi {
    private requestFactory: CategoriesApiRequestFactory;
    private responseProcessor: CategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoriesApiResponseProcessor();
    }

    /**
     * List of all categories
     * List of all categories
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public categoriesGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Observable<CategoriesCollection> {
        const requestContextPromise = this.requestFactory.categoriesGet(page, limit, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesGet(rsp)));
            }));
    }

    /**
     * Category cannot be deleted until all content is moved to antoher category (move-content).
     * Delete Category.
     * @param id 
     */
    public categoriesIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.categoriesIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Category
     * @param id 
     */
    public categoriesIdGet(id: number, _options?: Configuration): Observable<CategoriesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.categoriesIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesIdGet(rsp)));
            }));
    }

    /**
     * Update Category. Category title is unique.
     * @param id 
     * @param categoryRequest Update Category
     */
    public categoriesIdPatch(id: number, categoryRequest?: CategoryRequest, _options?: Configuration): Observable<CategoriesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.categoriesIdPatch(id, categoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesIdPatch(rsp)));
            }));
    }

    /**
     * Add Category
     * @param categoryRequest Add Category. Category title is unique.
     */
    public categoriesPost(categoryRequest?: CategoryRequest, _options?: Configuration): Observable<CategoryResponse> {
        const requestContextPromise = this.requestFactory.categoriesPost(categoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesPost(rsp)));
            }));
    }

}

import { CommentPoliciesApiRequestFactory, CommentPoliciesApiResponseProcessor} from "../apis/CommentPoliciesApi";
export class ObservableCommentPoliciesApi {
    private requestFactory: CommentPoliciesApiRequestFactory;
    private responseProcessor: CommentPoliciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentPoliciesApiRequestFactory,
        responseProcessor?: CommentPoliciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentPoliciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentPoliciesApiResponseProcessor();
    }

    /**
     * @param contentType 
     */
    public contentTypeCommentsPoliciesGet(contentType: 'articles' | 'videos' | 'polls' | 'galleries', _options?: Configuration): Observable<CommentPoliciesCollection> {
        const requestContextPromise = this.requestFactory.contentTypeCommentsPoliciesGet(contentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeCommentsPoliciesGet(rsp)));
            }));
    }

    /**
     * Delete Comment Policy
     * @param contentType 
     * @param id 
     */
    public contentTypeCommentsPoliciesIdDelete(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.contentTypeCommentsPoliciesIdDelete(contentType, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeCommentsPoliciesIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Comment Policy
     * @param contentType 
     * @param id 
     */
    public contentTypeCommentsPoliciesIdGet(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, _options?: Configuration): Observable<ContentTypeCommentsPoliciesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.contentTypeCommentsPoliciesIdGet(contentType, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeCommentsPoliciesIdGet(rsp)));
            }));
    }

    /**
     * Update a Comment Policy
     * @param contentType 
     * @param id 
     * @param commentPolicyRequest Update Comment Policy
     */
    public contentTypeCommentsPoliciesIdPatch(contentType: 'articles' | 'videos' | 'polls' | 'galleries', id: number, commentPolicyRequest?: CommentPolicyRequest, _options?: Configuration): Observable<ContentTypeCommentsPoliciesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.contentTypeCommentsPoliciesIdPatch(contentType, id, commentPolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeCommentsPoliciesIdPatch(rsp)));
            }));
    }

    /**
     * Add Comment Policy for content type
     * @param contentType 
     * @param commentPolicyRequest Add Comment Policy
     */
    public contentTypeCommentsPoliciesPost(contentType: 'articles' | 'videos' | 'polls' | 'galleries', commentPolicyRequest?: CommentPolicyRequest, _options?: Configuration): Observable<CommentPolicyResponse> {
        const requestContextPromise = this.requestFactory.contentTypeCommentsPoliciesPost(contentType, commentPolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeCommentsPoliciesPost(rsp)));
            }));
    }

}

import { ContentOriginsApiRequestFactory, ContentOriginsApiResponseProcessor} from "../apis/ContentOriginsApi";
export class ObservableContentOriginsApi {
    private requestFactory: ContentOriginsApiRequestFactory;
    private responseProcessor: ContentOriginsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentOriginsApiRequestFactory,
        responseProcessor?: ContentOriginsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContentOriginsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContentOriginsApiResponseProcessor();
    }

    /**
     * @param contentType 
     */
    public contentTypeOriginsGet(contentType: 'articles' | 'videos' | 'images' | 'galleries', _options?: Configuration): Observable<OriginsCollection> {
        const requestContextPromise = this.requestFactory.contentTypeOriginsGet(contentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeOriginsGet(rsp)));
            }));
    }

    /**
     * Get Single Origin
     * @param contentType 
     * @param id 
     */
    public contentTypeOriginsIdGet(contentType: 'articles' | 'videos' | 'images' | 'galleries', id: number, _options?: Configuration): Observable<ContentTypeOriginsIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeOriginsIdGet(contentType, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeOriginsIdGet(rsp)));
            }));
    }

    /**
     * Update an Origin
     * @param contentType 
     * @param id 
     * @param originRequest Update Origin
     */
    public contentTypeOriginsIdPatch(contentType: 'articles' | 'videos' | 'images' | 'galleries', id: number, originRequest?: OriginRequest, _options?: Configuration): Observable<ContentTypeOriginsIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeOriginsIdPatch(contentType, id, originRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeOriginsIdPatch(rsp)));
            }));
    }

    /**
     * Add Origin for content type
     * @param contentType 
     * @param originRequest Add Origin
     */
    public contentTypeOriginsPost(contentType: 'articles' | 'videos' | 'images' | 'galleries', originRequest?: OriginRequest, _options?: Configuration): Observable<OriginResponse> {
        const requestContextPromise = this.requestFactory.contentTypeOriginsPost(contentType, originRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeOriginsPost(rsp)));
            }));
    }

}

import { ContentStatusesApiRequestFactory, ContentStatusesApiResponseProcessor} from "../apis/ContentStatusesApi";
export class ObservableContentStatusesApi {
    private requestFactory: ContentStatusesApiRequestFactory;
    private responseProcessor: ContentStatusesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentStatusesApiRequestFactory,
        responseProcessor?: ContentStatusesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContentStatusesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContentStatusesApiResponseProcessor();
    }

    /**
     * @param contentType 
     */
    public contentTypeStatusesGet(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', _options?: Configuration): Observable<StatusesCollection> {
        const requestContextPromise = this.requestFactory.contentTypeStatusesGet(contentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeStatusesGet(rsp)));
            }));
    }

    /**
     * Get Single Status
     * @param contentType 
     * @param id 
     */
    public contentTypeStatusesIdGet(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', id: number, _options?: Configuration): Observable<ContentTypeStatusesIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeStatusesIdGet(contentType, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeStatusesIdGet(rsp)));
            }));
    }

    /**
     * Update a Status
     * @param contentType 
     * @param id 
     * @param statusRequest Update Status
     */
    public contentTypeStatusesIdPatch(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', id: number, statusRequest?: StatusRequest, _options?: Configuration): Observable<ContentTypeStatusesIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeStatusesIdPatch(contentType, id, statusRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeStatusesIdPatch(rsp)));
            }));
    }

    /**
     * Add Status for content type
     * @param contentType 
     * @param statusRequest Add Status
     */
    public contentTypeStatusesPost(contentType: 'articles' | 'videos' | 'polls' | 'lists' | 'galleries', statusRequest?: StatusRequest, _options?: Configuration): Observable<StatusResponse> {
        const requestContextPromise = this.requestFactory.contentTypeStatusesPost(contentType, statusRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeStatusesPost(rsp)));
            }));
    }

}

import { ContentTypesApiRequestFactory, ContentTypesApiResponseProcessor} from "../apis/ContentTypesApi";
export class ObservableContentTypesApi {
    private requestFactory: ContentTypesApiRequestFactory;
    private responseProcessor: ContentTypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentTypesApiRequestFactory,
        responseProcessor?: ContentTypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContentTypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContentTypesApiResponseProcessor();
    }

    /**
     * @param contentType 
     */
    public contentTypeTypesGet(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', _options?: Configuration): Observable<TypesCollection> {
        const requestContextPromise = this.requestFactory.contentTypeTypesGet(contentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeTypesGet(rsp)));
            }));
    }

    /**
     * Get Single Type
     * @param contentType 
     * @param id 
     */
    public contentTypeTypesIdGet(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', id: number, _options?: Configuration): Observable<ContentTypeTypesIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeTypesIdGet(contentType, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeTypesIdGet(rsp)));
            }));
    }

    /**
     * Update a Type
     * @param contentType 
     * @param id 
     * @param typeRequest Update Type
     */
    public contentTypeTypesIdPatch(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', id: number, typeRequest?: TypeRequest, _options?: Configuration): Observable<ContentTypeTypesIdGet200Response> {
        const requestContextPromise = this.requestFactory.contentTypeTypesIdPatch(contentType, id, typeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeTypesIdPatch(rsp)));
            }));
    }

    /**
     * Add Type for content type
     * @param contentType 
     * @param typeRequest Add Type
     */
    public contentTypeTypesPost(contentType: 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners', typeRequest?: TypeRequest, _options?: Configuration): Observable<TypeResponse> {
        const requestContextPromise = this.requestFactory.contentTypeTypesPost(contentType, typeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentTypeTypesPost(rsp)));
            }));
    }

}

import { DistributionApiRequestFactory, DistributionApiResponseProcessor} from "../apis/DistributionApi";
export class ObservableDistributionApi {
    private requestFactory: DistributionApiRequestFactory;
    private responseProcessor: DistributionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DistributionApiRequestFactory,
        responseProcessor?: DistributionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DistributionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DistributionApiResponseProcessor();
    }

    /**
     */
    public distributionChannelsGet(_options?: Configuration): Observable<ChannelsCollection> {
        const requestContextPromise = this.requestFactory.distributionChannelsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionChannelsGet(rsp)));
            }));
    }

    /**
     * Delete Channel
     * @param id 
     */
    public distributionChannelsIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.distributionChannelsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionChannelsIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Channel
     * @param id 
     */
    public distributionChannelsIdGet(id: number, _options?: Configuration): Observable<DistributionChannelsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.distributionChannelsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionChannelsIdGet(rsp)));
            }));
    }

    /**
     * Update a Channel
     * @param id 
     * @param channelRequest Update Channel
     */
    public distributionChannelsIdPatch(id: number, channelRequest?: ChannelRequest, _options?: Configuration): Observable<DistributionChannelsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.distributionChannelsIdPatch(id, channelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionChannelsIdPatch(rsp)));
            }));
    }

    /**
     * Add Channel
     * @param channelRequest Add Channel
     */
    public distributionChannelsPost(channelRequest?: ChannelRequest, _options?: Configuration): Observable<ChannelResponse> {
        const requestContextPromise = this.requestFactory.distributionChannelsPost(channelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionChannelsPost(rsp)));
            }));
    }

    /**
     */
    public distributionRegionsGet(_options?: Configuration): Observable<RegionsCollection> {
        const requestContextPromise = this.requestFactory.distributionRegionsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionRegionsGet(rsp)));
            }));
    }

    /**
     * Delete Region
     * @param id 
     */
    public distributionRegionsIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.distributionRegionsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionRegionsIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Region
     * @param id 
     */
    public distributionRegionsIdGet(id: number, _options?: Configuration): Observable<DistributionRegionsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.distributionRegionsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionRegionsIdGet(rsp)));
            }));
    }

    /**
     * Update a Region
     * @param id 
     * @param regionRequest Update Region
     */
    public distributionRegionsIdPatch(id: number, regionRequest?: RegionRequest, _options?: Configuration): Observable<DistributionRegionsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.distributionRegionsIdPatch(id, regionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionRegionsIdPatch(rsp)));
            }));
    }

    /**
     * Add Region
     * @param regionRequest Add Region
     */
    public distributionRegionsPost(regionRequest?: RegionRequest, _options?: Configuration): Observable<RegionResponse> {
        const requestContextPromise = this.requestFactory.distributionRegionsPost(regionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.distributionRegionsPost(rsp)));
            }));
    }

}

import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";
export class ObservableGalleriesApi {
    private requestFactory: GalleriesApiRequestFactory;
    private responseProcessor: GalleriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GalleriesApiRequestFactory,
        responseProcessor?: GalleriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GalleriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GalleriesApiResponseProcessor();
    }

    /**
     * List of all galleries
     * List of all galleries
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public galleriesGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Observable<GalleriesCollection> {
        const requestContextPromise = this.requestFactory.galleriesGet(page, limit, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesGet(rsp)));
            }));
    }

    /**
     * Delete Gallery
     * @param id 
     */
    public galleriesIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.galleriesIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Gallery
     * @param id 
     */
    public galleriesIdGet(id: number, _options?: Configuration): Observable<GalleriesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.galleriesIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesIdGet(rsp)));
            }));
    }

    /**
     * Update Gallery
     * @param id 
     * @param galleryUpdateRequest Update Gallery
     */
    public galleriesIdPatch(id: number, galleryUpdateRequest?: GalleryUpdateRequest, _options?: Configuration): Observable<GalleriesIdDelete200Response> {
        const requestContextPromise = this.requestFactory.galleriesIdPatch(id, galleryUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesIdPatch(rsp)));
            }));
    }

    /**
     * Get Related Content
     * @param id 
     */
    public galleriesIdRelatedGet(id: number, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.galleriesIdRelatedGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesIdRelatedGet(rsp)));
            }));
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public galleriesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.galleriesIdRelatedPost(id, relatedResponseInner, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesIdRelatedPost(rsp)));
            }));
    }

    /**
     * Add Gallery
     * @param galleryRequest Add Gallery
     */
    public galleriesPost(galleryRequest?: GalleryRequest, _options?: Configuration): Observable<GalleryResponse> {
        const requestContextPromise = this.requestFactory.galleriesPost(galleryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesPost(rsp)));
            }));
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
    public galleriesSearchGet(query: string, ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Observable<GalleriesCollection> {
        const requestContextPromise = this.requestFactory.galleriesSearchGet(query, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesSearchGet(rsp)));
            }));
    }

}

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class ObservableImageApi {
    private requestFactory: ImageApiRequestFactory;
    private responseProcessor: ImageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImageApiResponseProcessor();
    }

    /**
     * List of all available images
     * List of all images
     * @param page Pagination
     * @param limit Items per page
     */
    public imagesGet(page?: number, limit?: number, _options?: Configuration): Observable<ImagesCollection> {
        const requestContextPromise = this.requestFactory.imagesGet(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesGet(rsp)));
            }));
    }

    /**
     * Get Single Image
     * @param id 
     */
    public imagesIdGet(id: number, _options?: Configuration): Observable<ImagesIdGet200Response> {
        const requestContextPromise = this.requestFactory.imagesIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesIdGet(rsp)));
            }));
    }

    /**
     * Update Image metadata
     * @param id 
     * @param imageUpdateRequest Change Uploaded Image
     */
    public imagesIdPatch(id: number, imageUpdateRequest?: ImageUpdateRequest, _options?: Configuration): Observable<ImagesIdGet200Response> {
        const requestContextPromise = this.requestFactory.imagesIdPatch(id, imageUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesIdPatch(rsp)));
            }));
    }

    /**
     * Get Related Content
     * @param id 
     */
    public imagesIdRelatedGet(id: number, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.imagesIdRelatedGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesIdRelatedGet(rsp)));
            }));
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content.
     */
    public imagesIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.imagesIdRelatedPost(id, relatedResponseInner, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesIdRelatedPost(rsp)));
            }));
    }

    /**
     * Upload Image
     * @param imageRequest Upload Image
     */
    public imagesPost(imageRequest?: ImageRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.imagesPost(imageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesPost(rsp)));
            }));
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
    public imagesSearchGet(query: string, ids?: string, createdBy?: number, originId?: number, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, limit?: number, _options?: Configuration): Observable<ImagesCollection> {
        const requestContextPromise = this.requestFactory.imagesSearchGet(query, ids, createdBy, originId, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesSearchGet(rsp)));
            }));
    }

}

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";
export class ObservableListsApi {
    private requestFactory: ListsApiRequestFactory;
    private responseProcessor: ListsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ListsApiResponseProcessor();
    }

    /**
     * List of all Lists
     * List of all Lists
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public listsGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Observable<ListsCollection> {
        const requestContextPromise = this.requestFactory.listsGet(page, limit, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsGet(rsp)));
            }));
    }

    /**
     * Delete List.
     * @param id 
     */
    public listsIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.listsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsIdDelete(rsp)));
            }));
    }

    /**
     * Get Single List
     * @param id 
     */
    public listsIdGet(id: number, _options?: Configuration): Observable<ListsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.listsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsIdGet(rsp)));
            }));
    }

    /**
     * Update List
     * @param id 
     * @param listsUpdateRequest Update List
     */
    public listsIdPatch(id: number, listsUpdateRequest?: ListsUpdateRequest, _options?: Configuration): Observable<ListsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.listsIdPatch(id, listsUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsIdPatch(rsp)));
            }));
    }

    /**
     * Add List
     * @param listsRequest Add List
     */
    public listsPost(listsRequest?: ListsRequest, _options?: Configuration): Observable<ListsResponse> {
        const requestContextPromise = this.requestFactory.listsPost(listsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsPost(rsp)));
            }));
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
    public listsSearchGet(query: string, ids?: string, itemIds?: string, createdBy?: number, status?: string, language?: string, limit?: number, _options?: Configuration): Observable<ListsCollection> {
        const requestContextPromise = this.requestFactory.listsSearchGet(query, ids, itemIds, createdBy, status, language, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listsSearchGet(rsp)));
            }));
    }

}

import { MiscellaneousApiRequestFactory, MiscellaneousApiResponseProcessor} from "../apis/MiscellaneousApi";
export class ObservableMiscellaneousApi {
    private requestFactory: MiscellaneousApiRequestFactory;
    private responseProcessor: MiscellaneousApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MiscellaneousApiRequestFactory,
        responseProcessor?: MiscellaneousApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MiscellaneousApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MiscellaneousApiResponseProcessor();
    }

    /**
     * Delete ID Mapping by content_id/content_type key
     * @param contentId 
     * @param contentType 
     */
    public mappingsDelete(contentId: string, contentType: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.mappingsDelete(contentId, contentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mappingsDelete(rsp)));
            }));
    }

    /**
     * Get ID mappings according to various filters
     * @param contentId 
     * @param contentType 
     * @param sourceName 
     * @param sourceType 
     * @param sourceId 
     */
    public mappingsGet(contentId?: string, contentType?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom', sourceName?: string, sourceType?: string, sourceId?: string, _options?: Configuration): Observable<MappingsDelete200Response> {
        const requestContextPromise = this.requestFactory.mappingsGet(contentId, contentType, sourceName, sourceType, sourceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mappingsGet(rsp)));
            }));
    }

    /**
     * Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key
     * @param idMapping Add ID Mapping entry
     */
    public mappingsPut(idMapping?: IdMapping, _options?: Configuration): Observable<IdMapping> {
        const requestContextPromise = this.requestFactory.mappingsPut(idMapping, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mappingsPut(rsp)));
            }));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
    }

    /**
     * List of all Tags
     * List of all Tags
     * @param page Pagination
     * @param limit Items per page
     * @param orderType Filter tags by order type
     */
    public tagsGet(page?: number, limit?: number, orderType?: 'ordered' | 'unordered', _options?: Configuration): Observable<TagsCollection> {
        const requestContextPromise = this.requestFactory.tagsGet(page, limit, orderType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsGet(rsp)));
            }));
    }

    /**
     * Delete Tag.
     * @param id 
     */
    public tagsIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.tagsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Tag
     * @param id 
     */
    public tagsIdGet(id: number, _options?: Configuration): Observable<TagsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.tagsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsIdGet(rsp)));
            }));
    }

    /**
     * Update Tag
     * @param id 
     * @param tagsRequest Update Tag
     */
    public tagsIdPatch(id: number, tagsRequest?: TagsRequest, _options?: Configuration): Observable<TagsIdDelete200Response> {
        const requestContextPromise = this.requestFactory.tagsIdPatch(id, tagsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsIdPatch(rsp)));
            }));
    }

    /**
     * Add Tag
     * @param tagsRequest Add Tag
     */
    public tagsPost(tagsRequest?: TagsRequest, _options?: Configuration): Observable<TagsResponse> {
        const requestContextPromise = this.requestFactory.tagsPost(tagsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsPost(rsp)));
            }));
    }

    /**
     * @param query Search string
     * @param ids CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3
     * @param limit Items per page
     * @param orderType Filter tags by order type
     */
    public tagsSearchGet(query: string, ids?: string, limit?: number, orderType?: 'ordered' | 'unordered', _options?: Configuration): Observable<TagsCollection> {
        const requestContextPromise = this.requestFactory.tagsSearchGet(query, ids, limit, orderType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsSearchGet(rsp)));
            }));
    }

}

import { VideosApiRequestFactory, VideosApiResponseProcessor} from "../apis/VideosApi";
export class ObservableVideosApi {
    private requestFactory: VideosApiRequestFactory;
    private responseProcessor: VideosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VideosApiRequestFactory,
        responseProcessor?: VideosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VideosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VideosApiResponseProcessor();
    }

    /**
     * List of all videos
     * List of all videos
     * @param page Pagination
     * @param limit Items per page
     * @param sort Sort
     */
    public videosGet(page?: number, limit?: number, sort?: string, _options?: Configuration): Observable<VideosCollection> {
        const requestContextPromise = this.requestFactory.videosGet(page, limit, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosGet(rsp)));
            }));
    }

    /**
     * Delete Video.
     * @param id 
     */
    public videosIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.videosIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosIdDelete(rsp)));
            }));
    }

    /**
     * Get Single Video
     * @param id 
     */
    public videosIdGet(id: number, _options?: Configuration): Observable<VideosIdDelete200Response> {
        const requestContextPromise = this.requestFactory.videosIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosIdGet(rsp)));
            }));
    }

    /**
     * Update Video
     * @param id 
     * @param videoUpdateRequest Update Video
     */
    public videosIdPatch(id: number, videoUpdateRequest?: VideoUpdateRequest, _options?: Configuration): Observable<VideosIdDelete200Response> {
        const requestContextPromise = this.requestFactory.videosIdPatch(id, videoUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosIdPatch(rsp)));
            }));
    }

    /**
     * Get Related Content
     * @param id 
     */
    public videosIdRelatedGet(id: number, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.videosIdRelatedGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosIdRelatedGet(rsp)));
            }));
    }

    /**
     * Add Related Content
     * @param id 
     * @param relatedResponseInner Add related content
     */
    public videosIdRelatedPost(id: number, relatedResponseInner?: Array<RelatedResponseInner>, _options?: Configuration): Observable<Array<RelatedResponseInner>> {
        const requestContextPromise = this.requestFactory.videosIdRelatedPost(id, relatedResponseInner, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosIdRelatedPost(rsp)));
            }));
    }

    /**
     * Add Video
     * @param videoRequest Add Video
     */
    public videosPost(videoRequest?: VideoRequest, _options?: Configuration): Observable<VideoResponse> {
        const requestContextPromise = this.requestFactory.videosPost(videoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosPost(rsp)));
            }));
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
    public videosSearchGet(query: string, ids?: string, category?: number, createdBy?: number, originId?: number, status?: string, type?: string, publishedChannels?: string, publishedRegions?: string, teamIds?: string, playerIds?: string, tagIds?: string, matchId?: number, tournamentId?: number, tournamentIds?: string, championshipId?: number, roundId?: number, language?: string, categoryTreeId?: number, authorIds?: string, limit?: number, _options?: Configuration): Observable<ArticlesCollection> {
        const requestContextPromise = this.requestFactory.videosSearchGet(query, ids, category, createdBy, originId, status, type, publishedChannels, publishedRegions, teamIds, playerIds, tagIds, matchId, tournamentId, tournamentIds, championshipId, roundId, language, categoryTreeId, authorIds, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.videosSearchGet(rsp)));
            }));
    }

}
