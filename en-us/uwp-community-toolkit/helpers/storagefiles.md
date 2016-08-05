---
permalink: /en-US/helpers/storagefiles.htm
title: StorageFilesHelper utility from UWP Community Toolkit
description: Static class of utility functions for reading and writing text of bytes from files within UWP applications
keywords: windows, app, toolkit, UWP, helpers, file, storage, embedded file, read text, read bytes, write bytes, write text
layout: default
search.product: eADQiWindows 10XVcnh
---

## StorageFileHelper

The StorageFileHelper is a static utility class that provides functions to help with reading and writing of text and bytes to the disk.  These functions are all wrapped into Async tasks to make them easy to consume from a UI thread.


## Example

**NOTE:** There is no UI for this helper.  It is a C# helper without a visual component.

```C#

	// NOTE This must be used from an async function
	string myText = "Great information that the users wants to keep";
	
	// Save some text to a file named appFilename.txt (in the local cache folder)
	var storageFile = await StorageFileHelper.WriteTextToLocalCacheFileAsync(myText, "appFilename.txt");
	
	// Load some text from a file named appFilename.txt in the local cache folder	
	string loadedText = await StorageFileHelper.ReadTextFromLocalCacheFileAsync("appFilename.txt");
	
	// Save some text to a file named appFilename.txt (in the local folder)
	storageFile = await StorageFileHelper.WriteTextToLocalFileAsync(myText, "appFilename.txt");
	
	// Load some text from a file named appFilename.txt in the local folder	
	loadedText = await StorageFileHelper.ReadTextFromLocalFileAsync("appFilename.txt");

```

## Platforms

Windows 10 SDK 10586 or higher

## API
* [Storage File Helper source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/StorageFileHelper.cs)
* [Storage File Helper API documentation](../api/Microsoft_Toolkit_Uwp_StorageFileHelper.htm)
