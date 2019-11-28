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
    define(['ApiClient', 'model/AdminUsersGetUserProfilesSuccessProvisioningNeeded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdminUsersGetUserProfilesSuccessProvisioningNeeded'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.AdminUsersGetUserProfilesSuccess = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.AdminUsersGetUserProfilesSuccessProvisioningNeeded);
  }
}(this, function(ApiClient, AdminUsersGetUserProfilesSuccessProvisioningNeeded) {
  'use strict';



  /**
   * The AdminUsersGetUserProfilesSuccess model module.
   * @module model/AdminUsersGetUserProfilesSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>AdminUsersGetUserProfilesSuccess</code>.
   * @alias module:model/AdminUsersGetUserProfilesSuccess
   * @class
   * @param subscriptionId {String} Id of company subscription to which user profile is assigned (one of the subscriptions available to user's company)
   * @param offerId {String} Id of the offer to which company subscription is attached
   * @param offerName {String} Name of the offer to which company subscription is attached
   * @param offerDescription {String} Description of the offer to which company subscription is attached
   * @param offerTechnicalDescription {String} Technical description of the subscribed offer
   * @param offerReference {String} Key used for referencing the subscribed offer. Well know offer References are: RB-Essential, RB-Business, RB-Enterprise, RB-Conference.
   * @param profileId {String} Id of the profile to which company subscription is attached
   * @param profileName {String} Name of the profile to which company subscription is attached
   * @param status {String} Status of the company subscription to which user profile is assigned       Possible values: `active`, `alerting`, `hold`, `terminated`
   * @param isDefault {Boolean} Indicates if this profile is linked to user's company's subscription to default offer (i.e. Essential)
   * @param canBeSold {Boolean} Indicates if this profile is linked a subscription for a paid offer.    Some offers are not be sold (Essential, Beta, Demo, ...).    If canBeSold is true, the subscription is billed.
   * @param businessModel {module:model/AdminUsersGetUserProfilesSuccess.BusinessModelEnum} Indicates the business model associated to the subscribed offer (number of users, usage, ...)   * `nb_users`: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * `usage`: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * `none`: no business model. Used for offers which are not sold (like Essential, Beta, ...).  
   * @param isExclusive {Boolean} Indicates if this profile is relative to a subscription for an exclusive offer (if the user has already an exclusive offer assigned, it won't be possible to assign a second exclusive offer).    Used on GUI side to know if the subscription to assign to a user profile has to be displayed as a radio button or as a check box.
   * @param isPrepaid {Boolean} Indicates if this profile is relative to a subscription for a prepaid offer
   * @param expirationDate {Date} Expiration date of the subscription to the prepaid offer (creationDate + prepaidDuration)
   * @param provisioningNeeded {Array.<module:model/AdminUsersGetUserProfilesSuccessProvisioningNeeded>} Indicates if provisioning is needed on other component when assigning the user profile to this subscription (depends of thus subscribed offer)
   * @param assignationDate {String} Date when the subscription was attached to user profile
   */
  var exports = function(subscriptionId, offerId, offerName, offerDescription, offerTechnicalDescription, offerReference, profileId, profileName, status, isDefault, canBeSold, businessModel, isExclusive, isPrepaid, expirationDate, provisioningNeeded, assignationDate) {
    var _this = this;

    _this['subscriptionId'] = subscriptionId;
    _this['offerId'] = offerId;
    _this['offerName'] = offerName;
    _this['offerDescription'] = offerDescription;
    _this['offerTechnicalDescription'] = offerTechnicalDescription;
    _this['offerReference'] = offerReference;
    _this['profileId'] = profileId;
    _this['profileName'] = profileName;
    _this['status'] = status;
    _this['isDefault'] = isDefault;
    _this['canBeSold'] = canBeSold;
    _this['businessModel'] = businessModel;
    _this['isExclusive'] = isExclusive;
    _this['isPrepaid'] = isPrepaid;
    _this['expirationDate'] = expirationDate;
    _this['provisioningNeeded'] = provisioningNeeded;
    _this['assignationDate'] = assignationDate;
  };

  /**
   * Constructs a <code>AdminUsersGetUserProfilesSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminUsersGetUserProfilesSuccess} obj Optional instance to populate.
   * @return {module:model/AdminUsersGetUserProfilesSuccess} The populated <code>AdminUsersGetUserProfilesSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subscriptionId')) {
        obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
      }
      if (data.hasOwnProperty('offerId')) {
        obj['offerId'] = ApiClient.convertToType(data['offerId'], 'String');
      }
      if (data.hasOwnProperty('offerName')) {
        obj['offerName'] = ApiClient.convertToType(data['offerName'], 'String');
      }
      if (data.hasOwnProperty('offerDescription')) {
        obj['offerDescription'] = ApiClient.convertToType(data['offerDescription'], 'String');
      }
      if (data.hasOwnProperty('offerTechnicalDescription')) {
        obj['offerTechnicalDescription'] = ApiClient.convertToType(data['offerTechnicalDescription'], 'String');
      }
      if (data.hasOwnProperty('offerReference')) {
        obj['offerReference'] = ApiClient.convertToType(data['offerReference'], 'String');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('profileName')) {
        obj['profileName'] = ApiClient.convertToType(data['profileName'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('canBeSold')) {
        obj['canBeSold'] = ApiClient.convertToType(data['canBeSold'], 'Boolean');
      }
      if (data.hasOwnProperty('businessModel')) {
        obj['businessModel'] = ApiClient.convertToType(data['businessModel'], 'String');
      }
      if (data.hasOwnProperty('isExclusive')) {
        obj['isExclusive'] = ApiClient.convertToType(data['isExclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('isPrepaid')) {
        obj['isPrepaid'] = ApiClient.convertToType(data['isPrepaid'], 'Boolean');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('provisioningNeeded')) {
        obj['provisioningNeeded'] = ApiClient.convertToType(data['provisioningNeeded'], [AdminUsersGetUserProfilesSuccessProvisioningNeeded]);
      }
      if (data.hasOwnProperty('assignationDate')) {
        obj['assignationDate'] = ApiClient.convertToType(data['assignationDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of company subscription to which user profile is assigned (one of the subscriptions available to user's company)
   * @member {String} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * Id of the offer to which company subscription is attached
   * @member {String} offerId
   */
  exports.prototype['offerId'] = undefined;
  /**
   * Name of the offer to which company subscription is attached
   * @member {String} offerName
   */
  exports.prototype['offerName'] = undefined;
  /**
   * Description of the offer to which company subscription is attached
   * @member {String} offerDescription
   */
  exports.prototype['offerDescription'] = undefined;
  /**
   * Technical description of the subscribed offer
   * @member {String} offerTechnicalDescription
   */
  exports.prototype['offerTechnicalDescription'] = undefined;
  /**
   * Key used for referencing the subscribed offer. Well know offer References are: RB-Essential, RB-Business, RB-Enterprise, RB-Conference.
   * @member {String} offerReference
   */
  exports.prototype['offerReference'] = undefined;
  /**
   * Id of the profile to which company subscription is attached
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * Name of the profile to which company subscription is attached
   * @member {String} profileName
   */
  exports.prototype['profileName'] = undefined;
  /**
   * Status of the company subscription to which user profile is assigned       Possible values: `active`, `alerting`, `hold`, `terminated`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Indicates if this profile is linked to user's company's subscription to default offer (i.e. Essential)
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Indicates if this profile is linked a subscription for a paid offer.    Some offers are not be sold (Essential, Beta, Demo, ...).    If canBeSold is true, the subscription is billed.
   * @member {Boolean} canBeSold
   */
  exports.prototype['canBeSold'] = undefined;
  /**
   * Indicates the business model associated to the subscribed offer (number of users, usage, ...)   * `nb_users`: Licencing business model. Offers having this business model are billed according to the number of users bought for it. This should be the business model for Business and Enterprise offers. * `usage`: Offers having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). This should be the business model for Conference offer. * `none`: no business model. Used for offers which are not sold (like Essential, Beta, ...).  
   * @member {module:model/AdminUsersGetUserProfilesSuccess.BusinessModelEnum} businessModel
   */
  exports.prototype['businessModel'] = undefined;
  /**
   * Indicates if this profile is relative to a subscription for an exclusive offer (if the user has already an exclusive offer assigned, it won't be possible to assign a second exclusive offer).    Used on GUI side to know if the subscription to assign to a user profile has to be displayed as a radio button or as a check box.
   * @member {Boolean} isExclusive
   */
  exports.prototype['isExclusive'] = undefined;
  /**
   * Indicates if this profile is relative to a subscription for a prepaid offer
   * @member {Boolean} isPrepaid
   */
  exports.prototype['isPrepaid'] = undefined;
  /**
   * Expiration date of the subscription to the prepaid offer (creationDate + prepaidDuration)
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * Indicates if provisioning is needed on other component when assigning the user profile to this subscription (depends of thus subscribed offer)
   * @member {Array.<module:model/AdminUsersGetUserProfilesSuccessProvisioningNeeded>} provisioningNeeded
   */
  exports.prototype['provisioningNeeded'] = undefined;
  /**
   * Date when the subscription was attached to user profile
   * @member {String} assignationDate
   */
  exports.prototype['assignationDate'] = undefined;


  /**
   * Allowed values for the <code>businessModel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessModelEnum = {
    /**
     * value: "nb_users"
     * @const
     */
    "nb_users": "nb_users",
    /**
     * value: "usage"
     * @const
     */
    "usage": "usage",
    /**
     * value: "none"
     * @const
     */
    "none": "none"  };


  return exports;
}));


