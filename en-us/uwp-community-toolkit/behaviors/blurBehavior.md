---
permalink: /en-US/behaviors/BlurBehavior.html
title: BlurBehavior
description: This page describes the BlurBehavior behavior
keywords: windows, app, toolkit, BlurBehavior, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# BLUR
The **Blur Behavior** selectively blurs an image by incfreasing or decreasing pixel size. 

## Syntax
```xaml
 <behaviors:Blur x:Name="BlurBehavior"
                            BlurAmount="@[BlurAmount:DoubleSlider:10.0:0.0-10.0]"
                            Duration="@[Duration:DoubleSlider:3.0:0.1-10.0]"
                            Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]"
                            AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
```
 
## Example


## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
          <interactivity:Interaction.Behaviors>
            <behaviors:Blur x:Name="BlurBehavior"
                            BlurAmount="10"
                            Duration="3"
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
ToolkitLogo.Blur(duration: 10, delay: 0, blurAmount: 10);       
```

## Platforms

## API
