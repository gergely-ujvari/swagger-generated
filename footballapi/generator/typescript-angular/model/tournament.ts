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
import { Country } from './country';

/**
 * Resource representing a Football Tournament such as A Grupa, Premier League, Champions League, World Cup, etc. Does not represent a specific season such as Premier League 2015/2016.
 */
export interface Tournament { 
    /**
     * Unique Resource identifier of the Tournament
     */
    id: number;
    /**
     * Human readable name of the Tournament
     */
    name: string;
    country: Country;
    /**
     * Whether or not the Tournament is a regional league such as the La Liga, A PFG, EPL.
     */
    regionalLeague?: boolean;
    /**
     * Represents the order position in a custom client based sorted list
     */
    clientSortorder?: number;
    urlLogo?: string;
    /**
     * Shows if the tournament is Cup or a League
     */
    type?: Tournament.TypeEnum;
    /**
     * Shows if the the teams in the tournament are Male or Female
     */
    gender?: Tournament.GenderEnum;
    /**
     * Shows if the tournament is Regional or International
     */
    region?: Tournament.RegionEnum;
}
export namespace Tournament {
    export type TypeEnum = 'CUP' | 'LEAGUE';
    export const TypeEnum = {
        CUP: 'CUP' as TypeEnum,
        LEAGUE: 'LEAGUE' as TypeEnum
    };
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    };
    export type RegionEnum = 'DOMESTIC' | 'INTERNATIONAL';
    export const RegionEnum = {
        DOMESTIC: 'DOMESTIC' as RegionEnum,
        INTERNATIONAL: 'INTERNATIONAL' as RegionEnum
    };
}