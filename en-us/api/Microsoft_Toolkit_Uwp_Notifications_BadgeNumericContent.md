---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_BadgeNumericContent.htm
title: Microsoft.Toolkit.Uwp.Notifications.BadgeNumericContent API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.BadgeNumericContent
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# BadgeNumericContent class

Notification content object to display a number on a Tile's badge.

## Members

The **BadgeNumericContent** class has the following types of members:

* [Constructors](#Constructors)

* [Methods](#Methods)

* [Properties](#Properties)

### Constructors

#### contructor

Default constructor to create a numeric badge content object.



#### contructor

Constructor to create a numeric badge content object with a number.

##### Parameters



| Name | Description | Type || --- | --- | --- || number | The number that will appear on the badge.  If the number is 0, the badge will be removed. | [UInt32](https://msdn.microsoft.com/library/windows/apps/System.UInt32) |


### Methods

#### GetContent()

Retrieves the notification Xml content as a string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification Xml content as a string. |


#### ToString()

Retrieves the notification Xml content as a string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification Xml content as a string. |


#### GetXml()

Retrieves the notification Xml content as a WinRT Xml document.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification Xml content as a WinRT Xml document. |


#### GetContent()

Retrieves the notification XML content as a string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification XML content as a string. |


#### GetXml()

Retrieves the notification XML content as a WinRT XML document.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The notification XML content as a WinRT XML document. |


### Properties

#### Number

The number that will appear on the badge.  If the number is 0, the badge will be removed.


