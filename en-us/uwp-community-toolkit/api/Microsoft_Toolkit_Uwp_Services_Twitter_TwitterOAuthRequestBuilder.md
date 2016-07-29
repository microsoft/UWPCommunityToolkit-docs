
# Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder class

OAuth request builder.

## Members

The **Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.#ctor(System.Uri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens,System.String)

Initializes a new instance of the [TwitterOAuthRequestBuilder](T_Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthRequestBuilder) class.            Authorization request builder.

##### parameters




| name | description |

| --- | --- |

| requestUri | Request Uri. |

| tokens | Tokens to form request. |

| method | Method to use with request. |

### methods

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GetAuthHeaderParameters

Get list of auth header parameters.

##### parameters




| name | description |

| --- | --- |

| return |L |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GetEncodedUri(System.Uri,System.Collections.Generic.IEnumerable{Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter})

Get encoded Uri.

##### parameters




| name | description |

| --- | --- |

| requestUri | Request uri. |

| parameters | List of parameters. |

| return |E |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GenerateNonce

Generate nonce.

##### parameters




| name | description |

| --- | --- |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GenerateTimeStamp

Generate timestamp string.

##### parameters




| name | description |

| --- | --- |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GenerateSignature

Generate signature.

##### parameters




| name | description |

| --- | --- |

| return |G |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GenerateAuthorizationHeader

Generate authorization header.

##### parameters




| name | description |

| --- | --- |

| return |G |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.GetSignParameters

Get list of sign parameters.

##### parameters




| name | description |

| --- | --- |

| return |L |

### properties

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.SignatureMethod

Gets signature method.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.ConsumerKey

Gets consumer key.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.ConsumerSecret

Gets consumer secret.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Verb

Gets or sets HTTP verb for request.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.TokenSecret

Gets access token secret.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Signature

Gets signature getter.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.AuthorizationHeader

Gets authorization header getter.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Token

Gets access token.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.EncodedRequestUri

Gets encoded Request Uri.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.RequestUriWithoutQuery

Gets request Uri without query.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.QueryParams

Gets list of query parameters.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Version

Gets version.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Nonce

Gets nonce.

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Timestamp

Gets timestamp.

### fields

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequestBuilder.Realm

Realm for request.
