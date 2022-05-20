/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export { Api } from './Api';
export { AuthStorage } from './AuthStorage';
export { AssetsApi } from './AssetsApi';
export { BlacklistApi } from './BlacklistApi';
export { CitiesApi } from './CitiesApi';
export { CoachesApi } from './CoachesApi';
export { CountriesApi } from './CountriesApi';
export { EventIncidentsApi } from './EventIncidentsApi';
export { EventPlayerTypeApi } from './EventPlayerTypeApi';
export { EventStatusApi } from './EventStatusApi';
export { EventsApi } from './EventsApi';
export { KnockoutSchemeApi } from './KnockoutSchemeApi';
export { LanguagesApi } from './LanguagesApi';
export { LineupsApi } from './LineupsApi';
export { MappingsApi } from './MappingsApi';
export { MatchEventsApi } from './MatchEventsApi';
export { MatchesApi } from './MatchesApi';
export { OddsApi } from './OddsApi';
export { PlayerStatisticApi } from './PlayerStatisticApi';
export { PlayersApi } from './PlayersApi';
export { PresidentsApi } from './PresidentsApi';
export { ProviderMappingsApi } from './ProviderMappingsApi';
export { RefereesApi } from './RefereesApi';
export { RoundsApi } from './RoundsApi';
export { SeasonApi } from './SeasonApi';
export { StagesApi } from './StagesApi';
export { StandingRuleApi } from './StandingRuleApi';
export { StandingsApi } from './StandingsApi';
export { TeamSquadApi } from './TeamSquadApi';
export { TeamStatsApi } from './TeamStatsApi';
export { TeamsApi } from './TeamsApi';
export { TournamentGroupsApi } from './TournamentGroupsApi';
export { TournamentsApi } from './TournamentsApi';
export { TranslationsApi } from './TranslationsApi';
export { VenuesApi } from './VenuesApi';
export {
  BasicPlayerStats,
  BlacklistDto,
  BlacklistKeyDto,
  CardlistStandingData,
  CityDto,
  CityEditDto,
  Coach,
  CoachDto,
  CoachEditDto,
  CoachPageDto,
  Country,
  CountryDto,
  Dto,
  Event,
  EventIncident,
  EventPlayer,
  EventPlayerSubOn,
  EventPlayerType,
  EventStatus,
  EventTeamStats,
  EventsByDate,
  LanguageDto,
  LeagueStandingData,
  Lineup,
  ListVenueDto,
  LiveCommentaryOutputDto,
  NotFoundError,
  Odd,
  OddProvider,
  OutputDto,
  PageMetaDto,
  PartialEvent,
  PartialPerson,
  PartialTeam,
  PartialTeamWithForm,
  PartialTournamentSeasonStage,
  Player,
  PlayerDto,
  PlayerEditDto,
  PlayerEditSocialDto,
  PlayerPageDto,
  PlayerProfile,
  PlayerProfileDto,
  PlayerStatisticItem,
  PlayerStatistics,
  PlayerStatsBasic,
  PlayerStatsExtended,
  PlayerTeam,
  RefereeDto,
  RefereeEditDto,
  RefereePageDto,
  Round,
  SeasonDto,
  StageDto,
  StageGroup,
  StageGroupWithStanding,
  StageGroupWithStandingTournamentSeasonStage,
  StandingData,
  StandingRule,
  Team,
  TeamEditDto,
  TeamForm,
  TeamLineup,
  TeamPageDto,
  TeamPlayer,
  TeamPlayerData,
  TeamPlayerSeasonStatistics,
  TeamPlayerStatistics,
  TeamScore,
  TeamSeasonStatistics,
  TeamSocialDto,
  TeamStatistics,
  TopscorerStandingData,
  Tournament,
  TournamentDto,
  TournamentItemDto,
  TournamentSeason,
  TournamentSeasonStage,
  TournamentSeasonStageWithStandingGroups,
  TournamentSeasonWithStages,
  TournamentSeasonWithTournament,
  TournamentWithSeasons,
  TranslationContentDto,
  TranslationDto,
  TranslationEntityDto,
  TranslationKeyDto,
  V1CountryDto,
  V2ActiveClubsInput,
  V2ActiveTeamInput,
  V2Asset,
  V2AssetCollection,
  V2AssetDeleteInput,
  V2AssetInput,
  V2City,
  V2Coach,
  V2Country,
  V2Group,
  V2KnockoutEdgeRound,
  V2KnockoutGroup,
  V2KnockoutMatch,
  V2KnockoutRound,
  V2KnockoutScheme,
  V2KnockoutTeam,
  V2LeagueEntryInput,
  V2LeagueStandingInput,
  V2Lineup,
  V2LineupInput,
  V2LineupPlayerDto,
  V2LineupPlayerInput,
  V2LineupTeamDto,
  V2LineupTeamInput,
  V2MappingDto,
  V2MappingRequestDto,
  V2MappingRequestsDto,
  V2MappingsDto,
  V2Match,
  V2MatchEvent,
  V2MatchEventInput,
  V2MatchEventInputWrapper,
  V2MatchEventProfile,
  V2MatchInput,
  V2MatchMinute,
  V2MatchReferee,
  V2MatchRefereeInput,
  V2MatchRound,
  V2MatchScore,
  V2MatchScoreInput,
  V2MatchStage,
  V2MatchStatus,
  V2MatchTeamDto,
  V2MatchVenue,
  V2Matches,
  V2MatchesLivescore,
  V2Player,
  V2PlayerActiveClub,
  V2PlayerProfile,
  V2PlayerSeasonStatisticOutput,
  V2PlayerSeasonStatisticOutputCollection,
  V2PlayerStatisticInput,
  V2PlayerStatisticOutput,
  V2PostVenues,
  V2President,
  V2PresidentInput,
  V2PresidentUpdate,
  V2PutVenues,
  V2RoundTypes,
  V2RoundWithStatus,
  V2Season,
  V2SeasonDetails,
  V2SeasonList,
  V2SeasonStage,
  V2SeasonStageCollection,
  V2SquadPlayer,
  V2SquadPlayerInput,
  V2StageDetails,
  V2StageGroup,
  V2StageGroupCollection,
  V2StageTeamInput,
  V2StandingEntryRuleInput,
  V2StandingEntryRuleWrapper,
  V2StatisticItem,
  V2Team,
  V2TeamColors,
  V2TeamProfile,
  V2TeamScore,
  V2TeamScoreInput,
  V2TeamSquad,
  V2TeamSquadInput,
  V2TopScorerEntryInput,
  V2TopScorerStandingInput,
  V2Tournament,
  V2TournamentGroupCollection,
  V2TournamentGroupGetOutput,
  V2TournamentGroupInsertInput,
  V2TournamentGroupSelection,
  V2TournamentGroupUpdateInput,
  V2TournamentItemOutput,
  V2TournamentSeasonInsertInput,
  V2TournamentSeasonStatusInput,
  V2TournamentSeasonUpdateInput,
  V2Venues,
  V2VenuesGetId,
  V2VenuesList,
  V2VenuesPut,
  Venue,
  VenueDto,
  VenueEditDto,
  VenuePageDto,
  VenueProfileDto,
} from './models';
