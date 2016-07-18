---
permalink: /en-US/controls/responsivegridview.html
title: ResponsiveGridView
description: This page describes the ResponsiveGridView menu control
keywords: windows, app, toolkit, ResponsiveGridView, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# ResponsiveGridView
The **ResponsiveGridView** Control presents content within a GridView to fill the total available display space. It reacts to changes in the layout, as well as content so it can adapt to different form factors automatically.

## Syntax
```xaml
<controls:ResponsiveGridView 
      x:Key="PhotosTemplate">
        Background="{Binding Color}"
        BorderBrush="{Binding Color}"
        BorderThickness="{Binding BorderThickness.Value}"
				Image Source="{Binding Thumbnail}"
        Stretch="UniformToFill"
            HorizontalAlignment="Center"
            VerticalAlignment="Center"
            Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        Name="control"
        ItemHeight="200"
        DesiredWidth="300"
        ItemTemplate="{StaticResource PhotosTemplate}"/>
```

## Example

## Default Template
```xaml
<DataTemplate x:Key="PhotosTemplate">
			<Grid
        Background="White"
        BorderBrush="Black"
        BorderThickness="1">
				<Image
            Source="{Binding Thumbnail}"
            Stretch="UniformToFill"
            HorizontalAlignment="Center"
            VerticalAlignment="Center"/>
			</Grid>
		</DataTemplate>
	<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
		<controls:ResponsiveGridView
          Name="control"
          ItemHeight="200"
          DesiredWidth="300"
          ItemTemplate="{StaticResource PhotosTemplate}"/>
	</Grid>
	```

## Platforms

## API
