/**
 * @fileoverview gRPC-Web generated client stub for message
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.message = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.message.MessageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.message.MessageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.message.GetMessageRequest,
 *   !proto.message.GetMessageResponse>}
 */
const methodDescriptor_MessageService_GetMessage = new grpc.web.MethodDescriptor(
  '/message.MessageService/GetMessage',
  grpc.web.MethodType.UNARY,
  proto.message.GetMessageRequest,
  proto.message.GetMessageResponse,
  /**
   * @param {!proto.message.GetMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.message.GetMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.message.GetMessageRequest,
 *   !proto.message.GetMessageResponse>}
 */
const methodInfo_MessageService_GetMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.message.GetMessageResponse,
  /**
   * @param {!proto.message.GetMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.message.GetMessageResponse.deserializeBinary
);


/**
 * @param {!proto.message.GetMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.message.GetMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.message.GetMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.message.MessageServiceClient.prototype.getMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/message.MessageService/GetMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessage,
      callback);
};


/**
 * @param {!proto.message.GetMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.message.GetMessageResponse>}
 *     A native promise that resolves to the response
 */
proto.message.MessageServicePromiseClient.prototype.getMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/message.MessageService/GetMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessage);
};


module.exports = proto.message;

