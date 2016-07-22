---
permalink: /en-US/controls/variablesizedgridview.html
title: VariableSizedGridView
description: This page describes the VariableSizedGridView grid control
keywords: windows, app, toolkit , grid view, VariableSizedGridView
layout: default
search.product: eADQiWindows 10XVcnh
---

# VariableSizedGridView
The **VariableSizedGridView** Control displays items that have different width and height values. 
You can control the number of rows, columns, orientation and aspect ratio. 

## Syntax
```xaml
      <controls:VariableSizedGridView   Name="VariableSizedGridViewControl"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="@[Orientation:Enum:Orientation.Horizontal]"
            MaximumRowsOrColumns="@[MaximumRowsOrColumns:Slider:4:1-10]"/> 

## Example 

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
