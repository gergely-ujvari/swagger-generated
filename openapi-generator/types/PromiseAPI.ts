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
import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk delete assets
     * @param assets Array of assets
     */
    public v2AssetsDelete(assets?: Array<V2AssetInput>, _options?: Configuration): Promise<void> {
        const result = this.api.v2AssetsDelete(assets, _options);
        return result.toPromise();
    }

    /**
     * Bulk Upsert assets
     * @param assets Array of assets
     */
    public v2AssetsPost(assets?: Array<V2AssetInput>, _options?: Configuration): Promise<V2Asset> {
        const result = this.api.v2AssetsPost(assets, _options);
        return result.toPromise();
    }


}



import { ObservableBlacklistApi } from './ObservableAPI';

import { BlacklistApiRequestFactory, BlacklistApiResponseProcessor} from "../apis/BlacklistApi";
export class PromiseBlacklistApi {
    private api: ObservableBlacklistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlacklistApiRequestFactory,
        responseProcessor?: BlacklistApiResponseProcessor
    ) {
        this.api = new ObservableBlacklistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove blacklist record by id.
     * Remove the specified resource from storage.
     * @param id Unique identifier of the resource.
     */
    public v2BlacklistIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.v2BlacklistIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Bulk find in blacklist table and return matching entries by the unique blacklist key.
     * @param blacklistKeys Array of blacklistsKeys
     */
    public v2BlacklistSearchPost(blacklistKeys?: Array<BlacklistKeyDto>, _options?: Configuration): Promise<Array<BlacklistDto>> {
        const result = this.api.v2BlacklistSearchPost(blacklistKeys, _options);
        return result.toPromise();
    }


}



import { ObservableCitiesApi } from './ObservableAPI';

