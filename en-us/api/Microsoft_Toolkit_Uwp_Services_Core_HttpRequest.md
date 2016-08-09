---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Core_HttpRequest.htm
title: Microsoft.Toolkit.Uwp.Services.Core.HttpRequest API 
description: API page for Microsoft.Toolkit.Uwp.Services.Core.HttpRequest
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# HttpRequest class

Core HttpRequest class.

## Members

The **HttpRequest** class has this types of members

* [methods](#methods)

### methods

#### DownloadAsync(Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Downloads data with specified settings.

##### parameters



| name | description | type || --- | --- | --- || settings | HttpRequestSettings instance. | [HttpRequestSettings](Microsoft_Toolkit_Uwp_Services_Core_HttpRequestSettings.htm) || return |Returns HttpRequestResult instance. |
#### AddRequestHeaders(Windows.Web.Http.HttpClient httpClient,Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Add default request headers to HttpClient object.

##### parameters



| name | description | type || --- | --- | --- || httpClient | HttpClient instance. | [HttpClient](https://msdn.microsoft.com/library/windows/apps/Windows.Web.Http.HttpClient) || settings | HttpRequestSettings instance. | [HttpRequestSettings](Microsoft_Toolkit_Uwp_Services_Core_HttpRequestSettings.htm) |
#### FixInvalidCharset(Windows.Web.Http.HttpResponseMessage response)

Fix invalid charset returned by some web sites.

##### parameters



| name | description | type || --- | --- | --- || response | HttpResponseMessage instance. | [HttpResponseMessage](https://msdn.microsoft.com/library/windows/apps/Windows.Web.Http.HttpResponseMessage) |