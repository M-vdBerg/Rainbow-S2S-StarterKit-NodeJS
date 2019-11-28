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
    root.RainbowEnduserPortal.SendUsersJoinRoomInvitationSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SendUsersJoinRoomInvitationSuccessData model module.
   * @module model/SendUsersJoinRoomInvitationSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>SendUsersJoinRoomInvitationSuccessData</code>.
   * @alias module:model/SendUsersJoinRoomInvitationSuccessData
   * @class
   * @param scenario {module:model/SendUsersJoinRoomInvitationSuccessData.ScenarioEnum} Which is the goal of this invitation.
   * @param status {String} If at least, one userId is valid or an email is well formed, status is \"Invitations successfully sent\". Else an error 400 Bad request is returned.
   * @param confEndPoint {Object} 
   * @param attendees {Object} 
   * @param guestEmails {Array.<String>} List of email address for which an email is sent to invite the receiver to create his Rainbow account before joining the room.
   * @param invalidUsers {String} List of invalid userId (not well formed or not Rainbow user)
   */
  var exports = function(scenario, status, confEndPoint, attendees, guestEmails, invalidUsers) {
    var _this = this;

    _this['scenario'] = scenario;
    _this['status'] = status;
    _this['confEndPoint'] = confEndPoint;
    _this['attendees'] = attendees;
    _this['guestEmails'] = guestEmails;
    _this['invalidUsers'] = invalidUsers;
  };

  /**
   * Constructs a <code>SendUsersJoinRoomInvitationSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendUsersJoinRoomInvitationSuccessData} obj Optional instance to populate.
   * @return {module:model/SendUsersJoinRoomInvitationSuccessData} The populated <code>SendUsersJoinRoomInvitationSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scenario')) {
        obj['scenario'] = ApiClient.convertToType(data['scenario'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('confEndPoint')) {
        obj['confEndPoint'] = ApiClient.convertToType(data['confEndPoint'], Object);
      }
      if (data.hasOwnProperty('attendees')) {
        obj['attendees'] = ApiClient.convertToType(data['attendees'], Object);
      }
      if (data.hasOwnProperty('guestEmails')) {
        obj['guestEmails'] = ApiClient.convertToType(data['guestEmails'], ['String']);
      }
      if (data.hasOwnProperty('invalidUsers')) {
        obj['invalidUsers'] = ApiClient.convertToType(data['invalidUsers'], 'String');
      }
    }
    return obj;
  }

  /**
   * Which is the goal of this invitation.
   * @member {module:model/SendUsersJoinRoomInvitationSuccessData.ScenarioEnum} scenario
   */
  exports.prototype['scenario'] = undefined;
  /**
   * If at least, one userId is valid or an email is well formed, status is \"Invitations successfully sent\". Else an error 400 Bad request is returned.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Object} confEndPoint
   */
  exports.prototype['confEndPoint'] = undefined;
  /**
   * @member {Object} attendees
   */
  exports.prototype['attendees'] = undefined;
  /**
   * List of email address for which an email is sent to invite the receiver to create his Rainbow account before joining the room.
   * @member {Array.<String>} guestEmails
   */
  exports.prototype['guestEmails'] = undefined;
  /**
   * List of invalid userId (not well formed or not Rainbow user)
   * @member {String} invalidUsers
   */
  exports.prototype['invalidUsers'] = undefined;


  /**
   * Allowed values for the <code>scenario</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScenarioEnum = {
    /**
     * value: "chat"
     * @const
     */
    "chat": "chat",
    /**
     * value: "pstn-conference"
     * @const
     */
    "pstn-conference": "pstn-conference",
    /**
     * value: "video-conference"
     * @const
     */
    "video-conference": "video-conference"  };


  return exports;
}));


