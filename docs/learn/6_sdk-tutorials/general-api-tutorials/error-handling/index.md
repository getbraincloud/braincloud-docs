---
title: "Error Handling"
date: "2015-06-09"
---

When using brainCloud, your app will need to handle certain error conditions. There are two main types of errors that can occur while using the brainCloud client library:

1. Network errors - A network error indicates that a packet was sent to brainCloud but no response was received.
2. API call errors - A packet was sent to (and received by) brainCloud but resulted in a non-200 HTTP response

In order to effectively respond to these error conditions, developers need to implement error handlers. A list of error reason codes returned by brainCloud can be found here:

[Reason Codes Appendix](/api/appendix/reasoncodes)

Below are the specifics for implementing error handlers for the various supported brainCloud client platforms.

### Unity/C# library

All API calls have two callback delegates as parameters, one for success and one for failure:
```js
/// <summary>
/// Success callback for an API method.
/// </summary>
/// <param name="jsonResponse">The json response from the server</param>
/// <param name="cbObject">The user supplied callback object</param>
public delegate void SuccessCallback(string jsonResponse, object cbObject);

/// <summary>
/// Failure callback for an API method.
/// </summary>
/// <param name="status">The http status code</param>
/// <param name="reasonCode">The error reason code</param>
/// <param name="jsonError">The error json string</param>
/// <param name="cbObject">The user supplied callback object</param>
public delegate void FailureCallback(int status, int reasonCode, string jsonError, object cbObject)
```
For example, the AuthenticateUniversal method is defined as follows:

public void AuthenticateUniversal(string userid, string password, bool forceCreate, SuccessCallback success, FailureCallback failure);

If authentication succeeds, the success callback function will be called with the json response from brainCloud. The user-supplied callback object will also be returned (in case you need to keep track of some contextual information).

If authentication fails, the HTTP status code, a reason code, and a json response describing the error will be returned. In order to handle the error effectively, you can refer to the [Reason Code Appendix](/api/appendix/reasoncodes).

### C++ library

The C++ library has a slightly different mechanism for dealing with callbacks. Specifically, all API methods take in an "IServerCallback" pointer. This interface declares the following methods:
```js
/\*\*
\* The serverCallback() method returns server data back to the layer
\* interfacing with the BrainCloud library.
\*
\* @param serviceName - name of the requested service
\* @param serviceOperation - requested operation
\* @param jsonData - returned data from the server
\*/
virtual void serverCallback( ServiceName serviceName, ServiceOperation serviceOperation, std::string const & jsonData) = 0;

/\*\*
\* Errors are returned back to the layer which is interfacing with the
\* BrainCloud library through the serverError() callback.
\*
\* A server error might indicate a failure of the client to communicate
\* with the server after N retries.
\*
\* @param serviceName The service name being called
\* @param serviceOperation The service operation being called
\* @param statusCode The error status return code (400, 403, 500, etc)
\* @param reasonCode The brainCloud reason code (see reason codes on apidocs site)
\* @param jsonError The error json string
\*/
virtual void serverError( ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, const std::string & jsonError) = 0;
```
For example, the AuthenticateUniversal method is defined as follows:
```js
void authenticateUniversal(const char \* in\_userid, const char \* in\_password, bool in\_forceCreate, IServerCallback \* in\_callback);
```
### Java library

The Java library is similar to C++ in that there is an IServerCallback interface that can be supplied to any API call. This interface declares the following methods:
```js
public interface IServerCallback {
    /\*\*
     \* The serverCallback() method returns server data back to the layer
     \* interfacing with the BrainCloud library.
     \*
     \* @param serviceName - name of the requested service
     \* @param serviceOperation - requested operation
     \* @param jsonData - returned data from the server
     \*/
   void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData);

    /\*\*
     \* Errors are returned back to the layer which is interfacing with the
     \* BrainCloud library through the serverError() callback.
     \*
     \* A server error might indicate a failure of the client to communicate
     \* with the server after N retries.
     \*
     \* @param statusCode The error status return code (400, 403, 500, etc)
     \* @param reasonCode The brainCloud reason code (see reason codes on apidocs site)
     \* @param jsonError The error json string
     \*/
   void serverError(int statusCode, int reasonCode, String jsonError);
}
```
For example, the AuthenticateUniversal method is defined as follows:
```js
public void authenticateUniversal(String userId, String userPassword, boolean forceCreate, IServerCallback callback);
```
### Javascript library

Coming soon!

### Cloud Code

See [Cloud Code section](/api/cc) in API modules
