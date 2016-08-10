---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_TileBasicImage.htm
title: Microsoft.Toolkit.Uwp.Notifications.TileBasicImage API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.TileBasicImage
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# TileBasicImage class

An image used on various special templates for the Tile.

## Members

The **TileBasicImage** class has the following types of members:

* [Methods](#Methods)

* [Properties](#Properties)

### Methods

#### Descendants()

Generates an enumerable collection of children and all those children's children

##### Parameters



| Name | Description | Type || --- | --- | --- || return |Enumerable collection of children and all those children's children. |




#### CheckOverlayValue(System.Int32 value)

Throws exception if value is invalid

##### Parameters



| Name | Description | Type || --- | --- | --- || value | Overlay value (0-100) | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) |




### Properties

#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.





#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language; for instance, a value of  "www.website.com/images/hello.png"  included in the notification becomes  "www.website.com/images/hello.png?ms-scale=100&ms-contrast=standard&ms-lang=en-us"





#### BaseUri

A default base URI that is combined with relative URIs in image source attributes.





#### AlternateText

A description of the image, for users of assistive technologies.





#### ContentId

Set to a sender-defined string that uniquely identifies the content of the notification. This prevents duplicates in the situation where a large Tile template is displaying the last three wide Tile notifications.  Required: NO





#### DisplayName

An optional string to override the Tile's display name while showing this notification.





#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". The locale specified here overrides that in visual, but can be overriden by that in text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string. See Remarks for when this value isn't specified.





#### Source

The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.





#### Branding

The form that the Tile should use to display the app's brand.




