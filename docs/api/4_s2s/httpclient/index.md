# HTTP Client
## Overview



This service allows you to make HTTP requests to external third party websites. Currently only JSON formatted responses are supported.

The "serviceCode" parameter in the following operations refers to the items configured in “Cloud Code/Web Services” tab of the portal.  You must configure (declare) the external service via the [Cloud Code - Web Services page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-services) of the <%= data.branding.productName %> portal first.


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

:::tip
The above listed HTTPClient APIs are available to S2S. 
For the usages of the these APIs (if they are not described at this section),
refer to <%= data.branding.productName %> Cloud Code [httpClient](/api/cc/httpclient) APIs section.
:::

<DocCardList />