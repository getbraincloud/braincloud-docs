# Mail
## Overview



The Mail service allows you to send emails though <%= data.branding.productName %> using the mail service provider you have configured on the [Manage Integrations page](https://portal.braincloudservers.com/admin/dashboard#/development/integrations-manage-integrations) of the <%= data.branding.productName %> portal.

### Advanced Parameters

Using the SendAdvancedEmail method you can specify service-specific parameters to use when sending an email.  Things like tags, categories, templates, and substitutions.
The available parameters will depend on the mail service provider you have enabled.



### SendGrid


> Example of dynamic templated SendGrid email parameters:

```json-doc
{
    "fromAddress": "email@company.com",
    "fromName": "Jane Doe",
    "replyToAddress": "optional@company.com",
    "replyToName": "Optional ReplyTo",
    "templateId": "d-www-xxx-yyy-zzz",
    "dynamicData": {
        "user": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "resetLink": "www.dummuyLink.io"
    },
    "categories": [
        "category1",
        "category2"
    ],
    "attachments": [
        {
            "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",
            "filename": "attachment.txt"
        }
    ]
}
```


Mail template formats sent into SendGrid.

Information on setting up SendGrid can be found [here](/learn/portal-tutorials/email-integration-sendgrid/).



### General Template Parameters
Parameter | Description
------------------ | -----------
fromAddress | An alternate from address.
fromName | An alternate from name.
replyToAddress | An alternate reply-to address.
replyToName | An alternate reply-to name.
templateId | The templateId of the SendGrid template to use for this message.
categories | Additional category tags for this email.
attachments | File attachments.

### Dyanmic Template Parameters
Parameter | Description
--------- | -----------
dynamicData | Dynamic email data.

### HTML/plain-text Template Parameters
Parameter | Description
--------- | -----------
useHtml | Should display email contents in html.
subject | The email subject
body | The email body

### Legacy Template Parameters
Parameter | Description
--------- | -----------
substitutions | Substitutions to use in the specified template. Only valid if template is used.
### API Summary

### Send Mail

* [SendBasicEmail](/api/capi/mail/sendbasicemail) - simplified send an email to a profile id
* [SendAdvancedEmail](/api/capi/mail/sendadvancedemail) - send an email with to a profile id
* [SendAdvancedEmailByAddress](/api/capi/mail/sendadvancedemailbyaddress) - send an email to an email address

<DocCardList />