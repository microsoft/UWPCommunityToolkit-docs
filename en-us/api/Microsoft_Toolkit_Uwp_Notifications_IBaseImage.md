---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_IBaseImage.htm
title: Microsoft.Toolkit.Uwp.Notifications.IBaseImage API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.IBaseImage
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# IBaseImage class

Contains the base properties that an image needs.

## Members

The **IBaseImage** class has the following types of members:

* [Properties](#Properties)

### Properties

#### Source

The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.





#### AlternateText

A description of the image, for users of assistive technologies.





#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.




