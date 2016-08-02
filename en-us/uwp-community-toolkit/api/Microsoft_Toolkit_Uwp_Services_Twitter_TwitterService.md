
# TwitterService class

Class for connecting to Twitter.

## Members

The **TwitterService** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [TwitterService](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterService.md) class.            Default private constructor.

### methods

#### Initialize(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens oAuthTokens)

Initialize underlying provider with relevent token information.

##### parameters



| name | description | type |
| --- | --- | --- |
| oAuthTokens | Token instance. | Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens |
| return |Success or failure. |

#### Logout()

Log user out of Twitter.

#### TweetStatusAsync(System.String message,Windows.Storage.Streams.IRandomAccessStream[] pictures)

Post a Tweet with associated pictures.

##### parameters



| name | description | type |
| --- | --- | --- |
| message | Tweet message. | System.String |
| pictures | Pictures to attach to the tweet (up to 4). | Windows.Storage.Streams.IRandomAccessStream[] |
| return |Returns success or failure of post request. |

#### LoginAsync()

Log user in to Twitter.

##### parameters



| name | description | type |
| --- | --- | --- |
| return |Returns success or failure of login attempt. |

#### RequestAsync(Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig config,System.Int32 maxRecords)

Request list data from service provider based upon a given config / query.

##### parameters



| name | description | type |
| --- | --- | --- |
| config | TwitterDataConfig instance. | Microsoft.Toolkit.Uwp.Services.Twitter.TwitterDataConfig |
| maxRecords | Upper limit of records to return. | System.Int32 |
| return |Strongly typed list of data returned from the service. |

#### GetUserTimeLineAsync(System.String screenName,System.Int32 maxRecords)

Retrieve user timeline data.

##### parameters



| name | description | type |
| --- | --- | --- |
| screenName | User screen name. | System.String |
| maxRecords | Upper record limit. | System.Int32 |
| return |Returns strongly typed list of results. |

#### Initialize(System.String consumerKey,System.String consumerSecret,System.String callbackUri)

Initialize underlying provider with relevent token information.

##### parameters



| name | description | type |
| --- | --- | --- |
| consumerKey | Consumer key. | System.String |
| consumerSecret | Consumer secret. | System.String |
| callbackUri | Callback URI. | System.String |
| return |Success or failure. |

#### GetUserAsync(System.String screenName)

Retrieve user data.

##### parameters



| name | description | type |
| --- | --- | --- |
| screenName | User screen name or null for current logged user. | System.String |
| return |Returns user data. |

#### SearchAsync(System.String hashTag,System.Int32 maxRecords)

Search for specific hash tag.

##### parameters



| name | description | type |
| --- | --- | --- |
| hashTag | Hash tag. | System.String |
| maxRecords | Upper record limit. | System.Int32 |
| return |Returns strongly typed list of results. |

### properties

#### Provider

Gets a reference to an instance of the underlying data provider.

#### UserScreenName

Gets the current logged in user screen name.

#### Instance

Gets public singleton property.

### fields

#### tokens

Field for tracking oAuthTokens.

#### instance

Private singleton field.

#### isInitialized

Field for tracking initialization status.

#### twitterDataProvider

Private singleton field for TwitterDataProvider.
