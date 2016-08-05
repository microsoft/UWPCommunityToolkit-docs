---
permalink: /en-US/animations/blur.htm
title: Blur XAML and Code Animation for UWP Community Toolkit
description: The Blur animation behavior allows for blurring of XAML elements using composition
keywords: windows, app, toolkit, Blur, animation behavior, XAML behavior, image blur, XAML blur, XAML, animation, composition 
layout: default
search.product: eADQiWindows 10XVcnh
---

# Blur
The **Blur animation behavior** selectively blurs a XAML element by increasing or decreasing pixel size.
Sometimes you want an element to appear slightly out of focus, but to be familiar to the user from other locations within an app.  Rather than having to rasterize the XAML into an image and apply a blur, you can apply a BlurBehavior to the original element at run time. 

## Syntax
You can either use the blur behavior from your XAML code:
```xaml

 <interactivity:Interaction.Behaviors>
    <behaviors:Blur x:Name="BlurBehavior" 
           BlurAmount="10" 
           Duration="10" 
           Delay="0" 
           AutomaticallyStart="True"/>
</interactivity:Interaction.Behaviors>

```

or directly from code:

```C#
ToolkitLogo.Blur(duration: 10, delay: 0, blurAmount: 10);       
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

[Blur Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Blur)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.

## Example Image
![Blur Behavior animation](/resources/images/Animations-Blur.gif "Blur Behavior")

## Platforms

[Windows 10 Anniversary SDK 14393](https://blogs.windows.com/windowsexperience/2016/07/18/build14393/) or higher.

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

* [Blur source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Blur.cs)
* [Blur Behavior API documentation](../api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Blur.htm)
* [Blur Code API documentation](../api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#blurmicrosofttoolkituwpuianimationsanimationset-animationsetsystemdouble-durationsystemdouble-delaysystemdouble-bluramount.htm)

