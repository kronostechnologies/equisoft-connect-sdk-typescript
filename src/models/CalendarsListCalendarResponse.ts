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
    CalendarsCalendar,
    CalendarsCalendarFromJSON,
    CalendarsCalendarFromJSONTyped,
    CalendarsCalendarToJSON,
} from './';

/**
 * 
 * @export
 * @interface CalendarsListCalendarResponse
 */
export interface CalendarsListCalendarResponse {
    /**
     * 
     * @type {Array<CalendarsCalendar>}
     * @memberof CalendarsListCalendarResponse
     */
    items: Array<CalendarsCalendar>;
}

export function CalendarsListCalendarResponseFromJSON(json: any): CalendarsListCalendarResponse {
    return CalendarsListCalendarResponseFromJSONTyped(json, false);
}

export function CalendarsListCalendarResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarsListCalendarResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CalendarsCalendarFromJSON)),
    };
}

export function CalendarsListCalendarResponseToJSON(value?: CalendarsListCalendarResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(CalendarsCalendarToJSON)),
    };
}

