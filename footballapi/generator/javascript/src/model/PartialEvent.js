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
import {PartialTeam} from './PartialTeam';

/**
 * The PartialEvent model module.
 * @module model/PartialEvent
 * @version 0.0.1
 */
export class PartialEvent {
  /**
   * Constructs a new <code>PartialEvent</code>.
   * @alias module:model/PartialEvent
   * @class
   * @param id {Number} Unique identifier
   * @param eventStatus {module:model/EventStatus} 
   * @param startTime {Date} Timestamp when the event is scheduled to start
   * @param goalHome {Number} Goals scored by the home team
   * @param goalAway {Number} Goals scored by the away team
   * @param homeTeam {module:model/PartialTeam} 
   * @param awayTeam {module:model/PartialTeam} 
   */
  constructor(id, eventStatus, startTime, goalHome, goalAway, homeTeam, awayTeam) {
    this.id = id;
    this.eventStatus = eventStatus;
    this.startTime = startTime;
    this.goalHome = goalHome;
    this.goalAway = goalAway;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  /**
   * Constructs a <code>PartialEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialEvent} obj Optional instance to populate.
   * @return {module:model/PartialEvent} The populated <code>PartialEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartialEvent();
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
 * Unique identifier
 * @member {Number} id
 */
PartialEvent.prototype.id = undefined;

/**
 * @member {module:model/EventStatus} eventStatus
 */
PartialEvent.prototype.eventStatus = undefined;

/**
 * Timestamp when the event is scheduled to start
 * @member {Date} startTime
 */
PartialEvent.prototype.startTime = undefined;

/**
 * Goals scored by the home team
 * @member {Number} goalHome
 */
PartialEvent.prototype.goalHome = undefined;

/**
 * Goals scored by the away team
 * @member {Number} goalAway
 */
PartialEvent.prototype.goalAway = undefined;

/**
 * Penalties scored by the home team. Available only if the game goes to penalty shootouts
 * @member {Number} penaltyHome
 */
PartialEvent.prototype.penaltyHome = undefined;

/**
 * Penalties scored by the away team. Available only if the game goes to penalty shootouts
 * @member {Number} penaltyAway
 */
PartialEvent.prototype.penaltyAway = undefined;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @member {Number} aggHome
 */
PartialEvent.prototype.aggHome = undefined;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @member {Number} aggAway
 */
PartialEvent.prototype.aggAway = undefined;

/**
 * @member {module:model/PartialTeam} homeTeam
 */
PartialEvent.prototype.homeTeam = undefined;

/**
 * @member {module:model/PartialTeam} awayTeam
 */
PartialEvent.prototype.awayTeam = undefined;

