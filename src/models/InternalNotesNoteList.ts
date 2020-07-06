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
    InternalNotesLegacyNote,
    InternalNotesLegacyNoteFromJSON,
    InternalNotesLegacyNoteFromJSONTyped,
    InternalNotesLegacyNoteToJSON,
    InternalNotesNote,
    InternalNotesNoteFromJSON,
    InternalNotesNoteFromJSONTyped,
    InternalNotesNoteToJSON,
} from './';

/**
 * 
 * @export
 * @interface InternalNotesNoteList
 */
export interface InternalNotesNoteList {
    /**
     * 
     * @type {Array<InternalNotesNote>}
     * @memberof InternalNotesNoteList
     */
    notes: Array<InternalNotesNote>;
    /**
     * 
     * @type {InternalNotesLegacyNote}
     * @memberof InternalNotesNoteList
     */
    legacyNote?: InternalNotesLegacyNote;
}

export function InternalNotesNoteListFromJSON(json: any): InternalNotesNoteList {
    return InternalNotesNoteListFromJSONTyped(json, false);
}

export function InternalNotesNoteListFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalNotesNoteList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'notes': ((json['notes'] as Array<any>).map(InternalNotesNoteFromJSON)),
        'legacyNote': !exists(json, 'legacyNote') ? undefined : InternalNotesLegacyNoteFromJSON(json['legacyNote']),
    };
}

export function InternalNotesNoteListToJSON(value?: InternalNotesNoteList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'notes': ((value.notes as Array<any>).map(InternalNotesNoteToJSON)),
        'legacyNote': InternalNotesLegacyNoteToJSON(value.legacyNote),
    };
}

