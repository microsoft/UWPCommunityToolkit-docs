
# OAuthEncoder class

OAuth Encoder.

## Members

The **OAuthEncoder** class has this types of members

* [methods](#methods)

### methods

#### UrlEncode(System.String value)

Url encode input string.

##### parameters



| name | description | type || --- | --- | --- || value | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Encoded string. |
#### UrlEncode(System.Collections.Generic.IEnumerable(Microsoft.Toolkit.Uwp.Services.OAuth.OAuthParameter) parameters)

Encode list of parameters.

##### parameters



| name | description | type || --- | --- | --- || parameters | List of parameters. | [OAuthParameter)](System_Collections_Generic_IEnumerable_Microsoft_Toolkit_Uwp_Services_OAuth_OAuthParameter_.md) || return |Encoded string of parameters. |
#### GenerateHash(System.String input,System.String key)

Generate hash from input string and key.

##### parameters



| name | description | type || --- | --- | --- || input | Input string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || key | Key string. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Hash string. |