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
    root.RainbowAdminPortal.GetApiRainbowAdminV10ProfilesSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetApiRainbowAdminV10ProfilesSuccess model module.
   * @module model/GetApiRainbowAdminV10ProfilesSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetApiRainbowAdminV10ProfilesSuccess</code>.
   * @alias module:model/GetApiRainbowAdminV10ProfilesSuccess
   * @class
   * @param id {String} Profile unique identifier
   * @param name {String} Profile name
   * @param description {String} Profile description
   * @param creationDate {Date} Profile creation date
   * @param featuresList {Date} List of features associated to this profile, with the associated restriction (if any):    `featureId`: Feature unique identified    `featureName`: Feature name (automatically filled by server based on name of Feature having provided featureId)    `featureUniqueRef`: Feature unique reference (to be used for controls on limitations linked to this feature in server/client code) (automatically filled by server based on uniqueRef of Feature having provided featureId)    `featureType`: Feature limitation type (automatically filled by server based on name of Feature having provided featureId)    `addedDate`: Date when the feature was updated for the profile    `lastUpdateDate`: Date when the feature was updated for the profile    `isEnabled`: In case feature has type boolean (on/off), is the feature enabled    `limitMin`: In case feature has type number, limit min of the feature (if applicable)    `limitMax`: In case feature has type number, limit max of the feature (if applicable)
   */
  var exports = function(id, name, description, creationDate, featuresList) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['description'] = description;
    _this['creationDate'] = creationDate;
    _this['featuresList'] = featuresList;
  };

  /**
   * Constructs a <code>GetApiRainbowAdminV10ProfilesSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetApiRainbowAdminV10ProfilesSuccess} obj Optional instance to populate.
   * @return {module:model/GetApiRainbowAdminV10ProfilesSuccess} The populated <code>GetApiRainbowAdminV10ProfilesSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('featuresList')) {
        obj['featuresList'] = ApiClient.convertToType(data['featuresList'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Profile unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Profile name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Profile description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Profile creation date
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * List of features associated to this profile, with the associated restriction (if any):    `featureId`: Feature unique identified    `featureName`: Feature name (automatically filled by server based on name of Feature having provided featureId)    `featureUniqueRef`: Feature unique reference (to be used for controls on limitations linked to this feature in server/client code) (automatically filled by server based on uniqueRef of Feature having provided featureId)    `featureType`: Feature limitation type (automatically filled by server based on name of Feature having provided featureId)    `addedDate`: Date when the feature was updated for the profile    `lastUpdateDate`: Date when the feature was updated for the profile    `isEnabled`: In case feature has type boolean (on/off), is the feature enabled    `limitMin`: In case feature has type number, limit min of the feature (if applicable)    `limitMax`: In case feature has type number, limit max of the feature (if applicable)
   * @member {Date} featuresList
   */
  exports.prototype['featuresList'] = undefined;



  return exports;
}));


