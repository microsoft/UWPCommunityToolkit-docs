---
permalink: /en-US/controls/pulltorefreshlistview.html
title: PullToRefreshListview
description: This page describes the PullToRefreshListview menu control
keywords: windows, app, toolkit, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# PullToRefreshListview


## Syntax
```xaml
        <controls:PullToRefreshListView Name="listView"
                                        ItemsSource="{x:Bind _items}"
                                        OverscrollLimit="0.4"
                                        PullThreshold="100"
                                        RefreshRequested="ListView_RefreshCommand"
                                        PullProgressChanged="ListView_PullProgressChanged"
<controls:PullToRefreshListView>
---

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

---

## Platforms

## API 

