---
permalink: /en-US/animations/scale.htm
title: Scale XAML and Code Animation
description: The Scale animation behavior lets users change a scale by increasing or decreasing through animation 
keywords: windows, app, toolkit, Scale, scale behavior, scale, XAML, UWP, animation
layout: default
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Scale

The **Scale animation behavior** allows you to change a controls' scale by increasing or decreasing the control through animation. For example, perhaps you want an entry field to change size when the user taps it.

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

    var anim = element.Rotate(value: 30f).Fade(value: 0.5).Blur(value: 5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();
```


[Scale Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Scale)
 
Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.

## Example Image

![Scale Behavior animation]({{site.baseurl}}/resources/images/Animations-Scale.gif "Scale Behavior")

## Platforms

Windows 10 SDK 10585 or higher

## API

* [Scale source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Scale.cs)
* [Scale API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Scale.htm)
* [Scale API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.md#scalemicrosofttoolkituwpuianimationsanimationset-animationsetsystemdouble-durationsystemdouble-delaysystemsingle-centerxsystemsingle-centerysystemsingle-centerzsystemsingle-scalexsystemsingle-scaleysystemsingle-scalez)

