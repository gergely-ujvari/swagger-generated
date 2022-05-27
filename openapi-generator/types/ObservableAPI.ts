import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BasicPlayerStats } from '../models/BasicPlayerStats';
import { BlacklistDto } from '../models/BlacklistDto';
import { BlacklistKeyDto } from '../models/BlacklistKeyDto';
import { CardlistStandingData } from '../models/CardlistStandingData';
import { CardlistStandingDataAllOf } from '../models/CardlistStandingDataAllOf';
import { CityDto } from '../models/CityDto';
import { CityEditDto } from '../models/CityEditDto';
import { Coach } from '../models/Coach';
import { CoachDto } from '../models/CoachDto';
import { CoachEditDto } from '../models/CoachEditDto';
import { CoachPageDto } from '../models/CoachPageDto';
import { Country } from '../models/Country';
import { CountryDto } from '../models/CountryDto';
import { Dto } from '../models/Dto';
import { Event } from '../models/Event';
import { EventIncident } from '../models/EventIncident';
import { EventPlayer } from '../models/EventPlayer';
import { EventPlayerSubOn } from '../models/EventPlayerSubOn';
import { EventPlayerType } from '../models/EventPlayerType';
import { EventStatus } from '../models/EventStatus';
import { EventTeamStats } from '../models/EventTeamStats';
import { EventsByDate } from '../models/EventsByDate';
import { LanguageDto } from '../models/LanguageDto';
import { LeagueStandingData } from '../models/LeagueStandingData';
import { LeagueStandingDataAllOf } from '../models/LeagueStandingDataAllOf';
import { Lineup } from '../models/Lineup';
import { ListVenueDto } from '../models/ListVenueDto';
import { LiveCommentaryOutputDto } from '../models/LiveCommentaryOutputDto';
import { NotFoundError } from '../models/NotFoundError';
import { Odd } from '../models/Odd';
import { OddProvider } from '../models/OddProvider';
import { OutputDto } from '../models/OutputDto';
import { PageMetaDto } from '../models/PageMetaDto';
import { PartialEvent } from '../models/PartialEvent';
import { PartialPerson } from '../models/PartialPerson';
import { PartialTeam } from '../models/PartialTeam';
import { PartialTeamWithForm } from '../models/PartialTeamWithForm';
import { PartialTeamWithFormAllOf } from '../models/PartialTeamWithFormAllOf';
import { PartialTournamentSeasonStage } from '../models/PartialTournamentSeasonStage';
import { Player } from '../models/Player';
import { PlayerDto } from '../models/PlayerDto';
import { PlayerEditDto } from '../models/PlayerEditDto';
import { PlayerEditSocialDto } from '../models/PlayerEditSocialDto';
import { PlayerPageDto } from '../models/PlayerPageDto';
import { PlayerProfile } from '../models/PlayerProfile';
import { PlayerProfileDto } from '../models/PlayerProfileDto';
import { PlayerStatisticItem } from '../models/PlayerStatisticItem';
import { PlayerStatistics } from '../models/PlayerStatistics';
import { PlayerStatsBasic } from '../models/PlayerStatsBasic';
import { PlayerStatsExtended } from '../models/PlayerStatsExtended';
import { PlayerStatsExtendedAllOf } from '../models/PlayerStatsExtendedAllOf';
import { PlayerTeam } from '../models/PlayerTeam';
import { PlayerTeamAllOf } from '../models/PlayerTeamAllOf';
import { RefereeDto } from '../models/RefereeDto';
import { RefereeEditDto } from '../models/RefereeEditDto';
import { RefereePageDto } from '../models/RefereePageDto';
import { Round } from '../models/Round';
import { SeasonDto } from '../models/SeasonDto';
import { StageDto } from '../models/StageDto';
import { StageGroup } from '../models/StageGroup';
import { StageGroupWithStanding } from '../models/StageGroupWithStanding';
import { StageGroupWithStandingAllOf } from '../models/StageGroupWithStandingAllOf';
import { StageGroupWithStandingTournamentSeasonStage } from '../models/StageGroupWithStandingTournamentSeasonStage';
import { StageGroupWithStandingTournamentSeasonStageAllOf } from '../models/StageGroupWithStandingTournamentSeasonStageAllOf';
import { StandingData } from '../models/StandingData';
import { StandingRule } from '../models/StandingRule';
import { Team } from '../models/Team';
import { TeamEditDto } from '../models/TeamEditDto';
import { TeamForm } from '../models/TeamForm';
import { TeamLineup } from '../models/TeamLineup';
import { TeamPageDto } from '../models/TeamPageDto';
import { TeamPlayer } from '../models/TeamPlayer';
import { TeamPlayerAllOf } from '../models/TeamPlayerAllOf';
import { TeamPlayerData } from '../models/TeamPlayerData';
import { TeamPlayerSeasonStatistics } from '../models/TeamPlayerSeasonStatistics';
import { TeamPlayerSeasonStatisticsAllOf } from '../models/TeamPlayerSeasonStatisticsAllOf';
import { TeamPlayerStatistics } from '../models/TeamPlayerStatistics';
import { TeamPlayerStatisticsAllOf } from '../models/TeamPlayerStatisticsAllOf';
import { TeamScore } from '../models/TeamScore';
import { TeamSeasonStatistics } from '../models/TeamSeasonStatistics';
import { TeamSocialDto } from '../models/TeamSocialDto';
import { TeamStatistics } from '../models/TeamStatistics';
import { TopscorerStandingData } from '../models/TopscorerStandingData';
import { TopscorerStandingDataAllOf } from '../models/TopscorerStandingDataAllOf';
import { Tournament } from '../models/Tournament';
import { TournamentDto } from '../models/TournamentDto';
import { TournamentItemDto } from '../models/TournamentItemDto';
import { TournamentSeason } from '../models/TournamentSeason';
import { TournamentSeasonStage } from '../models/TournamentSeasonStage';
import { TournamentSeasonStageWithStandingGroups } from '../models/TournamentSeasonStageWithStandingGroups';
import { TournamentSeasonStageWithStandingGroupsAllOf } from '../models/TournamentSeasonStageWithStandingGroupsAllOf';
import { TournamentSeasonWithStages } from '../models/TournamentSeasonWithStages';
import { TournamentSeasonWithStagesAllOf } from '../models/TournamentSeasonWithStagesAllOf';
import { TournamentSeasonWithTournament } from '../models/TournamentSeasonWithTournament';
import { TournamentSeasonWithTournamentAllOf } from '../models/TournamentSeasonWithTournamentAllOf';
import { TournamentWithSeasons } from '../models/TournamentWithSeasons';
import { TournamentWithSeasonsAllOf } from '../models/TournamentWithSeasonsAllOf';
import { TranslationContentDto } from '../models/TranslationContentDto';
import { TranslationDto } from '../models/TranslationDto';
import { TranslationEntityDto } from '../models/TranslationEntityDto';
import { TranslationKeyDto } from '../models/TranslationKeyDto';
import { V1CountryDto } from '../models/V1CountryDto';
import { V2ActiveClubsInput } from '../models/V2ActiveClubsInput';
import { V2ActiveTeamInput } from '../models/V2ActiveTeamInput';
import { V2Asset } from '../models/V2Asset';
import { V2AssetDeleteInput } from '../models/V2AssetDeleteInput';
import { V2AssetInput } from '../models/V2AssetInput';
import { V2City } from '../models/V2City';
import { V2Coach } from '../models/V2Coach';
import { V2Country } from '../models/V2Country';
import { V2Group } from '../models/V2Group';
import { V2KnockoutEdgeRound } from '../models/V2KnockoutEdgeRound';
import { V2KnockoutGroup } from '../models/V2KnockoutGroup';
import { V2KnockoutMatch } from '../models/V2KnockoutMatch';
import { V2KnockoutRound } from '../models/V2KnockoutRound';
import { V2KnockoutScheme } from '../models/V2KnockoutScheme';
import { V2KnockoutTeam } from '../models/V2KnockoutTeam';
import { V2LeagueEntryInput } from '../models/V2LeagueEntryInput';
import { V2LeagueStandingInput } from '../models/V2LeagueStandingInput';
import { V2Lineup } from '../models/V2Lineup';
import { V2LineupInput } from '../models/V2LineupInput';
import { V2LineupPlayerDto } from '../models/V2LineupPlayerDto';
import { V2LineupPlayerInput } from '../models/V2LineupPlayerInput';
import { V2LineupTeamDto } from '../models/V2LineupTeamDto';
import { V2LineupTeamInput } from '../models/V2LineupTeamInput';
import { V2MappingDto } from '../models/V2MappingDto';
import { V2MappingRequestDto } from '../models/V2MappingRequestDto';
import { V2MappingRequestsDto } from '../models/V2MappingRequestsDto';
import { V2MappingsDto } from '../models/V2MappingsDto';
import { V2MappingsSearchPostRequest } from '../models/V2MappingsSearchPostRequest';
import { V2Match } from '../models/V2Match';
import { V2MatchEvent } from '../models/V2MatchEvent';
import { V2MatchEventInput } from '../models/V2MatchEventInput';
import { V2MatchEventInputWrapper } from '../models/V2MatchEventInputWrapper';
import { V2MatchEventProfile } from '../models/V2MatchEventProfile';
import { V2MatchInput } from '../models/V2MatchInput';
import { V2MatchMinute } from '../models/V2MatchMinute';
import { V2MatchReferee } from '../models/V2MatchReferee';
import { V2MatchRefereeInput } from '../models/V2MatchRefereeInput';
import { V2MatchRound } from '../models/V2MatchRound';
import { V2MatchScore } from '../models/V2MatchScore';
import { V2MatchScoreInput } from '../models/V2MatchScoreInput';
import { V2MatchStage } from '../models/V2MatchStage';
import { V2MatchStatus } from '../models/V2MatchStatus';
import { V2MatchTeamDto } from '../models/V2MatchTeamDto';
import { V2MatchVenue } from '../models/V2MatchVenue';
import { V2Matches } from '../models/V2Matches';
import { V2MatchesLivescore } from '../models/V2MatchesLivescore';
import { V2Player } from '../models/V2Player';
import { V2PlayerActiveClub } from '../models/V2PlayerActiveClub';
import { V2PlayerProfile } from '../models/V2PlayerProfile';
import { V2PlayerSeasonStatisticOutput } from '../models/V2PlayerSeasonStatisticOutput';
import { V2PlayerSeasonStatisticOutputCollection } from '../models/V2PlayerSeasonStatisticOutputCollection';
import { V2PlayerStatisticInput } from '../models/V2PlayerStatisticInput';
import { V2PlayerStatisticOutput } from '../models/V2PlayerStatisticOutput';
import { V2PostVenues } from '../models/V2PostVenues';
import { V2President } from '../models/V2President';
import { V2PresidentInput } from '../models/V2PresidentInput';
import { V2PresidentUpdate } from '../models/V2PresidentUpdate';
import { V2PutVenues } from '../models/V2PutVenues';
import { V2RoundTypes } from '../models/V2RoundTypes';
import { V2RoundWithStatus } from '../models/V2RoundWithStatus';
import { V2Season } from '../models/V2Season';
import { V2SeasonDetails } from '../models/V2SeasonDetails';
import { V2SeasonList } from '../models/V2SeasonList';
import { V2SeasonStage } from '../models/V2SeasonStage';
import { V2SeasonStageCollection } from '../models/V2SeasonStageCollection';
import { V2SquadPlayer } from '../models/V2SquadPlayer';
import { V2SquadPlayerInput } from '../models/V2SquadPlayerInput';
import { V2StageDetails } from '../models/V2StageDetails';
import { V2StageGroup } from '../models/V2StageGroup';
import { V2StageGroupCollection } from '../models/V2StageGroupCollection';
import { V2StageTeamInput } from '../models/V2StageTeamInput';
import { V2StandingEntryRuleInput } from '../models/V2StandingEntryRuleInput';
import { V2StandingEntryRuleWrapper } from '../models/V2StandingEntryRuleWrapper';
import { V2StatisticItem } from '../models/V2StatisticItem';
import { V2Team } from '../models/V2Team';
import { V2TeamColors } from '../models/V2TeamColors';
import { V2TeamColorsColorsInner } from '../models/V2TeamColorsColorsInner';
import { V2TeamProfile } from '../models/V2TeamProfile';
import { V2TeamScore } from '../models/V2TeamScore';
import { V2TeamScoreInput } from '../models/V2TeamScoreInput';
import { V2TeamSquad } from '../models/V2TeamSquad';
import { V2TeamSquadInput } from '../models/V2TeamSquadInput';
import { V2TopScorerEntryInput } from '../models/V2TopScorerEntryInput';
import { V2TopScorerStandingInput } from '../models/V2TopScorerStandingInput';
import { V2Tournament } from '../models/V2Tournament';
import { V2TournamentGroupCollection } from '../models/V2TournamentGroupCollection';
import { V2TournamentGroupGetOutput } from '../models/V2TournamentGroupGetOutput';
import { V2TournamentGroupInsertInput } from '../models/V2TournamentGroupInsertInput';
import { V2TournamentGroupSelection } from '../models/V2TournamentGroupSelection';
import { V2TournamentGroupUpdateInput } from '../models/V2TournamentGroupUpdateInput';
import { V2TournamentItemOutput } from '../models/V2TournamentItemOutput';
import { V2TournamentSeasonInsertInput } from '../models/V2TournamentSeasonInsertInput';
import { V2TournamentSeasonStatusInput } from '../models/V2TournamentSeasonStatusInput';
import { V2TournamentSeasonUpdateInput } from '../models/V2TournamentSeasonUpdateInput';
import { V2Venues } from '../models/V2Venues';
import { V2VenuesGetId } from '../models/V2VenuesGetId';
import { V2VenuesList } from '../models/V2VenuesList';
import { V2VenuesPut } from '../models/V2VenuesPut';
import { Venue } from '../models/Venue';
import { VenueDto } from '../models/VenueDto';
import { VenueEditDto } from '../models/VenueEditDto';
import { VenuePageDto } from '../models/VenuePageDto';
import { VenueProfileDto } from '../models/VenueProfileDto';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class ObservableAssetsApi {
    private requestFactory: AssetsApiRequestFactory;
    private responseProcessor: AssetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsApiResponseProcessor();
    }

    /**
     * Bulk delete assets
     * @param assets Array of assets
     */
    public v2AssetsDelete(assets?: Array<V2AssetInput>, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2AssetsDelete(assets, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetsDelete(rsp)));
            }));
    }

    /**
     * Bulk Upsert assets
     * @param assets Array of assets
     */
    public v2AssetsPost(assets?: Array<V2AssetInput>, _options?: Configuration): Observable<V2Asset> {
        const requestContextPromise = this.requestFactory.v2AssetsPost(assets, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetsPost(rsp)));
            }));
    }

}

