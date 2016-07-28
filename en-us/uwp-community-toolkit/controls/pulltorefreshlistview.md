---
permalink: /en-US/controls/pulltorefreshlistview.html
title: PullToRefreshListView XAML Control for UWP Community Toolkit
description: PullToRefreshListView Control pulls the listview to to trigger a refresh in content
keywords: windows, app, PulltoRefresh, ListView, toolkit, pull to refresh, XAML, UWP 
layout: default
search.product: eADQiWindows 10XVcnh
---


# PullToRefreshListView XAML Control
The **PullToRefreshListView** Control, is derived from the built-in List View in XAML. It lets the user pull down beyond the top limit on the listview to trigger a refresh of the content. This control can create rich, animations, and is easy to use. 

This Control is very common on mobile devices, where the user can pull from the top or button and an clockwise arrow (from the top) and upward-facing arrow, from the bottom are common icons. Another example of the PulltoRefreshListView is located in the [Comet Mail Sample](https://github.com/nmetulev/comet/tree/master/Samples/Mail).

<p> **Note:** Refer to the following content for required code that must be used when creating a *PullToRefreshListView XAML Control* for Windows application development.<p> 


## Syntax
```xaml
<controls:PullToRefreshListView Name="PullToRefreshListViewControl"
                            ItemsSource="{x:Bind _items}"
                            OverscrollLimit="0.4"
                            PullThreshold="100"
				RefreshRequested="ListView_RefreshCommand"                                                            PullProgressChanged="ListView_PullProgressChanged">
</controls:PullToRefreshListView.ItemTemplate>
```

## Example Image



## Example Code
[PullToRefreshListView Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/PullToRefreshListView)

## Default Template 
[PullToRefreshListView XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/PullToRefreshListView/PullToRefreshListView.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10240 or greater

## API
Please access the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp), to view control samples located in the UWP Community Toolkit.
