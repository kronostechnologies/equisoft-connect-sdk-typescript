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
export enum MovementMovementType {
    MOVE = 'MOVE',
    COPY = 'COPY',
    REASSIGNMENT = 'REASSIGNMENT',
    CLIENTBASE_USING_FILE = 'CLIENTBASE_USING_FILE',
    CLIENTBASE_USING_DISTLIST = 'CLIENTBASE_USING_DISTLIST'
}

export function MovementMovementTypeFromJSON(json: any): MovementMovementType {
    return MovementMovementTypeFromJSONTyped(json, false);
}

export function MovementMovementTypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): MovementMovementType {
    return json as MovementMovementType;
}

export function MovementMovementTypeToJSON(value?: MovementMovementType | null): any {
    return value as any;
}

