# ProductManagement
## Overview




**ProductManagement** is a new service that allows devs to create/edit/delete products and prices programmatically via S2S and cloud-code.
### API Summary

### ProductManagement
* [SysGetProductList](/api/capi/productmanagement/sysgetproductlist) - Returns the list of products (summary details only) for the specified category (optional).
* [SysReadProduct](/api/capi/productmanagement/sysreadproduct) - Retrieve the full product meta-data for the specified product.
* [SysCreateProduct](/api/capi/productmanagement/syscreateproduct) - Creates a new product with the specifed values.
* [SysUpdateProduct](/api/capi/productmanagement/sysupdateproduct) - Updates an existing product with the specifed values. Pass -1 as the version to bypass version checking.
* [SysDeleteProduct](/api/capi/productmanagement/sysdeleteproduct) - Delete the product item.
* [SysAddProductPrice](/api/capi/productmanagement/sysaddproductprice) - Adds a new price to the given product item.
* [SysUpdateProductPrice](/api/capi/productmanagement/sysupdateproductprice) - Updates (replaces) a price for the given product item.
* [SysDeleteProductPrice](/api/capi/productmanagement/sysdeleteproductprice) - Deletes a price for the given product item. If the priceId being deleted is the currently active price, the defaultPriceId will be set to -1 (not-for-sale).
* [SysSetDefaultProductPrice](/api/capi/productmanagement/syssetdefaultproductprice) - Sets the default (i.e. active) price for the given product item.


<DocCardList />