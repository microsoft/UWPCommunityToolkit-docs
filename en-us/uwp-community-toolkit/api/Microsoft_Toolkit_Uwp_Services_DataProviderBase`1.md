
# Microsoft.Toolkit.Uwp.Services.DataProviderBase`1 class

Base class for data providers in this library.

## Members

The **Microsoft.Toolkit.Uwp.Services.DataProviderBase`1** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.DataProviderBase`1.LoadDataAsync``1(`0,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Load data from provider endpoint.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| maxRecords | Upper record limit. |

| parser | Parser to use for results. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.DataProviderBase`1.GetDataAsync``1(`0,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Derived classes will have to implement this method to return provider data

##### parameters




| name | description |

| --- | --- |

| config | Configuration to use |

| maxRecords | Maximum number of records to return |

| parser | Parser to use |

| return |L |

#### Microsoft.Toolkit.Uwp.Services.DataProviderBase`1.ValidateConfig(`0)

Method provided by derived class to validate specified configuration

##### parameters




| name | description |

| --- | --- |

| config | Configuration to validate |
