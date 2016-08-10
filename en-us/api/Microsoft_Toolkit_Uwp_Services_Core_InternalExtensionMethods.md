---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Core_InternalExtensionMethods.htm
title: Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods API 
description: API page for Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# InternalExtensionMethods class

This class offers general purpose methods.

## Members

The **InternalExtensionMethods** class has this types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### Truncate(System.String value,System.Int32 length)

Truncates the specified string to the specified length.

##### parameters



| name | description | type || --- | --- | --- || value | The string to be truncated. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || length | The maximum length. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Truncated string. |


#### Truncate(System.String value,System.Int32 length,System.Boolean ellipsis)

Truncates the specified string to the specified length.

##### parameters



| name | description | type || --- | --- | --- || value | The string to be truncated. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || length | The maximum length. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || ellipsis | if set to  add a text ellipsis. | [Boolean](https://msdn.microsoft.com/library/windows/apps/System.Boolean) || return |Truncated string. |


#### FixHtml(System.String html)

Applies regular expressions to string of HTML to remove comments, scripts, styles.

##### parameters



| name | description | type || --- | --- | --- || html | HTML string to fix | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Fixed HTML string |


### fields

#### RemoveCommentsRegex

Regular expression for removing comments.



#### RemoveScriptsRegex

Regular expression for removing scripts.



#### RemoveStylesRegex

Regular expression for removing styles.


