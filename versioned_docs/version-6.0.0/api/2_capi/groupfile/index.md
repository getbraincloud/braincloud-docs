# Group File





**Group Files** add the ability for Groups to own files, which are similar to Group Entities -- in that they are associated with, and potentially private to, a specific group.

Group files support ACL permissions are similar to Group Entities - so that access permissions can be specified according to "owner", "member" or "other".

Group Files features include:

* folder structure within a group
* ACL permissions at folder and file levels
* operations for creating, moving and deleting folders
* operations for moving, copying and deleting files
* ability to copy/move user files to group files
  
:::tip
Like user files, group files will not be migrated to downstream apps during deployment.
:::

### API Summary

#### File Management for group members
* [CheckFilenameExists](/api/capi/groupfile/checkfilenameexists) - Check if filename exists for provided path and name.
* [CheckFullpathFilenameExists](/api/capi/groupfile/checkfullpathfilenameexists) - Check if filename exists for provided full path name.
* [GetFileInfo](/api/capi/groupfile/getfileinfo) - Returns information on a file using fileId.
* [GetFileInfoSimple](/api/capi/groupfile/getfileinfosimple) - Returns information on a file using path and name.
* [GetFileList](/api/capi/groupfile/getfilelist) - Returns a list of files.
* [GetCDNUrl](/api/capi/groupfile/getcdnurl) - Return CDN url for file for clients that cannot handle redirect.
* [UpdateFileInfo](/api/capi/groupfile/updatefileinfo) - Returns information on a file using fileId.
* [CopyFile](/api/capi/groupfile/copyfile) - Copy a file.
* [MoveFile](/api/capi/groupfile/movefile) - Move a file.
* [DeleteFile](/api/capi/groupfile/deletefile) - Delete a file.
* [MoveUserToGroupFile](/api/capi/groupfile/moveusertogroupfile) - Move a file from user space to group space.

#### Bypassing ACL for System Calls
* [SysCheckFilenameExists](/api/capi/groupfile/syscheckfilenameexists) - Check if filename exists for provided path and name.
* [SysCheckFullpathFilenameExists](/api/capi/groupfile/syscheckfullpathfilenameexists) - Check if filename exists for provided full path name.
* [SysGetFileInfo](/api/capi/groupfile/sysgetfileinfo) - Returns information on a file using fileId.
* [SysGetFileInfoSimple](/api/capi/groupfile/sysgetfileinfosimple) - Returns information on a file using path and name.
* [SysGetFileList](/api/capi/groupfile/sysgetfilelist) - Returns a list of files.
* [SysGetCDNUrl](/api/capi/groupfile/sysgetcdnurl) - Return CDN url for file for clients that cannot handle redirect.
* [SysUpdateFileInfo](/api/capi/groupfile/sysupdatefileinfo) - Returns information on a file using fileId.
* [SysCopyFile](/api/capi/groupfile/syscopyfile) - Copy a file.
* [SysMoveFile](/api/capi/groupfile/sysmovefile) - Move a file.
* [SysDeleteFile](/api/capi/groupfile/sysdeletefile) - Delete a file.
* [SysMoveUserToGroupFile](/api/capi/groupfile/sysmoveusertogroupfile) - Move a file from user space to group space.

### Folder Management for System Calls
* [SysCreateFolder](/api/capi/groupfile/syscreatefolder) - Create a folder in the global file tree.
* [SysMoveFolder](/api/capi/groupfile/sysmovefolder) - Move a folder in the global file tree.
* [SysUpdateFolder](/api/capi/groupfile/sysupdatefolder) - Update a folder in the group file tree.
* [SysLookupFolder](/api/capi/groupfile/syslookupfolder) - Retrieves tree id of specified folder.
* [SysDeleteFolder](/api/capi/groupfile/sysdeletefolder) - Delete a folder.

<DocCardList />