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
import { V2Coach } from './v2Coach';
import { V2Country } from './v2Country';
import { V2President } from './v2President';
import { V2Season } from './v2Season';
import { V2TeamColorsColors } from './v2TeamColorsColors';
import { V2VenuesGetId } from './v2VenuesGetId';

export interface V2TeamProfile { 
    id?: string;
    name?: string;
    threeLetterCode?: string;
    shortName?: string;
    type?: string;
    founded?: number;
    country?: V2Country;
    venue?: V2VenuesGetId;
    social?: TeamSocialDto;
    coach?: V2Coach;
    president?: V2President;
    gender?: V2TeamProfile.GenderEnum;
    activeSeasons?: Array<V2Season>;
    shirtColors?: Array<V2TeamColorsColors>;
}
export namespace V2TeamProfile {
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    };
}