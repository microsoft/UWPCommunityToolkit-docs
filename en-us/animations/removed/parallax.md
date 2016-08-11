---
permalink: /en-US/animations/parallax.htm
title: Parallax XAML and Code Animation
description: Parallax animation behavior is the scrolling of a background image behind a scrollview at a different rate than the list itself scrolls
keywords: windows, app, toolkit, ParallaxBehavior, XAML behavior, background image, custom scrolling behavior, animation behavior
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Parallax

The **Parallax animation behavior** uses composition to move an image behind a list at a different scroll speed. The multiplier can be adjusted to move 1:1 to scroll at same speed, or 0.0 for the background to never scroll.

## Syntax

```xaml
    <interactivity:Interaction.Behaviors>
        // Note the ElementName is the ScrollViewer you want to have a background image
        <behaviors:Parallax Scroller="{Binding ElementName=ScrollViewerControl}"
                            Multiplier="0.25"
                            IsHorizontalEffect="True" />
    </interactivity:Interaction.Behaviors>
```

[Parallax Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Parallax)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.

## Example Image

![Parallax Behavior animation]({{site.baseurl}}/resources/images/Animations-Parallax.gif "Parallax Behavior")

## Platforms

Windows 10 SDK 10585 or higher

## API

* [Parallax source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Parallax.cs)
* [Parallax Behavior API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Parallax.htm)
* [Parallax Code API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#parallaxwindowsuixamluielement-elementwindowsuixamlframeworkelement-scrollerelementsystemboolean-ishorizontaleffectsystemsingle-multipliere)

