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

## Syntax
```C#


    if( ConnectionHelper.IsInternetOnMeteredConnection )
    {
        // Attempt to only use local resources
    }
    else
    {
        // Attempt to refresh from internet
    }


    if (ConnectionHelper.IsInternetAvailable() == false)
        return;
```

## Example 

## Platforms

## API

