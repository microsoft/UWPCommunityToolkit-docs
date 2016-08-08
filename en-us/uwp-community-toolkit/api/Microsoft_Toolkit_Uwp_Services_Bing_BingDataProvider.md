
# BingDataProvider class

Data Provider for connecting to Bing service.

## Members

The **BingDataProvider** class has this types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Wrapper around REST API for making data request.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.md) || maxRecords | Upper limit for records returned. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | IParser implementation for interpreting results. | [IParser(TT0)](Microsoft_Toolkit_Uwp_Services_IParser_TT0_.md) || return |Strongly typed list of results. |
#### GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config)

Returns parser implementation for specified configuration.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.md) || return |Strongly typed parser. |
#### ValidateConfig(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config)

Check validity of configuration.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.md) |
### fields

#### BaseUrl

Base Url for service.
