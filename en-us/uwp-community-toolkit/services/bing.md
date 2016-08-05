---
permalink: /en-US/services/bing.htm
title: Bing Service from UWP Community Toolkit
description: Easy add support for Bing within your UWP Applications
keywords: windows, app, toolkit, Bing, services, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# Bing Service
The **Bing Service** allows you to retrieve Bing results. Bing can return web results, images, and videos for many countries around the world.

##Set up Bing API

**Note:**  The current version does not require the API key and is using the rate limited public access point.  The ability to specify your own key to remove the rate limits is on our backlog for a future release.

[Signup for API Access](https://www.microsoft.com/cognitive-services/en-us/sign-up) using your Microsoft account.  There is a free trial option for all of the Bing services (fully functional, just with API rate limits or capacity limits).

Choose the *Bing Search - Free* option.  After selecting this and agreeing to the terms of service you will be issued two keys that are limited to 5,000 queries per month.

## Example Syntax
```C#
// using Microsoft.Toolkit.Uwp.Services.Bing;

var searchConfig = new BingSearchConfig
{
    Country = BingCountry.UnitedStates,
    Query = SearchText.Text
};

ListView.ItemsSource = await BingService.Instance.RequestAsync(searchConfig, 50);
```

## Example 
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[Bing Service Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Bing%20Service)

## Platforms 

Windows 10 SDK 10586 or higher

## API
* [Bing Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.Services/Services/Bing)
* [Bing Service API documentation](../api/Microsoft_Toolkit_Uwp_Services_Bing_BingService.htm)

## NuGet Packages Required

**Microsoft.Toolkit.Uwp.Services**

See the [NuGet Packages page](../get-started/nugetpackages.md) for complete list.
