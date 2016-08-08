
# TwitterOAuthRequest class

OAuth request.

## Members

The **TwitterOAuthRequest** class has this types of members

* [methods](#methods)

### methods

#### ExecuteGetAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens)

HTTP Get request to specified Uri.

##### parameters



| name | description | type || --- | --- | --- || requestUri | Uri to make OAuth request. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || tokens | Tokens to pass in request. | [TwitterOAuthTokens](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokens.md) || return |String result. |
#### ExecutePostAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens)

HTTP Post request to specified Uri.

##### parameters



| name | description | type || --- | --- | --- || requestUri | Uri to make OAuth request. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || tokens | Tokens to pass in request. | [TwitterOAuthTokens](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokens.md) || return |String result. |
#### ExecutePostMultipartAsync(System.Uri requestUri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens tokens,System.String boundary,System.Byte[] content)

HTTP Post request to specified Uri.

##### parameters



| name | description | type || --- | --- | --- || requestUri | Uri to make OAuth request. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || tokens | Tokens to pass in request. | [TwitterOAuthTokens](Microsoft_Toolkit_Uwp_Services_Twitter_TwitterOAuthTokens.md) || boundary | Boundary used to separate data. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || content | Data to post to server. | [Byte[]](https://msdn.microsoft.com/library/windows/apps/System.Byte) || return |String result. |