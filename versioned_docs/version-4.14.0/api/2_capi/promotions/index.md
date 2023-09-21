# Promotions
## Overview




**Promotions** is a new service that allows devs to create/edit/delete promotions programmatically via S2S and cloud-code.

*Important notes (when creating or updating a promotion):*

* Include only products that you want to CHANGE the price of in the "prices" section of the JSON
* Products whose prices are to remain UNCHANGED should not be included in "prices"
* Products to remove from availability should be encoded with a priceId of -2
### API Summary

### Promotions
* [SysGetPromotionList](/api/capi/promotions/sysgetpromotionlist) - Returns the list of configured promotions (without full details).
* [SysReadPromotion](/api/capi/promotions/sysreadpromotion) - Returns the full configuration data of the specified promotion.
* [SysCreatePromotion](/api/capi/promotions/syscreatePromotion) - Creates a new promotion. The full promotion JSON (minus the promotionId) should be provided. The full promotion JSON, including the created promotionId, will be returned as a result (similar to SysReadPromotion()).
* [SysUpdatePromotion](/api/capi/promotions/sysupdatePromotion) - Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored.
* [SysDeletePromotion](/api/capi/promotions/sysdeletePromotion) - Deletes the specified promotion from the server.
* [SysEnablePromotion](/api/capi/promotions/sysenablePromotion) - Enable/Disable a promotion. A convenience API for easily toggling a promotion on/off.


<DocCardList />