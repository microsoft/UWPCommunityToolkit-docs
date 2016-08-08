---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastActionsCustom.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastActionsCustom API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastActionsCustom
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastActionsCustom class

Create your own custom actions, using controls like [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.htm), [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.htm), and [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.htm).

## Members

The **ToastActionsCustom** class has this types of members

* [properties](#properties)

### properties

#### Inputs

Inputs like [ToastTextBox](Microsoft_Toolkit_Uwp_Notifications_ToastTextBox.htm) and [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.htm) can be added to the Toast. Only up to 5 inputs can be added; after that, an exception is thrown.

#### Buttons

Buttons are displayed after all the inputs (or adjacent to inputs if used as quick reply buttons). Only up to 5 buttons can be added (or fewer if you are also including context menu items). After that, an exception is thrown. You can add [ToastButton](Microsoft_Toolkit_Uwp_Notifications_ToastButton.htm), [ToastButtonSnooze](Microsoft_Toolkit_Uwp_Notifications_ToastButtonSnooze.htm), or [ToastButtonDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastButtonDismiss.htm)

#### ContextMenuItems

New in Anniversary Update: Custom context menu items, providing additional actions when the user right clicks the Toast notification. You can only have up to 5 buttons and context menu items *combined*. Thus, if you have one context menu item, you can only have four buttons, etc.
