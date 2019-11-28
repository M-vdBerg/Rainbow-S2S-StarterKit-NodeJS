/**
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: 1.95.0
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
    factory(root.expect, root.RainbowAuthenticationPortal);
  }
}(this, function(expect, RainbowAuthenticationPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowAuthenticationPortal.CommonApi();
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

  describe('CommonApi', function() {
    describe('deleteMetrics', function() {
      it('should call deleteMetrics successfully', function(done) {
        //uncomment below and update the code to test deleteMetrics
        //instance.deleteMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiRainbowAuthenticationV10About', function() {
      it('should call getApiRainbowAuthenticationV10About successfully', function(done) {
        //uncomment below and update the code to test getApiRainbowAuthenticationV10About
        //instance.getApiRainbowAuthenticationV10About(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiRainbowPing', function() {
      it('should call getApiRainbowPing successfully', function(done) {
        //uncomment below and update the code to test getApiRainbowPing
        //instance.getApiRainbowPing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetrics', function() {
      it('should call getMetrics successfully', function(done) {
        //uncomment below and update the code to test getMetrics
        //instance.getMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putApiRainbowLogsLevels', function() {
      it('should call putApiRainbowLogsLevels successfully', function(done) {
        //uncomment below and update the code to test putApiRainbowLogsLevels
        //instance.putApiRainbowLogsLevels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
