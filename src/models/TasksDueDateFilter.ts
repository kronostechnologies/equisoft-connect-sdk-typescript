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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TasksDueDateFilter {
    withDueDate = 'withDueDate',
    withoutDueDate = 'withoutDueDate'
}

export function TasksDueDateFilterFromJSON(json: any): TasksDueDateFilter {
    return TasksDueDateFilterFromJSONTyped(json, false);
}

export function TasksDueDateFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TasksDueDateFilter {
    return json as TasksDueDateFilter;
}

export function TasksDueDateFilterToJSON(value?: TasksDueDateFilter | null): any {
    return value as any;
}
