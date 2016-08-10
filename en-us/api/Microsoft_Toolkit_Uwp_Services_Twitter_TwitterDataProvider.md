---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataProvider.htm
title: Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider API 
description: API page for Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# TwitterDataProvider class

Data Provider for connecting to Twitter service.

## Members

The **TwitterDataProvider** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [TwitterDataProvider](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataProvider.htm) class. Constructor.

##### parameters



| name | description | type || --- | --- | --- || tokens | OAuth tokens for request. | [TwitterOAuthTokens](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokens.htm) |


### methods

#### UploadPicture(Windows.Storage.Streams.IRandomAccessStream stream)

Publish a picture to Twitter user's medias.

##### parameters



| name | description | type || --- | --- | --- || stream | Picture stream. | [IRandomAccessStream](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.Streams.IRandomAccessStream) || return |Media ID |


#### GetTimeStamp()

Generate timestamp.

##### parameters



| name | description | type || --- | --- | --- || return |Timestamp. |


#### GetNonce()

Generate nonce.

##### parameters



| name | description | type || --- | --- | --- || return |Nonce. |


#### ExchangeRequestTokenForAccessToken(System.String webAuthResultResponseData)

Extract and initialize access tokens.

##### parameters



| name | description | type || --- | --- | --- || webAuthResultResponseData | WAB data containing appropriate tokens. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Success or failure. |


#### GetSignature(System.String sigBaseString,System.String consumerSecretKey)

Generate request signature.

##### parameters



| name | description | type || --- | --- | --- || sigBaseString | Base string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || consumerSecretKey | Consumer secret key. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Signature. |


#### GetUserAsync(System.String screenName)

Retrieve user data.

##### parameters



| name | description | type || --- | --- | --- || screenName | User screen name or null for current logged user | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns user data. |


#### GetUserTimeLineAsync``1(System.String screenName,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Retrieve user timeline data with specific parser.

##### parameters



| name | description | type || --- | --- | --- || screenName | User screen name. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Specific results parser. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Returns strongly typed list of results. |


#### SearchAsync``1(System.String hashTag,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Search for specific hash tag with specific parser.

##### parameters



| name | description | type || --- | --- | --- || hashTag | Hash tag. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Specific results parser. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Returns strongly typed list of results. |


#### LoginAsync()

Log user in to Twitter.

##### parameters



| name | description | type || --- | --- | --- || return |Boolean indicating login success. |


#### Logout()

Log user out of Twitter.



#### TweetStatus(System.String tweet,Windows.Storage.Streams.IRandomAccessStream[] pictures)

Tweets a status update.

##### parameters



| name | description | type || --- | --- | --- || tweet | Tweet text. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || pictures | Pictures to attach to the tweet (up to 4). | [IRandomAccessStream[]](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.Streams.IRandomAccessStream) || return |Success or failure. |


#### GetSignatureBaseStringParams(System.String consumerKey,System.String nonce,System.String timeStamp,System.String additionalParameters)

Build signature base string.

##### parameters



| name | description | type || --- | --- | --- || consumerKey | Consumer Key. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || nonce | Nonce. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || timeStamp | Timestamp. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || additionalParameters | Any additional parameter name/values that need appending to base string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Signature base string. |


#### GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig config)

Returns parser implementation for specified configuration.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [TwitterDataConfig](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataConfig.htm) || return |Strongly typed parser. |


#### GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig config,System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Wrapper around REST API for making data request.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [TwitterDataConfig](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataConfig.htm) || maxRecords | Upper limit for records returned. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | IParser implementation for interpreting results. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Strongly typed list of results. |


#### ValidateConfig(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig config)

Check validity of configuration.

##### parameters



| name | description | type || --- | --- | --- || config | Query configuration. | [TwitterDataConfig](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataConfig.htm) |


#### ExtractTokenFromResponse(System.String getResponse,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokenType tokenType)

Extract requested token from the REST API response string.

##### parameters



| name | description | type || --- | --- | --- || getResponse | REST API response string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || tokenType | Token type to retrieve. | [TwitterOAuthTokenType](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokenType.htm) || return |Required token. |


#### GetHomeTimeLineAsync``1(System.Int32 maxRecords,Microsoft.Toolkit.Uwp.Services.IParser(TT0) parser)

Get home time line data.

##### parameters



| name | description | type || --- | --- | --- || maxRecords | Upper record limit. | [Int32](https://msdn.microsoft.com/library/windows/apps/System.Int32) || parser | Specific result parser. | Microsoft.Toolkit.Uwp.Services.IParser(TT0) || return |Return strong typed list of results. |


#### InitializeRequestAccessTokens(System.String twitterCallbackUrl)

Package up token request.

##### parameters



| name | description | type || --- | --- | --- || twitterCallbackUrl | Callback Uri. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Success or failure. |


### properties

#### LoggedIn

Gets a value indicating whether the provider is already logged in



#### UserScreenName

Gets or sets logged in user information.



### fields

#### tokens

Base Url for service.



#### vault

Password vault used to store access tokens



#### BaseUrl

Base Url for service.


