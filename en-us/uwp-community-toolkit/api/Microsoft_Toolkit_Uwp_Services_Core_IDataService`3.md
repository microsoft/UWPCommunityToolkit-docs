
# IDataService<T1><T2><T3> class

Generic interface that all deployed service providers implement.

## Members

The **IDataService<T1><T2><T3>** class has this types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### RequestAsync(T2 config,System.Int32 maxRecords)

Makes a request for a list of data from the given service provider.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Describes the query on the list data request. | T2 |
| maxRecords | Specifies an upper limit to the number of records returned. | System.Int32 |
| return |Returns a strongly typed list of results from the service. |

### properties

#### Provider

Gets the underlying data service provider.
