---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_StorageFileHelper.htm
title: Microsoft.Toolkit.Uwp.StorageFileHelper API 
description: API page for Microsoft.Toolkit.Uwp.StorageFileHelper
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# StorageFileHelper class

This class provides static helper methods for [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

## Members

The **StorageFileHelper** class has the following types of members:

### Methods

#### ReadTextFromLocalFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### Parameters



| Name | Description | Type |


#### WriteTextToLocalFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local folder/>.

##### Parameters



| Name | Description | Type |


#### WriteTextToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in well known folder/>.

##### Parameters



| Name | Description | Type |


#### WriteTextToFileAsync(Windows.Storage.StorageFolder fileLocation,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type |


#### WriteBytesToLocalFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local folder/>.

##### Parameters



| Name | Description | Type |


#### WriteBytesToLocalCacheFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local cache folder/>.

##### Parameters



| Name | Description | Type |


#### WriteBytesToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to well known folder/>.

##### Parameters



| Name | Description | Type |


#### WriteBytesToFileAsync(Windows.Storage.StorageFolder fileLocation,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type |


#### ReadTextFromPackagedFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### Parameters



| Name | Description | Type |


#### ReadTextFromLocalCacheFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### Parameters



| Name | Description | Type |


#### WriteTextToLocalCacheFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local cache folder/>.

##### Parameters



| Name | Description | Type |


#### ReadTextFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### Parameters



| Name | Description | Type |


#### ReadTextFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type |


#### ReadBytesFromPackagedFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### Parameters



| Name | Description | Type |


#### ReadBytesFromLocalCacheFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### Parameters



| Name | Description | Type |


#### ReadBytesFromLocalFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### Parameters



| Name | Description | Type |


#### ReadBytesFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### Parameters



| Name | Description | Type |


#### ReadBytesFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type |


#### ReadBytesAsync(Windows.Storage.StorageFile file)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

##### Parameters



| Name | Description | Type |


#### GetFolderFromKnownFolderId(Windows.Storage.KnownFolderId knownFolderId)

Returns a [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) from a [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId)

##### Parameters



| Name | Description | Type |
