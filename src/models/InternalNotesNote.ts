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
    AccessRights,
    AccessRightsFromJSON,
    AccessRightsFromJSONTyped,
    AccessRightsToJSON,
    InternalNotesAuthor,
    InternalNotesAuthorFromJSON,
    InternalNotesAuthorFromJSONTyped,
    InternalNotesAuthorToJSON,
    InternalNotesNoteRevision,
    InternalNotesNoteRevisionFromJSON,
    InternalNotesNoteRevisionFromJSONTyped,
    InternalNotesNoteRevisionToJSON,
} from './';

/**
 * 
 * @export
 * @interface InternalNotesNote
 */
export interface InternalNotesNote {
    /**
     * Unique numerical identifier.
     * @type {string}
     * @memberof InternalNotesNote
     */
    id?: string;
    /**
     * 
     * @type {InternalNotesAuthor}
     * @memberof InternalNotesNote
     */
    author: InternalNotesAuthor;
    /**
     * 
     * @type {Date}
     * @memberof InternalNotesNote
     */
    firstRevisionCreatedAt: Date;
    /**
     * 
     * @type {AccessRights}
     * @memberof InternalNotesNote
     */
    accessRights: AccessRights;
    /**
     * 
     * @type {InternalNotesNoteRevision}
     * @memberof InternalNotesNote
     */
    currentRevision: InternalNotesNoteRevision;
    /**
     * 
     * @type {Array<InternalNotesNoteRevision>}
     * @memberof InternalNotesNote
     */
    previousRevisions?: Array<InternalNotesNoteRevision> | null;
}

export function InternalNotesNoteFromJSON(json: any): InternalNotesNote {
    return InternalNotesNoteFromJSONTyped(json, false);
}

export function InternalNotesNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalNotesNote {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'author': InternalNotesAuthorFromJSON(json['author']),
        'firstRevisionCreatedAt': (new Date(json['firstRevisionCreatedAt'])),
        'accessRights': AccessRightsFromJSON(json['accessRights']),
        'currentRevision': InternalNotesNoteRevisionFromJSON(json['currentRevision']),
        'previousRevisions': !exists(json, 'previousRevisions') ? undefined : (json['previousRevisions'] === null ? null : (json['previousRevisions'] as Array<any>).map(InternalNotesNoteRevisionFromJSON)),
    };
}

export function InternalNotesNoteToJSON(value?: InternalNotesNote | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'author': InternalNotesAuthorToJSON(value.author),
        'firstRevisionCreatedAt': (value.firstRevisionCreatedAt.toISOString()),
        'accessRights': AccessRightsToJSON(value.accessRights),
        'currentRevision': InternalNotesNoteRevisionToJSON(value.currentRevision),
        'previousRevisions': value.previousRevisions === undefined ? undefined : (value.previousRevisions === null ? null : (value.previousRevisions as Array<any>).map(InternalNotesNoteRevisionToJSON)),
    };
}


