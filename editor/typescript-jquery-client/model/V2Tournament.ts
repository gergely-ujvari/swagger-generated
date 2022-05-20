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

export interface V2Tournament {
    id?: string;

    name?: string;

    country?: models.V2Country;

    gender?: V2Tournament.GenderEnum;

    type?: V2Tournament.TypeEnum;

    region?: V2Tournament.RegionEnum;

}
export namespace V2Tournament {
    export enum GenderEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE'
    }
    export enum TypeEnum {
        CUP = <any> 'CUP',
        LEAGUE = <any> 'LEAGUE'
    }
    export enum RegionEnum {
        DOMESTIC = <any> 'DOMESTIC',
        INTERNATIONAL = <any> 'INTERNATIONAL'
    }
}
