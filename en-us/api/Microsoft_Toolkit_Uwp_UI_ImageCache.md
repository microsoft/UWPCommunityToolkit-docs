---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_ImageCache.htm
title: Microsoft.Toolkit.Uwp.UI.ImageCache API 
description: API page for Microsoft.Toolkit.Uwp.UI.ImageCache
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# ImageCache class

Provides methods and tools to cache images in a temporary local folder

## Members

The **ImageCache** class has this types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### ClearAsync(System.Nullable(System.TimeSpan) duration)

call this method to clear the entire cache.

##### parameters



| name | description | type || --- | --- | --- || duration | Use this parameter to define a timespan from now to select cache entries to delete. | System.Nullable(System.TimeSpan) || return |Task |


#### GetFromCacheAsync(System.Uri uri)

Load a specific image from the cache. If the image is not in the cache, ImageCache will try to download and store it.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri of the image. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || return |a BitmapImage |


#### GetCacheFileName(System.Uri uri)

Gets the local cache file name associated with a specified Uri.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri of the resource. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || return |Filename associated with the Uri. |


### properties

#### CacheDuration

Gets or sets the life duration of every cache entry.


