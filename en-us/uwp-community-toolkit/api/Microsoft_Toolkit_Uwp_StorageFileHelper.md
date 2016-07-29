
# Microsoft.Toolkit.Uwp.StorageFileHelper class

This class provides static helper methods for [StorageFile](T_Windows_Storage_StorageFile).

## Members

The **Microsoft.Toolkit.Uwp.StorageFileHelper** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveBytesToFileAsync(Windows.Storage.StorageFolder,System.Byte[],System.String,Windows.Storage.CreationCollisionOption)

Saves an array of bytes to a [StorageFile](T_Windows_Storage_StorageFile) in the given [StorageFolder](T_Windows_Storage_StorageFolder).

##### parameters




| name | description |

| --- | --- |

| fileLocation | The [StorageFolder](T_Windows_Storage_StorageFolder) to save the file in. |

| bytes | The [Byte](T_System_Byte) array to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveTextToLocalFileAsync(System.String,System.String,Windows.Storage.CreationCollisionOption)

Saves a string value to a [StorageFile](T_Windows_Storage_StorageFile) in application local folder/>.

##### parameters




| name | description |

| --- | --- |

| text | The [String](T_System_String) value to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveTextToKnownFolderFileAsync(Windows.Storage.KnownFolderId,System.String,System.String,Windows.Storage.CreationCollisionOption)

Saves a string value to a [StorageFile](T_Windows_Storage_StorageFile) in well known folder/>.

##### parameters




| name | description |

| --- | --- |

| knownFolderId | The well known folder ID to use. |

| text | The [String](T_System_String) value to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveTextToFileAsync(Windows.Storage.StorageFolder,System.String,System.String,Windows.Storage.CreationCollisionOption)

Saves a string value to a [StorageFile](T_Windows_Storage_StorageFile) in the given [StorageFolder](T_Windows_Storage_StorageFolder).

##### parameters




| name | description |

| --- | --- |

| fileLocation | The [StorageFolder](T_Windows_Storage_StorageFolder) to save the file in. |

| text | The [String](T_System_String) value to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveBytesToLocalFileAsync(System.Byte[],System.String,Windows.Storage.CreationCollisionOption)

Saves an array of bytes to a [StorageFile](T_Windows_Storage_StorageFile) to application local folder/>.

##### parameters




| name | description |

| --- | --- |

| bytes | The [Byte](T_System_Byte) array to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveBytesToLocalCacheFileAsync(System.Byte[],System.String,Windows.Storage.CreationCollisionOption)

Saves an array of bytes to a [StorageFile](T_Windows_Storage_StorageFile) to application local cache folder/>.

##### parameters




| name | description |

| --- | --- |

| bytes | The [Byte](T_System_Byte) array to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveBytesToKnownFolderFileAsync(Windows.Storage.KnownFolderId,System.Byte[],System.String,Windows.Storage.CreationCollisionOption)

Saves an array of bytes to a [StorageFile](T_Windows_Storage_StorageFile) to well known folder/>.

##### parameters




| name | description |

| --- | --- |

| knownFolderId | The well known folder ID to use. |

| bytes | The [Byte](T_System_Byte) array to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.SaveTextToLocalCacheFileAsync(System.String,System.String,Windows.Storage.CreationCollisionOption)

Saves a string value to a [StorageFile](T_Windows_Storage_StorageFile) in application local cache folder/>.

##### parameters




| name | description |

| --- | --- |

| text | The [String](T_System_String) value to save to the file. |

| fileName | The [String](T_System_String) name for the file. |

| options | The creation collision options. Default is ReplaceExisting. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.ReadTextFromPackagedFile(System.String)

Gets a string value from a [StorageFile](T_Windows_Storage_StorageFile) located in the application installation folder.

##### parameters




| name | description |

| --- | --- |

| relativePath | The relative [String](T_System_String) file path. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.ReadTextFromLocalCacheFile(System.String)

Gets a string value from a [StorageFile](T_Windows_Storage_StorageFile) located in the application local cache folder.

##### parameters




| name | description |

| --- | --- |

| relativePath | The relative [String](T_System_String) file path. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.ReadTextFromLocalFile(System.String)

Gets a string value from a [StorageFile](T_Windows_Storage_StorageFile) located in the application local folder.

##### parameters




| name | description |

| --- | --- |

| relativePath | The relative [String](T_System_String) file path. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.ReadTextFromKnownFoldersFile(Windows.Storage.KnownFolderId,System.String)

Gets a string value from a [StorageFile](T_Windows_Storage_StorageFile) located in a well known folder.

##### parameters




| name | description |

| --- | --- |

| knownFolderId | The well known folder ID to use. |

| relativePath | The relative [String](T_System_String) file path. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.GetBytesFromFilePathAsync(System.String)

Gets a byte array from a [StorageFile](T_Windows_Storage_StorageFile) based on a file path string.

##### parameters




| name | description |

| --- | --- |

| filePath | The [String](T_System_String) file path. |

| return |R |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.GetBytesFromFileAsync(Windows.Storage.StorageFile)

Gets a byte array from a [StorageFile](T_Windows_Storage_StorageFile).

##### parameters




| name | description |

| --- | --- |

| file | The [StorageFile](T_Windows_Storage_StorageFile). |

| return |R |

#### Microsoft.Toolkit.Uwp.StorageFileHelper.GetFolderFromKnownFolderId(Windows.Storage.KnownFolderId)

Returns a [StorageFolder](T_Windows_Storage_StorageFolder) from a [KnownFolderId](T_Windows_Storage_KnownFolderId)

##### parameters




| name | description |

| --- | --- |

| knownFolderId | Folder Id |

| return |¿ |
