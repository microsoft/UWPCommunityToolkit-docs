---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Notifications_TileBranding.htm
title: Microsoft.Toolkit.Uwp.Notifications.TileBranding API 
description: API page for Microsoft.Toolkit.Uwp.Notifications.TileBranding
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# TileBranding class

The form that the Tile should use to display the app's brand.

## Members

The **TileBranding** class has the following types of members:

### Fields

#### Auto

The default choice. If ShowNameOn___ is true for the Tile size being displayed, then branding will be "Name". Otherwise it will be "None".



#### None

No branding will be displayed.



#### Name

The DisplayName will be shown.



#### Logo

Desktop-only. The Square44x44Logo will be shown. On Mobile, this will fallback to Name.



#### NameAndLogo

Desktop-only. Both the DisplayName and Square44x44Logo will be shown. On Mobile, this will fallback to Name.


