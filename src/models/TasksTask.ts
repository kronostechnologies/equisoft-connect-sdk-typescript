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
    FieldValue,
    FieldValueFromJSON,
    FieldValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface TasksTask
 */
export interface TasksTask {
    /**
     * Unique numerical identifier.
     * @type {string}
     * @memberof TasksTask
     */
    id: string;
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof TasksTask
     */
    subject: string;
    /**
     * Is the task completed/done.
     * @type {boolean}
     * @memberof TasksTask
     */
    isCompleted: boolean;
    /**
     * Date the task is expected to be done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksTask
     */
    dueDate?: string;
    /**
     * Date the task was initially started. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksTask
     */
    initialDate?: string;
    /**
     * Date the task was completed / done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksTask
     */
    completedDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof TasksTask
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof TasksTask
     */
    internalNotes?: string;
    /**
     * 
     * @type {FieldValue}
     * @memberof TasksTask
     */
    category?: FieldValue;
    /**
     * 
     * @type {FieldValue}
     * @memberof TasksTask
     */
    subCategory?: FieldValue;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof TasksTask
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof TasksTask
     */
    visibility?: string;
    /**
     * Creation time. As defined by date-time - RFC3339
     * @type {Date}
     * @memberof TasksTask
     */
    creationTime?: Date;
    /**
     * Date time of last modification. As defined by date-time - RFC3339
     * @type {Date}
     * @memberof TasksTask
     */
    updateTime?: Date;
    /**
     * Completion time. As defined by date-time - RFC3339
     * @type {Date}
     * @memberof TasksTask
     */
    completionTime?: Date;
    /**
     * IDs of the contacts linked to this Task
     * @type {Array<number>}
     * @memberof TasksTask
     */
    contactIds?: Array<number>;
    /**
     * 
     * @type {AccessRights}
     * @memberof TasksTask
     */
    accessRights: AccessRights;
}

export function TasksTaskFromJSON(json: any): TasksTask {
    return TasksTaskFromJSONTyped(json, false);
}

export function TasksTaskFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TasksTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'subject': json['subject'],
        'isCompleted': json['isCompleted'],
        'dueDate': !exists(json, 'dueDate') ? undefined : json['dueDate'],
        'initialDate': !exists(json, 'initialDate') ? undefined : json['initialDate'],
        'completedDate': !exists(json, 'completedDate') ? undefined : json['completedDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'internalNotes': !exists(json, 'internalNotes') ? undefined : json['internalNotes'],
        'category': !exists(json, 'category') ? undefined : FieldValueFromJSON(json['category']),
        'subCategory': !exists(json, 'subCategory') ? undefined : FieldValueFromJSON(json['subCategory']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'creationTime': !exists(json, 'creationTime') ? undefined : (new Date(json['creationTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
        'completionTime': !exists(json, 'completionTime') ? undefined : (new Date(json['completionTime'])),
        'contactIds': !exists(json, 'contactIds') ? undefined : json['contactIds'],
        'accessRights': AccessRightsFromJSON(json['accessRights']),
    };
}

export function TasksTaskToJSON(value?: TasksTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'subject': value.subject,
        'isCompleted': value.isCompleted,
        'dueDate': value.dueDate,
        'initialDate': value.initialDate,
        'completedDate': value.completedDate,
        'description': value.description,
        'internalNotes': value.internalNotes,
        'category': FieldValueToJSON(value.category),
        'subCategory': FieldValueToJSON(value.subCategory),
        'priority': value.priority,
        'visibility': value.visibility,
        'creationTime': value.creationTime === undefined ? undefined : (value.creationTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
        'completionTime': value.completionTime === undefined ? undefined : (value.completionTime.toISOString()),
        'contactIds': value.contactIds,
        'accessRights': AccessRightsToJSON(value.accessRights),
    };
}


