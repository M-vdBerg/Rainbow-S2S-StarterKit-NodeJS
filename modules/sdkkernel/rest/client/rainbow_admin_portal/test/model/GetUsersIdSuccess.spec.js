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
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RainbowAdminPortal);
  }
}(this, function(expect, RainbowAdminPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowAdminPortal.GetUsersIdSuccess();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetUsersIdSuccess', function() {
    it('should create an instance of GetUsersIdSuccess', function() {
      // uncomment below and update the code to test GetUsersIdSuccess
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be.a(RainbowAdminPortal.GetUsersIdSuccess);
    });

    it('should have the property isInDefaultCompany (base name: "isInDefaultCompany")', function() {
      // uncomment below and update the code to test the property isInDefaultCompany
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property calendars (base name: "calendars")', function() {
      // uncomment below and update the code to test the property calendars
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isADSearchAvailable (base name: "isADSearchAvailable")', function() {
      // uncomment below and update the code to test the property isADSearchAvailable
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property loginEmail (base name: "loginEmail")', function() {
      // uncomment below and update the code to test the property loginEmail
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property nickName (base name: "nickName")', function() {
      // uncomment below and update the code to test the property nickName
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jobTitle (base name: "jobTitle")', function() {
      // uncomment below and update the code to test the property jobTitle
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumbers (base name: "phoneNumbers")', function() {
      // uncomment below and update the code to test the property phoneNumbers
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidIm (base name: "jid_im")', function() {
      // uncomment below and update the code to test the property jidIm
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidTel (base name: "jid_tel")', function() {
      // uncomment below and update the code to test the property jidTel
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidPassword (base name: "jid_password")', function() {
      // uncomment below and update the code to test the property jidPassword
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property adminType (base name: "adminType")', function() {
      // uncomment below and update the code to test the property adminType
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "organisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isInitialized (base name: "isInitialized")', function() {
      // uncomment below and update the code to test the property isInitialized
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property initializationDate (base name: "initializationDate")', function() {
      // uncomment below and update the code to test the property initializationDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property activationDate (base name: "activationDate")', function() {
      // uncomment below and update the code to test the property activationDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateDate (base name: "lastUpdateDate")', function() {
      // uncomment below and update the code to test the property lastUpdateDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastAvatarUpdateDate (base name: "lastAvatarUpdateDate")', function() {
      // uncomment below and update the code to test the property lastAvatarUpdateDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property createdBySelfRegister (base name: "createdBySelfRegister")', function() {
      // uncomment below and update the code to test the property createdBySelfRegister
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property createdByAdmin (base name: "createdByAdmin")', function() {
      // uncomment below and update the code to test the property createdByAdmin
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property invitedBy (base name: "invitedBy")', function() {
      // uncomment below and update the code to test the property invitedBy
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property firstLoginDate (base name: "firstLoginDate")', function() {
      // uncomment below and update the code to test the property firstLoginDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastLoginDate (base name: "lastLoginDate")', function() {
      // uncomment below and update the code to test the property lastLoginDate
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property loggedSince (base name: "loggedSince")', function() {
      // uncomment below and update the code to test the property loggedSince
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isTerminated (base name: "isTerminated")', function() {
      // uncomment below and update the code to test the property isTerminated
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property guestMode (base name: "guestMode")', function() {
      // uncomment below and update the code to test the property guestMode
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property timeToLive (base name: "timeToLive")', function() {
      // uncomment below and update the code to test the property timeToLive
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

    it('should have the property authenticationType (base name: "authenticationType")', function() {
      // uncomment below and update the code to test the property authenticationType
      //var instance = new RainbowAdminPortal.GetUsersIdSuccess();
      //expect(instance).to.be();
    });

  });

}));
