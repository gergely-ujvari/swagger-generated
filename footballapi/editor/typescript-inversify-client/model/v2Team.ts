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
import { TeamSocialDto } from './teamSocialDto';
import { V2Country } from './v2Country';
import { V2VenuesGetId } from './v2VenuesGetId';


export interface V2Team { 
    id: string;
    name: string;
    threeLetterCode?: string;
    shortName?: string;
    type: V2Team.TypeEnum;
    country: V2Country;
    venue?: V2VenuesGetId;
    social?: TeamSocialDto;
    founded?: number;
    gender?: V2Team.GenderEnum;
}
export namespace V2Team {
    export type TypeEnum = 'PLACEHOLDER' | 'NATIONAL' | 'CLUB';
    export const TypeEnum = {
        PLACEHOLDER: 'PLACEHOLDER' as TypeEnum,
        NATIONAL: 'NATIONAL' as TypeEnum,
        CLUB: 'CLUB' as TypeEnum
    }
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    }
}