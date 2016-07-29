---
permalink: /en-US/helpers/storagefiles.html
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

	StorageFolder workingFolder = ApplicationData.Current.LocalFolder;
	
	string myText = "Great information that the users wants to keep";
	
	// Save some text to a file names appFilename (.txt is the default extension)
	var storageFile = await StorageFileHelper.SaveTextToFileAsync(workingFolder, myText, "appFilename");
	

	// Load some text from a file named appFilename.txt in the local folder	
	string loadedText = await StorageFileHelper.GetTextFromFilePathAsync(workingFolder.Path + Path.DirectorySeparatorChar + "appFilename.txt");

```

## Platforms

Windows 10 SDK 10586 or higher

## API

[Storage File Helper Source](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/StorageFileHelper.cs)
