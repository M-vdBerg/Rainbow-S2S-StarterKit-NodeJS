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
    define(['ApiClient', 'model/CreateContact', 'model/CreateContactSuccess', 'model/GetContactSuccess', 'model/GetContactsSuccess', 'model/UpdateContact', 'model/UpdateContactSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateContact'), require('../model/CreateContactSuccess'), require('../model/GetContactSuccess'), require('../model/GetContactsSuccess'), require('../model/UpdateContact'), require('../model/UpdateContactSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.ContactsApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.CreateContact, root.RainbowEnduserPortal.CreateContactSuccess, root.RainbowEnduserPortal.GetContactSuccess, root.RainbowEnduserPortal.GetContactsSuccess, root.RainbowEnduserPortal.UpdateContact, root.RainbowEnduserPortal.UpdateContactSuccess);
  }
}(this, function(ApiClient, CreateContact, CreateContactSuccess, GetContactSuccess, GetContactsSuccess, UpdateContact, UpdateContactSuccess) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 1.84.0
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a contact
     * Create a contact for a given user's source
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {module:model/CreateContact} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateContactSuccess} and HTTP response
     */
    this.createContactWithHttpInfo = function(userId, sourceId, body) {
      var postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createContact");
      }
      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling createContact");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContact");
      }

      var pathParams = {
        'userId': userId,
        'sourceId': sourceId
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
      var returnType = CreateContactSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a contact
     * Create a contact for a given user's source
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {module:model/CreateContact} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateContactSuccess}
     */
    this.createContact = function(userId, sourceId, body) {
      return this.createContactWithHttpInfo(userId, sourceId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a contact data
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c4aebe31d144d947e385db)
     * @param {String} contactId Contact unique identifier (like 56e2f711c747f92e39c630c9)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetContactSuccess} and HTTP response
     */
    this.getContactWithHttpInfo = function(userId, sourceId, contactId, accept) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getContact");
      }
      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getContact");
      }
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContact");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getContact");
      }

      var pathParams = {
        'userId': userId,
        'sourceId': sourceId,
        'contactId': contactId
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
      var returnType = GetContactSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts/{contactId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a contact data
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c4aebe31d144d947e385db)
     * @param {String} contactId Contact unique identifier (like 56e2f711c747f92e39c630c9)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetContactSuccess}
     */
    this.getContact = function(userId, sourceId, contactId, accept) {
      return this.getContactWithHttpInfo(userId, sourceId, contactId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get contacts list
     * @param {String} userId User unique identifier (like 56c4a4c331d144d947e385da)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less contact details in response. > - `small`: id, contactId > - `medium`: id, contactId, firstName, lastName, displayName, company, jobTitle > - `full`: all contact fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetContactsSuccess} and HTTP response
     */
    this.getContactsWithHttpInfo = function(userId, sourceId, accept, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getContacts");
      }
      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getContacts");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getContacts");
      }

      var pathParams = {
        'userId': userId,
        'sourceId': sourceId
      };
      var queryParams = {
        'format': opts['format'],
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
      var returnType = GetContactsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get contacts list
     * @param {String} userId User unique identifier (like 56c4a4c331d144d947e385da)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less contact details in response. > - `small`: id, contactId > - `medium`: id, contactId, firstName, lastName, displayName, company, jobTitle > - `full`: all contact fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetContactsSuccess}
     */
    this.getContacts = function(userId, sourceId, accept, opts) {
      return this.getContactsWithHttpInfo(userId, sourceId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change a contact data
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} contactId Contact unique identifier (like 56e2f711c747f92e39c630c9)
     * @param {module:model/UpdateContact} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateContactSuccess} and HTTP response
     */
    this.updateContactWithHttpInfo = function(userId, sourceId, contactId, body) {
      var postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateContact");
      }
      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling updateContact");
      }
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling updateContact");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContact");
      }

      var pathParams = {
        'userId': userId,
        'sourceId': sourceId,
        'contactId': contactId
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
      var returnType = UpdateContactSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/sources/{sourceId}/contacts/{contactId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Change a contact data
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5)
     * @param {String} sourceId Source unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} contactId Contact unique identifier (like 56e2f711c747f92e39c630c9)
     * @param {module:model/UpdateContact} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateContactSuccess}
     */
    this.updateContact = function(userId, sourceId, contactId, body) {
      return this.updateContactWithHttpInfo(userId, sourceId, contactId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
