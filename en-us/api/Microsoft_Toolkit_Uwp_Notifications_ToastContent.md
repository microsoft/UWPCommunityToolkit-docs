---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_ToastContent.htm
title: Microsoft.Toolkit.Uwp.Notifications.ToastContent API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.ToastContent
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ToastContent class

Base Toast element, which contains at least a visual element.

## Members

The **ToastContent** class has this types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### GetContent()

Retrieves the notification XML content as a string, so that it can be sent with a HTTP POST in a push notification.

##### parameters



| name | description | type || --- | --- | --- || return |The notification XML content as a string. |


#### GetXml()

Retrieves the notification XML content as a WinRT XmlDocument, so that it can be used with a local Toast notification's constructor on either [ToastNotification](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Notifications.ToastNotification) or [ScheduledToastNotification](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Notifications.ScheduledToastNotification).

##### parameters



| name | description | type || --- | --- | --- || return |The notification XML content as a WinRT XmlDocument. |


### properties

#### Visual

The visual element is required.



#### Audio

Specify custom audio options.



#### Actions

Optionally create custom actions with buttons and inputs (using [ToastActionsCustom](Microsoft_Toolkit_Uwp_Notifications_ToastActionsCustom.htm)) or optionally use the system-default snooze/dismiss controls (with [ToastActionsSnoozeAndDismiss](Microsoft_Toolkit_Uwp_Notifications_ToastActionsSnoozeAndDismiss.htm)).



#### Scenario

Specify the scenario, to make the Toast behave like an alarm, reminder, or more.



#### Duration

The amount of time the Toast should display. You typically should use the Scenario attribute instead, which impacts how long a Toast stays on screen.



#### Launch

A string that is passed to the application when it is activated by the Toast. The format and contents of this string are defined by the app for its own use. When the user taps or clicks the Toast to launch its associated app, the launch string provides the context to the app that allows it to show the user a view relevant to the Toast content, rather than launching in its default way.



#### ActivationType

Specifies what activation type will be used when the user clicks the body of this Toast.


