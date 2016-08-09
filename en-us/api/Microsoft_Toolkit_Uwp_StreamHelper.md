---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_StreamHelper.htm
title: Microsoft.Toolkit.Uwp.StreamHelper API 
description: API page for Microsoft.Toolkit.Uwp.StreamHelper
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# StreamHelper class

This class provides static helper methods for streams.

## Members

The **StreamHelper** class has this types of members

* [methods](#methods)

### methods

#### IsPackagedFileExistsAsync(System.String fileName)

Test if a file exists in the application installation folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |True if file exists. |


#### GetHttpStreamAsync(System.Uri uri)

Get the response stream returned by a HTTP get request.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri to request. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || return |Response stream |


#### GetPackagedFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the installation folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || accessMode | File access mode. Default is read. | [FileAccessMode](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.FileAccessMode) || return |File stream |


#### GetLocalFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || accessMode | File access mode. Default is read. | [FileAccessMode](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.FileAccessMode) || return |File stream |


#### GetLocalCacheFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || accessMode | File access mode. Default is read. | [FileAccessMode](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.FileAccessMode) || return |File stream |


#### GetKnowFoldersFileStreamAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || knownFolderId | The well known folder ID to use | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || accessMode | File access mode. Default is read. | [FileAccessMode](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.FileAccessMode) || return |File stream |


#### GetHttpStreamToStorageFileAsync(System.Uri uri,Windows.Storage.StorageFile targetFile)

Get the response stream returned by a HTTP get request and save it to a local file.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri to request. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || targetFile | StorageFile to save the stream to. | [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) || return |True if success. |


#### IsLocalFileExistsAsync(System.String fileName)

Test if a file exists in the application local folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |True if file exists. |


#### IsLocalCacheFileExistsAsync(System.String fileName)

Test if a file exists in the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |True if file exists. |


#### IsKnownFolderFileExistsAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Test if a file exists in the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || knownFolderId | The well known folder ID to use | [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId) || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |True if file exists. |


#### IsFileExistsAsync(Windows.Storage.StorageFolder workingFolder,System.String fileName)

Test if a file exists in the application local folder.

##### parameters



| name | description | type || --- | --- | --- || workingFolder | Folder to use. | [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) || fileName | Relative name of the file to open. Can contains subfolders. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || return |True if file exists. |


#### ReadTextAsync(Windows.Storage.Streams.IRandomAccessStream stream,System.Text.Encoding encoding)

Read stream content as a string.

##### parameters



| name | description | type || --- | --- | --- || stream | Stream to read from. | [IRandomAccessStream](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.Streams.IRandomAccessStream) || encoding | Encoding to use. Can be set to null (ASCII will be used in this case). | [Encoding](https://msdn.microsoft.com/library/windows/apps/System.Text.Encoding) || return |Stream content. |

