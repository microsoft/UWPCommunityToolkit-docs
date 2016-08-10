---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastScenario.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastScenario API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastScenario
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ToastScenario class

Specifies the scenario, controlling behaviors about the Toast.

## Members

The **ToastScenario** class has the following types of members:

* [Properties](#Properties)

* [Fields](#Fields)

### Properties

#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". The locale specified here overrides that in visual, but can be overriden by that in text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string. See Remarks for when this value isn't specified.



#### Content

The text to be displayed on the button.



#### Arguments

The arguments attribute describes the app-defined data that the app can later retrieve once it is activated from user taking this action.



#### ImageUri

imageUri is optional and is used to provide an image icon for this action to display inside the button alone with the text content.



#### InputId

This is specifically used for the quick reply scenario.



#### Src

The media file to play in place of the default sound. This can either be a ms-winsoundevent value, or a custom ms-appx:/// or ms-appdata:/// file, or null for the default sound.



#### Silent

True to mute the sound; false to allow the Toast notification sound to play.



#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language; for instance, a value of  "www.website.com/images/hello.png"  included in the notification becomes  "www.website.com/images/hello.png?ms-scale=100&ms-contrast=standard&ms-lang=en-us"



#### BaseUri

A default base URI that is combined with relative URIs in image source attributes.



### Fields

#### Background

Your corresponding background task (assuming you set everything up) is triggered, and you can execute code in the background (like sending the user's quick reply message) without interrupting the user.



#### Protocol

Launch a different app using protocol activation.



#### System

System handles the activation.



#### Reminder

Causes the Toast to stay on-screen and expanded until the user takes action.



#### IncomingCall

Causes the Toast to stay on-screen and expanded until the user takes action (on Mobile this expands to full screen). Also causes a looping incoming call sound to be selected by default.



#### Default

The normal Toast behavior. The Toast appears for a short duration, and then automatically dismisses into Action Center.



#### Alarm

Causes the Toast to stay on-screen and expanded until the user takes action. Also causes a looping alarm sound to be selected by default.



#### Foreground

Default value. Your foreground app is launched.


