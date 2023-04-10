# File
## Overview



The File API allows <%= data.branding.productName %> users to upload files to their individual accounts.
These files can be private to the user, or shareable (public) where anyone with the URL can access the file.

### Downloading Files

Downloading files is usually as simple as getting the file URL via the [ListUserFiles](/api/capi/file/listuserfiles) API and downloading it via whatever method you decide on the platform you are working on.  The <%= data.branding.productName %> client does not have built in support for downloading files.

:::tip
Pro-tip: There are two URLs for file downloading, <strong>downloadUrl</strong> and <strong>cdnUrl</strong>, in our file system. 
<ul>
    <li>The <em>downloadUrl</em> is a persistant URL that automatically redirects to a CDN URL (if enabled) when called</li>
    <li>The <em>cdnUrl</em> is a temporary URL that is good for downloading the file right away (in an hour from the time to generate that URL)</li>
</ul>

Apps do not have to specifically retrieve the CDN urls of files. brainCloud will automatically redirect the client to the CDN address when a download attempt is made. 
:::

### Shared Files

If the file you are downloading is shared publically (shareable = true) by the owner then there are no special steps required to download.  Simply get the file URL and download.

### Private Files

If the file you want to download is private, and therefor only accessible by the owner there is another step to successfully downloading the file.
To ensure that the person downloading the file is the owner you must append an active Session ID from the file owner to the file URL as a query parameter.

To get the session ID simply call the [<code>GetSessionId</code>](/api/capi/client/getsessionid) method of the <%= data.branding.codeClient %>.  Here is an example URL with the Session ID appended:

`https://api.braincloudservers.com/downloader/bc/g/123465/u/fe32f00f-9eda-4047-83b1-120b3398b14b/f/TestFile.dat?sessionId=l92dmkua0aqvb4egtid3fn14n7`


### API Summary

### Managing Uploads

* [UploadFile](/api/capi/file/uploadfile)
* [CancelUpload](/api/capi/file/cancelupload)

### Monitoring Uploads

* [GetUploadProgress](/api/capi/file/getuploadprogress)
* [GetUploadBytesTransferred](/api/capi/file/getuploadbytestransferred)
* [GetUploadTotalBytesToTransfer](/api/capi/file/getuploadtotalbytestotransfer)

### File Management

* [ListUserFiles](/api/capi/file/listuserfiles)
* [DeleteUserFile](/api/capi/file/deleteuserfile)
* [DeleteUserFiles](/api/capi/file/deleteuserfiles)
* [GetCDNUrl](/api/capi/file/getcdnurl)

### JavaScript Methods

* [PrepareUserUpload](/api/capi/file/prepareuserupload)
* [UploadFile](/api/capi/file/uploadfile,javascript)

### Unity Methods

* [UploadFileFromMemory](/api/capi/file/uploadfilefrommemory)

<DocCardList />