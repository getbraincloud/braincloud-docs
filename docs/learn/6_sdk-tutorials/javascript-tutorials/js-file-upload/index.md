---
title: "JS File Upload"
date: "2016-04-14"
---

## Overview

The Javascript File Upload API works a bit differently than other clients. When working within Javascript, you have access to built-in classes to handle uploading a file as well as determining the status of that upload - specifically the XMLHttpRequest object. As a result, we've geared the brainCloud upload implementation to make use of these built-in classes and methods.

## Create the Form

The first thing you'll want to set up is a form for selecting a file. Note that in this form we also include a few divs so that we can display information about the file selected as well as the progress of the upload.
```html
<form id="form1" enctype="multipart/form-data" method="post" action="Upload.aspx">
  <div class="row">
    <label for="fileToUpload">Select a File to Upload</label><br />
    <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();" />
  </div>
  <div id="fileName" />
  <div id="fileSize" />
  <div id="fileType" />
  <div class="row">
    <input type="button" onclick="uploadFile()" value="Upload" />
  </div>
  <div id="progress" />
  <div id="log" />
</form>
```
## Upload the File

Here are the functions defined to select a file and upload it. Note that fileSelected simply populates the divs defined in the form with information about the selected file. The uploadFile method creates the XMLHttpRequest object and, registers callback methods for various events. It then calls the [brainCloudClient.file.prepareFileUpload()](/api/preparefileupload/js/only) method with various details about the file being uploaded. The callback of this method will then (on success) start the upload of the file to the brainCloud server using the [brainCloudClient.file.uploadFile()](/api/uploadfile/js/only) method. and starts the upload of the file with brainCloud.
```js
function fileSelected() {
  var file = document.getElementById('fileToUpload').files\[0\];
  if (file) {
    var fileSize = 0;
    if (file.size > 1024 \* 1024)
      fileSize = (Math.round(file.size \* 100 / (1024 \* 1024)) / 100).toString() + 'MB';
    else
      fileSize = (Math.round(file.size \* 100 / 1024) / 100).toString() + 'KB';

    document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
    document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
    document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
  }
}
		
function uploadFile() {
  var xhr = new XMLHttpRequest();
  var file = document.getElementById('fileToUpload').files\[0\];
  var fileSize = file.size;
		
  // register event listeners
  xhr.upload.addEventListener("progress", uploadProgress, false);
  xhr.addEventListener("load", uploadComplete, false);
  xhr.addEventListener("error", uploadFailed, false);
  xhr.addEventListener("abort", uploadCanceled, false);

  brainCloudClient.file.prepareFileUpload(
    "path", "filename", true, true, fileSize, 
    function(result) {
      if (result.status == 200) {
        var uploadId = result.data.fileDetails.uploadId;
        brainCloudClient.file.uploadFile(xhr, file, uploadId);
      }
    }
  );
}
```
## Register Event Listeners

Here are the registered event listeners. Of interest, uploadProgress is called periodically by the XMLHttpRequest object to indicate the progress of the file upload. You can attach your progress bar to this event listener.
```js
function updateProgress(progress) {
  progress = progress >= 0 ? (progress <= 100 ? progress : 100) : 0;
  document.getElementById('progress').innerHTML = "Progress: " + progress + "%";
}
	
function uploadProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    updateProgress(percentComplete \* 100.0);
  }
  else {
    // Unable to compute progress information since the total size is unknown
  }
}
	
function uploadComplete(evt) {
  console.log("Upload complete: " + evt);
  if (this.status == 200) {
    var response = JSON.parse(this.responseText);
    console.log(JSON.stringify(response, null, 2));
  }
}
	
function uploadFailed(evt) {
  console.log("Upload failed: " + evt);
}
	
function uploadCanceled(evt) {
  console.log("Upload canceled: " + evt);
}
```