---
permalink: /en-US/controls/variablesizedgridview.html
title: VariableSizedGridView XAML Control
description: The VariableSizedGridView Control displays items that have different width and height values
keywords: windows, app, toolkit, Variable Sized, gridview control, grid view, VariableSizedGridView, XAML, UWP, ratio
layout: default
search.product: eADQiWindows 10XVcnh
---

#  VariableSizedGridView XAML Control
The **VariableSizedGridView Control** displays items that have different width and height values. 
You can control the number of rows, columns, orientation and aspect ratio. 

## Syntax
```xaml
      <controls:VariableSizedGridView   Name="VariableSizedGridViewControl"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="@[Orientation:Enum:Orientation.Horizontal]"
            MaximumRowsOrColumns="@[MaximumRowsOrColumns:Slider:4:1-10]">
```

## Example Image

## Default Template
```xaml

<DataTemplate x:Key="PhotoTemplate"
                BorderBrush="Black"
                BorderThickness="1">
                <Image Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
            		VerticalAlignment="Center"/>
</DataTemplate>

<controls:VariableSizedGridView
    Name="VariableSizedGridViewControl"
    Margin="0"
    ItemTemplate="{StaticResource PhotoTemplate}"
    Orientation="Horizontal"
    MaximumRowsOrColumns="4"/>          

```

## Platforms 


## API
