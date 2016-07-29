
# Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequest class

OAuth request.

## Members

The **Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequest** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequest.ExecuteGetAsync(System.Uri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens)

HTTP Get request to specified Uri.

##### parameters




| name | description |

| --- | --- |

| requestUri | Uri to make OAuth request. |

| tokens | Tokens to pass in request. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequest.ExecutePostAsync(System.Uri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens)

HTTP Post request to specified Uri.

##### parameters




| name | description |

| --- | --- |

| requestUri | Uri to make OAuth request. |

| tokens | Tokens to pass in request. |

| return |S |

#### Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthRequest.ExecutePostMultipartAsync(System.Uri,Microsoft.Toolkit.Uwp.Services.Twitter.TwitterOAuthTokens,System.String,System.Byte[])

HTTP Post request to specified Uri.

##### parameters




| name | description |

| --- | --- |

| requestUri | Uri to make OAuth request. |

| tokens | Tokens to pass in request. |

| boundary | Boundary used to separate data. |

| content | Data to post to server. |

| return |S |
