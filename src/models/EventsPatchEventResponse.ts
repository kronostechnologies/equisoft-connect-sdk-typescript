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
 * @interface EventsPatchEventResponse
 */
export interface EventsPatchEventResponse {
    /**
     * Unique numerical identifier of the updated event.
     * @type {string}
     * @memberof EventsPatchEventResponse
     */
    id: string;
}

export function EventsPatchEventResponseFromJSON(json: any): EventsPatchEventResponse {
    return EventsPatchEventResponseFromJSONTyped(json, false);
}

export function EventsPatchEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsPatchEventResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function EventsPatchEventResponseToJSON(value?: EventsPatchEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

