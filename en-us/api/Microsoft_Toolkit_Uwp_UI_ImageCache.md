---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_ImageCache.htm
title: Microsoft.Toolkit.Uwp.UI.ImageCache API 
description: API page for Microsoft.Toolkit.Uwp.UI.ImageCache
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# ImageCache class

Provides methods and tools to cache images in a temporary local folder

## Members

The **ImageCache** class has the following types of members:

### Methods

#### ClearAsync(System.Nullable(System.TimeSpan) duration)

call this method to clear the entire cache.

##### Parameters



| Name | Description | Type |
| --- | --- | --- |
| duration | Use this parameter to define a timespan from now to select cache entries to delete. | System.Nullable(System.TimeSpan) |
| return |Task |


#### GetFromCacheAsync(System.Uri uri)

Load a specific image from the cache. If the image is not in the cache, ImageCache will try to download and store it.

##### Parameters



| Name | Description | Type |
| --- | --- | --- |
| uri | Uri of the image. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |
| return |a BitmapImage |


#### GetCacheFileName(System.Uri uri)

Gets the local cache file name associated with a specified Uri.

##### Parameters



| Name | Description | Type |
| --- | --- | --- |
| uri | Uri of the resource. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) |
| return |Filename associated with the Uri. |


### Properties

#### CacheDuration

Gets or sets the life duration of every cache entry.

#### MaxMemoryCacheSize

Gets or sets the size of in-memory cache, which serves as an additional layer of chaching, providing better performance when same images are requested multiple times (like in long virtualized lists of images). It is set to 0 by default, which means in-memory caching is disabled by default. 


