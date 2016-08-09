---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_TileBinding.htm
title: Microsoft.Toolkit.Uwp.Notifications.TileBinding API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.TileBinding
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# TileBinding class

The binding element contains the visual content for a specific Tile size.

## Members

The **TileBinding** class has this types of members

* [properties](#properties)

### properties

#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". The locale specified here overrides that in visual, but can be overriden by that in text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string. See Remarks for when this value isn't specified.

#### BaseUri

A default base URI that is combined with relative URIs in image source attributes. Defaults to null.

#### Branding

The form that the Tile should use to display the app's brand..

#### AddImageQuery

Defaults to false. Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language; for instance, a value of  "www.website.com/images/hello.png"  included in the notification becomes  "www.website.com/images/hello.png?ms-scale=100&ms-contrast=standard&ms-lang=en-us"

#### ContentId

Set to a sender-defined string that uniquely identifies the content of the notification. This prevents duplicates in the situation where a large Tile template is displaying the last three wide Tile notifications.

#### DisplayName

An optional string to override the Tile's display name while showing this notification.

#### Arguments

New in Anniversary Update: App-defined data that is passed back to your app via the TileActivatedInfo property on LaunchActivatedEventArgs when the user launches your app from the Live Tile. This allows you to know which Tile notifications your user saw when they tapped your Live Tile. On devices without the Anniversary Update, this will simply be ignored.

#### Content

The actual content to be displayed. One of [TileBindingContentAdaptive](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentAdaptive.htm), [TileBindingContentIconic](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentIconic.htm), [TileBindingContentContact](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentContact.htm), [TileBindingContentPeople](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPeople.htm), or [TileBindingContentPhotos](Microsoft_Toolkit_Uwp_Notifications_TileBindingContentPhotos.htm)
