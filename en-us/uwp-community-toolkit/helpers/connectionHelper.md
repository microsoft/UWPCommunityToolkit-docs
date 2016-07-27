---
permalink: /en-US/helpers/connectionHelper.html
title: ConnectionHelper utility from UWP Community Toolkit
description: Connection Helper for determining if app is on a metered Internet connection
keywords: windows, app, toolkit, UWP, helpers, connection, internet, metered
layout: default
search.product: eADQiWindows 10XVcnh
---

## ConnectionHelper

The ConnectionHelper class is used to determine whether the app has Internet, and if it is on a metered Internet connection.

_What is a metered connection?_
A metered connection is an Internet connection that has a data limit associated with it. Cellular data connections are set as metered by default. Wi-Fi network connections can be set to metered, but aren't by default. Some apps and features in Windows will behave differently on a metered connection to help reduce your data usage.

## Example

**NOTE:** There is no UI for this helper.  It is a C# helper without a visual component.

```C#

	// Metered connections are determined by the OS
    if( ConnectionHelper.IsInternetOnMeteredConnection )
    {
        // Attempt to only use local resources
    }
    else
    {
        // Attempt to refresh from internet
    }

	// Test if there is any network available
    if (ConnectionHelper.IsInternetAvailable == false)
        return;
```

## Platforms

Windows 10 SDK 10240 or higher

## API

(Connection Helper Source)[https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit/Helpers/ConnectionHelper.cs]


