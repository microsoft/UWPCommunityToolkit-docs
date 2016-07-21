---
permalink: /en-US/behaviors/ScaleBehavior.html
title: ScaleBehavior
description: This page describes the ScaleBehavior behavior
keywords: windows, app, toolkit, ScaleBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# SCALE

## Syntax
```xaml

```
 
## Example


## Default Template
```xaml
Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Scale x:Name="Scale" 
				ScaleX="1" 
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


C#
MyRectangle.Scale(
                duration: Duration,
                delay: Delay,
                centerX: (float)CenterX,
                centerY: (float)CenterY,
                centerZ: (float)CenterZ,
                scaleX: (float)ScaleX,
                scaleY: (float)ScaleY,
                scaleZ: (float)ScaleZ);
```

## Platforms

## API
