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
    AnyType,
    AnyTypeFromJSON,
    AnyTypeFromJSONTyped,
    AnyTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyContactContact
 */
export interface LegacyContactContact {
    /**
     * Unique id
     * @type {string}
     * @memberof LegacyContactContact
     */
    id?: string;
    /**
     * Contact UUID
     * @type {AnyType}
     * @memberof LegacyContactContact
     */
    uuid?: AnyType;
    /**
     * type of the contact
     * @type {string}
     * @memberof LegacyContactContact
     */
    typeContact?: string;
    /**
     * type INDIVIDUAL OR ORGANIZATION
     * @type {string}
     * @memberof LegacyContactContact
     */
    indOrg?: string;
    /**
     * display name of the contact
     * @type {string}
     * @memberof LegacyContactContact
     */
    displayName?: string;
    /**
     * first name of the contact
     * @type {string}
     * @memberof LegacyContactContact
     */
    firstName?: string;
    /**
     * middle name of the contact
     * @type {string}
     * @memberof LegacyContactContact
     */
    middleName?: string;
    /**
     * last name of the contact
     * @type {string}
     * @memberof LegacyContactContact
     */
    lastName?: string;
    /**
     * first line of corporation name (Organization)
     * @type {string}
     * @memberof LegacyContactContact
     */
    corporationName?: string;
    /**
     * second line of corporation name (Organization)
     * @type {string}
     * @memberof LegacyContactContact
     */
    corporationNameLine2?: string;
    /**
     * rank of the contact. (Industrial Alliance only)
     * @type {string}
     * @memberof LegacyContactContact
     */
    rank?: string;
}

export function LegacyContactContactFromJSON(json: any): LegacyContactContact {
    return LegacyContactContactFromJSONTyped(json, false);
}

export function LegacyContactContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyContactContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'uuid': !exists(json, 'uuid') ? undefined : AnyTypeFromJSON(json['uuid']),
        'typeContact': !exists(json, 'typeContact') ? undefined : json['typeContact'],
        'indOrg': !exists(json, 'indOrg') ? undefined : json['indOrg'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'corporationName': !exists(json, 'corporationName') ? undefined : json['corporationName'],
        'corporationNameLine2': !exists(json, 'corporationNameLine2') ? undefined : json['corporationNameLine2'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
    };
}

export function LegacyContactContactToJSON(value?: LegacyContactContact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'uuid': AnyTypeToJSON(value.uuid),
        'typeContact': value.typeContact,
        'indOrg': value.indOrg,
        'displayName': value.displayName,
        'firstName': value.firstName,
        'middleName': value.middleName,
        'lastName': value.lastName,
        'corporationName': value.corporationName,
        'corporationNameLine2': value.corporationNameLine2,
        'rank': value.rank,
    };
}

