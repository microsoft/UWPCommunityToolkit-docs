---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException.htm
title: Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException API 
description: API page for Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# RequestFailedException class

Exception for failed requests.

## Members

The **RequestFailedException** class has this types of members

* [constructors](#constructors)

### constructors

#### contructor

Initializes a new instance of the [RequestFailedException](Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException.htm) class. Default constructor.



#### contructor

Initializes a new instance of the [RequestFailedException](Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException.htm) class. Constructor with additional message.

##### parameters



| name | description | type || --- | --- | --- || message | Additional messsage. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### contructor

Initializes a new instance of the [RequestFailedException](Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException.htm) class. Constructor with status code and reason for request failure.

##### parameters



| name | description | type || --- | --- | --- || statusCode | Failure status code. | [HttpStatusCode](https://msdn.microsoft.com/library/windows/apps/Windows.Web.Http.HttpStatusCode) || reason | Failure reason. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### contructor

Initializes a new instance of the [RequestFailedException](Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException.htm) class. Constructor with additional message and inner exception.

##### parameters



| name | description | type || --- | --- | --- || message | Additional message. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || innerException | Reference to inner exception. | [Exception](https://msdn.microsoft.com/library/windows/apps/System.Exception) |

