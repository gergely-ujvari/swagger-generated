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

import { EventTeamStats } from '../model/eventTeamStats';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class TeamStatsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get statistics for the performance of each team involved in the event
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     * @param lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     
     */
    public eventTeamstatsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'body', headers?: Headers): Observable<Array<EventTeamStats>>;
    public eventTeamstatsGet(acceptLanguage?: string, lastUpdate?: Date, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<EventTeamStats>>>;
    public eventTeamstatsGet(acceptLanguage?: string, lastUpdate?: Date, observe: any = 'body', headers: Headers = {}): Observable<any> {
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

        const response: Observable<HttpResponse<Array<EventTeamStats>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/event_teamstats?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get statistics for the performance of each team involved in the event
     * @param id Event.id for which team stats are requested
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public eventsIdTeamstatsGet(id: number, acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<Array<EventTeamStats>>;
    public eventsIdTeamstatsGet(id: number, acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<EventTeamStats>>>;
    public eventsIdTeamstatsGet(id: number, acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdTeamstatsGet.');
        }

        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<EventTeamStats>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/teamstats` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
