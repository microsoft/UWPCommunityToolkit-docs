---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Core_ExtensionMethods.htm
title: Microsoft.Toolkit.Uwp.Services.Core.ExtensionMethods API 
description: API page for Microsoft.Toolkit.Uwp.Services.Core.ExtensionMethods
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ExtensionMethods class

This class offers general purpose methods.

## Members

The **ExtensionMethods** class has this types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### ToSafeString(System.Object value)

Converts object into string.

##### parameters



| name | description | type || --- | --- | --- || value | Object value. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || return |Returns string value. |


#### DecodeHtml(System.String htmlText)

Decode HTML string.

##### parameters



| name | description | type || --- | --- | --- || htmlText | HTML string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns decoded HTML string. |


#### GetStringValue(Microsoft.Toolkit.Uwp.Services.Bing.BingCountry value)

Converts between country code and country name.

##### parameters



| name | description | type || --- | --- | --- || value | BingCountry enumeration. | [BingCountry](Microsoft_Toolkit_Uwp_Services_Bing_BingCountry.htm) || return |Returns country code. |


### fields

#### RemoveHtmlTagsRegex

Regular expression of HTML tags to remove.


