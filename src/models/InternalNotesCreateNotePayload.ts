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
 * @interface InternalNotesCreateNotePayload
 */
export interface InternalNotesCreateNotePayload {
    /**
     * 
     * @type {string}
     * @memberof InternalNotesCreateNotePayload
     */
    content: string;
}

export function InternalNotesCreateNotePayloadFromJSON(json: any): InternalNotesCreateNotePayload {
    return InternalNotesCreateNotePayloadFromJSONTyped(json, false);
}

export function InternalNotesCreateNotePayloadFromJSONTyped(json: any, _ignoreDiscriminator: boolean): InternalNotesCreateNotePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': json['content'],
    };
}

export function InternalNotesCreateNotePayloadToJSON(value?: InternalNotesCreateNotePayload | null): any {
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


