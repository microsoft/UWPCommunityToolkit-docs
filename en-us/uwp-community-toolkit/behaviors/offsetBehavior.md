---
permalink: /en-US/behaviors/OffsetBehavior.html
title: OffsetBehavior XAML Behavior for UWP Community Toolkit
description: The OffsetBehavior  gets the number of pixels, from the origin of the associated control, that offsets the snapline 
keywords: windows, app, toolkit, OffsetBehavior, behavior, offset, XAML, UWP, snapline
layout: default
search.product: eADQiWindows 10XVcnh
---

# OffsetBehavior XAML Behavior
The **Offset Behavior** gets the number of pixels, from the origin of the associated control, that offsets the snapline. 
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
[Offset Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/OffsetBehavior)
 
## Example Image

## Platforms

Windows 10 SDK 10585 or higher

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
