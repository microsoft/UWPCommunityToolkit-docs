---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Bing_BingService.htm
title: Microsoft.Toolkit.Uwp.Services.Bing.BingService API 
description: API page for Microsoft.Toolkit.Uwp.Services.Bing.BingService
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# BingService class

Class for connecting to Bing.

## Members

The **BingService** class has the following types of members:

* [Constructors](#Constructors)

* [Methods](#Methods)

* [Properties](#Properties)

* [Fields](#Fields)

### Constructors

#### contructor

Initializes a new instance of the [BingService](Microsoft_Toolkit_Uwp_Services_Bing_BingService.htm) class. Default private constructor.



### Methods

#### RequestAsync(Microsoft.Toolkit.Uwp.Services.Bing.BingSearchConfig config,System.Int32 maxRecords)

Request list data from service provider based upon a given config / query.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | BingSearchConfig instance. | [BingSearchConfig](Microsoft_Toolkit_Uwp_Services_Bing_BingSearchConfig.htm) || maxRecords | Upper limit of records to return. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Strongly typed list of data returned from the service. |


### Properties

#### Instance

Gets public singleton property.



#### Provider

Gets a reference to an instance of the underlying data provider.



### Fields

#### bingDataProvider

Private singleton field for BingDataProvider.



#### instance

Private singleton field.


