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

[Opacity Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/OpacityBehavior)
 
## Example Image

## Platforms

Windows 10 SDK 10586 or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp) for the UWP Community Toolkit for current samples and example code.