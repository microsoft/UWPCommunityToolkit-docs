
# BingService class

Class for connecting to Bing.

## Members

The **BingService** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [BingService](Microsoft_Toolkit_Uwp_Services_Bing_BingService.md) class. Default private constructor.

### methods

#### RequestAsync(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config,System.Int32 maxRecords)

Request list data from service provider based upon a given config / query.

##### parameters



| name | description | type || --- | --- | --- || config | TwitterDataConfig instance. | Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig || maxRecords | Upper limit of records to return. | System.Int32 || return |Strongly typed list of data returned from the service. |
### properties

#### Instance

Gets public singleton property.

#### Provider

Gets a reference to an instance of the underlying data provider.

### fields

#### bingDataProvider

Private singleton field for BingDataProvider.

#### instance

Private singleton field.
