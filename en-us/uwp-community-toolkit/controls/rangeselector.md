---
permalink: /en-US/controls/ImageEx.html
title: ImageEx
description: This page describes the ImageEx menu control
keywords: windows, app, toolkit, ImageEx, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# RangeSelector
The **RangeSelector" Control is a double slider used to set values. 

## Syntax
```xaml
</Grid.ColumnDefinitions>
            <controls:RangeSelector x:Name="RangeSelector" Grid.Column="1"
                 Minimum="0" 
                 Maximum="100">
            </controls:RangeSelector>
            <TextBlock Grid.Column="2" 
					Text="{Binding RangeMax, ElementName=RangeSelector, Converter={StaticResource StringFormatConverter}, ConverterParameter='{}{0:0.##}'}"
                    Foreground="Black"></TextBlock>
        </Grid>
```
        

## Example 

## Default Template
```xaml
<Page.Resources>
        <converters:StringFormatConverter x:Key="StringFormatConverter"/>
    </Page.Resources>

    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
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
        </Grid>
        
    </Grid>
</Page>
    
```

## Platforms 

## API 
