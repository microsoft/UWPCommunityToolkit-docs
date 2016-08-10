---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_AdaptiveGroup.htm
title: Microsoft.Toolkit.Uwp.Notifications.AdaptiveGroup API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.AdaptiveGroup
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AdaptiveGroup class

Groups semantically identify that the content in the group must either be displayed as a whole, or not displayed if it cannot fit. Groups also allow creating multiple columns. Supported on Tiles since RTM. Supported on Toasts since Anniversary Update.

## Members

The **AdaptiveGroup** class has the following types of members:

* [Properties](#Properties)

### Properties

#### Children

The only valid children of groups are [AdaptiveSubgroup](Microsoft_Toolkit_Uwp_Notifications_AdaptiveSubgroup.htm). Each subgroup is displayed as a separate vertical column. Note that you must include at least one subgroup in your group, otherwise an [InvalidOperationException](https://msdn.microsoft.com/library/windows/apps/System.InvalidOperationException) will be thrown when you try to retrieve the XML for the notification.


