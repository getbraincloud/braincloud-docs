# Identity
## Overview



The Identity APIs are used to attach additional identities to a profile – these APIs are most commonly used for apps that allow users to begin anonymously, and later encourage them to attach their Facebook ID for additional social features.

The identity APIs are organized into the following operations:

- **AttachIdentity** – attach an additional identity to the current profile.  Note, attaching an authenticated identity to an anonymous profile (i.e. a profile which previously only had an anonymous identity associated with it) – the app should be sure to use the new authenticated identity when logging in as the user in the future.  Note – there are special scenarios to consider if the new identity is already associated with another profile [for this app/game] — see below.
- **DetachIdentity** – used if the user wishes to detach an identity from a profile.
- **MergeIdentity** – used if the user wants to merge the current profile with a profile associated with a provided identity — see below for more details.

### Merging / Switching Profiles

Consider this scenario:

- John played your game on Facebook Canvas
- John decided to also try your game on iOS – and for simplicity sake, decided to skip logging in and continue as an anonymous user to get a feel for your app
- Later, John decides that he'd like to see his friends scores in the leaderboards – so he hit the button to [Connect to Facebook] from the game
- Your game dutifully calls [AttachFacebookIdentity](/api/capi/identity/attachfacebookidentity) – and gets an error because John's Facebook ID is already associated with a different profile (established via the Facebook Canvas version of the game)

At this point, you probably want to offer John two choices:

1. He can choose to switch to the other profile (which is already associated with his Facebook identity), abandoning the little bit of campaign history that he may have built up on the iOS version of the game.  If he chooses [Switch], the app should re-authenticate with <%= data.branding.productName %>, passing in the Facebook Identity and passing in a -1 for the anonymous identity (which indicates to the server that you know that this may switch profiles)
2. He can choose to merge the profiles – which is accomplished by calling [MergeFacebookIdentity](/api/capi/identity/mergefacebookidentity).  This will merge the contents of the two profiles, preserving the majority of the data of the profile with the highest XP, and aggregating any of the stats that have been set as "additive" in the Design Portal.  In addition, all virtual currency balances will be summed between the two profiles.

Finally, in an alternate version of this scenario John might have a 3rd option.  If he'd previously played the app on Android, but still connected to Facebook for it – the same general scenario would have occurred.  But John could optionally go to the Android version of the game, choose [Disconnect from Facebook] to detach his Facebook identity, and then go to the iOS game and hit [Connect to Facebook].  The result would be that his Facebook identity has moved from being associated with the Android profile to the iOS profile…  (not sure why he'd want that, but it's a valid scenario)

### API Summary

### Child Profiles:

* [SwitchToSingletonChildProfile](/api/capi/identity/switchtosingletonchildprofile)
* [SwitchToChildProfile](/api/capi/identity/switchtochildprofile)
* [SwitchToParentProfile](/api/capi/identity/switchtoparentprofile)
* [AttachParentWithIdentity](/api/capi/identity/attachparentwithidentity)
* [GetChildProfiles](/api/capi/identity/getchildprofiles)
* [DetachParent](/api/capi/identity/detachparent)

### Peer:

* [AttachPeerProfile](/api/capi/identity/attachpeerprofile)
* [DetachPeer](/api/capi/identity/detachpeer)
* [GetPeerProfiles](/api/capi/identity/getpeerprofiles)

### Cloud Code Only:

* [Attach](/api/capi/identity/attach)
* [Detach](/api/capi/identity/detach)
* [Merge](/api/capi/identity/merge)
* [SysChangeEmailIdentity](/api/capi/identity/syschangeemailidentity)


<DocCardList />