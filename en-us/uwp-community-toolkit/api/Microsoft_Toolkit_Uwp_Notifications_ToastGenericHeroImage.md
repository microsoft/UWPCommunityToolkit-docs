---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastGenericHeroImage.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastGenericHeroImage API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastGenericHeroImage
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastGenericHeroImage class

A hero image for the Toast notification.

## Members

The **ToastGenericHeroImage** class has this types of members

* [constructors](#constructors)

* [properties](#properties)

### constructors

#### contructor

Initializes a hero image for the Toast notification.

### properties

#### Source

The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.

#### AlternateText

A description of the image, for users of assistive technologies.

#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.
