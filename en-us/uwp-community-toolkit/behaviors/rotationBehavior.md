---
permalink: /en-US/behaviors/RotationBehavior.html
title: RotationBehavior
description: This page describes the Rotation Behavior 
keywords: windows, app, toolkit, RotationBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# ROTATION
The **Rotation Behavior** allows users to modify and animate the control's rotation. Parameters include: angle values, time, pause delay, duration, and diameter.

## Syntax
```xaml
   <behaviors:Rotation x:Name="RotationBehavior" 
				Value="@[Value:DoubleSlider:0.0:0.0-360.0]"
				CenterX="@[CenterX:DoubleSlider:0.0:0.0-100.0]" 
				CenterY="@[CenterY:DoubleSlider:0.0:0.0-100.0]" 
				CenterZ="@[CenterZ:DoubleSlider:0.0:0.0-100.0]" 
				Duration="@[Duration:DoubleSlider:1.0:0.1-5.0]" 
				Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]" 
				AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
  </behaviors:Rotation>
``
 
## Example


## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Rotation x:Name="RotationBehavior" 
				Value="146.1"
				CenterX="0" 
				CenterY="15.97" 
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
                        <core:CallMethodAction TargetObject="{Binding ElementName=Rotation}" MethodName="StartAnimation"/>
                    </core:EventTriggerBehavior>
                </interactivity:Interaction.Behaviors>
            </Button>
        </StackPanel>


C#
MyRectangle.Rotate(
                duration: Duration,
                delay: Delay,
                value: (float)Value,
                centerX: (float)CenterX,
                centerY: (float)CenterY,
                centerZ: (float)CenterZ);
    
```

## Platforms

## API
