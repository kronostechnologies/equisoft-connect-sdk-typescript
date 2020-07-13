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
 * @interface InternalNotesPatchNoteResponse
 */
export interface InternalNotesPatchNoteResponse {
    /**
     * Unique numerical identifier of the note.
     * @type {string}
     * @memberof InternalNotesPatchNoteResponse
     */
    id: string;
}

export function InternalNotesPatchNoteResponseFromJSON(json: any): InternalNotesPatchNoteResponse {
    return InternalNotesPatchNoteResponseFromJSONTyped(json, false);
}

export function InternalNotesPatchNoteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalNotesPatchNoteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function InternalNotesPatchNoteResponseToJSON(value?: InternalNotesPatchNoteResponse | null): any {
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

