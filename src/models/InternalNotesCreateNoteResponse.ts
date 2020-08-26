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
 * @interface InternalNotesCreateNoteResponse
 */
export interface InternalNotesCreateNoteResponse {
    /**
     * Unique numerical identifier of the created note.
     * @type {string}
     * @memberof InternalNotesCreateNoteResponse
     */
    id: string;
}

export function InternalNotesCreateNoteResponseFromJSON(json: any): InternalNotesCreateNoteResponse {
    return InternalNotesCreateNoteResponseFromJSONTyped(json, false);
}

export function InternalNotesCreateNoteResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): InternalNotesCreateNoteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function InternalNotesCreateNoteResponseToJSON(value?: InternalNotesCreateNoteResponse | null): any {
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


