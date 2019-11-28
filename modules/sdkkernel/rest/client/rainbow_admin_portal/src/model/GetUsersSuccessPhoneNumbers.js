/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * The version of the OpenAPI document: 1.82.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.GetUsersSuccessPhoneNumbers = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetUsersSuccessPhoneNumbers model module.
   * @module model/GetUsersSuccessPhoneNumbers
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetUsersSuccessPhoneNumbers</code>.
   * @alias module:model/GetUsersSuccessPhoneNumbers
   * @class
   * @param phoneNumberId {String} Phone number unique id in directory collection.
   * @param _number {String} User phone number (as entered by user)
   * @param numberE164 {String} User E.164 phone number, computed by server from number and country fields
   * @param country {String} Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field.
   * @param isFromSystem {Boolean} Boolean indicating if phone is linked to a system (pbx).
   * @param shortNumber {String} **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX.    Only PCG can set this field.
   * @param internalNumber {String} **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), internal phone number.    Usable within a PBX group.    Admins and users can modify this internalNumber field.
   * @param systemId {String} **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that system in Rainbow database.
   * @param pbxId {String} **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that pbx.
   * @param type {String} Phone number type, one of `home`, `work`, `other`.
   * @param deviceType {String} Phone number device type, one of `landline`, `mobile`, `fax`, `other`.
   */
  var exports = function(phoneNumberId, _number, numberE164, country, isFromSystem, shortNumber, internalNumber, systemId, pbxId, type, deviceType) {
    var _this = this;

    _this['phoneNumberId'] = phoneNumberId;
    _this['number'] = _number;
    _this['numberE164'] = numberE164;
    _this['country'] = country;
    _this['isFromSystem'] = isFromSystem;
    _this['shortNumber'] = shortNumber;
    _this['internalNumber'] = internalNumber;
    _this['systemId'] = systemId;
    _this['pbxId'] = pbxId;
    _this['type'] = type;
    _this['deviceType'] = deviceType;
  };

  /**
   * Constructs a <code>GetUsersSuccessPhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUsersSuccessPhoneNumbers} obj Optional instance to populate.
   * @return {module:model/GetUsersSuccessPhoneNumbers} The populated <code>GetUsersSuccessPhoneNumbers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumberId')) {
        obj['phoneNumberId'] = ApiClient.convertToType(data['phoneNumberId'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('numberE164')) {
        obj['numberE164'] = ApiClient.convertToType(data['numberE164'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('isFromSystem')) {
        obj['isFromSystem'] = ApiClient.convertToType(data['isFromSystem'], 'Boolean');
      }
      if (data.hasOwnProperty('shortNumber')) {
        obj['shortNumber'] = ApiClient.convertToType(data['shortNumber'], 'String');
      }
      if (data.hasOwnProperty('internalNumber')) {
        obj['internalNumber'] = ApiClient.convertToType(data['internalNumber'], 'String');
      }
      if (data.hasOwnProperty('systemId')) {
        obj['systemId'] = ApiClient.convertToType(data['systemId'], 'String');
      }
      if (data.hasOwnProperty('pbxId')) {
        obj['pbxId'] = ApiClient.convertToType(data['pbxId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number unique id in directory collection.
   * @member {String} phoneNumberId
   */
  exports.prototype['phoneNumberId'] = undefined;
  /**
   * User phone number (as entered by user)
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * User E.164 phone number, computed by server from number and country fields
   * @member {String} numberE164
   */
  exports.prototype['numberE164'] = undefined;
  /**
   * Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Boolean indicating if phone is linked to a system (pbx).
   * @member {Boolean} isFromSystem
   */
  exports.prototype['isFromSystem'] = undefined;
  /**
   * **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), short phone number (corresponds to the number monitored by PCG).    Only usable within the same PBX.    Only PCG can set this field.
   * @member {String} shortNumber
   */
  exports.prototype['shortNumber'] = undefined;
  /**
   * **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), internal phone number.    Usable within a PBX group.    Admins and users can modify this internalNumber field.
   * @member {String} internalNumber
   */
  exports.prototype['internalNumber'] = undefined;
  /**
   * **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that system in Rainbow database.
   * @member {String} systemId
   */
  exports.prototype['systemId'] = undefined;
  /**
   * **[Only for phone numbers linked to a system (pbx)]**   If phone is linked to a system (pbx), unique identifier of that pbx.
   * @member {String} pbxId
   */
  exports.prototype['pbxId'] = undefined;
  /**
   * Phone number type, one of `home`, `work`, `other`.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Phone number device type, one of `landline`, `mobile`, `fax`, `other`.
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;



  return exports;
}));


