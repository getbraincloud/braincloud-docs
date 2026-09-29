---
title: "Email Authentication"
date: "2016-10-21"
---

brainCloud's email authentication service allows end-users to identify themselves with their email address and a unique password for the app. Developers may optionally decide to validate these email addresses via our Email Authentication service (which involves sending an email to the user with an URL that the user must click on to validate).

As of brainCloud 3.1, this feature utilizes the developer's own email service account to ensure that emails sent on behalf of the application are customizable and fully controlled by the developer. brainCloud currently supports [SendGrid](http://sendgrid.com) integration - but may add additional email providers in the future.

To being using Email Verification, first, create a SendGrid account, and configure it for use with brainCloud via the [**Design | Integrations | Manage Integrations**](https://portal.braincloudservers.com/admin/dashboard#/development/integrations-manage-integrations) section of the portal.

Once the integration is configured, the following settings can be customized for Email Verification on the [**Design | Authentication | Email Authentication**](https://portal.braincloudservers.com/admin/dashboard#/development/authentication-email) page:

- _Send Verification Email Using..._  - confirms that a verification email should be sent to the email address of the end-user when they sign up
- _Reject Unverified Email Logins_ - if selected, it means that brainCloud will not allow that user into the app until they have clicked the verification link sent in the email
- _Send Confirmation Email_ - if selected, means that brainCloud will send a response email back to the user after they have clicked the verification link. This is a good time to add a welcome message, plus it improves your email completion ratio (since it is guaranteed to work).

Click for [step-by-step instructions](/learn/portal-tutorials/email-integration-sendgrid/) on integrating brainCloud with your SendGrid account.

### Authentication Template Types

brainCloud allows you to configure the presentation of the emails to be sent to your users. There are two options:

- _Simple plain text_ - use plain text templates for the authentication emails to your users. These are the simplest to set up (since you don't need to create custom templates), but they aren't very professional looking
- _Rich Email templates_ - uses the email service's template system for formatting the emails to be sent. Much more professional looking, but of course requires additional configuration work in the email system's portal to set up

### Configuring Templates

The following substitutions are available when creating templates:

- <code>&#123;&#123;appName&#125;&#125;</code> the name of the app, as data filled in brainCloud
- <code>&#123;&#123;profileId&#125;&#125;</code> the profile id of the user
- <code>&#123;&#123;userName&#125;&#125;</code> the name of the end-user (note - not available at the beginning of account creation, so not useful for use in email verification templates)
- <code>&#123;&#123;userEmail&#125;&#125;</code> the user's email
- <code>&#123;&#123;userCountryCode&#125;&#125;</code> the user's country code, as detected from their device
- <code>&#123;&#123;userLanguage&#125;&#125;</code> the user's language, as detected from their device
- <code>&#123;&#123;webUrl&#125;&#125;</code> a web-url passed into the message. For example - for email verification or password reset
- <code>&#123;&#123;icon&#125;&#125;</code> – The player’s braincloud Icon, if any exists.
- <code>&#123;&#123;appIcon&#125;&#125;</code> - the app icon in braincloud , if any
- <code>&#123;&#123;accountCreated&#125;&#125;</code> - The date that this user’s account was created
- <code>&#123;&#123;lastLogin&#125;&#125;</code> – - time stamp of last login
- <code>&#123;&#123;loginCount&#125;&#125;</code> - Number of times this account logged in
- <code>&#123;&#123;XPLevel&#125;&#125;</code> - The braincloud XP level of this account
- <code>&#123;&#123;XPPoints&#125;&#125;</code> - The exact number of XP points for this account in braincloud.
- <code>&#123;&#123;amountSpent&#125;&#125;</code> - Amount in USD that braincloud has stored as the user’s total spent.
- <code>&#123;&#123;virtualCurrency_Yadda&#125;&#125;</code> - the amount for the given virtual currency, where Yadda is exactly equal to the Virtual Currency Name in Braincloud (case sensitive) , no spaces.
  - For example, if you have a virtual currency called “Coins”, you would use <code>&#123;&#123;virtualCurrency_Coins&#125;&#125;</code>. There can be multiple of these. eg.
    - <code>&#123;&#123;virtualCurrency_Coins&#125;&#125;</code>
    - <code>&#123;&#123;virtualCurrency_Bars&#125;&#125;</code>
    - <code>&#123;&#123;virtualCurrency_Gems&#125;&#125;</code>
- <code>&#123;&#123;homepageUrl&#125;&#125;</code> - The Homepage url, if configured in Self-service Branding
- <code>&#123;&#123;feedbackUrl&#125;&#125;</code> - The Feedback url, if configured in Self-service Branding
- <code>&#123;&#123;exitSurveyUrl&#125;&#125;</code> - The Exit Survey url, if configured in Self-service Branding
- <code>&#123;&#123;customerServiceUrl&#125;&#125;</code> - The customer service mailto/url, if configured in Self-service Branding
- <code>&#123;&#123;termsAndConditionsUrl&#125;&#125;</code> - The Terms & Conditions url, if configured in Self-service Branding
- <code>&#123;&#123;privacyUrl&#125;&#125;</code> - The Privacy Policy url, if configured in Self-service Branding
- <code>&#123;&#123;address&#125;&#125;</code> - The business address, if configured in Self-service Branding
- <code>&#123;&#123;city&#125;&#125;</code> - The business city, if configured in Self-service Branding
- <code>&#123;&#123;state&#125;&#125;</code> - The business State or Province, if configured in Self-service Branding
- <code>&#123;&#123;country&#125;&#125;</code> - The business Country, if configured in Self-service Branding
- <code>&#123;&#123;zip&#125;&#125;</code> - The business Zip or Postal Code, if configured in Self-service Branding
- <code>&#123;&#123;unSubUrl&#125;&#125;</code> - unsubscribe from all emails
