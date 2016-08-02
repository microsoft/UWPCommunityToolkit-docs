
# DataProviderBase<T1><T2> class

Base class for data providers in this library.

## Members

The **DataProviderBase<T1><T2>** class has this types of members

* [methods](#methods)

### methods

#### LoadDataAsync(T0 config,System.Int32 maxRecords)

Load data from provider endpoint.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Query configuration. | T0 |
| maxRecords | Upper record limit. | System.Int32 |
| return |List of strong typed objects. |

#### GetDefaultParser(T0 config)

Default parser abstract method.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | Query configuration object. | T0 |
| return |Strong typed default parser. |
