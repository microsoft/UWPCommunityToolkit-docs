---
permalink: /en-US/controls/ImageEx.html
title: ImageEx
description: This page describes the ImageEx control
keywords: windows, app, toolkit, ImageEx, loading indicator
layout: default
search.product: eADQiWindows 10XVcnh
---

# ImageEx
The **ImageEx Control** downloads images asynchronously showing a load indicator. Source images are then stored in the Application's local cache to preserve resources and load time. ImageEx also extends the default *Image Platform* control to improve performance. 

## Syntax
```xaml
 <controls:VariableSizedGridView Name="ImageExControlName"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="6"
            AspectRatio="1"
            HorizontalAlignment="Left"
            VerticalAlignment="Top"/>
  </controls:VariableSizedGridView/>
```

## Example

## Default Template
```xaml
<DataTemplate x:Key="PhotoTemplate">
            <BorderBrush="Black" BorderThickness="1">
                <controls:ImageEx
		    IsCacheEnabled="True"
                    Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>  
                <TextBlock VerticalAlignment="Bottom" HorizontalAlignment="Center"
                           Text="{Binding Title}" FontSize="16"
                           TextWrapping="Wrap" Foreground="White"></TextBlock>
 </DataTemplate>
  
    <Background="{StaticResource ApplicationPageBackgroundThemeBrush}">
    
  <controls:VariableSizedGridView  Name="ImageExControlName"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="4"
            AspectRatio="1"
            HorizontalAlignment="Left"
            VerticalAlignment="Top"/>
  </controls:VariableSizedGridView/>
```

## Platforms

## API


