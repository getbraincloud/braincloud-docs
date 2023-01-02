---
title: "brainCloud Bombers Example Game"
date: "2015-06-23"
---

_This is a legacy tutorial for those using our UNET or Photon examples. Please find our latest tutorial_ [_here_](https://getbraincloud.com/apidocs/tutorials/unity-tutorials/braincloud-bombers-example-game/)_._

* * *

The latest version of the Bombers project can always be found [here](https://github.com/getbraincloud/UnityExamples/) on GitHub

brainCloud Bombers is a fun little game, written in **Unity**, that demonstrates how brainCloud can work together with external multiplayer tech (such as [Unity UNET](http://unity3d.com/services/multiplayer) or [Exit Games' Photon](https://www.exitgames.com/en/Realtime)) to produce real-time multiplayer game experiences.

_\[Remember - brainCloud includes everything you need for turn-based (i.e. Trivia Crack) and offline (i.e. Clash of Clans) multiplayer, but does not provide real-time (i.e. Team Fortress 2) or near real-time (i.e. Hearthstone) multiplayer support - for that, a solution like UNET or Photon is ideal.\]_

[![Unity_Web_Player___PhotonDemo](images/Unity_Web_Player___PhotonDemo-1024x715.png)](/apidocs/wp-content/uploads/2015/06/Unity_Web_Player___PhotonDemo.png)

Bombers is a fun multiplayer game with the following features:

- Game objective: Destroy the other team's fleet to win
- Two stage gameplay: Dogfight to collect bombs, then drop the bombs to destroy enemy ships
- Controls: Keyboard + mouse
- Players: Max 8 players per match
- Leaderboards: Global leaderboards
- Achievements: 3 achievements to earn
- Cloud saves: Player progression is saved as they level up

## **Play Now!**

- **[Bombers UNET version (Mac)](https://sharedprod.braincloudservers.com/s3/brainCloudExamples/unity/bombersUnet/brainCloudBombersUNET_OSX_1.0.0.zip)** - download and install to play
- **[Bombers UNET version (PC)](https://sharedprod.braincloudservers.com/s3/brainCloudExamples/unity/bombersUnet/brainCloudBombersUNET_Windows_1.0.0.zip)** - download and install to play
- **[Bombers Photon version (Web)](http://sharedprod.braincloudservers.com/s3/brainCloudExamples/unity/bombers/brainCloudBombers.html)** \- uses the Unity Web Player, so be sure to use a compatible browser!

## Full Source Available

The full source of brainCloud bombers has been made available for our developers. Feel free to use and extend it - but please replace all art for commercial efforts and be sure to use brainCloud! Good luck!

- [Read](/apidocs/tutorials/unity-tutorials/about-braincloud-bombers/) about how brainCloud bombers was written
- [View](https://github.com/getbraincloud/UnityExamples) the source (Github)
- [Build](/apidocs/tutorials/unity-tutorials/building-the-braincloud-bombers-project/) it yourself!
- [Download](https://assetstore.unity.com/packages/templates/tutorials/braincloud-bombers-for-photon-50657) it from the Unity Asset Store!

* * *

# Building Bombers

_Note – these instructions assume that you’ve already made yourself familiar with the game via the Intro and Overview postings._

To build the **Photon** version of brainCloud bombers:

- Step 1: Retrieve the source code
- Step 2: Register with brainCloud (if you haven’t already)
- Step 3: Create the brainCloud Bombers app
- Step 4: Update the brainCloud appId and secret in the source code
- Step 5: Import the brainCloud Bombers meta-data
- Step 6: Register with Photon
- Step 7: Update the Photon appid and secret
- Step 8: Build!

**_To build the UNET version of Bombers, just use UNET Step 6 and UNET Step 7._**

* * *

### Step 1: Retrieve the source code

The brainCloud Bombers source is stored on GitHub.  You can find it in the “Bombers” directory [here](https://github.com/getbraincloud/UnityExamples).

### Step 2: Register with brainCloud

Registering with brainCloud is easy and free.  Go to [getBrainCloud.com](http://getbraincloud.com/) and click **\[Sign Up\]** in the top-right-hand corner.

### Step 3: Create the brainCloud Bombers App

To create the app:

- Go to the **Administration** section of the Portal by clicking on the “Gear” icon in the top-right
- Click on the **\[+\]** button in the “Your Apps” section of the **Home** page
- Fill out the **New App** dialog – be sure to enable game features and choose the platforms to run upon.

[![New App Dialog](images/Bomber_new_app-277x300.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Bomber_new_app.png)

New App Dialog

- Go to the app by clicking on its name in the **Your Apps** list, or by choosing the **Design** tab, and then selecting it from the drop-down
- You’ll see the brainCloud App ID and App Secret on the **Core App Info | Application IDs** page….  we’ll use those in our next step.

[![Bomber_app_id](images/Bomber_app_id-1024x300.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Bomber_app_id.png)

### Step 4: Update the brainCloud appId and secret in the source code

- Load the bomber project, “PhotonDemo”, into Unity
- Choose **brainCloud | Settings** from the Unity menu bar
- Enter the _brainCloud app id_ into the _Game Id_ field
- Enter the _brainCloud secret_ into the _Game Secret_ field
- Also, hit **\[Reset to Default Server URL\]** to ensure that the client is set to connect to the proper endpoint

[![Unity_settings](images/Unity_settings-300x186.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Unity_settings.png)

### Step 5: Import the Bomber meta-data

- Back in the brainCloud portal, go to **Design | Admin Tools** for the your app
- Click the \[Import\] button in the Configuration Data section
    - Choose **\[Select Configuration File (bcconfig)\]**, and navigate to the **_Bombers/ImportData/Bombers\_<some\_date>.bcconfig_**file included with the bomber source
    - You can leave the two “Do not overwrite” options blank – they’re not used in this example
    - Click **\[Upload\]** to import the data
    - You’ll immediately note that the brainCloud Bombers icon is now associated with your project.  You’ll also see user statistics, achievements, and XP levels filled in throughout the application.

### Step 6: Register with Photon

- Go to **https://www.exitgames.com/en/PUN** to set up a free Photon account
- Once you’ve registered, click **\[Dashboard\]** to view the free app that Photon has automatically configured for you
- You’ll notice the Photon App ID – we’ll be using that in the next step

[![Photon_Setup](images/Photon_Setup-1024x411.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Photon_Setup.png)

### UNET Step 6: Register with UNET

- Go to [**https://www.unet.cloud.unity3d.com**](http://unet.cloud.unity3d.com/) to set up a free Unity Cloud account
- Once you’ve registered, click **\[Multiplayer\]** at the top left and click the \[Create Project\] button at the top right
- Type in a name, a maximum number of players per room, and accept
- Copy the **UPID** field from this page

### Step 7: Update the Photon app id

- Back in Unity, Choose **Window | Photon Unity Networking | Local Settings Asset** from the drop-down menu
- In the Inspector windows that shows, enter the Photon AppID

[![Photon_app_id_in_Unity](images/Photon_app_id_in_Unity-300x137.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Photon_app_id_in_Unity.png)

### UNET Step 7: Update the Cloud Project ID

- Back in Unity, Choose **Edit | Project Settings | Player** from the drop-down menu
- In the Inspector windows that shows, enter the you **UPID** into the **Cloud Project Id** field

### Step 8: Play the game!

- From the **Project** window, choose the **Assets** folder on the left, and then choose the Scenes subfolder
- Select the **Connect** Scene in the **Assets** folder of the project, and then click **Play!** Have fun!

[![Run_bombers](images/Run_bombers-300x142.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/Run_bombers.png)

* * *

# More about **brainCloud Bombers**

brainCloud Bombers is an example project meant to show the compatibility between brainCloud and real-time multiplayer technologies (such as Unity 5 UNET and Photon). Players create accounts, log into the game, play against other players in real-time multiplayer battles, and their stats are saved between sessions via brainCloud. The example also shows various features of brainCloud, including:

- Experience levels and ranking up
- Custom player statistics and entities
- Multiple global leaderboards
- Achievement tracking and unlocking
- Global properties
- Email authentication

Please refer to the specific individual sections for some description, overview, and functionality of each feature.  _The source for both UNET and Photon versions of brainCloud Bombers can be found [here](https://github.com/getbraincloud/UnityExamples)._

![Dash_XP_and_Stats](images/Dash_XP_and_Stats.png)

Bombers XP & Stats Dashboard

## **Experience Levels and Ranking Up**

In brainCloud Bombers, players can earn experience for destroying enemy planes in-game. Experience is awarded at the end of each match and kept track of on the brainCloud servers. Players can view their total experience on the Matchmaking menu, beneath the player’s name. brainCloud also has custom levels defined, each having an experience value and a name. Players can see their current rank (as well as its numeric value) on the Matchmaking menu, beneath the player’s name. Experience is incremented live, so brainCloud sends messages to clients when they have made it to the next rank. This is shown to the player through a dialog that appears at the end of a match.

Experience and levels can be read through the PlayerStateService in the brainCloud API. The call returns the current player’s experience level and rank name/numeric value, all of which are saved as public member variables in the BrainCloudStats class. These stats are updated live on the brainCloud server, but on the local client, they are only updated when the player visits the Matchmaking menu, reducing the number of API calls required per user.

[![](images/xp_levels.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/xp_levels.png)

Xp levels

## **Custom Player \[User\] Statistics**

Every player in brainCloud bombers has a number of custom statistics that are stored on the brainCloud servers. These statistics include the number of ships they have sunk, the number of times they have fired their weapon, their total number of wins, and more. These statistics are updated at the end of each match. Players can view their statistics on the Matchmaking menu, where they are shown on the left side, below the player’s name. These statistics were created on the brainCloud design portal, and can also be edited from the monitoring section of the portal for each user.

[![](images/UserStats.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2018/11/UserStats.png)

User Statistics

Player statistics can be read through the PlayerStatisticsService in the brainCloud API. The call returns all of the current player’s statistics, including the statistics’ name, value, and description (all defined from the brainCloud dashboard), of which only the value is saved in public member variables in the BrainCloudStats class. These stats are updated live on the brainCloud server, but on the local client, they are only updated when the player visits the Matchmaking menu, reducing the number of API calls required per user.

## **Global Leaderboards**

brainCloud Bombers has two separate global leaderboards defined, that players may view at their leisure from the Matchmaking menu. The first leaderboard keeps track of the number of enemy plane takedowns that each player has, with the least number of deaths as the tiebreaker, and the second leaderboard keeps track of the number of ship weak-points destroyed by each player, with the least number bombs dropped as the tiebreaker. Both leaderboards feature the player’s place in the leaderboard, name, their rank (and numeric value of rank), and score. brainCloud keeps tracks of all aspects of the leaderboards, and scores are updated at the end of each match.

Leaderboards can be accessed through the SocialLeaderboardService in the brainCloud API. The call returns the entire listing of a given leaderboard, or can be broken up into just the current player’s score, or individual sections of the leaderboard with variable length. The values for the currently observed leaderboard are stored as a public member variable in the BrainCloudStats class. The leaderboards are updated live on the brainCloud server, but on the local client the leaderboards are only fetched when the player wishes to see them from the Matchmaking menu, reducing the number of API calls required per user.

[![leaderboards](images/leaderboards-273x300.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/leaderboards.png)

Bomber Leaderboards

## Achievement Tracking

Three achievements have been implemented for brainCloud Bombers: destroying 50 enemy planes, sinking 10 ships, and destroying five enemy planes in a single match. brainCloud tracks whether the achievements have been unlocked or not, and can even automatically award the achievements based on player stats using Milestones. At the end of the match, bombers sends the stats updates to brainCloud, and then checks the response to see if any Achievements have been awarded.  \[Exception: note that the Quickshot achievement is handled manually by the client code in real-time during the match.\]

Achievements can be accessed through the GamificationService in the brainCloud API. The call returns all of the achievements in the system, their names, the urls for their icons, their descriptions, and whether or not the current user has unlocked any of them. The achievement data is stored in a public member variable in the BrainCloudStats class. The achievements are updated from the server when the player visits the Matchmaking menu.

[![achievements_png](images/achievements_png.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2015/06/achievements_png.png)

Bomber achievements

[![](images/Milestone-2.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2018/11/Milestone-2.png)

 1. When this condition is satisfied.   
2\. Award this achievement.

## Global Properties

brainCloud Global Properties can be used in place of constants in your games – allowing games to be tuned and/or patched on the fly without having to release new builds. A number of properties have been utilized in brainCloud Bombers, to tune such things as player fire rate, respawn time, bullet speed, player health, and more.

These properties can be read through the GlobalAppService in the brainCloud API. The call returns all of the currently saved global variables, which are then stored as public member variables in the BrainCloudStats class. To reduce API calls from the client, these values are only read once when the game is started, meaning clients will need to restart the app to get any changes, but they could be checked more often for the sake of app security or faster testing.

[![](images/GlobalProps.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2018/11/GlobalProps.png)

Global Properties

## **Email Authentication**

brainCloud Bombers requires users to sign in with an email and password, with the authentication being done through brainCloud. If a player uses an email that hasn’t been registered, an account is created for them and an authentication email is sent to the email address used. brainCloud also has the ability to _require_ email authentication before being able to log in, though this feature is turned off for brainCloud Bombers. Players may also submit a “Forgot Password” request from the login screen, prompting them to enter their email and sending a password reset link to the entered email.

User authentication is done through the BrainCloudWrapper instance, and is taken care of on the server end. The server will send a message back saying whether the authentication was successful or not, and the error that occurred if it wasn’t successful. Since brainCloud Bombers uses external servers (UNET or Photon), the player must wait until they are connected to their servers before logging in to brainCloud. This requirement is optional; the services do not depend on each other – this is done under **Design | Authentication | Email Authentication**.

[![](images/EmailAuth.png)](https://getbraincloud.com/apidocs/wp-content/uploads/2018/11/EmailAuth.png)

Email Authentication Settings

* * *

# **brainCloud Bombers App Overview**

_The source code for brainCloud Bombers can be found [here](https://github.com/getbraincloud/UnityExamples)._

brainCloud Bombers uses a mixture of scenes and state machines to achieve the flow-through for the game. Please refer to the following section for the general functionality of each of the classes. The scene and main class order is as follows:

1. Connect Scene
    1. Connect
    2. BrainCloudStats
2. Matchmaking Scene
    1. Matchmaking
3. Game Scene
    1. GameManager
    2. PlayerController
    3. WeaponController

**General Script Functionality**

- **Connect.cs**
    - Connects the user to the multiplayer server
    - Handles the email and password input for brainCloud
    - Handles error messages from the login process
    - Initializes the BrainCloudStats script after the player has logged in
- **BrainCloudStats.cs**
    - Reads a variety of information from the brainCloud server and stores it in public member variables
        - Statistics for the authenticated user
        - Experience and Level for the authenticated user
        - General information about experience levels (names, value, etc.)
        - General information about achievements (including whether the authenticated user has achieved them or not)
        - Global Properties for brainCloud Bombers
        - Social Leaderboards for brainCloud Bombers
    - Handles error messages from the brainCloud server
- **Matchmaking.cs**
    - Uses a state machine to implement functionality for a number of menus available to the player
        - GAME\_STATE\_SHOW\_ROOMS: Shows the main matchmaking menu, allowing the player to join games, create games, view the leaderboards, view the controls, view their achievements, and shows the player’s stats.
        - GAME\_STATE\_NEW\_ROOM\_OPTIONS: Shows the create new room dialogue, allowing the player to set the options for a new room, and then joining into it automatically
        - GAME\_STATE\_SHOW\_LEADERBOARDS: Displays one of the social leaderboards for brainCloud Bombers, allowing the player to switch between them, and displaying a chevron beside the player’s own entry (if one exists)
        - GAME\_STATE\_SHOW\_CONTROLS: Displays the basic controls for the game, as well as the goal and some instructions on what to do
        - GAME\_STATE\_SHOW\_ACHIEVEMENTS: Shows the available achievements for brainCloud Bombers, and tells the player whether they have achieved them or not.
    - Checks the multiplayer server for open rooms, and allows the player to join any room that is not full and within their level range.
    - Allows players to filter room results using a number of filters
- **GameManager.cs**
    - Uses a state machine to implement functionality for a number of menus available to the player
        - GAME\_STATE\_WAITING\_FOR\_PLAYERS: Shows the “Bombers Assemble” menu, showing the players connected to the game on both teams, giving players the ability to switch teams, and allowing the host to start the game prematurely before the room is full
        - GAME\_STATE\_STARTING\_GAME: Fades the screen in anticipation for the match to begin, telling players to get ready
        - GAME\_STATE\_PLAYING\_GAME: The main state, showing the players their HUD and handling a number of interactions for the actual game, including updating the local scores and tracking the time left in the match
        - GAME\_STATE\_GAME\_OVER: Shows the results screen to the players, telling them which team won and the scores for each player. The host may go back to the “Bombers Assemble” menu when they wish, and players may leave the room
    - Contains the majority of functionality for the live multiplayer, implementing a number of RPCs and controlling their effects (Photon version only)
    - Controls much of the game logic on the host side
- **PlayerController.cs**
    - Accepts inputs from the player to control their plane
    - Sends movement information to the player’s plane
    - Controls the health and death messages for the player’s plane
    - Contains the majority of  functionality for the live multiplayer, implementing a number of commands and client RPCs (UNET version only)
- **WeaponController.cs**
    - Accepts inputs from the player to control the weapons on their plane, including the main guns, bombs, and flares
    - Sends network messages through the **GameManager** to spawn projectiles of all sorts
    - Controls the bomb targeting reticule for the player
    - Controls the offscreen enemy ship indicator for the player
