---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_IIncrementalSource.htm
title: Microsoft.Toolkit.Uwp.IIncrementalSource API 
description: API page for Microsoft.Toolkit.Uwp.IIncrementalSource
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# IIncrementalSource of (TSource) interface

This interface represents a data source which elements can be loaded incrementally.

## Members

The **IIncrementalSource** interface has the following types of members:

### Methods

#### GetPagedItemsAsync(System.Int32 pageIndex, System.Int32 pageSize, System.Threading.CancellationToken cancellationToken)

Retrieves items from the data source according to the _pageIndex_ and _pageSize_ arguments.

##### Parameters



| Name | Description | Type |
| --- | --- | --- |
| pageIndex | The zero-based index of the page that corresponds to the items to retrieve. | [Integer](https://msdn.microsoft.com/library/windows/apps/System.Int32) |
| pageSize | The number of items to retrieve for the specified _pageIndex_. | [Integer](https://msdn.microsoft.com/library/windows/apps/System.Int32) |
| cancellationToken | Used to propagate notification that operation should be canceled. | [CancellationToken](https://msdn.microsoft.com/library/system.threading.cancellationtoken.aspx) |
| return | A collection of items |