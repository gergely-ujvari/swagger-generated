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
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from '../IHttpClient';
import { inject, injectable } from 'inversify';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { Headers } from '../Headers';
import HttpResponse from '../HttpResponse';

import { Lineup } from '../model/lineup';
import { NotFoundError } from '../model/notFoundError';
import { V2Lineup } from '../model/v2Lineup';
import { V2LineupInput } from '../model/v2LineupInput';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class LineupsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get lineup information. Includes players, formation and coach
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter lineups which have updates only after the specified time
     
     */
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'body', headers?: Headers): Observable<Array<Lineup>>;
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Lineup>>>;
    public lineupsGet(acceptLanguage?: string, lastUpdate?: Date, observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (lastUpdate !== undefined) {
           queryParameters.push('lastUpdate='+encodeURIComponent(<any>lastUpdate.toISOString()));
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Lineup>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/lineups?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get lineups by match id
     * @param id Unique identifier of the resource.
     * @param languageCode Returns translated response based on the language code
     
     */
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe?: 'body', headers?: Headers): Observable<V2Lineup>;
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2Lineup>>;
    public v2MatchesIdLineupsGet(id: string, languageCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsGet.');
        }

        let queryParameters: string[] = [];
        if (languageCode !== undefined) {
            queryParameters.push('languageCode='+encodeURIComponent(String(languageCode)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<V2Lineup>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/matches/${encodeURIComponent(String(id))}/lineups?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Update Lineup information
     * @param lineup Lineup information to save in persistance
     * @param id Unique identifier of the resource.
     
     */
    public v2MatchesIdLineupsPut(lineup: V2LineupInput, id: string, observe?: 'body', headers?: Headers): Observable<V2Lineup>;
    public v2MatchesIdLineupsPut(lineup: V2LineupInput, id: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<V2Lineup>>;
    public v2MatchesIdLineupsPut(lineup: V2LineupInput, id: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!lineup){
            throw new Error('Required parameter lineup was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        if (!id){
            throw new Error('Required parameter id was null or undefined when calling v2MatchesIdLineupsPut.');
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<V2Lineup>> = this.httpClient.put(`${this.APIConfiguration.basePath}/v2/matches/${encodeURIComponent(String(id))}/lineups`, lineup as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
