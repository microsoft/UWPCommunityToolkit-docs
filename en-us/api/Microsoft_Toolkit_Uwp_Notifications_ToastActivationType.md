---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastActivationType.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastActivationType API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastActivationType
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ToastActivationType class

Decides the type of activation that will be used when the user interacts with the Toast notification.

## Members

The **ToastActivationType** class has the following types of members:

* [Fields](#Fields)

### Fields

#### Foreground

Default value. Your foreground app is launched.





#### Background

Your corresponding background task (assuming you set everything up) is triggered, and you can execute code in the background (like sending the user's quick reply message) without interrupting the user.





#### Protocol

Launch a different app using protocol activation.




