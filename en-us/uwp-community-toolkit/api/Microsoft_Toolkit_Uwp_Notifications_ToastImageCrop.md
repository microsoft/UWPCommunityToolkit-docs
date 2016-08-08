---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastImageCrop.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastImageCrop API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastImageCrop
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastImageCrop class

Specify the desired cropping of the image.

## Members

The **ToastImageCrop** class has this types of members

* [properties](#properties)

* [fields](#fields)

### properties

#### Id

The id attribute is required and is for developers to retrieve user inputs once the app is activated (in the foreground or background).

#### Title

The title attribute is optional and is for developers to specify a title for the input for shells to render when there is affordance.

#### PlaceholderContent

The placeholderContent attribute is optional and is the grey-out hint text for text input type. This attribute is ignored when the input type is not “text”.

#### DefaultInput

The defaultInput attribute is optional and it allows developer to provide a default input value.

#### Id

The id attribute is required and it is for apps to retrieve back the user selected input after the app is activated.

#### Content

The text to display for this selection element.

### fields

#### None

Default value. Image is not cropped.

#### Circle

Image is cropped to a circle shape.
