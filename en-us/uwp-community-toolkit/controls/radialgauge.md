---
permalink: /en-US/controls/radialgauge.html
title: RadialGauge
description: This page describes the RadialGauge menu control
keywords: windows, app, toolkit, RadialGauge, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# RadialGauge
The **RadialGauge Control** displays a value in a certain range using a needle on a circular face.

## Syntax
```xaml
  <controls:RadialGauge x:Name="RadialGaugeName"
                                  Grid.Column="1"
                                  Value="@[Value:Slider:0:0-180]"
                                  Minimum="0"
                                  Maximum="180"
                                  TickSpacing="@[TickSpacing:Slider:20:10-30]"
                                  ScaleWidth="@[ScaleWidth:Slider:26:5-50]"
                                  Unit="Units"
                                  TickBrush="Gainsboro"
                                  ScaleTickBrush="{ThemeResource ApplicationPageBackgroundThemeBrush}"
                                  UnitBrush="Black"
                                  ValueBrush="Black" 
				  NeedleWidth="@[NeedleWidth:Slider:5:1-10]" 
				  TickLength="@[TickLength:Slider:18:4-30]"/>
 </controls:RadialGauge/>
```
## Example

## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <VerticalAlignment="Center"
	HorizontalAlignment="Center">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="50"></ColumnDefinition>
                <ColumnDefinition Width="250"></ColumnDefinition>
                <ColumnDefinition Width="50"></ColumnDefinition>
            </Grid.ColumnDefinitions>
            <controls:RadialGauge x:Name="RadialGaugeName"
                                  Grid.Column="1"
                                  Value="0"
                                  Minimum="0"
                                  Maximum="180"
                                  TickSpacing="20"
					ScaleWidth="26"
                                  Unit="Units"
                                  TickBrush="Gainsboro"
                                  ScaleTickBrush="{ThemeResource ApplicationPageBackgroundThemeBrush}"
                                  UnitBrush="Black"
                                  ValueBrush="Black" 
					NeedleWidth="5" 
					 TickLength="18"/>
	   </controls:RadialGauge/>
```

## Platforms

## API 
