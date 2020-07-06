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
 * @interface LegacyContactContactPayloadItemAllOf
 */
export interface LegacyContactContactPayloadItemAllOf {
    /**
     * external key
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    externalKey?: string;
    /**
     * External key type
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    externalKeyType?: string;
    /**
     * Gender of the contact. Either MALE or FEMALE
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    gender?: string;
    /**
     * sin of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    sin?: string;
    /**
     * birthdate of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    birthdate?: string;
    /**
     * Smoker status of the contact.
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    smoker?: string;
    /**
     * Smoker status since date.
     * @type {AnyType}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    smokerSince?: AnyType;
    /**
     * phone number of the contact at home
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneHome?: string;
    /**
     * second phone number of the contact at home
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneHomeSecond?: string;
    /**
     * assistant phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneAssistant?: string;
    /**
     * office phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneOffice?: string;
    /**
     * second office phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneOfficeSecond?: string;
    /**
     * cell phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneCell?: string;
    /**
     * Pager phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phonePager?: string;
    /**
     * fax phone number of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    phoneFax?: string;
    /**
     * main email of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    mainEmail?: string;
    /**
     * personal email of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    emailPersonal?: string;
    /**
     * Web Site URL. This represent the main website for the contact.
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    webSite?: string;
    /**
     * business email of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    emailBusiness?: string;
    /**
     * business email of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    emailOther?: string;
    /**
     * notes of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    notes?: string;
    /**
     * peculiarity of the contact
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    peculiarity?: string;
    /**
     * End of the financial year (for organization)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    endFinancialYear?: string;
    /**
     * Language
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    language?: string;
    /**
     * Active (boolean)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    active?: string;
    /**
     * Publish (boolean)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    publish?: string;
    /**
     * Title
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    title?: string;
    /**
     * Suffix
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    suffix?: string;
    /**
     * Civility
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    civility?: string;
    /**
     * Civility id
     * @type {number}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    civilityId?: number;
    /**
     * Person Addressed (Correspondance)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    personAddressed?: string;
    /**
     * Organization name (Correspondance)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    organizationLine1?: string;
    /**
     * Organization name - second line (Correspondance)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    organizationLine2?: string;
    /**
     * Department (Correspondance)
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    department?: string;
    /**
     * Customer Number
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    customerNumber?: string;
    /**
     * Birth Place
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    birthPlace?: string;
    /**
     * Nationality
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    nationality?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    orgDateCreated?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    orgDateClosed?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    dateEndFinancialYear?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    orgIdNo?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    orgFedNo?: string;
    /**
     * 
     * @type {string}
     * @memberof LegacyContactContactPayloadItemAllOf
     */
    orgProvNo?: string;
}

export function LegacyContactContactPayloadItemAllOfFromJSON(json: any): LegacyContactContactPayloadItemAllOf {
    return LegacyContactContactPayloadItemAllOfFromJSONTyped(json, false);
}

export function LegacyContactContactPayloadItemAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyContactContactPayloadItemAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalKey': !exists(json, 'externalKey') ? undefined : json['externalKey'],
        'externalKeyType': !exists(json, 'externalKeyType') ? undefined : json['externalKeyType'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'sin': !exists(json, 'sin') ? undefined : json['sin'],
        'birthdate': !exists(json, 'birthdate') ? undefined : json['birthdate'],
        'smoker': !exists(json, 'smoker') ? undefined : json['smoker'],
        'smokerSince': !exists(json, 'smokerSince') ? undefined : AnyTypeFromJSON(json['smokerSince']),
        'phoneHome': !exists(json, 'phoneHome') ? undefined : json['phoneHome'],
        'phoneHomeSecond': !exists(json, 'phoneHomeSecond') ? undefined : json['phoneHomeSecond'],
        'phoneAssistant': !exists(json, 'phoneAssistant') ? undefined : json['phoneAssistant'],
        'phoneOffice': !exists(json, 'phoneOffice') ? undefined : json['phoneOffice'],
        'phoneOfficeSecond': !exists(json, 'phoneOfficeSecond') ? undefined : json['phoneOfficeSecond'],
        'phoneCell': !exists(json, 'phoneCell') ? undefined : json['phoneCell'],
        'phonePager': !exists(json, 'phonePager') ? undefined : json['phonePager'],
        'phoneFax': !exists(json, 'phoneFax') ? undefined : json['phoneFax'],
        'mainEmail': !exists(json, 'mainEmail') ? undefined : json['mainEmail'],
        'emailPersonal': !exists(json, 'emailPersonal') ? undefined : json['emailPersonal'],
        'webSite': !exists(json, 'webSite') ? undefined : json['webSite'],
        'emailBusiness': !exists(json, 'emailBusiness') ? undefined : json['emailBusiness'],
        'emailOther': !exists(json, 'emailOther') ? undefined : json['emailOther'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'peculiarity': !exists(json, 'peculiarity') ? undefined : json['peculiarity'],
        'endFinancialYear': !exists(json, 'endFinancialYear') ? undefined : json['endFinancialYear'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'publish': !exists(json, 'publish') ? undefined : json['publish'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
        'civility': !exists(json, 'civility') ? undefined : json['civility'],
        'civilityId': !exists(json, 'civilityId') ? undefined : json['civilityId'],
        'personAddressed': !exists(json, 'personAddressed') ? undefined : json['personAddressed'],
        'organizationLine1': !exists(json, 'organizationLine1') ? undefined : json['organizationLine1'],
        'organizationLine2': !exists(json, 'organizationLine2') ? undefined : json['organizationLine2'],
        'department': !exists(json, 'department') ? undefined : json['department'],
        'customerNumber': !exists(json, 'customerNumber') ? undefined : json['customerNumber'],
        'birthPlace': !exists(json, 'birthPlace') ? undefined : json['birthPlace'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'orgDateCreated': !exists(json, 'orgDateCreated') ? undefined : json['orgDateCreated'],
        'orgDateClosed': !exists(json, 'orgDateClosed') ? undefined : json['orgDateClosed'],
        'dateEndFinancialYear': !exists(json, 'dateEndFinancialYear') ? undefined : json['dateEndFinancialYear'],
        'orgIdNo': !exists(json, 'orgIdNo') ? undefined : json['orgIdNo'],
        'orgFedNo': !exists(json, 'orgFedNo') ? undefined : json['orgFedNo'],
        'orgProvNo': !exists(json, 'orgProvNo') ? undefined : json['orgProvNo'],
    };
}

export function LegacyContactContactPayloadItemAllOfToJSON(value?: LegacyContactContactPayloadItemAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalKey': value.externalKey,
        'externalKeyType': value.externalKeyType,
        'gender': value.gender,
        'sin': value.sin,
        'birthdate': value.birthdate,
        'smoker': value.smoker,
        'smokerSince': AnyTypeToJSON(value.smokerSince),
        'phoneHome': value.phoneHome,
        'phoneHomeSecond': value.phoneHomeSecond,
        'phoneAssistant': value.phoneAssistant,
        'phoneOffice': value.phoneOffice,
        'phoneOfficeSecond': value.phoneOfficeSecond,
        'phoneCell': value.phoneCell,
        'phonePager': value.phonePager,
        'phoneFax': value.phoneFax,
        'mainEmail': value.mainEmail,
        'emailPersonal': value.emailPersonal,
        'webSite': value.webSite,
        'emailBusiness': value.emailBusiness,
        'emailOther': value.emailOther,
        'notes': value.notes,
        'peculiarity': value.peculiarity,
        'endFinancialYear': value.endFinancialYear,
        'language': value.language,
        'active': value.active,
        'publish': value.publish,
        'title': value.title,
        'suffix': value.suffix,
        'civility': value.civility,
        'civilityId': value.civilityId,
        'personAddressed': value.personAddressed,
        'organizationLine1': value.organizationLine1,
        'organizationLine2': value.organizationLine2,
        'department': value.department,
        'customerNumber': value.customerNumber,
        'birthPlace': value.birthPlace,
        'nationality': value.nationality,
        'orgDateCreated': value.orgDateCreated,
        'orgDateClosed': value.orgDateClosed,
        'dateEndFinancialYear': value.dateEndFinancialYear,
        'orgIdNo': value.orgIdNo,
        'orgFedNo': value.orgFedNo,
        'orgProvNo': value.orgProvNo,
    };
}

