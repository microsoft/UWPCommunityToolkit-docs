---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Facebook_FacebookService.htm
title: Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService API 
description: API page for Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# FacebookService class

Class for connecting to Facebook.

## Members

The **FacebookService** class has the following types of members:

* [Constructors](#Constructors)

* [Methods](#Methods)

* [Properties](#Properties)

* [Fields](#Fields)

### Constructors

#### contructor

Initializes a new instance of the [FacebookService](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookService.htm) class. Default private constructor.





### Methods

#### Initialize(System.String appId,Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions requiredPermissions,System.String windowsStoreId)

Initialize underlying provider with relevent token information.

##### Parameters



| Name | Description | Type || --- | --- | --- || appId | Application ID (Provided by Facebook developer site) | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || requiredPermissions | List of required required permissions. public_profile and user_posts permissions will be used by default. | [FacebookPermissions](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPermissions.htm) || windowsStoreId | Windows Store SID | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Success or failure. |




#### PostToFeedWithDialogAsync(System.String title,System.String description,System.String link,System.String pictureUrl)

Enables posting data to the timeline using Facebook dialog.

##### Parameters



| Name | Description | Type || --- | --- | --- || title | Title of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || description | Description of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || link | Link contained as part of the post. Cannot be null | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || pictureUrl | URL of a picture attached to this post. Can be null | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Task to support await of async call. |




#### ProcessResultsAsync(System.Collections.Generic.IReadOnlyList(System.Object) results,System.Int32 maxRecords)

Helper method to process pages of results from underlying service instance.

##### Parameters



| Name | Description | Type || --- | --- | --- || results | List of results to process. | System.Collections.Generic.IReadOnlyList(System.Object) || maxRecords | Total upper limit of records to process. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Task to support await of async call. |




#### Initialize(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookOAuthTokens oAuthTokens,Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions requiredPermissions)

Initialize underlying provider with relevent token information.

##### Parameters



| Name | Description | Type || --- | --- | --- || oAuthTokens | Token instance. | [FacebookOAuthTokens](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookOAuthTokens.htm) || requiredPermissions | List of required required permissions. public_profile and user_posts permissions will be used by default. | [FacebookPermissions](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPermissions.htm) || return |Success or failure. |




#### PostPictureToFeedAsync(System.String title,System.String pictureName,Windows.Storage.Streams.IRandomAccessStreamWithContentType pictureStream)

Enables posting a picture to the timeline

##### Parameters



| Name | Description | Type || --- | --- | --- || title | Title of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || pictureName | Picture name. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || pictureStream | Picture stream to upload. | [IRandomAccessStreamWithContentType](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.Streams.IRandomAccessStreamWithContentType) || return |Return ID of the picture |




#### PostToFeedAsync(System.String title,System.String message,System.String description,System.String link,System.String pictureUrl)

Enables direct posting data to the timeline.

##### Parameters



| Name | Description | Type || --- | --- | --- || title | Title of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || message | Message of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || description | Description of the post. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || link | Link contained as part of the post. Cannot be null | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || pictureUrl | URL of a picture attached to this post. Can be null | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Task to support await of async call. |




#### GetUserPictureInfoAsync()

Returns the [FacebookPicture](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPicture.htm) object associated with the logged user

##### Parameters



| Name | Description | Type || --- | --- | --- || return |A [FacebookPicture](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPicture.htm) object |




#### LoginAsync()

Login with set of required requiredPermissions.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |Success or failure. |




#### LogoutAsync()

Log out of the underlying service instance.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |Task to support await of async call. |




#### RequestAsync(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookDataConfig config,System.Int32 maxRecords)

Request list data from service provider based upon a given config / query.

##### Parameters



| Name | Description | Type || --- | --- | --- || config | TwitterDataConfig instance. | [FacebookDataConfig](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookDataConfig.htm) || maxRecords | Upper limit of records to return. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || return |Strongly typed list of data returned from the service. |




### Properties

#### LoggedUser

Gets the current logged user name.





#### WindowsStoreId

Gets a Windows Store ID associated with the current app





#### Instance

Gets public singleton property.





#### Provider

Gets a reference to an instance of the underlying data provider.





### Fields

#### paginatedArray

Reference to paginated array object for handling multiple pages of returned service list data.





#### instance

Private singleton field.





#### permissions

List of permissions required by the app.





#### queryResults

Strongly typed list of service query data.





#### isInitialized

Field for tracking initialization status.




