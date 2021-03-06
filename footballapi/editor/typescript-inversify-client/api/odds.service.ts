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

import { Odd } from '../model/odd';
import { OddProvider } from '../model/oddProvider';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class OddsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get available liveodds for an event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdLiveoddsGet(id: string, xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdLiveoddsGet.');
        }

        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdLiveoddsGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/liveodds` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of odds available in the system
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public eventsIdOddsGet(id: string, xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public eventsIdOddsGet(id: string, xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdOddsGet(id: string, xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdOddsGet.');
        }

        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdOddsGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/odds` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get available pre-game odds for an Event
     * @param id Unique identifier of the resource.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public eventsIdPregameoddsGet(id: string, xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!id){
            throw new Error('Required parameter id was null or undefined when calling eventsIdPregameoddsGet.');
        }

        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling eventsIdPregameoddsGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/events/${encodeURIComponent(String(id))}/pregameodds` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get a list of liveodds available in the system
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public liveoddsGet(xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public liveoddsGet(xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public liveoddsGet(xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling liveoddsGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/liveodds` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     
     */
    public oddProvidersGet(xOddClient: string, observe?: 'body', headers?: Headers): Observable<Array<OddProvider>>;
    public oddProvidersGet(xOddClient: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<OddProvider>>>;
    public oddProvidersGet(xOddClient: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling oddProvidersGet.');
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<OddProvider>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/odd_providers` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Returns a list of Odds
     * @param oddClient Odd client code
     * @param sportType Sport type filter
     * @param eventType Event type filter
     * @param fromEventStartTime Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format
     * @param toEventStartTime Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format
     * @param teamId Team ID
     * @param teamIds List for team IDs separated by commas.
     * @param eventOrder Order matching events for a specific client
     * @param matchIds List for match IDs separated by commas.
     * @param tournamentIds List for tournament IDs separated by commas.
     * @param seasonIds List for season IDs separated by commas.
     * @param oddsType Pregame or live odds selector.
     
     */
    public oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public oddsGet(oddClient: string, sportType: 'football', eventType: 'match', fromEventStartTime?: Date, toEventStartTime?: Date, teamId?: number, teamIds?: string, eventOrder?: string, matchIds?: string, tournamentIds?: string, seasonIds?: string, oddsType?: 'prematch' | 'live' | 'all', observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!oddClient){
            throw new Error('Required parameter oddClient was null or undefined when calling oddsGet.');
        }

        if (!sportType){
            throw new Error('Required parameter sportType was null or undefined when calling oddsGet.');
        }

        if (!eventType){
            throw new Error('Required parameter eventType was null or undefined when calling oddsGet.');
        }

        let queryParameters: string[] = [];
        if (fromEventStartTime !== undefined) {
           queryParameters.push('fromEventStartTime='+encodeURIComponent(<any>fromEventStartTime.toISOString()));
        }
        if (toEventStartTime !== undefined) {
           queryParameters.push('toEventStartTime='+encodeURIComponent(<any>toEventStartTime.toISOString()));
        }
        if (oddClient !== undefined) {
            queryParameters.push('oddClient='+encodeURIComponent(String(oddClient)));
        }
        if (teamId !== undefined) {
            queryParameters.push('teamId='+encodeURIComponent(String(teamId)));
        }
        if (teamIds !== undefined) {
            queryParameters.push('teamIds='+encodeURIComponent(String(teamIds)));
        }
        if (eventOrder !== undefined) {
            queryParameters.push('eventOrder='+encodeURIComponent(String(eventOrder)));
        }
        if (sportType !== undefined) {
            queryParameters.push('sportType='+encodeURIComponent(String(sportType)));
        }
        if (matchIds !== undefined) {
            queryParameters.push('matchIds='+encodeURIComponent(String(matchIds)));
        }
        if (tournamentIds !== undefined) {
            queryParameters.push('tournamentIds='+encodeURIComponent(String(tournamentIds)));
        }
        if (seasonIds !== undefined) {
            queryParameters.push('seasonIds='+encodeURIComponent(String(seasonIds)));
        }
        if (eventType !== undefined) {
            queryParameters.push('eventType='+encodeURIComponent(String(eventType)));
        }
        if (oddsType !== undefined) {
            queryParameters.push('oddsType='+encodeURIComponent(String(oddsType)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/odds?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Returns a list of Odd Providers which have odds available for a given Event
     * @param xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs.
     * @param fromTime Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format
     * @param toTime Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format
     
     */
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe?: 'body', headers?: Headers): Observable<Array<Odd>>;
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Odd>>>;
    public pregameoddsGet(xOddClient: string, fromTime?: Date, toTime?: Date, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!xOddClient){
            throw new Error('Required parameter xOddClient was null or undefined when calling pregameoddsGet.');
        }

        let queryParameters: string[] = [];
        if (fromTime !== undefined) {
           queryParameters.push('fromTime='+encodeURIComponent(<any>fromTime.toISOString()));
        }
        if (toTime !== undefined) {
           queryParameters.push('toTime='+encodeURIComponent(<any>toTime.toISOString()));
        }

        if (xOddClient) {
            headers['X-Odd-Client'] = String(xOddClient);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<Odd>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/pregameodds?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
