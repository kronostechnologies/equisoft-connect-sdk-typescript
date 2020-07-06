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
    DateOrDateTime,
    DateOrDateTimeFromJSON,
    DateOrDateTimeFromJSONTyped,
    DateOrDateTimeToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventsPatchEventPayload
 */
export interface EventsPatchEventPayload {
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    subject?: string;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsPatchEventPayload
     */
    start?: DateOrDateTime;
    /**
     * 
     * @type {DateOrDateTime}
     * @memberof EventsPatchEventPayload
     */
    end?: DateOrDateTime;
    /**
     * Indicate if the event is an all-day event or a timed event.
     * @type {boolean}
     * @memberof EventsPatchEventPayload
     */
    allDay?: boolean;
    /**
     * Date the Event was initially scheduled. As defined by full-date - RFC3339
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    initialDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    internalNotes?: string;
    /**
     * Location of the event in free-text form.
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    location?: string;
    /**
     * Event type (CALL, LETTER, MEETING, VACATION, FILE, NOTE)
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    type?: string;
    /**
     * ID of the field value to use as category.
     * @type {number}
     * @memberof EventsPatchEventPayload
     */
    categoryId?: number;
    /**
     * ID of the field value to use as sub-category.
     * @type {number}
     * @memberof EventsPatchEventPayload
     */
    subCategoryId?: number;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof EventsPatchEventPayload
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof EventsPatchEventPayload
     */
    visibility?: string;
    /**
     * Allow to link the event to one or many contacts.
     * @type {Array<number>}
     * @memberof EventsPatchEventPayload
     */
    contactIds?: Array<number>;
}

export function EventsPatchEventPayloadFromJSON(json: any): EventsPatchEventPayload {
    return EventsPatchEventPayloadFromJSONTyped(json, false);
}

export function EventsPatchEventPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsPatchEventPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'start': !exists(json, 'start') ? undefined : DateOrDateTimeFromJSON(json['start']),
        'end': !exists(json, 'end') ? undefined : DateOrDateTimeFromJSON(json['end']),
        'allDay': !exists(json, 'allDay') ? undefined : json['allDay'],
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

export function EventsPatchEventPayloadToJSON(value?: EventsPatchEventPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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

