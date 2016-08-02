
# TwitterOAuthRequest class

OAuth request.

## Members

The **TwitterOAuthRequest** class has this types of members

* [methods](#methods)

### methods

#### ExecuteGetAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens)

HTTP Get request to specified Uri.

##### parameters



| name | description | type |
| --- | --- | --- |
| requestUri | Uri to make OAuth request. | System.Uri |
| tokens | Tokens to pass in request. | Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens |
| return |String result. |

#### ExecutePostAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens)

HTTP Post request to specified Uri.

##### parameters



| name | description | type |
| --- | --- | --- |
| requestUri | Uri to make OAuth request. | System.Uri |
| tokens | Tokens to pass in request. | Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens |
| return |String result. |

#### ExecutePostMultipartAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens,System.String boundary,System.Byte[] content)

HTTP Post request to specified Uri.

##### parameters



| name | description | type |
| --- | --- | --- |
| requestUri | Uri to make OAuth request. | System.Uri |
| tokens | Tokens to pass in request. | Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens |
| boundary | Boundary used to separate data. | System.String |
| content | Data to post to server. | System.Byte[] |
| return |String result. |
