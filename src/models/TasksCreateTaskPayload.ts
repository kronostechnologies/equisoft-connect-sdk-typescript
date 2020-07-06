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
/**
 * 
 * @export
 * @interface TasksCreateTaskPayload
 */
export interface TasksCreateTaskPayload {
    /**
     * Ids of the owner users of the task.
     * @type {Array<number>}
     * @memberof TasksCreateTaskPayload
     */
    ownerIds?: Array<number>;
    /**
     * Is the task completed.
     * @type {boolean}
     * @memberof TasksCreateTaskPayload
     */
    isCompleted?: boolean;
    /**
     * Subject/Title of the Event.
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    subject: string;
    /**
     * Date the task is expected to be done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    dueDate?: string;
    /**
     * Date the task was initially started. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    initialDate?: string;
    /**
     * Date the task was completed / done. As defined by full-date - RFC3339
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    completedDate?: string;
    /**
     * Public description of the Event.
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    description?: string;
    /**
     * Internal notes on the Event. Not synced on remote sources.
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    internalNotes?: string;
    /**
     * ID of the field value to use as category.
     * @type {number}
     * @memberof TasksCreateTaskPayload
     */
    categoryId?: number;
    /**
     * ID of the field value to use as sub-category.
     * @type {number}
     * @memberof TasksCreateTaskPayload
     */
    subCategoryId?: number;
    /**
     * Importance/Priority of an event or task. 5 is the most important.
     * @type {number}
     * @memberof TasksCreateTaskPayload
     */
    priority?: number;
    /**
     * Confidentiality level of the Event (private or not). [NORMAL, PRIVATE]
     * @type {string}
     * @memberof TasksCreateTaskPayload
     */
    visibility?: string;
    /**
     * Allow to link the task to one or many contacts.
     * @type {Array<number>}
     * @memberof TasksCreateTaskPayload
     */
    contactIds?: Array<number>;
}

export function TasksCreateTaskPayloadFromJSON(json: any): TasksCreateTaskPayload {
    return TasksCreateTaskPayloadFromJSONTyped(json, false);
}

export function TasksCreateTaskPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TasksCreateTaskPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ownerIds': !exists(json, 'ownerIds') ? undefined : json['ownerIds'],
        'isCompleted': !exists(json, 'isCompleted') ? undefined : json['isCompleted'],
        'subject': json['subject'],
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

export function TasksCreateTaskPayloadToJSON(value?: TasksCreateTaskPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ownerIds': value.ownerIds,
        'isCompleted': value.isCompleted,
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


