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

import * as models from './models';

export interface V2MatchScore {
    "total"?: models.V2TeamScore;
    "halfTime"?: models.V2TeamScore;
    "regularTime"?: models.V2TeamScore;
    "extraTime"?: models.V2TeamScore;
    "penaltyShootout"?: models.V2TeamScore;
    "aggregate"?: models.V2TeamScore;
}

