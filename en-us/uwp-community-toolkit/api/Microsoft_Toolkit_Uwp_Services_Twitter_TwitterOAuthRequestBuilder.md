
# TwitterOAuthRequestBuilder class

OAuth request builder.

## Members

The **TwitterOAuthRequestBuilder** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [TwitterOAuthRequestBuilder](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthRequestBuilder.md) class. Authorization request builder.

##### parameters



| name | description | type || --- | --- | --- || requestUri | Request Uri. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || tokens | Tokens to form request. | [TwitterOAuthTokens](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokens.md) || method | Method to use with request. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |
### methods

#### GetAuthHeaderParameters()

Get list of auth header parameters.

##### parameters



| name | description | type || --- | --- | --- || return |List of auth header paramters. |
#### GetEncodedUri(System.Uri requestUri,System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) parameters)

Get encoded Uri.

##### parameters



| name | description | type || --- | --- | --- || requestUri | Request uri. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || parameters | List of parameters. | System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) || return |Encoded Uri. |
#### GenerateNonce()

Generate nonce.

##### parameters



| name | description | type || --- | --- | --- || return |String nonce. |
#### GenerateTimeStamp()

Generate timestamp string.

##### parameters



| name | description | type || --- | --- | --- || return |Timestamp string. |
#### GenerateSignature()

Generate signature.

##### parameters



| name | description | type || --- | --- | --- || return |Generated signature string. |
#### GenerateAuthorizationHeader()

Generate authorization header.

##### parameters



| name | description | type || --- | --- | --- || return |Generated authorizatin header string. |
#### GetSignParameters()

Get list of sign parameters.

##### parameters



| name | description | type || --- | --- | --- || return |List of sign parameters. |
### properties

#### SignatureMethod

Gets signature method.

#### ConsumerKey

Gets consumer key.

#### ConsumerSecret

Gets consumer secret.

#### Verb

Gets or sets HTTP verb for request.

#### TokenSecret

Gets access token secret.

#### Signature

Gets signature getter.

#### AuthorizationHeader

Gets authorization header getter.

#### Token

Gets access token.

#### EncodedRequestUri

Gets encoded Request Uri.

#### RequestUriWithoutQuery

Gets request Uri without query.

#### QueryParams

Gets list of query parameters.

#### Version

Gets version.

#### Nonce

Gets nonce.

#### Timestamp

Gets timestamp.

### fields

#### Realm

Realm for request.
