
# IOAuthDataService<T1><T2><T3><T4> class

Generic interface that all deployed service providers implement.

## Members

The **IOAuthDataService<T1><T2><T3><T4>** class has this types of members

* [methods](#methods)

### methods

#### Initialize(T3 oAuthTokens)

Initialize the provider with relevant oAuthTokens.

##### parameters



| name | description | type |
| --- | --- | --- |
| oAuthTokens | Instantiated oAuthTokens. | T3 |
| return |Success or failure. |

#### LoginAsync()

Log in to the underlying data service provider.

##### parameters



| name | description | type |
| --- | --- | --- |
| return |Returns success or failure indicator. |
