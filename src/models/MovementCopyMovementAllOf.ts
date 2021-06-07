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

import {
    MovementDatabase,
    MovementDatabaseFromJSON,
    MovementDatabaseToJSON,
    MovementUserTuple,
    MovementUserTupleFromJSON,
    MovementUserTupleToJSON,
} from './';

/**
 * 
 * @export
 * @interface MovementCopyMovementAllOf
 */
export interface MovementCopyMovementAllOf {
    /**
     * 
     * @type {string}
     * @memberof MovementCopyMovementAllOf
     */
    type: MovementCopyMovementAllOfTypeEnum;
    /**
     * 
     * @type {MovementDatabase}
     * @memberof MovementCopyMovementAllOf
     */
    sourceDatabase: MovementDatabase;
    /**
     * 
     * @type {MovementDatabase}
     * @memberof MovementCopyMovementAllOf
     */
    destinationDatabase: MovementDatabase;
    /**
     * 
     * @type {Array<MovementUserTuple>}
     * @memberof MovementCopyMovementAllOf
     */
    userTuples: Array<MovementUserTuple>;
}

export function MovementCopyMovementAllOfFromJSON(json: any): MovementCopyMovementAllOf {
    return MovementCopyMovementAllOfFromJSONTyped(json, false);
}

export function MovementCopyMovementAllOfFromJSONTyped(json: any, _ignoreDiscriminator: boolean): MovementCopyMovementAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sourceDatabase': MovementDatabaseFromJSON(json['sourceDatabase']),
        'destinationDatabase': MovementDatabaseFromJSON(json['destinationDatabase']),
        'userTuples': ((json['userTuples'] as Array<any>).map(MovementUserTupleFromJSON)),
    };
}

export function MovementCopyMovementAllOfToJSON(value?: MovementCopyMovementAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'sourceDatabase': MovementDatabaseToJSON(value.sourceDatabase),
        'destinationDatabase': MovementDatabaseToJSON(value.destinationDatabase),
        'userTuples': ((value.userTuples as Array<any>).map(MovementUserTupleToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum MovementCopyMovementAllOfTypeEnum {
    COPY = 'COPY'
}


