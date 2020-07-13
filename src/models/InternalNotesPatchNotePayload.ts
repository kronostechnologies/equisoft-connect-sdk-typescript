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
 * @interface InternalNotesPatchNotePayload
 */
export interface InternalNotesPatchNotePayload {
    /**
     * 
     * @type {string}
     * @memberof InternalNotesPatchNotePayload
     */
    content: string;
}

export function InternalNotesPatchNotePayloadFromJSON(json: any): InternalNotesPatchNotePayload {
    return InternalNotesPatchNotePayloadFromJSONTyped(json, false);
}

export function InternalNotesPatchNotePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalNotesPatchNotePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': json['content'],
    };
}

export function InternalNotesPatchNotePayloadToJSON(value?: InternalNotesPatchNotePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
    };
}

