---
permalink: /en-US/behaviors/ScaleBehavior.html
title: ScaleBehavior XAML Behavior for UWP Community Toolkit
description: The Scale Behavior lets users create a scale by increasing or decreasing the control's animation 
keywords: windows, app, toolkit, ScaleBehavior, scale behavior, scale, XAML, UWP, animation
layout: default
search.product: eADQiWindows 10XVcnh
---

# ScaleBehavior XAML Behavior 
The **Scale Behavior** allows you to create a scale by increasing or decreasing animation in your control. For example, the user changes the scale in an *Entry* field, by tapping it.

## Syntax
```xaml

<interactivity:Interaction.Behaviors>
    <behaviors:Scale x:Name="Scale" 
                     ScaleX="2.0"
                     ScaleY="2.0"
                     ScaleZ="1.0"
                     CenterX="0.0"
                     CenterY="0.0" 
                     CenterZ="0.0" 
                     Duration="1.0" 
                     Delay="0.5" 
                     AutomaticallyStart="True"/>
</interactivity:Interaction.Behaviors>

```
or directly from code:

```C#
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

Behaviors can also be chained and awaited.

```C#
    Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    await Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    var anim = element.Rotate(value: 30f).Opacity(value: 0.5).Blur(blurAmount:5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();
```


[Scale Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/ScaleBehavior)
 
## Example Image


## Platforms

Windows 10 SDK 10585 or higher

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.