
# DataProviderBase<T1> class

Base class for data providers in this library.

## Members

The **DataProviderBase<T1>** class has this types of members

* [methods](#methods)

### methods

#### LoadDataAsync``1(T0 config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Load data from provider endpoint.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [T0](https://msdn.microsoft.com/library/windows/apps/T0) || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Parser to use for results. | [IParser(TT0)](Microsoft_Toolkit_Uwp_Services_IParser_TT0_.md) || return |Strong typed list of results. |
#### GetDataAsync``1(T0 config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Derived classes will have to implement this method to return provider data

##### parameters



| name | description | type || --- | --- | --- || config | Configuration to use | [T0](https://msdn.microsoft.com/library/windows/apps/T0) || maxRecords | Maximum number of records to return | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Parser to use | [IParser(TT0)](Microsoft_Toolkit_Uwp_Services_IParser_TT0_.md) || return |List of data |
#### ValidateConfig(T0 config)

Method provided by derived class to validate specified configuration

##### parameters



| name | description | type || --- | --- | --- || config | Configuration to validate | [T0](https://msdn.microsoft.com/library/windows/apps/T0) |