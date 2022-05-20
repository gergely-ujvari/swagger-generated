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

export interface V2TeamProfile {
    "id"?: string;
    "name"?: string;
    "threeLetterCode"?: string;
    "shortName"?: string;
    "type"?: string;
    "founded"?: number;
    "country"?: models.V2Country;
    "venue"?: models.V2VenuesGetId;
    "social"?: models.TeamSocialDto;
    "coach"?: models.V2Coach;
    "president"?: models.V2President;
    "gender"?: V2TeamProfile.GenderEnum;
    "activeSeasons"?: Array<models.V2Season>;
    "shirtColors"?: Array<any>;
}

export namespace V2TeamProfile {
    export enum GenderEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE'
    }
}