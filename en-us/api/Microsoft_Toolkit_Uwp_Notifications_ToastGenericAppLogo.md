---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastGenericAppLogo.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastGenericAppLogo API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastGenericAppLogo
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ToastGenericAppLogo class

The logo that is displayed on your Toast notification.

## Members

The **ToastGenericAppLogo** class has the following types of members:

* [Constructors](#Constructors)

* [Properties](#Properties)

### Constructors

#### contructor

Initializes a logo that is displayed on your Toast notification.





### Properties

#### Source

The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.





#### AlternateText

A description of the image, for users of assistive technologies.





#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.





#### HintCrop

Specify how you would like the image to be cropped.




