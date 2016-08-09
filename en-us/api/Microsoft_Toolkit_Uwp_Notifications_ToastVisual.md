---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastVisual.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastVisual API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastVisual
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastVisual class

Defines the visual aspects of a Toast notification.

## Members

The **ToastVisual** class has this types of members

* [properties](#properties)

### properties

#### Language

The target locale of the XML payload, specified as BCP-47 language tags such as "en-US" or "fr-FR". This locale is overridden by any locale specified in binding or text. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string.

#### BaseUri

A default base URI that is combined with relative URIs in image source attributes.

#### AddImageQuery

Set to "true" to allow Windows to append a query string to the image URI supplied in the Toast notification. Use this attribute if your server hosts images and can handle query strings, either by retrieving an image variant based on the query strings or by ignoring the query string and returning the image as specified without the query string. This query string specifies scale, contrast setting, and language.

#### BindingGeneric

The generic Toast binding, which can be rendered on all devices. This binding is required and cannot be null.