import { BlacklistApiRequestFactory, BlacklistApiResponseProcessor} from "../apis/BlacklistApi";
export class ObservableBlacklistApi {
    private requestFactory: BlacklistApiRequestFactory;
    private responseProcessor: BlacklistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlacklistApiRequestFactory,
        responseProcessor?: BlacklistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlacklistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlacklistApiResponseProcessor();
    }

    /**
     * Remove blacklist record by id.
     * Remove the specified resource from storage.
     * @param id Unique identifier of the resource.
     */
    public v2BlacklistIdDelete(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2BlacklistIdDelete(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2BlacklistIdDelete(rsp)));
            }));
    }

    /**
     * Bulk find in blacklist table and return matching entries by the unique blacklist key.
     * @param blacklistKeys Array of blacklistsKeys
     */
    public v2BlacklistSearchPost(blacklistKeys?: Array<BlacklistKeyDto>, _options?: Configuration): Observable<Array<BlacklistDto>> {
        const requestContextPromise = this.requestFactory.v2BlacklistSearchPost(blacklistKeys, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2BlacklistSearchPost(rsp)));
            }));
    }

}

import { CitiesApiRequestFactory, CitiesApiResponseProcessor} from "../apis/CitiesApi";
export class ObservableCitiesApi {
    private requestFactory: CitiesApiRequestFactory;
    private responseProcessor: CitiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CitiesApiRequestFactory,
        responseProcessor?: CitiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CitiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CitiesApiResponseProcessor();
    }

    /**
     * Update city information
     * @param id Unique identifier of the resource.
     * @param city City information to save in persistance
     */
    public v2CitiesIdPut(id: string, city?: CityEditDto, _options?: Configuration): Observable<CityDto> {
        const requestContextPromise = this.requestFactory.v2CitiesIdPut(id, city, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CitiesIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created city in storage
     * @param city 
     */
    public v2CitiesPost(city?: CityEditDto, _options?: Configuration): Observable<CityDto> {
        const requestContextPromise = this.requestFactory.v2CitiesPost(city, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CitiesPost(rsp)));
            }));
    }

}

