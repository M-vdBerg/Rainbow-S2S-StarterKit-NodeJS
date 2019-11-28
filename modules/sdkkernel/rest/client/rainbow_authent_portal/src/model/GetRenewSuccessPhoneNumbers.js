/**
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: 1.95.0
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
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.GetRenewSuccessPhoneNumbers = factory(root.RainbowAuthenticationPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetRenewSuccessPhoneNumbers model module.
   * @module model/GetRenewSuccessPhoneNumbers
   * @version 1.95.0
   */

  /**
   * Constructs a new <code>GetRenewSuccessPhoneNumbers</code>.
   * @alias module:model/GetRenewSuccessPhoneNumbers
   * @class
   * @param country {String} Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field.
   * @param deviceType {String} Phone number device type, one of <code>landline</code>, <code>mobile</code>, <code>fax</code>, <code>other</code>.
   * @param isFromSystem {Boolean} Boolean indicating if phone is linked to a system (pbx).
   * @param phoneNumberId {String} Phone number unique id in directory collection.
   * @param type {String} Phone number type, one of <code>home</code>, <code>work</code>, <code>other</code>.
   */
  var exports = function(country, deviceType, isFromSystem, phoneNumberId, type) {
    var _this = this;

    _this['country'] = country;
    _this['deviceType'] = deviceType;
    _this['isFromSystem'] = isFromSystem;
    _this['phoneNumberId'] = phoneNumberId;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>GetRenewSuccessPhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRenewSuccessPhoneNumbers} obj Optional instance to populate.
   * @return {module:model/GetRenewSuccessPhoneNumbers} The populated <code>GetRenewSuccessPhoneNumbers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('internalNumber')) {
        obj['internalNumber'] = ApiClient.convertToType(data['internalNumber'], 'String');
      }
      if (data.hasOwnProperty('isFromSystem')) {
        obj['isFromSystem'] = ApiClient.convertToType(data['isFromSystem'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('numberE164')) {
        obj['numberE164'] = ApiClient.convertToType(data['numberE164'], 'String');
      }
      if (data.hasOwnProperty('pbxId')) {
        obj['pbxId'] = ApiClient.convertToType(data['pbxId'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberId')) {
        obj['phoneNumberId'] = ApiClient.convertToType(data['phoneNumberId'], 'String');
      }
      if (data.hasOwnProperty('shortNumber')) {
        obj['shortNumber'] = ApiClient.convertToType(data['shortNumber'], 'String');
      }
      if (data.hasOwnProperty('systemId')) {
        obj['systemId'] = ApiClient.convertToType(data['systemId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number country (ISO 3166-1 alpha3 format). Used to compute numberE164 field from number field.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Phone number device type, one of <code>landline</code>, <code>mobile</code>, <code>fax</code>, <code>other</code>.
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * <b>[Only for phone numbers linked to a system (pbx)]</b> <br/> If phone is linked to a system (pbx), internal phone number. <br/> Usable within a PBX group. <br/> Admins and users can modify this internalNumber field.
   * @member {String} internalNumber
   */
  exports.prototype['internalNumber'] = undefined;
  /**
   * Boolean indicating if phone is linked to a system (pbx).
   * @member {Boolean} isFromSystem
   */
  exports.prototype['isFromSystem'] = undefined;
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
   * <b>[Only for phone numbers linked to a system (pbx)]</b> <br/> If phone is linked to a system (pbx), unique identifier of that pbx.
   * @member {String} pbxId
   */
  exports.prototype['pbxId'] = undefined;
  /**
   * Phone number unique id in directory collection.
   * @member {String} phoneNumberId
   */
  exports.prototype['phoneNumberId'] = undefined;
  /**
   * <b>[Only for phone numbers linked to a system (pbx)]</b> <br/> If phone is linked to a system (pbx), short phone number (corresponds to the number monitored by PCG). <br/> Only usable within the same PBX. <br/> Only PCG can set this field.
   * @member {String} shortNumber
   */
  exports.prototype['shortNumber'] = undefined;
  /**
   * <b>[Only for phone numbers linked to a system (pbx)]</b> <br/> If phone is linked to a system (pbx), unique identifier of that system in Rainbow database.
   * @member {String} systemId
   */
  exports.prototype['systemId'] = undefined;
  /**
   * Phone number type, one of <code>home</code>, <code>work</code>, <code>other</code>.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


