---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Bing_BingDataProvider.htm
title: Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider API 
description: API page for Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# BingDataProvider class

Data Provider for connecting to Bing service.

## Members

The **BingDataProvider** class has the following types of members:

* [Methods](#Methods)

* [Fields](#Fields)

### Methods

#### GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Wrapper around REST API for making data request.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.htm) || maxRecords | Upper limit for records returned. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | IParser implementation for interpreting results. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Strongly typed list of results. |




#### GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config)

Returns parser implementation for specified configuration.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.htm) || return |Strongly typed parser. |




#### ValidateConfig(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config)

Check validity of configuration.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.htm) |




### Fields

#### BaseUrl

Base Url for service.




