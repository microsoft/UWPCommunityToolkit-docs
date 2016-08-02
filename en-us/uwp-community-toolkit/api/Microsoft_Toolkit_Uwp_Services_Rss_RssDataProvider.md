
# RssDataProvider class

Data Provider for connecting to RSS feed.

## Members

The **RssDataProvider** class has this types of members

* [methods](#methods)

### methods

#### GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Wrapper around RSS endpoint for making data request.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Query configuration. | Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig |
| maxRecords | Upper limit for records returned. | System.Int32 |
| parser | IParser implementation for interpreting results. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) |
| return |Strongly typed list of results. |

#### GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig config)

Returns parser implementation for specified configuration.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Query configuration. | Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig |
| return |Strongly typed parser. |

#### ValidateConfig(Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig config)

Check validity of configuration.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Query configuration. | Microsoft.Toolkit.Uwp.Services.Rss.RssDataConfig |
