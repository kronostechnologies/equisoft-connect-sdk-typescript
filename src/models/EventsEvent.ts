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
    DateOrDateTime,
    DateOrDateTimeFromJSON,
    DateOrDateTimeToJSON,
    FieldValue,
    FieldValueFromJSON,
    FieldValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventsEvent
 */
export interface EventsEvent {
    /**
     * Unique numerical identifier.
     * @type {string}
     * @memberof EventsEvent
     */
    id: string;
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof EventsEvent
     */
    subject: string;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsEvent
     */
    start: DateOrDateTime;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsEvent
     */
    end: DateOrDateTime;
    /**
     * Indicate if the event is an all-day event or a timed event.
     * @type {boolean}
     * @memberof EventsEvent
     */
    allDay: boolean;
    /**
     * Is the event part of a completed/done calendar.
     * @type {boolean}
     * @memberof EventsEvent
     */
    isCompleted: boolean;
    /**
     * Date the Event was initially scheduled. As defined by full-date - RFC3339
     * @type {string}
     * @memberof EventsEvent
     */
    initialDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof EventsEvent
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof EventsEvent
     */
    internalNotes?: string;
    /**
     * Location of the event in free-text form.
     * @type {string}
     * @memberof EventsEvent
     */
    location?: string;
    /**
     * Event type (CALL, LETTER, MEETING, VACATION, FILE, NOTE)
     * @type {string}
     * @memberof EventsEvent
     */
    type: string;
    /**
     * 
     * @type {FieldValue}
     * @memberof EventsEvent
     */
    category?: FieldValue;
    /**
     * 
     * @type {FieldValue}
     * @memberof EventsEvent
     */
    subCategory?: FieldValue;
    /**
     * The recurrence rule for this event. The recurrence is a string conform to RFC 5545 (see RRULE http://tools.ietf.org/html/rfc5545#section-3.8.5.3).
     * @type {string}
     * @memberof EventsEvent
     */
    recurrenceRule?: string;
    /**
     * For an instance of recurring event, ID of the master event.
     * @type {string}
     * @memberof EventsEvent
     */
    recurringEventId?: string;
    /**
     * For an instance of recurring event, original start date of the event according to the recurrence rule.
     * @type {string}
     * @memberof EventsEvent
     */
    originalStartDate?: string;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof EventsEvent
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof EventsEvent
     */
    visibility?: string;
    /**
     * Creation time. As defined by date-time - RFC3339
     * @type {Date}
     * @memberof EventsEvent
     */
    creationTime?: Date;
    /**
     * Date time of last modification. As defined by date-time - RFC3339
     * @type {Date}
     * @memberof EventsEvent
     */
    updateTime?: Date;
    /**
     * ID of the calendar owning this Event. If owned by many users, calendarId will be
     * - The primary ( or completed depending on state) calendar ID of the connected user if the user is the he is one of the owners.
     * - Any primary ( or completed depending on state) completed calendar ID of one of the owners.
     * @type {number}
     * @memberof EventsEvent
     */
    calendarId: number;
    /**
     * hex color of this event background
     * @type {string}
     * @memberof EventsEvent
     */
    color?: string;
    /**
     * hex text color of this event
     * @type {string}
     * @memberof EventsEvent
     */
    textColor?: string;
    /**
     * IDs of the contacts linked to this Event
     * @type {Array<number>}
     * @memberof EventsEvent
     */
    contactIds?: Array<number>;
    /**
     * 
     * @type {AccessRights}
     * @memberof EventsEvent
     */
    accessRights: AccessRights;
}

export function EventsEventFromJSON(json: any): EventsEvent {
    return EventsEventFromJSONTyped(json, false);
}

export function EventsEventFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EventsEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'subject': json['subject'],
        'start': DateOrDateTimeFromJSON(json['start']),
        'end': DateOrDateTimeFromJSON(json['end']),
        'allDay': json['allDay'],
        'isCompleted': json['isCompleted'],
        'initialDate': !exists(json, 'initialDate') ? undefined : json['initialDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'internalNotes': !exists(json, 'internalNotes') ? undefined : json['internalNotes'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'type': json['type'],
        'category': !exists(json, 'category') ? undefined : FieldValueFromJSON(json['category']),
        'subCategory': !exists(json, 'subCategory') ? undefined : FieldValueFromJSON(json['subCategory']),
        'recurrenceRule': !exists(json, 'recurrenceRule') ? undefined : json['recurrenceRule'],
        'recurringEventId': !exists(json, 'recurringEventId') ? undefined : json['recurringEventId'],
        'originalStartDate': !exists(json, 'originalStartDate') ? undefined : json['originalStartDate'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'creationTime': !exists(json, 'creationTime') ? undefined : (new Date(json['creationTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
        'calendarId': json['calendarId'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'textColor': !exists(json, 'textColor') ? undefined : json['textColor'],
        'contactIds': !exists(json, 'contactIds') ? undefined : json['contactIds'],
        'accessRights': AccessRightsFromJSON(json['accessRights']),
    };
}

export function EventsEventToJSON(value?: EventsEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'subject': value.subject,
        'start': DateOrDateTimeToJSON(value.start),
        'end': DateOrDateTimeToJSON(value.end),
        'allDay': value.allDay,
        'isCompleted': value.isCompleted,
        'initialDate': value.initialDate,
        'description': value.description,
        'internalNotes': value.internalNotes,
        'location': value.location,
        'type': value.type,
        'category': FieldValueToJSON(value.category),
        'subCategory': FieldValueToJSON(value.subCategory),
        'recurrenceRule': value.recurrenceRule,
        'recurringEventId': value.recurringEventId,
        'originalStartDate': value.originalStartDate,
        'priority': value.priority,
        'visibility': value.visibility,
        'creationTime': value.creationTime === undefined ? undefined : (value.creationTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
        'calendarId': value.calendarId,
        'color': value.color,
        'textColor': value.textColor,
        'contactIds': value.contactIds,
        'accessRights': AccessRightsToJSON(value.accessRights),
    };
}


