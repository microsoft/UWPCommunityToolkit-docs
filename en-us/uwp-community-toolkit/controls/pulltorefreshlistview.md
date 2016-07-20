---
permalink: /en-US/controls/pulltorefreshlistview.html
title: PullToRefreshListView
description: This page describes the PullToRefreshListView menu control
keywords: windows, app, PulltoRefresh, ListView, toolkit, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# PullToRefreshListView
The **PullToRefreshListView** Control, is derived from the built-in List View in UWP. It lets the user pull down beyond the top limit on the listview to trigger a refresh. 

## Syntax
```xaml
     <controls:PullToRefreshListView Name="ListViewName"
                                        ItemsSource="{x:Bind _items}"
                                        OverscrollLimit="@[OverscrollLimit:DoubleSlider:0.4:0-1]"
                                        PullThreshold="@[PullThreshold:Slider:100:50-300]"
                                        RefreshRequested="ListView_RefreshCommand"
                                        PullProgressChanged="ListView_PullProgressChanged">
    </controls:PullToRefreshListView.ItemTemplate>
```

## Example


## Default Template
```xaml
 <controls:PullToRefreshListView Name="ListViewName"
                                        ItemsSource="{x:Bind _items}"
                                        OverscrollLimit="0.4"
                                        PullThreshold="100"
                                        RefreshRequested="ListView_RefreshCommand"
                                        PullProgressChanged="ListView_PullProgressChanged">
            <controls:PullToRefreshListView.ItemTemplate>
                <DataTemplate  x:DataType="data:Item">
                    <TextBlock Text="{x:Bind Title}" Style="{StaticResource CaptionTextBlockStyle}" TextWrapping="NoWrap"/>
                </DataTemplate>
            </controls:PullToRefreshListView.ItemTemplate>
            <controls:PullToRefreshListView.RefreshIndicatorContent>
                <Border HorizontalAlignment="Center" x:Name="refreshindicator" CornerRadius="30" Height="20" Width="20" ></Border>
            </controls:PullToRefreshListView.RefreshIndicatorContent>
        </controls:PullToRefreshListView>
```

## Platforms

## API 

