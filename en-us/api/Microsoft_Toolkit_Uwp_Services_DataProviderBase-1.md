---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_DataProviderBase-1.htm
title: Microsoft.Toolkit.Uwp.Services.DataProviderBase-1 API 
description: API page for Microsoft.Toolkit.Uwp.Services.DataProviderBase-1
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# DataProviderBase of (T1) class

Base class for data providers in this library.

## Members

The **DataProviderBase of (T1)** class has the following types of members:

### Methods

#### LoadDataAsync``1(T0 config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Load data from provider endpoint.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration. | T0 || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Parser to use for results. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Strong typed list of results. |


#### GetDataAsync``1(T0 config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Derived classes will have to implement this method to return provider data

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Configuration to use | T0 || maxRecords | Maximum number of records to return | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Parser to use | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |List of data |


#### ValidateConfig(T0 config)

Method provided by derived class to validate specified configuration

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Configuration to validate | T0 |

