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
```xaml

            <interactivity:Interaction.Behaviors>
                <behaviors:Blur x:Name="BlurBehavior" 
                                   BlurAmount="{Binding BlurAmount.Value, Mode=TwoWay}" 
                                   Duration="{Binding Duration.Value, Mode=TwoWay}" 
                                   Delay="{Binding Delay.Value, Mode=TwoWay}" 
                                   AutomaticallyStart="{Binding AutomaticallyStart.Value, Mode=TwoWay}"/>
            </interactivity:Interaction.Behaviors>

```
 
## Example

[Blue Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/BlurBehavior)

```C#
// Code only example
ToolkitLogo.Blur(duration: 10, delay: 0, blurAmount: 10);       
```

## Default Template


## Platforms

Windows 10 SDK 10586 or higher

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

[Blur Source Code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Animations/Behaviors/Blur.cs)
