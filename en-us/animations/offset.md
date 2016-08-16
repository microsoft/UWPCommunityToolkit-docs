---
permalink: /en-US/animations/offset.htm
title: Offset XAML and Code Animation
description: The Offset animation behavior gets the number of pixels, from the origin of the associated control, then offsets the control 
keywords: windows, app, toolkit, Offset, behavior, animation behavior, offset, XAML, UWP, snapline
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Offset

The **Offset animation behavior** gets the number of pixels, from the origin of the associated control, then offsets the control. 

## Syntax

{% highlight xml %}

<behaviors:Offset x:Name="OffsetBehavior" 
	OffsetX="25.0" 
	OffsetY="25.0"
	Duration="2.0" 
	Delay="0.5" 
	AutomaticallyStart="True"/>
</behaviors:Offset>
{% endhighlight %}

or directly from code:

{% highlight csharp %}

MyRectangle.Offset(
                offsetX: (float)OffsetX,
                offsetY: (float)OffsetY
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

[Offset Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Offset)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
 
## Example Image

![Offset Behavior animation]({{site.baseurl}}/resources/images/Animations-Offset.gif "Offset Behavior")

## Platforms

Windows 10 SDK 10586 or higher

## API

* [Offset source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/Offset.cs)
* [Offset Behavior API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_Offset.htm)
* [Offset Code API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm#offsetwindowsuixamluielement-associatedobjectsystemdouble-durationsystemdouble-delaysystemsingle-offsetxsystemsingle-offsetysystemsingle-offsetz)

