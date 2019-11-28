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
    root.RainbowAuthenticationPortal.GetBasicLoginSuccessProvisioningNeeded = factory(root.RainbowAuthenticationPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetBasicLoginSuccessProvisioningNeeded model module.
   * @module model/GetBasicLoginSuccessProvisioningNeeded
   * @version 1.95.0
   */

  /**
   * Constructs a new <code>GetBasicLoginSuccessProvisioningNeeded</code>.
   * @alias module:model/GetBasicLoginSuccessProvisioningNeeded
   * @class
   * @param providerType {module:model/GetBasicLoginSuccessProvisioningNeeded.ProviderTypeEnum} If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the internal component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when the subscription is created).
   */
  var exports = function(providerType) {
    var _this = this;

    _this['providerType'] = providerType;
  };

  /**
   * Constructs a <code>GetBasicLoginSuccessProvisioningNeeded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBasicLoginSuccessProvisioningNeeded} obj Optional instance to populate.
   * @return {module:model/GetBasicLoginSuccessProvisioningNeeded} The populated <code>GetBasicLoginSuccessProvisioningNeeded</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
      if (data.hasOwnProperty('pgiEnterpriseId')) {
        obj['pgiEnterpriseId'] = ApiClient.convertToType(data['pgiEnterpriseId'], 'String');
      }
      if (data.hasOwnProperty('providerType')) {
        obj['providerType'] = ApiClient.convertToType(data['providerType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Only set if provisioningNeeded is set and the element of the array has providerType `JANUS`. Corresponds to the media type to use when provisioning the company account on WebRTC Conferencing component.
   * @member {module:model/GetBasicLoginSuccessProvisioningNeeded.MediaTypeEnum} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * Only set if provisioningNeeded is set and the element of the array has providerType `PGI`. Corresponds to an enterpriseId to use when provisioning the company account on PSTN Conferencing component.
   * @member {module:model/GetBasicLoginSuccessProvisioningNeeded.PgiEnterpriseIdEnum} pgiEnterpriseId
   */
  exports.prototype['pgiEnterpriseId'] = undefined;
  /**
   * If provisioningNeeded is set, each element of the array must contain providerType. providerType defines the internal component on which the provisioning is needed when subscribing to this offer (provisioning is launched asynchronously when the subscription is created).
   * @member {module:model/GetBasicLoginSuccessProvisioningNeeded.ProviderTypeEnum} providerType
   */
  exports.prototype['providerType'] = undefined;


  /**
   * Allowed values for the <code>mediaType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MediaTypeEnum = {
    /**
     * value: "webrtc"
     * @const
     */
    "webrtc": "webrtc"  };

  /**
   * Allowed values for the <code>pgiEnterpriseId</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PgiEnterpriseIdEnum = {
    /**
     * value: "testEnterpriseId"
     * @const
     */
    "testEnterpriseId": "testEnterpriseId",
    /**
     * value: "internalEnterpriseId"
     * @const
     */
    "internalEnterpriseId": "internalEnterpriseId",
    /**
     * value: "genericEnterpriseId"
     * @const
     */
    "genericEnterpriseId": "genericEnterpriseId"  };

  /**
   * Allowed values for the <code>providerType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProviderTypeEnum = {
    /**
     * value: "PGI"
     * @const
     */
    "PGI": "PGI",
    /**
     * value: "JANUS"
     * @const
     */
    "JANUS": "JANUS"  };


  return exports;
}));


