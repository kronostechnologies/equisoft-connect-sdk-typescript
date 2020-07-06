/* tslint:disable */
/* eslint-disable */
/**
 * Equisoft /connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventsEvent,
    EventsEventFromJSON,
    EventsEventFromJSONTyped,
    EventsEventToJSON,
} from './';

/**
 * Returns the queried Events.
 * @export
 * @interface EventsListEventResponse
 */
export interface EventsListEventResponse {
    /**
     * Opaque token used to get the next page of the result. Omitted if no more results.
     * @type {string}
     * @memberof EventsListEventResponse
     */
    nextPageToken?: string;
    /**
     * 
     * @type {Array<EventsEvent>}
     * @memberof EventsListEventResponse
     */
    items: Array<EventsEvent>;
}

export function EventsListEventResponseFromJSON(json: any): EventsListEventResponse {
    return EventsListEventResponseFromJSONTyped(json, false);
}

export function EventsListEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsListEventResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextPageToken': !exists(json, 'nextPageToken') ? undefined : json['nextPageToken'],
        'items': ((json['items'] as Array<any>).map(EventsEventFromJSON)),
    };
}

export function EventsListEventResponseToJSON(value?: EventsListEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextPageToken': value.nextPageToken,
        'items': ((value.items as Array<any>).map(EventsEventToJSON)),
    };
}

