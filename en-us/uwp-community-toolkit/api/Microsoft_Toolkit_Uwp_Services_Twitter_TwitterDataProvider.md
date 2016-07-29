
# Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider class

Data Provider for connecting to Twitter service.

## Members

The **Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.#ctor(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens)

Initializes a new instance of the [TwitterDataProvider](T_Microsoft_Toolkit_Uwp_Services_Twitter_TwitterDataProvider) class.            Constructor.

##### parameters




| name | description |

| --- | --- |

| tokens | OAuth tokens for request. |

### methods

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.UploadPicture(Windows.Storage.Streams.IRandomAccessStream)

Publish a picture to Twitter user's medias.

##### parameters




| name | description |

| --- | --- |

| stream | Picture stream. |

| return |M |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetTimeStamp

Generate timestamp.

##### parameters




| name | description |

| --- | --- |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetNonce

Generate nonce.

##### parameters




| name | description |

| --- | --- |

| return |N |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.ExchangeRequestTokenForAccessToken(System.String)

Extract and initialize access tokens.

##### parameters




| name | description |

| --- | --- |

| webAuthResultResponseData | WAB data containing appropriate tokens. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetSignature(System.String,System.String)

Generate request signature.

##### parameters




| name | description |

| --- | --- |

| sigBaseString | Base string. |

| consumerSecretKey | Consumer secret key. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetUserAsync(System.String)

Retrieve user data.

##### parameters




| name | description |

| --- | --- |

| screenName | User screen name or null for current logged user |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetUserTimeLineAsync``1(System.String,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Retrieve user timeline data with specific parser.

##### parameters




| name | description |

| --- | --- |

| screenName | User screen name. |

| maxRecords | Upper record limit. |

| parser | Specific results parser. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.SearchAsync``1(System.String,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Search for specific hash tag with specific parser.

##### parameters




| name | description |

| --- | --- |

| hashTag | Hash tag. |

| maxRecords | Upper record limit. |

| parser | Specific results parser. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.LoginAsync

Log user in to Twitter.

##### parameters




| name | description |

| --- | --- |

| return |B |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.Logout

Log user out of Twitter.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.TweetStatus(System.String,Windows.Storage.Streams.IRandomAccessStream[])

Tweets a status update.

##### parameters




| name | description |

| --- | --- |

| tweet | Tweet text. |

| pictures | Pictures to attach to the tweet (up to 4). |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetSignatureBaseStringParams(System.String,System.String,System.String,System.String)

Build signature base string.

##### parameters




| name | description |

| --- | --- |

| consumerKey | Consumer Key. |

| nonce | Nonce. |

| timeStamp | Timestamp. |

| additionalParameters | Any additional parameter name/values that need appending to base string. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetDefaultParser(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig)

Returns parser implementation for specified configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetDataAsync``1(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig,System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Wrapper around REST API for making data request.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

| maxRecords | Upper limit for records returned. |

| parser | IParser implementation for interpreting results. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.ValidateConfig(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig)

Check validity of configuration.

##### parameters




| name | description |

| --- | --- |

| config | Query configuration. |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.ExtractTokenFromResponse(System.String,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokenType)

Extract requested token from the REST API response string.

##### parameters




| name | description |

| --- | --- |

| getResponse | REST API response string. |

| tokenType | Token type to retrieve. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.GetHomeTimeLineAsync``1(System.Int32,Microsoft.Toolkit.Uwp.Services.IParser{``0})

Get home time line data.

##### parameters




| name | description |

| --- | --- |

| maxRecords | Upper record limit. |

| parser | Specific result parser. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.InitializeRequestAccessTokens(System.String)

Package up token request.

##### parameters




| name | description |

| --- | --- |

| twitterCallbackUrl | Callback Uri. |

| return |S |

### properties

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.LoggedIn

Gets a value indicating whether the provider is already logged in

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.UserScreenName

Gets or sets logged in user information.

### fields

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.tokens

Base Url for service.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.vault

Password vault used to store access tokens

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataProvider.BaseUrl

Base Url for service.
