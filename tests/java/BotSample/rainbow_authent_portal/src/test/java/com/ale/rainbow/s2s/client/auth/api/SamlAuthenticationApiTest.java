/*
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
 *
 * The version of the OpenAPI document: 1.104.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ale.rainbow.s2s.client.auth.api;

import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.models.GetSamlAssertionConfigurationSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetSamlAssertionSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetSamlLoginSuccess;
import com.ale.rainbow.s2s.client.auth.models.GetSamlLogoutSuccess;
import com.ale.rainbow.s2s.client.auth.models.PostSamlAssertion;
import com.ale.rainbow.s2s.client.auth.models.PostSamlAssertionSuccess;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SamlAuthenticationApi
 */
@Ignore
public class SamlAuthenticationApiTest {

    private final SamlAuthenticationApi api = new SamlAuthenticationApi();

    
    /**
     * IDP logout response
     *
     * This API allows IDP server to respond to SAML logout request or ask for SAML logout.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSamlAssertionTest() throws ApiException {
        String companyId = null;
        String accept = null;
        api.getSamlAssertion(companyId, accept);

        // TODO: test validations
    }
    
    /**
     * Get assertion configuration for a company
     *
     * This API allows an IDP server to retrieve ASSERTION configuration to callback Rainbow SP after an SAML authentication request
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSamlAssertionConfigurationTest() throws ApiException {
        String companyId = null;
        String accept = null;
        GetSamlAssertionConfigurationSuccess response = api.getSamlAssertionConfiguration(companyId, accept);

        // TODO: test validations
    }
    
    /**
     * Initiate an SAML authentication
     *
     * This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSamlLoginTest() throws ApiException {
        String companyId = null;
        String challenge = null;
        api.getSamlLogin(companyId, challenge);

        // TODO: test validations
    }
    
    /**
     * Close SAML session
     *
     * This API allows Rainbow users to login using SAML authentication if this type of authentication is provided by their company.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSamlLogoutTest() throws ApiException {
        api.getSamlLogout();

        // TODO: test validations
    }
    
    /**
     * IDP authentication response
     *
     * This API allows IDP server to provide the identity of a user which have performed an SAML authentication (If the user suceeded in the authentication process). This identity provided by the IDP will be used to retrieve the associated Rainbow user.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void postSamlAssertionTest() throws ApiException {
        String companyId = null;
        PostSamlAssertion body = null;
        PostSamlAssertionSuccess response = api.postSamlAssertion(companyId, body);

        // TODO: test validations
    }
    
}
