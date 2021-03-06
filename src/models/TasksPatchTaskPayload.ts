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
/**
 * 
 * @export
 * @interface TasksPatchTaskPayload
 */
export interface TasksPatchTaskPayload {
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    subject?: string;
    /**
     * Date the task is expected to be done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    dueDate?: string;
    /**
     * Date the task was initially started. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    initialDate?: string;
    /**
     * Date the task was completed / done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    completedDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    internalNotes?: string;
    /**
     * ID of the field value to use as category.
     * @type {number}
     * @memberof TasksPatchTaskPayload
     */
    categoryId?: number;
    /**
     * ID of the field value to use as sub-category.
     * @type {number}
     * @memberof TasksPatchTaskPayload
     */
    subCategoryId?: number;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof TasksPatchTaskPayload
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof TasksPatchTaskPayload
     */
    visibility?: string;
    /**
     * Allow to link the task to one or many contacts.
     * @type {Array<number>}
     * @memberof TasksPatchTaskPayload
     */
    contactIds?: Array<number>;
}

export function TasksPatchTaskPayloadFromJSON(json: any): TasksPatchTaskPayload {
    return TasksPatchTaskPayloadFromJSONTyped(json, false);
}

export function TasksPatchTaskPayloadFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TasksPatchTaskPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'dueDate': !exists(json, 'dueDate') ? undefined : json['dueDate'],
        'initialDate': !exists(json, 'initialDate') ? undefined : json['initialDate'],
        'completedDate': !exists(json, 'completedDate') ? undefined : json['completedDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'internalNotes': !exists(json, 'internalNotes') ? undefined : json['internalNotes'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'subCategoryId': !exists(json, 'subCategoryId') ? undefined : json['subCategoryId'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'contactIds': !exists(json, 'contactIds') ? undefined : json['contactIds'],
    };
}

export function TasksPatchTaskPayloadToJSON(value?: TasksPatchTaskPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subject': value.subject,
        'dueDate': value.dueDate,
        'initialDate': value.initialDate,
        'completedDate': value.completedDate,
        'description': value.description,
        'internalNotes': value.internalNotes,
        'categoryId': value.categoryId,
        'subCategoryId': value.subCategoryId,
        'priority': value.priority,
        'visibility': value.visibility,
        'contactIds': value.contactIds,
    };
}


