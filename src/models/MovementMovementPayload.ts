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

import { exists } from '../runtime';
import {
     MovementMoveMovementPayloadFromJSONTyped,
     MovementCopyMovementPayloadFromJSONTyped,
     MovementReassignmentMovementPayloadFromJSONTyped,
     MovementClientBaseUsingDistributionListMovementPayloadFromJSONTyped,
     MovementClientBaseUsingFileMovementPayloadFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface MovementMovementPayload
 */
export interface MovementMovementPayload {
    /**
     * 
     * @type {string}
     * @memberof MovementMovementPayload
     */
    date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MovementMovementPayload
     */
    now?: boolean;
}

export function MovementMovementPayloadFromJSON(json: any): MovementMovementPayload {
    return MovementMovementPayloadFromJSONTyped(json, false);
}

export function MovementMovementPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovementMovementPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'MOVE') {
            return MovementMoveMovementPayloadFromJSONTyped(json, true);
        }
        if (json['type'] === 'COPY') {
            return MovementCopyMovementPayloadFromJSONTyped(json, true);
        }
        if (json['type'] === 'REASSIGNMENT') {
            return MovementReassignmentMovementPayloadFromJSONTyped(json, true);
        }
        if (json['type'] === 'CLIENTBASE_USING_DISTLIST') {
            return MovementClientBaseUsingDistributionListMovementPayloadFromJSONTyped(json, true);
        }
        if (json['type'] === 'CLIENTBASE_USING_FILE') {
            return MovementClientBaseUsingFileMovementPayloadFromJSONTyped(json, true);
        }
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'now': !exists(json, 'now') ? undefined : json['now'],
    };
}

export function MovementMovementPayloadToJSON(value?: MovementMovementPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'now': value.now,
    };
}


