
# HttpRequest class

Core HttpRequest class.

## Members

The **HttpRequest** class has this types of members

* [methods](#methods)

### methods

#### DownloadAsync(Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Downloads data with specified settings.

##### parameters



| name | description | type |
| --- | --- | --- |
| settings | HttpRequestSettings instance. | Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings |
| return |Returns HttpRequestResult instance. |

#### AddRequestHeaders(Windows.Web.Http.HttpClient httpClient,Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings settings)

Add default request headers to HttpClient object.

##### parameters



| name | description | type |
| --- | --- | --- |
| httpClient | HttpClient instance. | Windows.Web.Http.HttpClient |
| settings | HttpRequestSettings instance. | Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings |

#### FixInvalidCharset(Windows.Web.Http.HttpResponseMessage response)

Fix invalid charset returned by some web sites.

##### parameters



| name | description | type |
| --- | --- | --- |
| response | HttpResponseMessage instance. | Windows.Web.Http.HttpResponseMessage |
