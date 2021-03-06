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
 * @interface ContextActor
 */
export interface ContextActor {
    /**
     * $displayName
     * @type {string}
     * @memberof ContextActor
     */
    displayName: string;
    /**
     * $uuid
     * @type {string}
     * @memberof ContextActor
     */
    uuid: string;
}

export function ContextActorFromJSON(json: any): ContextActor {
    return ContextActorFromJSONTyped(json, false);
}

export function ContextActorFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContextActor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': json['displayName'],
        'uuid': json['uuid'],
    };
}

export function ContextActorToJSON(value?: ContextActor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'uuid': value.uuid,
    };
}


