---
permalink: /en-US/controls/radialgauge.htm
title: RadialGauge XAML Control
description: The RadialGauge Control displays a value in a certain range using a needle on a circular face
keywords: windows, app, toolkit, RadialGauge, gauge control, XAML, UWP, Radial, circular
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# RadialGauge XAML Control

The **Radial Gauge Control** displays a value in a certain range using a needle on a circular face. This control will make data visualizations and dashboards more engaging with rich style and interactivity. 
The round gauges are powerful, easy to use, and highly configurable to present dashboards capable of displaying clocks, industrial panels, automotive dashboards, and even aircraft cockpits.

## How it works

The Radial Gauge supports animated transitions between configuration states. The control gradually animates as it redraws changes to the needle, needle position, scale range, color range, and more. 

## Syntax

{% highlight xml %}

<controls:RadialGauge x:Name="RadialGaugeControl"
	Column="1"
	Value="70"
	Minimum="0"
	Maximum="180"
	TickSpacing="20"
	ScaleWidth="26"
	Unit="Units"
	TickBrush="Gainsboro"
	ScaleTickBrush="{ThemeResource ApplicationPageBackgroundThemeBrush}"
	UnitBrush="Black"
	ValueBrush="Black" 
	NeedleWidth="5" 
	TickLength="18">
</controls:RadialGauge>

{% endhighlight %}

## Example Image

![RadialGauge animation]({{site.baseurl}}/resources/images/Controls-RadialGauge.gif "RadialGauge")

## Example Code

[RadialGauge Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/RadialGauge)

## Default Template 

[RadialGauge XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Controls/RadialGauge/RadialGauge.xaml) is the XAML template used in the toolkit for the default styling.

## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp.UI.Controls |

## API

* [RadialGauge source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/RadialGauge)
* [RadialGauge API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Controls_RadialGauge.htm)

