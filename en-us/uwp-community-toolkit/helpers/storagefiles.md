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

**NOTE** There is no UI for this helper.  It is a C# helper without a visual component.

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

Windows 10 SDK 10240 or higher

## API

```C#

public static System.Threading.Tasks.Task<byte[]> GetBytesFromFileAsync(Windows.Storage.StorageFile file)
    Member of Microsoft.Windows.Toolkit.StorageFileHelper

Summary:
Gets a byte array from a Windows.Storage.StorageFile.

Parameters:
file: The Windows.Storage.StorageFile.

Returns:
Returns the stored System.Byte array.

public static System.Threading.Tasks.Task<byte[]> GetBytesFromFilePathAsync(string filePath)
    Member of Microsoft.Windows.Toolkit.StorageFileHelper

Summary:
Gets a byte array from a Windows.Storage.StorageFile based on a file path string.

Parameters:
filePath: The System.String file path.

Returns:
Returns the stored System.Byte array.

Exceptions:
System.ArgumentNullException: Exception thrown if the filePath is null or empty.

public static System.Threading.Tasks.Task<string> GetTextFromFilePathAsync(string filePath)
    Member of Microsoft.Windows.Toolkit.StorageFileHelper

Summary:
Gets a string value from a Windows.Storage.StorageFile based on a file path string.

Parameters:
filePath: The System.String file path.

Returns:
Returns the stored System.String value.

Exceptions:
System.ArgumentNullException: Exception thrown if the filePath is null or empty.

public static System.Threading.Tasks.Task<Windows.Storage.StorageFile> SaveBytesToFileAsync(Windows.Storage.StorageFolder fileLocation, byte[] bytes, string fileName, string fileExtension, [Windows.Storage.CreationCollisionOption options = 1])
    Member of Microsoft.Windows.Toolkit.StorageFileHelper

Summary:
Saves an array of bytes to a Windows.Storage.StorageFile in the given Windows.Storage.StorageFolder.

Parameters:
fileLocation: The Windows.Storage.StorageFolder to save the file in.
bytes: The System.Byte array to save to the file.
fileName: The System.String name for the file.
fileExtension: The extension for the file.
options: The creation collision options. Default is ReplaceExisting.

Returns:
Returns the saved Windows.Storage.StorageFile containing the bytes.

Exceptions:
System.ArgumentNullException: Exception thrown if the file location or file name are null or empty.

public static System.Threading.Tasks.Task<Windows.Storage.StorageFile> SaveTextToFileAsync(Windows.Storage.StorageFolder fileLocation, string text, string fileName, [string fileExtension = .txt], [Windows.Storage.CreationCollisionOption options = 1])
    Member of Microsoft.Windows.Toolkit.StorageFileHelper

Summary:
Saves a string value to a Windows.Storage.StorageFile in the given Windows.Storage.StorageFolder.

Parameters:
fileLocation: The Windows.Storage.StorageFolder to save the file in.
text: The System.String value to save to the file.
fileName: The System.String name for the file.
fileExtension: The extension for the file. Default is .txt.
options: The creation collision options. Default is ReplaceExisting.

Returns:
Returns the saved Windows.Storage.StorageFile containing the text.

Exceptions:
System.ArgumentNullException: Exception thrown if the file location or file name are null or empty.

```