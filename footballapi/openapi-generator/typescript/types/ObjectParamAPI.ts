import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiV2AssetsDeleteRequest {
    /**
     * Array of assets
     * @type Array&lt;V2AssetInput&gt;
     * @memberof AssetsApiv2AssetsDelete
     */
    assets?: Array<V2AssetInput>
}

export interface AssetsApiV2AssetsPostRequest {
    /**
     * Array of assets
     * @type Array&lt;V2AssetInput&gt;
     * @memberof AssetsApiv2AssetsPost
     */
    assets?: Array<V2AssetInput>
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk delete assets
     * @param param the request object
     */
    public v2AssetsDelete(param: AssetsApiV2AssetsDeleteRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v2AssetsDelete(param.assets,  options).toPromise();
    }

    /**
     * Bulk Upsert assets
     * @param param the request object
     */
    public v2AssetsPost(param: AssetsApiV2AssetsPostRequest = {}, options?: Configuration): Promise<V2Asset> {
        return this.api.v2AssetsPost(param.assets,  options).toPromise();
    }

}

import { ObservableBlacklistApi } from "./ObservableAPI";
import { BlacklistApiRequestFactory, BlacklistApiResponseProcessor} from "../apis/BlacklistApi";

export interface BlacklistApiV2BlacklistIdDeleteRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof BlacklistApiv2BlacklistIdDelete
     */
    id: string
}

export interface BlacklistApiV2BlacklistSearchPostRequest {
    /**
     * Array of blacklistsKeys
     * @type Array&lt;BlacklistKeyDto&gt;
     * @memberof BlacklistApiv2BlacklistSearchPost
     */
    blacklistKeys?: Array<BlacklistKeyDto>
}

export class ObjectBlacklistApi {
    private api: ObservableBlacklistApi

    public constructor(configuration: Configuration, requestFactory?: BlacklistApiRequestFactory, responseProcessor?: BlacklistApiResponseProcessor) {
        this.api = new ObservableBlacklistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove blacklist record by id.
     * Remove the specified resource from storage.
     * @param param the request object
     */
    public v2BlacklistIdDelete(param: BlacklistApiV2BlacklistIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v2BlacklistIdDelete(param.id,  options).toPromise();
    }

    /**
     * Bulk find in blacklist table and return matching entries by the unique blacklist key.
     * @param param the request object
     */
    public v2BlacklistSearchPost(param: BlacklistApiV2BlacklistSearchPostRequest = {}, options?: Configuration): Promise<Array<BlacklistDto>> {
        return this.api.v2BlacklistSearchPost(param.blacklistKeys,  options).toPromise();
    }

}

import { ObservableCitiesApi } from "./ObservableAPI";
import { CitiesApiRequestFactory, CitiesApiResponseProcessor} from "../apis/CitiesApi";

export interface CitiesApiV2CitiesIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof CitiesApiv2CitiesIdPut
     */
    id: string
    /**
     * City information to save in persistance
     * @type CityEditDto
     * @memberof CitiesApiv2CitiesIdPut
     */
    city?: CityEditDto
}

export interface CitiesApiV2CitiesPostRequest {
    /**
     * 
     * @type CityEditDto
     * @memberof CitiesApiv2CitiesPost
     */
    city?: CityEditDto
}

export class ObjectCitiesApi {
    private api: ObservableCitiesApi

    public constructor(configuration: Configuration, requestFactory?: CitiesApiRequestFactory, responseProcessor?: CitiesApiResponseProcessor) {
        this.api = new ObservableCitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update city information
     * @param param the request object
     */
    public v2CitiesIdPut(param: CitiesApiV2CitiesIdPutRequest, options?: Configuration): Promise<CityDto> {
        return this.api.v2CitiesIdPut(param.id, param.city,  options).toPromise();
    }

    /**
     * Store a newly created city in storage
     * @param param the request object
     */
    public v2CitiesPost(param: CitiesApiV2CitiesPostRequest = {}, options?: Configuration): Promise<CityDto> {
        return this.api.v2CitiesPost(param.city,  options).toPromise();
    }

}

import { ObservableCoachesApi } from "./ObservableAPI";
import { CoachesApiRequestFactory, CoachesApiResponseProcessor} from "../apis/CoachesApi";

export interface CoachesApiV2CoachesGetRequest {
    /**
     * The number of items to skip before starting to collect the result set
     * @type number
     * @memberof CoachesApiv2CoachesGet
     */
    offset: number
    /**
     * Limit the number of results returned
     * @type number
     * @memberof CoachesApiv2CoachesGet
     */
    limit: number
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof CoachesApiv2CoachesGet
     */
    languageCode?: string
}

export interface CoachesApiV2CoachesIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof CoachesApiv2CoachesIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof CoachesApiv2CoachesIdGet
     */
    languageCode?: string
}

export interface CoachesApiV2CoachesIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof CoachesApiv2CoachesIdPut
     */
    id: string
    /**
     * Coach information to save in persistance
     * @type CoachEditDto
     * @memberof CoachesApiv2CoachesIdPut
     */
    coach?: CoachEditDto
}

export interface CoachesApiV2CoachesPostRequest {
    /**
     * 
     * @type CoachEditDto
     * @memberof CoachesApiv2CoachesPost
     */
    coach?: CoachEditDto
}

export class ObjectCoachesApi {
    private api: ObservableCoachesApi

    public constructor(configuration: Configuration, requestFactory?: CoachesApiRequestFactory, responseProcessor?: CoachesApiResponseProcessor) {
        this.api = new ObservableCoachesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List coaches with offset and limit parameters
     * @param param the request object
     */
    public v2CoachesGet(param: CoachesApiV2CoachesGetRequest, options?: Configuration): Promise<CoachPageDto> {
        return this.api.v2CoachesGet(param.offset, param.limit, param.languageCode,  options).toPromise();
    }

    /**
     * Find coach by id
     * @param param the request object
     */
    public v2CoachesIdGet(param: CoachesApiV2CoachesIdGetRequest, options?: Configuration): Promise<Array<CoachDto>> {
        return this.api.v2CoachesIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update coach information
     * @param param the request object
     */
    public v2CoachesIdPut(param: CoachesApiV2CoachesIdPutRequest, options?: Configuration): Promise<CoachDto> {
        return this.api.v2CoachesIdPut(param.id, param.coach,  options).toPromise();
    }

    /**
     * Store a newly created coach in storage
     * @param param the request object
     */
    public v2CoachesPost(param: CoachesApiV2CoachesPostRequest = {}, options?: Configuration): Promise<CoachDto> {
        return this.api.v2CoachesPost(param.coach,  options).toPromise();
    }

}

import { ObservableCountriesApi } from "./ObservableAPI";
import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";

export interface CountriesApiCountriesGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof CountriesApicountriesGet
     */
    acceptLanguage?: string
}

export class ObjectCountriesApi {
    private api: ObservableCountriesApi

    public constructor(configuration: Configuration, requestFactory?: CountriesApiRequestFactory, responseProcessor?: CountriesApiResponseProcessor) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available Country resources
     * @param param the request object
     */
    public countriesGet(param: CountriesApiCountriesGetRequest = {}, options?: Configuration): Promise<Array<Country>> {
        return this.api.countriesGet(param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableEventIncidentsApi } from "./ObservableAPI";
import { EventIncidentsApiRequestFactory, EventIncidentsApiResponseProcessor} from "../apis/EventIncidentsApi";

export interface EventIncidentsApiEventIncidentsGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventIncidentsApieventIncidentsGet
     */
    acceptLanguage?: string
    /**
     * Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     * @type Date
     * @memberof EventIncidentsApieventIncidentsGet
     */
    lastUpdate?: Date
}

export class ObjectEventIncidentsApi {
    private api: ObservableEventIncidentsApi

    public constructor(configuration: Configuration, requestFactory?: EventIncidentsApiRequestFactory, responseProcessor?: EventIncidentsApiResponseProcessor) {
        this.api = new ObservableEventIncidentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param param the request object
     */
    public eventIncidentsGet(param: EventIncidentsApiEventIncidentsGetRequest = {}, options?: Configuration): Promise<Array<EventIncident>> {
        return this.api.eventIncidentsGet(param.acceptLanguage, param.lastUpdate,  options).toPromise();
    }

}

import { ObservableEventPlayerTypeApi } from "./ObservableAPI";
import { EventPlayerTypeApiRequestFactory, EventPlayerTypeApiResponseProcessor} from "../apis/EventPlayerTypeApi";

export interface EventPlayerTypeApiEventPlayerTypesGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventPlayerTypeApieventPlayerTypesGet
     */
    acceptLanguage?: string
}

export class ObjectEventPlayerTypeApi {
    private api: ObservableEventPlayerTypeApi

    public constructor(configuration: Configuration, requestFactory?: EventPlayerTypeApiRequestFactory, responseProcessor?: EventPlayerTypeApiResponseProcessor) {
        this.api = new ObservableEventPlayerTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available EventPlayerType objects in the system
     * @param param the request object
     */
    public eventPlayerTypesGet(param: EventPlayerTypeApiEventPlayerTypesGetRequest = {}, options?: Configuration): Promise<EventPlayerType> {
        return this.api.eventPlayerTypesGet(param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableEventStatusApi } from "./ObservableAPI";
import { EventStatusApiRequestFactory, EventStatusApiResponseProcessor} from "../apis/EventStatusApi";

export interface EventStatusApiEventStatusGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventStatusApieventStatusGet
     */
    acceptLanguage?: string
}

export class ObjectEventStatusApi {
    private api: ObservableEventStatusApi

    public constructor(configuration: Configuration, requestFactory?: EventStatusApiRequestFactory, responseProcessor?: EventStatusApiResponseProcessor) {
        this.api = new ObservableEventStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available EventStatus objects in the system
     * @param param the request object
     */
    public eventStatusGet(param: EventStatusApiEventStatusGetRequest = {}, options?: Configuration): Promise<EventStatus> {
        return this.api.eventStatusGet(param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiEventsByTeamsGetRequest {
    /**
     * Filter events with home team id
     * @type number
     * @memberof EventsApieventsByTeamsGet
     */
    homeId: number
    /**
     * Filter events with away team id
     * @type number
     * @memberof EventsApieventsByTeamsGet
     */
    awayId: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsByTeamsGet
     */
    acceptLanguage?: string
}

export interface EventsApiEventsGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsGet
     */
    acceptLanguage?: string
    /**
     * Filter events, which have a start_time after the specified date, format is RFC 3339
     * @type Date
     * @memberof EventsApieventsGet
     */
    fromTime?: Date
    /**
     * Filter events, which have a start_time before the specified date, format is RFC 3339
     * @type Date
     * @memberof EventsApieventsGet
     */
    toTime?: Date
    /**
     * Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @type &#39;&#39; | &#39;tournament_season_stage&#39;
     * @memberof EventsApieventsGet
     */
    groupBy?: '' | 'tournament_season_stage'
    /**
     * Order matching events for a specific client
     * @type &#39;sportalios&#39;
     * @memberof EventsApieventsGet
     */
    clientOrder?: 'sportalios'
}

export interface EventsApiEventsIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof EventsApieventsIdGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsIdGet
     */
    acceptLanguage?: string
    /**
     * Specifies additional information to include with the standing response
     * @type &#39;form&#39; | &#39;form.events&#39;
     * @memberof EventsApieventsIdGet
     */
    expand?: 'form' | 'form.events'
}

export interface EventsApiEventsIdIncidentsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof EventsApieventsIdIncidentsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsIdIncidentsGet
     */
    acceptLanguage?: string
    /**
     * Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @type &#39;team&#39;
     * @memberof EventsApieventsIdIncidentsGet
     */
    groupBy?: 'team'
    /**
     * Whether to sort the results by ascending or descending order
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof EventsApieventsIdIncidentsGet
     */
    direction?: 'asc' | 'desc'
}

export interface EventsApiEventsIdLineupsGetRequest {
    /**
     * Event.id for which lineups are requested
     * @type number
     * @memberof EventsApieventsIdLineupsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsIdLineupsGet
     */
    acceptLanguage?: string
}

export interface EventsApiEventsIdPlayersGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof EventsApieventsIdPlayersGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsIdPlayersGet
     */
    acceptLanguage?: string
    /**
     * Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     * @type &#39;team&#39;
     * @memberof EventsApieventsIdPlayersGet
     */
    groupBy?: 'team'
}

export interface EventsApiEventsIdPregameoddsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof EventsApieventsIdPregameoddsGet
     */
    id: string
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof EventsApieventsIdPregameoddsGet
     */
    xOddClient: string
}

export interface EventsApiEventsLiveGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsLiveGet
     */
    acceptLanguage?: string
    /**
     * Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @type &#39;tournament_season_stage&#39;
     * @memberof EventsApieventsLiveGet
     */
    groupBy?: 'tournament_season_stage'
}

export interface EventsApiEventsSinceGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApieventsSinceGet
     */
    acceptLanguage?: string
    /**
     * Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     * @type Date
     * @memberof EventsApieventsSinceGet
     */
    lastUpdate?: Date
}

export interface EventsApiMatchesGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApimatchesGet
     */
    acceptLanguage?: string
    /**
     * Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format
     * @type Date
     * @memberof EventsApimatchesGet
     */
    fromStartTime?: Date
    /**
     * Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format
     * @type Date
     * @memberof EventsApimatchesGet
     */
    toStartTime?: Date
    /**
     * List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams.
     * @type string
     * @memberof EventsApimatchesGet
     */
    teamIds?: string
    /**
     * List for match IDs separated by commas.
     * @type string
     * @memberof EventsApimatchesGet
     */
    matchIds?: string
    /**
     * List for tournament IDs separated by commas.
     * @type string
     * @memberof EventsApimatchesGet
     */
    tournamentIds?: string
    /**
     * List for stage IDs separated by commas.
     * @type string
     * @memberof EventsApimatchesGet
     */
    stageIds?: string
    /**
     * List for rounds separated by commas.
     * @type string
     * @memberof EventsApimatchesGet
     */
    rounds?: string
    /**
     * List for season IDs separated by commas.
     * @type string
     * @memberof EventsApimatchesGet
     */
    seasonIds?: string
    /**
     * List of status types.
     * @type &#39;finished&#39; | &#39;notstarted&#39; | &#39;inprogress&#39; | &#39;interrupted&#39; | &#39;cancelled&#39;
     * @memberof EventsApimatchesGet
     */
    statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled'
    /**
     * Results offset
     * @type number
     * @memberof EventsApimatchesGet
     */
    offset?: number
    /**
     * Results limit
     * @type number
     * @memberof EventsApimatchesGet
     */
    limit?: number
    /**
     * Tournament filtering and ordering.
     * @type string
     * @memberof EventsApimatchesGet
     */
    tournamentOrder?: string
    /**
     * Filter matches by referee
     * @type string
     * @memberof EventsApimatchesGet
     */
    refereeId?: string
    /**
     * Filter matches by venue
     * @type string
     * @memberof EventsApimatchesGet
     */
    venueId?: string
    /**
     * Filter matches by event_status.code
     * @type string
     * @memberof EventsApimatchesGet
     */
    statusCode?: string
    /**
     * Result ordering - asc/desc
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof EventsApimatchesGet
     */
    sortDirection?: 'asc' | 'desc'
}