import { CoachesApiRequestFactory, CoachesApiResponseProcessor} from "../apis/CoachesApi";
export class ObservableCoachesApi {
    private requestFactory: CoachesApiRequestFactory;
    private responseProcessor: CoachesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CoachesApiRequestFactory,
        responseProcessor?: CoachesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CoachesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CoachesApiResponseProcessor();
    }

    /**
     * List coaches with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2CoachesGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Observable<CoachPageDto> {
        const requestContextPromise = this.requestFactory.v2CoachesGet(offset, limit, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CoachesGet(rsp)));
            }));
    }

    /**
     * Find coach by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2CoachesIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<Array<CoachDto>> {
        const requestContextPromise = this.requestFactory.v2CoachesIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CoachesIdGet(rsp)));
            }));
    }

    /**
     * Update coach information
     * @param id Unique identifier of the resource.
     * @param coach Coach information to save in persistance
     */
    public v2CoachesIdPut(id: string, coach?: CoachEditDto, _options?: Configuration): Observable<CoachDto> {
        const requestContextPromise = this.requestFactory.v2CoachesIdPut(id, coach, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CoachesIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created coach in storage
     * @param coach 
     */
    public v2CoachesPost(coach?: CoachEditDto, _options?: Configuration): Observable<CoachDto> {
        const requestContextPromise = this.requestFactory.v2CoachesPost(coach, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2CoachesPost(rsp)));
            }));
    }

}

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class ObservableCountriesApi {
    private requestFactory: CountriesApiRequestFactory;
    private responseProcessor: CountriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountriesApiResponseProcessor();
    }

    /**
     * Get a list of available Country resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public countriesGet(acceptLanguage?: string, _options?: Configuration): Observable<Array<Country>> {
        const requestContextPromise = this.requestFactory.countriesGet(acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesGet(rsp)));
            }));
    }

}

import { EventIncidentsApiRequestFactory, EventIncidentsApiResponseProcessor} from "../apis/EventIncidentsApi";
export class ObservableEventIncidentsApi {
    private requestFactory: EventIncidentsApiRequestFactory;
    private responseProcessor: EventIncidentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventIncidentsApiRequestFactory,
        responseProcessor?: EventIncidentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventIncidentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventIncidentsApiResponseProcessor();
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     */
    public eventIncidentsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Observable<Array<EventIncident>> {
        const requestContextPromise = this.requestFactory.eventIncidentsGet(acceptLanguage, lastUpdate, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventIncidentsGet(rsp)));
            }));
    }

}

import { EventPlayerTypeApiRequestFactory, EventPlayerTypeApiResponseProcessor} from "../apis/EventPlayerTypeApi";
export class ObservableEventPlayerTypeApi {
    private requestFactory: EventPlayerTypeApiRequestFactory;
    private responseProcessor: EventPlayerTypeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventPlayerTypeApiRequestFactory,
        responseProcessor?: EventPlayerTypeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventPlayerTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventPlayerTypeApiResponseProcessor();
    }

    /**
     * Get a list of available EventPlayerType objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventPlayerTypesGet(acceptLanguage?: string, _options?: Configuration): Observable<EventPlayerType> {
        const requestContextPromise = this.requestFactory.eventPlayerTypesGet(acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventPlayerTypesGet(rsp)));
            }));
    }

}

import { EventStatusApiRequestFactory, EventStatusApiResponseProcessor} from "../apis/EventStatusApi";
export class ObservableEventStatusApi {
    private requestFactory: EventStatusApiRequestFactory;
    private responseProcessor: EventStatusApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventStatusApiRequestFactory,
        responseProcessor?: EventStatusApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventStatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventStatusApiResponseProcessor();
    }

    /**
     * Get a list of available EventStatus objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventStatusGet(acceptLanguage?: string, _options?: Configuration): Observable<EventStatus> {
        const requestContextPromise = this.requestFactory.eventStatusGet(acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventStatusGet(rsp)));
            }));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Get a list of events by home and away team id
     * @param homeId Filter events with home team id
     * @param awayId Filter events with away team id
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, _options?: Configuration): Observable<Event> {
        const requestContextPromise = this.requestFactory.eventsByTeamsGet(homeId, awayId, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsByTeamsGet(rsp)));
            }));
    }

    /**
     * Get a list of Events
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param clientOrder Order matching events for a specific client
     */
    public eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.eventsGet(acceptLanguage, fromTime, toTime, groupBy, clientOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsGet(rsp)));
            }));
    }

    /**
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the standing response
     */
    public eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', _options?: Configuration): Observable<Event> {
        const requestContextPromise = this.requestFactory.eventsIdGet(id, acceptLanguage, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdGet(rsp)));
            }));
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @param direction Whether to sort the results by ascending or descending order
     */
    public eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', _options?: Configuration): Observable<Array<EventIncident>> {
        const requestContextPromise = this.requestFactory.eventsIdIncidentsGet(id, acceptLanguage, groupBy, direction, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdIncidentsGet(rsp)));
            }));
    }

    /**
     * Get lineup information for an event. Includes players, formation and coach
     * @param id Event.id for which lineups are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsIdLineupsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Lineup> {
        const requestContextPromise = this.requestFactory.eventsIdLineupsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdLineupsGet(rsp)));
            }));
    }

    /**
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     */
    public eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', _options?: Configuration): Observable<Array<EventPlayer>> {
        const requestContextPromise = this.requestFactory.eventsIdPlayersGet(id, acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdPlayersGet(rsp)));
            }));
    }

    /**
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.eventsIdPregameoddsGet(id, xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdPregameoddsGet(rsp)));
            }));
    }

    /**
     * Get a list of events which are currently live
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     */
    public eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.eventsLiveGet(acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsLiveGet(rsp)));
            }));
    }

    /**
     * Get a list of events which have been updated since the specified timestamp
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     */
    public eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.eventsSinceGet(acceptLanguage, lastUpdate, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsSinceGet(rsp)));
            }));
    }

    /**
     * Get a list of matches for team/between teams
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromStartTime Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format
     * @param toStartTime Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format
     * @param teamIds List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams.
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param stageIds List for stage IDs separated by commas.
     * @param rounds List for rounds separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param statusTypes List of status types.
     * @param offset Results offset
     * @param limit Results limit
     * @param tournamentOrder Tournament filtering and ordering.
     * @param refereeId Filter matches by referee
     * @param venueId Filter matches by venue
     * @param statusCode Filter matches by event_status.code
     * @param sortDirection Result ordering - asc/desc
     */
    public matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.matchesGet(acceptLanguage, fromStartTime, toStartTime, teamIds, matchIds, tournamentIds, stageIds, rounds, seasonIds, statusTypes, offset, limit, tournamentOrder, refereeId, venueId, statusCode, sortDirection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.matchesGet(rsp)));
            }));
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, _options?: Configuration): Observable<Array<EventsByDate>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdEventsGet(id, round, sortDirection, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdEventsGet(rsp)));
            }));
    }

}

import { KnockoutSchemeApiRequestFactory, KnockoutSchemeApiResponseProcessor} from "../apis/KnockoutSchemeApi";
export class ObservableKnockoutSchemeApi {
    private requestFactory: KnockoutSchemeApiRequestFactory;
    private responseProcessor: KnockoutSchemeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: KnockoutSchemeApiRequestFactory,
        responseProcessor?: KnockoutSchemeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KnockoutSchemeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KnockoutSchemeApiResponseProcessor();
    }

    /**
     * @param stageId Get knockout schemes for given stage id
     * @param languageCode Returns translated response based on the language code
     */
    public v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, _options?: Configuration): Observable<Array<V2KnockoutScheme>> {
        const requestContextPromise = this.requestFactory.v2KnockoutSchemesStageIdGet(stageId, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2KnockoutSchemesStageIdGet(rsp)));
            }));
    }

}

import { LanguagesApiRequestFactory, LanguagesApiResponseProcessor} from "../apis/LanguagesApi";
export class ObservableLanguagesApi {
    private requestFactory: LanguagesApiRequestFactory;
    private responseProcessor: LanguagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LanguagesApiRequestFactory,
        responseProcessor?: LanguagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LanguagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LanguagesApiResponseProcessor();
    }

    /**
     * Get all possible languages.
     */
    public v2LanguagesGet(_options?: Configuration): Observable<Array<LanguageDto>> {
        const requestContextPromise = this.requestFactory.v2LanguagesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2LanguagesGet(rsp)));
            }));
    }

}

