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
    DateOrDateTime,
    DateOrDateTimeFromJSON,
    DateOrDateTimeToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventsCreateEventPayload
 */
export interface EventsCreateEventPayload {
    /**
     * Calendar the Event will be created for. A numerical ID returned by listCalendars. The string `primary` for the current connected user primary ('TODO') calendar. The string `completed` for the current connected user completed ('DONE') calendar. The `calendarId` parameter can't be used with the `ownerId` parameter.
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    calendarId?: string;
    /**
     * For local legacy events, `ownerIds` can be used instead of calendarId to create an Event for many user at once. Cannot be used with `calendarId`. Cannot be used for users with remote calendar (Exchange, Office365, Outlook.com).
     * @type {Array<number>}
     * @memberof EventsCreateEventPayload
     */
    ownerIds?: Array<number>;
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    subject: string;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsCreateEventPayload
     */
    start: DateOrDateTime;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsCreateEventPayload
     */
    end?: DateOrDateTime;
    /**
     * Indicate if the event is an all-day event or a timed event.
     * @type {boolean}
     * @memberof EventsCreateEventPayload
     */
    allDay: boolean;
    /**
     * Date the Event was initially scheduled. As defined by full-date - RFC3339
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    initialDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    internalNotes?: string;
    /**
     * Location of the event in free-text form.
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    location?: string;
    /**
     * Event type (CALL, LETTER, MEETING, VACATION, FILE, NOTE)
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    type?: string;
    /**
     * ID of the field value to use as category.
     * @type {number}
     * @memberof EventsCreateEventPayload
     */
    categoryId?: number;
    /**
     * ID of the field value to use as sub-category.
     * @type {number}
     * @memberof EventsCreateEventPayload
     */
    subCategoryId?: number;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof EventsCreateEventPayload
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof EventsCreateEventPayload
     */
    visibility?: string;
    /**
     * Allow to link the event to one or many contacts.
     * @type {Array<number>}
     * @memberof EventsCreateEventPayload
     */
    contactIds?: Array<number>;
}

export function EventsCreateEventPayloadFromJSON(json: any): EventsCreateEventPayload {
    return EventsCreateEventPayloadFromJSONTyped(json, false);
}

export function EventsCreateEventPayloadFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EventsCreateEventPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'calendarId': !exists(json, 'calendarId') ? undefined : json['calendarId'],
        'ownerIds': !exists(json, 'ownerIds') ? undefined : json['ownerIds'],
        'subject': json['subject'],
        'start': DateOrDateTimeFromJSON(json['start']),
        'end': !exists(json, 'end') ? undefined : DateOrDateTimeFromJSON(json['end']),
        'allDay': json['allDay'],
        'initialDate': !exists(json, 'initialDate') ? undefined : json['initialDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'internalNotes': !exists(json, 'internalNotes') ? undefined : json['internalNotes'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'subCategoryId': !exists(json, 'subCategoryId') ? undefined : json['subCategoryId'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'contactIds': !exists(json, 'contactIds') ? undefined : json['contactIds'],
    };
}

export function EventsCreateEventPayloadToJSON(value?: EventsCreateEventPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'calendarId': value.calendarId,
        'ownerIds': value.ownerIds,
        'subject': value.subject,
        'start': DateOrDateTimeToJSON(value.start),
        'end': DateOrDateTimeToJSON(value.end),
        'allDay': value.allDay,
        'initialDate': value.initialDate,
        'description': value.description,
        'internalNotes': value.internalNotes,
        'location': value.location,
        'type': value.type,
        'categoryId': value.categoryId,
        'subCategoryId': value.subCategoryId,
        'priority': value.priority,
        'visibility': value.visibility,
        'contactIds': value.contactIds,
    };
}


