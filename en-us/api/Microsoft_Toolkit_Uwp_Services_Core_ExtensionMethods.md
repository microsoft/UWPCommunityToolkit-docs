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

The **ExtensionMethods** class has the following types of members:

* [Methods](#Methods)

* [Fields](#Fields)

### Methods

#### ToSafeString(System.Object value)

Converts object into string.

##### Parameters



| Name | Description | Type || --- | --- | --- || value | Object value. | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) || return |Returns string value. |




#### DecodeHtml(System.String htmlText)

Decode HTML string.

##### Parameters



| Name | Description | Type || --- | --- | --- || htmlText | HTML string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns decoded HTML string. |




#### GetStringValue(Microsoft.Toolkit.Uwp.Services.Bing.BingCountry value)

Converts between country code and country name.

##### Parameters



| Name | Description | Type || --- | --- | --- || value | BingCountry enumeration. | [BingCountry](Microsoft_Toolkit_Uwp_Services_Bing_BingCountry.htm) || return |Returns country code. |




### Fields

#### RemoveHtmlTagsRegex

Regular expression of HTML tags to remove.




