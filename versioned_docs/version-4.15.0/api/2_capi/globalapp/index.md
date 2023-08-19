# Global App
## Overview



The Global App service allows you to read the Global Properties that you have set on the
[Global Properties page](https://portal.braincloudservers.com/admin/dashboard#/development/global-properties) <%= data.branding.productName %> portal for you app.

Global Properties are used to configure the key parameters for your app that you want to be able to easily tweak server-side.

This service also provides APIs for reading the analytics counts of the app.

### API Summary

### Global Properties:

* [ReadProperties](/api/capi/globalapp/readproperties)
* [SysUpdatePropertyJson](/api/capi/globalapp/sysupdatepropertyjson)
* [SysUpdatePropertyString](/api/capi/globalapp/sysupdatepropertystring)
* [ReadSelectedProperties](/api/capi/globalapp/readselectedproperties)
* [ReadPropertiesInCategories](/api/capi/globalapp/readpropertiesincategories)
* [SysCreatePropertyString](/api/capi/globalapp/syscreatepropertystring)
* [SysCreatePropertyJson](/api/capi/globalapp/syscreatepropertyjson)

### App Counts:

* [SysGetDailyCounts](/api/capi/globalapp/sysgetdailycounts)
* [SysGetMonthlyCounts](/api/capi/globalapp/sysgetmonthlycounts)


### Other App info:

* [SysGetAppSecret](/api/capi/globalapp/sysgetappsecret)
* [SysAddLegacyFlaggedUser](/api/capi/globalapp/sysaddlegacyflaggeduser)
* [SysGetLegacyFlaggedUserData](/api/capi/globalapp/sysgetlegacyflaggeduserdata)
* [SysGetLegacyFlaggedUserDataList](/api/capi/globalapp/sysgetlegacyflaggeduserdatalist)
* [SysRemoveFromLegacyFlaggedUsers](/api/capi/globalapp/sysremovefromlegacyflaggedusers)
* [SysUpdateLegacyFlaggedUser](/api/capi/globalapp/sysupdatelegacyflaggeduser)

<DocCardList />