---
permalink: /en-US/behaviors/OpacityBehavior.html
title: OpacityBehavior XAML Behavior for UWP Community Toolkit
description: The Opacity Behavior fades objects, in and out, over time 
keywords: windows, app, toolkit, OpacityBehavior, Opacity, fades, XAML, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# OpacityBehavior XAML Behavior
The **Opacity Behavior** fades objects, in and out, over time. 
## Syntax
```xaml
 <behaviors:Opacity x:Name="OpacityBehavior>" 
				Value="10.0" 
				Duration="1.5" 
				Delay="0.5" 
				AutomaticallyStart="True">
 </behaviors:Opacity>
```

or directly from code:

```C#
MyRectangle.Opacity(Duration, Delay, (float)Value);
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

[Opacity Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/OpacityBehavior)
 
## Example Image

## Platforms

Windows 10 SDK 10586 or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.