import { LineupsApiRequestFactory, LineupsApiResponseProcessor} from "../apis/LineupsApi";
export class ObservableLineupsApi {
    private requestFactory: LineupsApiRequestFactory;
    private responseProcessor: LineupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LineupsApiRequestFactory,
        responseProcessor?: LineupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LineupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LineupsApiResponseProcessor();
    }

    /**
     * Get lineup information. Includes players, formation and coach
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter lineups which have updates only after the specified time
     */
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Observable<Array<Lineup>> {
        const requestContextPromise = this.requestFactory.lineupsGet(acceptLanguage, lastUpdate, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lineupsGet(rsp)));
            }));
    }

    /**
     * Get lineups by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2Lineup> {
        const requestContextPromise = this.requestFactory.v2MatchesIdLineupsGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdLineupsGet(rsp)));
            }));
    }

    /**
     * Update Lineup information
     * @param id Unique identifier of the resource.
     * @param lineup Lineup information to save in persistance
     */
    public v2MatchesIdLineupsPut(id: string, lineup: V2LineupInput, _options?: Configuration): Observable<V2Lineup> {
        const requestContextPromise = this.requestFactory.v2MatchesIdLineupsPut(id, lineup, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdLineupsPut(rsp)));
            }));
    }

}

import { MappingsApiRequestFactory, MappingsApiResponseProcessor} from "../apis/MappingsApi";
export class ObservableMappingsApi {
    private requestFactory: MappingsApiRequestFactory;
    private responseProcessor: MappingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingsApiRequestFactory,
        responseProcessor?: MappingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MappingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MappingsApiResponseProcessor();
    }

    /**
     * Get FootballApi ID to Sportal ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single Sportal ID for the specified FootballAPI &#39;id&#39;
     */
    public mappingsSportalGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.mappingsSportalGet(object, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mappingsSportalGet(rsp)));
            }));
    }

    /**
     * Get Sportal to Football API ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single FotballApi ID for the specified Sportal &#39;id&#39;
     */
    public mappingsSportalReverseGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.mappingsSportalReverseGet(object, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mappingsSportalReverseGet(rsp)));
            }));
    }

}

import { MatchEventsApiRequestFactory, MatchEventsApiResponseProcessor} from "../apis/MatchEventsApi";
export class ObservableMatchEventsApi {
    private requestFactory: MatchEventsApiRequestFactory;
    private responseProcessor: MatchEventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MatchEventsApiRequestFactory,
        responseProcessor?: MatchEventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MatchEventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MatchEventsApiResponseProcessor();
    }

    /**
     * Get match events by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdEventsGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2MatchEventProfile> {
        const requestContextPromise = this.requestFactory.v2MatchesIdEventsGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdEventsGet(rsp)));
            }));
    }

    /**
     * Replaces all match events with the given input
     * @param id Unique identifier of the resource.
     * @param matchEvents Match event information to save
     */
    public v2MatchesIdEventsPut(id: string, matchEvents: V2MatchEventInputWrapper, _options?: Configuration): Observable<V2MatchEventProfile> {
        const requestContextPromise = this.requestFactory.v2MatchesIdEventsPut(id, matchEvents, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdEventsPut(rsp)));
            }));
    }

}

import { MatchesApiRequestFactory, MatchesApiResponseProcessor} from "../apis/MatchesApi";
export class ObservableMatchesApi {
    private requestFactory: MatchesApiRequestFactory;
    private responseProcessor: MatchesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MatchesApiRequestFactory,
        responseProcessor?: MatchesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MatchesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MatchesApiResponseProcessor();
    }

    /**
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     */
    public matchesIdCommentaryGet(id: string, languageCode: string, _options?: Configuration): Observable<Array<LiveCommentaryOutputDto>> {
        const requestContextPromise = this.requestFactory.matchesIdCommentaryGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.matchesIdCommentaryGet(rsp)));
            }));
    }

    /**
     * Get a list of matches
     * @param limit Select an upper limit for the matches that would be returned
     * @param offset Select an offset for the matches that would be returned
     * @param tournamentIds Filter matches, which have been played as part of the listed tournaments
     * @param seasonIds Filter matches, which have been played as part of the listed tournament seasons
     * @param stageIds Filter matches, which have been played as part of the listed tournament stages
     * @param groupIds Filter matches, which have been played as part of the listed tournament groups
     * @param roundIds Filter matches, which have been played as part of the listed tournament rounds
     * @param roundFilter Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
     * @param fromKickoffTime Filter matches, which have a start_time after the specified date, format is ISO 8601
     * @param toKickoffTime Filter matches, which have a start_time before the specified date, format is ISO 8601
     * @param teamIds Filter matches by teams which have taken part in them
     * @param statusTypes Filter matches by their status types
     * @param statusCodes Filter matches by their status codes
     * @param refereeId Filter matches by the referee who has taken part in them
     * @param venueId Filter matches by the venue that has hosted them
     * @param sortDirection Sort matches in asc|desc order by start_time
     */
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, _options?: Configuration): Observable<Array<V2Match>> {
        const requestContextPromise = this.requestFactory.v2MatchesGet(limit, offset, tournamentIds, seasonIds, stageIds, groupIds, roundIds, roundFilter, fromKickoffTime, toKickoffTime, teamIds, statusTypes, statusCodes, refereeId, venueId, sortDirection, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesGet(rsp)));
            }));
    }

    /**
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2Match> {
        const requestContextPromise = this.requestFactory.v2MatchesIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdGet(rsp)));
            }));
    }

    /**
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     */
    public v2MatchesIdPut(id: string, match: V2MatchInput, _options?: Configuration): Observable<V2Match> {
        const requestContextPromise = this.requestFactory.v2MatchesIdPut(id, match, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesIdPut(rsp)));
            }));
    }

    /**
     * Get a list of matches
     * @param matchIds Filter matches by their IDs
     * @param date Filter matches by the date when they were played, format is ISO 8601
     * @param utcOffset Filter matches by date and UTC offset, allowed value range: [-12,14]
     * @param tournamentGroup Filter matches by a tournament group code
     * @param statusTypes Filter matches by status types
     * @param selectionFilter Fetch selected matches for specific date and tournament_group
     */
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', _options?: Configuration): Observable<Array<V2Match>> {
        const requestContextPromise = this.requestFactory.v2MatchesLivescoreGet(matchIds, date, utcOffset, tournamentGroup, statusTypes, selectionFilter, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesLivescoreGet(rsp)));
            }));
    }

    /**
     * @param match Match information to save
     */
    public v2MatchesPost(match: V2MatchInput, _options?: Configuration): Observable<V2Match> {
        const requestContextPromise = this.requestFactory.v2MatchesPost(match, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MatchesPost(rsp)));
            }));
    }

}

import { OddsApiRequestFactory, OddsApiResponseProcessor} from "../apis/OddsApi";
export class ObservableOddsApi {
    private requestFactory: OddsApiRequestFactory;
    private responseProcessor: OddsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OddsApiRequestFactory,
        responseProcessor?: OddsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OddsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OddsApiResponseProcessor();
    }

    /**
     * Get available liveodds for an event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdLiveoddsGet(id: string, xOddClient: string, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.eventsIdLiveoddsGet(id, xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdLiveoddsGet(rsp)));
            }));
    }

    /**
     * Get a list of odds available in the system
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdOddsGet(id: string, xOddClient: string, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.eventsIdOddsGet(id, xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdOddsGet(rsp)));
            }));
    }

    /**
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.eventsIdPregameoddsGet(id, xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdPregameoddsGet(rsp)));
            }));
    }

    /**
     * Get a list of liveodds available in the system
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public liveoddsGet(xOddClient: string, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.liveoddsGet(xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.liveoddsGet(rsp)));
            }));
    }

    /**
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public oddProvidersGet(xOddClient: string, _options?: Configuration): Observable<Array<OddProvider>> {
        const requestContextPromise = this.requestFactory.oddProvidersGet(xOddClient, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oddProvidersGet(rsp)));
            }));
    }

    /**
     * Returns a list of Odds
     * @param oddClient Odd client code
     * @param sportType Sport type filter
     * @param eventType Event type filter
     * @param fromEventStartTime Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format
     * @param toEventStartTime Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format
     * @param teamId Team ID
     * @param teamIds List for team IDs separated by commas.
     * @param eventOrder Order matching events for a specific client
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param oddsType Pregame or live odds selector.
     */
    public oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.oddsGet(oddClient, sportType, eventType, fromEventStartTime, toEventStartTime, teamId, teamIds, eventOrder, matchIds, tournamentIds, seasonIds, oddsType, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.oddsGet(rsp)));
            }));
    }

    /**
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @param fromTime Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @param toTime Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     */
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, _options?: Configuration): Observable<Array<Odd>> {
        const requestContextPromise = this.requestFactory.pregameoddsGet(xOddClient, fromTime, toTime, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pregameoddsGet(rsp)));
            }));
    }

}

