---
permalink: /en-US/controls/pulltorefreshlistview.html
title: PullToRefreshListView
description: This page describes the PullToRefreshListView menu control
keywords: windows, app, toolkit, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# PullToRefreshListView
The **PullToRefreshListView** Control, is derived from the built-in List View in UWP. This action lets the user pull down beyond the top limit on the listview in order to trigger a refresh. 

## Syntax
```xaml
        <controls:PullToRefreshListView Name="listView"
                                        ItemsSource="{x:Bind _items}"
                                        OverscrollLimit="0.4"
                                        PullThreshold="100"
                                        RefreshRequested="ListView_RefreshCommand"
                                        PullProgressChanged="ListView_PullProgressChanged">
       <controls:PullToRefreshListView>
```

## Example


## Default Template
```xaml
<Grid>
<controls:PullToRefreshListView.ItemTemplate>
                <DataTemplate  x:DataType="data:Item">
                    <TextBlock Text="{x:Bind Title}" Style="{StaticResource CaptionTextBlockStyle}" TextWrapping="NoWrap"/>
                </DataTemplate>
            </controls:PullToRefreshListView.ItemTemplate>
            <controls:PullToRefreshListView.RefreshIndicatorContent>
                <Border HorizontalAlignment="Center" x:Name="refreshindicator" CornerRadius="30" Height="20" Width="20" ></Border>
            </controls:PullToRefreshListView.RefreshIndicatorContent>
              </controls:PullToRefreshListView>
    </Grid>
```

## Platforms

## API 

