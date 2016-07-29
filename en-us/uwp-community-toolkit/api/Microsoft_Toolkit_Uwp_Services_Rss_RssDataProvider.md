
# Microsoft.Toolkit.Uwp.Services.Rss.RssDataProvider class

Data Provider for connecting to RSS feed.

## Members

The **Microsoft.Toolkit.Uwp.Services.Rss.RssDataProvider** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.Rss.RssDataProvider.GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Wrapper around RSS endpoint for making data request.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| maxRecords | Upper limit for records returned. |

| parser | IParser implementation for interpreting results. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssDataProvider.GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig)

Returns parser implementation for specified configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Rss.RssDataProvider.ValidateConfig(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig)

Check validity of configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |
