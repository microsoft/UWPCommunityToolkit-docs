---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Converters_StringFormatConverter.htm
title: Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter API 
description: API page for Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# StringFormatConverter class

This class provides a binding converter to display formatted strings

## Members

The **StringFormatConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Return the formatted string version of the source object.

##### parameters



| name | description | type || --- | --- | --- || value | Object to transform to string. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to be used in the string.Format method. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion (not used). | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Formatted string. |
#### ConvertBack(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Not implemented.

##### parameters



| name | description | type || --- | --- | --- || value | The target data being passed to the source. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to be used in the converter logic. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |The value to be passed to the source object. |