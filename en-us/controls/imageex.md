---
permalink: /en-US/controls/imageex.htm
title: ImageEx XAML Control
description: The ImageEx Control downloads images asynchronously while showing a loading indicator
keywords: windows, app, toolkit, ImageEx, loading indicator, ImageExControl, UWP
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# ImageEx XAML Control

The **ImageEx Control** downloads images asynchronously, while showing a loading indicator. Source images are then stored in the application's local cache to preserve resources and load time. ImageEx also extends the default *Image* Platform control to improve performance through caching. 
You can also use a placeholder image that will be displayed will loading the main image.
 
## Syntax

{% highlight xml %}

<controls:ImageEx Name="ImageExControl"
	IsCacheEnabled="True"
	PlaceholderSource="/assets/thumbnails/thumbnails.png"
	Source="/assets/bigPicture.png"
/> 

{% endhighlight %}

## Example Image

![ImageEx animation]({{site.baseurl}}/resources/images/Controls-ImageEx.gif "ImageEx")

## Example Code

[ImageExControl Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/ImageEx)

## Default Template 

[ImageExControl XAML File](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/ImageEx) is the XAML template used in the toolkit for the default styling.

## Requirements (Windows 10 Device Family)

| [Device family]("http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp.UI.Controls |

## API

* [ImageEx source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI.Controls/ImageEx)
* [ImageEx API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_UI_Controls_ImageEx.htm)

