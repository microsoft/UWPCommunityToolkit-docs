---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_TileVisual.htm
title: Microsoft.Toolkit.Uwp.Notifications.TileVisual API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.TileVisual
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# TileVisual class

Contains multiple binding child elements, each of which defines a Tile.

## Members

The **TileVisual** class has the following types of members:

* [Methods](#Methods)

* [Properties](#Properties)

### Methods

#### TryReuseTextElementForLockDetailedText(System.Int32 lineNumber,System.String lockText,Microsoft.Toolkit.Uwp.Notifications.Element_TileBinding binding)

Attempts to find and re-use an existing text element inside the binding. Returns true if it could. Otherwise returns false, and the caller will have to specify the detailed status using the lock hint attribute.

##### Parameters



| Name | Description | Type || --- | --- | --- || lineNumber | The lock screen line number. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || lockText | The lock screen line text. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || binding | The binding to look in for matches. | [Element_TileBinding](Microsoft_Toolkit_Uwp_Notifications_Element_TileBinding.htm) || return |True if could re-use existing text element, otherwise false. |


### Properties

#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". This locale is overridden by any locale specified in binding or text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string.



#### Branding

The form that the Tile should use to display the app's brand.



#### AddImageQuery

Defaults to false. Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language; for instance, a value of  "www.website.com/images/hello.png"  included in the notification becomes  "www.website.com/images/hello.png?ms-scale=100&ms-contrast=standard&ms-lang=en-us"



#### ContentId

Set to a sender-defined string that uniquely identifies the content of the notification. This prevents duplicates in the situation where a large Tile template is displaying the last three wide Tile notifications.



#### DisplayName

An optional string to override the Tile's display name while showing this notification.



#### LockDetailedStatus1

If you specify this, you must also provide a Wide Tile binding. This is the first line of text that will be displayed on the lock screen if the user has selected your Tile as their detailed status app.



#### BaseUri

A default base URI that is combined with relative URIs in image source attributes.



#### LockDetailedStatus3

If you specify this, you must also provide a Wide Tile binding. This is the third line of text that will be displayed on the lock screen if the user has selected your Tile as their detailed status app.



#### Arguments

New in Anniversary Update: App-defined data that is passed back to your app via the TileActivatedInfo property on LaunchActivatedEventArgs when the user launches your app from the Live Tile. This allows you to know which Tile notifications your user saw when they tapped your Live Tile. On devices without the Anniversary Update, this will simply be ignored.



#### TileSmall

Provide an optional small binding to specify content for the small Tile size.



#### TileMedium

Provide an optional medium binding to specify content for the medium Tile size.



#### TileWide

Provide an optional wide binding to specify content for the wide Tile size.



#### TileLarge

Desktop-only. Provide an optional large binding to specify content for the large Tile size.



#### LockDetailedStatus2

If you specify this, you must also provide a Wide Tile binding. This is the second line of text that will be displayed on the lock screen if the user has selected your Tile as their detailed status app.


