---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_ColorHelper.htm
title: Microsoft.Toolkit.Uwp.ColorHelper API 
description: API page for Microsoft.Toolkit.Uwp.ColorHelper
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ColorHelper class

This class provides static helper methods for colors.

## Members

The **ColorHelper** class has the following types of members:

* [Methods](#Methods)

### Methods

#### ToColor(System.String colorString)

Returns a color based on XAML color string.

##### Parameters



| Name | Description | Type || --- | --- | --- || colorString | The color string. Any format used in XAML should work. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Parsed color |




#### ToHex(Windows.UI.Color color)

Converts a Color value to a string representation of the value in hexadecimal.

##### Parameters



| Name | Description | Type || --- | --- | --- || color | The Color to convert. | [Color](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Color) || return |Returns a string representing the hex value. |




#### ToInt(Windows.UI.Color color)

Returns the color value as a premultiplied Int32 - 4 byte ARGB structure.

##### Parameters



| Name | Description | Type || --- | --- | --- || color | the Color to convert | [Color](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Color) || return |Returns a int representing the color. |




#### ToHsl(Windows.UI.Color color)

Converts an RGBA Color the HSL representation.

##### Parameters



| Name | Description | Type || --- | --- | --- || color | The Color to convert. | [Color](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Color) || return |HslColor. |




#### ToHsv(Windows.UI.Color color)

Converts an RGBA Color the HSV representation.

##### Parameters



| Name | Description | Type || --- | --- | --- || color | Color to convert. | [Color](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Color) || return |HsvColor |




#### FromHsl(System.Double hue,System.Double saturation,System.Double lightness,System.Double alpha)

Returns a Color struct based on HSL model.

##### Parameters



| Name | Description | Type || --- | --- | --- || hue | 0..360 range hue | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || saturation | 0..1 range saturation | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || lightness | 0..1 range lightness | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || alpha | 0..1 alpha | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |A Color object |




#### FromHsv(System.Double hue,System.Double saturation,System.Double value,System.Double alpha)

Returns a Color struct based on HSV model.

##### Parameters



| Name | Description | Type || --- | --- | --- || hue | 0..360 range hue | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || saturation | 0..1 range saturation | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | 0..1 range value | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || alpha | 0..1 alpha | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |A Color object |



