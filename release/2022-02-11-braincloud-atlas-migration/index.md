---
title: "brainCloud Atlas migration - Feb 22-23, 2022"
date: "2022-02-11"
tags: 
  - "release-history"
---

Warning

tl;dr Developers will be unable to **deploy** or **import/export** application changes from **Feb 22, 2022** at **11am Eastern** until **Feb 23, 2022** at **11am Eastern**.  
  
_See remainder of announcement for additional restrictions._

## Background

On **February 22nd** and **23rd**, we will be migrating brainCloud's core database cluster from VM-hosted MongoDB instances to MongoDB's Atlas service.

This is a live migration - intended to accomplish the migration of all app and player data - with minimal service interruption.

## Player-visible Service Impacts

Depending upon the features your app uses, the following service impacts may be noticeable by your players:

- **Lobbies and Hosted Servers delays** - lobby processing and launching of hosted servers will experience some performance delays during the cut-over period. We hope to keep this period of reduced performance to ~10-20 minutes -- between the hours of **05:00** and **07:00 Eastern** on **Feb 23, 2022**.
- **Delayed Push notifications** - new push notification jobs started during the cut-over period may experience delays
- **Scheduled Jobs** - scheduled cloud code jobs may experience small delays during the initial cut-over period.
- **Stale Segments** \- The nightly **Segment Refresh** job will not run the night of **Feb 22, 2022**. This could mean that a player that newly qualifies for a segment wouldn't be considered part of it - for a segment targeted Push Notification run, for example. Note that an individual player's segments **will** still refresh when they log in -- so any Store pricing shown to players will still accurately reflect any applicable promotions.

## Temporary Restrictions

For data integrity reasons, **we cannot allow any changes to the database schema** (i.e. new/removed collections or indexes) during the migration period - so certain brainCloud features will be disabled. We also need to disable (i.e. temporarily remove) all TTL (Time To Live) indexes -- so certain objects will stick around past their normal expiry periods.

These restrictions translate to the following brainCloud limitations:

- For safety, we will also be **disabling** the ability to **Deploy** or **Import/Export** apps during the entire migration period.
- If **creating a new app** in brainCloud, the **leaderboard collection for that app will not be created** (until after the migration period)
- If introducing support for leaderboards in your app for the first time, posting scores will not be supported until after the migration
- **TTL indexes** for all core and custom collections (i.e. Custom Entities, Messages, etc.) **will be removed**. This means that some objects may stick around for up to one day later than they otherwise would
- Developers will **not** be able to create new **Custom Entity** collections.
- Developers will also **not** be able to create new **Indexes** on **Custom Entity** collections
- If Messaging is newly enabled for an app, messages cannot be sent until after the migration

Thus, the following screens in the Design Portal will be disabled during the migration period:

- **Design | Core App Info | Admin**
- **Design | Cloud Data | Custom Entities**

Also - to ease the amount of data changes to migrate, we will be disabling **Segment Processing** for the night of **Feb 22nd** only.

## Detailed Schedule

The planned schedule for the migration is as follows. Interim times are intentionally conservative. If the migration is proceeding well, some steps will happen earlier than stated here.

- Feb 22 11:00 Eastern - Start migration prep
    - Notify developers (via banner) that migration is starting
    - Disable collection creation
    - Disable the **Admin Tools** and **Custom Entities** design screens
    - Disable Segment Processing
    - Prep the source database cluster (i.e. disable balancer and remove TTL indexes)
- Feb 22 13:00 Eastern - Start bulk migration
    - The background bulk copy processes will begin
- Feb 22 22:00 Eastern - Start sync
    - The bulk migration should be complete
    - The system now goes into sync mode - syncing oplog changes in realtime between the old and new clusters. Note that it will take several hours for the new clusters to catch up to the latest changes being applied to the old clusters
- Feb 23 04:00 Eastern - Validate data + indexes
    - Validate the results of the migration. May involve rebuilding key indexes
- Feb 23 06:00 Eastern - Start cut-over
    - Cut-over the brainCloud servers from the old database to the new database.
    - Certain background processes will be scaled down during the cut-over. This will delay the processing of certain background tasks, like scheduled jobs, push notifications, etc. Those jobs will be processed once the servers spin back up on the new cluster.
- Feb 23 09:00 - Finalize migration
    
    - Validate health of all processes
    - Disable sync process
    
    - Re-enable balancer and re-add TTL Indexes
- Feb 23 11:00 - Migration complete
    - Re-enable collection creation
    - Re-enable brainCloud screens
    - Re-enable Segment processing
    - Remove banner

* * *

## FAQ (Frequenty Asked Questions)

#### Why is brainCloud moving to MongoDB Atlas?

Moving to Atlas will offload the low-level server and software maintenance responsibilities from brainCloud DevOps personnel. It means less work keeping the servers secure, up-to-date and running properly - but also means that performing common operations like software upgrades, vertical and horizontal scaleouts, etc. are all handled automatically.

There are also benefits to monitoring the performance of the database -- and a recommendations engine that brainCloud is considering leveraging for future Custom Entity enhancements.

#### Will my players or developers notice any changes once the system is running on Atlas?

No.

#### Will my players or developers notice any changes during the migration to Atlas?

P_otentially. See the Player Visible Service Impacts section above._

#### What if something goes massively wrong during migration?

If the migration appears compromised in any way, we will abort. The database will remain on the existing servers - and we will reschedule the migration for a future date.

Information

If you have further questions or concerns, please reach out to brainCloud Support via the chat widget.
