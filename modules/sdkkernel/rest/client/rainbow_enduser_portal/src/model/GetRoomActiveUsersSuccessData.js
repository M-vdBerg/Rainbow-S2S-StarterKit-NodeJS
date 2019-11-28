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
    root.RainbowEnduserPortal.GetRoomActiveUsersSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetRoomActiveUsersSuccessData model module.
   * @module model/GetRoomActiveUsersSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetRoomActiveUsersSuccessData</code>.
   * @alias module:model/GetRoomActiveUsersSuccessData
   * @class
   * @param jidIm {String} - User Jabber IM identifier
   * @param loginEmail {String} - user login
   * @param displayName {String} - user display name
   * @param companyId {String} - user rainbow company id
   * @param companyName {String} - user rainbow name
   * @param userId {String} User identifier
   * @param additionDate {String} Date when the user has been added in the room
   * @param privilege {module:model/GetRoomActiveUsersSuccessData.PrivilegeEnum} Privilege of the user in the room
   * @param status {module:model/GetRoomActiveUsersSuccessData.StatusEnum} Status of the user in the room
   */
  var exports = function(jidIm, loginEmail, displayName, companyId, companyName, userId, additionDate, privilege, status) {
    var _this = this;

    _this['jid_im'] = jidIm;
    _this['loginEmail'] = loginEmail;
    _this['displayName'] = displayName;
    _this['companyId'] = companyId;
    _this['companyName'] = companyName;
    _this['userId'] = userId;
    _this['additionDate'] = additionDate;
    _this['privilege'] = privilege;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>GetRoomActiveUsersSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRoomActiveUsersSuccessData} obj Optional instance to populate.
   * @return {module:model/GetRoomActiveUsersSuccessData} The populated <code>GetRoomActiveUsersSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('additionDate')) {
        obj['additionDate'] = ApiClient.convertToType(data['additionDate'], 'String');
      }
      if (data.hasOwnProperty('privilege')) {
        obj['privilege'] = ApiClient.convertToType(data['privilege'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * - User Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * - user login
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * - user display name
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * - user rainbow company id
   * @member {String} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * - user rainbow name
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * User identifier
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Date when the user has been added in the room
   * @member {String} additionDate
   */
  exports.prototype['additionDate'] = undefined;
  /**
   * Privilege of the user in the room
   * @member {module:model/GetRoomActiveUsersSuccessData.PrivilegeEnum} privilege
   */
  exports.prototype['privilege'] = undefined;
  /**
   * Status of the user in the room
   * @member {module:model/GetRoomActiveUsersSuccessData.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>privilege</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PrivilegeEnum = {
    /**
     * value: "guest"
     * @const
     */
    "guest": "guest",
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "moderator"
     * @const
     */
    "moderator": "moderator"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "invited"
     * @const
     */
    "invited": "invited",
    /**
     * value: "accepted"
     * @const
     */
    "accepted": "accepted",
    /**
     * value: "unsubscribed"
     * @const
     */
    "unsubscribed": "unsubscribed",
    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"  };


  return exports;
}));


