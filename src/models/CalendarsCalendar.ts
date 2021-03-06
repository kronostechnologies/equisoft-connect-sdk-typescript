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

import { exists } from '../runtime';
import {
    AccessRights,
    AccessRightsFromJSON,
    AccessRightsToJSON,
} from './';

/**
 * 
 * @export
 * @interface CalendarsCalendar
 */
export interface CalendarsCalendar {
    /**
     * Unique identifier of the calendar.
     * @type {number}
     * @memberof CalendarsCalendar
     */
    calendarId: number;
    /**
     * Unique identifier of the owner user of the calendar.
     * @type {number}
     * @memberof CalendarsCalendar
     */
    ownerId: number;
    /**
     * Summary label of the calendar.
     * @type {string}
     * @memberof CalendarsCalendar
     */
    label: string;
    /**
     * Is this the calendar for completed events.
     * @type {boolean}
     * @memberof CalendarsCalendar
     */
    isCompleted: boolean;
    /**
     * 
     * @type {AccessRights}
     * @memberof CalendarsCalendar
     */
    accessRights: AccessRights;
    /**
     * hex color of the calendar.
     * @type {string}
     * @memberof CalendarsCalendar
     */
    color?: string;
    /**
     * hex text color of the calendar.
     * @type {string}
     * @memberof CalendarsCalendar
     */
    textColor?: string;
}

export function CalendarsCalendarFromJSON(json: any): CalendarsCalendar {
    return CalendarsCalendarFromJSONTyped(json, false);
}

export function CalendarsCalendarFromJSONTyped(json: any, _ignoreDiscriminator: boolean): CalendarsCalendar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'calendarId': json['calendarId'],
        'ownerId': json['ownerId'],
        'label': json['label'],
        'isCompleted': json['isCompleted'],
        'accessRights': AccessRightsFromJSON(json['accessRights']),
        'color': !exists(json, 'color') ? undefined : json['color'],
        'textColor': !exists(json, 'textColor') ? undefined : json['textColor'],
    };
}

export function CalendarsCalendarToJSON(value?: CalendarsCalendar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'calendarId': value.calendarId,
        'ownerId': value.ownerId,
        'label': value.label,
        'isCompleted': value.isCompleted,
        'accessRights': AccessRightsToJSON(value.accessRights),
        'color': value.color,
        'textColor': value.textColor,
    };
}


