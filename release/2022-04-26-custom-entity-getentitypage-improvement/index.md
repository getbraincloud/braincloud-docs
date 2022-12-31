---
title: "Custom Entity GetEntityPage Improvement"
date: "2022-04-26"
tags: 
  - "release-history"
---

## The Challenge

Last week we became aware of a potential issue when using `GetEntityPage()` with _owned_ entities.

The issue is related to how brainCloud handles ACL permissions. As you may or may not know, all entities in brainCloud support ACL permissions - and you can set the global accessibility of an object by setting the `acl.other` permission to one of the following:

- 0 = no access
- 1 = read-only access
- 2 = read + write access

In loose terms, any object with `acl.other` != 0 is _shared with_ (or _accessible by_) all users of the app.

This has large implications when dealing with _Owned Custom Entities_ and the `GetEntityPage()` call - because by the previous default - the call would look for all entities that meet the search criteria that:

- Are _owned_ by the current user
- Are _accessible_ by the current user

_Owned_ is simple - we simply add "ownerId": <profileId\> to the query provided by the developer.

_Accessible_ is not so simple - the database must look at all of the objects that the player doesn't own, and specifically examine each objects ACL to see if `acl.other` != `0` !!! **_This is incredibly slow, and exponentially so!_** _Especially since 99.9% of the time, a developer is only looking for the entities owned by the current user!_

:::info

Note - this issue does not affect _Unowned_ Custom Entities, `Sys` calls (which ignore permissions), or the _Singleton_ API (which assumes objects must be owned by the current user). It only affects `GetEntityPage()` and `GetEntityPageOffset()`.
:::

* * *

## The Solution

To address this issue, we are changing to the default behaviour of \``GetEntityPage()` so that it no longer considers shared entities (by default) for Owned Custom Entities.

Thus, a query with the following criteria will now only return objects that are owned by the current user:
```js
{
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  }
}
```
Going forward, if an app wants to modify this default behaviour to include accessible (i.e. shared) objects that are owned by other users - they can add the new `ownedOnly: false` option. For example:

{
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  },
  {
  "options": {
    "ownedOnly": false
  }
}

:::tip

Note also that your CustomEntity should include _Custom Indexes_ that include the `acl.other` field for efficient queries where `ownedOnly: false`.
:::

* * *

## Compatibility Flag

Because this is a change to the previous brainCloud behaviour, we have introduced a new compatibility flag. When enabled, the following flag preserves the old functionality - where both objects owned and accessible by the user will be returned.

The new compatibility flag can be found in the **Design | Core App Info | Advanced Settings** page:

_\[ x \] Include shared objects in Owned Custom Entity GetEntityPage queries (warning: can be slow). Can be overwritten by specifying 'ownedOnly' in query context 'options'._

When _enabled_, the default for `ownedOnly` is `false` - and when _disabled_, the default for `ownedOnly` is `true`.

:::tip

Note that this compatibility flag, like all compatibility flags, is **automatically enabled** for _existing_ apps (for backwards compatibility), and **disabled** for _new_ apps.
:::
* * *

We believe strongly that this new-and-improved GetEntityPage behaviour is the better + safer default - and thus _highly recommend_ that all developers whose _owned queries are only expecting objects owned by the current user_ go to this compatibility flag and immediately "uncheck" it to enable the new behaviour!

_Remember - this option does not affect queries for Un-owned Custom Entities. It also does not affect Sys calls. So both of those scenarios will continue to return objects not owned by the current user - regardless of the compatibility setting._

If you have any questions - please reach out to the support team.

Cheers!