import { PlayerStatisticApiRequestFactory, PlayerStatisticApiResponseProcessor} from "../apis/PlayerStatisticApi";
export class ObservablePlayerStatisticApi {
    private requestFactory: PlayerStatisticApiRequestFactory;
    private responseProcessor: PlayerStatisticApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayerStatisticApiRequestFactory,
        responseProcessor?: PlayerStatisticApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlayerStatisticApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlayerStatisticApiResponseProcessor();
    }

    /**
     * @param languageCode Return translations depending on language code
     * @param playerIds List for player IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param teamId Return only statistics for players which are currently in the specified team&#39;s squad
     */
    public statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, _options?: Configuration): Observable<Array<OutputDto>> {
        const requestContextPromise = this.requestFactory.statisticsPlayersGet(languageCode, playerIds, seasonIds, teamId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statisticsPlayersGet(rsp)));
            }));
    }

    /**
     * Bulk Upsert player statistics
     * @param playerStatistics Array of player match statistics
     */
    public v2StatisticsPlayersMatchPut(playerStatistics?: Array<V2PlayerStatisticInput>, _options?: Configuration): Observable<Array<V2PlayerStatisticOutput>> {
        const requestContextPromise = this.requestFactory.v2StatisticsPlayersMatchPut(playerStatistics, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StatisticsPlayersMatchPut(rsp)));
            }));
    }

    /**
     * Retrieve player statistics, grouped by player and season
     * @param playerIds CSV list of player id values
     * @param seasonIds CSV list of tournament season id values
     * @param teamId Team unique identifier
     * @param languageCode Returns translated response based on the language code
     */
    public v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, _options?: Configuration): Observable<Array<V2PlayerSeasonStatisticOutputCollection>> {
        const requestContextPromise = this.requestFactory.v2StatisticsPlayersSeasonGet(playerIds, seasonIds, teamId, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StatisticsPlayersSeasonGet(rsp)));
            }));
    }

}

import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";
export class ObservablePlayersApi {
    private requestFactory: PlayersApiRequestFactory;
    private responseProcessor: PlayersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersApiRequestFactory,
        responseProcessor?: PlayersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlayersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlayersApiResponseProcessor();
    }

    /**
     * Search player list by parameters
     * @param name Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;Ronaldo&#39; it will match both &#39;Cristiono Ronaldo&#39; and &#39;Ronaldo&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param teamId Return only players which are currently in the specified team&#39;s squad
     */
    public playersGet(name: string, acceptLanguage?: string, maxResults?: number, teamId?: number, _options?: Configuration): Observable<Array<Player>> {
        const requestContextPromise = this.requestFactory.playersGet(name, acceptLanguage, maxResults, teamId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.playersGet(rsp)));
            }));
    }

    /**
     * Get information about a specific Player
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specify additional information to include in the response
     */
    public playersIdGet(id: string, acceptLanguage?: string, expand?: 'club' | 'club,current_league', _options?: Configuration): Observable<PlayerProfile> {
        const requestContextPromise = this.requestFactory.playersIdGet(id, acceptLanguage, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.playersIdGet(rsp)));
            }));
    }

    /**
     * Returns statistics throughout a Player's career
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param type Filter statistics for different types of team and competition
     * @param groupBy Group response by a given property
     */
    public playersIdStatisticsGet(id: string, acceptLanguage?: string, type?: 'club' | 'national' | 'league', groupBy?: 'tournament' | 'team', _options?: Configuration): Observable<Array<PlayerStatistics>> {
        const requestContextPromise = this.requestFactory.playersIdStatisticsGet(id, acceptLanguage, type, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.playersIdStatisticsGet(rsp)));
            }));
    }

    /**
     * Get the Teams in which a Player has participated during his career
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public playersIdTeamsGet(id: string, acceptLanguage?: string, _options?: Configuration): Observable<Array<PlayerTeam>> {
        const requestContextPromise = this.requestFactory.playersIdTeamsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.playersIdTeamsGet(rsp)));
            }));
    }

    /**
     * Search player list by parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2PlayersGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Observable<PlayerPageDto> {
        const requestContextPromise = this.requestFactory.v2PlayersGet(offset, limit, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlayersGet(rsp)));
            }));
    }

    /**
     * Update the active clubs of a player
     * @param id Unique identifier of the resource.
     * @param clubs Active clubs input
     */
    public v2PlayersIdClubsActivePut(id: string, clubs?: V2ActiveClubsInput, _options?: Configuration): Observable<Array<V2PlayerActiveClub>> {
        const requestContextPromise = this.requestFactory.v2PlayersIdClubsActivePut(id, clubs, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlayersIdClubsActivePut(rsp)));
            }));
    }

    /**
     * Get player by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2PlayersIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2PlayerProfile> {
        const requestContextPromise = this.requestFactory.v2PlayersIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlayersIdGet(rsp)));
            }));
    }

    /**
     * Update Player information
     * @param id Unique identifier of the resource.
     * @param player Player information to save in persistance
     */
    public v2PlayersIdPut(id: string, player: PlayerEditDto, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2PlayersIdPut(id, player, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlayersIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created player in storage.
     * @param player PlayerEditDto object
     */
    public v2PlayersPost(player?: PlayerEditDto, _options?: Configuration): Observable<PlayerDto> {
        const requestContextPromise = this.requestFactory.v2PlayersPost(player, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlayersPost(rsp)));
            }));
    }

}

import { PresidentsApiRequestFactory, PresidentsApiResponseProcessor} from "../apis/PresidentsApi";
export class ObservablePresidentsApi {
    private requestFactory: PresidentsApiRequestFactory;
    private responseProcessor: PresidentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PresidentsApiRequestFactory,
        responseProcessor?: PresidentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PresidentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PresidentsApiResponseProcessor();
    }

    /**
     * Update president information
     * @param id Unique identifier of the resource.
     * @param president President information to save in persistance
     */
    public v2PresidentsIdPut(id: string, president?: V2PresidentUpdate, _options?: Configuration): Observable<V2President> {
        const requestContextPromise = this.requestFactory.v2PresidentsIdPut(id, president, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PresidentsIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created president in storage
     * @param president 
     */
    public v2PresidentsPost(president?: V2PresidentInput, _options?: Configuration): Observable<V2President> {
        const requestContextPromise = this.requestFactory.v2PresidentsPost(president, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PresidentsPost(rsp)));
            }));
    }

}

import { ProviderMappingsApiRequestFactory, ProviderMappingsApiResponseProcessor} from "../apis/ProviderMappingsApi";
export class ObservableProviderMappingsApi {
    private requestFactory: ProviderMappingsApiRequestFactory;
    private responseProcessor: ProviderMappingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProviderMappingsApiRequestFactory,
        responseProcessor?: ProviderMappingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProviderMappingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProviderMappingsApiResponseProcessor();
    }

    /**
     * Bulk find provider to internal ID mappings by their provider ID and entity type.
     * @param mappingRequest Data entity provider name and array of mapping requests
     */
    public v2MappingsSearchPost(mappingRequest?: V2MappingsSearchPostRequest, _options?: Configuration): Observable<Array<V2MappingDto>> {
        const requestContextPromise = this.requestFactory.v2MappingsSearchPost(mappingRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2MappingsSearchPost(rsp)));
            }));
    }

}

