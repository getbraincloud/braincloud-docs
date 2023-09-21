# Group
## Overview



Groups are used to represent and manage a collection of <%= data.branding.productName %> users. They are most commonly used to represent Teams in apps, and Clans in games.

Groups are designed as follows:

* Groups consist of a collection of members (users)
* Groups have a name, a type, an id, and custom data
* Members are each assigned a role-based permission level: `"OWNER"`, `"ADMIN"`, or `"MEMBER"`
    * Groups have one (and only one) `"OWNER"`. The OWNER of a group can add/remove members, and delete the group
    * Groups can have multiple `"ADMIN"`s. ADMINs are like OWNERs, except that they cannot delete the group.
    * Any `"MEMBER"` can edit group data
* MEMBERs of a group can have custom `attributes` associated with them (can be used for custom application roles, etc.)
* Users can be members of more than one group
* Users can be the owner of more than one group
* Groups can also have associated Entities (i.e. `GroupEntity`)

Groups are made up of the following attributes:

Attribute | Description
--------- | -----------
groupId | ID of the group
ownerId | ProfileId of the end-user who owns the group
name | Name of the group
type | Type of group. This is a developer-defined type, that establishes some rules for the group.
members | the members of the group
pendingMembers | members who have been invited to the group, but have not yet accepted
data | json-data associated with the group
acl | controls visibility of data and members list for non-members

To create a group you must first configure a Group Type on the [Group Types page](https://portal.braincloudservers.com/admin/dashboard#/development/group-types) of the <%= data.branding.productName %> portal.



### API Summary

### Group Management

* [CreateGroup](/api/capi/group/creategroup) - create a group
* [CreateGroupWithSummaryData](/api/capi/group/creategroupwithsummarydata) - Create a group. 
* [DeleteGroup](/api/capi/group/deletegroup) - delete the specified group
* [IncrementGroupData](/api/capi/group/incrementgroupdata) - increment numeric values in the group's data
* [ReadGroup](/api/capi/group/readgroup) - read the specified group
* [ReadGroupData](/api/capi/group/readgroupdata) - read the data object of specified group
* [SetGroupOpen](/api/capi/group/setgroupopen) - set if user's can join the group
* [UpdateGroupAcl](/api/capi/group/updategroupacl) - update the acl permissions of the specified group
* [UpdateGroupName](/api/capi/group/updategroupname) - update the name of the specified group
* [UpdateGroupData](/api/capi/group/updategroupdata) - update the JSON data of the specified group
* [UpdateGroupSummaryData](/api/capi/group/updategroupsummarydata) - update a group's summary data


### Group members

* [AddGroupMember](/api/capi/group/addgroupmember) - add a member to the group
* [AutoJoinGroup](/api/capi/group/autojoingroup) - auto-joins an open group that matches the criteria
* [AutoJoinGroupMulti](/api/capi/group/autojoingroupmulti) - use when there are multiple group types to consider when auto-joining
* [CancelGroupInvitation](/api/capi/group/cancelgroupinvitation) - cancel a previously sent invitation
* [InviteGroupMember](/api/capi/group/invitegroupmember) - invite a member to the group
* [JoinGroup](/api/capi/group/joingroup) - join the specified group
* [LeaveGroup](/api/capi/group/leavegroup) - leave the specified group
* [ReadGroupMembers](/api/capi/group/readgroupmembers) - returns a list of the group's members
* [RejectGroupInvitation](/api/capi/group/rejectgroupinvitation) - reject a group invitation
* [RemoveGroupMember](/api/capi/group/removegroupmember) - remove the specified member from the group
* [UpdateGroupMember](/api/capi/group/updategroupmember) - update the group member's attributes


### Locating Groups

* [ListGroupsPage](/api/capi/group/listgroupspage) - list first page of groups that match the specified query
* [ListGroupsPageByOffset](/api/capi/group/listgroupspagebyoffset) - get next/prev page
* [ListGroupsWithMember](/api/capi/group/listgroupswithmember) - list groups that include the specified member
* [GetMyGroups](/api/capi/group/getmygroups) - return groups that the current user is a member of
* [GetRandomGroupsMatching](/api/capi/group/getrandomgroupsmatching) - gets a list of randomly selected groups from the server


### Group entities

* [CreateGroupEntity](/api/capi/group/creategroupentity) - create an entity
* [DeleteGroupEntity](/api/capi/group/deletegroupentity) - delete an entity
* [IncrementGroupEntityData](/api/capi/group/incrementgroupentitydata) - increment numeric values in the entity's data
* [ReadGroupEntitiesPage](/api/capi/group/readgroupentitiespage) - returns a list of entities that match the query
* [ReadGroupEntitiesPageByOffset](/api/capi/group/readgroupentitiespagebyoffset) - get next/prev page
* [ReadGroupEntity](/api/capi/group/readgroupentity) - reads the specified entity
* [UpdateGroupEntityData](/api/capi/group/updategroupentitydata) - updates the specified entity
* [UpdateGroupEntityAcl](/api/capi/group/updategroupentityacl) - Update the acl settings for a group entity, enforcing ownership.


### System calls

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
* [SysUpdateGroupEntityData](/api/capi/group/sysupdategroupentitydata) - update the data for a group entity
* [SysUpdateGroupMember](/api/capi/group/sysupdategroupmember) - update a member of the group
* [SysUpdateGroupName](/api/capi/group/sysupdategroupname) - update a group's name
* [SysUpdateGroupSummaryData](/api/capi/group/sysupdategroupsummarydata) - update a group's summary data
* [SysUpdateGroupEntityAcl](/api/capi/group/sysupdategroupentityacl) - Update the acl settings for a group entity, bypassing ownership/ACL checks.


<DocCardList />