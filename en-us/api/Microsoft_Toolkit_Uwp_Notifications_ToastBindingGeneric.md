---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastBindingGeneric.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastBindingGeneric API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastBindingGeneric
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastBindingGeneric class

Generic Toast binding, where you provide text, images, and other visual elements for your Toast notification.

## Members

The **ToastBindingGeneric** class has this types of members

* [properties](#properties)

### properties

#### Children

The contents of the body of the Toast, which can include [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm), [AdaptiveImage](Microsoft_Toolkit_Uwp_Notifications_AdaptiveImage.htm), and [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.htm) (added in Anniversary Update). Also, [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm) elements must come before any other elements. If an [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm) element is placed after any other element, an exception will be thrown when you try to retrieve the Toast XML content. And finally, certain [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm) properties like HintStyle aren't supported on the root children text elements, and only work inside an [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.htm). If you use [AdaptiveGroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.htm) on devices without the Anniversary Update, the group content will simply be dropped.

#### AppLogoOverride

An optional override of the logo displayed on the Toast notification.

#### HeroImage

New in Anniversary Update: An optional hero image (a visually impactful image displayed on the Toast notification). On devices without the Anniversary Update, the hero image will simply be ignored.

#### Attribution

New in Anniversary Update: An optional text element that is displayed as attribution text. On devices without the Anniversary Update, this text will appear as if it's another [AdaptiveText](Microsoft_Toolkit_Uwp_Notifications_AdaptiveText.htm) element at the end of your Children list.

#### Language

The target locale of the XML payload, specified as BCP-47 language tags such as "en-US" or "fr-FR". This locale is overridden by any locale specified in binding or text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string.

#### BaseUri

A default base URI that is combined with relative URIs in image source attributes.

#### AddImageQuery

Set to "true" to allow Windows to append a query string to the image URI supplied in the Toast notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.
