## Getting started

Rainbow S2S (Server to Server) API is a server side REST API that enables user to communicate with rainbow plateform without any GUI.<br>
The API is intended to be used from backends by bots or agents.<br>
For the first step, S2S API provides chat and presence communication features between server side programm and users or group of users via bubbles.<br>
Rainbow S2S module also provides its RESTful APIs description over openapi standard (via swagger files [openapi.yaml ou openapi.json]) so user can generates clients inplementation
in various languages and hide REST calls by manipulating objects.<br>
User can directly make REST call to rainbow S2S plateform,in this case he will have to implement callbacks events over webhook (web server that will received POST events messages from rainbow system) or he can use Rainbow-S2S-StarterKit-NodeJS to avoid webhook implementation and direct use of REST protocol.

### Introduction

The goal of this starter kit is to help user build a Rainbow S2S application or interact with Rainbow system without implementing REST protocol and webhook.</br>

It is devided in two main parts:</br>
1. The first part is composed by serveral clients API used to send request/action to Rainbow.<br>
This API are externally generated from swagger definition files and plugged in the started kit.

2. The seconde part is an event chanel based on a webhook mechanism used for notification on Rainbow platform or users changes.<br>
The event chanel core (event router,event data and its validation process) is also generated appart from swagger file and plugged in the starter kit.

### Main directories and files description

#### Rainbow-S2S-StarterKit-NodeJS clients API directory plugin structure

**Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client** is clients API base directory<br>

|Directory|description|
|-------------------------------------|:----------------------------------|
| Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client/rainbow_admin_portal | Directory that must contains generated Admin API client |
| Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client/rainbow_application_portal | Directory that must contains  generated applications client API |
| **Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client/rainbow_authent_portal** | Directory that must contains  generated Authentication client API |
| **Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client/rainbow_enduser_portal** | Directory that must contains  generated End User client API |
| **Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/rest/client/s2s** | Directory that must contains  generated S2S client API |

The hightlited directories are the more important, they have to be filled with the proper generated client API.

#### Rainbow-S2S-StarterKit-NodeJS webhook directory structure

**Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/webhook** is the webhook API base directory<br>

|Directory|description|
|-------------------------------------|:----------------------------------|
| (*) Rainbow-S2S-StarterKit-NodeJS/Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/webhook | Directory that must contains webhook swagger definition (openapi-3.0.json).<br>|
| Rainbow-S2S-StarterKit-NodeJS/modules/sdkkernel/webhook | Contains webhook custom controllers and services implementation.|

### Rainbow-S2S-StarterKit-NodeJS Clients API, webhook generation and swagger definition.

#### Rainbow-S2S-StarterKit-NodeJS and swagger definitions

