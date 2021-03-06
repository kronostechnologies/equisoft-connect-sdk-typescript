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
export enum EventsEventType {
    CALL = 'CALL',
    LETTER = 'LETTER',
    MEETING = 'MEETING',
    VACATION = 'VACATION',
    FILE = 'FILE',
    NOTE = 'NOTE'
}

export function EventsEventTypeFromJSON(json: any): EventsEventType {
    return EventsEventTypeFromJSONTyped(json, false);
}

export function EventsEventTypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EventsEventType {
    return json as EventsEventType;
}

export function EventsEventTypeToJSON(value?: EventsEventType | null): any {
    return value as any;
}

