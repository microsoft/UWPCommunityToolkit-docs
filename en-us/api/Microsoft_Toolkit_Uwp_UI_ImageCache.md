---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_ImageCache.htm
title: Microsoft.Toolkit.Uwp.UI.ImageCache API 
description: API page for Microsoft.Toolkit.Uwp.UI.ImageCache
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ImageCache class

Represents a cache of BitmapImage objects that can be added to and removed from.
The cache also provides in-memory storage of BitmapImage objects to reduce reading from disc. The size of this in-memory storage is controlled by setting the ***MaxMemoryCacheCount*** property.
The in-memory storage follows FIFO (first in first out) and the caller can pass an optional parameter when calling ***PreCacheAsync*** to inform cache to use in-memory storage.

## Members

The **ImageCache** class has the following types of members:

### Methods

#### InitializeAsync(Windows.Storage.StorageFolder folder, System.String folderName)

This method is used to supply a folder within which the cache specific folder is created based on name provided.

##### Parameters
######| Name | Description | Type |

| folder | Folder where the cache specific folder is created | [StorageFolder](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.storagefolder.aspx) |

| folderName | The name given to the cache specific folder | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| returns | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### ClearAsync()

This method clears the entire cache and any images held within the in-memory storage.

##### Parameters
######| Name | Description | Type |

| returns | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### ClearAsync(System.TimeSpan duration)

This method deletes expired images from the cache and from within the in-memory cache.

##### Parameters
###### | Name | Description | Type |

| duration | This parameter is used to determine whether the image within cache has expired and should be deleted. | [TimeSpan](https://msdn.microsoft.com/en-us/library/windows/apps/system.timespan.aspx) |

| return | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### PreCacheAsync(System.Uri uri, System.String fileName, System.Boolean throwOnErro, System.Boolean storeToMemoryCache)

This method downloads the image at uri supplied and saves it to the cache with the file name supplied. It also optionally loads the image into in-memory cache

##### Parameters
######| Name | Description | Type |

| uri | Uri of the file to precache. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |

| fileName | The name used by the cache when saving the downloaded image | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| throwOnError | Optional parameter that allows for errors to be thrown. Default is to silently handle them. | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| storeToMemoryCache | Optional parameter that determines whether the image is also loaded to the in-memory cache or not. | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| return | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### GetFromCacheAsync(System.Uri uri, System.String fileName, System.Boolean throwOnError)

Retrieves the image from the cache if it exists and has not expired. Otherwise the image is downloaded from uri supplied and the image is returned.

##### Parameters
######| Name | Description | Type |

| uri | Uri of the file to download. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |

| fileName | The name used by the cache when saving the downloaded image. | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| throwOnError | Optional parameter that allows for errors to be thrown. Default is to silently handle them. | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| return | [Task<BitmapImage>](https://msdn.microsoft.com/en-us/library/windows/apps/dd321424.aspx) |

### Properties

#### CacheDuration

Gets or sets the duration that determines the lifetime of images within the cache.


#### MaxMemoryCacheCount

Gets or sets the maximum number of images allowed in the in-memory storage.