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
    define(['ApiClient', 'model/GetBasicLoginSuccessEmails', 'model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin', 'model/GetBasicLoginSuccessLoggedInUserProfiles', 'model/GetBasicLoginSuccessPhoneNumbers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetBasicLoginSuccessEmails'), require('./GetBasicLoginSuccessLoggedInUserCreatedByAdmin'), require('./GetBasicLoginSuccessLoggedInUserProfiles'), require('./GetBasicLoginSuccessPhoneNumbers'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.GetBasicLoginSuccessLoggedInUser = factory(root.RainbowAuthenticationPortal.ApiClient, root.RainbowAuthenticationPortal.GetBasicLoginSuccessEmails, root.RainbowAuthenticationPortal.GetBasicLoginSuccessLoggedInUserCreatedByAdmin, root.RainbowAuthenticationPortal.GetBasicLoginSuccessLoggedInUserProfiles, root.RainbowAuthenticationPortal.GetBasicLoginSuccessPhoneNumbers);
  }
}(this, function(ApiClient, GetBasicLoginSuccessEmails, GetBasicLoginSuccessLoggedInUserCreatedByAdmin, GetBasicLoginSuccessLoggedInUserProfiles, GetBasicLoginSuccessPhoneNumbers) {
  'use strict';



  /**
   * The GetBasicLoginSuccessLoggedInUser model module.
   * @module model/GetBasicLoginSuccessLoggedInUser
   * @version 1.95.0
   */

  /**
   * Constructs a new <code>GetBasicLoginSuccessLoggedInUser</code>.
   * @alias module:model/GetBasicLoginSuccessLoggedInUser
   * @class
   * @param activationDate {Date} User activation date
   * @param adminType {String} In case of user's is 'admin', define the subtype (organisation_admin, company_admin, site_admin (default undefined)
   * @param companyId {String} User company unique identifier
   * @param companyName {String} User company name
   * @param country {String} User country (ISO 3166-1 alpha3 format)
   * @param createdBySelfRegister {Boolean} true if user has been created using self register
   * @param creationDate {Date} User creation date
   * @param displayName {String} User display name (firstName + lastName concatenated on server side)
   * @param emails {Array.<module:model/GetBasicLoginSuccessEmails>} Array of user emails addresses objects
   * @param firstLoginDate {Date} Date of first user login (only set the first time user logs in, null if user never logged in)
   * @param firstName {String} User first name
   * @param guestMode {Boolean} Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @param id {String} User unique identifier
   * @param initializationDate {Date} User initialization date
   * @param isADSearchAvailable {Boolean} Is ActiveDirectory (Office365) search available for this user
   * @param isActive {Boolean} Is user active
   * @param isInDefaultCompany {Boolean} Is user in default company
   * @param isInitialized {Boolean} Is user initialized
   * @param isTerminated {Boolean} Indicates if the Rainbow account of this user has been deleted
   * @param jidIm {String} User Jabber IM identifier
   * @param jidPassword {String} User Jabber TEL identifier
   * @param jidTel {String} User Jabber TEL identifier
   * @param lastAvatarUpdateDate {Date} Date of last user avatar create/update, null if no avatar
   * @param lastLoginDate {Date} Date of last user login (defined even if user is logged out)
   * @param lastName {String} User last name
   * @param lastUpdateDate {Date} Date of last user update (whatever the field updated)
   * @param loggedSince {Date} Date of last user login (null if user is logged out)
   * @param loginEmail {String} User email address (used for login)
   * @param organisationId {String} In addition to User companyId, optional identifier to indicate the user belongs also to an organization
   * @param phoneNumbers {Array.<module:model/GetBasicLoginSuccessPhoneNumbers>} Array of user phone numbers objects. <br/> Phone number objects can: <ul>     <li> be created by user (information filled by user),</li>     <li> come from association with a system (pbx) device (association is done by admin).</li> </ul>
   * @param profiles {module:model/GetBasicLoginSuccessLoggedInUserProfiles} 
   * @param roles {Array.<String>} List of user roles (Array of String)
   * @param siteId {String} In addition to User companyId, optional identifier to indicate the user belongs also to a site
   * @param visibility {module:model/GetBasicLoginSuccessLoggedInUser.VisibilityEnum} User visibility </br> Define if the user can be searched by users being in other companies and if the user can search users being in other companies. <br/> Visibility can be: - `same_than_company`: The same visibility than the user's company's is applied to the user. When this user visibility is used, if the visibility of the company is changed the user's visibility will use this company new visibility. - `public`: User can be searched by external users / can search external users. User can invite external users / can be invited by external users - `private`: User **can't** be searched by external users / can search external users. User can invite external users / can be invited by external users - `closed`: User **can't** be searched by external users / **can't** search external users. User can invite external users / can be invited by external users - `isolated`: User **can't** be searched by external users / **can't** search external users. User **can't** invite external users / **can't** be invited by external users - `none`:  Default value reserved for guest. User **can't** be searched by **any users** (even within the same company) / can search external users. User can invite external users / can be invited by external users  External users mean public user not being in user's company nor user's organisation nor a company visible by user's company.
   */
  var exports = function(activationDate, adminType, companyId, companyName, country, createdBySelfRegister, creationDate, displayName, emails, firstLoginDate, firstName, guestMode, id, initializationDate, isADSearchAvailable, isActive, isInDefaultCompany, isInitialized, isTerminated, jidIm, jidPassword, jidTel, lastAvatarUpdateDate, lastLoginDate, lastName, lastUpdateDate, loggedSince, loginEmail, organisationId, phoneNumbers, profiles, roles, siteId, visibility) {
    var _this = this;

    _this['activationDate'] = activationDate;
    _this['adminType'] = adminType;
    _this['companyId'] = companyId;
    _this['companyName'] = companyName;
    _this['country'] = country;
    _this['createdBySelfRegister'] = createdBySelfRegister;
    _this['creationDate'] = creationDate;
    _this['displayName'] = displayName;
    _this['emails'] = emails;
    _this['firstLoginDate'] = firstLoginDate;
    _this['firstName'] = firstName;
    _this['guestMode'] = guestMode;
    _this['id'] = id;
    _this['initializationDate'] = initializationDate;
    _this['isADSearchAvailable'] = isADSearchAvailable;
    _this['isActive'] = isActive;
    _this['isInDefaultCompany'] = isInDefaultCompany;
    _this['isInitialized'] = isInitialized;
    _this['isTerminated'] = isTerminated;
    _this['jid_im'] = jidIm;
    _this['jid_password'] = jidPassword;
    _this['jid_tel'] = jidTel;
    _this['lastAvatarUpdateDate'] = lastAvatarUpdateDate;
    _this['lastLoginDate'] = lastLoginDate;
    _this['lastName'] = lastName;
    _this['lastUpdateDate'] = lastUpdateDate;
    _this['loggedSince'] = loggedSince;
    _this['loginEmail'] = loginEmail;
    _this['organisationId'] = organisationId;
    _this['phoneNumbers'] = phoneNumbers;
    _this['profiles'] = profiles;
    _this['roles'] = roles;
    _this['siteId'] = siteId;
    _this['visibility'] = visibility;
  };

  /**
   * Constructs a <code>GetBasicLoginSuccessLoggedInUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBasicLoginSuccessLoggedInUser} obj Optional instance to populate.
   * @return {module:model/GetBasicLoginSuccessLoggedInUser} The populated <code>GetBasicLoginSuccessLoggedInUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activationDate')) {
        obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
      }
      if (data.hasOwnProperty('adminType')) {
        obj['adminType'] = ApiClient.convertToType(data['adminType'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('createdByAdmin')) {
        obj['createdByAdmin'] = GetBasicLoginSuccessLoggedInUserCreatedByAdmin.constructFromObject(data['createdByAdmin']);
      }
      if (data.hasOwnProperty('createdBySelfRegister')) {
        obj['createdBySelfRegister'] = ApiClient.convertToType(data['createdBySelfRegister'], 'Boolean');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [GetBasicLoginSuccessEmails]);
      }
      if (data.hasOwnProperty('firstLoginDate')) {
        obj['firstLoginDate'] = ApiClient.convertToType(data['firstLoginDate'], 'Date');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('guestMode')) {
        obj['guestMode'] = ApiClient.convertToType(data['guestMode'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('initializationDate')) {
        obj['initializationDate'] = ApiClient.convertToType(data['initializationDate'], 'Date');
      }
      if (data.hasOwnProperty('invitedBy')) {
        obj['invitedBy'] = GetBasicLoginSuccessLoggedInUserCreatedByAdmin.constructFromObject(data['invitedBy']);
      }
      if (data.hasOwnProperty('isADSearchAvailable')) {
        obj['isADSearchAvailable'] = ApiClient.convertToType(data['isADSearchAvailable'], 'Boolean');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('isInDefaultCompany')) {
        obj['isInDefaultCompany'] = ApiClient.convertToType(data['isInDefaultCompany'], 'Boolean');
      }
      if (data.hasOwnProperty('isInitialized')) {
        obj['isInitialized'] = ApiClient.convertToType(data['isInitialized'], 'Boolean');
      }
      if (data.hasOwnProperty('isTerminated')) {
        obj['isTerminated'] = ApiClient.convertToType(data['isTerminated'], 'Boolean');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('jid_password')) {
        obj['jid_password'] = ApiClient.convertToType(data['jid_password'], 'String');
      }
      if (data.hasOwnProperty('jid_tel')) {
        obj['jid_tel'] = ApiClient.convertToType(data['jid_tel'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('lastAvatarUpdateDate')) {
        obj['lastAvatarUpdateDate'] = ApiClient.convertToType(data['lastAvatarUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('lastLoginDate')) {
        obj['lastLoginDate'] = ApiClient.convertToType(data['lastLoginDate'], 'Date');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('loggedSince')) {
        obj['loggedSince'] = ApiClient.convertToType(data['loggedSince'], 'Date');
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
      }
      if (data.hasOwnProperty('nickName')) {
        obj['nickName'] = ApiClient.convertToType(data['nickName'], 'String');
      }
      if (data.hasOwnProperty('organisationId')) {
        obj['organisationId'] = ApiClient.convertToType(data['organisationId'], 'String');
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [GetBasicLoginSuccessPhoneNumbers]);
      }
      if (data.hasOwnProperty('profiles')) {
        obj['profiles'] = GetBasicLoginSuccessLoggedInUserProfiles.constructFromObject(data['profiles']);
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('timeToLive')) {
        obj['timeToLive'] = ApiClient.convertToType(data['timeToLive'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('userInfo1')) {
        obj['userInfo1'] = ApiClient.convertToType(data['userInfo1'], 'String');
      }
      if (data.hasOwnProperty('userInfo2')) {
        obj['userInfo2'] = ApiClient.convertToType(data['userInfo2'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }

  /**
   * User activation date
   * @member {Date} activationDate
   */
  exports.prototype['activationDate'] = undefined;
  /**
   * In case of user's is 'admin', define the subtype (organisation_admin, company_admin, site_admin (default undefined)
   * @member {String} adminType
   */
  exports.prototype['adminType'] = undefined;
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
   * User country (ISO 3166-1 alpha3 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin} createdByAdmin
   */
  exports.prototype['createdByAdmin'] = undefined;
  /**
   * true if user has been created using self register
   * @member {Boolean} createdBySelfRegister
   */
  exports.prototype['createdBySelfRegister'] = undefined;
  /**
   * User creation date
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * User display name (firstName + lastName concatenated on server side)
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Array of user emails addresses objects
   * @member {Array.<module:model/GetBasicLoginSuccessEmails>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Date of first user login (only set the first time user logs in, null if user never logged in)
   * @member {Date} firstLoginDate
   */
  exports.prototype['firstLoginDate'] = undefined;
  /**
   * User first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @member {Boolean} guestMode
   */
  exports.prototype['guestMode'] = undefined;
  /**
   * User unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * User initialization date
   * @member {Date} initializationDate
   */
  exports.prototype['initializationDate'] = undefined;
  /**
   * @member {module:model/GetBasicLoginSuccessLoggedInUserCreatedByAdmin} invitedBy
   */
  exports.prototype['invitedBy'] = undefined;
  /**
   * Is ActiveDirectory (Office365) search available for this user
   * @member {Boolean} isADSearchAvailable
   */
  exports.prototype['isADSearchAvailable'] = undefined;
  /**
   * Is user active
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * Is user in default company
   * @member {Boolean} isInDefaultCompany
   */
  exports.prototype['isInDefaultCompany'] = undefined;
  /**
   * Is user initialized
   * @member {Boolean} isInitialized
   */
  exports.prototype['isInitialized'] = undefined;
  /**
   * Indicates if the Rainbow account of this user has been deleted
   * @member {Boolean} isTerminated
   */
  exports.prototype['isTerminated'] = undefined;
  /**
   * User Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * User Jabber TEL identifier
   * @member {String} jid_password
   */
  exports.prototype['jid_password'] = undefined;
  /**
   * User Jabber TEL identifier
   * @member {String} jid_tel
   */
  exports.prototype['jid_tel'] = undefined;
  /**
   * User job title
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * User language (ISO 639-1 code format, with possibility of regional variation. Ex: both 'en' and 'en-US' are supported)
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Date of last user avatar create/update, null if no avatar
   * @member {Date} lastAvatarUpdateDate
   */
  exports.prototype['lastAvatarUpdateDate'] = undefined;
  /**
   * Date of last user login (defined even if user is logged out)
   * @member {Date} lastLoginDate
   */
  exports.prototype['lastLoginDate'] = undefined;
  /**
   * User last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Date of last user update (whatever the field updated)
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * Date of last user login (null if user is logged out)
   * @member {Date} loggedSince
   */
  exports.prototype['loggedSince'] = undefined;
  /**
   * User email address (used for login)
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * User nickName
   * @member {String} nickName
   */
  exports.prototype['nickName'] = undefined;
  /**
   * In addition to User companyId, optional identifier to indicate the user belongs also to an organization
   * @member {String} organisationId
   */
  exports.prototype['organisationId'] = undefined;
  /**
   * Array of user phone numbers objects. <br/> Phone number objects can: <ul>     <li> be created by user (information filled by user),</li>     <li> come from association with a system (pbx) device (association is done by admin).</li> </ul>
   * @member {Array.<module:model/GetBasicLoginSuccessPhoneNumbers>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * @member {module:model/GetBasicLoginSuccessLoggedInUserProfiles} profiles
   */
  exports.prototype['profiles'] = undefined;
  /**
   * List of user roles (Array of String)
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * In addition to User companyId, optional identifier to indicate the user belongs also to a site
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * An Array of free tags associated to the user. <br/> A maximum of 5 tags is allowed, each tag can have a maximum length of 64 characters. <br/> `tags` can only be set by users who have administrator rights on the user. The user can't modify the tags. <br/> The tags are visible by the user and all users belonging to his organisation/company, and can be used with the search API to search the user based on his tags.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Duration in second to wait before automatically starting a user deletion from the creation date. <br/> Once the timeToLive has been reached, the user won't be usable to use APIs anymore (error 401523). His account may then be deleted from the database at any moment. <br/> Value -1 means timeToLive is disable (i.e. user account will not expire).
   * @member {Number} timeToLive
   */
  exports.prototype['timeToLive'] = undefined;
  /**
   * User timezone name
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * User title (honorifics title, like Mr, Mrs, Sir, Lord, Lady, Dr, Prof,...)
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Free field that admin can use to link their users to their IS/IT tools / to perform analytics (this field is output in the CDR file)
   * @member {String} userInfo1
   */
  exports.prototype['userInfo1'] = undefined;
  /**
   * 2nd Free field that admin can use to link their users to their IS/IT tools / to perform analytics (this field is output in the CDR file)
   * @member {String} userInfo2
   */
  exports.prototype['userInfo2'] = undefined;
  /**
   * User visibility </br> Define if the user can be searched by users being in other companies and if the user can search users being in other companies. <br/> Visibility can be: - `same_than_company`: The same visibility than the user's company's is applied to the user. When this user visibility is used, if the visibility of the company is changed the user's visibility will use this company new visibility. - `public`: User can be searched by external users / can search external users. User can invite external users / can be invited by external users - `private`: User **can't** be searched by external users / can search external users. User can invite external users / can be invited by external users - `closed`: User **can't** be searched by external users / **can't** search external users. User can invite external users / can be invited by external users - `isolated`: User **can't** be searched by external users / **can't** search external users. User **can't** invite external users / **can't** be invited by external users - `none`:  Default value reserved for guest. User **can't** be searched by **any users** (even within the same company) / can search external users. User can invite external users / can be invited by external users  External users mean public user not being in user's company nor user's organisation nor a company visible by user's company.
   * @member {module:model/GetBasicLoginSuccessLoggedInUser.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "same_than_company"
     * @const
     */
    "same_than_company": "same_than_company",
    /**
     * value: "public"
     * @const
     */
    "public": "public",
    /**
     * value: "private"
     * @const
     */
    "private": "private",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",
    /**
     * value: "isolated"
     * @const
     */
    "isolated": "isolated",
    /**
     * value: "none"
     * @const
     */
    "none": "none"  };


  return exports;
}));