import { RefereesApiRequestFactory, RefereesApiResponseProcessor} from "../apis/RefereesApi";
export class ObservableRefereesApi {
    private requestFactory: RefereesApiRequestFactory;
    private responseProcessor: RefereesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RefereesApiRequestFactory,
        responseProcessor?: RefereesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefereesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefereesApiResponseProcessor();
    }

    /**
     * List referees with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param seasonIds Filter referees which have refereed matches in the specified CSV season_ids
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, _options?: Configuration): Observable<RefereePageDto> {
        const requestContextPromise = this.requestFactory.v2RefereesGet(offset, limit, seasonIds, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2RefereesGet(rsp)));
            }));
    }

    /**
     * Get referee by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<RefereeDto> {
        const requestContextPromise = this.requestFactory.v2RefereesIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2RefereesIdGet(rsp)));
            }));
    }

    /**
     * Update referee information
     * @param id Unique identifier of the resource.
     * @param referee Referee information to save in persistance
     */
    public v2RefereesIdPut(id: string, referee?: RefereeEditDto, _options?: Configuration): Observable<RefereeDto> {
        const requestContextPromise = this.requestFactory.v2RefereesIdPut(id, referee, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2RefereesIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created referee in storage
     * @param referee 
     */
    public v2RefereesPost(referee?: RefereeEditDto, _options?: Configuration): Observable<RefereeDto> {
        const requestContextPromise = this.requestFactory.v2RefereesPost(referee, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2RefereesPost(rsp)));
            }));
    }

}

import { RoundsApiRequestFactory, RoundsApiResponseProcessor} from "../apis/RoundsApi";
export class ObservableRoundsApi {
    private requestFactory: RoundsApiRequestFactory;
    private responseProcessor: RoundsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RoundsApiRequestFactory,
        responseProcessor?: RoundsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RoundsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RoundsApiResponseProcessor();
    }

    /**
     * Get a list of rounds per season
     * @param seasonId Filter round types per a season ID
     * @param languageCode Returns translated response based on the language code
     */
    public v2RoundsGet(seasonId: number, languageCode?: string, _options?: Configuration): Observable<V2RoundTypes> {
        const requestContextPromise = this.requestFactory.v2RoundsGet(seasonId, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2RoundsGet(rsp)));
            }));
    }

    /**
     * Get a list of rounds per stage
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2StagesIdRoundsGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2RoundTypes> {
        const requestContextPromise = this.requestFactory.v2StagesIdRoundsGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StagesIdRoundsGet(rsp)));
            }));
    }

}

import { SeasonApiRequestFactory, SeasonApiResponseProcessor} from "../apis/SeasonApi";
export class ObservableSeasonApi {
    private requestFactory: SeasonApiRequestFactory;
    private responseProcessor: SeasonApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SeasonApiRequestFactory,
        responseProcessor?: SeasonApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SeasonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SeasonApiResponseProcessor();
    }

    /**
     * Get the details of a season by season_id, or by tournament_id and active status
     * @param seasonId The ID of the season of interest
     * @param tournamentId The ID of the tournament whose active season is of interest
     * @param status Required only when the tournament_id parameter is provided
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsDetailsGet(seasonId?: string, tournamentId?: string, status?: 'CURRENT', languageCode?: string, _options?: Configuration): Observable<V2SeasonDetails> {
        const requestContextPromise = this.requestFactory.v2SeasonsDetailsGet(seasonId, tournamentId, status, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsDetailsGet(rsp)));
            }));
    }

    /**
     * Get seasons by tournament_id, team_id and status
     * @param tournamentId Required only if no other parameters are provided
     * @param teamId Required only if no other paramenters are provided
     * @param status Required only if no other parameters are provided
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsGet(tournamentId?: string, teamId?: string, status?: 'ACTIVE', languageCode?: string, _options?: Configuration): Observable<V2SeasonList> {
        const requestContextPromise = this.requestFactory.v2SeasonsGet(tournamentId, teamId, status, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsGet(rsp)));
            }));
    }

    /**
     * Update an existing season
     * @param id Unique identifier of the resource.
     * @param name Season name
     */
    public v2SeasonsIdPut(id: string, name: V2TournamentSeasonUpdateInput, _options?: Configuration): Observable<V2Season> {
        const requestContextPromise = this.requestFactory.v2SeasonsIdPut(id, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsIdPut(rsp)));
            }));
    }

    /**
     * List all stages for specific season
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsIdStagesGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2SeasonStageCollection> {
        const requestContextPromise = this.requestFactory.v2SeasonsIdStagesGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsIdStagesGet(rsp)));
            }));
    }

    /**
     * Create or update multiple stages
     * @param id Unique identifier of the resource.
     * @param stages List of stages to be updated or created
     */
    public v2SeasonsIdStagesPost(id: string, stages: Array<V2SeasonStage>, _options?: Configuration): Observable<V2SeasonStageCollection> {
        const requestContextPromise = this.requestFactory.v2SeasonsIdStagesPost(id, stages, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsIdStagesPost(rsp)));
            }));
    }

    /**
     * Create a new season
     * @param season Season information
     */
    public v2SeasonsPost(season: V2TournamentSeasonInsertInput, _options?: Configuration): Observable<V2Season> {
        const requestContextPromise = this.requestFactory.v2SeasonsPost(season, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2SeasonsPost(rsp)));
            }));
    }

    /**
     * Permanently delete stage
     * @param id Unique identifier of the resource.
     */
    public v2StagesIdDelete(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2StagesIdDelete(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StagesIdDelete(rsp)));
            }));
    }

    /**
     * Set the current season as active and change all other seasons in the tournament to inactive
     * @param id Unique identifier of the resource.
     * @param seasonId Season unique identifier
     */
    public v2TournamentsIdSeasonsCurrentPatch(id: string, seasonId: V2TournamentSeasonStatusInput, _options?: Configuration): Observable<V2Season> {
        const requestContextPromise = this.requestFactory.v2TournamentsIdSeasonsCurrentPatch(id, seasonId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsIdSeasonsCurrentPatch(rsp)));
            }));
    }

}

import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";
export class ObservableStagesApi {
    private requestFactory: StagesApiRequestFactory;
    private responseProcessor: StagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StagesApiRequestFactory,
        responseProcessor?: StagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StagesApiResponseProcessor();
    }

    /**
     * Listing for Stages resources
     * @param teamId Filter stages by a team which is participating in the stage
     * @param tournamentIds CSV list of tournament.id values to filter stages
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, _options?: Configuration): Observable<Array<StageDto>> {
        const requestContextPromise = this.requestFactory.stagesGet(teamId, tournamentIds, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stagesGet(rsp)));
            }));
    }

    /**
     * Permanently delete group
     * @param id Unique identifier of the resource.
     */
    public v2GroupsIdDelete(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2GroupsIdDelete(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsIdDelete(rsp)));
            }));
    }

    /**
     * List all groups for specific stage
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2StagesIdGroupsGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2StageGroupCollection> {
        const requestContextPromise = this.requestFactory.v2StagesIdGroupsGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StagesIdGroupsGet(rsp)));
            }));
    }

    /**
     * Create or update multiple groups
     * @param id Unique identifier of the resource.
     * @param groups List of groups to be updated or created
     */
    public v2StagesIdGroupsPost(id: string, groups: Array<V2StageGroup>, _options?: Configuration): Observable<V2StageGroupCollection> {
        const requestContextPromise = this.requestFactory.v2StagesIdGroupsPost(id, groups, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StagesIdGroupsPost(rsp)));
            }));
    }

    /**
     * Replace teams in stage
     * @param id Unique identifier of the resource.
     * @param teamId List of team ids
     */
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2StagesIdTeamsPut(id, teamId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StagesIdTeamsPut(rsp)));
            }));
    }

}

