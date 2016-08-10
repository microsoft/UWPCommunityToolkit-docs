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

* [Methods](#Methods)

### Methods

#### ReadTextFromLocalFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteTextToLocalFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteTextToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in well known folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || knownFolderId | The well known folder ID to use. | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteTextToFileAsync(Windows.Storage.StorageFolder fileLocation,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type || --- | --- | --- || fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) || text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteBytesToLocalFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | [Byte[]](https://msdn.microsoft.com/library/windows/apps/System.Byte) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteBytesToLocalCacheFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local cache folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | [Byte[]](https://msdn.microsoft.com/library/windows/apps/System.Byte) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteBytesToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to well known folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || knownFolderId | The well known folder ID to use. | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | [Byte[]](https://msdn.microsoft.com/library/windows/apps/System.Byte) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteBytesToFileAsync(Windows.Storage.StorageFolder fileLocation,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type || --- | --- | --- || fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) || bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | [Byte[]](https://msdn.microsoft.com/library/windows/apps/System.Byte) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadTextFromPackagedFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadTextFromLocalCacheFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### WriteTextToLocalCacheFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local cache folder/>.

##### Parameters



| Name | Description | Type || --- | --- | --- || text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || options | The creation collision options. Default is ReplaceExisting. | [CreationCollisionOption](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.CreationCollisionOption) || return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadTextFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || knownFolderId | The well known folder ID to use. | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadTextFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type || --- | --- | --- || fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesFromPackagedFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesFromLocalCacheFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesFromLocalFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### Parameters



| Name | Description | Type || --- | --- | --- || knownFolderId | The well known folder ID to use. | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### Parameters



| Name | Description | Type || --- | --- | --- || fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) || fileName | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |
##### Exceptions


| Type | Description || --- | --- || exception type | |


#### ReadBytesAsync(Windows.Storage.StorageFile file)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

##### Parameters



| Name | Description | Type || --- | --- | --- || file | The [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile). | [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) || return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |


#### GetFolderFromKnownFolderId(Windows.Storage.KnownFolderId knownFolderId)

Returns a [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) from a [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId)

##### Parameters



| Name | Description | Type || --- | --- | --- || knownFolderId | Folder Id | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || return |[StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) |