**A swagger file is an API description format for REST APIs** [https://swagger.io/docs/specification/about/](https://swagger.io/docs/specification/about/ "definition from https://swagger.io website")

S2S API is not enought to have full interaction with Rainbow, sometimes we need others API. This module can be used to generated theme. They are listed bellow :
* rainbow_admin_portal [https://hub.openrainbow.com/api/admin](https://hub.openrainbow.com/api/admin/ "Admin API")
* rainbow_application_portal [https://hub.openrainbow.com/api/applications](https://hub.openrainbow.com/api/applications/ "Applications API")
* rainbow_authent_portal [https://hub.openrainbow.com/api/authentication](https://hub.openrainbow.com/api/authentication/ "Authentication API")
* rainbow_enduser_portal ( not public)

Rainbow-S2S-StarterKit-NodeJS core API implementation are generated based on swagger definitions.<br>
Those definitions are downloaded from hub and put in **Rainbow-S2S-StarterKit-NodeJS/openapi-specifications** directory.<br>
The Rainbow-S2S-StarterKit-NodeJS can be used as is ( it already contains necessary swagger definitions).<br>

|swagger file|description|
|-------------------------------------|:----------------------------------|
| 1 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/rainbow_admin_portal/swagger.json| Admin client API definition |
| 2 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/rainbow_application_portal/swagger.json | Application client API definition |
| **3 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/rainbow_authent_portal/swagger.json** | Authentication client API definition |
| **4 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/rainbow_enduser_portal:swagger.json** | End User client API definition |
| **5 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/s2s/openapi.json** | S2S client API and callbacks definition |
| **6 Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/webhook/openapi-3.0.json** | This file is generated from callbacks defined in S2S client specification (5) |

Excepte for Rainbow-S2S-StarterKit-NodeJS/openapi-specifications/webhook/openapi-3.0.json, all swagger can be updated from files downloaded from hub.

#### Rainbow-S2S-StarterKit-NodeJS client API generation commands

Rainbow-S2S-StarterKit-NodeJS provides commands for S2S, EndUser and Authentication clients API generation.<br>
It also provides commands for webhook implementation generation.<br>

|command|description|
|-------------------------------------|:----------------------------------|
| gen-auth-client-api | generates auth client API from rainbow_authent_portal swagger definition (3 in previous table ) |
| gen-admin-client-api | generates admin client API from rainbow_admin_portal swagger definition (1 in previous table ) |
| gen-application-client-api | generates application client API from rainbow_application_portal swagger definition (2 in previous table ) |
| gen-enduser-client-api | generates end-user client API from rainbow_enduser_portal swagger definition (4 in previous table ) |
| gen-s2s-client-api | generates s2s client API from s2s swagger definition (5 in previous table ) |
| gen-webhook-swagger |  generates **webhook swagger** definition to be used by webhook implementation (6 in previous table ) |
| gen-all-client-api |  generates all clients API and webhook from swagger definition (1,2,3,4,5 in previous table ) |

### Rainbow-S2S-StarterKit-NodeJS webhook

One of the main part of Rainbow-S2S-StarterKit-NodeJS, is its webhooks inplementation.<br>
The webhook is an http server that accept POST requests (as events) from Rainbow plateform in response to Rainbow clients interractions.<br>
Webhook recieve requests and fires underlining data as events handled by s2s modules.<br>
For example when a connected user (s2s users are bots) recieves a chat message from a Rainbow client, the message data is POSTED to webhook module and a **rainbow_onmessagereceived event** is fired to a Rainbow-S2S-StarterKit-NodeJS specific service that responds using generated client API).<br>

#### Rainbow-S2S-StarterKit-NodeJS webhook s2s events

|events|
|-------------------------------------|
| rainbow_onchatstate | 
| rainbow_onroommember |
| rainbow_onroominvite |
| rainbow_onbubbleinvitationreceived |
| connected |
| rainbow_onreceipt |
| rainbow_onallreceiptrecived |
| rainbow_onmessagereceived |
| rainbow_onpresencechanged |
| rainbow_onroomstate |

### How to use Rainbow-S2S-StarterKit-NodeJS

#### Before starting : Create a Rainbow application on the Hub web site
---
To use the S2S starter kit you need an `applicationID` and a `secretKey` from the [openrainbow hub](https://hub.openrainbow.com/). These information allow you to identify your application and allow you to use the rainbow platform. For more information, see [Applications lifecycle](/#/documentation/doc/hub/application-lifecycle) which explains what is the purpose, how to create an application and how to get the application ID and the secret key.

The `hostname` is also necessary to know which server is used: [the sandbox](/#/documentation/doc/hub/developer-sandboxed-platform) or [the production server](/#/documentation/doc/hub/get-ready-for-production)

### Let's dive Rainbow-S2S-StarterKit-NodeJS :
---

1. clone Rainbow-S2S-StarterKit-NodeJS
 git clone ssh://git@git.openrainbow.org:2223/rainbow-cpaas/Rainbow-S2S-StarterKit-NodeJS.git Rainbow-S2S-StarterKit-NodeJS

2. Go to Rainbow-S2S-StarterKit-NodeJS directory

3. Install dependencies by typing :<br/> npm install

4. Create a local link by typing : <br/> npm link

7. Create a new directory for a project :<br/>
> mkdir myproject

8. Go into myproject and type : <br/>npm init

9. Make Rainbow-S2S-StarterKit-NodeJS accessible to your poject by typing :</br>
> npm link \<full path to Rainbow-S2S-StarterKit-NodeJS\>

10. Copy Rainbow-S2S-StarterKit-NodeJS/config/StarterKitConfig.json.sample to your project and rename it as you want (for example myStarterKitProjectConfig.json )</br>

modify myStarterKitProjectConfig.json according to your registration parameters on the Hub web site</br>

In configuration file some parameters are related to your credentials and allow to target the Rainbow Cloud Services server to use.

```json

// Update your myStarterKitProjectConfig.json configuration file
{
    "rainbow": {
        "host": "sandbox",
    },
    "credentials": {
        "login": "bot@mycompany.com",  // To replace by your developer credendials
        "password": "xxxxxxx"  // To replace by your developer credentials
    },
    // Application identifier
    "application": {
        "appID": "", // To repmace with your applicationID
        "appSecret": "", // To replace with your app secret key
    },
    // Logs options
    "logs": {
        "enableConsoleLogs": true,
        "enableFileLogs": false,
        "file": {
            "path": '/var/tmp/rainbowsdk/',
            "level": 'debug'
        }
    },
    // IM options
    "im": {
        "sendReadReceipt": false
    }
}

```
11. Edit your main file following the sample below
```
'use strict';

const S2sSdk = require('rainbow-s2s-starterkit-nodejs');
const starterKitConfig = require('./config/myStarterKitProjectConfig.json');
const myS2sSdk = new S2sSdk(starterKitConfig);
(async() => {
    try {
        await myS2sSdk.start().then((data) => {
        }).catch((e) => {
            console.error(e);
            myS2sSdk.stop();
        });
    } catch (ex) {
        console.log(ex);
    }
})();

/*subscribe to desired rainbow events like this*/

myS2sSdk.events.on('rainbow_onmessagereceived', (data) => {
    console.log('test : rainbow_onmessagereceived : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onchatstate', (data) => {
    console.log('test : rainbow_onchatstate : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onpresencechanged', (data) => {
    console.log('test : rainbow_onpresencechanged : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onroommember', (data) => {
    console.log('test : rainbow_onroommember : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onroominvite', (data) => {
    console.log('test : rainbow_onroominvite : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onbubbleinvitationreceived', (data) => {
    console.log('test : rainbow_onbubbleinvitationreceived : ' + JSON.stringify(data));
});
myS2sSdk.events.on('connected', (data) => {
    console.log('test : connected : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onreceipt', (data) => {
    console.log('test : rainbow_onreceipt : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onallreceiptrecived', (data) => {
    console.log('test : rainbow_onallreceiptrecived : ' + JSON.stringify(data));
});
myS2sSdk.events.on('rainbow_onroomstate', (data) => {
    console.log('test : rainbow_onroomstate : ' + JSON.stringify(data));
});
```