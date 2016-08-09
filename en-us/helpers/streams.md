---
permalink: /en-US/helpers/streams.htm
title: StreamsHelper utility
description: Utility class to help with common stream operations needed by UWP applications
keywords: windows, app, toolkit, UWP, helpers, stream, content file, sandbox file, download uri
layout: default
search.product: eADQiWindows 10XVcnh
---

# Streams Helper

There are several operations that apps need commonly to do against their APPX, or from the Internet that are not easy.  This helper class wraps up some of the most common operations we need in multiple apps.

##Some common scenarios

* Get a stream from a URI using an in memory stream (rather than needing to download it first).
* Download a URI and write it to a local storage file.
* Get a packaged file stream (files included in the APPX as Content | do not copy).
* Does a file exist local folder?
* Read text from a file using ASCII or specified encoding.

## Example

**NOTE:** There is no UI for this helper.  It is a C# helper without a visual component.

```C#

    // Get access to a text file that was included in solution as Content | do not copy local
    using (var stream = await StreamHelper.GetPackagedFileStreamAsync("Assets/Sub/test.txt"))
    {
	// Read the contents as ASCII text
        var readText = await stream.ReadTextAsync();
    }
    
    // Get access to a HTTP ressource
    using (var stream = await StreamHelper.GetHttpStreamAsync(new Uri("http://dev.windows.com")))
    {
        ...
    }

```

You can find more examples in our [unit tests](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/UnitTests/Helpers/Test_StreamHelper.cs)

## Platforms

Windows 10 SDK 10586 or higher

## API

* [Stream Helper source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/StreamHelper.cs)
* [Stream File Helper API documentation]({{site.baseurl}}/api/Microsoft_Toolkit_Uwp_StreamHelper.htm)

