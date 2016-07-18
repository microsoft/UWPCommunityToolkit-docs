---
permalink: /en-US/controls/variablesizedgridview.html
title: VariableSizedGridView
description: This page describes the VariableSizedGridView menu control
keywords: windows, app, toolkit , menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# VariableSizedGridView
The **VariableSizedGridView** Control displays items that have different width and heighth values. 
You can control the number of rows and columns, as well as orientation and aspect rations. 

## Syntax
```xaml
<controls:VariableSizedGridView  x:Key="PhotoTemplate">
                 BorderBrush="Black"
                 BorderThickness="{Binding BorderThickness.Value}"
                 Image Source="{Binding Thumbnail}"
                 Stretch= "{UniformToFill}"
                 Grid Background= "{LightGray}"
                 Name="control"
                 Margin="0"
                 ItemTemplate="{StaticResource PhotoTemplate}"
                 Orientation="{Horizontal or Vertical}"
                 MaximumRowsOrColumns="{Binding MaximumRowsOrColumns}" 
```

## Example 

## Default Template
```xaml
        <DataTemplate x:Key="PhotoTemplate">
            <Grid
                BorderBrush="Black"
                BorderThickness="1">
                <Image Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>
            </Grid>
        </DataTemplate>

	<Grid Background="LightGray">
        <controls:VariableSizedGridView
            Name="control"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="4"            
		/>
    </Grid>
```

## Platforms 


## API
