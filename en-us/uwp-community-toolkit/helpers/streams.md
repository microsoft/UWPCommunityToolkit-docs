---
permalink: /en-US/helpers/streams.html
title: StreamsHelper utility from UWP Community Toolkit
description: Utility class to help with common stream operations needed by UWP applications
keywords: windows, app, toolkit, UWP, helpers, stream, content file, sandbox file, download uri
layout: default
search.product: eADQiWindows 10XVcnh
---


# Streams Helper

There are several operations that apps need commonly to do against their APPX, or from the Internet that are not easy.  This helper class wraps up some of the most common operations we need in multiple apps.

##Some common scenarios
Get a stream from a URI using an in memory stream (rather than needing to download it first).
Download a URI and write it to a local storage file.
Get a packaged file stream (files included in the APPX as Content | do not copy).
Does a file exist local folder?
Read text from a file using ASCII or specified encoding.

## Example

**NOTE** There is no UI for this helper.  It is a C# helper without a visual component.

```C#

	// Get access to a text file that was included in solution as Content | do not copy local
    using (var stream = await StreamHelper.GetPackagedFileStreamAsync("Assets/Sub/test.txt"))
    {
		// Read the contents as ASCII text
        var readText = await stream.ReadTextAsync();
    }

```

## Platforms

Windows 10 SDK 10240 or higher

## API

```C#

public static System.Threading.Tasks.Task<bool> DownloadHTTPStreamAsync(System.Uri uri, Windows.Storage.StorageFile file)
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Get the response stream returned by a HTTP get request and save it to a local file.

Parameters:
uri: Uri to request.
file: StorageFile to save the stream to.

Returns:
True if success.

public static System.Threading.Tasks.Task<Windows.Storage.Streams.IRandomAccessStream> GetHTTPStreamAsync(System.Uri uri)
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Get the response stream returned by a HTTP get request.

Parameters:
uri: Uri to request.

Returns:
Response stream

public static System.Threading.Tasks.Task<Windows.Storage.Streams.IRandomAccessStream> GetLocalFileStreamAsync(string fullFileName, [Windows.Storage.FileAccessMode accessMode = 0])
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Return a stream to a specified file from the application local folder.

Parameters:
fullFileName: Full name of the file to open. Can contains subfolders.
accessMode: File access mode. Default is read.

Returns:
File stream

public static System.Threading.Tasks.Task<Windows.Storage.Streams.IRandomAccessStream> GetPackagedFileStreamAsync(string fullFileName, [Windows.Storage.FileAccessMode accessMode = 0])
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Return a stream to a specified file from the installation folder.

Parameters:
fullFileName: Full name of the file to open. Can contains subfolders.
accessMode: File access mode. Default is read.

Returns:
File stream

public static System.Threading.Tasks.Task<bool> IsLocalFileExistsAsync(string fullFileName)
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Test if a file exists in the application local folder.

Parameters:
fullFileName: Full name of the file to open. Can contains subfolders.

Returns:
True if file exists.

public static System.Threading.Tasks.Task<string> ReadTextAsync(this Windows.Storage.Streams.IRandomAccessStream stream, [System.Text.Encoding encoding = null])
    Member of Microsoft.Windows.Toolkit.StreamHelper

Summary:
Read stream content as a string.

Parameters:
stream: Stream to read from.
encoding: Encoding to use. Can be set to null (ASCII will be used in this case).

Returns:
Stream content.

```