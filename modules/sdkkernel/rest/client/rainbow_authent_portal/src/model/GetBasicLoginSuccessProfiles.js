/**
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
 *
 * OpenAPI spec version: 1.104.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetBasicLoginSuccessProvisioningNeeded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetBasicLoginSuccessProvisioningNeeded'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAuthenticationPortal) {
      root.RainbowAuthenticationPortal = {};
    }
    root.RainbowAuthenticationPortal.GetBasicLoginSuccessProfiles = factory(root.RainbowAuthenticationPortal.ApiClient, root.RainbowAuthenticationPortal.GetBasicLoginSuccessProvisioningNeeded);
  }
}(this, function(ApiClient, GetBasicLoginSuccessProvisioningNeeded) {
  'use strict';



  /**
   * The GetBasicLoginSuccessProfiles model module.
   * @module model/GetBasicLoginSuccessProfiles
   * @version 1.104.0
   */

  /**
   * Constructs a new <code>GetBasicLoginSuccessProfiles</code>.
   * @alias module:model/GetBasicLoginSuccessProfiles
   * @class
   * @param assignationDate {String} Date when the subscription was attached to user profile
   * @param canBeSold {Boolean} Indicates if the offer is billed. <br/> Some offers will not be billed (Essential, Demo, ...).
   * @param isDefault {Boolean} Indicates if this profile is linked to user's company's subscription to default offer (i.e. Essential)
   * @param offerId {String} Id of the Rainbow offer to which company subscription is attached
   * @param offerName {String} Name of the Rainbow offer to which company subscription is attached
   * @param profileId {String} Id of the Rainbow profile to which company subscription is attached
   * @param profileName {String} Name of the Rainbow profile to which company subscription is attached
   * @param status {String} Status of the company subscription to which user profile is assigned <br/> <br/> Possible values: <code>active</code>, <code>alerting</code>, <code>hold</code>, <code>terminated</code>
   * @param subscriptionId {String} Id of company subscription to which user profile is assigned (one of the subscriptions available to user's company)
   */
  var exports = function(assignationDate, canBeSold, isDefault, offerId, offerName, profileId, profileName, status, subscriptionId) {
    var _this = this;

    _this['assignationDate'] = assignationDate;
    _this['canBeSold'] = canBeSold;
    _this['isDefault'] = isDefault;
    _this['offerId'] = offerId;
    _this['offerName'] = offerName;
    _this['profileId'] = profileId;
    _this['profileName'] = profileName;
    _this['status'] = status;
    _this['subscriptionId'] = subscriptionId;
  };

  /**
   * Constructs a <code>GetBasicLoginSuccessProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBasicLoginSuccessProfiles} obj Optional instance to populate.
   * @return {module:model/GetBasicLoginSuccessProfiles} The populated <code>GetBasicLoginSuccessProfiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assignationDate')) {
        obj['assignationDate'] = ApiClient.convertToType(data['assignationDate'], 'String');
      }
      if (data.hasOwnProperty('businessModel')) {
        obj['businessModel'] = ApiClient.convertToType(data['businessModel'], 'String');
      }
      if (data.hasOwnProperty('businessSpecific')) {
        obj['businessSpecific'] = ApiClient.convertToType(data['businessSpecific'], ['String']);
      }
      if (data.hasOwnProperty('canBeSold')) {
        obj['canBeSold'] = ApiClient.convertToType(data['canBeSold'], 'Boolean');
      }
      if (data.hasOwnProperty('hasConference')) {
        obj['hasConference'] = ApiClient.convertToType(data['hasConference'], 'Boolean');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('isDemo')) {
        obj['isDemo'] = ApiClient.convertToType(data['isDemo'], 'Boolean');
      }
      if (data.hasOwnProperty('isExclusive')) {
        obj['isExclusive'] = ApiClient.convertToType(data['isExclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('isPrepaid')) {
        obj['isPrepaid'] = ApiClient.convertToType(data['isPrepaid'], 'Boolean');
      }
      if (data.hasOwnProperty('offerId')) {
        obj['offerId'] = ApiClient.convertToType(data['offerId'], 'String');
      }
      if (data.hasOwnProperty('offerName')) {
        obj['offerName'] = ApiClient.convertToType(data['offerName'], 'String');
      }
      if (data.hasOwnProperty('offerTechnicalDescription')) {
        obj['offerTechnicalDescription'] = ApiClient.convertToType(data['offerTechnicalDescription'], 'String');
      }
      if (data.hasOwnProperty('prepaidDuration')) {
        obj['prepaidDuration'] = ApiClient.convertToType(data['prepaidDuration'], 'Number');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('profileName')) {
        obj['profileName'] = ApiClient.convertToType(data['profileName'], 'String');
      }
      if (data.hasOwnProperty('provisioningNeeded')) {
        obj['provisioningNeeded'] = ApiClient.convertToType(data['provisioningNeeded'], [GetBasicLoginSuccessProvisioningNeeded]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subscriptionId')) {
        obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
      }
      if (data.hasOwnProperty('zuoraOfferId')) {
        obj['zuoraOfferId'] = ApiClient.convertToType(data['zuoraOfferId'], 'String');
      }
      if (data.hasOwnProperty('zuoraProductRatePlanChargeId')) {
        obj['zuoraProductRatePlanChargeId'] = ApiClient.convertToType(data['zuoraProductRatePlanChargeId'], 'String');
      }
      if (data.hasOwnProperty('zuoraProductRatePlanId')) {
        obj['zuoraProductRatePlanId'] = ApiClient.convertToType(data['zuoraProductRatePlanId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date when the subscription was attached to user profile
   * @member {String} assignationDate
   */
  exports.prototype['assignationDate'] = undefined;
  /**
   * Indicates the business model associated to this offer (number of users, usage, ...) - `nb_users`: Licencing business model. Subscriptions having this business model are billed according to the number of users bought for it. - `usage`: Subscriptions having this business model are billed based on service consumption (whatever the number of users assigned to the subscription of this offer). - `flat_fee`: Subscriptions having this business model are billed based on a flat fee (same price each month for the company which subscribe to this offer). - `none`: no business model. Should be used for offers which are not sold (like Essential...).
   * @member {module:model/GetBasicLoginSuccessProfiles.BusinessModelEnum} businessModel
   * @default 'none'
   */
  exports.prototype['businessModel'] = 'none';
  /**
   * Indicates if the subscription is related to specific(s) business (for verticals like HDS) - `NONE`: This subscription is used if the company does not have a businessSpecific field. - `HDS`: This subscription is used if the company have a businessSpecific HDS (HealthCare).
   * @member {Array.<String>} businessSpecific
   */
  exports.prototype['businessSpecific'] = undefined;
  /**
   * Indicates if the offer is billed. <br/> Some offers will not be billed (Essential, Demo, ...).
   * @member {Boolean} canBeSold
   */
  exports.prototype['canBeSold'] = undefined;
  /**
   * Indicates if the profile contains conference services
   * @member {Boolean} hasConference
   */
  exports.prototype['hasConference'] = undefined;
  /**
   * Indicates if this profile is linked to user's company's subscription to default offer (i.e. Essential)
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Indicates if the profile is linked to a demo subscription
   * @member {Boolean} isDemo
   */
  exports.prototype['isDemo'] = undefined;
  /**
   * Indicates if the offer is exclusive for assignation to a user profile (if the user has already an exclusive offer assigned, it won't be possible to assign a second exclusive offer).
   * @member {Boolean} isExclusive
   */
  exports.prototype['isExclusive'] = undefined;
  /**
   * Indicates if the profile is linked to a prepaid subscription
   * @member {Boolean} isPrepaid
   */
  exports.prototype['isPrepaid'] = undefined;
  /**
   * Id of the Rainbow offer to which company subscription is attached
   * @member {String} offerId
   */
  exports.prototype['offerId'] = undefined;
  /**
   * Name of the Rainbow offer to which company subscription is attached
   * @member {String} offerName
   */
  exports.prototype['offerName'] = undefined;
  /**
   * Offer technical description.
   * @member {String} offerTechnicalDescription
   */
  exports.prototype['offerTechnicalDescription'] = undefined;
  /**
   * Prepaid subscription duration (in month). <br/>Only set if `isPrepaid` is true.
   * @member {Number} prepaidDuration
   */
  exports.prototype['prepaidDuration'] = undefined;
  /**
   * Id of the Rainbow profile to which company subscription is attached
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * Name of the Rainbow profile to which company subscription is attached
   * @member {String} profileName
   */
  exports.prototype['profileName'] = undefined;
  /**
   * Array of Objects which indicates if account must be provisioned on other internal components when subscribing to this offer.
   * @member {Array.<module:model/GetBasicLoginSuccessProvisioningNeeded>} provisioningNeeded
   */
  exports.prototype['provisioningNeeded'] = undefined;
  /**
   * Status of the company subscription to which user profile is assigned <br/> <br/> Possible values: <code>active</code>, <code>alerting</code>, <code>hold</code>, <code>terminated</code>
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Id of company subscription to which user profile is assigned (one of the subscriptions available to user's company)
   * @member {String} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * ID of the related offer in Zuora (if offer can be sold)
   * @member {String} zuoraOfferId
   */
  exports.prototype['zuoraOfferId'] = undefined;
  /**
   * ID of the ProductRatePlanChargeId used in Zuora (if offer can be sold)
   * @member {String} zuoraProductRatePlanChargeId
   */
  exports.prototype['zuoraProductRatePlanChargeId'] = undefined;
  /**
   * ID of the ProductRatePlanId to used in Zuora (if offer can be sold)
   * @member {String} zuoraProductRatePlanId
   */
  exports.prototype['zuoraProductRatePlanId'] = undefined;


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
     * value: "flat_fee"
     * @const
     */
    "flat_fee": "flat_fee",
    /**
     * value: "none"
     * @const
     */
    "none": "none"  };


  return exports;
}));

