---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_IncrementalLoadingCollection.htm
title: Microsoft.Toolkit.Uwp.IncrementalLoadingCollection API 
description: API page for Microsoft.Toolkit.Uwp.IncrementalLoadingCollection
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# IncrementalLoadingCollection of (TSource, IType) class

This class represents an [ObservableCollection](https://msdn.microsoft.com/library/ms668604.aspx) whose items are loaded incrementally when the view needs to show them (i.e., when the user scrolls a [ListView](https://msdn.microsoft.com/library/windows/apps/windows.ui.xaml.controls.listview.aspx) bound to it).

## Members

The **IncrementalLoadingCollection** class has the following types of members:

### Constructors

#### contructor

Initializes a new instance of the [IncrementalLoadingCollection of (TSource, IType)](Microsoft_Toolkit_Uwp_IncrementalLoadingCollection.htm) class.

##### Parameters



| Name | Description | Type || --- | --- | --- || itemsPerPage | The number of items to retrieve for each call. Default is 20. | [Integer](https://msdn.microsoft.com/library/windows/apps/System.Int32) |
| onStartLoading | (optional) An Action that is called when a retrieval operation begins. | [Action](https://msdn.microsoft.com/library/system.action.aspx) |
| onEndLoading | (optional) An An that is called when a retrieval operation ends. | [Action](https://msdn.microsoft.com/library/system.action.aspx) |
| onError | An Action that is called if an error occours during data retrieval. | [Action](https://msdn.microsoft.com/library/system.action.aspx) |


### Methods

#### LoadMoreItemsAsync(System.UInt32 count)

Initializes incremental loading from the view. This method is called automatically when the view (for example a [ListView](https://msdn.microsoft.com/library/windows/apps/windows.ui.xaml.controls.listview.aspx)) needs more items to show.

##### Parameters



| Name | Description | Type |
| --- | --- | --- |
| count | The number of items to load. | [UInt32](https://msdn.microsoft.com/library/windows/apps/System.UInt32) |
| return | An object of [LoadMoreItemsResult](https://msdn.microsoft.com/library/windows/apps/windows.ui.xaml.data.loadmoreitemsresult) type that specifies how many items have been actually retrieved. |


### Properties

#### IsLoading

Gets a value indicating whether new items are being loaded. This property is observable, so you can data-bind it.



#### HasMoreItems

Gets a value indicating whether the collection contains more items to retrieve. This property is observable, so you can data-bind it.