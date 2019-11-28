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
    define(['ApiClient', 'model/AdminPostAcceptLinkEcToBpInvitationSuccess', 'model/AdminPostDeclineLinkEcToBpInvitationSuccess', 'model/AdminPostLinkEcToBpInvite', 'model/AdminPostLinkEcToBpInviteSuccess', 'model/GetLinkECToBPInvitationsSuccess', 'model/GetLinkECToBPInviteByIdSuccess', 'model/PutCancelLinkEcToBpInviteByIdSuccess', 'model/ResendLinkEcToBpInviteById', 'model/ResendLinkEcToBpInviteByIdSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdminPostAcceptLinkEcToBpInvitationSuccess'), require('../model/AdminPostDeclineLinkEcToBpInvitationSuccess'), require('../model/AdminPostLinkEcToBpInvite'), require('../model/AdminPostLinkEcToBpInviteSuccess'), require('../model/GetLinkECToBPInvitationsSuccess'), require('../model/GetLinkECToBPInviteByIdSuccess'), require('../model/PutCancelLinkEcToBpInviteByIdSuccess'), require('../model/ResendLinkEcToBpInviteById'), require('../model/ResendLinkEcToBpInviteByIdSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.LinkEcToBpInvitationsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.AdminPostAcceptLinkEcToBpInvitationSuccess, root.RainbowAdminPortal.AdminPostDeclineLinkEcToBpInvitationSuccess, root.RainbowAdminPortal.AdminPostLinkEcToBpInvite, root.RainbowAdminPortal.AdminPostLinkEcToBpInviteSuccess, root.RainbowAdminPortal.GetLinkECToBPInvitationsSuccess, root.RainbowAdminPortal.GetLinkECToBPInviteByIdSuccess, root.RainbowAdminPortal.PutCancelLinkEcToBpInviteByIdSuccess, root.RainbowAdminPortal.ResendLinkEcToBpInviteById, root.RainbowAdminPortal.ResendLinkEcToBpInviteByIdSuccess);
  }
}(this, function(ApiClient, AdminPostAcceptLinkEcToBpInvitationSuccess, AdminPostDeclineLinkEcToBpInvitationSuccess, AdminPostLinkEcToBpInvite, AdminPostLinkEcToBpInviteSuccess, GetLinkECToBPInvitationsSuccess, GetLinkECToBPInviteByIdSuccess, PutCancelLinkEcToBpInviteByIdSuccess, ResendLinkEcToBpInviteById, ResendLinkEcToBpInviteByIdSuccess) {
  'use strict';

  /**
   * LinkEcToBpInvitations service.
   * @module api/LinkEcToBpInvitationsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new LinkEcToBpInvitationsApi. 
   * @alias module:api/LinkEcToBpInvitationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Accept an invitation
     * This API allows to accept an invitation received by company admins of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise accept request will be rejected with a 409 Conflict error       The `companyId` provided in URL should be the End Customer companyId. Otherwise, accept request will be rejected with a 400 Bad Request error.       Once accepted, invited company's `bpId` is updated with the id of the BP company.    If company was invited to be BP IR (invitedToBeBpIr=true), invited company's `isBP` and `bpType` are updated to true and `IR`.    Also, if company was invited to be BP IR, if admin that accepts invitation is only `company_admin` of the invited company, he will be promoted to `bp_admin` and `bp_finance` of this company.       When a end customer company admin accepts an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='582048dfe2e68a79f4979624'       status='accepted' type='received' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/accept   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPostAcceptLinkEcToBpInvitationSuccess} and HTTP response
     */
    this.adminPostAcceptLinkEcToBpInvitationWithHttpInfo = function(companyId, invitationId) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling adminPostAcceptLinkEcToBpInvitation");
      }
      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling adminPostAcceptLinkEcToBpInvitation");
      }

      var pathParams = {
        'companyId': companyId,
        'invitationId': invitationId
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
      var returnType = AdminPostAcceptLinkEcToBpInvitationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept an invitation
     * This API allows to accept an invitation received by company admins of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise accept request will be rejected with a 409 Conflict error       The `companyId` provided in URL should be the End Customer companyId. Otherwise, accept request will be rejected with a 400 Bad Request error.       Once accepted, invited company's `bpId` is updated with the id of the BP company.    If company was invited to be BP IR (invitedToBeBpIr=true), invited company's `isBP` and `bpType` are updated to true and `IR`.    Also, if company was invited to be BP IR, if admin that accepts invitation is only `company_admin` of the invited company, he will be promoted to `bp_admin` and `bp_finance` of this company.       When a end customer company admin accepts an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='582048dfe2e68a79f4979624'       status='accepted' type='received' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/accept   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPostAcceptLinkEcToBpInvitationSuccess}
     */
    this.adminPostAcceptLinkEcToBpInvitation = function(companyId, invitationId) {
      return this.adminPostAcceptLinkEcToBpInvitationWithHttpInfo(companyId, invitationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Decline an invitation
     * This API allows to decline an invitation received by company administrators of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise decline request will be rejected with a 409 Conflict error       The `companyId` provided in URL should be the End Customer companyId. Otherwise, decline request will be rejected with a 400 Bad Request error.       When a end customer company admin declines an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='582048dfe2e68a79f4979624'       status='declined' type='received' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/decline   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPostDeclineLinkEcToBpInvitationSuccess} and HTTP response
     */
    this.adminPostDeclineLinkEcToBpInvitationWithHttpInfo = function(companyId, invitationId) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling adminPostDeclineLinkEcToBpInvitation");
      }
      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling adminPostDeclineLinkEcToBpInvitation");
      }

      var pathParams = {
        'companyId': companyId,
        'invitationId': invitationId
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
      var returnType = AdminPostDeclineLinkEcToBpInvitationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/decline', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Decline an invitation
     * This API allows to decline an invitation received by company administrators of end customer company (or by bp_admin of BP IR company) (invitation sent by bp_admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/bp-link/invitations][0]).       Invitation must be in status pending or failed. Otherwise decline request will be rejected with a 409 Conflict error       The `companyId` provided in URL should be the End Customer companyId. Otherwise, decline request will be rejected with a 400 Bad Request error.       When a end customer company admin declines an invitation, EC company administrators and BP company administrators are notified with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='582048dfe2e68a79f4979624'       status='declined' type='received' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/573b46a305a4c22a19b216ce/bp-link/invitations/5819ed7c9547b313509237d6/decline   [0]: #api-link_EC_to_BP_invitations-admin_PostLinkEcToBpInvite
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPostDeclineLinkEcToBpInvitationSuccess}
     */
    this.adminPostDeclineLinkEcToBpInvitation = function(companyId, invitationId) {
      return this.adminPostDeclineLinkEcToBpInvitationWithHttpInfo(companyId, invitationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an invitation to link EC to BP
     * This API can be used by admin (`superadmin`, `bp_admin`) to create an invitation to link an End customer company to a BP company.       All company administrators of the provided end customer and BP companyId are notified about the created invitation with an email notification (only end customer company admins) and with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"create\" id='57cd5922d341df5812bbcb72'      status='pending' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/AdminPostLinkEcToBpInvite} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdminPostLinkEcToBpInviteSuccess} and HTTP response
     */
    this.adminPostLinkEcToBpInviteWithHttpInfo = function(companyId, body) {
      var postBody = body;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling adminPostLinkEcToBpInvite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminPostLinkEcToBpInvite");
      }

      var pathParams = {
        'companyId': companyId
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
      var returnType = AdminPostLinkEcToBpInviteSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an invitation to link EC to BP
     * This API can be used by admin (`superadmin`, `bp_admin`) to create an invitation to link an End customer company to a BP company.       All company administrators of the provided end customer and BP companyId are notified about the created invitation with an email notification (only end customer company admins) and with the following XMPP message:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"create\" id='57cd5922d341df5812bbcb72'      status='pending' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/AdminPostLinkEcToBpInvite} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdminPostLinkEcToBpInviteSuccess}
     */
    this.adminPostLinkEcToBpInvite = function(companyId, body) {
      return this.adminPostLinkEcToBpInviteWithHttpInfo(companyId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all invitations
     * This API can be used by `admin` users to list invitations they sent/received to link End customer company to BP company.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status=pending    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status=accepted&status=auto-accepted
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.status List all invitations having the provided status(es)
     * @param {String} opts.format Allows to retrieve more or less invitation details in response. 'small': '_id invitingCompanyId invitedCompanyId invitingAdminId status', 'medium': '_id invitingCompanyId invitingCompanyName invitedCompanyId invitedCompanyName invitingAdminId invitingAdminLoginEmail status lastNotificationDate invitationDate acceptationDate declinationDate', // All fields 'full': all fields
     * @param {Number} opts.limit Allow to specify the number of invitations to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort invitation list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting invitation list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLinkECToBPInvitationsSuccess} and HTTP response
     */
    this.getLinkECToBPInvitationsWithHttpInfo = function(companyId, accept, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getLinkECToBPInvitations");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getLinkECToBPInvitations");
      }

      var pathParams = {
        'companyId': companyId
      };
      var queryParams = {
        'status': opts['status'],
        'format': opts['format'],
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
      var returnType = GetLinkECToBPInvitationsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all invitations
     * This API can be used by `admin` users to list invitations they sent/received to link End customer company to BP company.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status=pending    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations?status=accepted&status=auto-accepted
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.status List all invitations having the provided status(es)
     * @param {String} opts.format Allows to retrieve more or less invitation details in response. 'small': '_id invitingCompanyId invitedCompanyId invitingAdminId status', 'medium': '_id invitingCompanyId invitingCompanyName invitedCompanyId invitedCompanyName invitingAdminId invitingAdminLoginEmail status lastNotificationDate invitationDate acceptationDate declinationDate', // All fields 'full': all fields
     * @param {Number} opts.limit Allow to specify the number of invitations to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first invitation to retrieve (first invitation if not specified, i.e. offset=0). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort invitation list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting invitation list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLinkECToBPInvitationsSuccess}
     */
    this.getLinkECToBPInvitations = function(companyId, accept, opts) {
      return this.getLinkECToBPInvitationsWithHttpInfo(companyId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an invitation
     * This API can be used by `admin` users to get an invitation he sent/received to link an end customer company to a BP.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLinkECToBPInviteByIdSuccess} and HTTP response
     */
    this.getLinkECToBPInviteByIdWithHttpInfo = function(companyId, invitationId, accept) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getLinkECToBPInviteById");
      }
      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling getLinkECToBPInviteById");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getLinkECToBPInviteById");
      }

      var pathParams = {
        'companyId': companyId,
        'invitationId': invitationId
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
      var returnType = GetLinkECToBPInviteByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an invitation
     * This API can be used by `admin` users to get an invitation he sent/received to link an end customer company to a BP.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLinkECToBPInviteByIdSuccess}
     */
    this.getLinkECToBPInviteById = function(companyId, invitationId, accept) {
      return this.getLinkECToBPInviteByIdWithHttpInfo(companyId, invitationId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel an invitation
     * This API can be used by BP admins to cancel an invitation already sent to link an EC company to their BP company.       Invitation must be pending, declined or failed (otherwise error 409 is returned).       The `companyId` provided in URL should be the BP companyId. Otherwise, cancel request will be rejected with a 400 Bad Request error.       Once invitation has been canceled, it will not be possible to accept or decline it anymore.       All company admins are notified with an XMPP message that the invitation has been canceled:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='57cd5922d341df5812bbcb72'      status='canceled' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/cancel
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutCancelLinkEcToBpInviteByIdSuccess} and HTTP response
     */
    this.putCancelLinkEcToBpInviteByIdWithHttpInfo = function(companyId, invitationId) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling putCancelLinkEcToBpInviteById");
      }
      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling putCancelLinkEcToBpInviteById");
      }

      var pathParams = {
        'companyId': companyId,
        'invitationId': invitationId
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
      var returnType = PutCancelLinkEcToBpInviteByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel an invitation
     * This API can be used by BP admins to cancel an invitation already sent to link an EC company to their BP company.       Invitation must be pending, declined or failed (otherwise error 409 is returned).       The `companyId` provided in URL should be the BP companyId. Otherwise, cancel request will be rejected with a 400 Bad Request error.       Once invitation has been canceled, it will not be possible to accept or decline it anymore.       All company admins are notified with an XMPP message that the invitation has been canceled:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"update\" id='57cd5922d341df5812bbcb72'      status='canceled' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/cancel
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutCancelLinkEcToBpInviteByIdSuccess}
     */
    this.putCancelLinkEcToBpInviteById = function(companyId, invitationId) {
      return this.putCancelLinkEcToBpInviteByIdWithHttpInfo(companyId, invitationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Re-send an invitation
     * This API can be used by BP admins to re-send an invitation already sent to link an EC company to their BP company.       If invitation is canceled or declined or failed, it is set back to pending and then re-sent.    If invitation is accepted or auto-accepted, error 409 is returned.       The `companyId` provided in URL should be the BP companyId. Otherwise, re-send request will be rejected with a 400 Bad Request error.       Invited company administrators receive a new email notification.    All company admins are notified with an XMPP message that the invitation has been re-sent:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"re-send\" id='57cd5922d341df5812bbcb72'      status='pending' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/re-send
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {module:model/ResendLinkEcToBpInviteById} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResendLinkEcToBpInviteByIdSuccess} and HTTP response
     */
    this.resendLinkEcToBpInviteByIdWithHttpInfo = function(companyId, invitationId, body) {
      var postBody = body;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling resendLinkEcToBpInviteById");
      }
      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling resendLinkEcToBpInviteById");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resendLinkEcToBpInviteById");
      }

      var pathParams = {
        'companyId': companyId,
        'invitationId': invitationId
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
      var returnType = ResendLinkEcToBpInviteByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/bp-link/invitations/{invitationId}/re-send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Re-send an invitation
     * This API can be used by BP admins to re-send an invitation already sent to link an EC company to their BP company.       If invitation is canceled or declined or failed, it is set back to pending and then re-sent.    If invitation is accepted or auto-accepted, error 409 is returned.       The `companyId` provided in URL should be the BP companyId. Otherwise, re-send request will be rejected with a 400 Bad Request error.       Invited company administrators receive a new email notification.    All company admins are notified with an XMPP message that the invitation has been re-sent:        ```html <message type='management' id='122'         from='jid_from@openrainbow.com'         to='jid_to@openrainbow.com'         xmlns='jabber:client'>      <linkectobpinvite action=\"re-send\" id='57cd5922d341df5812bbcb72'      status='pending' type='sent' xmlns='jabber:iq:configuration'/> </message> ```       Example: POST https://openrainbow.com/api/rainbow/admin/v1.0/companies/5703d0d49ccf39843c7ef897/bp-link/invitations/5819ed7c9547b313509237d6/re-send
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} invitationId Link End customer to BP invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {module:model/ResendLinkEcToBpInviteById} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResendLinkEcToBpInviteByIdSuccess}
     */
    this.resendLinkEcToBpInviteById = function(companyId, invitationId, body) {
      return this.resendLinkEcToBpInviteByIdWithHttpInfo(companyId, invitationId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
