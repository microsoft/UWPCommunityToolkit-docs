---
permalink: /en-US/behaviors/OpacityBehavior.html
title: OpacityBehavior
description: This page describes the OpacityBehavior behavior
keywords: windows, app, toolkit, OpacityBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# OPACITY

## Syntax
```xaml
 <behaviors:Opacity x:Name="Opacity" 
				Value="@[Value:DoubleSlider:0.0:0.0-1.0]" 
				Duration="@[Duration:DoubleSlider:1.0:0.1-5.0]" 
				Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]" 
				AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
```
 
## Example


## Default Template
```xaml
Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Opacity x:Name="Opacity" 
				Value="0" 
				Duration="1" 
				Delay="0" 
				AutomaticallyStart="True"/>
            </interactivity:Interaction.Behaviors>
        </Rectangle>
        <StackPanel HorizontalAlignment="Right" VerticalAlignment="Bottom">
            <Button Content="Apply" Margin="10">
                <interactivity:Interaction.Behaviors>
                    <core:EventTriggerBehavior EventName="Click">
                        <core:CallMethodAction TargetObject="{Binding ElementName=Opacity}" MethodName="StartAnimation"/>
                    </core:EventTriggerBehavior>
                </interactivity:Interaction.Behaviors>
            </Button>
        </StackPanel>

```

## Platforms

## API
