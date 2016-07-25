---
permalink: /en-US/behaviors/OffsetBehavior.html
title: OffsetBehavior
description: This page describes the OffsetBehavior 
keywords: windows, app, toolkit, OffsetBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# OFFSET
The **Offset Behavior** gets the number of pixels, from the origin of the associated control, that offsets the snapline. 
## Syntax
```xaml
          <behaviors:Offset x:Name="OffsetBehavior" 
				OffsetX="@[OffsetX:DoubleSlider:0.0:0.0-500.0]" 
				OffsetY="@[OffsetY:DoubleSlider:0.0:0.0-500.0]" 
				OffsetZ="@[OffsetZ:DoubleSlider:0.0:0.0-500.0]" 
				Duration="@[Duration:DoubleSlider:1.0:0.1-5.0]" 
				Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]" 
				AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
	  </behaviors:Offset>
```
 
## Example


## Default Template
```xaml
    <Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
            <interactivity:Interaction.Behaviors>
                <behaviors:Offset x:Name="OffsetBehavior" 
				OffsetX="0" 
				OffsetY="0" 
				OffsetZ="0" 
				Duration="1" 
				Delay="0" 
				AutomaticallyStart="True"/>
            </interactivity:Interaction.Behaviors>
        </Rectangle>
        
        <StackPanel HorizontalAlignment="Right" VerticalAlignment="Bottom">
            <Button Content="Apply" Margin="10">
                <interactivity:Interaction.Behaviors>
                    <core:EventTriggerBehavior EventName="Click">
                        <core:CallMethodAction TargetObject="{Binding ElementName=Offset}" MethodName="StartAnimation"/>
                    </core:EventTriggerBehavior>
                </interactivity:Interaction.Behaviors>
            </Button>
        </StackPanel>
   

C#
MyRectangle.Offset(
                duration: Duration,
                delay: Delay,
                offsetX: (float)OffsetX,
                offsetY: (float)OffsetY,
                offsetZ: (float)OffsetZ);;
```

## Platforms

## API
