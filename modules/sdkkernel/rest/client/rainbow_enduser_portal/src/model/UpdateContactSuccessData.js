/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * The version of the OpenAPI document: 1.84.0
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
    define(['ApiClient', 'model/UpdateContactSuccessAddresses', 'model/UpdateContactSuccessEmails', 'model/UpdateContactSuccessOtherData', 'model/UpdateContactSuccessPhoneNumbers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpdateContactSuccessAddresses'), require('./UpdateContactSuccessEmails'), require('./UpdateContactSuccessOtherData'), require('./UpdateContactSuccessPhoneNumbers'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.UpdateContactSuccessData = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.UpdateContactSuccessAddresses, root.RainbowEnduserPortal.UpdateContactSuccessEmails, root.RainbowEnduserPortal.UpdateContactSuccessOtherData, root.RainbowEnduserPortal.UpdateContactSuccessPhoneNumbers);
  }
}(this, function(ApiClient, UpdateContactSuccessAddresses, UpdateContactSuccessEmails, UpdateContactSuccessOtherData, UpdateContactSuccessPhoneNumbers) {
  'use strict';



  /**
   * The UpdateContactSuccessData model module.
   * @module model/UpdateContactSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>UpdateContactSuccessData</code>.
   * @alias module:model/UpdateContactSuccessData
   * @class
   * @param id {String} Contact unique identifier
   * @param contactId {String} Id of the contact coming from the source who created it
   * @param firstName {String} Contact firstName
   * @param lastName {String} Contact lastName
   * @param displayName {String} Contact displayName
   * @param company {String} Contact company
   * @param jobTitle {String} Contact jobTitle
   * @param phoneNumbers {Array.<module:model/UpdateContactSuccessPhoneNumbers>} Contact phone numbers
   * @param emails {Array.<module:model/UpdateContactSuccessEmails>} Contact emails
   * @param addresses {Array.<module:model/UpdateContactSuccessAddresses>} Contact addresses
   * @param groups {Array.<String>} Contact groups type
   * @param otherData {Array.<module:model/UpdateContactSuccessOtherData>} Other user data – may include birthday date, Skype/Facebook pseudo/profile
   */
  var exports = function(id, contactId, firstName, lastName, displayName, company, jobTitle, phoneNumbers, emails, addresses, groups, otherData) {
    var _this = this;

    _this['id'] = id;
    _this['contactId'] = contactId;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['displayName'] = displayName;
    _this['company'] = company;
    _this['jobTitle'] = jobTitle;
    _this['phoneNumbers'] = phoneNumbers;
    _this['emails'] = emails;
    _this['addresses'] = addresses;
    _this['groups'] = groups;
    _this['otherData'] = otherData;
  };

  /**
   * Constructs a <code>UpdateContactSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateContactSuccessData} obj Optional instance to populate.
   * @return {module:model/UpdateContactSuccessData} The populated <code>UpdateContactSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [UpdateContactSuccessPhoneNumbers]);
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [UpdateContactSuccessEmails]);
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [UpdateContactSuccessAddresses]);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
      }
      if (data.hasOwnProperty('otherData')) {
        obj['otherData'] = ApiClient.convertToType(data['otherData'], [UpdateContactSuccessOtherData]);
      }
    }
    return obj;
  }

  /**
   * Contact unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of the contact coming from the source who created it
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * Contact firstName
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Contact lastName
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Contact displayName
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Contact company
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Contact jobTitle
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * Contact phone numbers
   * @member {Array.<module:model/UpdateContactSuccessPhoneNumbers>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * Contact emails
   * @member {Array.<module:model/UpdateContactSuccessEmails>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Contact addresses
   * @member {Array.<module:model/UpdateContactSuccessAddresses>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * Contact groups type
   * @member {Array.<String>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * Other user data – may include birthday date, Skype/Facebook pseudo/profile
   * @member {Array.<module:model/UpdateContactSuccessOtherData>} otherData
   */
  exports.prototype['otherData'] = undefined;



  return exports;
}));


