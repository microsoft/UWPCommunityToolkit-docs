---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastContextMenuItem.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastContextMenuItem API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastContextMenuItem
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ToastContextMenuItem class

A Toast context menu item.

## Members

The **ToastContextMenuItem** class has the following types of members:

* [Constructors](#Constructors)

* [Properties](#Properties)

### Constructors

#### contructor

Initializes a Toast context menu item with the required properties.

##### Parameters



| Name | Description | Type || --- | --- | --- || content | The text to display on the menu item. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || arguments | App-defined string of arguments that the app can later retrieve once it is activated when the user clicks the menu item. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


### Properties

#### Content

Required. The text to display on the menu item.



#### Arguments

Required. App-defined string of arguments that the app can later retrieve once it is activated when the user clicks the menu item.



#### ActivationType

Controls what type of activation this menu item will use when clicked. Defaults to Foreground.


