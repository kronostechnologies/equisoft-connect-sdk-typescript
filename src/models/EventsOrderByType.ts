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
export enum EventsOrderByType {
    startTime = 'startTime',
    updateTime = 'updateTime',
    creationTime = 'creationTime'
}

export function EventsOrderByTypeFromJSON(json: any): EventsOrderByType {
    return EventsOrderByTypeFromJSONTyped(json, false);
}

export function EventsOrderByTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsOrderByType {
    return json as EventsOrderByType;
}

export function EventsOrderByTypeToJSON(value?: EventsOrderByType | null): any {
    return value as any;
}
