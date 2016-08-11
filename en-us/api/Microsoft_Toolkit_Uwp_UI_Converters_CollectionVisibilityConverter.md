---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Converters_CollectionVisibilityConverter.htm
title: Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter API 
description: API page for Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# CollectionVisibilityConverter class

This class converts a collection size to visibility.

## Members

The **CollectionVisibilityConverter** class has the following types of members:

### Methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

This class return Visibility.Visible if the given collection is not empty or null.

##### Parameters



| Name | Description | Type || --- | --- | --- || value | Collection to convert to Visibility. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference. | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to be used to invert the converter logic. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Visibility.Visible if the collection is not null and not empty |


#### ConvertBack(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Not implemented.

##### Parameters



| Name | Description | Type || --- | --- | --- || value | The target data being passed to the source. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). | [Type](https://msdn.microsoft.com/library/windows/apps/System.Type) || parameter | An optional parameter to be used in the converter logic. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || language | The language of the conversion. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |The value to be passed to the source object. |

