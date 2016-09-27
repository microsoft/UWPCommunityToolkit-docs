---
permalink: /en-US/helpers/converters.htm
title: Code Helper Converters 
description: Commonly used converters that allow the data to be modified as it passes through the binding engine.
keywords: windows, app, toolkit, UWP, helpers, xaml
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Converters

Commonly used **converters** that allow the data to be modified as it passes through the binding engine.

| Converter | Purpose |
| --- | --- |
|BoolToObjectConverter | Converts a boolean value into an object. The converted value is selected between the values of TrueValue and FalseValue properties |
|BoolToVisibilityConverter | Converts a boolean value into a Visibility enumeration |
|CollectionVisibilityConverter | Converts a collection into a Visibility enumeration (Visible if the given collection is not empty or null) |
|EmptyCollectionToObjectConverter | Converts a collection into an object. The converted value is selected between the values of EmptyValue and NotEmptyValue properties |
|EmptyStringToObjectConverter | Converts a string into an object. The converted value is selected between the values of EmptyValue and NotEmptyValue properties |
|StringFormatConverter | Converts a source object to the formatted string version |
|StringVisibilityConverter | Converts a string value into a Visibility enumeration (if the value is null or empty returns a collapsed value) |

## Example
`BoolToObjectConverter` can be used to generalize the behavior of `BoolToVisibilityConverter` by allowing to pass the two values it can return.
You can use it to switch Visibility by declaring it :

{% highlight xml %}

<converters:BoolToObjectConverter x:Key="BoolToVisibilityConverter" TrueValue="Visible" FalseValue="Collapsed"/>

{% endhighlight %}

and using it like that :

{% highlight xml %}

<Image Visibility="{x:Bind Path=MyBoolValue, Converter={StaticResource BoolToVisibilityConverter}}" />

{% endhighlight %}

It can also be used to switch between two values of brush.

Note : you can use a resource for the brush or pass the color string and have it converted to a brush automatically.

{% highlight xml %}

<converters:BoolToObjectConverter x:Key="BoolToBrushConverter" TrueValue="Green" FalseValue="{StaticResource NopeBrush}" />

{% endhighlight %}

and using it like that :

{% highlight xml %}

<Border Background="{x:Bind Path=MyBoolValue, Converter={StaticResource BoolToBrushConverter}}" />

{% endhighlight %}

An other example is to switch between two images by specifying their source :

{% highlight xml %}

<converters:BoolToObjectConverter x:Key="BoolToImageConverter" TrueValue="ms-appx:///Assets/Yes.png" FalseValue="ms-appx:///Assets/No.png" />

{% endhighlight %}

and using it like that :

{% highlight xml %}

<Image Source="{x:Bind Path=MyBoolValue, Converter={StaticResource BoolToImageConverter}}" />

{% endhighlight %}

`EmptyCollectionToObjectConverter` and `EmptyStringToObjectConverter` work the same way.

## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp |

## API

* [Converters source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.UI/Converters)


