"use strict";

const moment = require("moment");
const Utils = require('./../../common/utils');
const PeerType = require('./PeerType');
/**
 * @class
 * @beta
 * @name Conversations
 * @description
 * This module is the basic module for handling conversations in Rainbow. In Rainbow, conversations are the way to get in touch with someone or something (i.e. a Rainbow contact, a external phone number, a connected thing, ...) so a conversation is the "long tail" of communication between you and someone or something else like a bubble.
 * A Rainbow conversation by default supports sending and receiving Instant Messages with a single recipient (one-to-one conversation) or with several persons (bubble). Using the FileStorage service, you can share files in conversations.
 *
 * The main methods and events proposed in that service allow to:
 *   - Create or close a Rainbow conversation (one-to-one of bubble),
 *   - Get all conversations or get a conversation by Id, bubbleID
 *   - Retrieve all information linked to that conversation,
 *
 **/
class ConversationService {

    constructor(_logger,
        _connectedUserInfo,
        _connectionInfo,
        _eventEmitter,
        _accept,
        //_endUserConversationApi,
        _s2sConversationApi) {
        this._logger = _logger;
        this._connectedUserInfo = _connectedUserInfo;
        this._connectionInfo = _connectionInfo;
        this._eventEmitter = _eventEmitter;
        this._accept = _accept;
        //this._endUserConversationApi = _endUserConversationApi;
        this._s2sConversationApi = _s2sConversationApi;
        //this._eventEmitter.on("rainbow_onreceipt", this._onReceipt.bind(this));
        this.conversations = [];
    }

    async start() {
        let that = this;
        that._logger.enter(this, "start");
        try {
            //this._eventEmitter.on("rainbow_onreceipt", this._onReceipt.bind(this));
            that.conversations = await that.getAllConversations();
            that._logger.info(that, that.conversations);
            return true;
            //resolve();
        } catch (err) {
            that._logger.exitWithError(that, "start", err);
            throw err;
        }
    }

    async stop() {
        let that = this;
        that._logger.enter(this, "stop");
        try {
            //that._eventEmitter.removeListener("rainbow_onreceipt", that._onReceipt.bind(this));
            for (aConv in that.conversations) {
                await that.deleteConversation(aConv.id);
            }
            return true;
        } catch (err) {
            that._logger.log("debug", LOG_ID + "(stop) _exiting_");
            throw err;
        }
    }

    /**
     * set a conversation chat state
     * @param {String} cvId 
     * @param {String} state the conversation state.
     * @returns {Boolean} true if chat state set or throws an exception
     */
    async setConversationChatState(cvId, state) {
        let that = this;
        that._logger.enter(this, `setConversationChatState(${cvId},${state})`);
        var cnxId = this._connectionInfo.id;
        that._logger.info(this, "setConversationChatState:cnxId", cnxId);
        await this._s2sConversationApi.conversationChatstate(cnxId, cvId, state).then(function() {
            that._logger.exit(that, 'setConversationChatState : chate state sent');
            return true;
        }, function(error) {
            throw error;
        });
    }

    /**
     * Creates conversation givven a connection ID, a peer type ( bot,user, buble) and a peer ID
     * @param {String} peerType 
     * @param {String} peerId 
     * @returns {*} an array of conversation object in json format
     */
    async createConversation(peerType, peerId) {
        let conversation = S2SApi.ConversationCreateConversation.constructFromObject({ type: peerType, peer: peerId });
        var opts = {
            'conversationCreate': new S2SApi.ConversationCreate() // ConversationCreate | Conversation data
        };
        opts.ConversationCreate.conversation = conversation;
        let that = this;
        that._logger.enter(this, `createConversation(${peerType},${peerId})`);
        var cnxId = this._connectionInfo.id;
        that._logger.info(this, "createConversation:cnxId", cnxId);
        //return new Promise((resolve, reject) => {
        await that._s2sConversationApi.conversationCreate(cnxId, opts).then((data) => {
            that.logger.info(that, 'API called successfully. Returned data: ' + data);
            return data;
        }, (error) => {
            that._logger.exitWithError(that, 'createConversation :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'createConversation :', error);
            throw error;
        });
        //});
    }

    /**
     * Creates a conversation with a user
     * @param {*} userId the user ID
     */
    async createUserConversation(userId) {
        return await createConversation(PeerType.USER, userId);
    }

    /**
     * Creates a conversation with a bot
     * @param {*} botId the bot Id
     */
    async createBotConversation(botId) {
        return await createConversation(PeerType.BOT, botId);
    }

    /**
     * Create a chat room conversation
     * @param {*} bubbleId the bubble Id
     */
    async createBubbleConversation(bubbleId) {
        return await createConversation(PeerType.ROOM, bubbleId);
    }

    /**
     * Deletes a conversation givven its Id
     * @param {*} convId the conversation Id
     */
    async deleteConversation(convId) {
        let that = this;
        that.logger.enter(this, `deleteConversation(${convId})`);
        var cnxId = this._connectionInfo.id;
        that._logger.info(this, "deleteConversation:cnxId", cnxId);
        //return new Promise((resolve, reject) => {
        await that._s2sConversationApi.conversationDelete(cnxId, convId).then(() => {
            return;
        }, (error) => {
            that._logger.exitWithError(that, 'deleteConversation :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'deleteConversation :', error);
            throw error;
        });
        //});
    }

    /**
     * Get all conversation for the current connexion
     * @returns a list of conversation ids
     */
    async getAllConversations() {
        let that = this;
        that._logger.enter(this, 'getAllConversations');
        var cnxId = this._connectionInfo.id;
        that._logger.info(this, "getAllConversations:cnxId", cnxId);
        await that._s2sConversationApi.conversationIndex(cnxId).then((data) => {
            that._logger.info(this, "getAllConversations:cnxId", data);
            that.conversations = data;
            return that.conversations;
        }, (error) => {
            that._logger.exitWithError(that, 'getAllConversations :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'getAllConversations :', error);
            throw error;
        });
    }

    /**
     * Get a conversation data givven its Id
     * @param {*} convId 
     */
    async getConversation(convId) {
        let that = this;
        that._logger.enter(this, `getConversation(${convId})`);
        if (that.conversations.length > 0) {
            that.conversations.map()
            var conv = that.conversations.filter(conv, { 'id': convId });
            if (conv) {
                that._logger.info(this, "getConversation: conversation found in cache", conv);
                return conv;
            }
        }
        var cnxId = this._connectionInfo.id;
        that._logger.info(this, "getConversation:cnxId", cnxId);
        await that._s2sConversationApi.conversationShow(cnxId, convId).then((data) => {
            that._logger.info(this, `getConversation(${convId})`, data);
            return data;
        }, (error) => {
            that._logger.exitWithError(that, 'getConversation :', error);
            throw error;
        }).catch((error) => {
            that._logger.exitWithError(that, 'getConversation :', error);
            throw error;
        });
    }
}

module.exports = ConversationService;