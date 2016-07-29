
# Microsoft.Toolkit.Uwp.StreamHelper class

This class provides static helper methods for streams.

## Members

The **Microsoft.Toolkit.Uwp.StreamHelper** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.StreamHelper.IsPackagedFileExistsAsync(System.String)

Test if a file exists in the application installation folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetHTTPStreamAsync(System.Uri)

Get the response stream returned by a HTTP get request.

##### parameters




| name | description |

| --- | --- |

| uri | Uri to request. |

| return |R |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetPackagedFileStreamAsync(System.String,Windows.Storage.FileAccessMode)

Return a stream to a specified file from the installation folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| accessMode | File access mode. Default is read. |

| return |F |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetLocalFileStreamAsync(System.String,Windows.Storage.FileAccessMode)

Return a stream to a specified file from the application local folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| accessMode | File access mode. Default is read. |

| return |F |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetLocalCacheFileStreamAsync(System.String,Windows.Storage.FileAccessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| accessMode | File access mode. Default is read. |

| return |F |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetKnowFoldersFileStreamAsync(Windows.Storage.KnownFolderId,System.String,Windows.Storage.FileAccessMode)

Return a stream to a specified file from the application local cache folder.

##### parameters




| name | description |

| --- | --- |

| knownFolderId | The well known folder ID to use |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| accessMode | File access mode. Default is read. |

| return |F |

#### Microsoft.Toolkit.Uwp.StreamHelper.GetHTTPStreamToStorageFileAsync(System.Uri,Windows.Storage.StorageFile)

Get the response stream returned by a HTTP get request and save it to a local file.

##### parameters




| name | description |

| --- | --- |

| uri | Uri to request. |

| targetFile | StorageFile to save the stream to. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.IsLocalFileExistsAsync(System.String)

Test if a file exists in the application local folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.IsLocalCacheFileExistsAsync(System.String)

Test if a file exists in the application local cache folder.

##### parameters




| name | description |

| --- | --- |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.IsKnownFolderFileExistsAsync(Windows.Storage.KnownFolderId,System.String)

Test if a file exists in the application local cache folder.

##### parameters




| name | description |

| --- | --- |

| knownFolderId | The well known folder ID to use |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.IsFileExistsAsync(Windows.Storage.StorageFolder,System.String)

Test if a file exists in the application local folder.

##### parameters




| name | description |

| --- | --- |

| workingFolder | Folder to use. |

| relativeFileName | Relative name of the file to open. Can contains subfolders. |

| return |T |

#### Microsoft.Toolkit.Uwp.StreamHelper.ReadTextAsync(Windows.Storage.Streams.IRandomAccessStream,System.Text.Encoding)

Read stream content as a string.

##### parameters




| name | description |

| --- | --- |

| stream | Stream to read from. |

| encoding | Encoding to use. Can be set to null (ASCII will be used in this case). |

| return |S |
