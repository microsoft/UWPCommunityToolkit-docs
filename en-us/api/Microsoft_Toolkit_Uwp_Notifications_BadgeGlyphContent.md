---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_BadgeGlyphContent.htm
title: Microsoft.Toolkit.Uwp.Notifications.BadgeGlyphContent API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.BadgeGlyphContent
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# BadgeGlyphContent class

Notification content object to display a glyph on a Tile's badge.

## Members

The **BadgeGlyphContent** class has the following types of members:

* [Constructors](#Constructors)

* [Methods](#Methods)

* [Properties](#Properties)

### Constructors

#### contructor

Default constructor to create a glyph badge content object.



#### contructor

Constructor to create a glyph badge content object with a glyph.

##### Parameters



| Name | Description | Type || --- | --- | --- || glyph | The glyph to be displayed on the badge. | [BadgeGlyphValue](Microsoft_Toolkit_Uwp_Notifications_BadgeGlyphValue.htm) |


### Methods

#### GetContent()

Retrieves the notification Xml content as a string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification Xml content as a string. |


#### ToString()

Retrieves the notification XML content as a string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification XML content as a string. |


#### GetXml()

Retrieves the notification XML content as a WinRT Xml document.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification XML content as a WinRT Xml document. |


### Properties

#### Glyph

The glyph to be displayed on the badge.


