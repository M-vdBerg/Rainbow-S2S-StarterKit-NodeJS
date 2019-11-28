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
    define(['ApiClient', 'model/GetRainbowChangeLogSuccess', 'model/PutRainbowChange', 'model/PutRainbowChangeSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetRainbowChangeLogSuccess'), require('../model/PutRainbowChange'), require('../model/PutRainbowChangeSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.SettingsRainbowChangeLogApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.GetRainbowChangeLogSuccess, root.RainbowAdminPortal.PutRainbowChange, root.RainbowAdminPortal.PutRainbowChangeSuccess);
  }
}(this, function(ApiClient, GetRainbowChangeLogSuccess, PutRainbowChange, PutRainbowChangeSuccess) {
  'use strict';

  /**
   * SettingsRainbowChangeLog service.
   * @module api/SettingsRainbowChangeLogApi
   * @version 1.82.0
   */

  /**
   * Constructs a new SettingsRainbowChangeLogApi. 
   * @alias module:api/SettingsRainbowChangeLogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get news about rainbow features
     * Display a list ICE servers available to start WebRTC audio / vidéo conversations    Servers available from Rainbow infrastructure are returned.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRainbowChangeLogSuccess} and HTTP response
     */
    this.getRainbowChangeLogWithHttpInfo = function(accept) {
      var postBody = null;
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getRainbowChangeLog");
      }

      var pathParams = {
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
      var returnType = GetRainbowChangeLogSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/settings/changelogs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get news about rainbow features
     * Display a list ICE servers available to start WebRTC audio / vidéo conversations    Servers available from Rainbow infrastructure are returned.
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRainbowChangeLogSuccess}
     */
    this.getRainbowChangeLog = function(accept) {
      return this.getRainbowChangeLogWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a rainbow change log
     * @param {module:model/PutRainbowChange} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutRainbowChangeSuccess} and HTTP response
     */
    this.putRainbowChangeWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putRainbowChange");
      }

      var pathParams = {
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
      var returnType = PutRainbowChangeSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/settings/changelogs', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a rainbow change log
     * @param {module:model/PutRainbowChange} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutRainbowChangeSuccess}
     */
    this.putRainbowChange = function(body) {
      return this.putRainbowChangeWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
