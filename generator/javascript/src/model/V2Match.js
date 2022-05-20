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
import {V2Group} from './V2Group';
import {V2MatchMinute} from './V2MatchMinute';
import {V2MatchReferee} from './V2MatchReferee';
import {V2MatchRound} from './V2MatchRound';
import {V2MatchScore} from './V2MatchScore';
import {V2MatchStage} from './V2MatchStage';
import {V2MatchStatus} from './V2MatchStatus';
import {V2MatchTeamDto} from './V2MatchTeamDto';
import {V2MatchVenue} from './V2MatchVenue';
import {V2Season} from './V2Season';

/**
 * The V2Match model module.
 * @module model/V2Match
 * @version 0.0.1
 */
export class V2Match {
  /**
   * Constructs a new <code>V2Match</code>.
   * @alias module:model/V2Match
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2Match</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2Match} obj Optional instance to populate.
   * @return {module:model/V2Match} The populated <code>V2Match</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2Match();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = V2MatchStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('kickoff_time'))
        obj.kickoffTime = ApiClient.convertToType(data['kickoff_time'], 'Date');
      if (data.hasOwnProperty('stage'))
        obj.stage = V2MatchStage.constructFromObject(data['stage']);
      if (data.hasOwnProperty('season'))
        obj.season = V2Season.constructFromObject(data['season']);
      if (data.hasOwnProperty('group'))
        obj.group = V2Group.constructFromObject(data['group']);
      if (data.hasOwnProperty('round'))
        obj.round = V2MatchRound.constructFromObject(data['round']);
      if (data.hasOwnProperty('home_team'))
        obj.homeTeam = V2MatchTeamDto.constructFromObject(data['home_team']);
      if (data.hasOwnProperty('away_team'))
        obj.awayTeam = V2MatchTeamDto.constructFromObject(data['away_team']);
      if (data.hasOwnProperty('referees'))
        obj.referees = ApiClient.convertToType(data['referees'], [V2MatchReferee]);
      if (data.hasOwnProperty('venue'))
        obj.venue = V2MatchVenue.constructFromObject(data['venue']);
      if (data.hasOwnProperty('spectators'))
        obj.spectators = ApiClient.convertToType(data['spectators'], 'Number');
      if (data.hasOwnProperty('coverage'))
        obj.coverage = ApiClient.convertToType(data['coverage'], 'String');
      if (data.hasOwnProperty('minute'))
        obj.minute = V2MatchMinute.constructFromObject(data['minute']);
      if (data.hasOwnProperty('phase_started_at'))
        obj.phaseStartedAt = ApiClient.convertToType(data['phase_started_at'], 'Date');
      if (data.hasOwnProperty('finished_at'))
        obj.finishedAt = ApiClient.convertToType(data['finished_at'], 'Date');
      if (data.hasOwnProperty('score'))
        obj.score = V2MatchScore.constructFromObject(data['score']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2Match.prototype.id = undefined;

/**
 * @member {module:model/V2MatchStatus} status
 */
V2Match.prototype.status = undefined;

/**
 * @member {Date} kickoffTime
 */
V2Match.prototype.kickoffTime = undefined;

/**
 * @member {module:model/V2MatchStage} stage
 */
V2Match.prototype.stage = undefined;

/**
 * @member {module:model/V2Season} season
 */
V2Match.prototype.season = undefined;

/**
 * @member {module:model/V2Group} group
 */
V2Match.prototype.group = undefined;

/**
 * @member {module:model/V2MatchRound} round
 */
V2Match.prototype.round = undefined;

/**
 * @member {module:model/V2MatchTeamDto} homeTeam
 */
V2Match.prototype.homeTeam = undefined;

/**
 * @member {module:model/V2MatchTeamDto} awayTeam
 */
V2Match.prototype.awayTeam = undefined;

/**
 * @member {Array.<module:model/V2MatchReferee>} referees
 */
V2Match.prototype.referees = undefined;

/**
 * @member {module:model/V2MatchVenue} venue
 */
V2Match.prototype.venue = undefined;

/**
 * @member {Number} spectators
 */
V2Match.prototype.spectators = undefined;

/**
 * Allowed values for the <code>coverage</code> property.
 * @enum {String}
 * @readonly
 */
V2Match.CoverageEnum = {
  /**
   * value: "LIVE"
   * @const
   */
  LIVE: "LIVE",

  /**
   * value: "NOT_LIVE"
   * @const
   */
  NOT_LIVE: "NOT_LIVE",

  /**
   * value: "UNKNOWN"
   * @const
   */
  UNKNOWN: "UNKNOWN"
};
/**
 * @member {module:model/V2Match.CoverageEnum} coverage
 */
V2Match.prototype.coverage = undefined;

/**
 * @member {module:model/V2MatchMinute} minute
 */
V2Match.prototype.minute = undefined;

/**
 * @member {Date} phaseStartedAt
 */
V2Match.prototype.phaseStartedAt = undefined;

/**
 * @member {Date} finishedAt
 */
V2Match.prototype.finishedAt = undefined;

/**
 * @member {module:model/V2MatchScore} score
 */
V2Match.prototype.score = undefined;

