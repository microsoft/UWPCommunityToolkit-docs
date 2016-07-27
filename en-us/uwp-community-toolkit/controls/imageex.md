---
permalink: /en-US/controls/ImageEx.html
title: ImageExControl XAML Control for UWP Community Toolkit
description:The ImageEx Controldownloads images asynchronously while showing a loading indicator.
keywords: windows, app, toolkit, ImageEx, loading indicator, ImageExControl, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# ImageExControl XAML Control
The **ImageEx Control** downloads images asynchronously while showing a loading indicator. Source images are then stored in the Application's local cache to preserve resources and load time. ImageEx also extends the default *Image Platform* control to improve performance through the cache. 

## Syntax
```xaml
 <controls:VariableSizedGridView Name="ImageExControl"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="6"
            AspectRatio="1"
            HorizontalAlignment="Left"
            VerticalAlignment="Top"/>
  </controls:VariableSizedGridView/>
```

## Example Image

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
                           TextWrapping="Wrap" Foreground="White">
				</TextBlock>
</DataTemplate>
  
<Background="{StaticResource ApplicationPageBackgroundThemeBrush}">
    
<controls:VariableSizedGridView  Name="ImageExControl"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="4"
            AspectRatio="1"
            HorizontalAlignment="Left"
            VerticalAlignment="Top">
</controls:VariableSizedGridView>
```

## Platforms

## API

