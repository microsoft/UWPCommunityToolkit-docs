---
permalink: /en-US/behaviors/ParallaxBehavior.html
title: ParallaxBehavior XAML behavior for UWP Community Toolkit
description: ParallaxBehavior is the scrolling of a background image behind a scrollview at a different speed than the list scrolls
keywords: windows, app, toolkit, ParallaxBehavior, XAML behavior, background image, custom scrolling behavior
layout: default
search.product: eADQiWindows 10XVcnh
---

# ParallaxBehavior XAML Behavior
The **Parallax** XAML behavior uses composition to move an image behind a list at a different scroll speed. The multiplier can be adjusted to move 1:1 to scroll at same speed, or 0.0 for the background to never scroll.


## Syntax
```xaml
<interactivity:Interaction.Behaviors>
	// Note the ElementName is the ScrollViewer you want to have a background image
    <behaviors:Parallax Scroller="{Binding ElementName=ScrollViewerControl}"
                        Multiplier="0.25"
                        IsHorizontalEffect="True" />
</interactivity:Interaction.Behaviors>
```

[Parallax Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/ParallaxBehavior)

## Example Image


## Platforms
[Windows 10 Anniversary SDK 14393](https://blogs.windows.com/windowsexperience/2016/07/18/build14393/) or higher.

This behavior requires the [visual layer](https://msdn.microsoft.com/en-us/windows/uwp/graphics/visual-layer) in [Windows.UI.Composition](https://msdn.microsoft.com/library/windows/apps/dn706878) in order to work.  

## API

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.