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
    define(['ApiClient', 'model/GetCompanySSOSettingsSuccess', 'model/PostCompanySSOSettings', 'model/PutCompanySSOSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCompanySSOSettingsSuccess'), require('../model/PostCompanySSOSettings'), require('../model/PutCompanySSOSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.CompaniesSsoSettingsApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.GetCompanySSOSettingsSuccess, root.RainbowAdminPortal.PostCompanySSOSettings, root.RainbowAdminPortal.PutCompanySSOSettings);
  }
}(this, function(ApiClient, GetCompanySSOSettingsSuccess, PostCompanySSOSettings, PutCompanySSOSettings) {
  'use strict';

  /**
   * CompaniesSsoSettings service.
   * @module api/CompaniesSsoSettingsApi
   * @version 1.82.0
   */

  /**
   * Constructs a new CompaniesSsoSettingsApi. 
   * @alias module:api/CompaniesSsoSettingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an SSO server configuration
     * This API allows to delete an SSO server configuration for a given company.       Users with `superadmin` role can delete an SSO server configuration of any company.       `bp_admin` users can only delete an SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only delete an SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only delete an SSO server configuration of their own company.
     * @param {String} singleSignOnType authentication type (like SAML)
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {String} contentType application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCompanySSOSettingsWithHttpInfo = function(singleSignOnType, companyId, accept, contentType) {
      var postBody = null;
      // verify the required parameter 'singleSignOnType' is set
      if (singleSignOnType === undefined || singleSignOnType === null) {
        throw new Error("Missing the required parameter 'singleSignOnType' when calling deleteCompanySSOSettings");
      }
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteCompanySSOSettings");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteCompanySSOSettings");
      }
      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling deleteCompanySSOSettings");
      }

      var pathParams = {
        'singleSignOnType': singleSignOnType,
        'companyId': companyId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept,
        'content-type': contentType
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/settings/sso/{singleSignOnType}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an SSO server configuration
     * This API allows to delete an SSO server configuration for a given company.       Users with `superadmin` role can delete an SSO server configuration of any company.       `bp_admin` users can only delete an SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only delete an SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only delete an SSO server configuration of their own company.
     * @param {String} singleSignOnType authentication type (like SAML)
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {String} contentType application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCompanySSOSettings = function(singleSignOnType, companyId, accept, contentType) {
      return this.deleteCompanySSOSettingsWithHttpInfo(singleSignOnType, companyId, accept, contentType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get SSO server configuration
     * This API allows to get SSO server configuration for a given company.       Users with `superadmin` role can get SSO server configurationof any company.       `bp_admin` users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only get SSO server configuration of their own company.
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCompanySSOSettingsSuccess} and HTTP response
     */
    this.getCompanySSOSettingsWithHttpInfo = function(companyId, accept) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanySSOSettings");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getCompanySSOSettings");
      }

      var pathParams = {
        'companyId': companyId
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
      var returnType = GetCompanySSOSettingsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/settings/sso', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get SSO server configuration
     * This API allows to get SSO server configuration for a given company.       Users with `superadmin` role can get SSO server configurationof any company.       `bp_admin` users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only get SSO server configuration of their own company.
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCompanySSOSettingsSuccess}
     */
    this.getCompanySSOSettings = function(companyId, accept) {
      return this.getCompanySSOSettingsWithHttpInfo(companyId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create SSO server configuration
     * This API allows to get SSO server configuration for a given company.       Users with `superadmin` role can get SSO server configuration of any company.       `bp_admin` users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only get SSO server configuration of their own company.
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PostCompanySSOSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.postCompanySSOSettingsWithHttpInfo = function(companyId, body) {
      var postBody = body;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling postCompanySSOSettings");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCompanySSOSettings");
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
      var returnType = null;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/settings/sso', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create SSO server configuration
     * This API allows to get SSO server configuration for a given company.       Users with `superadmin` role can get SSO server configuration of any company.       `bp_admin` users can only get SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only get SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only get SSO server configuration of their own company.
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PostCompanySSOSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.postCompanySSOSettings = function(companyId, body) {
      return this.postCompanySSOSettingsWithHttpInfo(companyId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update SSO server configuration
     * This API allows to update SSO server configuration for a given company.       Users with `superadmin` role can update SSO server configuration of any company.       `bp_admin` users can only update SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only update SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only update SSO server configuration of their own company.
     * @param {String} singleSignOnType authentication type (like SAML)
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutCompanySSOSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.putCompanySSOSettingsWithHttpInfo = function(singleSignOnType, companyId, body) {
      var postBody = body;
      // verify the required parameter 'singleSignOnType' is set
      if (singleSignOnType === undefined || singleSignOnType === null) {
        throw new Error("Missing the required parameter 'singleSignOnType' when calling putCompanySSOSettings");
      }
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling putCompanySSOSettings");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putCompanySSOSettings");
      }

      var pathParams = {
        'singleSignOnType': singleSignOnType,
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
      var returnType = null;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/companies/{companyId}/settings/sso/{singleSignOnType}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update SSO server configuration
     * This API allows to update SSO server configuration for a given company.       Users with `superadmin` role can update SSO server configuration of any company.       `bp_admin` users can only update SSO server configuration for a company they manage (i.e. End Customer company for which bp_admin's company if the BP company).       `organization_admin` users can only update SSO server configuration for a company they manage (i.e. company linked to organization_admin's organization).       `company_admin` users can only update SSO server configuration of their own company.
     * @param {String} singleSignOnType authentication type (like SAML)
     * @param {String} companyId Company unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutCompanySSOSettings} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.putCompanySSOSettings = function(singleSignOnType, companyId, body) {
      return this.putCompanySSOSettingsWithHttpInfo(singleSignOnType, companyId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
