---
permalink: /en-US/behaviors/OffsetBehavior.html
title: OffsetBehavior
description: This page describes the OffsetBehavior behavior
keywords: windows, app, toolkit, OffsetBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# OFFSET BEHAVIOR
The **Offset** Behavior gets the number of pixels that the snapline is offset from the origin of the associated control. 
## Syntax
```xaml
          <behaviors:Offset x:Name="Offset" 
				OffsetX="@[OffsetX:DoubleSlider:0.0:0.0-500.0]" 
				OffsetY="@[OffsetY:DoubleSlider:0.0:0.0-500.0]" 
				OffsetZ="@[OffsetZ:DoubleSlider:0.0:0.0-500.0]" 
				Duration="@[Duration:DoubleSlider:1.0:0.1-5.0]" 
				Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]" 
				AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
```
 
## Example


## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Scale x:Name="Scale" 
				ScaleX="1.09" 
				ScaleY="1" 
				ScaleZ="1" 
				CenterX="0" 
				CenterY="0" 
				CenterZ="0" 
				Duration="1" 
				Delay="0" 
				AutomaticallyStart="True"/>
            </interactivity:Interaction.Behaviors>
        </Rectangle>
        <StackPanel HorizontalAlignment="Right" VerticalAlignment="Bottom">
            <Button Content="Apply" Margin="10">
                <interactivity:Interaction.Behaviors>
                    <core:EventTriggerBehavior EventName="Click">
                        <core:CallMethodAction TargetObject="{Binding ElementName=Scale}" MethodName="StartAnimation"/>
                    </core:EventTriggerBehavior>
                </interactivity:Interaction.Behaviors>
            </Button>
        </StackPanel>
```

## Platforms

## API