import { CitiesApiRequestFactory, CitiesApiResponseProcessor} from "../apis/CitiesApi";
export class PromiseCitiesApi {
    private api: ObservableCitiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CitiesApiRequestFactory,
        responseProcessor?: CitiesApiResponseProcessor
    ) {
        this.api = new ObservableCitiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update city information
     * @param id Unique identifier of the resource.
     * @param city City information to save in persistance
     */
    public v2CitiesIdPut(id: string, city?: CityEditDto, _options?: Configuration): Promise<CityDto> {
        const result = this.api.v2CitiesIdPut(id, city, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created city in storage
     * @param city 
     */
    public v2CitiesPost(city?: CityEditDto, _options?: Configuration): Promise<CityDto> {
        const result = this.api.v2CitiesPost(city, _options);
        return result.toPromise();
    }


}



import { ObservableCoachesApi } from './ObservableAPI';

import { CoachesApiRequestFactory, CoachesApiResponseProcessor} from "../apis/CoachesApi";
export class PromiseCoachesApi {
    private api: ObservableCoachesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoachesApiRequestFactory,
        responseProcessor?: CoachesApiResponseProcessor
    ) {
        this.api = new ObservableCoachesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List coaches with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2CoachesGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Promise<CoachPageDto> {
        const result = this.api.v2CoachesGet(offset, limit, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Find coach by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2CoachesIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<Array<CoachDto>> {
        const result = this.api.v2CoachesIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update coach information
     * @param id Unique identifier of the resource.
     * @param coach Coach information to save in persistance
     */
    public v2CoachesIdPut(id: string, coach?: CoachEditDto, _options?: Configuration): Promise<CoachDto> {
        const result = this.api.v2CoachesIdPut(id, coach, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created coach in storage
     * @param coach 
     */
    public v2CoachesPost(coach?: CoachEditDto, _options?: Configuration): Promise<CoachDto> {
        const result = this.api.v2CoachesPost(coach, _options);
        return result.toPromise();
    }


}



import { ObservableCountriesApi } from './ObservableAPI';

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class PromiseCountriesApi {
    private api: ObservableCountriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available Country resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public countriesGet(acceptLanguage?: string, _options?: Configuration): Promise<Array<Country>> {
        const result = this.api.countriesGet(acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableEventIncidentsApi } from './ObservableAPI';

import { EventIncidentsApiRequestFactory, EventIncidentsApiResponseProcessor} from "../apis/EventIncidentsApi";
export class PromiseEventIncidentsApi {
    private api: ObservableEventIncidentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventIncidentsApiRequestFactory,
        responseProcessor?: EventIncidentsApiResponseProcessor
    ) {
        this.api = new ObservableEventIncidentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     */
    public eventIncidentsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Promise<Array<EventIncident>> {
        const result = this.api.eventIncidentsGet(acceptLanguage, lastUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableEventPlayerTypeApi } from './ObservableAPI';

import { EventPlayerTypeApiRequestFactory, EventPlayerTypeApiResponseProcessor} from "../apis/EventPlayerTypeApi";
export class PromiseEventPlayerTypeApi {
    private api: ObservableEventPlayerTypeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventPlayerTypeApiRequestFactory,
        responseProcessor?: EventPlayerTypeApiResponseProcessor
    ) {
        this.api = new ObservableEventPlayerTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available EventPlayerType objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventPlayerTypesGet(acceptLanguage?: string, _options?: Configuration): Promise<EventPlayerType> {
        const result = this.api.eventPlayerTypesGet(acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableEventStatusApi } from './ObservableAPI';

import { EventStatusApiRequestFactory, EventStatusApiResponseProcessor} from "../apis/EventStatusApi";
export class PromiseEventStatusApi {
    private api: ObservableEventStatusApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventStatusApiRequestFactory,
        responseProcessor?: EventStatusApiResponseProcessor
    ) {
        this.api = new ObservableEventStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available EventStatus objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventStatusGet(acceptLanguage?: string, _options?: Configuration): Promise<EventStatus> {
        const result = this.api.eventStatusGet(acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of events by home and away team id
     * @param homeId Filter events with home team id
     * @param awayId Filter events with away team id
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsByTeamsGet(homeId: number, awayId: number, acceptLanguage?: string, _options?: Configuration): Promise<Event> {
        const result = this.api.eventsByTeamsGet(homeId, awayId, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Events
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param clientOrder Order matching events for a specific client
     */
    public eventsGet(acceptLanguage?: string, fromTime?: Date, toTime?: Date, groupBy?: '' | 'tournament_season_stage', clientOrder?: 'sportalios', _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.eventsGet(acceptLanguage, fromTime, toTime, groupBy, clientOrder, _options);
        return result.toPromise();
    }

    /**
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the standing response
     */
    public eventsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events', _options?: Configuration): Promise<Event> {
        const result = this.api.eventsIdGet(id, acceptLanguage, expand, _options);
        return result.toPromise();
    }

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects
     * @param direction Whether to sort the results by ascending or descending order
     */
    public eventsIdIncidentsGet(id: string, acceptLanguage?: string, groupBy?: 'team', direction?: 'asc' | 'desc', _options?: Configuration): Promise<Array<EventIncident>> {
        const result = this.api.eventsIdIncidentsGet(id, acceptLanguage, groupBy, direction, _options);
        return result.toPromise();
    }

    /**
     * Get lineup information for an event. Includes players, formation and coach
     * @param id Event.id for which lineups are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsIdLineupsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Lineup> {
        const result = this.api.eventsIdLineupsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects
     */
    public eventsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'team', _options?: Configuration): Promise<Array<EventPlayer>> {
        const result = this.api.eventsIdPlayersGet(id, acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.eventsIdPregameoddsGet(id, xOddClient, _options);
        return result.toPromise();
    }

    /**
     * Get a list of events which are currently live
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     */
    public eventsLiveGet(acceptLanguage?: string, groupBy?: 'tournament_season_stage', _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.eventsLiveGet(acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get a list of events which have been updated since the specified timestamp
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     */
    public eventsSinceGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.eventsSinceGet(acceptLanguage, lastUpdate, _options);
        return result.toPromise();
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
    public matchesGet(acceptLanguage?: string, fromStartTime?: Date, toStartTime?: Date, teamIds?: string, matchIds?: string, tournamentIds?: string, stageIds?: string, rounds?: string, seasonIds?: string, statusTypes?: 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled', offset?: number, limit?: number, tournamentOrder?: string, refereeId?: string, venueId?: string, statusCode?: string, sortDirection?: 'asc' | 'desc', _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.matchesGet(acceptLanguage, fromStartTime, toStartTime, teamIds, matchIds, tournamentIds, stageIds, rounds, seasonIds, statusTypes, offset, limit, tournamentOrder, refereeId, venueId, statusCode, sortDirection, _options);
        return result.toPromise();
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, _options?: Configuration): Promise<Array<EventsByDate>> {
        const result = this.api.tournamentsSeasonsStagesIdEventsGet(id, round, sortDirection, acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableKnockoutSchemeApi } from './ObservableAPI';

import { KnockoutSchemeApiRequestFactory, KnockoutSchemeApiResponseProcessor} from "../apis/KnockoutSchemeApi";
export class PromiseKnockoutSchemeApi {
    private api: ObservableKnockoutSchemeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KnockoutSchemeApiRequestFactory,
        responseProcessor?: KnockoutSchemeApiResponseProcessor
    ) {
        this.api = new ObservableKnockoutSchemeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param stageId Get knockout schemes for given stage id
     * @param languageCode Returns translated response based on the language code
     */
    public v2KnockoutSchemesStageIdGet(stageId: string, languageCode?: string, _options?: Configuration): Promise<Array<V2KnockoutScheme>> {
        const result = this.api.v2KnockoutSchemesStageIdGet(stageId, languageCode, _options);
        return result.toPromise();
    }


}



import { ObservableLanguagesApi } from './ObservableAPI';

import { LanguagesApiRequestFactory, LanguagesApiResponseProcessor} from "../apis/LanguagesApi";
export class PromiseLanguagesApi {
    private api: ObservableLanguagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LanguagesApiRequestFactory,
        responseProcessor?: LanguagesApiResponseProcessor
    ) {
        this.api = new ObservableLanguagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all possible languages.
     */
    public v2LanguagesGet(_options?: Configuration): Promise<Array<LanguageDto>> {
        const result = this.api.v2LanguagesGet(_options);
        return result.toPromise();
    }


}



import { ObservableLineupsApi } from './ObservableAPI';

import { LineupsApiRequestFactory, LineupsApiResponseProcessor} from "../apis/LineupsApi";
export class PromiseLineupsApi {
    private api: ObservableLineupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LineupsApiRequestFactory,
        responseProcessor?: LineupsApiResponseProcessor
    ) {
        this.api = new ObservableLineupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get lineup information. Includes players, formation and coach
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter lineups which have updates only after the specified time
     */
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Promise<Array<Lineup>> {
        const result = this.api.lineupsGet(acceptLanguage, lastUpdate, _options);
        return result.toPromise();
    }

    /**
     * Get lineups by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2Lineup> {
        const result = this.api.v2MatchesIdLineupsGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update Lineup information
     * @param id Unique identifier of the resource.
     * @param lineup Lineup information to save in persistance
     */
    public v2MatchesIdLineupsPut(id: string, lineup: V2LineupInput, _options?: Configuration): Promise<V2Lineup> {
        const result = this.api.v2MatchesIdLineupsPut(id, lineup, _options);
        return result.toPromise();
    }


}



import { ObservableMappingsApi } from './ObservableAPI';

import { MappingsApiRequestFactory, MappingsApiResponseProcessor} from "../apis/MappingsApi";
export class PromiseMappingsApi {
    private api: ObservableMappingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingsApiRequestFactory,
        responseProcessor?: MappingsApiResponseProcessor
    ) {
        this.api = new ObservableMappingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get FootballApi ID to Sportal ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single Sportal ID for the specified FootballAPI &#39;id&#39;
     */
    public mappingsSportalGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, _options?: Configuration): Promise<any> {
        const result = this.api.mappingsSportalGet(object, id, _options);
        return result.toPromise();
    }

    /**
     * Get Sportal to Football API ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single FotballApi ID for the specified Sportal &#39;id&#39;
     */
    public mappingsSportalReverseGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, _options?: Configuration): Promise<any> {
        const result = this.api.mappingsSportalReverseGet(object, id, _options);
        return result.toPromise();
    }


}



import { ObservableMatchEventsApi } from './ObservableAPI';

import { MatchEventsApiRequestFactory, MatchEventsApiResponseProcessor} from "../apis/MatchEventsApi";
export class PromiseMatchEventsApi {
    private api: ObservableMatchEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MatchEventsApiRequestFactory,
        responseProcessor?: MatchEventsApiResponseProcessor
    ) {
        this.api = new ObservableMatchEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get match events by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdEventsGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2MatchEventProfile> {
        const result = this.api.v2MatchesIdEventsGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Replaces all match events with the given input
     * @param id Unique identifier of the resource.
     * @param matchEvents Match event information to save
     */
    public v2MatchesIdEventsPut(id: string, matchEvents: V2MatchEventInputWrapper, _options?: Configuration): Promise<V2MatchEventProfile> {
        const result = this.api.v2MatchesIdEventsPut(id, matchEvents, _options);
        return result.toPromise();
    }


}



import { ObservableMatchesApi } from './ObservableAPI';

import { MatchesApiRequestFactory, MatchesApiResponseProcessor} from "../apis/MatchesApi";
export class PromiseMatchesApi {
    private api: ObservableMatchesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MatchesApiRequestFactory,
        responseProcessor?: MatchesApiResponseProcessor
    ) {
        this.api = new ObservableMatchesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of live commentaries with specified match id and language
     * @param id Unique identifier of the resource.
     * @param languageCode Return translations depending on language code
     */
    public matchesIdCommentaryGet(id: string, languageCode: string, _options?: Configuration): Promise<Array<LiveCommentaryOutputDto>> {
        const result = this.api.matchesIdCommentaryGet(id, languageCode, _options);
        return result.toPromise();
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
    public v2MatchesGet(limit: number, offset: number, tournamentIds?: Array<number>, seasonIds?: Array<number>, stageIds?: Array<number>, groupIds?: Array<number>, roundIds?: Array<string>, roundFilter?: Array<string>, fromKickoffTime?: Date, toKickoffTime?: Date, teamIds?: Array<number>, statusTypes?: Array<string>, statusCodes?: Array<string>, refereeId?: number, venueId?: string, sortDirection?: string, _options?: Configuration): Promise<Array<V2Match>> {
        const result = this.api.v2MatchesGet(limit, offset, tournamentIds, seasonIds, stageIds, groupIds, roundIds, roundFilter, fromKickoffTime, toKickoffTime, teamIds, statusTypes, statusCodes, refereeId, venueId, sortDirection, _options);
        return result.toPromise();
    }

    /**
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2MatchesIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2Match> {
        const result = this.api.v2MatchesIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * @param id Unique identifier of the resource.
     * @param match Match information to save
     */
    public v2MatchesIdPut(id: string, match: V2MatchInput, _options?: Configuration): Promise<V2Match> {
        const result = this.api.v2MatchesIdPut(id, match, _options);
        return result.toPromise();
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
    public v2MatchesLivescoreGet(matchIds?: Array<number>, date?: string, utcOffset?: number, tournamentGroup?: string, statusTypes?: Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'>, selectionFilter?: 'ENABLED' | 'DISABLED', _options?: Configuration): Promise<Array<V2Match>> {
        const result = this.api.v2MatchesLivescoreGet(matchIds, date, utcOffset, tournamentGroup, statusTypes, selectionFilter, _options);
        return result.toPromise();
    }

    /**
     * @param match Match information to save
     */
    public v2MatchesPost(match: V2MatchInput, _options?: Configuration): Promise<V2Match> {
        const result = this.api.v2MatchesPost(match, _options);
        return result.toPromise();
    }


}



import { ObservableOddsApi } from './ObservableAPI';

import { OddsApiRequestFactory, OddsApiResponseProcessor} from "../apis/OddsApi";
export class PromiseOddsApi {
    private api: ObservableOddsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OddsApiRequestFactory,
        responseProcessor?: OddsApiResponseProcessor
    ) {
        this.api = new ObservableOddsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get available liveodds for an event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdLiveoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.eventsIdLiveoddsGet(id, xOddClient, _options);
        return result.toPromise();
    }

    /**
     * Get a list of odds available in the system
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdOddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.eventsIdOddsGet(id, xOddClient, _options);
        return result.toPromise();
    }

    /**
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.eventsIdPregameoddsGet(id, xOddClient, _options);
        return result.toPromise();
    }

    /**
     * Get a list of liveodds available in the system
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public liveoddsGet(xOddClient: string, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.liveoddsGet(xOddClient, _options);
        return result.toPromise();
    }

    /**
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     */
    public oddProvidersGet(xOddClient: string, _options?: Configuration): Promise<Array<OddProvider>> {
        const result = this.api.oddProvidersGet(xOddClient, _options);
        return result.toPromise();
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
    public oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.oddsGet(oddClient, sportType, eventType, fromEventStartTime, toEventStartTime, teamId, teamIds, eventOrder, matchIds, tournamentIds, seasonIds, oddsType, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @param fromTime Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @param toTime Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     */
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, _options?: Configuration): Promise<Array<Odd>> {
        const result = this.api.pregameoddsGet(xOddClient, fromTime, toTime, _options);
        return result.toPromise();
    }


}



import { ObservablePlayerStatisticApi } from './ObservableAPI';

import { PlayerStatisticApiRequestFactory, PlayerStatisticApiResponseProcessor} from "../apis/PlayerStatisticApi";
export class PromisePlayerStatisticApi {
    private api: ObservablePlayerStatisticApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayerStatisticApiRequestFactory,
        responseProcessor?: PlayerStatisticApiResponseProcessor
    ) {
        this.api = new ObservablePlayerStatisticApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param languageCode Return translations depending on language code
     * @param playerIds List for player IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param teamId Return only statistics for players which are currently in the specified team&#39;s squad
     */
    public statisticsPlayersGet(languageCode: string, playerIds?: string, seasonIds?: string, teamId?: number, _options?: Configuration): Promise<Array<OutputDto>> {
        const result = this.api.statisticsPlayersGet(languageCode, playerIds, seasonIds, teamId, _options);
        return result.toPromise();
    }

    /**
     * Bulk Upsert player statistics
     * @param playerStatistics Array of player match statistics
     */
    public v2StatisticsPlayersMatchPut(playerStatistics?: Array<V2PlayerStatisticInput>, _options?: Configuration): Promise<Array<V2PlayerStatisticOutput>> {
        const result = this.api.v2StatisticsPlayersMatchPut(playerStatistics, _options);
        return result.toPromise();
    }

    /**
     * Retrieve player statistics, grouped by player and season
     * @param playerIds CSV list of player id values
     * @param seasonIds CSV list of tournament season id values
     * @param teamId Team unique identifier
     * @param languageCode Returns translated response based on the language code
     */
    public v2StatisticsPlayersSeasonGet(playerIds?: string, seasonIds?: string, teamId?: number, languageCode?: string, _options?: Configuration): Promise<Array<V2PlayerSeasonStatisticOutputCollection>> {
        const result = this.api.v2StatisticsPlayersSeasonGet(playerIds, seasonIds, teamId, languageCode, _options);
        return result.toPromise();
    }


}



import { ObservablePlayersApi } from './ObservableAPI';

import { PlayersApiRequestFactory, PlayersApiResponseProcessor} from "../apis/PlayersApi";
export class PromisePlayersApi {
    private api: ObservablePlayersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlayersApiRequestFactory,
        responseProcessor?: PlayersApiResponseProcessor
    ) {
        this.api = new ObservablePlayersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search player list by parameters
     * @param name Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;Ronaldo&#39; it will match both &#39;Cristiono Ronaldo&#39; and &#39;Ronaldo&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param teamId Return only players which are currently in the specified team&#39;s squad
     */
    public playersGet(name: string, acceptLanguage?: string, maxResults?: number, teamId?: number, _options?: Configuration): Promise<Array<Player>> {
        const result = this.api.playersGet(name, acceptLanguage, maxResults, teamId, _options);
        return result.toPromise();
    }

    /**
     * Get information about a specific Player
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specify additional information to include in the response
     */
    public playersIdGet(id: string, acceptLanguage?: string, expand?: 'club' | 'club,current_league', _options?: Configuration): Promise<PlayerProfile> {
        const result = this.api.playersIdGet(id, acceptLanguage, expand, _options);
        return result.toPromise();
    }

    /**
     * Returns statistics throughout a Player's career
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param type Filter statistics for different types of team and competition
     * @param groupBy Group response by a given property
     */
    public playersIdStatisticsGet(id: string, acceptLanguage?: string, type?: 'club' | 'national' | 'league', groupBy?: 'tournament' | 'team', _options?: Configuration): Promise<Array<PlayerStatistics>> {
        const result = this.api.playersIdStatisticsGet(id, acceptLanguage, type, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get the Teams in which a Player has participated during his career
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public playersIdTeamsGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<Array<PlayerTeam>> {
        const result = this.api.playersIdTeamsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Search player list by parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2PlayersGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Promise<PlayerPageDto> {
        const result = this.api.v2PlayersGet(offset, limit, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update the active clubs of a player
     * @param id Unique identifier of the resource.
     * @param clubs Active clubs input
     */
    public v2PlayersIdClubsActivePut(id: string, clubs?: V2ActiveClubsInput, _options?: Configuration): Promise<Array<V2PlayerActiveClub>> {
        const result = this.api.v2PlayersIdClubsActivePut(id, clubs, _options);
        return result.toPromise();
    }

    /**
     * Get player by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2PlayersIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2PlayerProfile> {
        const result = this.api.v2PlayersIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update Player information
     * @param id Unique identifier of the resource.
     * @param player Player information to save in persistance
     */
    public v2PlayersIdPut(id: string, player: PlayerEditDto, _options?: Configuration): Promise<void> {
        const result = this.api.v2PlayersIdPut(id, player, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created player in storage.
     * @param player PlayerEditDto object
     */
    public v2PlayersPost(player?: PlayerEditDto, _options?: Configuration): Promise<PlayerDto> {
        const result = this.api.v2PlayersPost(player, _options);
        return result.toPromise();
    }


}



import { ObservablePresidentsApi } from './ObservableAPI';

import { PresidentsApiRequestFactory, PresidentsApiResponseProcessor} from "../apis/PresidentsApi";
export class PromisePresidentsApi {
    private api: ObservablePresidentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PresidentsApiRequestFactory,
        responseProcessor?: PresidentsApiResponseProcessor
    ) {
        this.api = new ObservablePresidentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update president information
     * @param id Unique identifier of the resource.
     * @param president President information to save in persistance
     */
    public v2PresidentsIdPut(id: string, president?: V2PresidentUpdate, _options?: Configuration): Promise<V2President> {
        const result = this.api.v2PresidentsIdPut(id, president, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created president in storage
     * @param president 
     */
    public v2PresidentsPost(president?: V2PresidentInput, _options?: Configuration): Promise<V2President> {
        const result = this.api.v2PresidentsPost(president, _options);
        return result.toPromise();
    }


}



import { ObservableProviderMappingsApi } from './ObservableAPI';

import { ProviderMappingsApiRequestFactory, ProviderMappingsApiResponseProcessor} from "../apis/ProviderMappingsApi";
export class PromiseProviderMappingsApi {
    private api: ObservableProviderMappingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProviderMappingsApiRequestFactory,
        responseProcessor?: ProviderMappingsApiResponseProcessor
    ) {
        this.api = new ObservableProviderMappingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk find provider to internal ID mappings by their provider ID and entity type.
     * @param mappingRequest Data entity provider name and array of mapping requests
     */
    public v2MappingsSearchPost(mappingRequest?: V2MappingsSearchPostRequest, _options?: Configuration): Promise<Array<V2MappingDto>> {
        const result = this.api.v2MappingsSearchPost(mappingRequest, _options);
        return result.toPromise();
    }


}



import { ObservableRefereesApi } from './ObservableAPI';

import { RefereesApiRequestFactory, RefereesApiResponseProcessor} from "../apis/RefereesApi";
export class PromiseRefereesApi {
    private api: ObservableRefereesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RefereesApiRequestFactory,
        responseProcessor?: RefereesApiResponseProcessor
    ) {
        this.api = new ObservableRefereesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List referees with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param seasonIds Filter referees which have refereed matches in the specified CSV season_ids
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, _options?: Configuration): Promise<RefereePageDto> {
        const result = this.api.v2RefereesGet(offset, limit, seasonIds, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Get referee by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2RefereesIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<RefereeDto> {
        const result = this.api.v2RefereesIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update referee information
     * @param id Unique identifier of the resource.
     * @param referee Referee information to save in persistance
     */
    public v2RefereesIdPut(id: string, referee?: RefereeEditDto, _options?: Configuration): Promise<RefereeDto> {
        const result = this.api.v2RefereesIdPut(id, referee, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created referee in storage
     * @param referee 
     */
    public v2RefereesPost(referee?: RefereeEditDto, _options?: Configuration): Promise<RefereeDto> {
        const result = this.api.v2RefereesPost(referee, _options);
        return result.toPromise();
    }


}



import { ObservableRoundsApi } from './ObservableAPI';

import { RoundsApiRequestFactory, RoundsApiResponseProcessor} from "../apis/RoundsApi";
export class PromiseRoundsApi {
    private api: ObservableRoundsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoundsApiRequestFactory,
        responseProcessor?: RoundsApiResponseProcessor
    ) {
        this.api = new ObservableRoundsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of rounds per season
     * @param seasonId Filter round types per a season ID
     * @param languageCode Returns translated response based on the language code
     */
    public v2RoundsGet(seasonId: number, languageCode?: string, _options?: Configuration): Promise<V2RoundTypes> {
        const result = this.api.v2RoundsGet(seasonId, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Get a list of rounds per stage
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2StagesIdRoundsGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2RoundTypes> {
        const result = this.api.v2StagesIdRoundsGet(id, languageCode, _options);
        return result.toPromise();
    }


}



import { ObservableSeasonApi } from './ObservableAPI';

import { SeasonApiRequestFactory, SeasonApiResponseProcessor} from "../apis/SeasonApi";
export class PromiseSeasonApi {
    private api: ObservableSeasonApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SeasonApiRequestFactory,
        responseProcessor?: SeasonApiResponseProcessor
    ) {
        this.api = new ObservableSeasonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the details of a season by season_id, or by tournament_id and active status
     * @param seasonId The ID of the season of interest
     * @param tournamentId The ID of the tournament whose active season is of interest
     * @param status Required only when the tournament_id parameter is provided
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsDetailsGet(seasonId?: string, tournamentId?: string, status?: 'CURRENT', languageCode?: string, _options?: Configuration): Promise<V2SeasonDetails> {
        const result = this.api.v2SeasonsDetailsGet(seasonId, tournamentId, status, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Get seasons by tournament_id, team_id and status
     * @param tournamentId Required only if no other parameters are provided
     * @param teamId Required only if no other paramenters are provided
     * @param status Required only if no other parameters are provided
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsGet(tournamentId?: string, teamId?: string, status?: 'ACTIVE', languageCode?: string, _options?: Configuration): Promise<V2SeasonList> {
        const result = this.api.v2SeasonsGet(tournamentId, teamId, status, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update an existing season
     * @param id Unique identifier of the resource.
     * @param name Season name
     */
    public v2SeasonsIdPut(id: string, name: V2TournamentSeasonUpdateInput, _options?: Configuration): Promise<V2Season> {
        const result = this.api.v2SeasonsIdPut(id, name, _options);
        return result.toPromise();
    }

    /**
     * List all stages for specific season
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2SeasonsIdStagesGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2SeasonStageCollection> {
        const result = this.api.v2SeasonsIdStagesGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Create or update multiple stages
     * @param id Unique identifier of the resource.
     * @param stages List of stages to be updated or created
     */
    public v2SeasonsIdStagesPost(id: string, stages: Array<V2SeasonStage>, _options?: Configuration): Promise<V2SeasonStageCollection> {
        const result = this.api.v2SeasonsIdStagesPost(id, stages, _options);
        return result.toPromise();
    }

    /**
     * Create a new season
     * @param season Season information
     */
    public v2SeasonsPost(season: V2TournamentSeasonInsertInput, _options?: Configuration): Promise<V2Season> {
        const result = this.api.v2SeasonsPost(season, _options);
        return result.toPromise();
    }

    /**
     * Permanently delete stage
     * @param id Unique identifier of the resource.
     */
    public v2StagesIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.v2StagesIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Set the current season as active and change all other seasons in the tournament to inactive
     * @param id Unique identifier of the resource.
     * @param seasonId Season unique identifier
     */
    public v2TournamentsIdSeasonsCurrentPatch(id: string, seasonId: V2TournamentSeasonStatusInput, _options?: Configuration): Promise<V2Season> {
        const result = this.api.v2TournamentsIdSeasonsCurrentPatch(id, seasonId, _options);
        return result.toPromise();
    }


}



import { ObservableStagesApi } from './ObservableAPI';

import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";
export class PromiseStagesApi {
    private api: ObservableStagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StagesApiRequestFactory,
        responseProcessor?: StagesApiResponseProcessor
    ) {
        this.api = new ObservableStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Listing for Stages resources
     * @param teamId Filter stages by a team which is participating in the stage
     * @param tournamentIds CSV list of tournament.id values to filter stages
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public stagesGet(teamId?: number, tournamentIds?: string, acceptLanguage?: string, _options?: Configuration): Promise<Array<StageDto>> {
        const result = this.api.stagesGet(teamId, tournamentIds, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Permanently delete group
     * @param id Unique identifier of the resource.
     */
    public v2GroupsIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.v2GroupsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * List all groups for specific stage
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2StagesIdGroupsGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2StageGroupCollection> {
        const result = this.api.v2StagesIdGroupsGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Create or update multiple groups
     * @param id Unique identifier of the resource.
     * @param groups List of groups to be updated or created
     */
    public v2StagesIdGroupsPost(id: string, groups: Array<V2StageGroup>, _options?: Configuration): Promise<V2StageGroupCollection> {
        const result = this.api.v2StagesIdGroupsPost(id, groups, _options);
        return result.toPromise();
    }

    /**
     * Replace teams in stage
     * @param id Unique identifier of the resource.
     * @param teamId List of team ids
     */
    public v2StagesIdTeamsPut(id: string, teamId: Array<V2StageTeamInput>, _options?: Configuration): Promise<void> {
        const result = this.api.v2StagesIdTeamsPut(id, teamId, _options);
        return result.toPromise();
    }


}



import { ObservableStandingRuleApi } from './ObservableAPI';

import { StandingRuleApiRequestFactory, StandingRuleApiResponseProcessor} from "../apis/StandingRuleApi";
export class PromiseStandingRuleApi {
    private api: ObservableStandingRuleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StandingRuleApiRequestFactory,
        responseProcessor?: StandingRuleApiResponseProcessor
    ) {
        this.api = new ObservableStandingRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available StandingRule objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public standingRulesGet(acceptLanguage?: string, _options?: Configuration): Promise<StandingRule> {
        const result = this.api.standingRulesGet(acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableStandingsApi } from './ObservableAPI';

import { StandingsApiRequestFactory, StandingsApiResponseProcessor} from "../apis/StandingsApi";
export class PromiseStandingsApi {
    private api: ObservableStandingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StandingsApiRequestFactory,
        responseProcessor?: StandingsApiResponseProcessor
    ) {
        this.api = new ObservableStandingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update a league standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public v2StandingsLeagueEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2LeagueStandingInput, _options?: Configuration): Promise<void> {
        const result = this.api.v2StandingsLeagueEntityIdPut(entity, id, standingEntries, _options);
        return result.toPromise();
    }

    /**
     * Attach standing rules to a league standing
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingRules list of rules for every rank
     */
    public v2StandingsLeagueEntityIdRulesPut(entity: 'season' | 'stage' | 'group', id: string, standingRules: V2StandingEntryRuleWrapper, _options?: Configuration): Promise<void> {
        const result = this.api.v2StandingsLeagueEntityIdRulesPut(entity, id, standingRules, _options);
        return result.toPromise();
    }

    /**
     * Update a topscorer standing table
     * @param entity type of entity to attach standing to
     * @param id Unique identifier of the resource.
     * @param standingEntries List of all entries for the standing
     */
    public v2StandingsTopscorerEntityIdPut(entity: 'season' | 'stage' | 'group', id: string, standingEntries: V2TopScorerStandingInput, _options?: Configuration): Promise<void> {
        const result = this.api.v2StandingsTopscorerEntityIdPut(entity, id, standingEntries, _options);
        return result.toPromise();
    }


}



import { ObservableTeamSquadApi } from './ObservableAPI';

import { TeamSquadApiRequestFactory, TeamSquadApiResponseProcessor} from "../apis/TeamSquadApi";
export class PromiseTeamSquadApi {
    private api: ObservableTeamSquadApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamSquadApiRequestFactory,
        responseProcessor?: TeamSquadApiResponseProcessor
    ) {
        this.api = new ObservableTeamSquadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get teams squad
     * @param id Unique identifier of the resource.
     * @param memberStatus 
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsIdSquadGet(id: string, memberStatus?: 'ALL' | 'ACTIVE' | 'INACTIVE', languageCode?: string, _options?: Configuration): Promise<V2TeamSquad> {
        const result = this.api.v2TeamsIdSquadGet(id, memberStatus, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update TeamSquad members
     * @param id Unique identifier of the resource.
     * @param squadMembers TeamSquad members to update. Null value for a property means no update
     */
    public v2TeamsIdSquadPatch(id: string, squadMembers: V2TeamSquadInput, _options?: Configuration): Promise<V2TeamSquad> {
        const result = this.api.v2TeamsIdSquadPatch(id, squadMembers, _options);
        return result.toPromise();
    }


}



import { ObservableTeamStatsApi } from './ObservableAPI';

import { TeamStatsApiRequestFactory, TeamStatsApiResponseProcessor} from "../apis/TeamStatsApi";
export class PromiseTeamStatsApi {
    private api: ObservableTeamStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamStatsApiRequestFactory,
        responseProcessor?: TeamStatsApiResponseProcessor
    ) {
        this.api = new ObservableTeamStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     */
    public eventTeamstatsGet(acceptLanguage?: string, lastUpdate?: Date, _options?: Configuration): Promise<Array<EventTeamStats>> {
        const result = this.api.eventTeamstatsGet(acceptLanguage, lastUpdate, _options);
        return result.toPromise();
    }

    /**
     * Get statistics for the performance of each team involved in the event
     * @param id Event.id for which team stats are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public eventsIdTeamstatsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<EventTeamStats>> {
        const result = this.api.eventsIdTeamstatsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableTeamsApi } from './ObservableAPI';

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class PromiseTeamsApi {
    private api: ObservableTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Teams for a specific Country.id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param national Filter teams for different types of national and non national
     */
    public countriesIdTeamsGet(id: string, acceptLanguage?: string, national?: '1' | '0' | 'true' | 'false', _options?: Configuration): Promise<Array<Team>> {
        const result = this.api.countriesIdTeamsGet(id, acceptLanguage, national, _options);
        return result.toPromise();
    }

    /**
     * Search all teams by parameters
     * @param name Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39;
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param maxResults Limit the number of results returned
     * @param countryId Filter teams just from the specified country
     */
    public teamsGet(name: string, acceptLanguage?: string, maxResults?: number, countryId?: number, _options?: Configuration): Promise<Array<Team>> {
        const result = this.api.teamsGet(name, acceptLanguage, maxResults, countryId, _options);
        return result.toPromise();
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
    public teamsIdEventsGet(id: string, acceptLanguage?: string, fromTime?: Date, toTime?: Date, direction?: 'asc' | 'desc', tournamentSeasonStageId?: number, _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.teamsIdEventsGet(id, acceptLanguage, fromTime, toTime, direction, tournamentSeasonStageId, _options);
        return result.toPromise();
    }

    /**
     * Get Team form information accross all tournaments
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Whether to include information about every event in the TeamForm response
     */
    public teamsIdFormGet(id: string, acceptLanguage?: string, expand?: 'events', _options?: Configuration): Promise<Array<TeamForm>> {
        const result = this.api.teamsIdFormGet(id, acceptLanguage, expand, _options);
        return result.toPromise();
    }

    /**
     * Get information about a specific Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param expand Specifies additional information to include with the Team response
     */
    public teamsIdGet(id: string, acceptLanguage?: string, expand?: 'form' | 'form.events' | 'form.events,next_event', _options?: Configuration): Promise<Team> {
        const result = this.api.teamsIdGet(id, acceptLanguage, expand, _options);
        return result.toPromise();
    }

    /**
     * Get the current squad for a Team
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group players by a specific property
     */
    public teamsIdPlayersGet(id: string, acceptLanguage?: string, groupBy?: 'position', _options?: Configuration): Promise<Array<TeamPlayer>> {
        const result = this.api.teamsIdPlayersGet(id, acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public teamsIdPlayersStatisticsGet(id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Promise<TeamPlayerSeasonStatistics> {
        const result = this.api.teamsIdPlayersStatisticsGet(id, acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get a list of TournamentSeasons for which Player Statistics are available
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public teamsIdPlayersStatisticsSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<Array<TournamentSeasonWithTournament>> {
        const result = this.api.teamsIdPlayersStatisticsSeasonsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get player statistics for the current season in the Team's League
     * @param seasonId Unique identifier of the TournamentSeason resource
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Group the response by a specific property
     */
    public teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId: number, id: string, acceptLanguage?: string, groupBy?: 'player.position', _options?: Configuration): Promise<TeamPlayerSeasonStatistics> {
        const result = this.api.teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId, id, acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get the statistics for the latest League the team participates in
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param standing Select whether to include a full league standing or just the team&#39;s position
     */
    public teamsIdStatisticsLeagueGet(id: string, acceptLanguage?: string, standing?: 'team' | 'full', _options?: Configuration): Promise<TeamSeasonStatistics> {
        const result = this.api.teamsIdStatisticsLeagueGet(id, acceptLanguage, standing, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<PartialTeam>> {
        const result = this.api.tournamentsSeasonsIdTeamsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<PartialTeam>> {
        const result = this.api.tournamentsSeasonsStagesIdTeamsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Manually insert team colors by team or event.
     * @param teamColorsDto Team shirt colors data
     */
    public v2TeamsColorsPost(teamColorsDto?: V2TeamColors, _options?: Configuration): Promise<V2TeamColors> {
        const result = this.api.v2TeamsColorsPost(teamColorsDto, _options);
        return result.toPromise();
    }

    /**
     * Get teams list
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsGet(offset: number, limit: number, languageCode?: string, _options?: Configuration): Promise<TeamPageDto> {
        const result = this.api.v2TeamsGet(offset, limit, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Get team by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2TeamsIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2TeamProfile> {
        const result = this.api.v2TeamsIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update Team information
     * @param id Unique identifier of the resource.
     * @param team Team information to save in persistance
     */
    public v2TeamsIdPut(id: string, team: TeamEditDto, _options?: Configuration): Promise<V2TeamProfile> {
        const result = this.api.v2TeamsIdPut(id, team, _options);
        return result.toPromise();
    }

    /**
     * Manually insert team.
     * @param teamEditDto TeamEditDto object
     */
    public v2TeamsPost(teamEditDto?: TeamEditDto, _options?: Configuration): Promise<V2TeamProfile> {
        const result = this.api.v2TeamsPost(teamEditDto, _options);
        return result.toPromise();
    }


}



import { ObservableTournamentGroupsApi } from './ObservableAPI';

import { TournamentGroupsApiRequestFactory, TournamentGroupsApiResponseProcessor} from "../apis/TournamentGroupsApi";
export class PromiseTournamentGroupsApi {
    private api: ObservableTournamentGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TournamentGroupsApiRequestFactory,
        responseProcessor?: TournamentGroupsApiResponseProcessor
    ) {
        this.api = new ObservableTournamentGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all tournaments for a given group name and their order
     * @param code Tournament group code
     */
    public v2TournamentsGroupsCodeGet(code: string, _options?: Configuration): Promise<V2TournamentGroupGetOutput> {
        const result = this.api.v2TournamentsGroupsCodeGet(code, _options);
        return result.toPromise();
    }

    /**
     * Update an existing tournament group
     * @param code Tournament group unique code
     * @param group Tournament group information
     */
    public v2TournamentsGroupsCodePut(code: string, group: V2TournamentGroupUpdateInput, _options?: Configuration): Promise<void> {
        const result = this.api.v2TournamentsGroupsCodePut(code, group, _options);
        return result.toPromise();
    }

    /**
     * @param code Client code
     * @param date Date in ISO 8601 format (Y-m-d)
     * @param matchIds Array of match ids
     */
    public v2TournamentsGroupsCodeSelectionDatePost(code: string, date: string, matchIds?: Array<V2TournamentGroupSelection>, _options?: Configuration): Promise<void> {
        const result = this.api.v2TournamentsGroupsCodeSelectionDatePost(code, date, matchIds, _options);
        return result.toPromise();
    }

    /**
     * List all tournament groups
     */
    public v2TournamentsGroupsGet(_options?: Configuration): Promise<V2TournamentGroupCollection> {
        const result = this.api.v2TournamentsGroupsGet(_options);
        return result.toPromise();
    }

    /**
     * Create a new tournament group
     * @param group Tournament group information
     */
    public v2TournamentsGroupsPost(group: V2TournamentGroupInsertInput, _options?: Configuration): Promise<void> {
        const result = this.api.v2TournamentsGroupsPost(group, _options);
        return result.toPromise();
    }


}



import { ObservableTournamentsApi } from './ObservableAPI';

import { TournamentsApiRequestFactory, TournamentsApiResponseProcessor} from "../apis/TournamentsApi";
export class PromiseTournamentsApi {
    private api: ObservableTournamentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TournamentsApiRequestFactory,
        responseProcessor?: TournamentsApiResponseProcessor
    ) {
        this.api = new ObservableTournamentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of available Tournament resources
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param countryId Get Tournaments from a specific Country.id
     * @param clientOrder Get Tournaments ordered for a specific client
     * @param expandClientSortorder Include extra information with Tournament response
     */
    public tournamentsGet(acceptLanguage?: string, countryId?: number, clientOrder?: 'sportalios', expandClientSortorder?: 'sportalios', _options?: Configuration): Promise<Array<Tournament>> {
        const result = this.api.tournamentsGet(acceptLanguage, countryId, clientOrder, expandClientSortorder, _options);
        return result.toPromise();
    }

    /**
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<TournamentWithSeasons> {
        const result = this.api.tournamentsIdGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of seasons for a given Tournament id
     * @param id Unique identifier of the resource.
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdSeasonsGet(id: string, acceptLanguage?: string, _options?: Configuration): Promise<Array<TournamentSeason>> {
        const result = this.api.tournamentsIdSeasonsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons
     * @param id Unique identifier of the Tournament resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsIdSeasonsLatestGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<TournamentSeasonWithStages> {
        const result = this.api.tournamentsIdSeasonsLatestGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a standing by red,yellow cards for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdCardlistGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<CardlistStandingData>> {
        const result = this.api.tournamentsSeasonsIdCardlistGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Events, for a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param groupBy Whether to group events by date
     */
    public tournamentsSeasonsIdEventsGet(id: number, acceptLanguage?: string, groupBy?: 'date', _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.tournamentsSeasonsIdEventsGet(id, acceptLanguage, groupBy, _options);
        return result.toPromise();
    }

    /**
     * Get information for a given TournamentSeason resource id.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<TournamentSeasonWithStages> {
        const result = this.api.tournamentsSeasonsIdGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeason
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<PartialTeam>> {
        const result = this.api.tournamentsSeasonsIdTeamsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of topscorers for a specific TournamentSeason resource.
     * @param id Unique identifier of the TournamentSeason resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsIdTopscorerGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<TopscorerStandingData>> {
        const result = this.api.tournamentsSeasonsIdTopscorerGet(id, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get all currently active tournament season stages
     */
    public tournamentsSeasonsStagesActiveGet(_options?: Configuration): Promise<Array<TournamentSeasonStage>> {
        const result = this.api.tournamentsSeasonsStagesActiveGet(_options);
        return result.toPromise();
    }

    /**
     * Get information for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesGroupsIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Promise<StageGroupWithStandingTournamentSeasonStage> {
        const result = this.api.tournamentsSeasonsStagesGroupsIdGet(id, expand, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get Standing for a StageGroup Resource
     * @param id Unique identifier of the StageGroup resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesGroupsIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Promise<Array<LeagueStandingData>> {
        const result = this.api.tournamentsSeasonsStagesGroupsIdStandingGet(id, expand, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param round Filter the event list by a specific round
     * @param sortDirection Sort results by date in ascending or descending order
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdEventsGet(id: number, round?: string, sortDirection?: 'asc' | 'desc', acceptLanguage?: string, _options?: Configuration): Promise<Array<EventsByDate>> {
        const result = this.api.tournamentsSeasonsStagesIdEventsGet(id, round, sortDirection, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get information for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdGet(id: number, expand?: 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events', acceptLanguage?: string, _options?: Configuration): Promise<TournamentSeasonStageWithStandingGroups> {
        const result = this.api.tournamentsSeasonsStagesIdGet(id, expand, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of rounds for a specific TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify what additional information to include with the response
     */
    public tournamentsSeasonsStagesIdRoundsGet(id: number, expand?: 'events', _options?: Configuration): Promise<Array<Round>> {
        const result = this.api.tournamentsSeasonsStagesIdRoundsGet(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Get Standing for a TournamentSeasonStage Resource
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param expand Specify additional information to include with the response
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdStandingGet(id: number, expand?: 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events', acceptLanguage?: string, _options?: Configuration): Promise<Array<LeagueStandingData>> {
        const result = this.api.tournamentsSeasonsStagesIdStandingGet(id, expand, acceptLanguage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Teams, which are participating in a given TournamentSeasonStage
     * @param id Unique identifier of the TournamentSeasonStage resource
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     */
    public tournamentsSeasonsStagesIdTeamsGet(id: number, acceptLanguage?: string, _options?: Configuration): Promise<Array<PartialTeam>> {
        const result = this.api.tournamentsSeasonsStagesIdTeamsGet(id, acceptLanguage, _options);
        return result.toPromise();
    }


}



import { ObservableTranslationsApi } from './ObservableAPI';

import { TranslationsApiRequestFactory, TranslationsApiResponseProcessor} from "../apis/TranslationsApi";
export class PromiseTranslationsApi {
    private api: ObservableTranslationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslationsApiRequestFactory,
        responseProcessor?: TranslationsApiResponseProcessor
    ) {
        this.api = new ObservableTranslationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all possible translation entities.
     */
    public v2TranslationsEntitiesGet(_options?: Configuration): Promise<Array<TranslationEntityDto>> {
        const result = this.api.v2TranslationsEntitiesGet(_options);
        return result.toPromise();
    }

    /**
     * Bulk Upsert translations by primary key
     * @param translations Array of translations
     */
    public v2TranslationsPost(translations?: Array<TranslationDto>, _options?: Configuration): Promise<TranslationDto> {
        const result = this.api.v2TranslationsPost(translations, _options);
        return result.toPromise();
    }

    /**
     * Bulk find in translations table and return matching entries by the unique translation key.
     * @param translationKeys Array of translationKeys
     */
    public v2TranslationsSearchPost(translationKeys?: Array<TranslationKeyDto>, _options?: Configuration): Promise<Array<TranslationDto>> {
        const result = this.api.v2TranslationsSearchPost(translationKeys, _options);
        return result.toPromise();
    }


}



import { ObservableVenuesApi } from './ObservableAPI';

import { VenuesApiRequestFactory, VenuesApiResponseProcessor} from "../apis/VenuesApi";
export class PromiseVenuesApi {
    private api: ObservableVenuesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VenuesApiRequestFactory,
        responseProcessor?: VenuesApiResponseProcessor
    ) {
        this.api = new ObservableVenuesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List venues with offset and limit parameters
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit Limit the number of results returned
     * @param seasonIds Filter venues which have hosted matches in the specified CSV season_ids
     * @param languageCode Returns translated response based on the language code
     */
    public v2VenuesGet(offset: number, limit: number, seasonIds?: string, languageCode?: string, _options?: Configuration): Promise<V2VenuesList> {
        const result = this.api.v2VenuesGet(offset, limit, seasonIds, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Get venue by id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     */
    public v2VenuesIdGet(id: string, languageCode?: string, _options?: Configuration): Promise<V2VenuesGetId> {
        const result = this.api.v2VenuesIdGet(id, languageCode, _options);
        return result.toPromise();
    }

    /**
     * Update venue information
     * @param id Unique identifier of the resource.
     * @param venue Venue information to save in persistance
     */
    public v2VenuesIdPut(id: string, venue?: V2PutVenues, _options?: Configuration): Promise<V2VenuesPut> {
        const result = this.api.v2VenuesIdPut(id, venue, _options);
        return result.toPromise();
    }

    /**
     * Store a newly created venue in storage
     * @param venue 
     */
    public v2VenuesPost(venue?: V2PostVenues, _options?: Configuration): Promise<V2Venues> {
        const result = this.api.v2VenuesPost(venue, _options);
        return result.toPromise();
    }


}



