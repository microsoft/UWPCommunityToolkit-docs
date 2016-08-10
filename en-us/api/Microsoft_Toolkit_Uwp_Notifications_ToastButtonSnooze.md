---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastButtonSnooze.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastButtonSnooze API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastButtonSnooze
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ToastButtonSnooze class

A system-handled snooze button that automatically handles snoozing of a Toast notification.

## Members

The **ToastButtonSnooze** class has the following types of members:

* [Constructors](#Constructors)

* [Properties](#Properties)

### Constructors

#### contructor

Initializes a system-handled snooze button that displays localized "Snooze" text on the button and automatically handles snoozing.



#### contructor

Initializes a system-handled snooze button that displays your text on the button and automatically handles snoozing.

##### Parameters



| Name | Description | Type || --- | --- | --- || customContent | The text you want displayed on the button. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


### Properties

#### CustomContent

Custom text displayed on the button that overrides the default localized "Snooze" text.



#### SelectionBoxId

Optionally specify the ID of an existing [ToastSelectionBox](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBox.htm) in order to allow the user to pick a custom snooze time. The ID's of the [ToastSelectionBoxItem](Microsoft_Toolkit_Uwp_Notifications_ToastSelectionBoxItem.htm)s inside the selection box must represent the snooze interval in minutes. For example, if the user selects an item that has an ID of "120", then the notification will be snoozed for 2 hours. When the user clicks this button, if you specified a SelectionBoxId, the system will parse the ID of the selected item and snooze by that amount of minutes. If you didn't specify a SelectionBoxId, the system will snooze by the default system snooze time.


