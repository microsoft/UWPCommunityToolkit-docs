---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_CacheBase.htm
title: Microsoft.Toolkit.Uwp.UI.CacheBase API 
description: API page for Microsoft.Toolkit.Uwp.UI.CacheBase
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# CacheBase<T> class

Represents a strongly typed cache of objects that can be added to and removed as desired.

## Members

The **CacheBase<T>** class has the following types of members:

### Methods

#### InitializeAsync(Windows.Storage.StorageFolder folder, System.String folderName)

this method is used supply a folder within which cache specific folder is created based on name provided.

##### Parameters
######| Name | Description | Type |

| folder | folder where cache specific folder is created | [StorageFolder](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.storagefolder.aspx) |

| folderName | the name given to cache specific folder | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| returns | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### ClearAsync()

this method clears the entire cache and any items held within the in-memory storage.

##### Parameters
######| Name | Description | Type |

| returns | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### ClearAsync(System.TimeSpan duration)

this method delete expired items from the cache and from within the in-memory cache.

##### Parameters
###### | Name | Description | Type |

| duration | this parameter is used to determine where item within cache has expired and should be delete or not. | [TimeSpan](https://msdn.microsoft.com/en-us/library/windows/apps/system.timespan.aspx) |

| return | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### PreCacheAsync(System.Uri uri, System.String fileName, System.Boolean throwOnErro, System.Boolean storeToMemoryCache)

This method downloads the file at uri supplied and saves it to the cache with the file name supplied. It also optionally loads the item into in-memory cache

##### Parameters
######| Name | Description | Type |

| uri | Uri of the item to precache. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |

| fileName | the name used by cache when saving the item downloaded | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| throwOnError | optional parameter that allows for errors to be silently handled | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| storeToMemoryCache | optional parameter that determines whether the item is also loaded to in-memory cache or not. | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| return | [Task](https://msdn.microsoft.com/en-us/library/windows/apps/system.threading.tasks.task.aspx) |


#### GetFromCacheAsync(System.Uri uri, System.String fileName, System.Boolean throwOnError)

Retrieves a strongly typed item from cache if it exists and has not expired. Otherwise the file is downloaded from uri supplied and item is returned.

##### Parameters
######| Name | Description | Type |

| uri | Uri of the item to download. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |

| fileName | the name used by cache when saving the item downloaded | [String](https://msdn.microsoft.com/en-us/library/windows/apps/system.string.aspx) |

| throwOnError | optional parameter that allows for errors to be silently handled | [Boolean](https://msdn.microsoft.com/en-us/library/windows/apps/system.boolean.aspx) |

| return | [Task<TResult>](https://msdn.microsoft.com/en-us/library/windows/apps/dd321424.aspx) |

### Properties

#### CacheDuration

Gets or sets the life duration of every cache entry.


#### MaxMemoryCacheCount

Gets or sets the maximum number of items allowed in the in-memory storage.