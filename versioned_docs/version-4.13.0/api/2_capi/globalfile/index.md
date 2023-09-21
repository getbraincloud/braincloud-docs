# Global File
## Overview





The new Global File API is used to access V3 of our Global Files Service. The V3 API brings new features to global files:

* Ability to organize files into sub-directories
* Ability to upload global files from the Client Libraries (by migrating an uploaded User File)

*Note that because these files are global to the app, this API has been designed with additional checks (in terms of treeIds, versions, etc.) for concurrency safety.*

Important notes:

* V3 files are stored separately from the legacy global files
* This API is not supported by the current Design Portal. 

To access the files uploaded into the [Custom Config | Files](https://portal.braincloudservers.com/admin/dashboard#/development/files) section of the portal, you need to use the legacy [S3 Handling](/api/capi/s3handling) service. 

:::tip
There is a new <strong>globalFileTree</strong> structure added to app-record to hold the tree structure that we will store files in. 
Note that this structure is separate from the files list itself (which will still be stored in the fileMetadata collection) and of 
course the cloud storage itself (accomplished via S3, Google Cloud Store, etc).
The <em>treeId</em> (aka globalTreeId, folder or file Id) represents the guid for folders or files in the file tree structure.
:::
### API Summary

### Client File Retrieval APIs

* [GetGlobalFileList()](/api/capi/globalfile/getglobalfilelist) - list all global files at the specified `folderPath`
* [GetFileInfo()](/api/capi/globalfile/getfileinfo) - returns information about the specified file, given a `fileId`.
* [GetFileInfoSimple()](/api/capi/globalfile/getfileinfosimple) - returns information about the specified file, given a `folderPath` + `filename`.
* [GetGlobalCDNUrl()](/api/capi/globalfile/getglobalcdnurl) - only required for clients that don't support redirection

### System File Retrieval APIs

*Accessible via cloud-code and S2S.*

* [SysGetGlobalFileList](/api/capi/globalfile/sysgetglobalfilelist) - list all global files at the specified `folderPath`
* [SysGetFileInfo()](/api/capi/globalfile/sysgetfileinfo) - returns information about the specified file, given a `fileId`.
* [SysGetFileInfoSimple()](/api/capi/globalfile/sysgetfileinfosimple) - returns information about the specified file, given a `folderPath` + `filename`.
* [SysGetGlobalCDNUrl](/api/capi/globalfile/sysgetglobalcdnurl) - only required for clients that don't support redirection

### File Management

* [SysMoveToGlobalFile()](/api/capi/globalfile/sysmovetoglobalfile) - migrate a file from User Files to the Global File system
* [SysCopyGlobalFile()](/api/capi/globalfile/syscopyglobalfile) - copy a file
* [SysMoveGlobalFile()](/api/capi/globalfile/sysmoveglobalfile) - move (or rename) a file 
* [SysDeleteGlobalFile()](/api/capi/globalfile/sysdeleteglobalfile) - delete a file
* [SysDeleteGlobalFiles()](/api/capi/globalfile/sysdeleteglobalfiles) - delete the contents of a directory

### Folder Management ###

* [SysLookupFolder](/api/capi/globalfile/syslookupfolder) - lookup a folder given it's path
* [SysCreateFolder](/api/capi/globalfile/syscreatefolder) - create a folder
* [SysMoveFolder](/api/capi/globalfile/sysmovefolder) - move a folder
* [SysRenameFolder](/api/capi/globalfile/sysrenamefolder) - rename a folder
* [SysDeleteFolder](/api/capi/globalfile/sysdeletefolder) - delete a folder









<DocCardList />