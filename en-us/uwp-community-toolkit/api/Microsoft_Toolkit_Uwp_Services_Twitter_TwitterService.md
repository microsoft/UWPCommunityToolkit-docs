
# Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService class

Class for connecting to Twitter.

## Members

The **Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.#ctor

Initializes a new instance of the [TwitterService](T_Microsoft_Toolkit_Uwp_Services_Twitter_TwitterService) class.            Default private constructor.

### methods

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.Initialize(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens)

Initialize underlying provider with relevent token information.

##### parameters




| name | description |

| --- | --- |

| oAuthTokens | Token instance. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.Logout

Log user out of Twitter.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.TweetStatusAsync(System.String,Windows.Storage.Streams.IRandomAccessStream[])

Post a Tweet with associated pictures.

##### parameters




| name | description |

| --- | --- |

| message | Tweet message. |

| pictures | Pictures to attach to the tweet (up to 4). |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.LoginAsync

Log user in to Twitter.

##### parameters




| name | description |

| --- | --- |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.RequestAsync(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig,System.Int32)

Request list data from service provider based upon a given config / query.

##### parameters




| name | description |

| --- | --- |

| config | TwitterDataConfig instance. |

| maxRecords | Upper limit of records to return. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.GetUserTimeLineAsync(System.String,System.Int32)

Retrieve user timeline data.

##### parameters




| name | description |

| --- | --- |

| screenName | User screen name. |

| maxRecords | Upper record limit. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.Initialize(System.String,System.String,System.String)

Initialize underlying provider with relevent token information.

##### parameters




| name | description |

| --- | --- |

| consumerKey | Consumer key. |

| consumerSecret | Consumer secret. |

| callbackUri | Callback URI. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.GetUserAsync(System.String)

Retrieve user data.

##### parameters




| name | description |

| --- | --- |

| screenName | User screen name or null for current logged user. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.SearchAsync(System.String,System.Int32)

Search for specific hash tag.

##### parameters




| name | description |

| --- | --- |

| hashTag | Hash tag. |

| maxRecords | Upper record limit. |

| return |R |

### properties

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.Provider

Gets a reference to an instance of the underlying data provider.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.UserScreenName

Gets the current logged in user screen name.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.Instance

Gets public singleton property.

### fields

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.tokens

Field for tracking oAuthTokens.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.instance

Private singleton field.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.isInitialized

Field for tracking initialization status.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterService.twitterDataProvider

Private singleton field for TwitterDataProvider.
