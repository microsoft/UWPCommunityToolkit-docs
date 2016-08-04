---
permalink: /en-US/controls/pulltorefreshlistview.htm
title: PullToRefreshListView XAML Control for UWP Community Toolkit
description: PullToRefreshListView Control pulls the listview to to trigger a refresh in content
keywords: windows, app, PulltoRefresh, ListView, toolkit, pull to refresh, XAML, UWP 
layout: default
search.product: eADQiWindows 10XVcnh
---


# PullToRefreshListView XAML Control
The **PullToRefreshListView Control**, is derived from the built-in List View in XAML. It lets the user pull down beyond the top limit on the listview to trigger a refresh of the content. This control can create rich, animations, and is easy to use. 

This Control is very common on mobile devices, where the user can pull from the top to force a content refresh in applications like Twitter. 

## Syntax
```xaml
<controls:PullToRefreshListView Name="PullToRefreshListViewControl"
	ItemsSource="{x:Bind _items}"	
	OverscrollLimit="0.4"
	PullThreshold="100"
	RefreshRequested="ListView_RefreshCommand" 
	PullProgressChanged="ListView_PullProgressChanged">
</controls:PullToRefreshListView.ItemTemplate>
```

## Example Image



## Example Code
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[PullToRefreshListView Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/PullToRefreshListView)

## Default Template 
[PullToRefreshListView XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/PullToRefreshListView/PullToRefreshListView.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10586 or higher

## API
Please access the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp), to view control samples located in the UWP Community Toolkit.

[PullToRefreshListView API Docs](https://github.com/Microsoft/UWPCommunityToolkit-docs/blob/master/en-us/uwp-community-toolkit/api/Microsoft_Toolkit_Uwp_UI_Controls_PullToRefreshListView.md)
