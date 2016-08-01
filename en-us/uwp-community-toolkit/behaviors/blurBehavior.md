---
permalink: /en-US/behaviors/blurbehavior.html
title: BlurBehavior XAML Behavior for UWP Community Toolkit
description: The BlurBehavior behavior allows for blurring of XAML elements using composition
keywords: windows, app, toolkit, BlurBehavior, XAML behavior, image blur, XAML blur, XAML composition 
layout: default
search.product: eADQiWindows 10XVcnh
---

# BlurBehavior XAML Behavior
The **Blur Behavior** selectively blurs a XAML element by increasing or decreasing pixel size.
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

[Blur Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/BlurBehavior)


## Platforms

[Windows 10 Anniversary SDK 14393](https://blogs.windows.com/windowsexperience/2016/07/18/build14393/){:target="_blank"} or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

[Blur Source Code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Blur.cs)
[link to class documnetation]

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
