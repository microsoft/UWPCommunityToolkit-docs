---
permalink: /en-US/helpers/converters.htm
title: Code Helper Converters 
description: Commonly used converters that allow the data to be modified as it passes through the binding engine.
keywords: windows, app, toolkit, UWP, helpers, xaml
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Converters

Commonly used **converters** that allow the data to be modified as it passes through the binding engine.

| Converter | Purpose |
| --- | --- |
|BoolToVisibilityConverter | Converts a boolean value into a Visibility enumeration |
|CollectionVisibilityConverter | Converts a collection into a Visibility enumeration (Visible if the given collection is not empty or null) |
|StringFormatConverter | Converts a source object to the formatted string version |
|StringVisibilityConverter | Converts a string value into a Visibility enumeration (if the value is null or empty returns a collapsed value) |


## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp |

## API

* [Converters source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI/Converters)
* [Converters API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Converters_ConverterTools.htm)