export interface EventsApiTournamentsSeasonsStagesIdEventsGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof EventsApitournamentsSeasonsStagesIdEventsGet
     */
    id: number
    /**
     * Filter the event list by a specific round
     * @type string
     * @memberof EventsApitournamentsSeasonsStagesIdEventsGet
     */
    round?: string
    /**
     * Sort results by date in ascending or descending order
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof EventsApitournamentsSeasonsStagesIdEventsGet
     */
    sortDirection?: 'asc' | 'desc'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof EventsApitournamentsSeasonsStagesIdEventsGet
     */
    acceptLanguage?: string
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of events by home and away team id
     * @param param the request object
     */
    public eventsByTeamsGet(param: EventsApiEventsByTeamsGetRequest, options?: Configuration): Promise<Event> {
        return this.api.eventsByTeamsGet(param.homeId, param.awayId, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of Events
     * @param param the request object
     */
    public eventsGet(param: EventsApiEventsGetRequest = {}, options?: Configuration): Promise<Array<Event>> {
        return this.api.eventsGet(param.acceptLanguage, param.fromTime, param.toTime, param.groupBy, param.clientOrder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventsIdGet(param: EventsApiEventsIdGetRequest, options?: Configuration): Promise<Event> {
        return this.api.eventsIdGet(param.id, param.acceptLanguage, param.expand,  options).toPromise();
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param param the request object
     */
    public eventsIdIncidentsGet(param: EventsApiEventsIdIncidentsGetRequest, options?: Configuration): Promise<Array<EventIncident>> {
        return this.api.eventsIdIncidentsGet(param.id, param.acceptLanguage, param.groupBy, param.direction,  options).toPromise();
    }

    /**
     * Get lineup information for an event. Includes players, formation and coach
     * @param param the request object
     */
    public eventsIdLineupsGet(param: EventsApiEventsIdLineupsGetRequest, options?: Configuration): Promise<Lineup> {
        return this.api.eventsIdLineupsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param param the request object
     */
    public eventsIdPlayersGet(param: EventsApiEventsIdPlayersGetRequest, options?: Configuration): Promise<Array<EventPlayer>> {
        return this.api.eventsIdPlayersGet(param.id, param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get available pre-game odds for an Event
     * @param param the request object
     */
    public eventsIdPregameoddsGet(param: EventsApiEventsIdPregameoddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.eventsIdPregameoddsGet(param.id, param.xOddClient,  options).toPromise();
    }

    /**
     * Get a list of events which are currently live
     * @param param the request object
     */
    public eventsLiveGet(param: EventsApiEventsLiveGetRequest = {}, options?: Configuration): Promise<Array<Event>> {
        return this.api.eventsLiveGet(param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get a list of events which have been updated since the specified timestamp
     * @param param the request object
     */
    public eventsSinceGet(param: EventsApiEventsSinceGetRequest = {}, options?: Configuration): Promise<Array<Event>> {
        return this.api.eventsSinceGet(param.acceptLanguage, param.lastUpdate,  options).toPromise();
    }

    /**
     * Get a list of matches for team/between teams
     * @param param the request object
     */
    public matchesGet(param: EventsApiMatchesGetRequest = {}, options?: Configuration): Promise<Array<Event>> {
        return this.api.matchesGet(param.acceptLanguage, param.fromStartTime, param.toStartTime, param.teamIds, param.matchIds, param.tournamentIds, param.stageIds, param.rounds, param.seasonIds, param.statusTypes, param.offset, param.limit, param.tournamentOrder, param.refereeId, param.venueId, param.statusCode, param.sortDirection,  options).toPromise();
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdEventsGet(param: EventsApiTournamentsSeasonsStagesIdEventsGetRequest, options?: Configuration): Promise<Array<EventsByDate>> {
        return this.api.tournamentsSeasonsStagesIdEventsGet(param.id, param.round, param.sortDirection, param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableKnockoutSchemeApi } from "./ObservableAPI";
import { KnockoutSchemeApiRequestFactory, KnockoutSchemeApiResponseProcessor} from "../apis/KnockoutSchemeApi";

export interface KnockoutSchemeApiV2KnockoutSchemesStageIdGetRequest {
    /**
     * Get knockout schemes for given stage id
     * @type string
     * @memberof KnockoutSchemeApiv2KnockoutSchemesStageIdGet
     */
    stageId: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof KnockoutSchemeApiv2KnockoutSchemesStageIdGet
     */
    languageCode?: string
}

export class ObjectKnockoutSchemeApi {
    private api: ObservableKnockoutSchemeApi

    public constructor(configuration: Configuration, requestFactory?: KnockoutSchemeApiRequestFactory, responseProcessor?: KnockoutSchemeApiResponseProcessor) {
        this.api = new ObservableKnockoutSchemeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v2KnockoutSchemesStageIdGet(param: KnockoutSchemeApiV2KnockoutSchemesStageIdGetRequest, options?: Configuration): Promise<Array<V2KnockoutScheme>> {
        return this.api.v2KnockoutSchemesStageIdGet(param.stageId, param.languageCode,  options).toPromise();
    }

}

import { ObservableLanguagesApi } from "./ObservableAPI";
import { LanguagesApiRequestFactory, LanguagesApiResponseProcessor} from "../apis/LanguagesApi";

export interface LanguagesApiV2LanguagesGetRequest {
}

export class ObjectLanguagesApi {
    private api: ObservableLanguagesApi

    public constructor(configuration: Configuration, requestFactory?: LanguagesApiRequestFactory, responseProcessor?: LanguagesApiResponseProcessor) {
        this.api = new ObservableLanguagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all possible languages.
     * @param param the request object
     */
    public v2LanguagesGet(param: LanguagesApiV2LanguagesGetRequest = {}, options?: Configuration): Promise<Array<LanguageDto>> {
        return this.api.v2LanguagesGet( options).toPromise();
    }

}

import { ObservableLineupsApi } from "./ObservableAPI";
import { LineupsApiRequestFactory, LineupsApiResponseProcessor} from "../apis/LineupsApi";

export interface LineupsApiLineupsGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof LineupsApilineupsGet
     */
    acceptLanguage?: string
    /**
     * Filter lineups which have updates only after the specified time
     * @type Date
     * @memberof LineupsApilineupsGet
     */
    lastUpdate?: Date
}

export interface LineupsApiV2MatchesIdLineupsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof LineupsApiv2MatchesIdLineupsGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof LineupsApiv2MatchesIdLineupsGet
     */
    languageCode?: string
}

export interface LineupsApiV2MatchesIdLineupsPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof LineupsApiv2MatchesIdLineupsPut
     */
    id: string
    /**
     * Lineup information to save in persistance
     * @type V2LineupInput
     * @memberof LineupsApiv2MatchesIdLineupsPut
     */
    lineup: V2LineupInput
}

export class ObjectLineupsApi {
    private api: ObservableLineupsApi

    public constructor(configuration: Configuration, requestFactory?: LineupsApiRequestFactory, responseProcessor?: LineupsApiResponseProcessor) {
        this.api = new ObservableLineupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get lineup information. Includes players, formation and coach
     * @param param the request object
     */
    public lineupsGet(param: LineupsApiLineupsGetRequest = {}, options?: Configuration): Promise<Array<Lineup>> {
        return this.api.lineupsGet(param.acceptLanguage, param.lastUpdate,  options).toPromise();
    }

    /**
     * Get lineups by match id
     * @param param the request object
     */
    public v2MatchesIdLineupsGet(param: LineupsApiV2MatchesIdLineupsGetRequest, options?: Configuration): Promise<V2Lineup> {
        return this.api.v2MatchesIdLineupsGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update Lineup information
     * @param param the request object
     */
    public v2MatchesIdLineupsPut(param: LineupsApiV2MatchesIdLineupsPutRequest, options?: Configuration): Promise<V2Lineup> {
        return this.api.v2MatchesIdLineupsPut(param.id, param.lineup,  options).toPromise();
    }

}

import { ObservableMappingsApi } from "./ObservableAPI";
import { MappingsApiRequestFactory, MappingsApiResponseProcessor} from "../apis/MappingsApi";

export interface MappingsApiMappingsSportalGetRequest {
    /**
     * Filter ID maps by a specific object type
     * @type &#39;player&#39; | &#39;team&#39; | &#39;tournament&#39; | &#39;tournament_season&#39; | &#39;tournament_season_stage&#39;
     * @memberof MappingsApimappingsSportalGet
     */
    object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage'
    /**
     * Return single Sportal ID for the specified FootballAPI &#39;id&#39;
     * @type number
     * @memberof MappingsApimappingsSportalGet
     */
    id?: number
}

export interface MappingsApiMappingsSportalReverseGetRequest {
    /**
     * Filter ID maps by a specific object type
     * @type &#39;player&#39; | &#39;team&#39; | &#39;tournament&#39; | &#39;tournament_season&#39; | &#39;tournament_season_stage&#39;
     * @memberof MappingsApimappingsSportalReverseGet
     */
    object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage'
    /**
     * Return single FotballApi ID for the specified Sportal &#39;id&#39;
     * @type number
     * @memberof MappingsApimappingsSportalReverseGet
     */
    id?: number
}

export class ObjectMappingsApi {
    private api: ObservableMappingsApi

    public constructor(configuration: Configuration, requestFactory?: MappingsApiRequestFactory, responseProcessor?: MappingsApiResponseProcessor) {
        this.api = new ObservableMappingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get FootballApi ID to Sportal ID maps for various types of objects
     * @param param the request object
     */
    public mappingsSportalGet(param: MappingsApiMappingsSportalGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.mappingsSportalGet(param.object, param.id,  options).toPromise();
    }

    /**
     * Get Sportal to Football API ID maps for various types of objects
     * @param param the request object
     */
    public mappingsSportalReverseGet(param: MappingsApiMappingsSportalReverseGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.mappingsSportalReverseGet(param.object, param.id,  options).toPromise();
    }

}

import { ObservableMatchEventsApi } from "./ObservableAPI";
import { MatchEventsApiRequestFactory, MatchEventsApiResponseProcessor} from "../apis/MatchEventsApi";

export interface MatchEventsApiV2MatchesIdEventsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof MatchEventsApiv2MatchesIdEventsGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof MatchEventsApiv2MatchesIdEventsGet
     */
    languageCode?: string
}

export interface MatchEventsApiV2MatchesIdEventsPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof MatchEventsApiv2MatchesIdEventsPut
     */
    id: string
    /**
     * Match event information to save
     * @type V2MatchEventInputWrapper
     * @memberof MatchEventsApiv2MatchesIdEventsPut
     */
    matchEvents: V2MatchEventInputWrapper
}

export class ObjectMatchEventsApi {
    private api: ObservableMatchEventsApi

    public constructor(configuration: Configuration, requestFactory?: MatchEventsApiRequestFactory, responseProcessor?: MatchEventsApiResponseProcessor) {
        this.api = new ObservableMatchEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get match events by match id
     * @param param the request object
     */
    public v2MatchesIdEventsGet(param: MatchEventsApiV2MatchesIdEventsGetRequest, options?: Configuration): Promise<V2MatchEventProfile> {
        return this.api.v2MatchesIdEventsGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Replaces all match events with the given input
     * @param param the request object
     */
    public v2MatchesIdEventsPut(param: MatchEventsApiV2MatchesIdEventsPutRequest, options?: Configuration): Promise<V2MatchEventProfile> {
        return this.api.v2MatchesIdEventsPut(param.id, param.matchEvents,  options).toPromise();
    }

}

import { ObservableMatchesApi } from "./ObservableAPI";
import { MatchesApiRequestFactory, MatchesApiResponseProcessor} from "../apis/MatchesApi";

export interface MatchesApiMatchesIdCommentaryGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof MatchesApimatchesIdCommentaryGet
     */
    id: string
    /**
     * Return translations depending on language code
     * @type string
     * @memberof MatchesApimatchesIdCommentaryGet
     */
    languageCode: string
}

export interface MatchesApiV2MatchesGetRequest {
    /**
     * Select an upper limit for the matches that would be returned
     * @type number
     * @memberof MatchesApiv2MatchesGet
     */
    limit: number
    /**
     * Select an offset for the matches that would be returned
     * @type number
     * @memberof MatchesApiv2MatchesGet
     */
    offset: number
    /**
     * Filter matches, which have been played as part of the listed tournaments
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    tournamentIds?: Array<number>
    /**
     * Filter matches, which have been played as part of the listed tournament seasons
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    seasonIds?: Array<number>
    /**
     * Filter matches, which have been played as part of the listed tournament stages
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    stageIds?: Array<number>
    /**
     * Filter matches, which have been played as part of the listed tournament groups
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    groupIds?: Array<number>
    /**
     * Filter matches, which have been played as part of the listed tournament rounds
     * @type Array&lt;string&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    roundIds?: Array<string>
    /**
     * Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
     * @type Array&lt;string&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    roundFilter?: Array<string>
    /**
     * Filter matches, which have a start_time after the specified date, format is ISO 8601
     * @type Date
     * @memberof MatchesApiv2MatchesGet
     */
    fromKickoffTime?: Date
    /**
     * Filter matches, which have a start_time before the specified date, format is ISO 8601
     * @type Date
     * @memberof MatchesApiv2MatchesGet
     */
    toKickoffTime?: Date
    /**
     * Filter matches by teams which have taken part in them
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    teamIds?: Array<number>
    /**
     * Filter matches by their status types
     * @type Array&lt;string&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    statusTypes?: Array<string>
    /**
     * Filter matches by their status codes
     * @type Array&lt;string&gt;
     * @memberof MatchesApiv2MatchesGet
     */
    statusCodes?: Array<string>
    /**
     * Filter matches by the referee who has taken part in them
     * @type number
     * @memberof MatchesApiv2MatchesGet
     */
    refereeId?: number
    /**
     * Filter matches by the venue that has hosted them
     * @type string
     * @memberof MatchesApiv2MatchesGet
     */
    venueId?: string
    /**
     * Sort matches in asc|desc order by start_time
     * @type string
     * @memberof MatchesApiv2MatchesGet
     */
    sortDirection?: string
}

export interface MatchesApiV2MatchesIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof MatchesApiv2MatchesIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof MatchesApiv2MatchesIdGet
     */
    languageCode?: string
}

export interface MatchesApiV2MatchesIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof MatchesApiv2MatchesIdPut
     */
    id: string
    /**
     * Match information to save
     * @type V2MatchInput
     * @memberof MatchesApiv2MatchesIdPut
     */
    match: V2MatchInput
}

export interface MatchesApiV2MatchesLivescoreGetRequest {
    /**
     * Filter matches by their IDs
     * @type Array&lt;number&gt;
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    matchIds?: Array<number>
    /**
     * Filter matches by the date when they were played, format is ISO 8601
     * @type string
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    date?: string
    /**
     * Filter matches by date and UTC offset, allowed value range: [-12,14]
     * @type number
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    utcOffset?: number
    /**
     * Filter matches by a tournament group code
     * @type string
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    tournamentGroup?: string
    /**
     * Filter matches by status types
     * @type Array&lt;&#39;FINISHED&#39; | &#39;NOT_STARTED&#39; | &#39;LIVE&#39; | &#39;INTERRUPTED&#39; | &#39;CANCELLED&#39; | &#39;UNKNOWN&#39;&gt;
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>
    /**
     * Fetch selected matches for specific date and tournament_group
     * @type &#39;ENABLED&#39; | &#39;DISABLED&#39;
     * @memberof MatchesApiv2MatchesLivescoreGet
     */
    selectionFilter?: 'ENABLED' | 'DISABLED'
}

export interface MatchesApiV2MatchesPostRequest {
    /**
     * Match information to save
     * @type V2MatchInput
     * @memberof MatchesApiv2MatchesPost
     */
    match: V2MatchInput
}

export class ObjectMatchesApi {
    private api: ObservableMatchesApi

    public constructor(configuration: Configuration, requestFactory?: MatchesApiRequestFactory, responseProcessor?: MatchesApiResponseProcessor) {
        this.api = new ObservableMatchesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of live commentaries with specified match id and language
     * @param param the request object
     */
    public matchesIdCommentaryGet(param: MatchesApiMatchesIdCommentaryGetRequest, options?: Configuration): Promise<Array<LiveCommentaryOutputDto>> {
        return this.api.matchesIdCommentaryGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Get a list of matches
     * @param param the request object
     */
    public v2MatchesGet(param: MatchesApiV2MatchesGetRequest, options?: Configuration): Promise<Array<V2Match>> {
        return this.api.v2MatchesGet(param.limit, param.offset, param.tournamentIds, param.seasonIds, param.stageIds, param.groupIds, param.roundIds, param.roundFilter, param.fromKickoffTime, param.toKickoffTime, param.teamIds, param.statusTypes, param.statusCodes, param.refereeId, param.venueId, param.sortDirection,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2MatchesIdGet(param: MatchesApiV2MatchesIdGetRequest, options?: Configuration): Promise<V2Match> {
        return this.api.v2MatchesIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2MatchesIdPut(param: MatchesApiV2MatchesIdPutRequest, options?: Configuration): Promise<V2Match> {
        return this.api.v2MatchesIdPut(param.id, param.match,  options).toPromise();
    }

    /**
     * Get a list of matches
     * @param param the request object
     */
    public v2MatchesLivescoreGet(param: MatchesApiV2MatchesLivescoreGetRequest = {}, options?: Configuration): Promise<Array<V2Match>> {
        return this.api.v2MatchesLivescoreGet(param.matchIds, param.date, param.utcOffset, param.tournamentGroup, param.statusTypes, param.selectionFilter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2MatchesPost(param: MatchesApiV2MatchesPostRequest, options?: Configuration): Promise<V2Match> {
        return this.api.v2MatchesPost(param.match,  options).toPromise();
    }

}

import { ObservableOddsApi } from "./ObservableAPI";
import { OddsApiRequestFactory, OddsApiResponseProcessor} from "../apis/OddsApi";

export interface OddsApiEventsIdLiveoddsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof OddsApieventsIdLiveoddsGet
     */
    id: string
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApieventsIdLiveoddsGet
     */
    xOddClient: string
}

export interface OddsApiEventsIdOddsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof OddsApieventsIdOddsGet
     */
    id: string
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApieventsIdOddsGet
     */
    xOddClient: string
}

export interface OddsApiEventsIdPregameoddsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof OddsApieventsIdPregameoddsGet
     */
    id: string
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApieventsIdPregameoddsGet
     */
    xOddClient: string
}

export interface OddsApiLiveoddsGetRequest {
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApiliveoddsGet
     */
    xOddClient: string
}

export interface OddsApiOddProvidersGetRequest {
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApioddProvidersGet
     */
    xOddClient: string
}

export interface OddsApiOddsGetRequest {
    /**
     * Odd client code
     * @type string
     * @memberof OddsApioddsGet
     */
    oddClient: string
    /**
     * Sport type filter
     * @type &#39;football&#39;
     * @memberof OddsApioddsGet
     */
    sportType: 'football'
    /**
     * Event type filter
     * @type &#39;match&#39;
     * @memberof OddsApioddsGet
     */
    eventType: 'match'
    /**
     * Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format
     * @type Date
     * @memberof OddsApioddsGet
     */
    fromEventStartTime?: Date
    /**
     * Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format
     * @type Date
     * @memberof OddsApioddsGet
     */
    toEventStartTime?: Date
    /**
     * Team ID
     * @type number
     * @memberof OddsApioddsGet
     */
    teamId?: number
    /**
     * List for team IDs separated by commas.
     * @type string
     * @memberof OddsApioddsGet
     */
    teamIds?: string
    /**
     * Order matching events for a specific client
     * @type string
     * @memberof OddsApioddsGet
     */
    eventOrder?: string
    /**
     * List for match IDs separated by commas.
     * @type string
     * @memberof OddsApioddsGet
     */
    matchIds?: string
    /**
     * List for tournament IDs separated by commas.
     * @type string
     * @memberof OddsApioddsGet
     */
    tournamentIds?: string
    /**
     * List for season IDs separated by commas.
     * @type string
     * @memberof OddsApioddsGet
     */
    seasonIds?: string
    /**
     * Pregame or live odds selector.
     * @type &#39;prematch&#39; | &#39;live&#39; | &#39;all&#39;
     * @memberof OddsApioddsGet
     */
    oddsType?: 'prematch' | 'live' | 'all'
}

export interface OddsApiPregameoddsGetRequest {
    /**
     * Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @type string
     * @memberof OddsApipregameoddsGet
     */
    xOddClient: string
    /**
     * Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @type Date
     * @memberof OddsApipregameoddsGet
     */
    fromTime?: Date
    /**
     * Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     * @type Date
     * @memberof OddsApipregameoddsGet
     */
    toTime?: Date
}

export class ObjectOddsApi {
    private api: ObservableOddsApi

    public constructor(configuration: Configuration, requestFactory?: OddsApiRequestFactory, responseProcessor?: OddsApiResponseProcessor) {
        this.api = new ObservableOddsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get available liveodds for an event
     * @param param the request object
     */
    public eventsIdLiveoddsGet(param: OddsApiEventsIdLiveoddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.eventsIdLiveoddsGet(param.id, param.xOddClient,  options).toPromise();
    }

    /**
     * Get a list of odds available in the system
     * @param param the request object
     */
    public eventsIdOddsGet(param: OddsApiEventsIdOddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.eventsIdOddsGet(param.id, param.xOddClient,  options).toPromise();
    }

    /**
     * Get available pre-game odds for an Event
     * @param param the request object
     */
    public eventsIdPregameoddsGet(param: OddsApiEventsIdPregameoddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.eventsIdPregameoddsGet(param.id, param.xOddClient,  options).toPromise();
    }

    /**
     * Get a list of liveodds available in the system
     * @param param the request object
     */
    public liveoddsGet(param: OddsApiLiveoddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.liveoddsGet(param.xOddClient,  options).toPromise();
    }

    /**
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param param the request object
     */
    public oddProvidersGet(param: OddsApiOddProvidersGetRequest, options?: Configuration): Promise<Array<OddProvider>> {
        return this.api.oddProvidersGet(param.xOddClient,  options).toPromise();
    }

    /**
     * Returns a list of Odds
     * @param param the request object
     */
    public oddsGet(param: OddsApiOddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.oddsGet(param.oddClient, param.sportType, param.eventType, param.fromEventStartTime, param.toEventStartTime, param.teamId, param.teamIds, param.eventOrder, param.matchIds, param.tournamentIds, param.seasonIds, param.oddsType,  options).toPromise();
    }

    /**
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param param the request object
     */
    public pregameoddsGet(param: OddsApiPregameoddsGetRequest, options?: Configuration): Promise<Array<Odd>> {
        return this.api.pregameoddsGet(param.xOddClient, param.fromTime, param.toTime,  options).toPromise();
    }

}

import { ObservablePlayerStatisticApi } from "./ObservableAPI";
import { PlayerStatisticApiRequestFactory, PlayerStatisticApiResponseProcessor} from "../apis/PlayerStatisticApi";

export interface PlayerStatisticApiStatisticsPlayersGetRequest {
    /**
     * Return translations depending on language code
     * @type string
     * @memberof PlayerStatisticApistatisticsPlayersGet
     */
    languageCode: string
    /**
     * List for player IDs separated by commas.
     * @type string
     * @memberof PlayerStatisticApistatisticsPlayersGet
     */
    playerIds?: string
    /**
     * List for season IDs separated by commas.
     * @type string
     * @memberof PlayerStatisticApistatisticsPlayersGet
     */
    seasonIds?: string
    /**
     * Return only statistics for players which are currently in the specified team&#39;s squad
     * @type number
     * @memberof PlayerStatisticApistatisticsPlayersGet
     */
    teamId?: number
}

export interface PlayerStatisticApiV2StatisticsPlayersMatchPutRequest {
    /**
     * Array of player match statistics
     * @type Array&lt;V2PlayerStatisticInput&gt;
     * @memberof PlayerStatisticApiv2StatisticsPlayersMatchPut
     */
    playerStatistics?: Array<V2PlayerStatisticInput>
}

export interface PlayerStatisticApiV2StatisticsPlayersSeasonGetRequest {
    /**
     * CSV list of player id values
     * @type string
     * @memberof PlayerStatisticApiv2StatisticsPlayersSeasonGet
     */
    playerIds?: string
    /**
     * CSV list of tournament season id values
     * @type string
     * @memberof PlayerStatisticApiv2StatisticsPlayersSeasonGet
     */
    seasonIds?: string
    /**
     * Team unique identifier
     * @type number
     * @memberof PlayerStatisticApiv2StatisticsPlayersSeasonGet
     */
    teamId?: number
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof PlayerStatisticApiv2StatisticsPlayersSeasonGet
     */
    languageCode?: string
}

export class ObjectPlayerStatisticApi {
    private api: ObservablePlayerStatisticApi

    public constructor(configuration: Configuration, requestFactory?: PlayerStatisticApiRequestFactory, responseProcessor?: PlayerStatisticApiResponseProcessor) {
        this.api = new ObservablePlayerStatisticApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public statisticsPlayersGet(param: PlayerStatisticApiStatisticsPlayersGetRequest, options?: Configuration): Promise<Array<OutputDto>> {
        return this.api.statisticsPlayersGet(param.languageCode, param.playerIds, param.seasonIds, param.teamId,  options).toPromise();
    }

    /**
     * Bulk Upsert player statistics
     * @param param the request object
     */
    public v2StatisticsPlayersMatchPut(param: PlayerStatisticApiV2StatisticsPlayersMatchPutRequest = {}, options?: Configuration): Promise<Array<V2PlayerStatisticOutput>> {
        return this.api.v2StatisticsPlayersMatchPut(param.playerStatistics,  options).toPromise();
    }

    /**
     * Retrieve player statistics, grouped by player and season
     * @param param the request object
     */
    public v2StatisticsPlayersSeasonGet(param: PlayerStatisticApiV2StatisticsPlayersSeasonGetRequest = {}, options?: Configuration): Promise<Array<V2PlayerSeasonStatisticOutputCollection>> {
        return this.api.v2StatisticsPlayersSeasonGet(param.playerIds, param.seasonIds, param.teamId, param.languageCode,  options).toPromise();
    }

}

import { ObservablePlayersApi } from "./ObservableAPI";
import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";

export interface PlayersApiPlayersGetRequest {
    /**
     * Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;Ronaldo&#39; it will match both &#39;Cristiono Ronaldo&#39; and &#39;Ronaldo&#39;
     * @type string
     * @memberof PlayersApiplayersGet
     */
    name: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof PlayersApiplayersGet
     */
    acceptLanguage?: string
    /**
     * Limit the number of results returned
     * @type number
     * @memberof PlayersApiplayersGet
     */
    maxResults?: number
    /**
     * Return only players which are currently in the specified team&#39;s squad
     * @type number
     * @memberof PlayersApiplayersGet
     */
    teamId?: number
}

export interface PlayersApiPlayersIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiplayersIdGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof PlayersApiplayersIdGet
     */
    acceptLanguage?: string
    /**
     * Specify additional information to include in the response
     * @type &#39;club&#39; | &#39;club,current_league&#39;
     * @memberof PlayersApiplayersIdGet
     */
    expand?: 'club' | 'club,current_league'
}

export interface PlayersApiPlayersIdStatisticsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiplayersIdStatisticsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof PlayersApiplayersIdStatisticsGet
     */
    acceptLanguage?: string
    /**
     * Filter statistics for different types of team and competition
     * @type &#39;club&#39; | &#39;national&#39; | &#39;league&#39;
     * @memberof PlayersApiplayersIdStatisticsGet
     */
    type?: 'club' | 'national' | 'league'
    /**
     * Group response by a given property
     * @type &#39;tournament&#39; | &#39;team&#39;
     * @memberof PlayersApiplayersIdStatisticsGet
     */
    groupBy?: 'tournament' | 'team'
}

export interface PlayersApiPlayersIdTeamsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiplayersIdTeamsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof PlayersApiplayersIdTeamsGet
     */
    acceptLanguage?: string
}

export interface PlayersApiV2PlayersGetRequest {
    /**
     * The number of items to skip before starting to collect the result set
     * @type number
     * @memberof PlayersApiv2PlayersGet
     */
    offset: number
    /**
     * Limit the number of results returned
     * @type number
     * @memberof PlayersApiv2PlayersGet
     */
    limit: number
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof PlayersApiv2PlayersGet
     */
    languageCode?: string
}

export interface PlayersApiV2PlayersIdClubsActivePutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiv2PlayersIdClubsActivePut
     */
    id: string
    /**
     * Active clubs input
     * @type V2ActiveClubsInput
     * @memberof PlayersApiv2PlayersIdClubsActivePut
     */
    clubs?: V2ActiveClubsInput
}

export interface PlayersApiV2PlayersIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiv2PlayersIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof PlayersApiv2PlayersIdGet
     */
    languageCode?: string
}

export interface PlayersApiV2PlayersIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PlayersApiv2PlayersIdPut
     */
    id: string
    /**
     * Player information to save in persistance
     * @type PlayerEditDto
     * @memberof PlayersApiv2PlayersIdPut
     */
    player: PlayerEditDto
}

export interface PlayersApiV2PlayersPostRequest {
    /**
     * PlayerEditDto object
     * @type PlayerEditDto
     * @memberof PlayersApiv2PlayersPost
     */
    player?: PlayerEditDto
}

export class ObjectPlayersApi {
    private api: ObservablePlayersApi

    public constructor(configuration: Configuration, requestFactory?: PlayersApiRequestFactory, responseProcessor?: PlayersApiResponseProcessor) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search player list by parameters
     * @param param the request object
     */
    public playersGet(param: PlayersApiPlayersGetRequest, options?: Configuration): Promise<Array<Player>> {
        return this.api.playersGet(param.name, param.acceptLanguage, param.maxResults, param.teamId,  options).toPromise();
    }

    /**
     * Get information about a specific Player
     * @param param the request object
     */
    public playersIdGet(param: PlayersApiPlayersIdGetRequest, options?: Configuration): Promise<PlayerProfile> {
        return this.api.playersIdGet(param.id, param.acceptLanguage, param.expand,  options).toPromise();
    }

    /**
     * Returns statistics throughout a Player's career
     * @param param the request object
     */
    public playersIdStatisticsGet(param: PlayersApiPlayersIdStatisticsGetRequest, options?: Configuration): Promise<Array<PlayerStatistics>> {
        return this.api.playersIdStatisticsGet(param.id, param.acceptLanguage, param.type, param.groupBy,  options).toPromise();
    }

    /**
     * Get the Teams in which a Player has participated during his career
     * @param param the request object
     */
    public playersIdTeamsGet(param: PlayersApiPlayersIdTeamsGetRequest, options?: Configuration): Promise<Array<PlayerTeam>> {
        return this.api.playersIdTeamsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Search player list by parameters
     * @param param the request object
     */
    public v2PlayersGet(param: PlayersApiV2PlayersGetRequest, options?: Configuration): Promise<PlayerPageDto> {
        return this.api.v2PlayersGet(param.offset, param.limit, param.languageCode,  options).toPromise();
    }

    /**
     * Update the active clubs of a player
     * @param param the request object
     */
    public v2PlayersIdClubsActivePut(param: PlayersApiV2PlayersIdClubsActivePutRequest, options?: Configuration): Promise<Array<V2PlayerActiveClub>> {
        return this.api.v2PlayersIdClubsActivePut(param.id, param.clubs,  options).toPromise();
    }

    /**
     * Get player by id
     * @param param the request object
     */
    public v2PlayersIdGet(param: PlayersApiV2PlayersIdGetRequest, options?: Configuration): Promise<V2PlayerProfile> {
        return this.api.v2PlayersIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update Player information
     * @param param the request object
     */
    public v2PlayersIdPut(param: PlayersApiV2PlayersIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.v2PlayersIdPut(param.id, param.player,  options).toPromise();
    }

    /**
     * Store a newly created player in storage.
     * @param param the request object
     */
    public v2PlayersPost(param: PlayersApiV2PlayersPostRequest = {}, options?: Configuration): Promise<PlayerDto> {
        return this.api.v2PlayersPost(param.player,  options).toPromise();
    }

}

import { ObservablePresidentsApi } from "./ObservableAPI";
import { PresidentsApiRequestFactory, PresidentsApiResponseProcessor} from "../apis/PresidentsApi";

export interface PresidentsApiV2PresidentsIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof PresidentsApiv2PresidentsIdPut
     */
    id: string
    /**
     * President information to save in persistance
     * @type V2PresidentUpdate
     * @memberof PresidentsApiv2PresidentsIdPut
     */
    president?: V2PresidentUpdate
}

export interface PresidentsApiV2PresidentsPostRequest {
    /**
     * 
     * @type V2PresidentInput
     * @memberof PresidentsApiv2PresidentsPost
     */
    president?: V2PresidentInput
}

export class ObjectPresidentsApi {
    private api: ObservablePresidentsApi

    public constructor(configuration: Configuration, requestFactory?: PresidentsApiRequestFactory, responseProcessor?: PresidentsApiResponseProcessor) {
        this.api = new ObservablePresidentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update president information
     * @param param the request object
     */
    public v2PresidentsIdPut(param: PresidentsApiV2PresidentsIdPutRequest, options?: Configuration): Promise<V2President> {
        return this.api.v2PresidentsIdPut(param.id, param.president,  options).toPromise();
    }

    /**
     * Store a newly created president in storage
     * @param param the request object
     */
    public v2PresidentsPost(param: PresidentsApiV2PresidentsPostRequest = {}, options?: Configuration): Promise<V2President> {
        return this.api.v2PresidentsPost(param.president,  options).toPromise();
    }

}

import { ObservableProviderMappingsApi } from "./ObservableAPI";
import { ProviderMappingsApiRequestFactory, ProviderMappingsApiResponseProcessor} from "../apis/ProviderMappingsApi";

export interface ProviderMappingsApiV2MappingsSearchPostRequest {
    /**
     * Data entity provider name and array of mapping requests
     * @type V2MappingsSearchPostRequest
     * @memberof ProviderMappingsApiv2MappingsSearchPost
     */
    mappingRequest?: V2MappingsSearchPostRequest
}

export class ObjectProviderMappingsApi {
    private api: ObservableProviderMappingsApi

    public constructor(configuration: Configuration, requestFactory?: ProviderMappingsApiRequestFactory, responseProcessor?: ProviderMappingsApiResponseProcessor) {
        this.api = new ObservableProviderMappingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk find provider to internal ID mappings by their provider ID and entity type.
     * @param param the request object
     */
    public v2MappingsSearchPost(param: ProviderMappingsApiV2MappingsSearchPostRequest = {}, options?: Configuration): Promise<Array<V2MappingDto>> {
        return this.api.v2MappingsSearchPost(param.mappingRequest,  options).toPromise();
    }

}

import { ObservableRefereesApi } from "./ObservableAPI";
import { RefereesApiRequestFactory, RefereesApiResponseProcessor} from "../apis/RefereesApi";

export interface RefereesApiV2RefereesGetRequest {
    /**
     * The number of items to skip before starting to collect the result set
     * @type number
     * @memberof RefereesApiv2RefereesGet
     */
    offset: number
    /**
     * Limit the number of results returned
     * @type number
     * @memberof RefereesApiv2RefereesGet
     */
    limit: number
    /**
     * Filter referees which have refereed matches in the specified CSV season_ids
     * @type string
     * @memberof RefereesApiv2RefereesGet
     */
    seasonIds?: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof RefereesApiv2RefereesGet
     */
    languageCode?: string
}

export interface RefereesApiV2RefereesIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof RefereesApiv2RefereesIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof RefereesApiv2RefereesIdGet
     */
    languageCode?: string
}

export interface RefereesApiV2RefereesIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof RefereesApiv2RefereesIdPut
     */
    id: string
    /**
     * Referee information to save in persistance
     * @type RefereeEditDto
     * @memberof RefereesApiv2RefereesIdPut
     */
    referee?: RefereeEditDto
}

export interface RefereesApiV2RefereesPostRequest {
    /**
     * 
     * @type RefereeEditDto
     * @memberof RefereesApiv2RefereesPost
     */
    referee?: RefereeEditDto
}

export class ObjectRefereesApi {
    private api: ObservableRefereesApi

    public constructor(configuration: Configuration, requestFactory?: RefereesApiRequestFactory, responseProcessor?: RefereesApiResponseProcessor) {
        this.api = new ObservableRefereesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List referees with offset and limit parameters
     * @param param the request object
     */
    public v2RefereesGet(param: RefereesApiV2RefereesGetRequest, options?: Configuration): Promise<RefereePageDto> {
        return this.api.v2RefereesGet(param.offset, param.limit, param.seasonIds, param.languageCode,  options).toPromise();
    }

    /**
     * Get referee by id
     * @param param the request object
     */
    public v2RefereesIdGet(param: RefereesApiV2RefereesIdGetRequest, options?: Configuration): Promise<RefereeDto> {
        return this.api.v2RefereesIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update referee information
     * @param param the request object
     */
    public v2RefereesIdPut(param: RefereesApiV2RefereesIdPutRequest, options?: Configuration): Promise<RefereeDto> {
        return this.api.v2RefereesIdPut(param.id, param.referee,  options).toPromise();
    }

    /**
     * Store a newly created referee in storage
     * @param param the request object
     */
    public v2RefereesPost(param: RefereesApiV2RefereesPostRequest = {}, options?: Configuration): Promise<RefereeDto> {
        return this.api.v2RefereesPost(param.referee,  options).toPromise();
    }

}

import { ObservableRoundsApi } from "./ObservableAPI";
import { RoundsApiRequestFactory, RoundsApiResponseProcessor} from "../apis/RoundsApi";

export interface RoundsApiV2RoundsGetRequest {
    /**
     * Filter round types per a season ID
     * @type number
     * @memberof RoundsApiv2RoundsGet
     */
    seasonId: number
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof RoundsApiv2RoundsGet
     */
    languageCode?: string
}

export interface RoundsApiV2StagesIdRoundsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof RoundsApiv2StagesIdRoundsGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof RoundsApiv2StagesIdRoundsGet
     */
    languageCode?: string
}

export class ObjectRoundsApi {
    private api: ObservableRoundsApi

    public constructor(configuration: Configuration, requestFactory?: RoundsApiRequestFactory, responseProcessor?: RoundsApiResponseProcessor) {
        this.api = new ObservableRoundsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of rounds per season
     * @param param the request object
     */
    public v2RoundsGet(param: RoundsApiV2RoundsGetRequest, options?: Configuration): Promise<V2RoundTypes> {
        return this.api.v2RoundsGet(param.seasonId, param.languageCode,  options).toPromise();
    }

    /**
     * Get a list of rounds per stage
     * @param param the request object
     */
    public v2StagesIdRoundsGet(param: RoundsApiV2StagesIdRoundsGetRequest, options?: Configuration): Promise<V2RoundTypes> {
        return this.api.v2StagesIdRoundsGet(param.id, param.languageCode,  options).toPromise();
    }

}

import { ObservableSeasonApi } from "./ObservableAPI";
import { SeasonApiRequestFactory, SeasonApiResponseProcessor} from "../apis/SeasonApi";

export interface SeasonApiV2SeasonsDetailsGetRequest {
    /**
     * The ID of the season of interest
     * @type string
     * @memberof SeasonApiv2SeasonsDetailsGet
     */
    seasonId?: string
    /**
     * The ID of the tournament whose active season is of interest
     * @type string
     * @memberof SeasonApiv2SeasonsDetailsGet
     */
    tournamentId?: string
    /**
     * Required only when the tournament_id parameter is provided
     * @type &#39;CURRENT&#39;
     * @memberof SeasonApiv2SeasonsDetailsGet
     */
    status?: 'CURRENT'
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof SeasonApiv2SeasonsDetailsGet
     */
    languageCode?: string
}

export interface SeasonApiV2SeasonsGetRequest {
    /**
     * Required only if no other parameters are provided
     * @type string
     * @memberof SeasonApiv2SeasonsGet
     */
    tournamentId?: string
    /**
     * Required only if no other paramenters are provided
     * @type string
     * @memberof SeasonApiv2SeasonsGet
     */
    teamId?: string
    /**
     * Required only if no other parameters are provided
     * @type &#39;ACTIVE&#39;
     * @memberof SeasonApiv2SeasonsGet
     */
    status?: 'ACTIVE'
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof SeasonApiv2SeasonsGet
     */
    languageCode?: string
}

export interface SeasonApiV2SeasonsIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof SeasonApiv2SeasonsIdPut
     */
    id: string
    /**
     * Season name
     * @type V2TournamentSeasonUpdateInput
     * @memberof SeasonApiv2SeasonsIdPut
     */
    name: V2TournamentSeasonUpdateInput
}

export interface SeasonApiV2SeasonsIdStagesGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof SeasonApiv2SeasonsIdStagesGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof SeasonApiv2SeasonsIdStagesGet
     */
    languageCode?: string
}

export interface SeasonApiV2SeasonsIdStagesPostRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof SeasonApiv2SeasonsIdStagesPost
     */
    id: string
    /**
     * List of stages to be updated or created
     * @type Array&lt;V2SeasonStage&gt;
     * @memberof SeasonApiv2SeasonsIdStagesPost
     */
    stages: Array<V2SeasonStage>
}

export interface SeasonApiV2SeasonsPostRequest {
    /**
     * Season information
     * @type V2TournamentSeasonInsertInput
     * @memberof SeasonApiv2SeasonsPost
     */
    season: V2TournamentSeasonInsertInput
}

export interface SeasonApiV2StagesIdDeleteRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof SeasonApiv2StagesIdDelete
     */
    id: string
}

export interface SeasonApiV2TournamentsIdSeasonsCurrentPatchRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof SeasonApiv2TournamentsIdSeasonsCurrentPatch
     */
    id: string
    /**
     * Season unique identifier
     * @type V2TournamentSeasonStatusInput
     * @memberof SeasonApiv2TournamentsIdSeasonsCurrentPatch
     */
    seasonId: V2TournamentSeasonStatusInput
}

export class ObjectSeasonApi {
    private api: ObservableSeasonApi

    public constructor(configuration: Configuration, requestFactory?: SeasonApiRequestFactory, responseProcessor?: SeasonApiResponseProcessor) {
        this.api = new ObservableSeasonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the details of a season by season_id, or by tournament_id and active status
     * @param param the request object
     */
    public v2SeasonsDetailsGet(param: SeasonApiV2SeasonsDetailsGetRequest = {}, options?: Configuration): Promise<V2SeasonDetails> {
        return this.api.v2SeasonsDetailsGet(param.seasonId, param.tournamentId, param.status, param.languageCode,  options).toPromise();
    }

    /**
     * Get seasons by tournament_id, team_id and status
     * @param param the request object
     */
    public v2SeasonsGet(param: SeasonApiV2SeasonsGetRequest = {}, options?: Configuration): Promise<V2SeasonList> {
        return this.api.v2SeasonsGet(param.tournamentId, param.teamId, param.status, param.languageCode,  options).toPromise();
    }

    /**
     * Update an existing season
     * @param param the request object
     */
    public v2SeasonsIdPut(param: SeasonApiV2SeasonsIdPutRequest, options?: Configuration): Promise<V2Season> {
        return this.api.v2SeasonsIdPut(param.id, param.name,  options).toPromise();
    }

    /**
     * List all stages for specific season
     * @param param the request object
     */
    public v2SeasonsIdStagesGet(param: SeasonApiV2SeasonsIdStagesGetRequest, options?: Configuration): Promise<V2SeasonStageCollection> {
        return this.api.v2SeasonsIdStagesGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Create or update multiple stages
     * @param param the request object
     */
    public v2SeasonsIdStagesPost(param: SeasonApiV2SeasonsIdStagesPostRequest, options?: Configuration): Promise<V2SeasonStageCollection> {
        return this.api.v2SeasonsIdStagesPost(param.id, param.stages,  options).toPromise();
    }

    /**
     * Create a new season
     * @param param the request object
     */
    public v2SeasonsPost(param: SeasonApiV2SeasonsPostRequest, options?: Configuration): Promise<V2Season> {
        return this.api.v2SeasonsPost(param.season,  options).toPromise();
    }

    /**
     * Permanently delete stage
     * @param param the request object
     */
    public v2StagesIdDelete(param: SeasonApiV2StagesIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v2StagesIdDelete(param.id,  options).toPromise();
    }

    /**
     * Set the current season as active and change all other seasons in the tournament to inactive
     * @param param the request object
     */
    public v2TournamentsIdSeasonsCurrentPatch(param: SeasonApiV2TournamentsIdSeasonsCurrentPatchRequest, options?: Configuration): Promise<V2Season> {
        return this.api.v2TournamentsIdSeasonsCurrentPatch(param.id, param.seasonId,  options).toPromise();
    }

}

import { ObservableStagesApi } from "./ObservableAPI";
import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";

export interface StagesApiStagesGetRequest {
    /**
     * Filter stages by a team which is participating in the stage
     * @type number
     * @memberof StagesApistagesGet
     */
    teamId?: number
    /**
     * CSV list of tournament.id values to filter stages
     * @type string
     * @memberof StagesApistagesGet
     */
    tournamentIds?: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof StagesApistagesGet
     */
    acceptLanguage?: string
}

export interface StagesApiV2GroupsIdDeleteRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StagesApiv2GroupsIdDelete
     */
    id: string
}

export interface StagesApiV2StagesIdGroupsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StagesApiv2StagesIdGroupsGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof StagesApiv2StagesIdGroupsGet
     */
    languageCode?: string
}

export interface StagesApiV2StagesIdGroupsPostRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StagesApiv2StagesIdGroupsPost
     */
    id: string
    /**
     * List of groups to be updated or created
     * @type Array&lt;V2StageGroup&gt;
     * @memberof StagesApiv2StagesIdGroupsPost
     */
    groups: Array<V2StageGroup>
}

export interface StagesApiV2StagesIdTeamsPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StagesApiv2StagesIdTeamsPut
     */
    id: string
    /**
     * List of team ids
     * @type Array&lt;V2StageTeamInput&gt;
     * @memberof StagesApiv2StagesIdTeamsPut
     */
    teamId: Array<V2StageTeamInput>
}

export class ObjectStagesApi {
    private api: ObservableStagesApi

    public constructor(configuration: Configuration, requestFactory?: StagesApiRequestFactory, responseProcessor?: StagesApiResponseProcessor) {
        this.api = new ObservableStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Listing for Stages resources
     * @param param the request object
     */
    public stagesGet(param: StagesApiStagesGetRequest = {}, options?: Configuration): Promise<Array<StageDto>> {
        return this.api.stagesGet(param.teamId, param.tournamentIds, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Permanently delete group
     * @param param the request object
     */
    public v2GroupsIdDelete(param: StagesApiV2GroupsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v2GroupsIdDelete(param.id,  options).toPromise();
    }

    /**
     * List all groups for specific stage
     * @param param the request object
     */
    public v2StagesIdGroupsGet(param: StagesApiV2StagesIdGroupsGetRequest, options?: Configuration): Promise<V2StageGroupCollection> {
        return this.api.v2StagesIdGroupsGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Create or update multiple groups
     * @param param the request object
     */
    public v2StagesIdGroupsPost(param: StagesApiV2StagesIdGroupsPostRequest, options?: Configuration): Promise<V2StageGroupCollection> {
        return this.api.v2StagesIdGroupsPost(param.id, param.groups,  options).toPromise();
    }

    /**
     * Replace teams in stage
     * @param param the request object
     */
    public v2StagesIdTeamsPut(param: StagesApiV2StagesIdTeamsPutRequest, options?: Configuration): Promise<void> {
        return this.api.v2StagesIdTeamsPut(param.id, param.teamId,  options).toPromise();
    }

}

import { ObservableStandingRuleApi } from "./ObservableAPI";
import { StandingRuleApiRequestFactory, StandingRuleApiResponseProcessor} from "../apis/StandingRuleApi";

export interface StandingRuleApiStandingRulesGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof StandingRuleApistandingRulesGet
     */
    acceptLanguage?: string
}

export class ObjectStandingRuleApi {
    private api: ObservableStandingRuleApi

    public constructor(configuration: Configuration, requestFactory?: StandingRuleApiRequestFactory, responseProcessor?: StandingRuleApiResponseProcessor) {
        this.api = new ObservableStandingRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available StandingRule objects in the system
     * @param param the request object
     */
    public standingRulesGet(param: StandingRuleApiStandingRulesGetRequest = {}, options?: Configuration): Promise<StandingRule> {
        return this.api.standingRulesGet(param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableStandingsApi } from "./ObservableAPI";
import { StandingsApiRequestFactory, StandingsApiResponseProcessor} from "../apis/StandingsApi";

export interface StandingsApiV2StandingsLeagueEntityIdPutRequest {
    /**
     * type of entity to attach standing to
     * @type &#39;season&#39; | &#39;stage&#39; | &#39;group&#39;
     * @memberof StandingsApiv2StandingsLeagueEntityIdPut
     */
    entity: 'season' | 'stage' | 'group'
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StandingsApiv2StandingsLeagueEntityIdPut
     */
    id: string
    /**
     * List of all entries for the standing
     * @type V2LeagueStandingInput
     * @memberof StandingsApiv2StandingsLeagueEntityIdPut
     */
    standingEntries: V2LeagueStandingInput
}

export interface StandingsApiV2StandingsLeagueEntityIdRulesPutRequest {
    /**
     * type of entity to attach standing to
     * @type &#39;season&#39; | &#39;stage&#39; | &#39;group&#39;
     * @memberof StandingsApiv2StandingsLeagueEntityIdRulesPut
     */
    entity: 'season' | 'stage' | 'group'
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StandingsApiv2StandingsLeagueEntityIdRulesPut
     */
    id: string
    /**
     * list of rules for every rank
     * @type V2StandingEntryRuleWrapper
     * @memberof StandingsApiv2StandingsLeagueEntityIdRulesPut
     */
    standingRules: V2StandingEntryRuleWrapper
}

export interface StandingsApiV2StandingsTopscorerEntityIdPutRequest {
    /**
     * type of entity to attach standing to
     * @type &#39;season&#39; | &#39;stage&#39; | &#39;group&#39;
     * @memberof StandingsApiv2StandingsTopscorerEntityIdPut
     */
    entity: 'season' | 'stage' | 'group'
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof StandingsApiv2StandingsTopscorerEntityIdPut
     */
    id: string
    /**
     * List of all entries for the standing
     * @type V2TopScorerStandingInput
     * @memberof StandingsApiv2StandingsTopscorerEntityIdPut
     */
    standingEntries: V2TopScorerStandingInput
}

export class ObjectStandingsApi {
    private api: ObservableStandingsApi

    public constructor(configuration: Configuration, requestFactory?: StandingsApiRequestFactory, responseProcessor?: StandingsApiResponseProcessor) {
        this.api = new ObservableStandingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update a league standing table
     * @param param the request object
     */
    public v2StandingsLeagueEntityIdPut(param: StandingsApiV2StandingsLeagueEntityIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.v2StandingsLeagueEntityIdPut(param.entity, param.id, param.standingEntries,  options).toPromise();
    }

    /**
     * Attach standing rules to a league standing
     * @param param the request object
     */
    public v2StandingsLeagueEntityIdRulesPut(param: StandingsApiV2StandingsLeagueEntityIdRulesPutRequest, options?: Configuration): Promise<void> {
        return this.api.v2StandingsLeagueEntityIdRulesPut(param.entity, param.id, param.standingRules,  options).toPromise();
    }

    /**
     * Update a topscorer standing table
     * @param param the request object
     */
    public v2StandingsTopscorerEntityIdPut(param: StandingsApiV2StandingsTopscorerEntityIdPutRequest, options?: Configuration): Promise<void> {
        return this.api.v2StandingsTopscorerEntityIdPut(param.entity, param.id, param.standingEntries,  options).toPromise();
    }

}

import { ObservableTeamSquadApi } from "./ObservableAPI";
import { TeamSquadApiRequestFactory, TeamSquadApiResponseProcessor} from "../apis/TeamSquadApi";

export interface TeamSquadApiV2TeamsIdSquadGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamSquadApiv2TeamsIdSquadGet
     */
    id: string
    /**
     * 
     * @type &#39;ALL&#39; | &#39;ACTIVE&#39; | &#39;INACTIVE&#39;
     * @memberof TeamSquadApiv2TeamsIdSquadGet
     */
    memberStatus?: 'ALL' | 'ACTIVE' | 'INACTIVE'
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof TeamSquadApiv2TeamsIdSquadGet
     */
    languageCode?: string
}

export interface TeamSquadApiV2TeamsIdSquadPatchRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamSquadApiv2TeamsIdSquadPatch
     */
    id: string
    /**
     * TeamSquad members to update. Null value for a property means no update
     * @type V2TeamSquadInput
     * @memberof TeamSquadApiv2TeamsIdSquadPatch
     */
    squadMembers: V2TeamSquadInput
}

export class ObjectTeamSquadApi {
    private api: ObservableTeamSquadApi

    public constructor(configuration: Configuration, requestFactory?: TeamSquadApiRequestFactory, responseProcessor?: TeamSquadApiResponseProcessor) {
        this.api = new ObservableTeamSquadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get teams squad
     * @param param the request object
     */
    public v2TeamsIdSquadGet(param: TeamSquadApiV2TeamsIdSquadGetRequest, options?: Configuration): Promise<V2TeamSquad> {
        return this.api.v2TeamsIdSquadGet(param.id, param.memberStatus, param.languageCode,  options).toPromise();
    }

    /**
     * Update TeamSquad members
     * @param param the request object
     */
    public v2TeamsIdSquadPatch(param: TeamSquadApiV2TeamsIdSquadPatchRequest, options?: Configuration): Promise<V2TeamSquad> {
        return this.api.v2TeamsIdSquadPatch(param.id, param.squadMembers,  options).toPromise();
    }

}

import { ObservableTeamStatsApi } from "./ObservableAPI";
import { TeamStatsApiRequestFactory, TeamStatsApiResponseProcessor} from "../apis/TeamStatsApi";

export interface TeamStatsApiEventTeamstatsGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamStatsApieventTeamstatsGet
     */
    acceptLanguage?: string
    /**
     * Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     * @type Date
     * @memberof TeamStatsApieventTeamstatsGet
     */
    lastUpdate?: Date
}

export interface TeamStatsApiEventsIdTeamstatsGetRequest {
    /**
     * Event.id for which team stats are requested
     * @type number
     * @memberof TeamStatsApieventsIdTeamstatsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamStatsApieventsIdTeamstatsGet
     */
    acceptLanguage?: string
}

export class ObjectTeamStatsApi {
    private api: ObservableTeamStatsApi

    public constructor(configuration: Configuration, requestFactory?: TeamStatsApiRequestFactory, responseProcessor?: TeamStatsApiResponseProcessor) {
        this.api = new ObservableTeamStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param param the request object
     */
    public eventTeamstatsGet(param: TeamStatsApiEventTeamstatsGetRequest = {}, options?: Configuration): Promise<Array<EventTeamStats>> {
        return this.api.eventTeamstatsGet(param.acceptLanguage, param.lastUpdate,  options).toPromise();
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param param the request object
     */
    public eventsIdTeamstatsGet(param: TeamStatsApiEventsIdTeamstatsGetRequest, options?: Configuration): Promise<Array<EventTeamStats>> {
        return this.api.eventsIdTeamstatsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableTeamsApi } from "./ObservableAPI";
import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";

export interface TeamsApiCountriesIdTeamsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApicountriesIdTeamsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApicountriesIdTeamsGet
     */
    acceptLanguage?: string
    /**
     * Filter teams for different types of national and non national
     * @type &#39;1&#39; | &#39;0&#39; | &#39;true&#39; | &#39;false&#39;
     * @memberof TeamsApicountriesIdTeamsGet
     */
    national?: '1' | '0' | 'true' | 'false'
}

export interface TeamsApiTeamsGetRequest {
    /**
     * Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39;
     * @type string
     * @memberof TeamsApiteamsGet
     */
    name: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsGet
     */
    acceptLanguage?: string
    /**
     * Limit the number of results returned
     * @type number
     * @memberof TeamsApiteamsGet
     */
    maxResults?: number
    /**
     * Filter teams just from the specified country
     * @type number
     * @memberof TeamsApiteamsGet
     */
    countryId?: number
}

export interface TeamsApiTeamsIdEventsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdEventsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdEventsGet
     */
    acceptLanguage?: string
    /**
     * Filter events, which have a start_time after the specified date, format is RFC 3339
     * @type Date
     * @memberof TeamsApiteamsIdEventsGet
     */
    fromTime?: Date
    /**
     * Filter events, which have a start_time before the specified date, format is RFC 3339
     * @type Date
     * @memberof TeamsApiteamsIdEventsGet
     */
    toTime?: Date
    /**
     * Whether to sort the results by ascending or descending order
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof TeamsApiteamsIdEventsGet
     */
    direction?: 'asc' | 'desc'
    /**
     * Filter events for a specific tournament_season_stage.id
     * @type number
     * @memberof TeamsApiteamsIdEventsGet
     */
    tournamentSeasonStageId?: number
}

export interface TeamsApiTeamsIdFormGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdFormGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdFormGet
     */
    acceptLanguage?: string
    /**
     * Whether to include information about every event in the TeamForm response
     * @type &#39;events&#39;
     * @memberof TeamsApiteamsIdFormGet
     */
    expand?: 'events'
}

export interface TeamsApiTeamsIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdGet
     */
    acceptLanguage?: string
    /**
     * Specifies additional information to include with the Team response
     * @type &#39;form&#39; | &#39;form.events&#39; | &#39;form.events,next_event&#39;
     * @memberof TeamsApiteamsIdGet
     */
    expand?: 'form' | 'form.events' | 'form.events,next_event'
}

export interface TeamsApiTeamsIdPlayersGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdPlayersGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdPlayersGet
     */
    acceptLanguage?: string
    /**
     * Group players by a specific property
     * @type &#39;position&#39;
     * @memberof TeamsApiteamsIdPlayersGet
     */
    groupBy?: 'position'
}

export interface TeamsApiTeamsIdPlayersStatisticsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsGet
     */
    acceptLanguage?: string
    /**
     * Group the response by a specific property
     * @type &#39;player.position&#39;
     * @memberof TeamsApiteamsIdPlayersStatisticsGet
     */
    groupBy?: 'player.position'
}

export interface TeamsApiTeamsIdPlayersStatisticsSeasonsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsGet
     */
    acceptLanguage?: string
}

export interface TeamsApiTeamsIdPlayersStatisticsSeasonsSeasonIdGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsSeasonIdGet
     */
    seasonId: number
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsSeasonIdGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsSeasonIdGet
     */
    acceptLanguage?: string
    /**
     * Group the response by a specific property
     * @type &#39;player.position&#39;
     * @memberof TeamsApiteamsIdPlayersStatisticsSeasonsSeasonIdGet
     */
    groupBy?: 'player.position'
}

export interface TeamsApiTeamsIdStatisticsLeagueGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiteamsIdStatisticsLeagueGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApiteamsIdStatisticsLeagueGet
     */
    acceptLanguage?: string
    /**
     * Select whether to include a full league standing or just the team&#39;s position
     * @type &#39;team&#39; | &#39;full&#39;
     * @memberof TeamsApiteamsIdStatisticsLeagueGet
     */
    standing?: 'team' | 'full'
}

export interface TeamsApiTournamentsSeasonsIdTeamsGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TeamsApitournamentsSeasonsIdTeamsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApitournamentsSeasonsIdTeamsGet
     */
    acceptLanguage?: string
}

export interface TeamsApiTournamentsSeasonsStagesIdTeamsGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TeamsApitournamentsSeasonsStagesIdTeamsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TeamsApitournamentsSeasonsStagesIdTeamsGet
     */
    acceptLanguage?: string
}

export interface TeamsApiV2TeamsColorsPostRequest {
    /**
     * Team shirt colors data
     * @type V2TeamColors
     * @memberof TeamsApiv2TeamsColorsPost
     */
    teamColorsDto?: V2TeamColors
}

export interface TeamsApiV2TeamsGetRequest {
    /**
     * The number of items to skip before starting to collect the result set
     * @type number
     * @memberof TeamsApiv2TeamsGet
     */
    offset: number
    /**
     * Limit the number of results returned
     * @type number
     * @memberof TeamsApiv2TeamsGet
     */
    limit: number
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof TeamsApiv2TeamsGet
     */
    languageCode?: string
}

export interface TeamsApiV2TeamsIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiv2TeamsIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof TeamsApiv2TeamsIdGet
     */
    languageCode?: string
}

export interface TeamsApiV2TeamsIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TeamsApiv2TeamsIdPut
     */
    id: string
    /**
     * Team information to save in persistance
     * @type TeamEditDto
     * @memberof TeamsApiv2TeamsIdPut
     */
    team: TeamEditDto
}

export interface TeamsApiV2TeamsPostRequest {
    /**
     * TeamEditDto object
     * @type TeamEditDto
     * @memberof TeamsApiv2TeamsPost
     */
    teamEditDto?: TeamEditDto
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Teams for a specific Country.id
     * @param param the request object
     */
    public countriesIdTeamsGet(param: TeamsApiCountriesIdTeamsGetRequest, options?: Configuration): Promise<Array<Team>> {
        return this.api.countriesIdTeamsGet(param.id, param.acceptLanguage, param.national,  options).toPromise();
    }

    /**
     * Search all teams by parameters
     * @param param the request object
     */
    public teamsGet(param: TeamsApiTeamsGetRequest, options?: Configuration): Promise<Array<Team>> {
        return this.api.teamsGet(param.name, param.acceptLanguage, param.maxResults, param.countryId,  options).toPromise();
    }

    /**
     * Get a list of events in which a team with a specified id has participated
     * @param param the request object
     */
    public teamsIdEventsGet(param: TeamsApiTeamsIdEventsGetRequest, options?: Configuration): Promise<Array<Event>> {
        return this.api.teamsIdEventsGet(param.id, param.acceptLanguage, param.fromTime, param.toTime, param.direction, param.tournamentSeasonStageId,  options).toPromise();
    }

    /**
     * Get Team form information accross all tournaments
     * @param param the request object
     */
    public teamsIdFormGet(param: TeamsApiTeamsIdFormGetRequest, options?: Configuration): Promise<Array<TeamForm>> {
        return this.api.teamsIdFormGet(param.id, param.acceptLanguage, param.expand,  options).toPromise();
    }

    /**
     * Get information about a specific Team
     * @param param the request object
     */
    public teamsIdGet(param: TeamsApiTeamsIdGetRequest, options?: Configuration): Promise<Team> {
        return this.api.teamsIdGet(param.id, param.acceptLanguage, param.expand,  options).toPromise();
    }

    /**
     * Get the current squad for a Team
     * @param param the request object
     */
    public teamsIdPlayersGet(param: TeamsApiTeamsIdPlayersGetRequest, options?: Configuration): Promise<Array<TeamPlayer>> {
        return this.api.teamsIdPlayersGet(param.id, param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param param the request object
     */
    public teamsIdPlayersStatisticsGet(param: TeamsApiTeamsIdPlayersStatisticsGetRequest, options?: Configuration): Promise<TeamPlayerSeasonStatistics> {
        return this.api.teamsIdPlayersStatisticsGet(param.id, param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get a list of TournamentSeasons for which Player Statistics are available
     * @param param the request object
     */
    public teamsIdPlayersStatisticsSeasonsGet(param: TeamsApiTeamsIdPlayersStatisticsSeasonsGetRequest, options?: Configuration): Promise<Array<TournamentSeasonWithTournament>> {
        return this.api.teamsIdPlayersStatisticsSeasonsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param param the request object
     */
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(param: TeamsApiTeamsIdPlayersStatisticsSeasonsSeasonIdGetRequest, options?: Configuration): Promise<TeamPlayerSeasonStatistics> {
        return this.api.teamsIdPlayersStatisticsSeasonsSeasonIdGet(param.seasonId, param.id, param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get the statistics for the latest League the team participates in
     * @param param the request object
     */
    public teamsIdStatisticsLeagueGet(param: TeamsApiTeamsIdStatisticsLeagueGetRequest, options?: Configuration): Promise<TeamSeasonStatistics> {
        return this.api.teamsIdStatisticsLeagueGet(param.id, param.acceptLanguage, param.standing,  options).toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param param the request object
     */
    public tournamentsSeasonsIdTeamsGet(param: TeamsApiTournamentsSeasonsIdTeamsGetRequest, options?: Configuration): Promise<Array<PartialTeam>> {
        return this.api.tournamentsSeasonsIdTeamsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdTeamsGet(param: TeamsApiTournamentsSeasonsStagesIdTeamsGetRequest, options?: Configuration): Promise<Array<PartialTeam>> {
        return this.api.tournamentsSeasonsStagesIdTeamsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Manually insert team colors by team or event.
     * @param param the request object
     */
    public v2TeamsColorsPost(param: TeamsApiV2TeamsColorsPostRequest = {}, options?: Configuration): Promise<V2TeamColors> {
        return this.api.v2TeamsColorsPost(param.teamColorsDto,  options).toPromise();
    }

    /**
     * Get teams list
     * @param param the request object
     */
    public v2TeamsGet(param: TeamsApiV2TeamsGetRequest, options?: Configuration): Promise<TeamPageDto> {
        return this.api.v2TeamsGet(param.offset, param.limit, param.languageCode,  options).toPromise();
    }

    /**
     * Get team by id
     * @param param the request object
     */
    public v2TeamsIdGet(param: TeamsApiV2TeamsIdGetRequest, options?: Configuration): Promise<V2TeamProfile> {
        return this.api.v2TeamsIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update Team information
     * @param param the request object
     */
    public v2TeamsIdPut(param: TeamsApiV2TeamsIdPutRequest, options?: Configuration): Promise<V2TeamProfile> {
        return this.api.v2TeamsIdPut(param.id, param.team,  options).toPromise();
    }

    /**
     * Manually insert team.
     * @param param the request object
     */
    public v2TeamsPost(param: TeamsApiV2TeamsPostRequest = {}, options?: Configuration): Promise<V2TeamProfile> {
        return this.api.v2TeamsPost(param.teamEditDto,  options).toPromise();
    }

}

import { ObservableTournamentGroupsApi } from "./ObservableAPI";
import { TournamentGroupsApiRequestFactory, TournamentGroupsApiResponseProcessor} from "../apis/TournamentGroupsApi";

export interface TournamentGroupsApiV2TournamentsGroupsCodeGetRequest {
    /**
     * Tournament group code
     * @type string
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodeGet
     */
    code: string
}

export interface TournamentGroupsApiV2TournamentsGroupsCodePutRequest {
    /**
     * Tournament group unique code
     * @type string
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodePut
     */
    code: string
    /**
     * Tournament group information
     * @type V2TournamentGroupUpdateInput
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodePut
     */
    group: V2TournamentGroupUpdateInput
}

export interface TournamentGroupsApiV2TournamentsGroupsCodeSelectionDatePostRequest {
    /**
     * Client code
     * @type string
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodeSelectionDatePost
     */
    code: string
    /**
     * Date in ISO 8601 format (Y-m-d)
     * @type string
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodeSelectionDatePost
     */
    date: string
    /**
     * Array of match ids
     * @type Array&lt;V2TournamentGroupSelection&gt;
     * @memberof TournamentGroupsApiv2TournamentsGroupsCodeSelectionDatePost
     */
    matchIds?: Array<V2TournamentGroupSelection>
}

export interface TournamentGroupsApiV2TournamentsGroupsGetRequest {
}

export interface TournamentGroupsApiV2TournamentsGroupsPostRequest {
    /**
     * Tournament group information
     * @type V2TournamentGroupInsertInput
     * @memberof TournamentGroupsApiv2TournamentsGroupsPost
     */
    group: V2TournamentGroupInsertInput
}

export class ObjectTournamentGroupsApi {
    private api: ObservableTournamentGroupsApi

    public constructor(configuration: Configuration, requestFactory?: TournamentGroupsApiRequestFactory, responseProcessor?: TournamentGroupsApiResponseProcessor) {
        this.api = new ObservableTournamentGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all tournaments for a given group name and their order
     * @param param the request object
     */
    public v2TournamentsGroupsCodeGet(param: TournamentGroupsApiV2TournamentsGroupsCodeGetRequest, options?: Configuration): Promise<V2TournamentGroupGetOutput> {
        return this.api.v2TournamentsGroupsCodeGet(param.code,  options).toPromise();
    }

    /**
     * Update an existing tournament group
     * @param param the request object
     */
    public v2TournamentsGroupsCodePut(param: TournamentGroupsApiV2TournamentsGroupsCodePutRequest, options?: Configuration): Promise<void> {
        return this.api.v2TournamentsGroupsCodePut(param.code, param.group,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v2TournamentsGroupsCodeSelectionDatePost(param: TournamentGroupsApiV2TournamentsGroupsCodeSelectionDatePostRequest, options?: Configuration): Promise<void> {
        return this.api.v2TournamentsGroupsCodeSelectionDatePost(param.code, param.date, param.matchIds,  options).toPromise();
    }

    /**
     * List all tournament groups
     * @param param the request object
     */
    public v2TournamentsGroupsGet(param: TournamentGroupsApiV2TournamentsGroupsGetRequest = {}, options?: Configuration): Promise<V2TournamentGroupCollection> {
        return this.api.v2TournamentsGroupsGet( options).toPromise();
    }

    /**
     * Create a new tournament group
     * @param param the request object
     */
    public v2TournamentsGroupsPost(param: TournamentGroupsApiV2TournamentsGroupsPostRequest, options?: Configuration): Promise<void> {
        return this.api.v2TournamentsGroupsPost(param.group,  options).toPromise();
    }

}

import { ObservableTournamentsApi } from "./ObservableAPI";
import { TournamentsApiRequestFactory, TournamentsApiResponseProcessor} from "../apis/TournamentsApi";

export interface TournamentsApiTournamentsGetRequest {
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsGet
     */
    acceptLanguage?: string
    /**
     * Get Tournaments from a specific Country.id
     * @type number
     * @memberof TournamentsApitournamentsGet
     */
    countryId?: number
    /**
     * Get Tournaments ordered for a specific client
     * @type &#39;sportalios&#39;
     * @memberof TournamentsApitournamentsGet
     */
    clientOrder?: 'sportalios'
    /**
     * Include extra information with Tournament response
     * @type &#39;sportalios&#39;
     * @memberof TournamentsApitournamentsGet
     */
    expandClientSortorder?: 'sportalios'
}

export interface TournamentsApiTournamentsIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TournamentsApitournamentsIdGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsIdGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsIdSeasonsGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof TournamentsApitournamentsIdSeasonsGet
     */
    id: string
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsIdSeasonsGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsIdSeasonsLatestGetRequest {
    /**
     * Unique identifier of the Tournament resource
     * @type number
     * @memberof TournamentsApitournamentsIdSeasonsLatestGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsIdSeasonsLatestGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsIdCardlistGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsIdCardlistGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsIdCardlistGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsIdEventsGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsIdEventsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsIdEventsGet
     */
    acceptLanguage?: string
    /**
     * Whether to group events by date
     * @type &#39;date&#39;
     * @memberof TournamentsApitournamentsSeasonsIdEventsGet
     */
    groupBy?: 'date'
}

export interface TournamentsApiTournamentsSeasonsIdGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsIdGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsIdGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsIdTeamsGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsIdTeamsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsIdTeamsGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsIdTopscorerGetRequest {
    /**
     * Unique identifier of the TournamentSeason resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsIdTopscorerGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsIdTopscorerGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesActiveGetRequest {
}

export interface TournamentsApiTournamentsSeasonsStagesGroupsIdGetRequest {
    /**
     * Unique identifier of the StageGroup resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdGet
     */
    id: number
    /**
     * Specify additional information to include with the response
     * @type &#39;standing&#39; | &#39;standing.rules&#39; | &#39;standing.rules,standing.form&#39; | &#39;standing.rules,standing.form.events&#39; | &#39;standing.form&#39; | &#39;standing.form.events&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdGet
     */
    expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesGroupsIdStandingGetRequest {
    /**
     * Unique identifier of the StageGroup resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdStandingGet
     */
    id: number
    /**
     * Specify additional information to include with the response
     * @type &#39;rules&#39; | &#39;rules,form&#39; | &#39;rules,form.events&#39; | &#39;form&#39; | &#39;form.events&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdStandingGet
     */
    expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesGroupsIdStandingGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesIdEventsGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesIdEventsGet
     */
    id: number
    /**
     * Filter the event list by a specific round
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesIdEventsGet
     */
    round?: string
    /**
     * Sort results by date in ascending or descending order
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesIdEventsGet
     */
    sortDirection?: 'asc' | 'desc'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesIdEventsGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesIdGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesIdGet
     */
    id: number
    /**
     * Specify additional information to include with the response
     * @type &#39;standing&#39; | &#39;standing.rules&#39; | &#39;standing.rules,standing.form&#39; | &#39;standing.rules,standing.form.events&#39; | &#39;standing.form&#39; | &#39;standing.form.events&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesIdGet
     */
    expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesIdGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesIdRoundsGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesIdRoundsGet
     */
    id: number
    /**
     * Specify what additional information to include with the response
     * @type &#39;events&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesIdRoundsGet
     */
    expand?: 'events'
}

export interface TournamentsApiTournamentsSeasonsStagesIdStandingGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesIdStandingGet
     */
    id: number
    /**
     * Specify additional information to include with the response
     * @type &#39;rules&#39; | &#39;rules,form&#39; | &#39;rules,form.events&#39; | &#39;form&#39; | &#39;form.events&#39;
     * @memberof TournamentsApitournamentsSeasonsStagesIdStandingGet
     */
    expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events'
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesIdStandingGet
     */
    acceptLanguage?: string
}

export interface TournamentsApiTournamentsSeasonsStagesIdTeamsGetRequest {
    /**
     * Unique identifier of the TournamentSeasonStage resource
     * @type number
     * @memberof TournamentsApitournamentsSeasonsStagesIdTeamsGet
     */
    id: number
    /**
     * List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @type string
     * @memberof TournamentsApitournamentsSeasonsStagesIdTeamsGet
     */
    acceptLanguage?: string
}

export class ObjectTournamentsApi {
    private api: ObservableTournamentsApi

    public constructor(configuration: Configuration, requestFactory?: TournamentsApiRequestFactory, responseProcessor?: TournamentsApiResponseProcessor) {
        this.api = new ObservableTournamentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available Tournament resources
     * @param param the request object
     */
    public tournamentsGet(param: TournamentsApiTournamentsGetRequest = {}, options?: Configuration): Promise<Array<Tournament>> {
        return this.api.tournamentsGet(param.acceptLanguage, param.countryId, param.clientOrder, param.expandClientSortorder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public tournamentsIdGet(param: TournamentsApiTournamentsIdGetRequest, options?: Configuration): Promise<TournamentWithSeasons> {
        return this.api.tournamentsIdGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of seasons for a given Tournament id
     * @param param the request object
     */
    public tournamentsIdSeasonsGet(param: TournamentsApiTournamentsIdSeasonsGetRequest, options?: Configuration): Promise<Array<TournamentSeason>> {
        return this.api.tournamentsIdSeasonsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param param the request object
     */
    public tournamentsIdSeasonsLatestGet(param: TournamentsApiTournamentsIdSeasonsLatestGetRequest, options?: Configuration): Promise<TournamentSeasonWithStages> {
        return this.api.tournamentsIdSeasonsLatestGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param param the request object
     */
    public tournamentsSeasonsIdCardlistGet(param: TournamentsApiTournamentsSeasonsIdCardlistGetRequest, options?: Configuration): Promise<Array<CardlistStandingData>> {
        return this.api.tournamentsSeasonsIdCardlistGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of Events, for a given TournamentSeason
     * @param param the request object
     */
    public tournamentsSeasonsIdEventsGet(param: TournamentsApiTournamentsSeasonsIdEventsGetRequest, options?: Configuration): Promise<Array<Event>> {
        return this.api.tournamentsSeasonsIdEventsGet(param.id, param.acceptLanguage, param.groupBy,  options).toPromise();
    }

    /**
     * Get information for a given TournamentSeason resource id.
     * @param param the request object
     */
    public tournamentsSeasonsIdGet(param: TournamentsApiTournamentsSeasonsIdGetRequest, options?: Configuration): Promise<TournamentSeasonWithStages> {
        return this.api.tournamentsSeasonsIdGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param param the request object
     */
    public tournamentsSeasonsIdTeamsGet(param: TournamentsApiTournamentsSeasonsIdTeamsGetRequest, options?: Configuration): Promise<Array<PartialTeam>> {
        return this.api.tournamentsSeasonsIdTeamsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param param the request object
     */
    public tournamentsSeasonsIdTopscorerGet(param: TournamentsApiTournamentsSeasonsIdTopscorerGetRequest, options?: Configuration): Promise<Array<TopscorerStandingData>> {
        return this.api.tournamentsSeasonsIdTopscorerGet(param.id, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get all currently active tournament season stages
     * @param param the request object
     */
    public tournamentsSeasonsStagesActiveGet(param: TournamentsApiTournamentsSeasonsStagesActiveGetRequest = {}, options?: Configuration): Promise<Array<TournamentSeasonStage>> {
        return this.api.tournamentsSeasonsStagesActiveGet( options).toPromise();
    }

    /**
     * Get information for a StageGroup Resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesGroupsIdGet(param: TournamentsApiTournamentsSeasonsStagesGroupsIdGetRequest, options?: Configuration): Promise<StageGroupWithStandingTournamentSeasonStage> {
        return this.api.tournamentsSeasonsStagesGroupsIdGet(param.id, param.expand, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get Standing for a StageGroup Resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesGroupsIdStandingGet(param: TournamentsApiTournamentsSeasonsStagesGroupsIdStandingGetRequest, options?: Configuration): Promise<Array<LeagueStandingData>> {
        return this.api.tournamentsSeasonsStagesGroupsIdStandingGet(param.id, param.expand, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdEventsGet(param: TournamentsApiTournamentsSeasonsStagesIdEventsGetRequest, options?: Configuration): Promise<Array<EventsByDate>> {
        return this.api.tournamentsSeasonsStagesIdEventsGet(param.id, param.round, param.sortDirection, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get information for a TournamentSeasonStage Resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdGet(param: TournamentsApiTournamentsSeasonsStagesIdGetRequest, options?: Configuration): Promise<TournamentSeasonStageWithStandingGroups> {
        return this.api.tournamentsSeasonsStagesIdGet(param.id, param.expand, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdRoundsGet(param: TournamentsApiTournamentsSeasonsStagesIdRoundsGetRequest, options?: Configuration): Promise<Array<Round>> {
        return this.api.tournamentsSeasonsStagesIdRoundsGet(param.id, param.expand,  options).toPromise();
    }

    /**
     * Get Standing for a TournamentSeasonStage Resource
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdStandingGet(param: TournamentsApiTournamentsSeasonsStagesIdStandingGetRequest, options?: Configuration): Promise<Array<LeagueStandingData>> {
        return this.api.tournamentsSeasonsStagesIdStandingGet(param.id, param.expand, param.acceptLanguage,  options).toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param param the request object
     */
    public tournamentsSeasonsStagesIdTeamsGet(param: TournamentsApiTournamentsSeasonsStagesIdTeamsGetRequest, options?: Configuration): Promise<Array<PartialTeam>> {
        return this.api.tournamentsSeasonsStagesIdTeamsGet(param.id, param.acceptLanguage,  options).toPromise();
    }

}

import { ObservableTranslationsApi } from "./ObservableAPI";
import { TranslationsApiRequestFactory, TranslationsApiResponseProcessor} from "../apis/TranslationsApi";

export interface TranslationsApiV2TranslationsEntitiesGetRequest {
}

export interface TranslationsApiV2TranslationsPostRequest {
    /**
     * Array of translations
     * @type Array&lt;TranslationDto&gt;
     * @memberof TranslationsApiv2TranslationsPost
     */
    translations?: Array<TranslationDto>
}

export interface TranslationsApiV2TranslationsSearchPostRequest {
    /**
     * Array of translationKeys
     * @type Array&lt;TranslationKeyDto&gt;
     * @memberof TranslationsApiv2TranslationsSearchPost
     */
    translationKeys?: Array<TranslationKeyDto>
}

export class ObjectTranslationsApi {
    private api: ObservableTranslationsApi

    public constructor(configuration: Configuration, requestFactory?: TranslationsApiRequestFactory, responseProcessor?: TranslationsApiResponseProcessor) {
        this.api = new ObservableTranslationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all possible translation entities.
     * @param param the request object
     */
    public v2TranslationsEntitiesGet(param: TranslationsApiV2TranslationsEntitiesGetRequest = {}, options?: Configuration): Promise<Array<TranslationEntityDto>> {
        return this.api.v2TranslationsEntitiesGet( options).toPromise();
    }

    /**
     * Bulk Upsert translations by primary key
     * @param param the request object
     */
    public v2TranslationsPost(param: TranslationsApiV2TranslationsPostRequest = {}, options?: Configuration): Promise<TranslationDto> {
        return this.api.v2TranslationsPost(param.translations,  options).toPromise();
    }

    /**
     * Bulk find in translations table and return matching entries by the unique translation key.
     * @param param the request object
     */
    public v2TranslationsSearchPost(param: TranslationsApiV2TranslationsSearchPostRequest = {}, options?: Configuration): Promise<Array<TranslationDto>> {
        return this.api.v2TranslationsSearchPost(param.translationKeys,  options).toPromise();
    }

}

import { ObservableVenuesApi } from "./ObservableAPI";
import { VenuesApiRequestFactory, VenuesApiResponseProcessor} from "../apis/VenuesApi";

export interface VenuesApiV2VenuesGetRequest {
    /**
     * The number of items to skip before starting to collect the result set
     * @type number
     * @memberof VenuesApiv2VenuesGet
     */
    offset: number
    /**
     * Limit the number of results returned
     * @type number
     * @memberof VenuesApiv2VenuesGet
     */
    limit: number
    /**
     * Filter venues which have hosted matches in the specified CSV season_ids
     * @type string
     * @memberof VenuesApiv2VenuesGet
     */
    seasonIds?: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof VenuesApiv2VenuesGet
     */
    languageCode?: string
}

export interface VenuesApiV2VenuesIdGetRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof VenuesApiv2VenuesIdGet
     */
    id: string
    /**
     * Returns translated response based on the language code
     * @type string
     * @memberof VenuesApiv2VenuesIdGet
     */
    languageCode?: string
}

export interface VenuesApiV2VenuesIdPutRequest {
    /**
     * Unique identifier of the resource.
     * @type string
     * @memberof VenuesApiv2VenuesIdPut
     */
    id: string
    /**
     * Venue information to save in persistance
     * @type V2PutVenues
     * @memberof VenuesApiv2VenuesIdPut
     */
    venue?: V2PutVenues
}

export interface VenuesApiV2VenuesPostRequest {
    /**
     * 
     * @type V2PostVenues
     * @memberof VenuesApiv2VenuesPost
     */
    venue?: V2PostVenues
}

export class ObjectVenuesApi {
    private api: ObservableVenuesApi

    public constructor(configuration: Configuration, requestFactory?: VenuesApiRequestFactory, responseProcessor?: VenuesApiResponseProcessor) {
        this.api = new ObservableVenuesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List venues with offset and limit parameters
     * @param param the request object
     */
    public v2VenuesGet(param: VenuesApiV2VenuesGetRequest, options?: Configuration): Promise<V2VenuesList> {
        return this.api.v2VenuesGet(param.offset, param.limit, param.seasonIds, param.languageCode,  options).toPromise();
    }

    /**
     * Get venue by id
     * @param param the request object
     */
    public v2VenuesIdGet(param: VenuesApiV2VenuesIdGetRequest, options?: Configuration): Promise<V2VenuesGetId> {
        return this.api.v2VenuesIdGet(param.id, param.languageCode,  options).toPromise();
    }

    /**
     * Update venue information
     * @param param the request object
     */
    public v2VenuesIdPut(param: VenuesApiV2VenuesIdPutRequest, options?: Configuration): Promise<V2VenuesPut> {
        return this.api.v2VenuesIdPut(param.id, param.venue,  options).toPromise();
    }

    /**
     * Store a newly created venue in storage
     * @param param the request object
     */
    public v2VenuesPost(param: VenuesApiV2VenuesPostRequest = {}, options?: Configuration): Promise<V2Venues> {
        return this.api.v2VenuesPost(param.venue,  options).toPromise();
    }

}
