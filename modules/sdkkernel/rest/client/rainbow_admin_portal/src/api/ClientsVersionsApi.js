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
    define(['ApiClient', 'model/DeleteClientsVersionsSuccess', 'model/GetClientsVersionsIdSuccess', 'model/GetClientsversionsSuccess', 'model/PostClientsVersions', 'model/PostClientsVersionsSuccess', 'model/PutClientsVersions', 'model/PutClientsVersionsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteClientsVersionsSuccess'), require('../model/GetClientsVersionsIdSuccess'), require('../model/GetClientsversionsSuccess'), require('../model/PostClientsVersions'), require('../model/PostClientsVersionsSuccess'), require('../model/PutClientsVersions'), require('../model/PutClientsVersionsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.ClientsVersionsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.DeleteClientsVersionsSuccess, root.RainbowAdminPortal.GetClientsVersionsIdSuccess, root.RainbowAdminPortal.GetClientsversionsSuccess, root.RainbowAdminPortal.PostClientsVersions, root.RainbowAdminPortal.PostClientsVersionsSuccess, root.RainbowAdminPortal.PutClientsVersions, root.RainbowAdminPortal.PutClientsVersionsSuccess);
  }
}(this, function(ApiClient, DeleteClientsVersionsSuccess, GetClientsVersionsIdSuccess, GetClientsversionsSuccess, PostClientsVersions, PostClientsVersionsSuccess, PutClientsVersions, PutClientsVersionsSuccess) {
  'use strict';

  /**
   * ClientsVersions service.
   * @module api/ClientsVersionsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new ClientsVersionsApi. 
   * @alias module:api/ClientsVersionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a client version
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteClientsVersionsSuccess} and HTTP response
     */
    this.deleteClientsVersionsWithHttpInfo = function(clientId, accept) {
      var postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClientsVersions");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteClientsVersions");
      }

      var pathParams = {
        'clientId': clientId
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
      var returnType = DeleteClientsVersionsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/clientsversions/{clientId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a client version
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteClientsVersionsSuccess}
     */
    this.deleteClientsVersions = function(clientId, accept) {
      return this.deleteClientsVersionsWithHttpInfo(clientId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a clients versions data
     * Users with 'superadmin' role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions/569d0ef3ef7816921f7e94fa
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetClientsVersionsIdSuccess} and HTTP response
     */
    this.getClientsVersionsIdWithHttpInfo = function(clientId, accept) {
      var postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getClientsVersionsId");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getClientsVersionsId");
      }

      var pathParams = {
        'clientId': clientId
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
      var returnType = GetClientsVersionsIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/clientsversions/{clientId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a clients versions data
     * Users with 'superadmin' role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions/569d0ef3ef7816921f7e94fa
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetClientsVersionsIdSuccess}
     */
    this.getClientsVersionsId = function(clientId, accept) {
      return this.getClientsVersionsIdWithHttpInfo(clientId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all clients versions
     * Users with 'superadmin' role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions?limit=100&offset=0&sortField=name&sortOrder=-1
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Allows to filter sites list on field name.
     * @param {Number} opts.limit Allow to specify the number of apps to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first app to retrieve (first app if not specified). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort app list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting app list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetClientsversionsSuccess} and HTTP response
     */
    this.getClientsversionsWithHttpInfo = function(accept, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getClientsversions");
      }

      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortField': opts['sortField'],
        'sortOrder': opts['sortOrder'],
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
      var returnType = GetClientsversionsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/clientsversions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all clients versions
     * Users with 'superadmin' role can retrieve all clients versions.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/clientsversions?limit=100&offset=0&sortField=name&sortOrder=-1
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Allows to filter sites list on field name.
     * @param {Number} opts.limit Allow to specify the number of apps to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first app to retrieve (first app if not specified). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort app list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting app list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetClientsversionsSuccess}
     */
    this.getClientsversions = function(accept, opts) {
      return this.getClientsversionsWithHttpInfo(accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a client version
     * @param {module:model/PostClientsVersions} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostClientsVersionsSuccess} and HTTP response
     */
    this.postClientsVersionsWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postClientsVersions");
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
      var returnType = PostClientsVersionsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/clientsversions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a client version
     * @param {module:model/PostClientsVersions} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostClientsVersionsSuccess}
     */
    this.postClientsVersions = function(body) {
      return this.postClientsVersionsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a client version
     * Users with superadmin role can update any client version.   
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutClientsVersions} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutClientsVersionsSuccess} and HTTP response
     */
    this.putClientsVersionsWithHttpInfo = function(clientId, body) {
      var postBody = body;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling putClientsVersions");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putClientsVersions");
      }

      var pathParams = {
        'clientId': clientId
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
      var returnType = PutClientsVersionsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/clientsversions/{clientId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a client version
     * Users with superadmin role can update any client version.   
     * @param {String} clientId App unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutClientsVersions} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutClientsVersionsSuccess}
     */
    this.putClientsVersions = function(clientId, body) {
      return this.putClientsVersionsWithHttpInfo(clientId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
