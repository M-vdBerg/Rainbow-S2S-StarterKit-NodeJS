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
    instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
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

  describe('AdminPutRainbowProfilesFeaturesSuccess', function() {
    it('should create an instance of AdminPutRainbowProfilesFeaturesSuccess', function() {
      // uncomment below and update the code to test AdminPutRainbowProfilesFeaturesSuccess
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be.a(RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess);
    });

    it('should have the property featureId (base name: "featureId")', function() {
      // uncomment below and update the code to test the property featureId
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property featureName (base name: "featureName")', function() {
      // uncomment below and update the code to test the property featureName
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property featureUniqueRef (base name: "featureUniqueRef")', function() {
      // uncomment below and update the code to test the property featureUniqueRef
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property featureType (base name: "featureType")', function() {
      // uncomment below and update the code to test the property featureType
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property addedDate (base name: "addedDate")', function() {
      // uncomment below and update the code to test the property addedDate
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateDate (base name: "lastUpdateDate")', function() {
      // uncomment below and update the code to test the property lastUpdateDate
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property limitMin (base name: "limitMin")', function() {
      // uncomment below and update the code to test the property limitMin
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

    it('should have the property limitMax (base name: "limitMax")', function() {
      // uncomment below and update the code to test the property limitMax
      //var instance = new RainbowAdminPortal.AdminPutRainbowProfilesFeaturesSuccess();
      //expect(instance).to.be();
    });

  });

}));
