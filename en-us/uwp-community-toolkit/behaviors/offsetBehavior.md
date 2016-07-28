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
 
## Example Image

## Platforms

Windows 10 SDK 10586 or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp) for the UWP Community Toolkit for current samples and example code.