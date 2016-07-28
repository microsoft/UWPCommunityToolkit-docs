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

[Blur Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/BlurBehavior)


## Platforms

[Windows 10 Anniversary SDK 14388](https://blogs.windows.com/buildingapps/2016/07/12/windows-10-anniversary-sdk-preview-build-14388-released/) or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

[Blur Source Code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Animations/Behaviors/Blur.cs)
[link to class documnetation]

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp) for the UWP Community Toolkit for current samples and example code.