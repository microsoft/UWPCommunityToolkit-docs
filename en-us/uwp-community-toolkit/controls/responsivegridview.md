---
permalink: /en-US/controls/responsivegridview.html
title: ResponsiveGridView XAML Control for UWP Community Toolkit
description: The ResponsiveGridView Control presents content in a Grid View to fill available display space 
keywords: windows, app, toolkit, ResponsiveGridView, grid layout, UWP, XAML, Responsive Grid View, Grid View Control, Responsive Grid, form factors, display space
layout: default
search.product: eADQiWindows 10XVcnh
---

# ResponsiveGridView XAML Control 
The **ResponsiveGridView Control** presents content within a *Grid View* to fill the total available display space. It reacts to changes in both content and the layout, so it can adapt to different form factors automatically.

## Syntax
```xaml
<controls:ResponsiveGridView  Name="ResponsiveGridViewControl"
          ItemHeight="@[ItemHeight:Slider:200:50-500]"
          DesiredWidth="@[DesiredWidth:Slider:300:50-500]"
          ItemTemplate="{StaticResource PhotosTemplate}">
</controls:ResponsiveGridView>
```

## Example Image

## Default Template
```xaml
<DataTemplate x:Key="PhotosTemplate">
	<Background="White" BorderBrush="Black" BorderThickness="1">
	<Image Source="{Binding Thumbnail}"
            Stretch="UniformToFill"
            HorizontalAlignment="Center"
            VerticalAlignment="Center"/>
</DataTemplate>

<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
<controls:ResponsiveGridView Name="ResponsiveGridViewControl"
      ItemHeight="200"
      DesiredWidth="300"
      ItemTemplate="{StaticResource PhotosTemplate}"/>

```

## Platforms

## API
