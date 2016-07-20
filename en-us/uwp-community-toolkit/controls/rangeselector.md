---
permalink: /en-US/controls/rangeselector.html
title: RangeSelector
description: This page describes the RangeSelector menu control
keywords: windows, app, toolkit, IRangeSelector, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# RangeSelector
The **RangeSelector** Control is a *Double Slider* control that allows the user to select a sub-range of values from a larger range of possible values. 

## Syntax
```xaml
<controls:RangeSelector x:Name="RangeSelectorName" Grid.Column="1"
                 Minimum="@[Minimum:Slider:0:0-100]" 
                 Maximum="@[Maximum:Slider:100:0-100]">
            </controls:RangeSelector>
            <TextBlock Grid.Column="2" 
					Text="{Binding RangeMax, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}"
                    Foreground="Black"></TextBlock/>
        <controls:RangeSelector/>
```
        

## Example 

## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Grid VerticalAlignment="Center" HorizontalAlignment="Center">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="50"></ColumnDefinition>
                <ColumnDefinition Width="250"></ColumnDefinition>
                <ColumnDefinition Width="50"></ColumnDefinition>
            </Grid.ColumnDefinitions>
            <TextBlock Grid.Column="0" 
					Text="{Binding RangeMin, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}" 
                    Foreground="Black"></TextBlock>
            <controls:RangeSelector x:Name="RangeSelector" Grid.Column="1"
                 Minimum="0" 
                 Maximum="100">
            </controls:RangeSelector>
            <TextBlock Grid.Column="2" 
					Text="{Binding RangeMax, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}"
                    Foreground="Black"></TextBlock>


    
```

## Platforms 

## API 
