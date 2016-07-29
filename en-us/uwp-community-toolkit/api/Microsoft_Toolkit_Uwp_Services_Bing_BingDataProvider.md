
# Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider class

Data Provider for connecting to Bing service.

## Members

The **Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider** namespace has these types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider.GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Wrapper around REST API for making data request.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| maxRecords | Upper limit for records returned. |

| parser | IParser implementation for interpreting results. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider.GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig)

Returns parser implementation for specified configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider.ValidateConfig(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig)

Check validity of configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

### fields

#### Microsoft.Toolkit.Uwp.Services.Bing.BingDataProvider.BaseUrl

Base Url for service.
