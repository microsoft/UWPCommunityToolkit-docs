---
permalink: /en-US/animations/fade.htm
title: Fade XAML and Code Animation
description: The Fade animation behavior fades objects, in and out, over time 
keywords: windows, app, toolkit, Fade, Fade, fades, XAML, UWP, animation behavior
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Fade

The **Fade animation behavior** fades objects, in and out, over time.

## Syntax

{% highlight xml %}

    <behaviors:Fade x:Name="FadeBehavior>" 
                Value="10.0" 
                Duration="1.5" 
                Delay="0.5" 
                AutomaticallyStart="True">
    </behaviors:Fade>

{% endhighlight %}

or directly from code:

{% highlight csharp %}

    MyRectangle.Fade((float)Value, Duration, Delay);

{% endhighlight %}

Behavior animations can also be chained and awaited.

{% highlight csharp %}

    Element.Rotate(value: 30f, duration: 0.3).StartAsync();

    await Element.Rotate(value: 30f, duration: 0.3).StartAsync();

    var anim = element.Rotate(30f).Fade(0.5).Blur(5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();

{% endhighlight %}

[Fade Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Fade)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
 
## Example Image

![Fade Behavior animation]({{site.baseurl}}/resources/images/Animations-Fade.gif "Fade Behavior")

## Requirements (Windows 10 Device Family)

| [Device family]("http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp |

## API

* [Fade source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Fade.cs)
* [Fade Behavior API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Fade.htm)
* [Fade Code API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#fadewindowsuixamluielement-associatedobjectsystemdouble-durationsystemdouble-delaysystemsingle-value)

