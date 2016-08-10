---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_OAuth_OAuthEncoder.htm
title: Microsoft.Toolkit.Uwp.Services.OAuth.OAuthEncoder API 
description: API page for Microsoft.Toolkit.Uwp.Services.OAuth.OAuthEncoder
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# OAuthEncoder class

OAuth Encoder.

## Members

The **OAuthEncoder** class has the following types of members:

* [Methods](#Methods)

### Methods

#### UrlEncode(System.String value)

Url encode input string.

##### Parameters



| Name | Description | Type || --- | --- | --- || value | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Encoded string. |


#### UrlEncode(System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) parameters)

Encode list of parameters.

##### Parameters



| Name | Description | Type || --- | --- | --- || parameters | List of parameters. | System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) || return |Encoded string of parameters. |


#### GenerateHash(System.String input,System.String key)

Generate hash from input string and key.

##### Parameters



| Name | Description | Type || --- | --- | --- || input | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || key | Key string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Hash string. |

