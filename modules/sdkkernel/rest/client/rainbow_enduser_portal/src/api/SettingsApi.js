/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.84.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetUserSettingsSuccess', 'model/UpdateUserSettings', 'model/UpdateUserSettingsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetUserSettingsSuccess'), require('../model/UpdateUserSettings'), require('../model/UpdateUserSettingsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.SettingsApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.GetUserSettingsSuccess, root.RainbowEnduserPortal.UpdateUserSettings, root.RainbowEnduserPortal.UpdateUserSettingsSuccess);
  }
}(this, function(ApiClient, GetUserSettingsSuccess, UpdateUserSettings, UpdateUserSettingsSuccess) {
  'use strict';

  /**
   * Settings service.
   * @module api/SettingsApi
   * @version 1.84.0
   */

  /**
   * Constructs a new SettingsApi. 
   * @alias module:api/SettingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get user settings
     * This API can be used to get user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUserSettingsSuccess} and HTTP response
     */
    this.getUserSettingsWithHttpInfo = function(userId, accept) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserSettings");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getUserSettings");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetUserSettingsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/settings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user settings
     * This API can be used to get user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUserSettingsSuccess}
     */
    this.getUserSettings = function(userId, accept) {
      return this.getUserSettingsWithHttpInfo(userId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update user settings
     * This API can be used to update user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a setting is updated using this API, all user&#39;s XMPP resources will receive the following message indicating them that a setting has been updated:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;/&gt;        &lt;usersettings action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {module:model/UpdateUserSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateUserSettingsSuccess} and HTTP response
     */
    this.updateUserSettingsWithHttpInfo = function(userId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserSettings");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserSettings");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdateUserSettingsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/settings', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update user settings
     * This API can be used to update user settings.    This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a setting is updated using this API, all user&#39;s XMPP resources will receive the following message indicating them that a setting has been updated:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;/&gt;        &lt;usersettings action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: PUT https://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/settings
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {module:model/UpdateUserSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateUserSettingsSuccess}
     */
    this.updateUserSettings = function(userId, body) {
      return this.updateUserSettingsWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));