# HTTP Client




This service allows you to make HTTP requests to external third party websites.

Note that you must configure (declare) the external service via the [Cloud Code - Web Services page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-services) of the <%= data.branding.productName %> portal first.

:::info
_General – a default **accept** header is now added to all calls to improve overall compatibility. This new behaviour is disabled by the new compatibility flag – which is enabled by default for existing apps: [x] Do not add default response media type accept header for responses (can interfere with request signatures if apps are not aware)_
:::

### API Summary

### Get
* [GetResponseJson()](/api/cc/httpclient/getresponsejson) - Retrieves a Json document.
* [GetResponseText()](/api/cc/httpclient/getresponsetext) - Retrieves a Text document.

### Post
* [PostJsonResponseJson()](/api/cc/httpclient/postjsonresponsejson) - Posts a JSON document, expects a Json response.
* [PostJsonResponseText()](/api/cc/httpclient/postjsonresponsetext) - Posts a JSON document, expects a text response.
* [PostJsonOffboard()](/api/cc/httpclient/postjsonresponsetext) - Posts a JSON document in the background, without waiting for a response.
* [PostFormResponseJson()](/api/cc/httpclient/postformresponsejson) - Posts a Form encoded document, expects a Json response.
* [PostMultipartResponseJson()](/api/cc/httpclient/postmultipartresponsejson) - Posts a Form encoded document, expects a Json response.
* [PostFormResponseText()](/api/cc/httpclient/postformresponsetext) - Posts a Form encoded document, expects a Text response.
* [PostTextResponseText()](/api/cc/httpclient/posttextresponsetext) - Posts a text document, expects a Text response.
* [PostTextResponseJson()](/api/cc/httpclient/posttextresponsejson) - Posts a text document, expects a Json response.

### Put
* [PutJsonResponseJson()](/api/cc/httpclient/putjsonresponsejson) - Puts a JSON document, expects a Json response.
* [PutTextResponseText()](/api/cc/httpclient/puttextresponsetext) - Puts a text document, expects a Text response.

### Patch
* [PatchJsonResponseJson()](/api/cc/httpclient/patchjsonresponsejson) - Patches a JSON document, expects a Json response.
* [PatchTextResponseText()](/api/cc/httpclient/patchtextresponsetext) - Patches a text document, expects a Text response.

### Delete
* [DeleteJsonResponseJson()](/api/cc/httpclient/deletejsonresponsejson) - Deletes a document, passes a Json body, expects a Json response.
* [Delete()](/api/cc/httpclient/delete) - Deletes a document., expects a Text response.

### Other
* [ParseRequest()](/api/cc/httpclient/parserequest) - Makes a request to Parse Rest API.
* [HeadRequest()](/api/cc/httpclient/headrequest) - Executes a HEAD request.


<DocCardList />