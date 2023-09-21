# Reason Codes
## Overview
## Error Handling Example



Code | Description
 --- | -----------
0 | <font size="-1">NO_REASON_CODE </font><br/> No error
20200 | <font size="-1">INVALID_NOTIFICATION </font><br/> Invalid notification request
40001 | <font size="-1">INVALID_REQUEST </font><br/> Occurs if an invalid request is made to <%= data.branding.productName %> (for instance appId or secret is invalid)
40201 | <font size="-1">SWITCHING_FACEBOOK_MEMORY </font><br/> Unused (v1)
40202 | <font size="-1">MERGING_MEMORY </font><br/> Unused (v1)
40203 | <font size="-1">RECREATING_ANONYMOUS_MEMORY </font><br/> Unused (v1)
40204 | <font size="-1">MOVING_ANONYMOUS_MEMORY </font><br/> Unused (v1)
40205 | <font size="-1">LOGIN_SECURITY_ERROR </font><br/> Unused
40206 | <font size="-1">MISSING_IDENTITY_ERROR </font><br/> The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored `profileId` (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.**
40207 | <font size="-1">SWITCHING_PROFILES </font><br/> Used during authentication/profile switching to indicate that the identity provided belongs to a different profile id. Either supply the correct profile id or supply no profile id to allow the switch.
40208 | <font size="-1">MISSING_PROFILE_ERROR </font><br/> Returned during authentication when no profile id is provided, the identity isn’t already associated with a profile and forceCreate is set to false. The normal client response is to call Authenticate again with forceCreate set to true.
40209 | <font size="-1">SECURITY_ERROR </font><br/> Returned if a security exception was encountered.
40210 | <font size="-1">DOWNGRADING_TO_ANONYMOUS_ERROR </font><br/> Occurs when detaching the last non-anonymous identity from an account with confirmAnonymous set to false.
40211 | <font size="-1">DUPLICATE_IDENTITY_TYPE </font><br/> Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Facebook identity for a profile.
40212 | <font size="-1">MERGE_PROFILES </font><br/> Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Facebook account).
40213 | <font size="-1">INVALID_PROPERTY_NAME </font><br/> Unused
40214 | <font size="-1">EMAIL_NOT_VALIDATED </font><br/> If enabled in the app configuration, email validation of email style authentication requires that the email be validated. An email is sent to the user with a link to click to perform that operation.
40215 | <font size="-1">DATABASE_ERROR </font><br/> The MongoDB database returned an error. This often indicates a problem with a developer-defined key being stored in JSON. Note that MongoDB does not allow $ in keys.  It is best to avoid periods (.) in keys as well.
40216 | <font size="-1">PROPERTY_NOT_OVERRIDEABLE </font><br/>
40217 | <font size="-1">UNKNOWN_AUTH_ERROR </font><br/> An unknown error occurred during authentication
40300 | <font size="-1">UNABLE_TO_GET_FRIENDS_FROM_FACEBOOK </font><br/> Unused
40301 | <font size="-1">BAD_SIGNATURE </font><br/> The <%= data.branding.productName %> library was initialized with an incorrect secret.
40302 | <font size="-1">UNABLE_TO_VALIDATE_USER </font><br/> Occurs when unable to validate user with a 3rd party server (e.g. Facebook)
40303 | <font size="-1">USER_SESSION_EXPIRED </font><br/> The user’s session has expired. Reauthenticate.
40304 | <font size="-1">NO_SESSION </font><br/> The user’s session no longer exists.
40305 | <font size="-1">USER_SESSION_MISMATCH </font><br/> Unused (v1)
40306 | <font size="-1">OPERATION_REQUIRES_A_SESSION </font><br/> The API call requires a session. Authenticate with the server first.
40307 | <font size="-1">TOKEN_DOES_NOT_MATCH_USER </font><br/> The authentication token / password provided is invalid.
40308 | <font size="-1">MANUAL_REDIRECT </font><br/>
40309 | <font size="-1">EVENT_CAN_ONLY_SEND_TO_FRIEND_OR_SELF </font><br/> Unused (v1)
40310 | <font size="-1">NOT_FRIENDS </font><br/> An API was called that required the user and target user to be friends. They are not.
40311 | <font size="-1">VC_BALANCE_CANNOT_BE_SPECIFIED </font><br/> Unused
40312 | <font size="-1">VC_LIMIT_EXCEEDED </font><br/> Unused
40313 | <font size="-1">UNABLE_TO_GET_MY_DATA_FROM_FACEBOOK </font><br/> Unused
40314 | <font size="-1">TLS_VERSION_INVALID </font><br/> The endpoint that the client library is connecting to does not support the minimum TLS version configured for this app.
40315 | <font size="-1">INVALID_AUTHENTICATION_TYPE </font><br/> An invalid authentication type was supplied in the authentication request. See the authentication API for valid types.
40316 | <font size="-1">INVALID_APP_ID </font><br/> An invalid "appId" was provided in the authentication request. The valid "appId" for your the app can be retrieved from "App ID" field on the "Core App Info – Application IDs" tab of the portal.
40317 | <font size="-1">APPLE_TRANS_ID_ALREADY_CLAIMED </font><br/> A request was made to verify an iTunes receipt. The receipt has already been claimed.
40318 | <font size="-1">CLIENT_VERSION_NOT_SUPPORTED </font><br/> The client library being used has become obsolete. This can be solved by upgrading to a later supported version.
40319 | <font size="-1">BRAINCLOUD_VERSION_NOT_SUPPORTED </font><br/> The version of the <%= data.branding.productName %> client library used to connect is no longer supported by the <%= data.branding.productName %> server. Currently unused.
40320 | <font size="-1">PLATFORM_NOT_SUPPORTED </font><br/> The platform type ‘xxx’ has not been enabled for this app. Platform types are managed on the "Core App Information – Versioning" tab of the portal.
40321 | <font size="-1">INVALID_USER_STATISTICS_EVENT_NAME </font><br/> The user statistics event name is invalid.
40322 | <font size="-1">APP_VERSION_NOT_SUPPORTED </font><br/> The app version supplied is no longer supported because it does not meet the minimum specified in the <%= data.branding.productName %> portal.
40324 | <font size="-1">BAD_REFERENCE_DATA </font><br/> Should never occur (although signifies an issue with Quest data)
40325 | <font size="-1">MISSING_OAUTH_TOKEN </font><br/> Missing an OAUTH token (twitter api)
40326 | <font size="-1">MISSING_OAUTH_VERIFIER </font><br/> Missing an OAUTH verifier (twitter api)
40327 | <font size="-1">MISSING_OAUTH_TOKEN_SECRET </font><br/> Missing an OAUTH token secret (twitter api)
40328 | <font size="-1">MISSING_TWEET </font><br/> Missing a required tweet parameter (twitter api)
40329 | <font size="-1">FACEBOOK_PAYMENT_ID_ALREADY_PROCESSED </font><br/> A request was made to process a Facebook payment. The Facebook payment has already been processed.
40330 | <font size="-1">DISABLED_APP </font><br/> The app has been disabled via the "Core App Info – Advanced Settings" tab in the portal.
40331 | <font size="-1">MATCH_MAKING_DISABLED </font><br/> The Matchmaking feature is disabled. Enable it in the <%= data.branding.productName %> portal.
40332 | <font size="-1">UPDATE_FAILED </font><br/> An update operation failed. Used for entities, global entities, and updates on the user.
40333 | <font size="-1">INVALID_OPERATION </font><br/> The specified <%= data.branding.productName %> API does not exist.
40334 | <font size="-1">MATCH_RANGE_ERROR </font><br/> A start match was attempted a player who is outside the player rating range delta.
40335 | <font size="-1">PLAYER_IN_MATCH </font><br/> A start match was attempted with a player who is already in a match.
40336 | <font size="-1">MATCH_PLAYER_SHIELDED </font><br/> A start match was attempted with a player who has a shield.
40337 | <font size="-1">MATCH_PLAYER_MISSING </font><br/> A start match was attempted with a player who no longer exists.
40338 | <font size="-1">MATCH_PLAYER_LOGGED_IN </font><br/> A start match was attempted with a player who is online. This behaviour can be changed in the <%= data.branding.productName %> portal under Matchmaking.
40339 | <font size="-1">INVALID_ITEM_ID </font><br/> A product purchase was attempted with an invalid item id. Applies to AppWorld, GooglePlay and Steam stores.
40340 | <font size="-1">MISSING_PRICE </font><br/> A product purchase was attempted but the price for that product is missing. Applies to Steam store.
40341 | <font size="-1">MISSING_USER_INFO </font><br/> A product purchase was attempted but the user info is missing. Applies to Steam store.
40342 | <font size="-1">MISSING_STEAM_RESPONSE </font><br/> A product purchase was attempted but the steam backend response is missing. Applies to Steam store.
40343 | <font size="-1">MISSING_STEAM_TRANSACTION </font><br/> A product purchase was attempted but the steam transaction is missing. Applies to Steam store.
40344 | <font size="-1">ENTITY_VERSION_MISMATCH </font><br/> An update was made to an entity but the clientsupplied version does not match the version on the server. Refetch the object and reexecute the update call (or do not pass a version to overwrite the newer data).
40345 | <font size="-1">MISSING_RECORD </font><br/> An attempt was made to fetch an object but none was found. Used in Global Entities.
40346 | <font size="-1">INSUFFICIENT_PERMISSIONS </font><br/> An attempt was made to write to an object which the current user does not have permissions for. Used in Global Entities.
40347 | <font size="-1">INVALID_DATABASE_FIELD_NAME </font><br/> Thrown if a field name contains a reserved mongo character such as "$" or ".". Only applies to field names, not their values.
40348 | <font size="-1">RECORD_EXPIRED </font><br/> The global entity has expired and cannot be read.
40349 | <font size="-1">INVALID_WHERE </font><br/> An invalid where clause was sent to the server.
40350 | <font size="-1">S3_ERROR </font><br/> An error occurred while communicating with the S3 file server.
40351 | <font size="-1">INVALID_ATTRIBUTES </font><br/>
40352 | <font size="-1">IMPORT_MISSING_APP_DATA </font><br/>
40353 | <font size="-1">IMPORT_SCHEMA_VERSION_TOO_OLD </font><br/>
40355 | <font size="-1">IMPORT_SCHEMA_VERSION_INVALID </font><br/>
40356 | <font size="-1">USER_SESSION_LOGGED_OUT </font><br/> The session was invalidated by another login of the user.  When the maximum sessions is exceeded, <%= data.branding.productName %> always invalidates the oldest session. You can set the maximum number of concurrent sessions for a user via the Maximum Concurrent Sessions Per User setting on the Design > Core App Info > Advanced Settings page.
40357 | <font size="-1">API_HOOK_SCRIPT_ERROR </font><br/>
40358 | <font size="-1">MISSING_REQUIRED_PARAMETER </font><br/> The required parameter ‘xxx’ was null or missing.
40359 | <font size="-1">INVALID_PARAMETER_TYPE </font><br/> The data type of parameter ‘xxx’ is incorrect.
40360 | <font size="-1">INVALID_IDENTITY_TYPE </font><br/>
40361 | <font size="-1">EMAIL_SEND_ERROR </font><br/>
40362 | <font size="-1">CHILD_ENTITY_PARTIAL_UPDATE_INVALID_DATA </font><br/>
40363 | <font size="-1">MISSING_SCRIPT </font><br/>
40364 | <font size="-1">SCRIPT_SECURITY_ERROR </font><br/>
40365 | <font size="-1">SERVER_SESSION_EXPIRED </font><br/>
40366 | <font size="-1">STREAM_DOES_NOT_EXIT </font><br/>
40367 | <font size="-1">STREAM_ACCESS_ERROR </font><br/>
40368 | <font size="-1">STREAM_COMPLETE </font><br/>
40369 | <font size="-1">INVALID_STATISTIC_NAME </font><br/>
40370 | <font size="-1">INVALID_HTTP_REQUEST </font><br/>
40371 | <font size="-1">APP_LIMIT_REACHED </font><br/>
40372 | <font size="-1">APP_RUNSTATE_DISABLED </font><br/>
40373 | <font size="-1">INVALID_COMPANY_ID </font><br/>
40374 | <font size="-1">INVALID_USER_ID </font><br/>
40375 | <font size="-1">INVALID_TEMPLATE_ID </font><br/>
40376 | <font size="-1">MINIMUM_SEARCH_INPUT </font><br/>
40377 | <font size="-1">MISSING_APP_PARENT </font><br/>
40378 | <font size="-1">APP_PARENT_MISMATCH </font><br/>
40379 | <font size="-1">CHILD_USER_MISSING </font><br/>
40380 | <font size="-1">MISSING_USER_PARENT </font><br/>
40381 | <font size="-1">USER_PARENT_MISMATCH </font><br/>
40382 | <font size="-1">MISSING_USER_ID </font><br/>
40383 | <font size="-1">DECODE_CONTEXT </font><br/>
40384 | <font size="-1">INVALID_QUERY_CONTEXT </font><br/>
40385 | <font size="-1">GROUP_MEMBER_NOT_FOUND </font><br/>
40385 | <font size="-1">INVALID_AMOUNT </font><br/> User doesn't have enough currency for the consumeCurrency call to work.
40386 | <font size="-1">INVALID_SORT </font><br/>
40387 | <font size="-1">APP_NOT_FOUND </font><br/>
40388 | <font size="-1">APPS_NOT_IN_SAME_COMPANY </font><br/>
40389 | <font size="-1">IMPORT_NO_PARENT_ASSIGNED </font><br/>
40390 | <font size="-1">IMPORT_PARENT_CURRENCIES_MISMATCH </font><br/>
40391 | <font size="-1">INVALID_SUBSTITUION_ENTRY </font><br/>
40392 | <font size="-1">INVALID_TEMPLATE_STRING </font><br/>
40393 | <font size="-1">TEMPLATE_SUBSTITUTION_ERROR </font><br/>
40394 | <font size="-1">INVALID_OPPONENTS </font><br/>
40395 | <font size="-1">REDEMPTION_CODE_NOT_FOUND </font><br/>
40396 | <font size="-1">REDEMPTION_CODE_VERSION_MISMATCH </font><br/>
40397 | <font size="-1">REDEMPTION_CODE_ACTIVE </font><br/>
40398 | <font size="-1">REDEMPTION_CODE_NOT_ACTIVE </font><br/>
40399 | <font size="-1">REDEMPTION_CODE_TYPE_NOT_FOUND </font><br/>
40400 | <font size="-1">REDEMPTION_CODE_INVALID </font><br/>
40401 | <font size="-1">REDEMPTION_CODE_REDEEMED </font><br/>
40402 | <font size="-1">REDEMPTION_CODE_REDEEMED_BY_SELF </font><br/>
40403 | <font size="-1">REDEMPTION_CODE_REDEEMED_BY_OTHER </font><br/>
40404 | <font size="-1">SCRIPT_EMPTY </font><br/>
40405 | <font size="-1">ITUNES_COMMUNICATION_ERROR </font><br/>
40406 | <font size="-1">ITUNES_NO_RESPONSE </font><br/>
40407 | <font size="-1">ITUNES_RESPONSE_NOT_OK </font><br/>
40408 | <font size="-1">JSON_PARSING_ERROR </font><br/>
40409 | <font size="-1">ITUNES_NULL_RESPONSE </font><br/>
40410 | <font size="-1">ITUNES_RESPONSE_WITH_NULL_STATUS </font><br/>
40411 | <font size="-1">ITUNES_STATUS_BAD_JSON_RECEIPT </font><br/>
40412 | <font size="-1">ITUNES_STATUS_BAD_RECEIPT </font><br/>
40413 | <font size="-1">ITUNES_STATUS_RECEIPT_NOT_AUTHENTICATED </font><br/>
40414 | <font size="-1">ITUNES_STATUS_BAD_SHARED_SECRET </font><br/>
40415 | <font size="-1">ITUNES_STATUS_RECEIPT_SERVER_UNAVAILABLE </font><br/>
40416 | <font size="-1">ITUNES_RECEIPT_MISSING_ITUNES_PRODUCT_ID </font><br/>
40417 | <font size="-1">PRODUCT_NOT_FOUND_FOR_ITUNES_PRODUCT_ID </font><br/>
40418 | <font size="-1">DATA_STREAM_EVENTS_NOT_ENABLED </font><br/>
40419 | <font size="-1">INVALID_DEVICE_TOKEN </font><br/>
40420 | <font size="-1">ERROR_DELETING_DEVICE_TOKEN </font><br/>
40421 | <font size="-1">WEBPURIFY_NOT_CONFIGURED </font><br/>
40422 | <font size="-1">WEBPURIFY_EXCEPTION </font><br/>
40423 | <font size="-1">WEBPURIFY_FAILURE </font><br/>
40424 | <font size="-1">WEBPURIFY_NOT_ENABLED </font><br/>
40425 | <font size="-1">NAME_CONTAINS_PROFANITY </font><br/>
40426 | <font size="-1">NULL_SESSION </font><br/>
40427 | <font size="-1">PURCHASE_ALREADY_VERIFIED </font><br/>
40428 | <font size="-1">GOOGLE_IAP_NOT_CONFIGURED </font><br/>
40429 | <font size="-1">UPLOAD_FILE_TOO_LARGE </font><br/>
40430 | <font size="-1">FILE_ALREADY_EXISTS </font><br/>
40431 | <font size="-1">CLOUD_STORAGE_SERVICE_ERROR </font><br/>
40432 | <font size="-1">FILE_DOES_NOT_EXIST </font><br/>
40433 | <font size="-1">UPLOAD_ID_MISSING </font><br/>
40434 | <font size="-1">UPLOAD_JOB_MISSING </font><br/>
40435 | <font size="-1">UPLOAD_JOB_EXPIRED </font><br/>
40436 | <font size="-1">UPLOADER_EXCEPTION </font><br/>
40437 | <font size="-1">UPLOADER_FILESIZE_MISMATCH </font><br/>
40438 | <font size="-1">PUSH_NOTIFICATIONS_NOT_CONFIGURED </font><br/>
40439 | <font size="-1">MATCHMAKING_FILTER_SCRIPT_FAILURE </font><br/>
40440 | <font size="-1">ACCOUNT_ALREADY_EXISTS </font><br/>
40441 | <font size="-1">PROFILE_ALREADY_EXISTS </font><br/>
40442 | <font size="-1">MISSING_NOTIFICATION_BODY </font><br/>
40443 | <font size="-1">INVALID_SERVICE_CODE </font><br/>
40444 | <font size="-1">IP_ADDRESS_BLOCKED </font><br/>
40445 | <font size="-1">UNAPPROVED_SERVICE_CODE </font><br/>
40446 | <font size="-1">PROFILE_NOT_FOUND </font><br/>
40447 | <font size="-1">ENTITY_NOT_SHARED </font><br/>
40448 | <font size="-1">SELF_FRIEND </font><br/>
40449 | <font size="-1">PARSE_NOT_CONFIGURED </font><br/>
40450 | <font size="-1">PARSE_NOT_ENABLED </font><br/>
40451 | <font size="-1">PARSE_REQUEST_ERROR </font><br/>
40452 | <font size="-1">GROUP_CANNOT_ADD_OWNER </font><br/>
40453 | <font size="-1">NOT_GROUP_MEMBER </font><br/>
40454 | <font size="-1">INVALID_GROUP_ROLE </font><br/>
40455 | <font size="-1">GROUP_OWNER_DELETE </font><br/>
40456 | <font size="-1">NOT_INVITED_GROUP_MEMBER </font><br/>
40457 | <font size="-1">GROUP_IS_FULL </font><br/>
40458 | <font size="-1">GROUP_OWNER_CANNOT_LEAVE </font><br/>
40459 | <font size="-1">INVALID_INCREMENT_VALUE </font><br/>
40460 | <font size="-1">GROUP_VERSION_MISMATCH </font><br/>
40461 | <font size="-1">GROUP_ENTITY_VERSION_MISMATCH </font><br/>
40462 | <font size="-1">INVALID_GROUP_ID </font><br/>
40463 | <font size="-1">INVALID_FIELD_NAME </font><br/>
40464 | <font size="-1">UNSUPPORTED_AUTH_TYPE </font><br/>
40465 | <font size="-1">CLOUDCODE_JOB_NOT_FOUND </font><br/>
40466 | <font size="-1">CLOUDCODE_JOB_NOT_SCHEDULED </font><br/>
40467 | <font size="-1">GROUP_TYPE_NOT_FOUND </font><br/>
40468 | <font size="-1">MATCHING_GROUPS_NOT_FOUND </font><br/>
40469 | <font size="-1">GENERATE_CDN_URL_ERROR </font><br/>
40470 | <font size="-1">INVALID_PROFILE_IDS </font><br/>
40471 | <font size="-1">MAX_PROFILE_IDS_EXCEEDED </font><br/>
40472 | <font size="-1">PROFILE_ID_MISMATCH </font><br/>
40473 | <font size="-1">LEADERBOARD_DOESNOT_EXIST </font><br/>
40474 | <font size="-1">APP_LICENSING_EXCEEDED </font><br/>
40475 | <font size="-1">SENDGRID_NOT_INSTALLED </font><br/>
40476 | <font size="-1">SENDGRID_EMAIL_SEND_ERROR </font><br/>
40477 | <font size="-1">SENDGRID_NOT_ENABLED_FOR_APP </font><br/>
40478 | <font size="-1">SENDGRID_GET_TEMPLATES_ERROR </font><br/>
40479 | <font size="-1">SENDGRID_INVALID_API_KEY </font><br/>
40480 | <font size="-1">EMAIL_SERVICE_NOT_CONFIGURED </font><br/>
40481 | <font size="-1">INVALID_EMAIL_TEMPLATE_TYPE </font><br/>
40482 | <font size="-1">SENDGRID_KEY_EMPTY_OR_NULL </font><br/>
40483 | <font size="-1">BODY_TEMPLATE_CANNOT_COEXIST </font><br/>
40484 | <font size="-1">SUBSTITUTION_BODY_CANNOT_COEXIST </font><br/>
40485 | <font size="-1">INVALID_FROM_ADDRESS </font><br/>
40486 | <font size="-1">INVALID_FROM_NAME </font><br/>
40487 | <font size="-1">INVALID_REPLY_TO_ADDRESS </font><br/>
40488 | <font size="-1">INVALID_REPLY_TO_NAME </font><br/>
40489 | <font size="-1">FROM_NAME_WITHOUT_FROM_ADDRESS </font><br/>
40490 | <font size="-1">REPLY_TO_NAME_WITHOUT_REPLY_TO_ADDRESS </font><br/>
40491 | <font size="-1">CURRENCY_SECURITY_ERROR </font><br/>
40492 | <font size="-1">INVALID_PEER_CODE </font><br/>
40493 | <font size="-1">PEER_NO_LONGER_EXISTS </font><br/>
40494 | <font size="-2">CANNOT_MODIFY_TOURNAMENT_WITH_LEADERBOARD_SERVICE </font><br/>
40495 | <font size="-1">NO_TOURNAMENT_ASSOCIATED_WITH_LEADERBOARD </font><br/>
40496 | <font size="-1">TOURNAMENT_NOT_ASSOCIATED_WITH_LEADERBOARD </font><br/>
40497 | <font size="-1">PLAYER_ALREADY_TOURNAMENT_FOR_LEADERBOARD </font><br/>
40498 | <font size="-1">PLAYER_EARLY_FOR_JOINING_TOURNAMENT </font><br/>
40499 | <font size="-1">NO_LEADERBOARD_FOUND </font><br/>
40500 | <font size="-2">PLAYER_NOT_IN_TIME_RANGE_FOR_POSTSCORE_TOURNAMENT </font><br/>
40501 | <font size="-1">LEADERBOARD_ID_BAD </font><br/>
40502 | <font size="-1">SCORE_INPUT_BAD </font><br/>
40503 | <font size="-1">ROUND_STARTED_EPOCH_INPUT_BAD </font><br/>
40504 | <font size="-1">TOURNAMENT_CODE_INPUT_BAD </font><br/>
40505 | <font size="-1">PLAYER_NOT_ENROLLED_IN_TOURNAMENT </font><br/>
40506 | <font size="-1">LEADERBOARD_VERSION_ID_INVALID </font><br/>
40507 | <font size="-1">NOT_ENOUGH_BALANCE_TO_JOIN_TOURNAMENT </font><br/>
40508 | <font size="-1">PARENT_ALREADY_ATTACHED </font><br/>
40509 | <font size="-1">PEER_ALREADY_ATTACHED </font><br/>
40510 | <font size="-1">IDENTITY_NOT_ATTACHED_WITH_PARENT </font><br/>
40511 | <font size="-1">IDENTITY_NOT_ATTACHED_WITH_PEER </font><br/>
40512 | <font size="-1">LEADERBOARD_SCORE_UPDATE_ERROR </font><br/>
40513 | <font size="-1">ERROR_CLAIMING_REWARD </font><br/>
40514 | <font size="-2">NOT_ENOUGH_PARENT_BALANCE_TO_JOIN_TOURNAMENT </font><br/>
40515 | <font size="-1">NOT_ENOUGH_PEER_BALANCE_TO_JOIN_TOURNAMENT </font><br/>
40516 | <font size="-1">PLAYER_LATE_FOR_JOINING_TOURNAMENT </font><br/>
40517 | <font size="-2">VIEWING_REWARD_FOR_NON_PROCESSED_TOURNAMENTS </font><br/>
40518 | <font size="-1">NO_REWARD_ASSOCIATED_WITH_LEADERBOARD </font><br/>
40519 | <font size="-1">PROFILE_PEER_NOT_FOUND </font><br/>
40520 | <font size="-1">LEADERBOARD_IN_ACTIVE_STATE </font><br/>
40521 | <font size="-1">LEADERBOARD_IN_CALCULATING_STATE </font><br/>
40522 | <font size="-1">TOURNAMENT_RESULT_PROCESSING_FAILED </font><br/>
40523 | <font size="-1">TOURNAMENT_REWARDS_ALREADY_CLAIMED </font><br/>
40524 | <font size="-1">NO_TOURNAMENT_FOUND </font><br/>
40525 | <font size="-2">UNEXPECTED_ERROR_RANK_ZERO_AFTER_PROCESSING </font><br/>
40526 | <font size="-2">UNEXPECTED_ERROR_DELETING_TOURNAMENT_LEADERBOARD_SCORE </font><br/>
40527 | <font size="-1">INVALID_RUN_STATE </font><br/>
40528 | <font size="-1">LEADERBOARD_SCORE_DOESNOT_EXIST </font><br/>
40529 | <font size="-1">INITIAL_SCORE_NULL </font><br/>
40530 | <font size="-1">TOURNAMENT_NOTIFICATIONS_PROCESSING_FAILED</font><br/>
40531 | <font size="-1">ACL_NOT_READABLE</font><br/>
40532 | <font size="-1">INVALID_OWNER_ID</font><br/>
40533 | <font size="-1">IMPORT_MISSING_PEERS_DATA</font><br/>
40534 | <font size="-1">INVALID_CREDENTIAL </font><br/>
40535 | <font size="-1">GLOBAL_ENTITY_SECURITY_ERROR</font><br/>
40536 | <font size="-1">LEADERBOARD_SECURITY_ERROR</font><br/>
40537 | <font size="-1">NOT_A_SYSTEM_ENTITY</font><br/>
40538 | <font size="-1">CONTROLLER_ERROR</font><br/>
40539 | <font size="-1">EVENT_MISSING</font><br/>
40540 | <font size="-1">INVALID_XP_LEVEL</font><br/>
40541 | <font size="-1">INVALID_ITUNES_ID</font><br/>
40542 | <font size="-1">IMPORT_ERROR</font><br/>
40543 | <font size="-1">INVALID_ENTITY_TYPE</font><br/>
40544 | <font size="-1">FORM_ERROR</font><br/>
40545 | <font size="-1">INVALID_PARENT</font><br/>
40546 | <font size="-1">INVALID_CURRENCY</font><br/>
40547 | <font size="-1">INVALID_THRESHHOLD</font><br/>
40548 | <font size="-1">MATCH_ALREADY_EXISTS</font><br/>
40549 | <font size="-1">FRIEND_NOT_FOUND</font><br/>
40550 | <font size="-1">MATCH_NOT_FOUND</font><br/>
40551 | <font size="-1">MATCH_COMPLETE</font><br/>
40552 | <font size="-1">MATCH_NOT_STARTED</font><br/>
40553 | <font size="-1">MATCH_EXPIRED</font><br/>
40554 | <font size="-1">PLAYER_NOT_IN_MATCH</font><br/>
40555 | <font size="-1">INVALID_MATCH_VERSION</font><br/>
40556 | <font size="-1">INVALID_TURN_VERSION</font><br/>
40557 | <font size="-1">INVALID_DEVICE_TYPE</font><br/>
40558 | <font size="-1">DUPLICATE_ENTITY</font><br/>
40559 | <font size="-1">DUPLICATE_EVENT</font><br/>
40560 | <font size="-1">INVALID_LEADERBOARD_COUNT</font><br/>
40561 | <font size="-1">DUPLICATE_LEADERBOARD</font><br/>
40562 | <font size="-1">MICROSOFT_ERROR</font><br/>
40563 | <font size="-1">DUPLICATE_TOURNAMENT</font><br/>
40564 | <font size="-1">CREATE_SYSTEM_ENTITY_FAILED</font><br/>
40565 | <font size="-1">INVALID_MAX_NUM_STREAMS</font><br/>
40566 | <font size="-1">INVALID_PACKET_ID </font><br/> An invalid packetId was sent. Ensure app code is not re-initializing the <%= data.branding.productName %> Client after first use, or ensure not making breaking changes to the <%= data.branding.productName %> client code.
40567 | <font size="-1">HOOK_ERROR</font><br/>
40568 | <font size="-1">INVALID_STREAM_ID</font><br/>
40569 | <font size="-1">INVALID_SCAN_CODE</font><br/>
40570 | <font size="-1">NO_CUSTOM_ENTITY_CONFIG_FOUND</font><br/>
40571 | <font size="-1">NO_CUSTOM_ENTITY_FOUND</font><br/>
40572 | <font size="-1">CLOUD_STORAGE_ERROR</font><br/>
40573 | <font size="-1">NO_CUSTOM_FIELD_CONFIG_FOUND</font><br/>
40574 | <font size="-1">MISSING_CUSTOM_ENTITY_QUERY</font><br/>
40575 | <font size="-1">INVALID_CUSTOM_ENTITY_JSON_WHERE</font><br/>
40576 | <font size="-1">INVALID_CUSTOM_ENTITY_JSON_FIELDS</font><br/>
40577 | <font size="-1">ENTITY_ID_NOT_CONFIGURED</font><br/>
40578 | <font size="-1">UNCONFIGURED_CUSTOM_FIELD_ERROR</font><br/>
40579 | <font size="-1">INSUFFICENT_PERMISSIONS </font><br/> Entities for type ??? are not owned (DeleteEntities). Specify applicable ownerId(s) in delete criteria, or indicate acrossAllUsers true (SysDeleteEntitties).
40580 | <font size="-1">CUSTOM_ENTITY_PARTIAL_UPDATE_INVALID_DATA</font><br/>
40581 | <font size="-1">TOURNAMENT_PLAY_HAS_NOT_STARTED</font><br/>
40582 | <font size="-1">TOURNAMENT_PLAY_HAS_ENDED</font><br/>
40583 | <font size="-1">NEW_CREDENTIAL_IN_USE</font><br/>
40584 | <font size="-1">OLD_CREDENTIAL_NOT_OWNED</font><br/>
40585 | <font size="-1">CLOUD_CODE_SECURITY_ERROR</font><br/>
40586 | <font size="-1">RTT_SERVER_NOT_FOUND</font><br/>
40587 | <font size="-1">RTT_CLIENT_NOT_FOUND</font><br/>
40588 | <font size="-1">NO_RTT_SERVERS_AVAILABLE</font><br/>
40589 | <font size="-1">PROFILE_SESSION_MISMATCH</font><br/>
40590 | <font size="-1">WAITING_FOR_ON_DEMAND_TOURNAMENT_TO_START</font><br/>
40591 | <font size="-1">CDN_URLS_NOT_SUPPORTED</font><br/>
40592 | <font size="-1">CLOUD_CONTAINER_ERROR</font><br/>
40593 | <font size="-1">MESSAGING_FEATURE_NOT_CONFIGURED</font><br/>
40594 | <font size="-1">CHAT_FEATURE_NOT_CONFIGURED</font><br/>
40595 | <font size="-1">MESSAGE_NOT_FOUND</font><br/>
40596 | <font size="-1">COLLECTION_CREATE_DISABLED</font><br/>
40597 | <font size="-1">LEADERBAORD_COLLECTION_CREATE_DISABLED</font><br/>
40598 | <font size="-1">MESSAGE_VERSION_MISMATCH</font><br/>
40599 | <font size="-1">MESSAGEBOX_VERSION_MISMATCH</font><br/>
40600 | <font size="-1">MESSAGE_TOO_LARGE</font><br/>
40601 | <font size="-1">FEATURE_NOT_ENABLED</font><br/>
40603 | <font size="-1">CHANNEL_NOT_FOUND</font><br/>
40604 | <font size="-1">MALFORMED_FORM_DATA</font><br/>
40605 | <font size="-1">MISSING_LAST_PACKET_RESPONSE</font><br/>
40606 | <font size="-1">PACKET_IN_PROGRESS</font><br/>
40607 | <font size="-1">LOBBY_MEMBER_NOT_FOUND</font><br/>
40608 | <font size="-1">LOBBY_TEAM_NOT_FOUND</font><br/>
40609 | <font size="-1">LOBBY_ENTRY_QUEUE_MEMBER_NOT_FOUND</font><br/>
40610 | <font size="-1">INVALID_HEADER_APP_ID </font><br/> Ensure your appId and appSecret are valid. They should match the values on the <%= data.branding.productName %> portal, on the **Design > Core App Info > Application IDs** page. 
40611 | <font size="-1">LOBBY_TYPE_NOT_FOUND</font><br/>
40612 | <font size="-1">LOBBY_TEAM_FULL</font><br/>
40613 | <font size="-1">LOBBY_NOT_FOUND</font><br/>
40614 | <font size="-1">MESSAGE_CONTENT_INVALID_JSON</font><br/>
40615 | <font size="-1">RTT_FEATURE_NOT_CONFIGURED</font><br/>
40616 | <font size="-1">CLOUD_CODE_ONLY_METHOD</font><br/>
40617 | <font size="-1">MESSAGE_FROM_JSON_ID_MUST_BE_NULL</font><br/>
40618 | <font size="-1">MESSAGE_FROM_JSON_NAME_MANDATORY</font><br/>
40619 | <font size="-1">INVALID_LOBBY_STEP_ALIGNMENT</font><br/>
40620 | <font size="-1">INVALID_LOBBY_STEP_STRATEGY</font><br/>
40621 | <font size="-1">MESSAGING_MAX_RECIPIENTS_EXCEEDED</font><br/>
40622 | <font size="-1">LOBBY_FEATURE_NOT_CONFIGURED</font><br/>
40623 | <font size="-1">TOO_MANY_USERS_FOR_TEAM</font><br/>
40624 | <font size="-1">TOO_MANY_USERS_FOR_LOBBY_TYPE</font><br/>
40625 | <font size="-1">DIVISION_SET_DOESNOT_EXIST</font><br/>
40626 | <font size="-1">LOBBY_CONFIG_NOT_FOUND</font><br/>
40627 | <font size="-1">PRESENCE_NOT_INITIALIZED</font><br/>
40628 | <font size="-1">PRESENCE_FEATURE_NOT_CONFIGURED</font><br/>
40629 | <font size="-1">PLAYER_ALREADY_IN_ACTIVE_DIVISION_SET</font><br/>
40630 | <font size="-1">TOURNAMENT_CODE_MISSING</font><br/>
40631 | <font size="-1">ERROR_ASSIGNING_DIVISION_SET_INSTANCE</font><br/>
40632 | <font size="-1">LEADERBOARD_NOT_DIVISION_SET_INSTANCE</font><br/>
40633 | <font size="-1">DIVISION_SET_SCHEDULING_TYPE_DOES_NOT_EXIST</font><br/>
40634 | <font size="-1">PRESENCE_ACTIVITY_NOT_ENABLED</font><br/>
40635 | <font size="-1">PRESENCE_REALTIME_NOT_ENABLED</font><br/>
40636 | <font size="-1">DIVISION_SET_MAX_SIZE_REACHED</font><br/>
40637 | <font size="-1">DIVISION_SET_INFO_ERROR</font><br/>
40638 | <font size="-1">DIVISION_SET_API_MUST_BE_USED</font><br/>
40639 | <font size="-1">API_CALL_REJECTED</font><br/>
40640 | <font size="-1">LEADERBOARD_TOURNAMENT_TEMPLATE_ONLY</font><br/>
40641 | <font size="-1">INVALID_TOURNAMENT_JOB_ID</font><br/>
40642 | <font size="-1">LEADERBOARD_ROTATION_ERROR</font><br/>
40643 | <font size="-1">CLOUD_COMPUTING_ERROR</font><br/>
40644 | <font size="-1">DOCKER_ERROR</font><br/>
40645 | <font size="-1">ROOM_SERVER_HOST_NOT_FOUND</font><br/>
40646 | <font size="-1">INVALID_ATTACHMENT_DATA</font><br/>
40647 | <font size="-1">SCRIPT_PARSING_ERROR</font><br/>
40648 | <font size="-1">INVALID_LOBBY_STEP_RANGES</font><br/>
40649 | <font size="-1">LOG_IN_LOG_ERROR</font><br/>
40650 | <font size="-1">CACHE_OBJECT_TOO_LARGE</font><br/>
40651 | <font size="-1">IDENTIFY_DORMANT_USERS_FEATURE_NOT_CONFIGURED</font><br/>
40652 | <font size="-1">USER_PURGE_NOTICE_NOT_CONFIGURED</font><br/>
40653 | <font size="-1">INVALID_CX_ID</font><br/>
40654 | <font size="-1">TOO_MANY_CACHE_OBJECTS</font><br/>
40655 | <font size="-1">HOSTING_NOT_ENABLED</font><br/>
40656 | <font size="-1">UNSUPPORTED_GROUP_LEADERBOARD_OPERATION</font><br/>
40657 | <font size="-1">INVALID_PLAYER</font><br/>
40658 | <font size="-1">TOO_MANY_LISTENERS</font><br/>
40659 | <font size="-1">CREATE_FAILED</font><br/>
40660 | <font size="-1">INVALID_PARAMETER_VALUE</font><br/>
40661 | <font size="-1">ITEM_VERSION_MISMATCH</font><br/>
40662 | <font size="-1">ITEM_PUBLISH_ERROR</font><br/>
40663 | <font size="-1">ITEM_NOT_FOUND</font><br/>
40664 | <font size="-1">ITEM_NO_USES</font><br/>
40665 | <font size="-1">ITEM_CREATE_ERROR</font><br/>
40666 | <font size="-1">ITEM_COOL_DOWN</font><br/>
40667 | <font size="-1">TASK_STATE_NOT_FOUND</font><br/>
40668 | <font size="-1">ITEM_UPDATE_ERROR</font><br/>
40669 | <font size="-1">ITEM_DELETE_ERROR</font><br/>
40670 | <font size="-1">ITEM_INVALID_VALUE</font><br/>
40671 | <font size="-1">ITEM_SELL_OR_PURCHASE_REVERSAL_ERROR</font><br/>
40672 | <font size="-1">ITEM_GIFTED</font><br/>
40673 | <font size="-1">MISSING_APP_CONTEXT</font><br/>
40674 | <font size="-1">PUBLIC_KEY_IN_USE</font><br/>
40675 | <font size="-1">CUSTOM_ENTITY_NOT_FOUND</font><br/>
40676 | <font size="-1">ITEM_GIFTING_ERROR</font><br/>
40677 | <font size="-1">ITEM_NOT_AVAILABLE_ON_BLOCKCHAIN</font><br/>
40678 | <font size="-1">MISSING_BLOCKCHAIN_INTEGRATION</font><br/>
40679 | <font size="-1">MISSING_BLOCKCHAIN_USER_IDENTITY</font><br/>
40680 | <font size="-1">STACKABLE_ITEMS_NOT_PERMITTED_ON_BLOCKCHAIN</font><br/>
40681 | <font size="-1">BLOCKCHAIN_PUBLISH_IN_PROGRESS</font><br/>
40682 | <font size="-1">JWT_VERIFY_ERROR</font><br/>
40683 | <font size="-1">USER_ALREADY_EXISTS</font><br/>
40684 | <font size="-1">INVALID_EXT_AUTH_TYPE</font><br/>
40685 | <font size="-1">CUSTOM_ENTITY_INDEX_ERROR</font><br/>
40686 | <font size="-1">CUSTOM_ENTITY_UPDATE_FIELDS_ERROR</font><br/>
40687 | <font size="-1">INVALID_LOBBY_STEP_ALGOS</font><br/>
40688 | <font size="-1">INVALID_COMPOUND_RANGES</font><br/>
40689 | <font size="-1">MISSING_COMPOUND_RANGES</font><br/>
40690 | <font size="-1">MISSING_PING_DATA</font><br/>
40691 | <font size="-1">INVALID_PING_STEP_ALGO</font><br/>
40692 | <font size="-1">GROUP_NOT_FOUND</font><br/>
40693 | <font size="-1">SCRIPT_UPDATE_FAILED</font><br/>
40694 | <font size="-1">CUSTOM_ENTITY_REPLACE_ERROR</font><br/>
40695 | <font size="-1">CUSTOM_ENTITY_TYPE_IMPORT_ERROR</font><br/>
40696 | <font size="-1">CUSTOM_ENTITY_IMPORT_WARNING</font><br/>
40697 | <font size="-1">IDENTIFY_DORMANT_USERS_FOR_EXPORT_NOT_CONFIGURED</font><br/>
40698 | <font size="-1">IDENTIFY_DORMANT_USERS_FOR_EXPORT_ERROR</font><br/>
40699 | <font size="-1">SINGLETON_ENTITY_MUST_BE_OWNED </font><br/> Custom entity type ??? does not support owned custom entities. Custom entity must be owned.
40700 | <font size="-1">INVALID_STORE_ID </font><br/>
40701 | <font size="-1">METHOD_DEPRECATED </font><br/>
40702 | <font size="-1">INVALID_BILLING_PROVIDER_ID </font><br/>
40703 | <font size="-1">INVALID_STORE_DATA </font><br/>
40704 | <font size="-1">USER_FILE_MISSING </font><br/>
40705 | <font size="-1">GLOBAL_FILE_EXISTS </font><br/>
40706 | <font size="-1">INVALID_FILE_NAME </font><br/>
40707 | <font size="-1">FILE_TREE_VERSION_MISMATCH </font><br/>
40708 | <font size="-1">FILE_TREE_FOLDER_MISSING </font><br/>
40709 | <font size="-1">FOLDER_ALREADY_EXISTS </font><br/>
40710 | <font size="-1">INVALID_TREE_ID </font><br/>
40711 | <font size="-1">FILE_VERSION_MISMATCH </font><br/>
40712 | <font size="-1">INVALID_FOLDER_PATH </font><br/>
40713 | <font size="-1">FILENAME_MISMATCH </font><br/>
40714 | <font size="-1">FOLDERPATH_MISMATCH </font><br/>
40715 | <font size="-1">INVALID_CHARS_IN_STRING </font><br/>
40716 | <font size="-1">FOLDER_NOT_EMPTY </font><br/>
40717 | <font size="-1">INVALID_IMAGE_URL </font><br/>
40718 | <font size="-1">UNABLE_TO_UPDATE_PRICE </font><br/>
40719 | <font size="-1">WRONG_JOB_TYPE </font><br/>
40720 | <font size="-1">CLOUDCODE_JOB_NOT_RUNNING </font><br/>
40721 | <font size="-1">SCRIPT_HAS_DEPENDENCIES </font><br/>
40722 | <font size="-1">PEER_SERVICE_NOT_PUBLISHED </font><br/>
40723 | <font size="-1">MISSING_FOLDER_NAME </font><br/>
40724 | <font size="-1">UPLOLAD_IN_PROGRESS </font><br/>
40725 | <font size="-1">REFRESH_IN_PROGRESS </font><br/>
40726 | <font size="-1">REFRESH_INTERRUPTED </font><br/>
40727 | <font size="-1">GAMELIFT_ERROR </font><br/>
40728 | <font size="-1">GAMELIFT_LAUNCH_ERROR </font><br/>
40729 | <font size="-1">MAX_HOSTED_SERVERS_REACHED </font><br/>
40730 | <font size="-1">DUPLICATE_PACKET_ID </font><br/>
40731 | <font size="-1">FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN </font><br/>
40732 | <font size="-1">FEATURE_CONFIGURATION_FAILURE </font><br/>
40740 | <font size="-1">NO_FRIENDS_FOUND </font><br/>
40741 | <font size="-1">PRODUCT_TRANSACTION_NOT_FOUND </font><br/>
40742 | <font size="-1">ITEM_DEF_NOT_FOUND </font><br/>
40743 | <font size="-1">ITEM_DEF_HAS_DEPENDENCIES </font><br/>
40744 | <font size="-1">TRANSFER_JOB_IDLE_TIMEOUT </font><br/>
40745 | <font size="-1">GROUP_MEMBER_ACL_MORE_RESTRICTIVE_THAN_OTHER </font><br/>
40746 | <font size="-1">GROUP_MEMBER_ACL_MUST_BE_READ_WRITE_FOR_UNOWNED_ENTITY </font><br/>
40747 | <font size="-1">GROUP_MEMBER_ACL_REQUIRED </font><br/>
40748 | <font size="-1">GROUP_TYPE_MAX_MEMBERS_EXCEEDED </font><br/>
40749 | <font size="-1">GROUP_ADD_MEMBER_EXISTS_DIFF_ROLE_ATTRIBS </font><br/>
40750 | <font size="-1">REDEMPTION_IN_PROGRESS </font><br/>
40751 | <font size="-1">REDEMPTION_FAILED </font><br/>
40752 | <font size="-1">REDEMPTION_FAILED_MAX_RETRIES </font><br/>
40753 | <font size="-1">REDEMPTION_CODE_TYPE_DISABLED </font><br/>
40754 | <font size="-1">INVALID_SCAN_CODE_FOR_TYPE </font><br/>
40755 | <font size="-1">REDEMPTION_CODE_TYPE_MISMATCH </font><br/>
40756 | <font size="-1">REDEMPTION_CODE_SCRIPT_FAILURE </font><br/>
40757 | <font size="-1">REDEMPTION_OF_CUSTOM_CODE_FAILED </font><br/>
40758 | <font size="-1">REDEMPTION_CODE_NOT_IN_PROGRESS </font><br/>
40759 | <font size="-1">REDEMPTION_CODE_ATTEMPT_ERROR </font><br/>
40760 | <font size="-1">REDEMPTION_CODE_ATTEMPT_MISMATCH </font><br/>
40761 | <font size="-1">REDEMPTION_CODE_ASYNC_BAD_RESPONSE </font><br/>
40762 | <font size="-1">REDEMPTION_CODE_BY_ID_NOT_FOUND </font><br/>
40763 | <font size="-1">REDEMPTION_CODE_ATTEMPTED_BY_REDEEMED_BY_MISMATCH </font><br/>
40764 | <font size="-1">REDEMPTION_CODE_ATTEMPT_DATA_INVALID </font><br/>
40765 | <font size="-1">REDEMPTION_CODE_MAX_FAILED_EXCEEDED_FOR_USER </font><br/>
40766 | <font size="-1">REDEMPTION_CODE_BLOCKCHAIN_PROXY_ERROR </font><br/>
40767 | <font size="-1">REDEMPTION_CODE_TYPE_NOT_ASYNC </font><br/>
40768 | <font size="-1">REDEMPTION_CODE_ASYNC_PROCESSING_TIMEOUT </font><br/>
40770 | <font size="-1">DUPLICATE_DIVISION_SET_CONFIG </font><br/>
40771 | <font size="-1">DIVISION_SET_INSTANCE_LEADERBOARDS_STILL_EXIST </font><br/>
40772 | <font size="-1">SINGLETON_ALREADY_EXISTS_FOR_USER </font><br/>
40773 | <font size="-1">CUSTOM_ENTITY_INCREMENT_SINGLETON_DATA_ERROR </font><br/>
40801 | <font size="-1">REQUEST_FAILED </font><br/>
40802 | <font size="-1">RESET_QUESTS_FAILED </font><br/>
40803 | <font size="-1">RESET_ALL_QUESTS_AND_MILESTONES_FAILED </font><br/>
40804 | <font size="-1">MILESTONE_NOT_FOUND </font><br/>
40805 | <font size="-1">MILESTONE_CREATE_ERROR </font><br/>
40806 | <font size="-1">MILESTONE_UPDATE_ERROR </font><br/>
40807 | <font size="-1">MILESTONE_DELETE_ERROR </font><br/>
40808 | <font size="-1">MILESTONE_VERSION_ERROR </font><br/>
40809 | <font size="-1">QUEST_NOT_FOUND </font><br/>
40810 | <font size="-1">QUEST_CREATE_ERROR </font><br/>
40811 | <font size="-1">QUEST_UPDATE_ERROR </font><br/>
40812 | <font size="-1">QUEST_DELETE_ERROR </font><br/>
40813 | <font size="-1">QUEST_VERSION_ERROR </font><br/>
40814 | <font size="-1">QUEST_ADD_MILESTONE_ERROR </font><br/>
40815 | <font size="-1">QUEST_DELETE_MILESTONE_ERROR </font><br/>
40816 | <font size="-1">QUEST_REORDER_MILESTONES_ERROR </font><br/>
40820 | <font size="-1">PROMOTION_NOT_FOUND </font><br/>
40821 | <font size="-1">VERSION_MISMATCH </font><br/>
40822 | <font size="-1">UNSUPPORTED_CRITERIA_FOR_SHARDED_COLLECTIONS </font><br/>
40830 | <font size="-1">STEAM_ERROR </font><br/>
40840 | <font size="-1">INVALID_LEADERBOARD_TOURNAMENT_SETTING </font><br/>
40841 | <font size="-1">LEADERBOARD_EDIT_TOURNAMENT_SETTINGS_ERROR </font><br/>
40842 | <font size="-1">LEADERBOARD_SCORES_EXIST </font><br/>
40843 | <font size="-1">TOURNAMENT_SCORES_EXIST </font><br/>
40844 | <font size="-1">LEADERBOARD_DBVERSION_MISMATCH </font><br/>
40845 | <font size="-1">LEADERBOARD_API_DOES_NOT_APPLY </font><br/>
40846 | <font size="-1">LEADERBOARD_EXPIRED </font><br/>
40900 | <font size="-1">MISSING_CONFIG </font><br/>
40901 | <font size="-1">INVALID_SAML_RESP </font><br/>
40902 | <font size="-1">MISSING_PAGE_NAME </font><br/>
40903 | <font size="-1">INVALID_PAGE_NAME </font><br/>
40904 | <font size="-1">MALFORMED_RELAY_STATE </font><br/>
40905 | <font size="-1">INVALID_RESPONSE_ID </font><br/>
40906 | <font size="-1">LOGOUT_ERROR </font><br/>
40907 | <font size="-1">SCRIPT_EXISTS </font><br/>
40908 | <font size="-1">SCRIPT_DUPLICATE_EXISTS </font><br/>
40909 | <font size="-1">INVALID_UPLOAD_EXTENSION </font><br/>
40910 | <font size="-1">SCRIPT_TIMEOUT_ERROR </font><br/>
40911 | <font size="-1">SCRIPT_RHINO_ERROR </font><br/>
40912 | <font size="-1">SCRIPT_JAVA_ERROR </font><br/>
80000 | <font size="-1">LEFT_BY_CHOICE </font><br/>
80001 | <font size="-1">EVICTED </font><br/>
80002 | <font size="-1">LOST_CONNECTION </font><br/>
80100 | <font size="-1">TIMEOUT </font><br/>
80101 | <font size="-1">ROOM_READY </font><br/>
80102 | <font size="-1">ROOM_CANCELLED </font><br/>
80103 | <font size="-1">ERROR_ASSIGNING_ROOM </font><br/>
80104 | <font size="-1">ERROR_LAUNCHING_ROOM </font><br/>
80105 | <font size="-1">BY_REQUEST </font><br/>
80106 | <font size="-1">ROOM_READY_TIMEOUT </font><br/>
80107 | <font size="-1">DOCKER_ERROR </font><br/>
80108 | <font size="-1">GAMELIFT_ERROR </font><br/>
80109 | <font size="-1">NO_ROOM_SERVER_CONFIGURED </font><br/>
80200 | <font size="-1">NO_LOBBIES_FOUND </font><br/>
80201 | <font size="-1">FIND_REQUEST_CANCELLED </font><br/>
90001 | <font size="-1">CLIENT_NETWORK_ERROR_TIMEOUT </font><br/> A client side only error which indicates that the client timed out waiting for a response from <%= data.branding.productName %>.
90100 | <font size="-1">CLIENT_UPLOAD_FILE_CANCELLED </font><br/>
90101 | <font size="-1">CLIENT_UPLOAD_FILE_TIMED_OUT </font><br/>
90102 | <font size="-1">CLIENT_UPLOAD_FILE_UNKNOWN </font><br/>
90200 | <font size="-1">CLIENT_DISABLED </font><br/> A client side error which indicates that the client has been disabled due to repeated errors from a single API call. Client is disabled until application restarts.
500001 | <font size="-1">NO_TWITTER_CONSUMER_KEY </font><br/>
500002 | <font size="-1">NO_TWITTER_CONSUMER_SECRET </font><br/>
500003 | <font size="-1">INVALID_CONFIGURATION </font><br/>
500004 | <font size="-1">ERROR_GETTING_REQUEST_TOKEN </font><br/>
500005 | <font size="-1">ERROR_GETTING_ACCESS_TOKEN </font><br/>
500010 | <font size="-1">FACEBOOK_ERROR </font><br/>
500011 | <font size="-1">FACEBOOK_SECRET_MISMATCH </font><br/>
500012 | <font size="-1">FACEBOOK_AUTHENTICATION_ERROR </font><br/>
500013 | <font size="-1">FACEBOOK_APPLICATION_TOKEN_REQUEST_ERROR </font><br/>
500014 | <font size="-1">FACEBOOK_BAD_APPLICATION_TOKEN_SIGNATURE </font><br/>
550016 | <font size="-1">INVALID_AUTH_TYPE </font><br/>
550017 | <font size="-1">APIKEY_EXPIRED </font><br/>
550018 | <font size="-1">APIKEY_NOT_TEAM_SCOPE </font><br/>
550019 | <font size="-1">INVALID_API_KEY </font><br/>
550020 | <font size="-1">TEAM_ADMIN_API_DISABLED </font><br/>
550021 | <font size="-1">TEAM_ADMIN_AUTH_FAILURE </font><br/>
550022 | <font size="-1">INVALID_PASSWORD_CONTENT </font><br/>
600001 | <font size="-1">MONGO_DB_EXCEPTION</font><br/>
600002 | <font size="-1">CONCURRENT_LOCK_ERROR</font><br/>
600003 | <font size="-1">USER_EXPORT_ERROR</font><br/>
600004 | <font size="-1">POST_SCORE_ON_BEHALF_OF_ERROR</font><br/>
600005 | <font size="-1">INVALID_USER_STATUS</font><br/>
600006 | <font size="-1">SLACK_WEBHOOK_SEND_ERROR</font><br/>
600007 | <font size="-1">SLACK_NOT_ENABLED_FOR_APP</font><br/>
600008 | <font size="-1">ERROR_AQUIRING_LOBBY_LOCK</font><br/>
600009 | <font size="-1">ERROR_SETTING_NEW_LOBBY_OWNER</font><br/>
600010 | <font size="-1">ERROR_SWITCHING_TEAMS</font><br/>
600011 | <font size="-1">DEPLOY_FAILED</font><br/>
600012 | <font size="-1">IMPORT_EXPORT_TASK_IN_PROGRESS</font><br/>
60100 | <font size="-1">BUILDER_API_KEY_NOT_FOUND</font><br/>
60101 | <font size="-1">BUILDER_API_INVALID_KEY_SCOPE</font><br/>
60102 | <font size="-1">BUILDER_API_UPDATED_AT_MISMATCH</font><br/>
60103 | <font size="-1">BUILDER_API_TEAM_NAME_MISMATCH</font><br/>
60104 | <font size="-1">BUILDER_API_TEAM_HAS_APPS</font><br/>
60105 | <font size="-1">BUILDER_API_UNEXPECTED_EXCEPTION</font><br/>
60106 | <font size="-1">BUILDER_API_PARTIAL_TEAM_DELETION</font><br/>
60107 | <font size="-1">BUILDER_API_APP_DELETED</font><br/>
60108 | <font size="-1">BUILDER_API_APP_DISABLED</font><br/>
60109 | <font size="-1">BUILDER_API_APP_IS_LIVE</font><br/>
60110 | <font size="-1">BUILDER_API_APP_SUSPENDED</font><br/>
60111 | <font size="-1">BUILDER_API_CREATED_AT_MISMATCH</font><br/>
60200 | <font size="-1">PLAYSTATION_NETWORK_ERROR</font><br/>

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        // Shared reasonCode Error Handling
        switch (reasonCode) {
            case ReasonCodes.NO_SESSION: { // User session has expired, or they have no session
                /**
                 * Display a dialog informing the user to re-authenticate before
                 * performing futher actions
                 */
                break;
            }
            case ReasonCodes.PLATFORM_NOT_SUPPORTED: { // User is using an unsupported platform
                /**
                 * Inform the user that their current platform is not supported,
                 * and indicate which platforms are
                 *
                 * Note: If the platform is meant to be supported, it needs to be enabled via
                 * 'Core App Info - Platforms' on the <%= data.branding.productName %> dashboard.
                 * Otherwise, inform the user of the error
                 */
                break;
            }
            case ReasonCodes.APP_VERSION_NOT_SUPPORTED: { // User's app version is out of date
                /**
                 * Inform the user to update their app to the
                 * latest version you have supplied
                 *
                 *
                 * Note: This version number is set in the 'Core App Info - Platforms'
                 * on the <%= data.branding.productName %> dashboard
                 * And is compared locally against App Version value set in the
                 * BrainCloudSettings config
                 */
                break;
            }
            case ReasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT: { // User cannot connect to <%= data.branding.productName %>
                /**
                 * Display a connection error, and ask them if they wish to try
                 * again now or later
                 */
                break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```
</details>

