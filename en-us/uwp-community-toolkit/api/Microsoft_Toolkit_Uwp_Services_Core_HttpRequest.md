
# HttpRequest class

Core HttpRequest class.

## Members

The **HttpRequest** class has this types of members

* [methods](#methods)

### methods

#### DownloadAsync(Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Downloads data with specified settings.

##### parameters



| name | description | type || --- | --- | --- || settings | HttpRequestSettings instance. | [HttpRequestSettings](Microsoft_Toolkit_Uwp_Services_Core_HttpRequestSettings.md) || return |Returns HttpRequestResult instance. |
#### AddRequestHeaders(Windows.Web.Http.HttpClient httpClient,Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Add default request headers to HttpClient object.

##### parameters



| name | description | type || --- | --- | --- || httpClient | HttpClient instance. | [HttpClient](https://msdn.microsoft.com/library/windows/apps/Windows.Web.Http.HttpClient) || settings | HttpRequestSettings instance. | [HttpRequestSettings](Microsoft_Toolkit_Uwp_Services_Core_HttpRequestSettings.md) |
#### FixInvalidCharset(Windows.Web.Http.HttpResponseMessage response)

Fix invalid charset returned by some web sites.

##### parameters



| name | description | type || --- | --- | --- || response | HttpResponseMessage instance. | [HttpResponseMessage](https://msdn.microsoft.com/library/windows/apps/Windows.Web.Http.HttpResponseMessage) |