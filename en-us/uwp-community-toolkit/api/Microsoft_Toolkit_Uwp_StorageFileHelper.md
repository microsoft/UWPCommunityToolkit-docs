
# StorageFileHelper class

This class provides static helper methods for [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

## Members

The **StorageFileHelper** class has this types of members

* [methods](#methods)

### methods

#### SaveBytesToFileAsync(Windows.Storage.StorageFolder fileLocation,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
| --- | --- | --- |
| fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | Windows.Storage.StorageFolder |
| bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | System.Byte[] |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveTextToLocalFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | System.String |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveTextToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in well known folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| knownFolderId | The well known folder ID to use. | Windows.Storage.KnownFolderId |
| text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | System.String |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveTextToFileAsync(Windows.Storage.StorageFolder fileLocation,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
| --- | --- | --- |
| fileLocation | The [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) to save the file in. | Windows.Storage.StorageFolder |
| text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | System.String |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveBytesToLocalFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | System.Byte[] |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveBytesToLocalCacheFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local cache folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | System.Byte[] |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveBytesToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to well known folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| knownFolderId | The well known folder ID to use. | Windows.Storage.KnownFolderId |
| bytes | The [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array to save to the file. | System.Byte[] |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the bytes. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### SaveTextToLocalCacheFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local cache folder/>.

##### parameters



| name | description | type |
| --- | --- | --- |
| text | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) value to save to the file. | System.String |
| fileName | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) name for the file. | System.String |
| options | The creation collision options. Default is ReplaceExisting. | Windows.Storage.CreationCollisionOption |
| return |Returns the saved [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) containing the text. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### ReadTextFromPackagedFile(System.String relativePath)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### parameters



| name | description | type |
| --- | --- | --- |
| relativePath | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | System.String |
| return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### ReadTextFromLocalCacheFile(System.String relativePath)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### parameters



| name | description | type |
| --- | --- | --- |
| relativePath | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | System.String |
| return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### ReadTextFromLocalFile(System.String relativePath)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### parameters



| name | description | type |
| --- | --- | --- |
| relativePath | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | System.String |
| return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### ReadTextFromKnownFoldersFile(Windows.Storage.KnownFolderId knownFolderId,System.String relativePath)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### parameters



| name | description | type |
| --- | --- | --- |
| knownFolderId | The well known folder ID to use. | Windows.Storage.KnownFolderId |
| relativePath | The relative [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | System.String |
| return |Returns the stored [String](https://msdn.microsoft.com/library/windows/apps/System.String) value. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### GetBytesFromFilePathAsync(System.String filePath)

Gets a byte array from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) based on a file path string.

##### parameters



| name | description | type |
| --- | --- | --- |
| filePath | The [String](https://msdn.microsoft.com/library/windows/apps/System.String) file path. | System.String |
| return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |

#### GetBytesFromFileAsync(Windows.Storage.StorageFile file)

Gets a byte array from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

##### parameters



| name | description | type |
| --- | --- | --- |
| file | The [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile). | Windows.Storage.StorageFile |
| return |Returns the stored [Byte](https://msdn.microsoft.com/library/windows/apps/System.Byte) array. |

#### GetFolderFromKnownFolderId(Windows.Storage.KnownFolderId knownFolderId)

Returns a [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) from a [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId)

##### parameters



| name | description | type |
| --- | --- | --- |
| knownFolderId | Folder Id | Windows.Storage.KnownFolderId |
| return |[StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) |
