/*
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {EventStatus} from './EventStatus';
import {PartialPerson} from './PartialPerson';
import {PartialTeam} from './PartialTeam';
import {PartialTournamentSeasonStage} from './PartialTournamentSeasonStage';
import {StageGroup} from './StageGroup';
import {TeamScore} from './TeamScore';
import {Venue} from './Venue';

/**
 * The Event model module.
 * @module model/Event
 * @version 0.0.1
 */
export class Event {
  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   * @param tournamentSeasonStage {module:model/PartialTournamentSeasonStage} 
   * @param id {Number} Unique identifier
   * @param eventStatus {module:model/EventStatus} 
   * @param startTime {Date} Timestamp when the event is scheduled to start
   * @param homeTeam {module:model/PartialTeam} 
   * @param awayTeam {module:model/PartialTeam} 
   */
  constructor(tournamentSeasonStage, id, eventStatus, startTime, homeTeam, awayTeam) {
    this.tournamentSeasonStage = tournamentSeasonStage;
    this.id = id;
    this.eventStatus = eventStatus;
    this.startTime = startTime;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Event();
      if (data.hasOwnProperty('spectators'))
        obj.spectators = ApiClient.convertToType(data['spectators'], 'Number');
      if (data.hasOwnProperty('tournament_season_stage'))
        obj.tournamentSeasonStage = PartialTournamentSeasonStage.constructFromObject(data['tournament_season_stage']);
      if (data.hasOwnProperty('minute'))
        obj.minute = ApiClient.convertToType(data['minute'], 'Number');
      if (data.hasOwnProperty('stage_group'))
        obj.stageGroup = StageGroup.constructFromObject(data['stage_group']);
      if (data.hasOwnProperty('referee'))
        obj.referee = PartialPerson.constructFromObject(data['referee']);
      if (data.hasOwnProperty('venue'))
        obj.venue = Venue.constructFromObject(data['venue']);
      if (data.hasOwnProperty('incidents'))
        obj.incidents = ApiClient.convertToType(data['incidents'], 'Number');
      if (data.hasOwnProperty('lineup_available'))
        obj.lineupAvailable = ApiClient.convertToType(data['lineup_available'], 'Boolean');
      if (data.hasOwnProperty('live_updates'))
        obj.liveUpdates = ApiClient.convertToType(data['live_updates'], 'Boolean');
      if (data.hasOwnProperty('teamstats_available'))
        obj.teamstatsAvailable = ApiClient.convertToType(data['teamstats_available'], 'Boolean');
      if (data.hasOwnProperty('home_score'))
        obj.homeScore = TeamScore.constructFromObject(data['home_score']);
      if (data.hasOwnProperty('away_score'))
        obj.awayScore = TeamScore.constructFromObject(data['away_score']);
      if (data.hasOwnProperty('started_at'))
        obj.startedAt = ApiClient.convertToType(data['started_at'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('event_status'))
        obj.eventStatus = EventStatus.constructFromObject(data['event_status']);
      if (data.hasOwnProperty('start_time'))
        obj.startTime = ApiClient.convertToType(data['start_time'], 'Date');
      if (data.hasOwnProperty('goal_home'))
        obj.goalHome = ApiClient.convertToType(data['goal_home'], 'Number');
      if (data.hasOwnProperty('goal_away'))
        obj.goalAway = ApiClient.convertToType(data['goal_away'], 'Number');
      if (data.hasOwnProperty('penalty_home'))
        obj.penaltyHome = ApiClient.convertToType(data['penalty_home'], 'Number');
      if (data.hasOwnProperty('penalty_away'))
        obj.penaltyAway = ApiClient.convertToType(data['penalty_away'], 'Number');
      if (data.hasOwnProperty('agg_home'))
        obj.aggHome = ApiClient.convertToType(data['agg_home'], 'Number');
      if (data.hasOwnProperty('agg_away'))
        obj.aggAway = ApiClient.convertToType(data['agg_away'], 'Number');
      if (data.hasOwnProperty('home_team'))
        obj.homeTeam = PartialTeam.constructFromObject(data['home_team']);
      if (data.hasOwnProperty('away_team'))
        obj.awayTeam = PartialTeam.constructFromObject(data['away_team']);
    }
    return obj;
  }
}

/**
 * Number of spectators at the event
 * @member {Number} spectators
 */
Event.prototype.spectators = undefined;

/**
 * @member {module:model/PartialTournamentSeasonStage} tournamentSeasonStage
 */
Event.prototype.tournamentSeasonStage = undefined;

/**
 * Live minute ticker. Only available if the event_status.type is 'inprogress'
 * @member {Number} minute
 */
Event.prototype.minute = undefined;

/**
 * @member {module:model/StageGroup} stageGroup
 */
Event.prototype.stageGroup = undefined;

/**
 * @member {module:model/PartialPerson} referee
 */
Event.prototype.referee = undefined;

/**
 * @member {module:model/Venue} venue
 */
Event.prototype.venue = undefined;

/**
 * Number of incidents which have occured in the Event (goals, red cards, yellow cards, etc).
 * @member {Number} incidents
 */
Event.prototype.incidents = undefined;

/**
 * Indicates whether player lineup information is available or not
 * @member {Boolean} lineupAvailable
 */
Event.prototype.lineupAvailable = undefined;

/**
 * Indicates whether the event has livescore updates. If false the event will be updated after FT.
 * @member {Boolean} liveUpdates
 */
Event.prototype.liveUpdates = undefined;

/**
 * Indicates whether teamstats are available for this event
 * @member {Boolean} teamstatsAvailable
 */
Event.prototype.teamstatsAvailable = undefined;

/**
 * @member {module:model/TeamScore} homeScore
 */
Event.prototype.homeScore = undefined;

/**
 * @member {module:model/TeamScore} awayScore
 */
Event.prototype.awayScore = undefined;

/**
 * timestamp when the current phase (1st_half, 2nd_half, et, etc) has started. Can be used for calculating the minute ticker
 * @member {Date} startedAt
 */
Event.prototype.startedAt = undefined;

/**
 * Unique identifier
 * @member {Number} id
 */
Event.prototype.id = undefined;

/**
 * @member {module:model/EventStatus} eventStatus
 */
Event.prototype.eventStatus = undefined;

/**
 * Timestamp when the event is scheduled to start
 * @member {Date} startTime
 */
Event.prototype.startTime = undefined;

/**
 * Goals scored by the home team
 * @member {Number} goalHome
 */
Event.prototype.goalHome = undefined;

/**
 * Goals scored by the away team
 * @member {Number} goalAway
 */
Event.prototype.goalAway = undefined;

/**
 * Penalties scored by the home team. Available only if the game goes to penalty shootouts
 * @member {Number} penaltyHome
 */
Event.prototype.penaltyHome = undefined;

/**
 * Penalties scored by the away team. Available only if the game goes to penalty shootouts
 * @member {Number} penaltyAway
 */
Event.prototype.penaltyAway = undefined;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @member {Number} aggHome
 */
Event.prototype.aggHome = undefined;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @member {Number} aggAway
 */
Event.prototype.aggAway = undefined;

/**
 * @member {module:model/PartialTeam} homeTeam
 */
Event.prototype.homeTeam = undefined;

/**
 * @member {module:model/PartialTeam} awayTeam
 */
Event.prototype.awayTeam = undefined;
