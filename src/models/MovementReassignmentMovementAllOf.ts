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
    MovementDatabase,
    MovementDatabaseFromJSON,
    MovementDatabaseFromJSONTyped,
    MovementDatabaseToJSON,
    MovementGatewayAccessCode,
    MovementGatewayAccessCodeFromJSON,
    MovementGatewayAccessCodeFromJSONTyped,
    MovementGatewayAccessCodeToJSON,
    MovementUser,
    MovementUserFromJSON,
    MovementUserFromJSONTyped,
    MovementUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface MovementReassignmentMovementAllOf
 */
export interface MovementReassignmentMovementAllOf {
    /**
     * 
     * @type {string}
     * @memberof MovementReassignmentMovementAllOf
     */
    type: MovementReassignmentMovementAllOfTypeEnum;
    /**
     * 
     * @type {MovementDatabase}
     * @memberof MovementReassignmentMovementAllOf
     */
    sourceDatabase: MovementDatabase;
    /**
     * 
     * @type {MovementUser}
     * @memberof MovementReassignmentMovementAllOf
     */
    sourceUser: MovementUser;
    /**
     * 
     * @type {MovementUser}
     * @memberof MovementReassignmentMovementAllOf
     */
    destinationUser: MovementUser;
    /**
     * 
     * @type {MovementGatewayAccessCode}
     * @memberof MovementReassignmentMovementAllOf
     */
    accessCode: MovementGatewayAccessCode;
}

export function MovementReassignmentMovementAllOfFromJSON(json: any): MovementReassignmentMovementAllOf {
    return MovementReassignmentMovementAllOfFromJSONTyped(json, false);
}

export function MovementReassignmentMovementAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovementReassignmentMovementAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sourceDatabase': MovementDatabaseFromJSON(json['sourceDatabase']),
        'sourceUser': MovementUserFromJSON(json['sourceUser']),
        'destinationUser': MovementUserFromJSON(json['destinationUser']),
        'accessCode': MovementGatewayAccessCodeFromJSON(json['accessCode']),
    };
}

export function MovementReassignmentMovementAllOfToJSON(value?: MovementReassignmentMovementAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'sourceDatabase': MovementDatabaseToJSON(value.sourceDatabase),
        'sourceUser': MovementUserToJSON(value.sourceUser),
        'destinationUser': MovementUserToJSON(value.destinationUser),
        'accessCode': MovementGatewayAccessCodeToJSON(value.accessCode),
    };
}

/**
* @export
* @enum {string}
*/
export enum MovementReassignmentMovementAllOfTypeEnum {
    REASSIGNMENT = 'REASSIGNMENT'
}