import { StandingRuleApiRequestFactory, StandingRuleApiResponseProcessor} from "../apis/StandingRuleApi";
export class ObservableStandingRuleApi {
    private requestFactory: StandingRuleApiRequestFactory;
    private responseProcessor: StandingRuleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StandingRuleApiRequestFactory,
        responseProcessor?: StandingRuleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StandingRuleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StandingRuleApiResponseProcessor();
    }

    /**
     * Get a list of available StandingRule objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public standingRulesGet(acceptLanguage?: string, _options?: Configuration): Observable<StandingRule> {
        const requestContextPromise = this.requestFactory.standingRulesGet(acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.standingRulesGet(rsp)));
            }));
    }

}

import { StandingsApiRequestFactory, StandingsApiResponseProcessor} from "../apis/StandingsApi";
export class ObservableStandingsApi {
    private requestFactory: StandingsApiRequestFactory;
    private responseProcessor: StandingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StandingsApiRequestFactory,
        responseProcessor?: StandingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StandingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StandingsApiResponseProcessor();
    }

    /**
     * Update a league standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public v2StandingsLeagueEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2LeagueStandingInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2StandingsLeagueEntityIdPut(entity, id, standingEntries, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StandingsLeagueEntityIdPut(rsp)));
            }));
    }

    /**
     * Attach standing rules to a league standing
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingRules list of rules for every rank
     */
    public v2StandingsLeagueEntityIdRulesPut(entity: 'season' | 'stage' | 'group', id: string, standingRules: V2StandingEntryRuleWrapper, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2StandingsLeagueEntityIdRulesPut(entity, id, standingRules, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StandingsLeagueEntityIdRulesPut(rsp)));
            }));
    }

    /**
     * Update a topscorer standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public v2StandingsTopscorerEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2TopScorerStandingInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2StandingsTopscorerEntityIdPut(entity, id, standingEntries, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2StandingsTopscorerEntityIdPut(rsp)));
            }));
    }

}

import { TeamSquadApiRequestFactory, TeamSquadApiResponseProcessor} from "../apis/TeamSquadApi";
export class ObservableTeamSquadApi {
    private requestFactory: TeamSquadApiRequestFactory;
    private responseProcessor: TeamSquadApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamSquadApiRequestFactory,
        responseProcessor?: TeamSquadApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamSquadApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamSquadApiResponseProcessor();
    }

    /**
     * Get teams squad
     * @param id Unique identifier of the resource.
     * @param memberStatus 
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsIdSquadGet(id: string, memberStatus?: 'ALL' | 'ACTIVE' | 'INACTIVE', languageCode?: string, _options?: Configuration): Observable<V2TeamSquad> {
        const requestContextPromise = this.requestFactory.v2TeamsIdSquadGet(id, memberStatus, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsIdSquadGet(rsp)));
            }));
    }

    /**
     * Update TeamSquad members
     * @param id Unique identifier of the resource.
     * @param squadMembers TeamSquad members to update. Null value for a property means no update
     */
    public v2TeamsIdSquadPatch(id: string, squadMembers: V2TeamSquadInput, _options?: Configuration): Observable<V2TeamSquad> {
        const requestContextPromise = this.requestFactory.v2TeamsIdSquadPatch(id, squadMembers, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsIdSquadPatch(rsp)));
            }));
    }

}

import { TeamStatsApiRequestFactory, TeamStatsApiResponseProcessor} from "../apis/TeamStatsApi";
export class ObservableTeamStatsApi {
    private requestFactory: TeamStatsApiRequestFactory;
    private responseProcessor: TeamStatsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamStatsApiRequestFactory,
        responseProcessor?: TeamStatsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamStatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamStatsApiResponseProcessor();
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     */
    public eventTeamstatsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Observable<Array<EventTeamStats>> {
        const requestContextPromise = this.requestFactory.eventTeamstatsGet(acceptLanguage, lastUpdate, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventTeamstatsGet(rsp)));
            }));
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param id Event.id for which team stats are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsIdTeamstatsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<EventTeamStats>> {
        const requestContextPromise = this.requestFactory.eventsIdTeamstatsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsIdTeamstatsGet(rsp)));
            }));
    }

}

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class ObservableTeamsApi {
    private requestFactory: TeamsApiRequestFactory;
    private responseProcessor: TeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamsApiResponseProcessor();
    }

    /**
     * Get Teams for a specific Country.id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param national Filter teams for different types of national and non national
     */
    public countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', _options?: Configuration): Observable<Array<Team>> {
        const requestContextPromise = this.requestFactory.countriesIdTeamsGet(id, acceptLanguage, national, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesIdTeamsGet(rsp)));
            }));
    }

    /**
     * Search all teams by parameters
     * @param name Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param countryId Filter teams just from the specified country
     */
    public teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, _options?: Configuration): Observable<Array<Team>> {
        const requestContextPromise = this.requestFactory.teamsGet(name, acceptLanguage, maxResults, countryId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsGet(rsp)));
            }));
    }

    /**
     * Get a list of events in which a team with a specified id has participated
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param direction Whether to sort the results by ascending or descending order
     * @param tournamentSeasonStageId Filter events for a specific tournament_season_stage.id
     */
    public teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.teamsIdEventsGet(id, acceptLanguage, fromTime, toTime, direction, tournamentSeasonStageId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdEventsGet(rsp)));
            }));
    }

    /**
     * Get Team form information accross all tournaments
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Whether to include information about every event in the TeamForm response
     */
    public teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', _options?: Configuration): Observable<Array<TeamForm>> {
        const requestContextPromise = this.requestFactory.teamsIdFormGet(id, acceptLanguage, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdFormGet(rsp)));
            }));
    }

    /**
     * Get information about a specific Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the Team response
     */
    public teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', _options?: Configuration): Observable<Team> {
        const requestContextPromise = this.requestFactory.teamsIdGet(id, acceptLanguage, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdGet(rsp)));
            }));
    }

    /**
     * Get the current squad for a Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group players by a specific property
     */
    public teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', _options?: Configuration): Observable<Array<TeamPlayer>> {
        const requestContextPromise = this.requestFactory.teamsIdPlayersGet(id, acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdPlayersGet(rsp)));
            }));
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Observable<TeamPlayerSeasonStatistics> {
        const requestContextPromise = this.requestFactory.teamsIdPlayersStatisticsGet(id, acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdPlayersStatisticsGet(rsp)));
            }));
    }

    /**
     * Get a list of TournamentSeasons for which Player Statistics are available
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Observable<Array<TournamentSeasonWithTournament>> {
        const requestContextPromise = this.requestFactory.teamsIdPlayersStatisticsSeasonsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdPlayersStatisticsSeasonsGet(rsp)));
            }));
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param seasonId Unique identifier of the TournamentSeason resource
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Observable<TeamPlayerSeasonStatistics> {
        const requestContextPromise = this.requestFactory.teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId, id, acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdPlayersStatisticsSeasonsSeasonIdGet(rsp)));
            }));
    }

    /**
     * Get the statistics for the latest League the team participates in
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param standing Select whether to include a full league standing or just the team&#39;s position
     */
    public teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', _options?: Configuration): Observable<TeamSeasonStatistics> {
        const requestContextPromise = this.requestFactory.teamsIdStatisticsLeagueGet(id, acceptLanguage, standing, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsIdStatisticsLeagueGet(rsp)));
            }));
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<PartialTeam>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdTeamsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdTeamsGet(rsp)));
            }));
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<PartialTeam>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdTeamsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdTeamsGet(rsp)));
            }));
    }

    /**
     * Manually insert team colors by team or event.
     * @param teamColorsDto Team shirt colors data
     */
    public v2TeamsColorsPost(teamColorsDto?: V2TeamColors, _options?: Configuration): Observable<V2TeamColors> {
        const requestContextPromise = this.requestFactory.v2TeamsColorsPost(teamColorsDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsColorsPost(rsp)));
            }));
    }

    /**
     * Get teams list
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Observable<TeamPageDto> {
        const requestContextPromise = this.requestFactory.v2TeamsGet(offset, limit, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsGet(rsp)));
            }));
    }

    /**
     * Get team by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2TeamProfile> {
        const requestContextPromise = this.requestFactory.v2TeamsIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsIdGet(rsp)));
            }));
    }

    /**
     * Update Team information
     * @param id Unique identifier of the resource.
     * @param team Team information to save in persistance
     */
    public v2TeamsIdPut(id: string, team: TeamEditDto, _options?: Configuration): Observable<V2TeamProfile> {
        const requestContextPromise = this.requestFactory.v2TeamsIdPut(id, team, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsIdPut(rsp)));
            }));
    }

    /**
     * Manually insert team.
     * @param teamEditDto TeamEditDto object
     */
    public v2TeamsPost(teamEditDto?: TeamEditDto, _options?: Configuration): Observable<V2TeamProfile> {
        const requestContextPromise = this.requestFactory.v2TeamsPost(teamEditDto, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamsPost(rsp)));
            }));
    }

}

