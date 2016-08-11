---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_DataProviderBase-2.htm
title: Microsoft.Toolkit.Uwp.Services.DataProviderBase-2 API 
description: API page for Microsoft.Toolkit.Uwp.Services.DataProviderBase-2
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# DataProviderBase of (T1, T2) class

Base class for data providers in this library.

## Members

The **DataProviderBase of (T1, T2)** class has the following types of members:

### Methods

#### LoadDataAsync(T0 config,System.Int32 maxRecords)

Load data from provider endpoint.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration. | T0 || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |List of strong typed objects. |


#### GetDefaultParser(T0 config)

Default parser abstract method.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Query configuration object. | T0 || return |Strong typed default parser. |

