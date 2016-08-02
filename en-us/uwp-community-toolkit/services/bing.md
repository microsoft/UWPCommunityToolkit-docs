---
permalink: /en-US/services/bing.html
title: Bing Service from UWP Community Toolkit
description: Easy add support for Bing within your UWP Applications
keywords: windows, app, toolkit, Bing, services, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# BING SERVICE
The **Bing Service** allows you to retrieve Bing results. Bing can return web results, images, and videos for many countries around the world.

## Example Syntax
```C#
if (string.IsNullOrEmpty(SearchText.Text))
{
    return;
}

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

Please refer to the [Bing Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.Services/Services/Bing) for details about the implementation.

## NuGet Packages Required

Microsoft.Toolkit.Uwp.Services

See the [NuGet Packages page](../get-started/nugetpackages.md) for complete list.
