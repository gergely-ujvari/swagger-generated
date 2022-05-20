import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssetsService } from './api/assets.service';
import { BlacklistService } from './api/blacklist.service';
import { CitiesService } from './api/cities.service';
import { CoachesService } from './api/coaches.service';
import { CountriesService } from './api/countries.service';
import { EventIncidentsService } from './api/eventIncidents.service';
import { EventPlayerTypeService } from './api/eventPlayerType.service';
import { EventStatusService } from './api/eventStatus.service';
import { EventsService } from './api/events.service';
import { KnockoutSchemeService } from './api/knockoutScheme.service';
import { LanguagesService } from './api/languages.service';
import { LineupsService } from './api/lineups.service';
import { MappingsService } from './api/mappings.service';
import { MatchEventsService } from './api/matchEvents.service';
import { MatchesService } from './api/matches.service';
import { OddsService } from './api/odds.service';
import { PlayerStatisticService } from './api/playerStatistic.service';
import { PlayersService } from './api/players.service';
import { PresidentsService } from './api/presidents.service';
import { ProviderMappingsService } from './api/providerMappings.service';
import { RefereesService } from './api/referees.service';
import { RoundsService } from './api/rounds.service';
import { SeasonService } from './api/season.service';
import { StagesService } from './api/stages.service';
import { StandingRuleService } from './api/standingRule.service';
import { StandingsService } from './api/standings.service';
import { TeamSquadService } from './api/teamSquad.service';
import { TeamStatsService } from './api/teamStats.service';
import { TeamsService } from './api/teams.service';
import { TournamentGroupsService } from './api/tournamentGroups.service';
import { TournamentsService } from './api/tournaments.service';
import { TranslationsService } from './api/translations.service';
import { VenuesService } from './api/venues.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AssetsService,
    BlacklistService,
    CitiesService,
    CoachesService,
    CountriesService,
    EventIncidentsService,
    EventPlayerTypeService,
    EventStatusService,
    EventsService,
    KnockoutSchemeService,
    LanguagesService,
    LineupsService,
    MappingsService,
    MatchEventsService,
    MatchesService,
    OddsService,
    PlayerStatisticService,
    PlayersService,
    PresidentsService,
    ProviderMappingsService,
    RefereesService,
    RoundsService,
    SeasonService,
    StagesService,
    StandingRuleService,
    StandingsService,
    TeamSquadService,
    TeamStatsService,
    TeamsService,
    TournamentGroupsService,
    TournamentsService,
    TranslationsService,
    VenuesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
