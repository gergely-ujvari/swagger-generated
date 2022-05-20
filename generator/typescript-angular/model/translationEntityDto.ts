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

export interface TranslationEntityDto { 
    entity?: TranslationEntityDto.EntityEnum;
}
export namespace TranslationEntityDto {
    export type EntityEnum = 'LINEUP_PLAYER_TYPE' | 'COACH' | 'VENUE' | 'TOURNAMENT' | 'TEAM' | 'COUNTRY' | 'MATCH_STATUS' | 'STAGE' | 'PLAYER' | 'REFEREE' | 'CITY' | 'PRESIDENT' | 'STANDING_RULE' | 'GROUP' | 'SEASON' | 'ROUND_TYPE';
    export const EntityEnum = {
        LINEUPPLAYERTYPE: 'LINEUP_PLAYER_TYPE' as EntityEnum,
        COACH: 'COACH' as EntityEnum,
        VENUE: 'VENUE' as EntityEnum,
        TOURNAMENT: 'TOURNAMENT' as EntityEnum,
        TEAM: 'TEAM' as EntityEnum,
        COUNTRY: 'COUNTRY' as EntityEnum,
        MATCHSTATUS: 'MATCH_STATUS' as EntityEnum,
        STAGE: 'STAGE' as EntityEnum,
        PLAYER: 'PLAYER' as EntityEnum,
        REFEREE: 'REFEREE' as EntityEnum,
        CITY: 'CITY' as EntityEnum,
        PRESIDENT: 'PRESIDENT' as EntityEnum,
        STANDINGRULE: 'STANDING_RULE' as EntityEnum,
        GROUP: 'GROUP' as EntityEnum,
        SEASON: 'SEASON' as EntityEnum,
        ROUNDTYPE: 'ROUND_TYPE' as EntityEnum
    };
}