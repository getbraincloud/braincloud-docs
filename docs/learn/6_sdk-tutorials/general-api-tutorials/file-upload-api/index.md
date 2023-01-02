---
title: "File Upload API"
date: "2016-01-26"
---

The File Upload API allows brainCloud users to upload files to their individual accounts. These files can be private to the user, or shareable (public) where anyone with the URL can access the file.

### Listing the uploaded files

In order to list the uploaded files, make use of this API:

[BrainCloudFile.ListUserFiles](/api/capi/file/listuserfiles)

The API will return JSON similar to this:
```js
{
  "status": 200,
  "data": {
  "fileList": [
    {
     "updatedAt": 1452603368201,
     "uploadedAt": 1452603368201,
     "fileSize": 85470,
     "shareable": true,
     "createdAt": 1452603368201,
     "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
     "gameId": "99999",
     "path": "test2",
     "filename": "testup.dat",
     "downloadUrl": "https://sharedprod.braincloudservers.com/s3/bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/test2/testup.dat",
     "cloudLocation": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/test2/testup.dat"
    }
   ]
  }
 }
```
Notice that there is a "downloadUrl" parameter. This is the URL to download the file with one caveat: if you are downloading a private file (e.g. shareable set to false) then you need to append the sessionId to the URL as a query parameter like so:

https://url-to-get-file?sessionId=1234

You can retrieve the sessionId from the [BrainCloudClient.GetSessionId](/api/capi/client/getsessionid) method once you've authenticated with brainCloud.

### Starting an Upload

To start uploading a file use this API

[BrainCloudFile.UploadFile](/api/capi/file/uploadfile,javascript)

This method will send a request to the server to prepare for an upload. On success, the client SDK will begin to send the file. The preparation of an upload will return JSON similar to this:
```js
{
  "status": 200,
  "data": {
   "fileDetails": {
    "updatedAt": 1452616408147,
    "fileSize": 100,
    "fileType": "User",
    "expiresAt": 1452702808146,
    "shareable": true,
    "uploadId": "cf9a075c-587e-4bd1-af0b-eab1a79b958f",
    "createdAt": 1452616408147,
    "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
    "gameId": "99999",
    "path": "dir1/dir2",
    "filename": "filename",
    "replaceIfExists": true,
    "cloudPath": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename"
   }
  }
 }
```
Note the uploadId parameter. While the file is being uploaded, you will need this uploadId string in order to retrieve statistics on the upload or cancel it.

Again, this success callback only indicates that an upload is about to take place. To be notified when an upload has completed, you will need to register a handler.

### Register File Upload Callback

In order to receive notifications when file uploads complete or fail, you need to register a file upload callback handler. To register your File Upload callback see these two APIs:

[BrainCloudClient.RegisterFileUploadCallback](/api/capi/client/registerfileuploadcallback)

[BrainCloudClient.DeregisterFileUploadCallback](/api/capi/client/deregisterfileuploadcallback)

Once you've registered your FileUploadCallback handler, you will receive notifications from these two methods:

#### 1) fileUploadCompleted

Indicates a file has uploaded successfully. Parameters include:

- fileUploadId - the upload id of the file uploaded
- jsonResponse - the details of the uploaded file similar to this:
```js
{
 "status": 200,
 "data": {
  "fileList": [
    {
      "updatedAt": 1452603368201,
      "uploadedAt": null,
      "fileSize": 85470,
      "shareable": true,
      "createdAt": 1452603368201,
      "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
      "gameId": "99999",
      "path": "test2",
      "filename": "testup.dat",
      "downloadUrl": "https://sharedprod.braincloudservers.com/s3/bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/test2/testup.dat"
      "cloudLocation": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/test2/testup.dat"
     }
    ]
  }
}
```
#### 2) fileUploadFailed

Indicates a file upload has failed. Parameters include:

- fileUploadId - the upload id of the file uploaded
- statusCode - The HTTP status of the error
- reasonCode - The reason code of the error
- jsonResponse - The JSON response from the server similar to the following:
```js
{
  "status": 403,
  "reason_code": 40300,
  "status_message": "Message describing failure",
  "severity": "ERROR"
}
```
### In Progress Upload Statistics

While a file is being uploaded, you can query the BrainCloudFile API for the following information:

[BrainCloudFile.GetUploadProgress](/api/capi/file/getuploadprogress) - returns a number from 0.0 to 1.0 indicating how far along the upload is

[BrainCloudFile.GetUploadBytesTransferred](/api/capi/file/getuploadbytestransferred) - returns bytes that have been transferred

[BrainCloudFile.GetUploadTotalBytesToTransfer](/api/capi/file/getuploadtotalbytestotransfer) - returns total number of bytes to be transferred

### Cancelling an Upload

To cancel an upload in progress, you can use this BrainCloudFile API method:

[BrainCloudFile.CancelUpload](/api/capi/file/cancelupload)

When an upload is canceled, the **fileUploadFailed** callback handler will be called with:

- Http status of 900 (HTTP_CUSTOM)
- Reason code of 90100 (CLIENT_UPLOAD_FILE_CANCELLED)

### Configure Upload Timeouts

There are also several methods on the BrainCloudClient class which allow you to configure upload transfer timeouts:

[BrainCloudClient.SetUploadLowTransferRateTimeout](/api/capi/client/setuploadlowtransferratetimeout)

[BrainCloudClient.SetUploadLowTransferRateThreshold](/api/capi/client/setuploadlowtransferratethreshold)

Note that if an upload times out you will receive a **fileUploadFailed** callback with:

- Http status of 900 (HTTP_CUSTOM)
- Reason code of 90101 (CLIENT_UPLOAD_FILE_TIMED_OUT)

### Deleting an Uploaded File

To delete uploaded files you can use these two APIs:

[BrainCloudFile.DeleteUserFile](/api/capi/file/deleteuserfile) - to delete a single file

[BrainCloudFile.DeleteUserFiles](/api/capi/file/deleteuserfiles) - to delete multiple files
