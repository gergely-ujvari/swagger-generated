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

export interface V2TopScorerEntryInput { 
    teamId?: string;
    playerId?: string;
    rank?: number;
    goals?: number;
    played?: number;
    assists?: number;
    scoredFirst?: number;
    minutes?: number;
    penalties?: number;
    yellowCards?: number;
    redCards?: number;
}