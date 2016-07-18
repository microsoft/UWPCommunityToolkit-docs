---
permalink: /en-US/controls/RadialGauge.html
title: RadialGauge
description: This page describes the RadialGauge menu control
keywords: windows, app, toolkit, RadialGauge, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# RadialGauge
The **RadialGauge** Control displays a value in a certain range using a needle on a circular face.

## Syntax
```xaml
      
   <controls:RadialGauge x:Name="RadialGauge"
                                  Grid.Column="1"
                                  Value="0"
                                  Minimum="0"
                                  Maximum="180"
                                  TickSpacing="{Binding PanePlacement.Value}"
                                  ScaleWidth="{Binding PanePlacement.Value}"
                                  Unit="Units"
                                  TickBrush="{Binding PanePlacement.Value}"
                                  ScaleTickBrush="{ThemeResource ApplicationPageBackgroundThemeBrush}"
                                  UnitBrush="Black"
                                  ValueBrush="Black" 
                                  NeedleWidth="{Binding PanePlacement.Value}" 
                                  TickLength="{Binding PanePlacement.Value}"/>

```
## Example

## Default Template
```xaml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Grid VerticalAlignment="Center"
              HorizontalAlignment="Center">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="50"></ColumnDefinition>
                <ColumnDefinition Width="250"></ColumnDefinition>
                <ColumnDefinition Width="50"></ColumnDefinition>
            </Grid.ColumnDefinitions>
            <controls:RadialGauge x:Name="RadialGauge"
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
								  TickLength="18" />
      </Grid>
```

## Platforms

## API 
