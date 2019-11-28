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
    define(['ApiClient', 'model/GetSystemPhoneNumbersIdSuccess', 'model/GetSystemPhoneNumbersSuccess', 'model/PutSystemPhoneNumbers', 'model/PutSystemPhoneNumbersSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetSystemPhoneNumbersIdSuccess'), require('../model/GetSystemPhoneNumbersSuccess'), require('../model/PutSystemPhoneNumbers'), require('../model/PutSystemPhoneNumbersSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.SystemsPhoneNumbersApi = factory(root.RainbowAdminPortal.ApiClient, root.RainbowAdminPortal.GetSystemPhoneNumbersIdSuccess, root.RainbowAdminPortal.GetSystemPhoneNumbersSuccess, root.RainbowAdminPortal.PutSystemPhoneNumbers, root.RainbowAdminPortal.PutSystemPhoneNumbersSuccess);
  }
}(this, function(ApiClient, GetSystemPhoneNumbersIdSuccess, GetSystemPhoneNumbersSuccess, PutSystemPhoneNumbers, PutSystemPhoneNumbersSuccess) {
  'use strict';

  /**
   * SystemsPhoneNumbers service.
   * @module api/SystemsPhoneNumbersApi
   * @version 1.82.0
   */

  /**
   * Constructs a new SystemsPhoneNumbersApi. 
   * @alias module:api/SystemsPhoneNumbersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all system phone numbers
     * This API allows to list all phoneNumbers associated to a given system (pbx).       Users with `superadmin` or `support` role can retrieve phoneNumbers from any system.    `bp_admin` can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.    _Notes:_* `systemId` field returned in response corresponds to portal's internal mongoDB id, while `pbxId` is the id handled by PCG. * This API is paginated. * phoneNumbers list can be filtered on the following fields:    * `shortNumber`: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**shortNumber=123**   * `internalNumber`: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**internalNumber=123**   * `pbxUserId`: allow to retrieve only phoneNumbers having the provided pbxUserId value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**pbxUserId=123**   * `isMonitored`: allow to retrieve only phoneNumbers for which monitoring in Rainbow application is activated (true) or deactivated (false).    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isMonitored=true**   * `isAssignedToUser`: allow to retrieve only phoneNumbers being associated (true) or not (false) to a Rainbow user.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser=true**   * `userId`: allow to retrieve only phoneNumbers being associated to the requested Rainbow user id.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**userId=57960e4fa1ab69c4243415b1**   * `companyPrefix`: allow to retrieve only phoneNumbers having the provided companyPrefix value. **See below 'Sharing a system between several companies'**   Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**companyPrefix=8210****This filter is not taken in account for role admin.**  * Filters can be combined.    Example: retrieve the list of phoneNumbers being associated to a Rainbow user and for which monitoring is enabled in Rainbow application: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser=true**&**isMonitored=true**        **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When directoryNumber are got from this system two more data are available: \"companyName\", \"companyPrefix\".   These data are stored and it's now possible to get all phoneNumbers having the given \"companyPrefix\".    A company-admin can only see, then give to a rainbow user, numbers of his company.   
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.shortNumber Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value.
     * @param {String} opts.internalNumber Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value.
     * @param {String} opts.pbxUserId Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value.
     * @param {String} opts.companyPrefix When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named 'tenantCallNumber' in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the 'tenantCallNumber' 8210 (exact match)  
     * @param {Boolean} opts.isMonitored Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value.
     * @param {String} opts.name Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value.
     * @param {String} opts.deviceName Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value.
     * @param {Boolean} opts.isAssignedToUser Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !== null * false: return all phoneNumbers having userId === null  
     * @param {String} opts.format Allows to retrieve more or less phone numbers details in response.    - `small`: id shortNumber internalNumber numberE164    - `medium`: id shortNumber internalNumber voiceMailNumber number numberE164 isFromSystem pbxId systemId    - `full`: all phone numbers fields
     * @param {Number} opts.limit Allow to specify the number of phone numbers to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort phone numbers list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting phone numbers list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSystemPhoneNumbersSuccess} and HTTP response
     */
    this.getSystemPhoneNumbersWithHttpInfo = function(systemId, accept, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemPhoneNumbers");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getSystemPhoneNumbers");
      }

      var pathParams = {
        'systemId': systemId
      };
      var queryParams = {
        'shortNumber': opts['shortNumber'],
        'internalNumber': opts['internalNumber'],
        'pbxUserId': opts['pbxUserId'],
        'companyPrefix': opts['companyPrefix'],
        'isMonitored': opts['isMonitored'],
        'name': opts['name'],
        'deviceName': opts['deviceName'],
        'isAssignedToUser': opts['isAssignedToUser'],
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
      var returnType = GetSystemPhoneNumbersSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all system phone numbers
     * This API allows to list all phoneNumbers associated to a given system (pbx).       Users with `superadmin` or `support` role can retrieve phoneNumbers from any system.    `bp_admin` can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.    _Notes:_* `systemId` field returned in response corresponds to portal's internal mongoDB id, while `pbxId` is the id handled by PCG. * This API is paginated. * phoneNumbers list can be filtered on the following fields:    * `shortNumber`: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**shortNumber=123**   * `internalNumber`: allow to retrieve only phoneNumbers starting by the provided value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**internalNumber=123**   * `pbxUserId`: allow to retrieve only phoneNumbers having the provided pbxUserId value.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**pbxUserId=123**   * `isMonitored`: allow to retrieve only phoneNumbers for which monitoring in Rainbow application is activated (true) or deactivated (false).    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isMonitored=true**   * `isAssignedToUser`: allow to retrieve only phoneNumbers being associated (true) or not (false) to a Rainbow user.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser=true**   * `userId`: allow to retrieve only phoneNumbers being associated to the requested Rainbow user id.    Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**userId=57960e4fa1ab69c4243415b1**   * `companyPrefix`: allow to retrieve only phoneNumbers having the provided companyPrefix value. **See below 'Sharing a system between several companies'**   Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**companyPrefix=8210****This filter is not taken in account for role admin.**  * Filters can be combined.    Example: retrieve the list of phoneNumbers being associated to a Rainbow user and for which monitoring is enabled in Rainbow application: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phone-numbers?**isAssignedToUser=true**&**isMonitored=true**        **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When directoryNumber are got from this system two more data are available: \"companyName\", \"companyPrefix\".   These data are stored and it's now possible to get all phoneNumbers having the given \"companyPrefix\".    A company-admin can only see, then give to a rainbow user, numbers of his company.   
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.shortNumber Allow to filter phoneNumbers list on phoneNumbers having shortNumber field starting with the provided value.
     * @param {String} opts.internalNumber Allow to filter phoneNumbers list on phoneNumbers having internalNumber field starting with the provided value.
     * @param {String} opts.pbxUserId Allow to filter phoneNumbers list on phoneNumbers having pbxUserId field equal to provided value.
     * @param {String} opts.companyPrefix When the system is a centrex server (multi-tenant OXE), allow to filter phoneNumbers list on companyPrefix.The companyPrefix value to set is named 'tenantCallNumber' in companies data model.   * 8210: return all phoneNumbers having the prefix 8210, then allocated to the company having the 'tenantCallNumber' 8210 (exact match)  
     * @param {Boolean} opts.isMonitored Allow to filter phoneNumbers list on phoneNumbers having isMonitored field equal to provided value.
     * @param {String} opts.name Allow to filter phoneNumbers list on phoneNumbers having firstName or lastName starting with the provided value.
     * @param {String} opts.deviceName Allow to filter phoneNumbers list on phoneNumbers having deviceName field equal to provided value.
     * @param {Boolean} opts.isAssignedToUser Allow to filter phoneNumbers list on phoneNumbers being assigned or not to a Rainbow user, according to provided value.   * true: return all phoneNumbers having userId !== null * false: return all phoneNumbers having userId === null  
     * @param {String} opts.format Allows to retrieve more or less phone numbers details in response.    - `small`: id shortNumber internalNumber numberE164    - `medium`: id shortNumber internalNumber voiceMailNumber number numberE164 isFromSystem pbxId systemId    - `full`: all phone numbers fields
     * @param {Number} opts.limit Allow to specify the number of phone numbers to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first phone number to retrieve (first phone number if not specified). Warning: if offset > total, no results are returned.
     * @param {String} opts.sortField Sort phone numbers list based on the given field.
     * @param {Number} opts.sortOrder Specify order when sorting phone numbers list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSystemPhoneNumbersSuccess}
     */
    this.getSystemPhoneNumbers = function(systemId, accept, opts) {
      return this.getSystemPhoneNumbersWithHttpInfo(systemId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a system phone number
     * This API allows to retrieve a specific phoneNumber associated to a given system (pbx).       Users with `superadmin` or `support` role can retrieve phoneNumbers from any system.    `bp_admin` can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When a company-admin or a site-admin wants to get one of the directoryNumber of this system we have to check if the \"tenantCallNumber\" of his company matches with \"companyPrefix\".   Else an HTTP error 404 Not Found is thrown.   
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} phoneNumberId PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSystemPhoneNumbersIdSuccess} and HTTP response
     */
    this.getSystemPhoneNumbersIdWithHttpInfo = function(systemId, phoneNumberId, accept) {
      var postBody = null;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystemPhoneNumbersId");
      }
      // verify the required parameter 'phoneNumberId' is set
      if (phoneNumberId === undefined || phoneNumberId === null) {
        throw new Error("Missing the required parameter 'phoneNumberId' when calling getSystemPhoneNumbersId");
      }
      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getSystemPhoneNumbersId");
      }

      var pathParams = {
        'systemId': systemId,
        'phoneNumberId': phoneNumberId
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
      var returnType = GetSystemPhoneNumbersIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a system phone number
     * This API allows to retrieve a specific phoneNumber associated to a given system (pbx).       Users with `superadmin` or `support` role can retrieve phoneNumbers from any system.    `bp_admin` can only retrieve phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin nor support role) can only retrieve phoneNumbers of systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.       Example: GET https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities.   When a company-admin or a site-admin wants to get one of the directoryNumber of this system we have to check if the \"tenantCallNumber\" of his company matches with \"companyPrefix\".   Else an HTTP error 404 Not Found is thrown.   
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} phoneNumberId PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSystemPhoneNumbersIdSuccess}
     */
    this.getSystemPhoneNumbersId = function(systemId, phoneNumberId, accept) {
      return this.getSystemPhoneNumbersIdWithHttpInfo(systemId, phoneNumberId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a system phone number
     * This API allows to update a phone number for a given system (pbx).       It can be used to link a system phoneNumber to a Rainbow user by setting `userId` parameter. If `userId` parameter is provided, jid_im, jid_tel and jid_password of the corresponding user are automatically set in phoneNumber.    It can also be used to enable monitoring of this phoneNumber by PCG (set `isMonitored` parameter to true). **Note that**`pbxId`, `systemId`, `shortNumber` and `pbxUserId` can't be modified.       When the phoneNumber is updated with this API, PCG is notified on its corresponding JID pbxpcg with the following XMPP iq:        ```html <iq id=\"8413b42e-563c-4437-9a53-06f638b5ab69_0\"           from=\"pcloud@openrainbow.com/172440802160413612281463752830017532\"           to=\"pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\"           xmlns=\"jabber:client\">      <config xmlns=\"urn:xmpp:pbxagent:config:1\">          <user action=\"update\"/>             <shortNumber>1001</shortNumber>             <internalNumber>20001</internalNumber>             <voiceMailNumber>9999</voiceMailNumber>             <numberE164>+33300001001</numberE164>             <isMonitored>false</isMonitored>             <userId>57960e4fa1ab69c4243415b1</userId>             <jid_im>82fc7375cf34403a9c711ae7eda0929f@openrainbow.com</jid_im>             <jid_tel>tel_82fc7375cf34403a9c711ae7eda0929f@openrainbow.com</jid_tel>             <jid_password>fd6806bca74942598f57c288b0d50baa</jid_password>      </config> </iq> ```       The API waits that PCG has taken into account the phoneNumber update before processing the update in database and sending the response to client.       Users with `superadmin` role can update phoneNumbers objects of any system.    `bp_admin` can only update phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin) can only update phoneNumbers objects on systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.       Example: PUT https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex=true.   It's not possible to update the internalNumber for a phone number supplied by this kind of system.   The specific error \"internalNumber 3000 is readonly because it belongs to a multi-tenant system\",\"errorDetailsCode\": 409553 is thrown.
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} phoneNumberId PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutSystemPhoneNumbers} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutSystemPhoneNumbersSuccess} and HTTP response
     */
    this.putSystemPhoneNumbersWithHttpInfo = function(systemId, phoneNumberId, body) {
      var postBody = body;
      // verify the required parameter 'systemId' is set
      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling putSystemPhoneNumbers");
      }
      // verify the required parameter 'phoneNumberId' is set
      if (phoneNumberId === undefined || phoneNumberId === null) {
        throw new Error("Missing the required parameter 'phoneNumberId' when calling putSystemPhoneNumbers");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putSystemPhoneNumbers");
      }

      var pathParams = {
        'systemId': systemId,
        'phoneNumberId': phoneNumberId
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
      var returnType = PutSystemPhoneNumbersSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/admin/v1.0/systems/{systemId}/phone-numbers/{phoneNumberId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a system phone number
     * This API allows to update a phone number for a given system (pbx).       It can be used to link a system phoneNumber to a Rainbow user by setting `userId` parameter. If `userId` parameter is provided, jid_im, jid_tel and jid_password of the corresponding user are automatically set in phoneNumber.    It can also be used to enable monitoring of this phoneNumber by PCG (set `isMonitored` parameter to true). **Note that**`pbxId`, `systemId`, `shortNumber` and `pbxUserId` can't be modified.       When the phoneNumber is updated with this API, PCG is notified on its corresponding JID pbxpcg with the following XMPP iq:        ```html <iq id=\"8413b42e-563c-4437-9a53-06f638b5ab69_0\"           from=\"pcloud@openrainbow.com/172440802160413612281463752830017532\"           to=\"pbxpcg_7ca2d0aefb024c949303b508fcecdad2@openrainbow.com\"           xmlns=\"jabber:client\">      <config xmlns=\"urn:xmpp:pbxagent:config:1\">          <user action=\"update\"/>             <shortNumber>1001</shortNumber>             <internalNumber>20001</internalNumber>             <voiceMailNumber>9999</voiceMailNumber>             <numberE164>+33300001001</numberE164>             <isMonitored>false</isMonitored>             <userId>57960e4fa1ab69c4243415b1</userId>             <jid_im>82fc7375cf34403a9c711ae7eda0929f@openrainbow.com</jid_im>             <jid_tel>tel_82fc7375cf34403a9c711ae7eda0929f@openrainbow.com</jid_tel>             <jid_password>fd6806bca74942598f57c288b0d50baa</jid_password>      </config> </iq> ```       The API waits that PCG has taken into account the phoneNumber update before processing the update in database and sending the response to client.       Users with `superadmin` role can update phoneNumbers objects of any system.    `bp_admin` can only update phoneNumbers linked to systems of End Customer companies for which their bp_admin's company is the BP company.    Users with `admin` role (and not having superadmin) can only update phoneNumbers objects on systems that they manage.    In a Multi-Layer organization that describes a hierarchy including ORGANIZATIONS/COMPANIES/SITES/SYSTEMS, an admin role of a upper layer is allowed to see systems within their's reach.       Example: PUT https://openrainbow.com/api/rainbow/admin/v1.0/systems/569d0ef3ef7816921f7e94fa/phoneNumbers/5790fd2256b61a4d865839fe       **Specific feature:** Sharing a system between several companies    Since 1.47.0 release, configuring companies sharing a multi-tenant system is possible.   An OXE can be multi-company.   A multi-tenant system, so called CENTREX, allows sharing a call-server between several entities. For us an entity is a company with the flag isCentrex=true.   It's not possible to update the internalNumber for a phone number supplied by this kind of system.   The specific error \"internalNumber 3000 is readonly because it belongs to a multi-tenant system\",\"errorDetailsCode\": 409553 is thrown.
     * @param {String} systemId System unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {String} phoneNumberId PhoneNumber unique identifier (like 569ce8c8f9336c471b98eda1)
     * @param {module:model/PutSystemPhoneNumbers} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutSystemPhoneNumbersSuccess}
     */
    this.putSystemPhoneNumbers = function(systemId, phoneNumberId, body) {
      return this.putSystemPhoneNumbersWithHttpInfo(systemId, phoneNumberId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
