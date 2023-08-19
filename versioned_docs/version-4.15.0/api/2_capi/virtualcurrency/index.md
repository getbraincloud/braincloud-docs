# Virtual Currency
## Overview


The **VirtualCurrency Service** manages virtual currency balances for app users. 

*This service replaces the currency functions of the deprecated **Product Service**.* The currency APIs of the two services are largely the same, with the following two changes:

* For security purposes, only the get methods are callable from the client -- use *Cloud Code* for the rest
* We have cleaned up the responses a bit, removing unnecessary fields like `createdAt`, `updatedAt` and `profileId`
### API Summary

### User Currency

* [GetCurrency](/api/capi/virtualcurrency/getcurrency) - get current currency balances
* [AwardCurrency](/api/capi/virtualcurrency/awardcurrency) - call when currency is awarded. Note that 
* [ConsumeCurrency](/api/capi/virtualcurrency/consumecurrency) - call when currency is consumed
* [ResetCurrency](/api/capi/virtualcurrency/resetcurrency) - resets the users currency balances to zero
* [SysGetCurrencyTypes](/api/capi/virtualcurrency/sysgetcurrencytypes) - retrieves the virtual currency types defined for the current app

*Note that there are Parent and Peer versions of these APIs available as well.*

<DocCardList />