import { TournamentGroupsApiRequestFactory, TournamentGroupsApiResponseProcessor} from "../apis/TournamentGroupsApi";
export class ObservableTournamentGroupsApi {
    private requestFactory: TournamentGroupsApiRequestFactory;
    private responseProcessor: TournamentGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TournamentGroupsApiRequestFactory,
        responseProcessor?: TournamentGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TournamentGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TournamentGroupsApiResponseProcessor();
    }

    /**
     * List all tournaments for a given group name and their order
     * @param code Tournament group code
     */
    public v2TournamentsGroupsCodeGet(code: string, _options?: Configuration): Observable<V2TournamentGroupGetOutput> {
        const requestContextPromise = this.requestFactory.v2TournamentsGroupsCodeGet(code, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsGroupsCodeGet(rsp)));
            }));
    }

    /**
     * Update an existing tournament group
     * @param code Tournament group unique code
     * @param group Tournament group information
     */
    public v2TournamentsGroupsCodePut(code: string, group: V2TournamentGroupUpdateInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2TournamentsGroupsCodePut(code, group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsGroupsCodePut(rsp)));
            }));
    }

    /**
     * @param code Client code
     * @param date Date in ISO 8601 format (Y-m-d)
     * @param matchIds Array of match ids
     */
    public v2TournamentsGroupsCodeSelectionDatePost(code: string, date: string, matchIds?: Array<V2TournamentGroupSelection>, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2TournamentsGroupsCodeSelectionDatePost(code, date, matchIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsGroupsCodeSelectionDatePost(rsp)));
            }));
    }

    /**
     * List all tournament groups
     */
    public v2TournamentsGroupsGet(_options?: Configuration): Observable<V2TournamentGroupCollection> {
        const requestContextPromise = this.requestFactory.v2TournamentsGroupsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsGroupsGet(rsp)));
            }));
    }

    /**
     * Create a new tournament group
     * @param group Tournament group information
     */
    public v2TournamentsGroupsPost(group: V2TournamentGroupInsertInput, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v2TournamentsGroupsPost(group, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TournamentsGroupsPost(rsp)));
            }));
    }

}

import { TournamentsApiRequestFactory, TournamentsApiResponseProcessor} from "../apis/TournamentsApi";
export class ObservableTournamentsApi {
    private requestFactory: TournamentsApiRequestFactory;
    private responseProcessor: TournamentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TournamentsApiRequestFactory,
        responseProcessor?: TournamentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TournamentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TournamentsApiResponseProcessor();
    }

    /**
     * Get a list of available Tournament resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param countryId Get Tournaments from a specific Country.id
     * @param clientOrder Get Tournaments ordered for a specific client
     * @param expandClientSortorder Include extra information with Tournament response
     */
    public tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', _options?: Configuration): Observable<Array<Tournament>> {
        const requestContextPromise = this.requestFactory.tournamentsGet(acceptLanguage, countryId, clientOrder, expandClientSortorder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsGet(rsp)));
            }));
    }

    /**
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdGet(id: string, acceptLanguage?: string, _options?: Configuration): Observable<TournamentWithSeasons> {
        const requestContextPromise = this.requestFactory.tournamentsIdGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsIdGet(rsp)));
            }));
    }

    /**
     * Get a list of seasons for a given Tournament id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Observable<Array<TournamentSeason>> {
        const requestContextPromise = this.requestFactory.tournamentsIdSeasonsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsIdSeasonsGet(rsp)));
            }));
    }

    /**
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param id Unique identifier of the Tournament resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<TournamentSeasonWithStages> {
        const requestContextPromise = this.requestFactory.tournamentsIdSeasonsLatestGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsIdSeasonsLatestGet(rsp)));
            }));
    }

    /**
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<CardlistStandingData>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdCardlistGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdCardlistGet(rsp)));
            }));
    }

    /**
     * Get a list of Events, for a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Whether to group events by date
     */
    public tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', _options?: Configuration): Observable<Array<Event>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdEventsGet(id, acceptLanguage, groupBy, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdEventsGet(rsp)));
            }));
    }

    /**
     * Get information for a given TournamentSeason resource id.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<TournamentSeasonWithStages> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdGet(rsp)));
            }));
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<PartialTeam>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdTeamsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdTeamsGet(rsp)));
            }));
    }

    /**
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<TopscorerStandingData>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsIdTopscorerGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsIdTopscorerGet(rsp)));
            }));
    }

    /**
     * Get all currently active tournament season stages
     */
    public tournamentsSeasonsStagesActiveGet(_options?: Configuration): Observable<Array<TournamentSeasonStage>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesActiveGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesActiveGet(rsp)));
            }));
    }

    /**
     * Get information for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Observable<StageGroupWithStandingTournamentSeasonStage> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesGroupsIdGet(id, expand, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesGroupsIdGet(rsp)));
            }));
    }

    /**
     * Get Standing for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Observable<Array<LeagueStandingData>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesGroupsIdStandingGet(id, expand, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesGroupsIdStandingGet(rsp)));
            }));
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, _options?: Configuration): Observable<Array<EventsByDate>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdEventsGet(id, round, sortDirection, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdEventsGet(rsp)));
            }));
    }

    /**
     * Get information for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Observable<TournamentSeasonStageWithStandingGroups> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdGet(id, expand, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdGet(rsp)));
            }));
    }

    /**
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify what additional information to include with the response
     */
    public tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', _options?: Configuration): Observable<Array<Round>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdRoundsGet(id, expand, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdRoundsGet(rsp)));
            }));
    }

    /**
     * Get Standing for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Observable<Array<LeagueStandingData>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdStandingGet(id, expand, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdStandingGet(rsp)));
            }));
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Observable<Array<PartialTeam>> {
        const requestContextPromise = this.requestFactory.tournamentsSeasonsStagesIdTeamsGet(id, acceptLanguage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tournamentsSeasonsStagesIdTeamsGet(rsp)));
            }));
    }

}

import { TranslationsApiRequestFactory, TranslationsApiResponseProcessor} from "../apis/TranslationsApi";
export class ObservableTranslationsApi {
    private requestFactory: TranslationsApiRequestFactory;
    private responseProcessor: TranslationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslationsApiRequestFactory,
        responseProcessor?: TranslationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TranslationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TranslationsApiResponseProcessor();
    }

    /**
     * Get all possible translation entities.
     */
    public v2TranslationsEntitiesGet(_options?: Configuration): Observable<Array<TranslationEntityDto>> {
        const requestContextPromise = this.requestFactory.v2TranslationsEntitiesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TranslationsEntitiesGet(rsp)));
            }));
    }

    /**
     * Bulk Upsert translations by primary key
     * @param translations Array of translations
     */
    public v2TranslationsPost(translations?: Array<TranslationDto>, _options?: Configuration): Observable<TranslationDto> {
        const requestContextPromise = this.requestFactory.v2TranslationsPost(translations, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TranslationsPost(rsp)));
            }));
    }

    /**
     * Bulk find in translations table and return matching entries by the unique translation key.
     * @param translationKeys Array of translationKeys
     */
    public v2TranslationsSearchPost(translationKeys?: Array<TranslationKeyDto>, _options?: Configuration): Observable<Array<TranslationDto>> {
        const requestContextPromise = this.requestFactory.v2TranslationsSearchPost(translationKeys, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TranslationsSearchPost(rsp)));
            }));
    }

}

import { VenuesApiRequestFactory, VenuesApiResponseProcessor} from "../apis/VenuesApi";
export class ObservableVenuesApi {
    private requestFactory: VenuesApiRequestFactory;
    private responseProcessor: VenuesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VenuesApiRequestFactory,
        responseProcessor?: VenuesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VenuesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VenuesApiResponseProcessor();
    }

    /**
     * List venues with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param seasonIds Filter venues which have hosted matches in the specified CSV season_ids
     * @param languageCode Returns translated response based on the language code
     */
    public v2VenuesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, _options?: Configuration): Observable<V2VenuesList> {
        const requestContextPromise = this.requestFactory.v2VenuesGet(offset, limit, seasonIds, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2VenuesGet(rsp)));
            }));
    }

    /**
     * Get venue by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2VenuesIdGet(id: string, languageCode?: string, _options?: Configuration): Observable<V2VenuesGetId> {
        const requestContextPromise = this.requestFactory.v2VenuesIdGet(id, languageCode, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2VenuesIdGet(rsp)));
            }));
    }

    /**
     * Update venue information
     * @param id Unique identifier of the resource.
     * @param venue Venue information to save in persistance
     */
    public v2VenuesIdPut(id: string, venue?: V2PutVenues, _options?: Configuration): Observable<V2VenuesPut> {
        const requestContextPromise = this.requestFactory.v2VenuesIdPut(id, venue, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2VenuesIdPut(rsp)));
            }));
    }

    /**
     * Store a newly created venue in storage
     * @param venue 
     */
    public v2VenuesPost(venue?: V2PostVenues, _options?: Configuration): Observable<V2Venues> {
        const requestContextPromise = this.requestFactory.v2VenuesPost(venue, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2VenuesPost(rsp)));
            }));
    }

}
