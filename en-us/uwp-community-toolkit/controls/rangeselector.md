---
permalink: /en-US/controls/rangeselector.html
title: RangeSelectorControl XAML Control for UWP Community Toolkit
description: The RangeSelector Control is a Double Slider control used to select a sub-range of values from a larger range of possible values
keywords: windows, app, toolkit, RangeSelector, range control, UWP, XAML, double slider, sub range
layout: default
search.product: eADQiWindows 10XVcnh
---

# RangeSelectorControl XAML Control
The **RangeSelector** Control is a *Double Slider* control that allows the user to select a sub-range of values from a larger range of possible values.  The user can slide from the left or right of the range.

## Syntax
```xaml
<controls:RangeSelector x:Name="RangeSelectorControl"
                 Minimum="@[Minimum:Slider:0:0-100]" 
                 Maximum="@[Maximum:Slider:100:0-100]">
</controls:RangeSelector>
```


## Example Image

## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
            <VerticalAlignment="Center" HorizontalAlignment="Center">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="50"></ColumnDefinition>
                <ColumnDefinition Width="250"></ColumnDefinition>
                <ColumnDefinition Width="50"></ColumnDefinition>
            </Grid.ColumnDefinitions>
            <TextBlock Grid.Column="0" 
					Text="{Binding RangeMin, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}" 
                    Foreground="Black">
			</TextBlock>
            <controls:RangeSelector x:Name="RangeSelectorControl" Grid.Column="1" Minimum="0" Maximum="100">
            </controls:RangeSelector>
            <TextBlock Grid.Column="2" 
					Text="{Binding RangeMax, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}"
                    Foreground="Black">
			</TextBlock>
```

## Platforms 

## API 
