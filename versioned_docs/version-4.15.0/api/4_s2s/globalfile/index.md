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


### API Summary

### System File Retrieval APIs

*Accessible via cloud-code and S2S.*

* [SysGetGlobalFileList](/api/s2s/globalfile/sysgetglobalfilelist) - list all global files at the specified `folderPath`
* [SysGetFileInfo()](/api/s2s/globalfile/sysgetfileinfo) - returns information about the specified file, given a `fileId`.
* [SysGetFileInfoSimple()](/api/s2s/globalfile/sysgetfileinfosimple) - returns information about the specified file, given a `folderPath` + `filename`.
* [SysGetGlobalCDNUrl](/api/s2s/globalfile/sysgetglobalcdnurl) - only required for clients that don't support redirection

### File Management

* [SysMoveToGlobalFile()](/api/s2s/globalfile/sysmovetoglobalfile) - migrate a file from User Files to the Global File system
* [SysCopyGlobalFile()](/api/s2s/globalfile/syscopyglobalfile) - copy a file
* [SysMoveGlobalFile()](/api/s2s/globalfile/sysmoveglobalfile) - move (or rename) a file 
* [SysDeleteGlobalFile()](/api/s2s/globalfile/sysdeleteglobalfile) - delete a file
* [SysDeleteGlobalFiles()](/api/s2s/globalfile/sysdeleteglobalfiles) - delete the contents of a directory

### Folder Management ###

* [SysLookupFolder](/api/s2s/globalfile/syslookupfolder) - lookup a folder given it's path
* [SysCreateFolder](/api/s2s/globalfile/syscreatefolder) - create a folder
* [SysMoveFolder](/api/s2s/globalfile/sysmovefolder) - move a folder
* [SysRenameFolder](/api/s2s/globalfile/sysrenamefolder) - rename a folder
* [SysDeleteFolder](/api/s2s/globalfile/sysdeletefolder) - delete a folder









<DocCardList />