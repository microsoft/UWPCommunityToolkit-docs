---
permalink: /en-US/helpers/storagefiles.htm
title: StorageFilesHelper utility 
description: Static class of utility functions for reading and writing text of bytes from files within UWP applications
keywords: windows, app, toolkit, UWP, helpers, file, storage, embedded file, read text, read bytes, write bytes, write text
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

## StorageFileHelper

The StorageFileHelper is a static utility class that provides functions to help with reading and writing of text and bytes to the disk.  These functions are all wrapped into Async tasks.


## Example

{% highlight csharp %}

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

{% endhighlight %}

You can find more examples in our [unit tests](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/UnitTests/Helpers/Test_StorageFileHelper.cs)

## Platforms

Windows 10 SDK 10586 or higher

## API
* [Storage File Helper source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/StorageFileHelper.cs)
* [Storage File Helper API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_StorageFileHelper.htm)
