---
title: "ValidateContactEmail script"
date: "2019-12-12"
---

## Purpose

This script gives an app a way to validate the user's contact email when registering.

## Script

Click [validateContactEmail.zip](script/validateContactEmail.zip) to download the file.

## Usage/Setup

To configure these scripts, you must:

- First, extract the zip file and import them into your app. Make sure S2S is checked since you will call this script from an external server.
- Then go to **Design | Cloud Code | WebHooks**, and link ContactEmailWebhookUrl script into a new or existing webhook. Make sure you have at least one server created from my servers, so you can call the script from an external server.

You can test calling the script using a browser, [Postman](https://www.getpostman.com/), or something similar - just to confirm that the logging is working. ([reference S2S Scripts in brainCloud](/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial6-s2s-cloud-code-scripts/))

Test SendContactEmailVerification script from **Design | Cloud Code | Cloud Code**, or call it from your app. (make sure your email integration is set up properly since this script will send email to currently logged in user at the contact email address.)

Of course, if you want to view the results of responses, go to **Monitoring| Recent Errors**:

- _change the filter to show info messages_ - enable the \[x\] checkbox by the **green "i"** and hit **\[Refresh\]**

- Click on a logline to view the details. The parameters will be displayed in the _Context_ field, which you can expand by dragging the bottom-right corner of the dialog.

_Example script of_ SendContactEmailVerification _parameters_ (note: this example using simple plain text email, so will not use the second parameter for email, but you can use any template you built with SendGrid and pass it as the second parameter to this script and make a slight change to this script to get the template)

```js
{
  "ttlmillis": 86400000,
  "sendgridtemplate": "xxx"
}
```

_Example script of_ ContactEmailWebhookUrl _parameters_

```js
{
  "parameters": {
      "email": "xxx@xxx.xxx",
      "code": "xxxx",
      "entityId": "xxxx"
  }
}
```
