
# FacebookService class

Class for connecting to Facebook.

## Members

The **FacebookService** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [FacebookService](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookService.md) class. Default private constructor.

### methods

#### Initialize(System.String appId,Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions requiredPermissions,System.String windowsStoreId)

Initialize underlying provider with relevent token information.

##### parameters



| name | description | type || --- | --- | --- || appId | Application ID (Provided by Facebook developer site) | System.String || requiredPermissions | List of required required permissions. public_profile and user_posts permissions will be used by default. | Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions || windowsStoreId | Windows Store SID | System.String || return |Success or failure. |
#### PostToFeedWithDialogAsync(System.String title,System.String description,System.String link,System.String pictureUrl)

Enables posting data to the timeline using Facebook dialog.

##### parameters



| name | description | type || --- | --- | --- || title | Title of the post. | System.String || description | Description of the post. | System.String || link | Link contained as part of the post. Cannot be null | System.String || pictureUrl | URL of a picture attached to this post. Can be null | System.String || return |Task to support await of async call. |
#### ProcessResultsAsync(System.Collections.Generic.IReadOnlyList(System.Object) results,System.Int32 maxRecords)

Helper method to process pages of results from underlying service instance.

##### parameters



| name | description | type || --- | --- | --- || results | List of results to process. | System.Collections.Generic.IReadOnlyList(System.Object) || maxRecords | Total upper limit of records to process. | System.Int32 || return |Task to support await of async call. |
#### Initialize(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookOAuthTokens oAuthTokens,Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions requiredPermissions)

Initialize underlying provider with relevent token information.

##### parameters



| name | description | type || --- | --- | --- || oAuthTokens | Token instance. | Microsoft.Toolkit.Uwp.Services.Facebook.FacebookOAuthTokens || requiredPermissions | List of required required permissions. public_profile and user_posts permissions will be used by default. | Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions || return |Success or failure. |
#### PostPictureToFeedAsync(System.String title,System.String pictureName,Windows.Storage.Streams.IRandomAccessStreamWithContentType pictureStream)

Enables posting a picture to the timeline

##### parameters



| name | description | type || --- | --- | --- || title | Title of the post. | System.String || pictureName | Picture name. | System.String || pictureStream | Picture stream to upload. | Windows.Storage.Streams.IRandomAccessStreamWithContentType || return |Return ID of the picture |
#### PostToFeedAsync(System.String title,System.String message,System.String description,System.String link,System.String pictureUrl)

Enables direct posting data to the timeline.

##### parameters



| name | description | type || --- | --- | --- || title | Title of the post. | System.String || message | Message of the post. | System.String || description | Description of the post. | System.String || link | Link contained as part of the post. Cannot be null | System.String || pictureUrl | URL of a picture attached to this post. Can be null | System.String || return |Task to support await of async call. |
#### GetUserPictureInfoAsync()

Returns the [FacebookPicture](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPicture.md) object associated with the logged user

##### parameters



| name | description | type || --- | --- | --- || return |A [FacebookPicture](Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPicture.md) object |
#### LoginAsync()

Login with set of required requiredPermissions.

##### parameters



| name | description | type || --- | --- | --- || return |Success or failure. |
#### LogoutAsync()

Log out of the underlying service instance.

##### parameters



| name | description | type || --- | --- | --- || return |Task to support await of async call. |
#### RequestAsync(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookDataConfig config,System.Int32 maxRecords)

Request list data from service provider based upon a given config / query.

##### parameters



| name | description | type || --- | --- | --- || config | TwitterDataConfig instance. | Microsoft.Toolkit.Uwp.Services.Facebook.FacebookDataConfig || maxRecords | Upper limit of records to return. | System.Int32 || return |Strongly typed list of data returned from the service. |
### properties

#### LoggedUser

Gets the current logged user name.

#### WindowsStoreId

Gets a Windows Store ID associated with the current app

#### Instance

Gets public singleton property.

#### Provider

Gets a reference to an instance of the underlying data provider.

### fields

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
