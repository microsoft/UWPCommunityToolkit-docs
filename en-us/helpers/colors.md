---
permalink: /en-US/helpers/colors.htm
title: ColorsHelper utility 
description: Colors helper does commonly needed conversions of color formats
keywords: windows, app, toolkit, UWP, helpers, color, html color, hex color, hsv, hsl
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Colors Helper

The **Colors Helper** lets users convert colors from text names, HTML hex, HSV, or HSL to Windows UI Colors (and back again of course).

## Example

{% highlight csharp %}
	// Be sure to include the using at the top of the file:
	//using Microsoft.Toolkit.Uwp;

	// Given an HTML color, lets convert it to a Windows Color
	Windows.UI.Color color = ColorHelper.ToColor("#3a4ab0");

	// Also works with an Alpha code
	Windows.UI.Color myColor = ColorHelper.ToColor("#ff3a4ab0");

	// Given a color name, lets convert it to a Windows Color
	Windows.UI.Color redColor = "Red".ToColor();
{% endhighlight %}

You can find more examples in our [unit tests](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/UnitTests/Helpers/Test_ColorHelper.cs)

## Platforms

Windows 10 SDK 10586 or higher

## API

* [Color Helper source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/ColorHelper.cs)
* [Color Helper API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_ColorHelper.htm)

