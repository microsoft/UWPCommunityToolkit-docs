
# StreamHelper class

This class provides static helper methods for streams.

## Members

The **StreamHelper** class has this types of members

* [methods](#methods)

### methods

#### IsPackagedFileExistsAsync(System.String fileName)

Test if a file exists in the application installation folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || return |True if file exists. |
#### GetHttpStreamAsync(System.Uri uri)

Get the response stream returned by a HTTP get request.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri to request. | System.Uri || return |Response stream |
#### GetPackagedFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the installation folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || accessMode | File access mode. Default is read. | Windows.Storage.FileAccessMode || return |File stream |
#### GetLocalFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || accessMode | File access mode. Default is read. | Windows.Storage.FileAccessMode || return |File stream |
#### GetLocalCacheFileStreamAsync(System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || accessMode | File access mode. Default is read. | Windows.Storage.FileAccessMode || return |File stream |
#### GetKnowFoldersFileStreamAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName,Windows.Storage.FileAccessMode accessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || knownFolderId | The well known folder ID to use | Windows.Storage.KnownFolderId || fileName | Relative name of the file to open. Can contains subfolders. | System.String || accessMode | File access mode. Default is read. | Windows.Storage.FileAccessMode || return |File stream |
#### GetHttpStreamToStorageFileAsync(System.Uri uri,Windows.Storage.StorageFile targetFile)

Get the response stream returned by a HTTP get request and save it to a local file.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri to request. | System.Uri || targetFile | StorageFile to save the stream to. | Windows.Storage.StorageFile || return |True if success. |
#### IsLocalFileExistsAsync(System.String fileName)

Test if a file exists in the application local folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || return |True if file exists. |
#### IsLocalCacheFileExistsAsync(System.String fileName)

Test if a file exists in the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || fileName | Relative name of the file to open. Can contains subfolders. | System.String || return |True if file exists. |
#### IsKnownFolderFileExistsAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Test if a file exists in the application local cache folder.

##### parameters



| name | description | type || --- | --- | --- || knownFolderId | The well known folder ID to use | Windows.Storage.KnownFolderId || fileName | Relative name of the file to open. Can contains subfolders. | System.String || return |True if file exists. |
#### IsFileExistsAsync(Windows.Storage.StorageFolder workingFolder,System.String fileName)

Test if a file exists in the application local folder.

##### parameters



| name | description | type || --- | --- | --- || workingFolder | Folder to use. | Windows.Storage.StorageFolder || fileName | Relative name of the file to open. Can contains subfolders. | System.String || return |True if file exists. |
#### ReadTextAsync(Windows.Storage.Streams.IRandomAccessStream stream,System.Text.Encoding encoding)

Read stream content as a string.

##### parameters



| name | description | type || --- | --- | --- || stream | Stream to read from. | Windows.Storage.Streams.IRandomAccessStream || encoding | Encoding to use. Can be set to null (ASCII will be used in this case). | System.Text.Encoding || return |Stream content. |