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
import { V2KnockoutMatch } from './v2KnockoutMatch';
import { V2KnockoutTeam } from './v2KnockoutTeam';

export interface V2KnockoutGroup { 
    id?: string;
    order?: number;
    teams?: Array<V2KnockoutTeam>;
    matches?: Array<V2KnockoutMatch>;
    childObjectId?: string;
}