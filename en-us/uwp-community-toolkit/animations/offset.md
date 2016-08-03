---
permalink: /en-US/animations/offset.htm
title: Offset XAML and Code Animation for UWP Community Toolkit
description: The Offset animation behavior gets the number of pixels, from the origin of the associated control, then offsets the control 
keywords: windows, app, toolkit, Offset, behavior, animation behavior, offset, XAML, UWP, snapline
layout: default
search.product: eADQiWindows 10XVcnh
---

# Offset
The **Offset animation behavior** gets the number of pixels, from the origin of the associated control, then offsets the control. 
## Syntax
```xaml
<behaviors:Offset x:Name="OffsetBehavior" 
	OffsetX="25.0" 
	OffsetY="25.0" 
	OffsetZ="0.0" 
	Duration="2.0" 
	Delay="0.5" 
	AutomaticallyStart="True"/>
</behaviors:Offset>
```
or directly from code:

```C#
MyRectangle.Offset(
                duration: Duration,
                delay: Delay,
                offsetX: (float)OffsetX,
                offsetY: (float)OffsetY,
                offsetZ: (float)OffsetZ);;
```

Behavior animations can also be chained and awaited.

```C#
    Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    await Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    var anim = element.Rotate(value: 30f).Fade(value: 0.5).Blur(blurAmount:5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();
```
[Offset Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Offset)
 
## Example Image

## Platforms

Windows 10 SDK 10585 or higher

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
