---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Converters_StringVisibilityConverter.htm
title: Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter API 
description: API page for Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# StringVisibilityConverter class

This class converts a string value into a Visibility value (if the value is null or empty returns a collapsed value).

## Members

The **StringVisibilityConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Converts a string value into a Visibility value by testing if string is null or empty.

##### parameters



| name | description | type || --- | --- | --- || value | The source data being passed to the target. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference. | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to invert the converter logic. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Visibility value. |
#### ConvertBack(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Not implemented.

##### parameters



| name | description | type || --- | --- | --- || value | The target data being passed to the source. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to be used in the converter logic. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |The value to be passed to the source object. |
##### exceptions


| type | description || --- | --- || exception type | |