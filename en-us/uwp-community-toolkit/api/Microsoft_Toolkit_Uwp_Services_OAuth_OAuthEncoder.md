
# OAuthEncoder class

OAuth Encoder.

## Members

The **OAuthEncoder** class has this types of members

* [methods](#methods)

### methods

#### UrlEncode(System.String value)

Url encode input string.

##### parameters



| name | description | type || --- | --- | --- || value | Input string. | System.String || return |Encoded string. |
#### UrlEncode(System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) parameters)

Encode list of parameters.

##### parameters



| name | description | type || --- | --- | --- || parameters | List of parameters. | System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) || return |Encoded string of parameters. |
#### GenerateHash(System.String input,System.String key)

Generate hash from input string and key.

##### parameters



| name | description | type || --- | --- | --- || input | Input string. | System.String || key | Key string. | System.String || return |Hash string. |