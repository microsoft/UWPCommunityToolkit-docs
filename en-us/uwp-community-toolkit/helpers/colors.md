---
permalink: /en-US/helpers/colors.html
title: ColorsHelper utility from UWP Community Toolkit
description: Colors helper does commonly needed conversions of color formats
keywords: windows, app, toolkit, UWP, helpers, color, html color, hex color, hsv, hsl
layout: default
search.product: eADQiWindows 10XVcnh
---

# Colors Helper
The **Colors Helper** lets users convert colors from text names, html hex, hsv, or hsl to Windows UI Colors (and back again of course).

## Example

**NOTE** There is no UI for this helper.  It is a C# helper without a visual component.

```C#

	// Be sure to include the using at the top of the file:
	//using Microsoft.Windows.Toolkit;

	// Given an HTML color, lets convert it to a Windows Color
	Windows.UI.Color color = ColorHelper.ToColor("#3a4ab0");

	// Also works with an Alpha code
    Windows.UI.Color myColor = ColorHelper.ToColor("#ff3a4ab0");

	// Given a color name, lets convert it to a Windows Color
	Windows.UI.Color redColor = "Red".ToColor();


```

## Platforms

Windows 10 SDK 10240 or higher

## API

```C#
//
// Summary:
//     Returns a Color struct based on HSL model.
//
// Parameters:
//   hue:
//     0..360 range hue
//
//   saturation:
//     0..1 range saturation
//
//   lightness:
//     0..1 range lightness
//
//   alpha:
//     0..1 alpha
//
// Returns:
//     A Color object

public static Color FromHsl(double hue, double saturation, double lightness, double alpha = 1);

//
// Summary:
//     Returns a Color struct based on HSV model.
//
// Parameters:
//   hue:
//     0..360 range hue
//
//   saturation:
//     0..1 range saturation
//
//   value:
//     0..1 range value
//
//   alpha:
//     0..1 alpha
//
// Returns:
//     A Color object

public static Color FromHsv(double hue, double saturation, double value, double alpha = 1);

//
// Summary:
//     Returns a color based on XAML color string.
//
// Parameters:
//   colorString:
//     The color string. Any format used in XAML should work.
//
// Returns:
//     Parsed color

public static Color ToColor(this string colorString);

//
// Summary:
//     Converts a Color value to a string representation of the value in hexadecimal.
//
// Parameters:
//   color:
//     The Color to convert.
//
// Returns:
//     Returns a string representing the hex value.

public static string ToHex(this Color color);

//
// Summary:
//     Converts an RGBA Color the HSL representation.
//
// Parameters:
//   color:
//     The Color to convert.
//
// Returns:
//     HslColor.

public static HslColor ToHsl(this Color color);

//
// Summary:
//     Converts an RGBA Color the HSV representation.
//
// Parameters:
//   color:
//     Color to convert.
//
// Returns:
//     HsvColor

public static HsvColor ToHsv(this Color color);

//
// Summary:
//     Returns the color value as a premultiplied Int32 - 4 byte ARGB structure.
//
// Parameters:
//   color:
//     the Color to convert
//
// Returns:
//     Returns a int representing the color.

public static int ToInt(this Color color);

```
