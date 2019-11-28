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
    root.RainbowAdminPortal.PutCompanySSOSettings = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PutCompanySSOSettings model module.
   * @module model/PutCompanySSOSettings
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PutCompanySSOSettings</code>.
   * @alias module:model/PutCompanySSOSettings
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PutCompanySSOSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutCompanySSOSettings} obj Optional instance to populate.
   * @return {module:model/PutCompanySSOSettings} The populated <code>PutCompanySSOSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('loginUrl')) {
        obj['loginUrl'] = ApiClient.convertToType(data['loginUrl'], 'String');
      }
      if (data.hasOwnProperty('logoutUrl')) {
        obj['logoutUrl'] = ApiClient.convertToType(data['logoutUrl'], 'String');
      }
      if (data.hasOwnProperty('certificates')) {
        obj['certificates'] = ApiClient.convertToType(data['certificates'], ['String']);
      }
      if (data.hasOwnProperty('uidAttribute')) {
        obj['uidAttribute'] = ApiClient.convertToType(data['uidAttribute'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Identity provider URL to perform a login (SAML)
   * @member {String} loginUrl
   */
  exports.prototype['loginUrl'] = undefined;
  /**
   * Identity provider URL to perform a logout (SAML)
   * @member {String} logoutUrl
   */
  exports.prototype['logoutUrl'] = undefined;
  /**
   * List of strings containing Identity provider certificates in a PEM format (SAML)
   * @member {Array.<String>} certificates
   */
  exports.prototype['certificates'] = undefined;
  /**
   * Attribute name provided by the identity provider to identify a user (SAML)
   * @member {String} uidAttribute
   */
  exports.prototype['uidAttribute'] = undefined;
  /**
   * Enable or disable the use of these single-sign-on settings
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;



  return exports;
}));


