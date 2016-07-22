---
permalink: /en-US/behaviors/ScaleBehavior.html
title: ScaleBehavior
description: This page describes the ScaleBehavior behavior
keywords: windows, app, toolkit, ScaleBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# SCALE
The **Scale Behavior** allows you to create a scale by increasing or decreasing animation in your control. For example, changing the scale in an *Entry* field, when the user taps it. 
## Syntax
```xaml
	<interactivity:Interaction.Behaviors>
                <behaviors:Scale x:Name="ScaleBehavior" 
				ScaleX="@[ScaleX:DoubleSlider:1.0:0.5-5.0]" 
				ScaleY="@[ScaleY:DoubleSlider:1.0:0.5-5.0]" 
				ScaleZ="@[ScaleZ:DoubleSlider:1.0:0.5-5.0]" 
				CenterX="@[CenterX:DoubleSlider:0.0:0.0-100.0]" 
				CenterY="@[CenterY:DoubleSlider:0.0:0.0-100.0]" 
				CenterZ="@[CenterZ:DoubleSlider:0.0:0.0-100.0]" 
				Duration="@[Duration:DoubleSlider:1.0:0.1-5.0]" 
				Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]" 
				AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
	</interactivity:Interaction.Behaviors>
	 	</behaviors:Scale>
```
 
## Example


## Default Template
```xaml
Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Scale x:Name="ScaleBeBehavior" 
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
