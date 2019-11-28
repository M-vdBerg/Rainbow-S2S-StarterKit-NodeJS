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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.CreateUserInvitation = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CreateUserInvitation model module.
   * @module model/CreateUserInvitation
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>CreateUserInvitation</code>.
   * @alias module:model/CreateUserInvitation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreateUserInvitation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserInvitation} obj Optional instance to populate.
   * @return {module:model/CreateUserInvitation} The populated <code>CreateUserInvitation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('invitedPhoneNumber')) {
        obj['invitedPhoneNumber'] = ApiClient.convertToType(data['invitedPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('invitedUserId')) {
        obj['invitedUserId'] = ApiClient.convertToType(data['invitedUserId'], 'String');
      }
      if (data.hasOwnProperty('lang')) {
        obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
      }
      if (data.hasOwnProperty('customMessage')) {
        obj['customMessage'] = ApiClient.convertToType(data['customMessage'], 'String');
      }
    }
    return obj;
  }

  /**
   * Invited email address.       One of `email`, `invitedPhoneNumber` or `invitedUserId` is mandatory.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Invited phone number.       One of `email`, `invitedPhoneNumber` or `invitedUserId` is mandatory.
   * @member {String} invitedPhoneNumber
   */
  exports.prototype['invitedPhoneNumber'] = undefined;
  /**
   * Invited Rainbow user unique ID       One of `email`, `invitedPhoneNumber` or `invitedUserId` is mandatory.
   * @member {String} invitedUserId
   */
  exports.prototype['invitedUserId'] = undefined;
  /**
   * Force language of the email notification if not available.       Language format is composed of locale using format `ISO 639-1`, with optionally the regional variation using `ISO 3166‑1 alpha-2` (separated by hyphen).    Locale part is in lowercase, regional part is in uppercase. Examples: en, en-US, fr, fr-FR, fr-CA, es-ES, es-MX, ...    More information about the format can be found on this [link][0].       Algorithm for choosing language of email:   * invited user language is used if invited user exists in Rainbow and his language is available, * else provided language in parameter `lang` is used if provided, * else inviting user language is used if language is available, * otherwise English is used.  Not used if parameter `invitedPhoneNumber` is provided (as the SMS is sent by the client, not the server).  [0]: https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes
   * @member {String} lang
   */
  exports.prototype['lang'] = undefined;
  /**
   * Custom message that inviting user can add in email body    Not used if parameter `invitedPhoneNumber` is provided (as the SMS is sent by the client, not the server).
   * @member {String} customMessage
   */
  exports.prototype['customMessage'] = undefined;



  return exports;
}));


