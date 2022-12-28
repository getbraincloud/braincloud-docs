# Group
## Overview



### API Summary

#### Group
* [SysAddGroupMember](/api/capi/group/sysaddgroupmember) - add a user as a member to the group, bypassing ownership/ACL checks. Optional parameters: role OR attributes.
* [SysChangeGroupType](/api/capi/group/syschangegrouptype) - changes the group type
* [SysCreateGroup](/api/capi/group/syscreategroup) - create a group
* [SysCreateGroupEntity](/api/capi/group/syscreategroupentity) - create an entity in the group with no owner
* [SysDeleteGroup](/api/capi/group/sysdeletegroup) - delete a group
* [SysDeleteGroupEntity](/api/capi/group/sysdeletegroupentity) - delete an entity in the group
* [SysGetRandomGroupsMatching](/api/capi/group/sysgetrandomgroupsmatching) - Gets a list of up to maxReturn randomly selected groups from the server based on the where condition, bypassing ownership/ACL checks
* [SysIncrementGroupData](/api/capi/group/sysincrementgroupdata) - partial increment of group data field items. Partial set of items incremented as specified
* [SysIncrementGroupEntityData](/api/capi/group/sysincrementgroupentitydata) - partial increment of group entity data field items. Partial set of items incremented as specified
* [SysIsGroupMember](/api/capi/group/sysisgroupmember) - Verifies if user is a group member and returns information about group member, bypassing ownership/ACL checks
* [SysListGroupsPage](/api/capi/group/syslistgroupspage) - retrieve a page of group summary information based on the specified context
* [SysListGroupsPageByOffset](/api/capi/group/syslistgroupspagebyoffset) - retrieve a page of group summary information based on the encoded context and specified page offset
* [SysReadGroup](/api/capi/group/sysreadgroup) - retrieve information about the group
* [SysReadGroupData](/api/capi/group/sysreadgroupdata) - retrieve a group's data object
* [SysReadGroupEntitiesPage](/api/capi/group/sysreadgroupentitiespage) - retrieve a page of group entity information based on the specified context
* [SysReadGroupEntitiesPageByOffset](/api/capi/group/sysreadgroupentitiespagebyoffset) - retrieve a page of group entity information based on the encoded context and specified page offset
* [SysReadGroupEntity](/api/capi/group/sysreadgroupentity) - read an entity in the group
* [SysReadGroupMembers](/api/capi/group/sysreadgroupmembers) - read all members in the group
* [SysRemoveGroupMember](/api/capi/group/sysremovegroupmember) - Remove a member from the group, bypassing group ownership/ACL checks.
* [SysSetGroupOpen](/api/capi/group/syssetgroupopen) - Set whether a group is open (true) or closed (false)
* [SysUpdateGroupAcl](/api/capi/group/sysupdategroupacl) - update a group's access conditions
* [SysUpdateGroupData](/api/capi/group/sysupdategroupdata) - update a group's data
* [SysUpdateGroupEntityAcl](/api/capi/group/sysupdategroupentityacl) - Update the acl settings for a group entity, bypassing ownership/ACL checks.
* [SysUpdateGroupEntityData](/api/capi/group/sysupdategroupentitydata) - update the data for a group entity
* [SysUpdateGroupMember](/api/capi/group/sysupdategroupmember) - update a member of the group
* [SysUpdateGroupName](/api/capi/group/sysupdategroupname) - update a group's name
* [SysUpdateGroupSummaryData](/api/capi/group/sysupdategroupsummarydata) - update a group's summary data

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S Group APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [Group](/api/capi/group) APIs.
:::

<DocCardList />