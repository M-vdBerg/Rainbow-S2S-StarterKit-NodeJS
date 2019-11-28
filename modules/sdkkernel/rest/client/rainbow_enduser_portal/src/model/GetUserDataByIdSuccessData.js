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
    define(['ApiClient', 'model/GetUserDataByIdSuccessEmails', 'model/GetUserDataByIdSuccessPhoneNumbers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUserDataByIdSuccessEmails'), require('./GetUserDataByIdSuccessPhoneNumbers'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.GetUserDataByIdSuccessData = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.GetUserDataByIdSuccessEmails, root.RainbowEnduserPortal.GetUserDataByIdSuccessPhoneNumbers);
  }
}(this, function(ApiClient, GetUserDataByIdSuccessEmails, GetUserDataByIdSuccessPhoneNumbers) {
  'use strict';



  /**
   * The GetUserDataByIdSuccessData model module.
   * @module model/GetUserDataByIdSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetUserDataByIdSuccessData</code>.
   * @alias module:model/GetUserDataByIdSuccessData
   * @class
   * @param id {String} User unique identifier
   * @param loginEmail {String} DEPRECATED (will be removed in a future release).    User email address (used for login)
   * @param firstName {String} User first name
   * @param lastName {String} User last name
   * @param displayName {String} User display name (firstName + lastName concatenated on server side)
   * @param nickName {String} User nickName
   * @param title {String} User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...)
   * @param jobTitle {String} User job title
   * @param tags {Array.<String>} An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    `tags` can only be set by users who have administrator rights on the user. The user can't modify the tags.    The tags are only visible by the user and all users belonging to his organisation/company.
   * @param emails {Array.<module:model/GetUserDataByIdSuccessEmails>} Array of user emails addresses objects
   * @param phoneNumbers {Array.<module:model/GetUserDataByIdSuccessPhoneNumbers>} Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).  
   * @param country {String} User country (ISO 3166-1 alpha3 format)
   * @param language {String} User language (ISO 639-1 code format, with possibility of regional variation. Ex: both 'en' and 'en-US' are supported)
   * @param timezone {String} User timezone name
   * @param jidIm {String} User Jabber IM identifier
   * @param jidTel {String} User Jabber TEL identifier
   * @param companyId {String} User company unique identifier
   * @param companyName {String} User company name
   * @param roles {Array.<String>} DEPRECATED (will be removed in a future release).    List of user roles (Array of String)
   * @param lastUpdateDate {Date} Date of last user update (whatever the field updated)
   * @param lastAvatarUpdateDate {Date} Date of last user avatar create/update, null if no avatar
   * @param isTerminated {Boolean} Indicates if the Rainbow account of this user has been deleted
   * @param guestMode {Boolean} Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @param lastOfflineMailReceivedDate {Date} The last time the user has received a message to connect to Rainbow from the logged in user
   */
  var exports = function(id, loginEmail, firstName, lastName, displayName, nickName, title, jobTitle, tags, emails, phoneNumbers, country, language, timezone, jidIm, jidTel, companyId, companyName, roles, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode, lastOfflineMailReceivedDate) {
    var _this = this;

    _this['id'] = id;
    _this['loginEmail'] = loginEmail;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['displayName'] = displayName;
    _this['nickName'] = nickName;
    _this['title'] = title;
    _this['jobTitle'] = jobTitle;
    _this['tags'] = tags;
    _this['emails'] = emails;
    _this['phoneNumbers'] = phoneNumbers;
    _this['country'] = country;
    _this['language'] = language;
    _this['timezone'] = timezone;
    _this['jid_im'] = jidIm;
    _this['jid_tel'] = jidTel;
    _this['companyId'] = companyId;
    _this['companyName'] = companyName;
    _this['roles'] = roles;
    _this['lastUpdateDate'] = lastUpdateDate;
    _this['lastAvatarUpdateDate'] = lastAvatarUpdateDate;
    _this['isTerminated'] = isTerminated;
    _this['guestMode'] = guestMode;
    _this['lastOfflineMailReceivedDate'] = lastOfflineMailReceivedDate;
  };

  /**
   * Constructs a <code>GetUserDataByIdSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUserDataByIdSuccessData} obj Optional instance to populate.
   * @return {module:model/GetUserDataByIdSuccessData} The populated <code>GetUserDataByIdSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
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
      if (data.hasOwnProperty('nickName')) {
        obj['nickName'] = ApiClient.convertToType(data['nickName'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [GetUserDataByIdSuccessEmails]);
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [GetUserDataByIdSuccessPhoneNumbers]);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('jid_tel')) {
        obj['jid_tel'] = ApiClient.convertToType(data['jid_tel'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('lastAvatarUpdateDate')) {
        obj['lastAvatarUpdateDate'] = ApiClient.convertToType(data['lastAvatarUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('isTerminated')) {
        obj['isTerminated'] = ApiClient.convertToType(data['isTerminated'], 'Boolean');
      }
      if (data.hasOwnProperty('guestMode')) {
        obj['guestMode'] = ApiClient.convertToType(data['guestMode'], 'Boolean');
      }
      if (data.hasOwnProperty('lastOfflineMailReceivedDate')) {
        obj['lastOfflineMailReceivedDate'] = ApiClient.convertToType(data['lastOfflineMailReceivedDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * User unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * DEPRECATED (will be removed in a future release).    User email address (used for login)
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * User first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * User last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * User display name (firstName + lastName concatenated on server side)
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * User nickName
   * @member {String} nickName
   */
  exports.prototype['nickName'] = undefined;
  /**
   * User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...)
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * User job title
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * An Array of free tags associated to the user.    A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters.    `tags` can only be set by users who have administrator rights on the user. The user can't modify the tags.    The tags are only visible by the user and all users belonging to his organisation/company.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Array of user emails addresses objects
   * @member {Array.<module:model/GetUserDataByIdSuccessEmails>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Array of user phone numbers objects.    Phone number objects can:   * be created by user (information filled by user), * come from association with a system (pbx) device (association is done by admin).  
   * @member {Array.<module:model/GetUserDataByIdSuccessPhoneNumbers>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * User country (ISO 3166-1 alpha3 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * When country is 'USA', a state can be defined. Else it is not managed.
   * @member {module:model/GetUserDataByIdSuccessData.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * User language (ISO 639-1 code format, with possibility of regional variation. Ex: both 'en' and 'en-US' are supported)
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * User timezone name
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * User Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * User Jabber TEL identifier
   * @member {String} jid_tel
   */
  exports.prototype['jid_tel'] = undefined;
  /**
   * User company unique identifier
   * @member {String} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * User company name
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * DEPRECATED (will be removed in a future release).    List of user roles (Array of String)
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * Date of last user update (whatever the field updated)
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * Date of last user avatar create/update, null if no avatar
   * @member {Date} lastAvatarUpdateDate
   */
  exports.prototype['lastAvatarUpdateDate'] = undefined;
  /**
   * Indicates if the Rainbow account of this user has been deleted
   * @member {Boolean} isTerminated
   */
  exports.prototype['isTerminated'] = undefined;
  /**
   * Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @member {Boolean} guestMode
   */
  exports.prototype['guestMode'] = undefined;
  /**
   * The last time the user has received a message to connect to Rainbow from the logged in user
   * @member {Date} lastOfflineMailReceivedDate
   */
  exports.prototype['lastOfflineMailReceivedDate'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "ALABAMA"
     * @const
     */
    "ALABAMA": "ALABAMA",
    /**
     * value: "ALASKA"
     * @const
     */
    "ALASKA": "ALASKA",
    /**
     * value: "...."
     * @const
     */
    "....": "....",
    /**
     * value: "NEW_YORK"
     * @const
     */
    "NEW_YORK": "NEW_YORK",
    /**
     * value: "WYOMING"
     * @const
     */
    "WYOMING": "WYOMING"  };


  return exports;
}));


