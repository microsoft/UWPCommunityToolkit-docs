
# Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService class

Class for connecting to Facebook.

## Members

The **Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.#ctor

Initializes a new instance of the [FacebookService](T_Microsoft_Toolkit_Uwp_Services_Facebook_FacebookService) class.            Default private constructor.

### methods

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.PostPictureToFeedAsync(System.String,System.String,Windows.Storage.Streams.IRandomAccessStreamWithContentType,System.Boolean)

Enables posting a picture to the timeline

##### parameters




| name | description |

| --- | --- |

| title | Title of the post. |

| pictureName | Picture name. |

| pictureStream | Picture stream to upload. |

| published | Define if picture will be hidden or public. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.PublishPictureAsync(System.String)

Publish a picture previously posted as hidden.

##### parameters




| name | description |

| --- | --- |

| pictureId | Id of the picture. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.GetPictureLinkAsync(System.String)

Get link to the page where the picture was posted

##### parameters




| name | description |

| --- | --- |

| pictureId | Id of the picture. |

| return |L |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.Initialize(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookOAuthTokens)

Initialize underlying provider with relevent token information.

##### parameters




| name | description |

| --- | --- |

| oAuthTokens | Token instance. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.Initialize(System.String,Microsoft.Toolkit.Uwp.Services.Facebook.FacebookPermissions,System.String)

Initialize underlying provider with relevent token information.

##### parameters




| name | description |

| --- | --- |

| appId | Application ID (Provided by Facebook developer site) |

| requiredPermissions | List of required required permissions. public_profile and user_posts permissions will be used by default. |

| windowsStoreId | Windows Store SID |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.ProcessResultsAsync(System.Collections.Generic.IReadOnlyList{System.Object},System.Int32)

Helper method to process pages of results from underlying service instance.

##### parameters




| name | description |

| --- | --- |

| results | List of results to process. |

| maxRecords | Total upper limit of records to process. |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.DeletePictureAsync(System.String)

Delete a picture previously posted.

##### parameters




| name | description |

| --- | --- |

| pictureId | Id of the picture. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.LoginAsync

Login with set of required requiredPermissions.

##### parameters




| name | description |

| --- | --- |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.LogoutAsync

Log out of the underlying service instance.

##### parameters




| name | description |

| --- | --- |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.RequestAsync(Microsoft.Toolkit.Uwp.Services.Facebook.FacebookDataConfig,System.Int32)

Request list data from service provider based upon a given config / query.

##### parameters




| name | description |

| --- | --- |

| config | TwitterDataConfig instance. |

| maxRecords | Upper limit of records to return. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.GetUserPictureInfoAsync

Returns the [FacebookPicture](T_Microsoft_Toolkit_Uwp_Services_Facebook_FacebookPicture) object associated with the logged user

##### parameters




| name | description |

| --- | --- |

| return |A |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.PostToFeedAsync(System.String,System.String,System.String,System.String)

Enables posting data to the timeline of the underlying service provider instance.

##### parameters




| name | description |

| --- | --- |

| title | Title of the post. |

| description | Description of the post. |

| link | Link contained as part of the post. Cannot be null |

| pictureUrl | URL of a picture attached to this post. Can be null |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.PostToFeedAsync(System.String,System.String,System.String,Windows.Storage.Streams.IRandomAccessStreamWithContentType)

Enables posting a picture to the timeline using the Facebook dialog.

##### parameters




| name | description |

| --- | --- |

| title | Title of the post. |

| description | Description of the post. |

| pictureName | Picture name. |

| pictureStream | Picture stream to upload. |

| return |S |

### properties

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.Provider

Gets a reference to an instance of the underlying data provider.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.LoggedUser

Gets the current logged user name.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.WindowsStoreId

Gets a Windows Store ID associated with the current app

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.Instance

Gets public singleton property.

### fields

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.paginatedArray

Reference to paginated array object for handling multiple pages of returned service list data.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.instance

Private singleton field.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.permissions

List of permissions required by the app.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.queryResults

Strongly typed list of service query data.

#### Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.isInitialized

Field for tracking initialization status.
