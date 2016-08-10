---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Core_IDataService-3.htm
title: Microsoft.Toolkit.Uwp.Services.Core.IDataService-3 API 
description: API page for Microsoft.Toolkit.Uwp.Services.Core.IDataService-3
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# IDataService of (T1, T2, T3) class

Generic interface that all deployed service providers implement.

## Members

The **IDataService of (T1, T2, T3)** class has the following types of members:

* [Methods](#Methods)

* [Properties](#Properties)

### Methods

#### RequestAsync(T2 config,System.Int32 maxRecords)

Makes a request for a list of data from the given service provider.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | Describes the query on the list data request. | T2 || maxRecords | Specifies an upper limit to the number of records returned. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Returns a strongly typed list of results from the service. |




### Properties

#### Provider

Gets the underlying data service provider.




