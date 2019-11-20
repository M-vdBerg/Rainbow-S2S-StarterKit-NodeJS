/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.82.0
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
    define(['ApiClient', 'model/GetJoinCompanyRequestByIdSuccess', 'model/GetJoinCompanyRequestsSuccess', 'model/PostAcceptJoinCompanyReqSuccess', 'model/PostDeclineJoinCompanyReqSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetJoinCompanyRequestByIdSuccess'), require('../model/GetJoinCompanyRequestsSuccess'), require('../model/PostAcceptJoinCompanyReqSuccess'), require('../model/PostDeclineJoinCompanyReqSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.JoinCompanyRequestsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.GetJoinCompanyRequestByIdSuccess, root.RainbowAdminPortal.GetJoinCompanyRequestsSuccess, root.RainbowAdminPortal.PostAcceptJoinCompanyReqSuccess, root.RainbowAdminPortal.PostDeclineJoinCompanyReqSuccess);
  }
}(this, function(ApiClient, GetJoinCompanyRequestByIdSuccess, GetJoinCompanyRequestsSuccess, PostAcceptJoinCompanyReqSuccess, PostDeclineJoinCompanyReqSuccess) {
  'use strict';

  /**
   * JoinCompanyRequests service.
   * @module api/JoinCompanyRequestsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new JoinCompanyRequestsApi. 
   * @alias module:api/JoinCompanyRequestsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a join company request
     * This API can be used by company &#x60;admin&#x60; users to get a join company request by id (must have been received by his company) (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetJoinCompanyRequestByIdSuccess} and HTTP response
     */
    this.getJoinCompanyRequestByIdWithHttpInfo = function(companyId, joinCompanyRequestId, accept) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getJoinCompanyRequestById");
      }

      // verify the required parameter 'joinCompanyRequestId' is set
      if (joinCompanyRequestId === undefined || joinCompanyRequestId === null) {
        throw new Error("Missing the required parameter 'joinCompanyRequestId' when calling getJoinCompanyRequestById");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getJoinCompanyRequestById");
      }


      var pathParams = {
        'companyId': companyId,
        'joinCompanyRequestId': joinCompanyRequestId
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
      var returnType = GetJoinCompanyRequestByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a join company request
     * This API can be used by company &#x60;admin&#x60; users to get a join company request by id (must have been received by his company) (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetJoinCompanyRequestByIdSuccess}
     */
    this.getJoinCompanyRequestById = function(companyId, joinCompanyRequestId, accept) {
      return this.getJoinCompanyRequestByIdWithHttpInfo(companyId, joinCompanyRequestId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all join company requests
     * This API can be used by company &#x60;admin&#x60; users to list join company requests received for his company by Rainbow users who want to join his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests?status&#x3D;pending  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less requests details in response.    - &#x60;small&#x60;: id, requestingUserId, requestedCompanyId, status    - &#x60;medium&#x60;: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, requestedCompanyName, status, requestingDate    - &#x60;full&#x60;: all request fields
     * @param {Number} opts.limit Allow to specify the number of requests to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort requests list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting requests list.
     * @param {String} opts.status List all join company requests having the provided status(es)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetJoinCompanyRequestsSuccess} and HTTP response
     */
    this.getJoinCompanyRequestsWithHttpInfo = function(companyId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getJoinCompanyRequests");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getJoinCompanyRequests");
      }


      var pathParams = {
        'companyId': companyId
      };
      var queryParams = {
        'format': opts['format'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortField': opts['sortField'],
        'sortOrder': opts['sortOrder'],
        'status': opts['status'],
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
      var returnType = GetJoinCompanyRequestsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all join company requests
     * This API can be used by company &#x60;admin&#x60; users to list join company requests received for his company by Rainbow users who want to join his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests?status&#x3D;pending  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Allows to retrieve more or less requests details in response.    - &#x60;small&#x60;: id, requestingUserId, requestedCompanyId, status    - &#x60;medium&#x60;: id, requestingUserId, requestingUserLoginEmail, requestedCompanyId, requestedCompanyName, status, requestingDate    - &#x60;full&#x60;: all request fields
     * @param {Number} opts.limit Allow to specify the number of requests to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first request to retrieve (first request if not specified, i.e. offset&#x3D;0). Warning: if offset &gt; total, no results are returned.
     * @param {String} opts.sortField Sort requests list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting requests list.
     * @param {String} opts.status List all join company requests having the provided status(es)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetJoinCompanyRequestsSuccess}
     */
    this.getJoinCompanyRequests = function(companyId, accept, opts) {
      return this.getJoinCompanyRequestsWithHttpInfo(companyId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Accept a join company request
     * This API can be used by company &#x60;admin&#x60; users to accept a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       To accept the join company request, the user must still be in default company (may evolve in the future)       Once accepted, requesting user will be moved from Default company to company admin&#39;s company.    The user profile will be associated to the company subscription of the default offer (Essential).       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;     &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;         &lt;data/&gt;     &lt;/x&gt;     &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt; &lt;/presence&gt; &#x60;&#x60;&#x60;       When an admin accept a join company request, he and all company admins of this company are notified that the request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;accepted&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Requesting user is notified that his request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;       status&#x3D;&#39;accepted&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Note that if the requesting user has also been invited by an admin to join this company (join company invitation), the invitation is auto-accepted.       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/accept  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostAcceptJoinCompanyReqSuccess} and HTTP response
     */
    this.postAcceptJoinCompanyReqWithHttpInfo = function(companyId, joinCompanyRequestId) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling postAcceptJoinCompanyReq");
      }

      // verify the required parameter 'joinCompanyRequestId' is set
      if (joinCompanyRequestId === undefined || joinCompanyRequestId === null) {
        throw new Error("Missing the required parameter 'joinCompanyRequestId' when calling postAcceptJoinCompanyReq");
      }


      var pathParams = {
        'companyId': companyId,
        'joinCompanyRequestId': joinCompanyRequestId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PostAcceptJoinCompanyReqSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId}/accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept a join company request
     * This API can be used by company &#x60;admin&#x60; users to accept a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       To accept the join company request, the user must still be in default company (may evolve in the future)       Once accepted, requesting user will be moved from Default company to company admin&#39;s company.    The user profile will be associated to the company subscription of the default offer (Essential).       User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;     &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;         &lt;data/&gt;     &lt;/x&gt;     &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt; &lt;/presence&gt; &#x60;&#x60;&#x60;       When an admin accept a join company request, he and all company admins of this company are notified that the request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;accepted&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Requesting user is notified that his request has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;       status&#x3D;&#39;accepted&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Note that if the requesting user has also been invited by an admin to join this company (join company invitation), the invitation is auto-accepted.       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/accept  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostAcceptJoinCompanyReqSuccess}
     */
    this.postAcceptJoinCompanyReq = function(companyId, joinCompanyRequestId) {
      return this.postAcceptJoinCompanyReqWithHttpInfo(companyId, joinCompanyRequestId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Decline a join company request
     * This API can be used by company &#x60;admin&#x60; users to decline a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       When an admin decline a join company request, requesting user is notified that his request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       When an admin decline a join company request, he and all company admins of this company are notified that the request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/decline  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostDeclineJoinCompanyReqSuccess} and HTTP response
     */
    this.postDeclineJoinCompanyReqWithHttpInfo = function(companyId, joinCompanyRequestId) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling postDeclineJoinCompanyReq");
      }

      // verify the required parameter 'joinCompanyRequestId' is set
      if (joinCompanyRequestId === undefined || joinCompanyRequestId === null) {
        throw new Error("Missing the required parameter 'joinCompanyRequestId' when calling postDeclineJoinCompanyReq");
      }


      var pathParams = {
        'companyId': companyId,
        'joinCompanyRequestId': joinCompanyRequestId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PostDeclineJoinCompanyReqSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/join-companies/requests/{joinCompanyRequestId}/decline', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Decline a join company request
     * This API can be used by company &#x60;admin&#x60; users to decline a join company request received for his company (sent using API [POST /api/rainbow/enduser/v1.0/users/:userId/request-join-company][0]).       When an admin decline a join company request, requesting user is notified that his request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;sent&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       When an admin decline a join company request, he and all company admins of this company are notified that the request has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;         from&#x3D;&#39;jid_from@openrainbow.com&#39;         to&#x3D;&#39;jid_to@openrainbow.com&#39;         xmlns&#x3D;&#39;jabber:client&#39;&gt;      &lt;joincompanyrequest action&#x3D;\&quot;update\&quot; id&#x3D;&#39;5819ed7c9547b313509237d6&#39;      status&#x3D;&#39;declined&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt; &lt;/message&gt; &#x60;&#x60;&#x60;       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/join-companies/requests/5819ed7c9547b313509237d6/decline  [0]: /enduser/#api-join_company-enduser_RequestJoinCompany
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} joinCompanyRequestId Join company request unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostDeclineJoinCompanyReqSuccess}
     */
    this.postDeclineJoinCompanyReq = function(companyId, joinCompanyRequestId) {
      return this.postDeclineJoinCompanyReqWithHttpInfo(companyId, joinCompanyRequestId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));