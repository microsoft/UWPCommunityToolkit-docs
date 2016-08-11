---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.htm
title: Microsoft.Toolkit.Uwp.Notifications.AdaptiveImage API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.AdaptiveImage
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AdaptiveImage class

An inline image.

## Members

The **AdaptiveImage** class has the following types of members:

### Methods

#### ToString()

Returns the image's source string.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |The image's source string. |


### Properties

#### HintCrop

Control the desired cropping of the image. Supported on Tiles since RTM. Supported on Toast since Anniversary Update.



#### HintRemoveMargin

By default, images have an 8px margin around them. You can remove this margin by setting this property to true. Supported on Tiles since RTM. Supported on Toast since Anniversary Update.



#### HintAlign

The horizontal alignment of the image. For Toast, this is only supported when inside an [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm).



#### Source

Required. The URI of the image. Can be from your application package, application data, or the internet. Internet images must be less than 200 KB in size.



#### AlternateText

A description of the image, for users of assistive technologies.



#### AddImageQuery

Set to true to allow Windows to append a query string to the image URI supplied in the Tile notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.


