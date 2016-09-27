---
permalink: /en-US/animations/scale.htm
title: Scale XAML and Code Animation
description: The Scale animation behavior lets users change a scale by increasing or decreasing through animation 
keywords: windows, app, toolkit, Scale, scale behavior, scale, XAML, UWP, animation
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Scale

The **Scale animation behavior** allows you to change a control's scale by increasing or decreasing the control through animation. For example, perhaps you want an entry field to change size when the user taps it.

## Syntax

{% highlight xml %}

<interactivity:Interaction.Behaviors>
    <behaviors:Scale x:Name="Scale" 
                     ScaleX="2.0"
                     ScaleY="2.0"
                     CenterX="0.0"
                     CenterY="0.0" 
                     Duration="1.0" 
                     Delay="0.5" 
                     AutomaticallyStart="True"/>
</interactivity:Interaction.Behaviors>

{% endhighlight %}

or directly from code:

{% highlight csharp %}

MyRectangle.Scale(
                scaleX: (float)ScaleX,
                scaleY: (float)ScaleY,
                centerX: (float)CenterX,
                centerY: (float)CenterY,
                duration: Duration,
                delay: Delay);                

{% endhighlight %}

Behaviors can also be chained and awaited.

{% highlight csharp %}

    Element.Rotate(value: 30f, duration: 0.3).StartAsync();

    await Element.Rotate(value: 30f, duration: 0.3).StartAsync();

    var anim = element.Rotate(30f).Fade(0.5).Blur(5);
    anim.SetDurationForAll(2);
    anim.Completed += animation_completed;
    anim.StartAsync();

    anim.Stop();

{% endhighlight %}


[Scale Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Scale)
 
Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.

## Example Image

![Scale Behavior animation]({{site.baseurl}}/resources/images/Animations-Scale.gif "Scale Behavior")

## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp.UI.Animations |

## API

* [Scale source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Scale.cs)

