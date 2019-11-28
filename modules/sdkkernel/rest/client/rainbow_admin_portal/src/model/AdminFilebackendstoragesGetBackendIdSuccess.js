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
    root.RainbowAdminPortal.AdminFilebackendstoragesGetBackendIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AdminFilebackendstoragesGetBackendIdSuccess model module.
   * @module model/AdminFilebackendstoragesGetBackendIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>AdminFilebackendstoragesGetBackendIdSuccess</code>.
   * @alias module:model/AdminFilebackendstoragesGetBackendIdSuccess
   * @class
   * @param id {String} File backend unique identifier.
   * @param endPoint {String} Backend End-Point. The URL for authentication (ex: http://swift.rainbow.rdna:5000/v3)
   * @param tenantId {String} Authentication
   * @param tenantName {String} Authentication
   * @param userName {String} Authentication
   * @param password {String} Authentication
   * @param regionName {String} Free value
   * @param hostName {String} The endPoint name (ex: swift.rainbow.rdna)
   * @param rootStorageURL {String} The beginning of the path to access to a resource (ex: http://swift.rainbow.rdna:8080/v1/AUTH_a67b0e12592941488a5f53189c61022d)
   */
  var exports = function(id, endPoint, tenantId, tenantName, userName, password, regionName, hostName, rootStorageURL) {
    var _this = this;

    _this['id'] = id;
    _this['endPoint'] = endPoint;
    _this['tenantId'] = tenantId;
    _this['tenantName'] = tenantName;
    _this['userName'] = userName;
    _this['password'] = password;
    _this['regionName'] = regionName;
    _this['hostName'] = hostName;
    _this['rootStorageURL'] = rootStorageURL;
  };

  /**
   * Constructs a <code>AdminFilebackendstoragesGetBackendIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminFilebackendstoragesGetBackendIdSuccess} obj Optional instance to populate.
   * @return {module:model/AdminFilebackendstoragesGetBackendIdSuccess} The populated <code>AdminFilebackendstoragesGetBackendIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('endPoint')) {
        obj['endPoint'] = ApiClient.convertToType(data['endPoint'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
      }
      if (data.hasOwnProperty('tenantName')) {
        obj['tenantName'] = ApiClient.convertToType(data['tenantName'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('regionName')) {
        obj['regionName'] = ApiClient.convertToType(data['regionName'], 'String');
      }
      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('rootStorageURL')) {
        obj['rootStorageURL'] = ApiClient.convertToType(data['rootStorageURL'], 'String');
      }
    }
    return obj;
  }

  /**
   * File backend unique identifier.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Backend End-Point. The URL for authentication (ex: http://swift.rainbow.rdna:5000/v3)
   * @member {String} endPoint
   */
  exports.prototype['endPoint'] = undefined;
  /**
   * Authentication
   * @member {String} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * Authentication
   * @member {String} tenantName
   */
  exports.prototype['tenantName'] = undefined;
  /**
   * Authentication
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * Authentication
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Free value
   * @member {String} regionName
   */
  exports.prototype['regionName'] = undefined;
  /**
   * The endPoint name (ex: swift.rainbow.rdna)
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * The beginning of the path to access to a resource (ex: http://swift.rainbow.rdna:8080/v1/AUTH_a67b0e12592941488a5f53189c61022d)
   * @member {String} rootStorageURL
   */
  exports.prototype['rootStorageURL'] = undefined;



  return exports;
}));


