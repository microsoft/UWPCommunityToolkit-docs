---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_DataProviderBase`2.htm
title: Microsoft.Toolkit.Uwp.Services.DataProviderBase`2 API 
description: API page for Microsoft.Toolkit.Uwp.Services.DataProviderBase`2
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# DataProviderBase<T1><T2> class

Base class for data providers in this library.

## Members

The **DataProviderBase<T1><T2>** class has this types of members

* [methods](#methods)

### methods

#### LoadDataAsync(T0 config,System.Int32 maxRecords)

Load data from provider endpoint.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | T0 || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |List of strong typed objects. |
#### GetDefaultParser(T0 config)

Default parser abstract method.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration object. | T0 || return |Strong typed default parser. |