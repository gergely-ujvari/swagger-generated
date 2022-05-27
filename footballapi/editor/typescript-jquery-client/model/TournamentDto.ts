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

/**
 * Resource representing a Football Tournament such as A Grupa, Premier League, Champions League, World Cup, etc. Does not represent a specific season such as Premier League 2015/2016.
 */
export interface TournamentDto {
    id: number;

    name: string;

    country: models.V1CountryDto;

    regionalLeague?: boolean;

    urlLogo?: string;

}