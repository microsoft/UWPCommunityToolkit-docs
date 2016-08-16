---
permalink: /en-US/animations/rotate.htm
title: Rotate XAML and Code Animation
description: The Rotate animation behavior allows users to modify and animate the control's rotation 
keywords: windows, app, toolkit, Rotation animation, Rotate, XAML, UWP, animate rotation, behavior
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Rotate

The **Rotate animation behavior** allows users to modify and animate the control's rotation. Parameters include: angle values, time, pause delay, duration, and diameter.

## Syntax

{% highlight xml %}

   <behaviors:Rotate x:Name="RotateBehavior" 
				Value="180"
				CenterX="0.0" 
				CenterY="0.0" 
				Duration="1.5" 
				Delay="0.5" 
				AutomaticallyStart="True"/>
  </behaviors:Rotate>

{% endhighlight %}

or directly from code:

{% highlight csharp %}

    MyRectangle.Rotate(
                value: (float)Value,
                centerX: (float)CenterX,
                centerY: (float)CenterY,
                duration: Duration,
                delay: Delay);

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

[Rotate Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Rotate)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.

## Example Image

![Rotate Behavior animation]({{site.baseurl}}/resources/images/Animations-Rotate.gif "Rotate Behavior")

## Requirements (Windows 10 Device Family)

| [Device family]("http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp |

## API

* [Rotate source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Rotate.cs)
* [Rotate Behavior API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Rotate.htm)
* [Rotate Code API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#rotatemicrosofttoolkituwpuianimationsanimationset-animationsetsystemdouble-durationsystemdouble-delaysystemsingle-valuesystemsingle-centerxsystemsingle-centerysystemsingle-centerz)

