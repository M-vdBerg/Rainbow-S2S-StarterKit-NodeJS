/**
 * S2S api
 * # Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes a list of API services that are provided by the OT Rainbow S2S portal. This portal is dedicated to S2S features, providing a full REST API for Rainbow features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP verbs GET, DELETE, POST, PUT, etc. are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according to the stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, e.g. “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.104.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Attachment', 'model/Connection', 'model/ConnectionCreate', 'model/ConnectionCreateConnection', 'model/ConnectionCreateResponse', 'model/Connections', 'model/Content', 'model/Conversation', 'model/ConversationCreate', 'model/ConversationCreateConversation', 'model/Conversations', 'model/DeleteAllResponse', 'model/DeleteAllResponseData', 'model/Message', 'model/MessageCreate', 'model/MessageCreateMessage', 'model/MessageCreateResponse', 'model/MessageCreateResponseData', 'model/Presence', 'model/PresenceUpdate', 'model/ReceiptStatus', 'model/RoomStatus', 'api/ConnectionApi', 'api/ConversationApi', 'api/MessageApi', 'api/PresenceApi', 'api/RoomApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Attachment'), require('./model/Connection'), require('./model/ConnectionCreate'), require('./model/ConnectionCreateConnection'), require('./model/ConnectionCreateResponse'), require('./model/Connections'), require('./model/Content'), require('./model/Conversation'), require('./model/ConversationCreate'), require('./model/ConversationCreateConversation'), require('./model/Conversations'), require('./model/DeleteAllResponse'), require('./model/DeleteAllResponseData'), require('./model/Message'), require('./model/MessageCreate'), require('./model/MessageCreateMessage'), require('./model/MessageCreateResponse'), require('./model/MessageCreateResponseData'), require('./model/Presence'), require('./model/PresenceUpdate'), require('./model/ReceiptStatus'), require('./model/RoomStatus'), require('./api/ConnectionApi'), require('./api/ConversationApi'), require('./api/MessageApi'), require('./api/PresenceApi'), require('./api/RoomApi'));
  }
}(function(ApiClient, Attachment, Connection, ConnectionCreate, ConnectionCreateConnection, ConnectionCreateResponse, Connections, Content, Conversation, ConversationCreate, ConversationCreateConversation, Conversations, DeleteAllResponse, DeleteAllResponseData, Message, MessageCreate, MessageCreateMessage, MessageCreateResponse, MessageCreateResponseData, Presence, PresenceUpdate, ReceiptStatus, RoomStatus, ConnectionApi, ConversationApi, MessageApi, PresenceApi, RoomApi) {
  'use strict';

  /**
   * _Rainbow_S2S_API_guide_Preamble_IntroductionThis_guide_describes_a_list_of_API_services_that_are_provided_by_the_OT_Rainbow_S2S_portal_This_portal_is_dedicated_to_S2S_features_providing_a_full_REST_API_for_Rainbow_features__ProtocolREST_interface_is_used_for_sendingreceiving_OT_rainbow_API_messages_HTTP_verbs_GET_DELETE_POST_PUT_etc__are_used_Standard_HTTP_responses_are_used_to_provide_requested_information_or_error_status_There_is_no_session_notion_in_OT_Rainbow_system_so_requests_could_be_issued_according_to_the_stateless_modelwithout_transport_conservation_between_them_Additional_data_could_be_provided_in_message_body_JSON_is_used_as_a_main_format_for_data_encoding_in_message_body_part_Each_request_is_started_with_the_following_pattern_moduleversion_where_module_is_a_portal_module_nameto_address_and_version_is_a_version_of_used_API_e_g__v1_0__Security_considerationsEach_request_should_contain_some_credential_information_to_authenticate_itself_Standard_HTTP_authentication_with_basicbearer_modes_is_used_JSON_Web_Token_mechanism_is_used_to_provide_authentication_information_JWT_has_a_expire_timeout_that_is_controlled_by_OT_Rainbow_portal_to_prevent_very_long_token_usage_Also_authentication_with_application_token_is_used_The_token_must_be_provided_in_the_request_HTTP_header_using_a_custom_header_APIKey_At_server_side_token_is_verified_and_if_it_doesnt_match_403_Not_Allowed_response_is_sent_TLS_is_used_as_a_transport_protocol_to_support_message_exchanges_between_OT_Rainbow_portal_and_an_application_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var S2SApi = require('index'); // See note below*.
   * var xxxSvc = new S2SApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new S2SApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new S2SApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new S2SApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.104.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment: Attachment,
    /**
     * The Connection model constructor.
     * @property {module:model/Connection}
     */
    Connection: Connection,
    /**
     * The ConnectionCreate model constructor.
     * @property {module:model/ConnectionCreate}
     */
    ConnectionCreate: ConnectionCreate,
    /**
     * The ConnectionCreateConnection model constructor.
     * @property {module:model/ConnectionCreateConnection}
     */
    ConnectionCreateConnection: ConnectionCreateConnection,
    /**
     * The ConnectionCreateResponse model constructor.
     * @property {module:model/ConnectionCreateResponse}
     */
    ConnectionCreateResponse: ConnectionCreateResponse,
    /**
     * The Connections model constructor.
     * @property {module:model/Connections}
     */
    Connections: Connections,
    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content: Content,
    /**
     * The Conversation model constructor.
     * @property {module:model/Conversation}
     */
    Conversation: Conversation,
    /**
     * The ConversationCreate model constructor.
     * @property {module:model/ConversationCreate}
     */
    ConversationCreate: ConversationCreate,
    /**
     * The ConversationCreateConversation model constructor.
     * @property {module:model/ConversationCreateConversation}
     */
    ConversationCreateConversation: ConversationCreateConversation,
    /**
     * The Conversations model constructor.
     * @property {module:model/Conversations}
     */
    Conversations: Conversations,
    /**
     * The DeleteAllResponse model constructor.
     * @property {module:model/DeleteAllResponse}
     */
    DeleteAllResponse: DeleteAllResponse,
    /**
     * The DeleteAllResponseData model constructor.
     * @property {module:model/DeleteAllResponseData}
     */
    DeleteAllResponseData: DeleteAllResponseData,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The MessageCreate model constructor.
     * @property {module:model/MessageCreate}
     */
    MessageCreate: MessageCreate,
    /**
     * The MessageCreateMessage model constructor.
     * @property {module:model/MessageCreateMessage}
     */
    MessageCreateMessage: MessageCreateMessage,
    /**
     * The MessageCreateResponse model constructor.
     * @property {module:model/MessageCreateResponse}
     */
    MessageCreateResponse: MessageCreateResponse,
    /**
     * The MessageCreateResponseData model constructor.
     * @property {module:model/MessageCreateResponseData}
     */
    MessageCreateResponseData: MessageCreateResponseData,
    /**
     * The Presence model constructor.
     * @property {module:model/Presence}
     */
    Presence: Presence,
    /**
     * The PresenceUpdate model constructor.
     * @property {module:model/PresenceUpdate}
     */
    PresenceUpdate: PresenceUpdate,
    /**
     * The ReceiptStatus model constructor.
     * @property {module:model/ReceiptStatus}
     */
    ReceiptStatus: ReceiptStatus,
    /**
     * The RoomStatus model constructor.
     * @property {module:model/RoomStatus}
     */
    RoomStatus: RoomStatus,
    /**
     * The ConnectionApi service constructor.
     * @property {module:api/ConnectionApi}
     */
    ConnectionApi: ConnectionApi,
    /**
     * The ConversationApi service constructor.
     * @property {module:api/ConversationApi}
     */
    ConversationApi: ConversationApi,
    /**
     * The MessageApi service constructor.
     * @property {module:api/MessageApi}
     */
    MessageApi: MessageApi,
    /**
     * The PresenceApi service constructor.
     * @property {module:api/PresenceApi}
     */
    PresenceApi: PresenceApi,
    /**
     * The RoomApi service constructor.
     * @property {module:api/RoomApi}
     */
    RoomApi: RoomApi
  };

  return exports;
}));
