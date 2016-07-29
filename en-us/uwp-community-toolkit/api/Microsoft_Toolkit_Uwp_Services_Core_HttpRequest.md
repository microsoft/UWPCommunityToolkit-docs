
# Microsoft.Toolkit.Uwp.Services.Core.HttpRequest class

Core HttpRequest class.

## Members

The **Microsoft.Toolkit.Uwp.Services.Core.HttpRequest** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.Core.HttpRequest.DownloadAsync(Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings)

Downloads data with specified settings.

##### parameters




| name | description |

| --- | --- |

| settings | HttpRequestSettings instance. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Core.HttpRequest.AddRequestHeaders(Windows.Web.Http.HttpClient,Microsoft.Toolkit.Uwp.Services.Core.HttpRequestSettings)

Add default request headers to HttpClient object.

##### parameters




| name | description |

| --- | --- |

| httpClient | HttpClient instance. |

| settings | HttpRequestSettings instance. |

#### Microsoft.Toolkit.Uwp.Services.Core.HttpRequest.FixInvalidCharset(Windows.Web.Http.HttpResponseMessage)

Fix invalid charset returned by some web sites.

##### parameters




| name | description |

| --- | --- |

| response | HttpResponseMessage instance. |
