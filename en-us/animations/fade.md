---
permalink: /en-US/animations/fade.htm
title: Fade XAML and Code Animation
description: The Fade animation behavior fades objects, in and out, over time 
keywords: windows, app, toolkit, Fade, Fade, fades, XAML, UWP, animation behavior
layout: default
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Fade

The **Fade animation behavior** fades objects, in and out, over time.

## Syntax

```xaml
    <behaviors:Fade x:Name="FadeBehavior>" 
                Value="10.0" 
                Duration="1.5" 
                Delay="0.5" 
                AutomaticallyStart="True">
    </behaviors:Fade>
```

or directly from code:

```C#
    MyRectangle.Fade(Duration, Delay, (float)Value);
```

Behavior animations can also be chained and awaited.

```C#
    Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    await Element.Rotate(duration: 0.3, value: 30f).StartAsync();

    var anim = element.Rotate(value: 30f).Fade(value: 0.5).Blur(value: 5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();
```

[Fade Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Fade)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
 
## Example Image

![Fade Behavior animation]({{site.baseurl}}/resources/images/Animations-Fade.gif "Fade Behavior")

## Platforms

Windows 10 SDK 10585 or higher

## API

* [Fade source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Fade.cs)
* [Fade Behavior API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Fade.htm)
* [Fade Code API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#fadewindowsuixamluielement-associatedobjectsystemdouble-durationsystemdouble-delaysystemsingle-value)
