---
permalink: /en-US/behaviors/RotationBehavior.html
title: RotationBehavior XAML Behavior for UWP Community Toolkit
description: The Rotation Behavior allows users to modify and animate the control's rotation 
keywords: windows, app, toolkit, RotationBehavior,  Rotation, XAML, UWP, animate rotation, behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# RotationBehavior XAML Behavior
The **Rotation Behavior** allows users to modify and animate the control's rotation. Parameters include: angle values, time, pause delay, duration, and diameter.

## Syntax
```xaml
   <behaviors:Rotation x:Name="RotationBehavior" 
				Value="180"
				CenterX="0.0" 
				CenterY="0.0" 
				CenterZ="0.0" 
				Duration="1.5" 
				Delay="0.5" 
				AutomaticallyStart="True"/>
  </behaviors:Rotation>
```

or directly from code:

```C#
MyRectangle.Rotate(
                duration: Duration,
                delay: Delay,
                value: (float)Value,
                centerX: (float)CenterX,
                centerY: (float)CenterY,
                centerZ: (float)CenterZ);
    
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

[Rotation Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/RotationBehavior)
## Example Image

## Platforms

[Windows 10 Anniversary SDK 14393](https://blogs.windows.com/windowsexperience/2016/07/18/build14393/) or higher.

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
